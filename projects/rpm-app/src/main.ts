import { initFederation } from '@angular-architects/native-federation';

const host = typeof window !== 'undefined' ? window.location.hostname : 'localhost';

initFederation({
  'rpm-admin': `http://${host}:4201/remoteEntry.json`,
  'rpm-rankings': `http://${host}:4202/remoteEntry.json`,
  'rpm-teams': `http://${host}:4203/remoteEntry.json`,
  'rpm-users': `http://${host}:4204/remoteEntry.json`,
  'rpm-live': `http://${host}:4205/remoteEntry.json`,
})
  .catch((err) => console.error(err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
