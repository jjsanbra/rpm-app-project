'use strict';

const nodemailer = require('nodemailer');
const config = require('../../config/env');

/**
 * email.service.js — Servicio de email desacoplado.
 *
 * Abstrae el proveedor de email para facilitar el cambio posterior
 * (ej: SendGrid, Mailgun, SES) sin modificar la lógica de negocio.
 *
 * Configuración mediante variables de entorno:
 * EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD, EMAIL_FROM
 */

let _transporter = null;

/**
 * Obtiene o crea el transporter de nodemailer (lazy init).
 */
async function getTransporter() {
  if (_transporter) return _transporter;

  // En desarrollo sin credenciales, usar Ethereal (test account) automáticamente
  if (config.env === 'development' && !config.email.user) {
    const testAccount = await nodemailer.createTestAccount();
    _transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    console.log('📧 Email service: usando Ethereal (dev). Preview URL disponible por email enviado.');
    return _transporter;
  }

  _transporter = nodemailer.createTransport({
    host: config.email.host,
    port: config.email.port,
    secure: config.email.port === 465,
    auth: {
      user: config.email.user,
      pass: config.email.password,
    },
  });

  return _transporter;
}

/**
 * Función base para enviar emails.
 * @param {object} options - { to, subject, html, text }
 */
