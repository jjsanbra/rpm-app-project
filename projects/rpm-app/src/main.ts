import { initFederation } from '@angular-architects/native-federation';

const isDev = typeof window !== 'undefined' && window.location.port === '4200';
const host = typeof window !== 'undefined' ? window.location.hostname : 'localhost';

initFederation(
  isDev
    ? {
        'rpm-admin': `http://${host}:4201/remoteEntry.json`,
        'rpm-rankings': `http://${host}:4202/remoteEntry.json`,
        'rpm-teams': `http://${host}:4203/remoteEntry.json`,
        'rpm-users': `http://${host}:4204/remoteEntry.json`,
        'rpm-live': `http://${host}:4205/remoteEntry.json`,
      }
    : {
        'rpm-admin': '/remotes/rpm-admin/remoteEntry.json',
        'rpm-rankings': '/remotes/rpm-rankings/remoteEntry.json',
        'rpm-teams': '/remotes/rpm-teams/remoteEntry.json',
        'rpm-users': '/remotes/rpm-users/remoteEntry.json',
        'rpm-live': '/remotes/rpm-live/remoteEntry.json',
      }
)
  .catch((err) => console.error('Federation init error:', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error('Bootstrap error:', err));

