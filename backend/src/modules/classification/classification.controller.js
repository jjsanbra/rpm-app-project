'use strict';

const classificationService = require('./classification.service');

async function getOfficialClassification(req, res, next) {
  try {
    const data = classificationService.getOfficialClassification(req.params.rankingId);
    res.json({ data, type: 'official' });
  } catch (err) { next(err); }
}

async function getProvisionalClassification(req, res, next) {
  try {
    const data = classificationService.getProvisionalClassification(req.params.rankingId);
    res.json({ data, type: 'provisional', note: 'Incluye resultados pendientes de confirmación.' });
  } catch (err) { next(err); }
}

module.exports = { getOfficialClassification, getProvisionalClassification };