async function send({ to, subject, html, text }) {
  if (config.env === 'test') {
    return { messageId: 'test-email-id', to, subject };
  }
  try {
    const transporter = await getTransporter();
    const info = await transporter.sendMail({
      from: config.email.from,
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]+>/g, ''),
    });

    if (config.env !== 'production') {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      if (previewUrl) {
        console.log(`📧 Email enviado a ${to}: ${previewUrl}`);
      }
    }

    return info;
  } catch (err) {
    console.error('[EMAIL ERROR]', err.message);
    // No propagar el error — el email no debe romper el flujo principal
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Templates de email
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Email de bienvenida al equipo con enlace para configurar contraseña.
 */
async function sendWelcomeEmail({ to, teamName, rankingName, setupLink }) {
  await send({
    to,
    subject: `¡Bienvenido al Ranking de Pádel! — ${rankingName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 12px; margin-bottom: 24px;">
          <h1 style="color: #00d4ff; margin: 0; font-size: 28px;">🎾 Padel Ranking</h1>
        </div>
        <h2>¡Bienvenido, ${teamName}!</h2>
        <p>Has sido registrado en el <strong>${rankingName}</strong>.</p>
        <p>Para acceder a tu zona de equipo, primero debes configurar tu contraseña:</p>
        <div style="text-align: center; margin: 32px 0;">
          <a href="${setupLink}" style="background: #00d4ff; color: #1a1a2e; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">
            Configurar contraseña
          </a>
        </div>
        <p style="color: #666; font-size: 14px;">Este enlace expira en 48 horas.</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">
        <h3>¿Cómo registrar resultados?</h3>
        <ol>
          <li>Inicia sesión con tu email y contraseña.</li>
          <li>Accede a la sección "Mis Partidos".</li>
          <li>Selecciona el partido y haz clic en "Registrar resultado".</li>
          <li>Introduce la fecha y el resultado por sets.</li>
          <li>El equipo rival recibirá una notificación para confirmar.</li>
        </ol>
        <h3>¿Olvidaste tu contraseña?</h3>
        <p>Puedes recuperarla desde la pantalla de login haciendo clic en "¿Olvidaste tu contraseña?"</p>
        <p style="color: #999; font-size: 12px; margin-top: 32px;">Padel Ranking App — No respondas a este email.</p>
      </body>
      </html>
    `,
  });
}

/**
 * Email de notificación de resultado registrado (al equipo rival para confirmar).
 */
async function sendResultNotificationEmail({
  to,
  rankingName,
  teamOneName,
  teamTwoName,
  matchDate,
  setsTeamOne,
  setsTeamTwo,
  pointsTeamOne,
  pointsTeamTwo,
  set1TeamOne,
  set1TeamTwo,
  set2TeamOne,
  set2TeamTwo,
  set3TeamOne,
  set3TeamTwo,
  gamesTeamOne,
  gamesTeamTwo,
  submittedByEmail,
  confirmLink,
  disputeLink,
}) {
  const winner = setsTeamOne > setsTeamTwo ? teamOneName : teamTwoName;
  const partials = [];
  if (set1TeamOne !== null && set1TeamOne !== undefined && set1TeamTwo !== null && set1TeamTwo !== undefined) {
    partials.push(`${set1TeamOne}-${set1TeamTwo}`);
  }
  if (set2TeamOne !== null && set2TeamOne !== undefined && set2TeamTwo !== null && set2TeamTwo !== undefined) {
    partials.push(`${set2TeamOne}-${set2TeamTwo}`);
  }
  if (set3TeamOne !== null && set3TeamOne !== undefined && set3TeamTwo !== null && set3TeamTwo !== undefined) {
    partials.push(`${set3TeamOne}-${set3TeamTwo}`);
  }
  const partialsStr = partials.length > 0 ? `Parciales: ${partials.join(', ')}` : '';

  await send({
    to,
    subject: `Resultado pendiente de confirmación — ${rankingName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 12px; margin-bottom: 24px;">
          <h1 style="color: #00d4ff; margin: 0; font-size: 28px;">🎾 Padel Ranking</h1>
        </div>
        <h2>Resultado pendiente de confirmación</h2>
        <p><strong>${rankingName}</strong></p>
        <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center;">
          <h3 style="margin: 0 0 16px 0;">${teamOneName} <span style="color: #999;">vs</span> ${teamTwoName}</h3>
          <div style="font-size: 48px; font-weight: bold; color: #1a1a2e; margin: 10px 0;">${setsTeamOne} — ${setsTeamTwo}</div>
          ${partialsStr ? `<p style="font-size: 16px; color: #0070f3; font-weight: bold; margin: 6px 0;">${partialsStr}</p>` : ''}
          <p style="color: #666; margin: 8px 0;">Fecha del partido: <strong>${matchDate}</strong></p>
          <p style="color: #666; margin: 8px 0;">Registrado por: <strong>${submittedByEmail}</strong></p>
        </div>
        <div style="background: #e8f4f8; border-radius: 8px; padding: 16px; margin: 16px 0;">
          <h4 style="margin: 0 0 8px 0;">Puntos calculados:</h4>
          <p style="margin: 4px 0;">${teamOneName}: <strong>${pointsTeamOne} pts</strong></p>
          <p style="margin: 4px 0;">${teamTwoName}: <strong>${pointsTeamTwo} pts</strong></p>
        </div>
        <p>Por favor, confirma o comunica una incidencia:</p>
        <div style="text-align: center; margin: 32px 0; display: flex; gap: 16px; justify-content: center;">
          <a href="${confirmLink}" style="background: #28a745; color: white; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
            ✅ Confirmar resultado
          </a>
          &nbsp;&nbsp;
          <a href="${disputeLink}" style="background: #dc3545; color: white; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
            ⚠️ Comunicar incidencia
          </a>
        </div>
        <p style="color: #999; font-size: 12px; margin-top: 32px;">Padel Ranking App — No respondas a este email.</p>
      </body>
      </html>
    `,
  });
}

/**
 * Email de resultado confirmado.
 */
async function sendResultConfirmedEmail({ to, rankingName, teamOneName, teamTwoName, matchDate, setsTeamOne, setsTeamTwo }) {
  await send({
    to,
    subject: `Resultado confirmado — ${rankingName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 12px; margin-bottom: 24px;">
          <h1 style="color: #00d4ff; margin: 0; font-size: 28px;">🎾 Padel Ranking</h1>
        </div>
        <h2 style="color: #28a745;">✅ Resultado confirmado</h2>
        <p><strong>${rankingName}</strong></p>
        <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center;">
          <h3 style="margin: 0 0 8px 0;">${teamOneName} vs ${teamTwoName}</h3>
          <div style="font-size: 36px; font-weight: bold; color: #28a745;">${setsTeamOne} — ${setsTeamTwo}</div>
          <p style="color: #666;">Fecha: ${matchDate}</p>
        </div>
        <p>La clasificación ha sido actualizada.</p>
        <p style="color: #999; font-size: 12px; margin-top: 32px;">Padel Ranking App</p>
      </body>
      </html>
    `,
  });
}

/**
 * Email de incidencia comunicada (al administrador).
 */
async function sendIncidentNotificationEmail({ to, rankingName, teamOneName, teamTwoName, incidentDescription, reportedByEmail }) {
  await send({
    to,
    subject: `⚠️ Incidencia reportada — ${rankingName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 12px; margin-bottom: 24px;">
          <h1 style="color: #00d4ff; margin: 0; font-size: 28px;">🎾 Padel Ranking</h1>
        </div>
        <h2 style="color: #dc3545;">⚠️ Nueva incidencia reportada</h2>
        <p><strong>${rankingName}</strong></p>
        <p>Partido: <strong>${teamOneName} vs ${teamTwoName}</strong></p>
        <p>Reportado por: <strong>${reportedByEmail}</strong></p>
        <div style="background: #fff3cd; border-radius: 8px; padding: 16px; margin: 16px 0;">
          <h4>Descripción:</h4>
          <p>${incidentDescription}</p>
        </div>
        <p>Por favor, revisa la incidencia en el panel de administración.</p>
        <p style="color: #999; font-size: 12px; margin-top: 32px;">Padel Ranking App</p>
      </body>
      </html>
    `,
  });
}

/**
 * Email de recuperación de contraseña.
 */
async function sendPasswordResetEmail({ to, resetLink }) {
  await send({
    to,
    subject: 'Recuperación de contraseña — Padel Ranking',
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 12px; margin-bottom: 24px;">
          <h1 style="color: #00d4ff; margin: 0; font-size: 28px;">🎾 Padel Ranking</h1>
        </div>
        <h2>Recuperación de contraseña</h2>
        <p>Has solicitado restablecer tu contraseña. Haz clic en el siguiente enlace:</p>
        <div style="text-align: center; margin: 32px 0;">
          <a href="${resetLink}" style="background: #00d4ff; color: #1a1a2e; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">
            Restablecer contraseña
          </a>
        </div>
        <p style="color: #666; font-size: 14px;">Este enlace expira en 2 horas. Si no has solicitado esto, ignora este email.</p>
        <p style="color: #999; font-size: 12px; margin-top: 32px;">Padel Ranking App</p>
      </body>
      </html>
    `,
  });
}

/**
 * Email de resolución de incidencia.
 */
async function sendIncidentResolvedEmail({ to, rankingName, resolution, status }) {
  await send({
    to,
    subject: `Incidencia resuelta — ${rankingName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 12px; margin-bottom: 24px;">
          <h1 style="color: #00d4ff; margin: 0; font-size: 28px;">🎾 Padel Ranking</h1>
        </div>
        <h2>Incidencia resuelta</h2>
        <p><strong>${rankingName}</strong></p>
        <p>Estado: <strong>${status}</strong></p>
        <div style="background: #f8f9fa; border-radius: 8px; padding: 16px; margin: 16px 0;">
          <h4>Resolución:</h4>
          <p>${resolution}</p>
        </div>
        <p style="color: #999; font-size: 12px; margin-top: 32px;">Padel Ranking App</p>
      </body>
      </html>
    `,
  });
}

module.exports = {
  send,
  sendWelcomeEmail,
  sendResultNotificationEmail,
  sendResultConfirmedEmail,
  sendIncidentNotificationEmail,
  sendPasswordResetEmail,
  sendIncidentResolvedEmail,
};
