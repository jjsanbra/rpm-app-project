const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'rpm-app',

  remotes: {
    'rpm-admin': 'http://localhost:4201/remoteEntry.json',
    'rpm-rankings': 'http://localhost:4202/remoteEntry.json',
    'rpm-teams': 'http://localhost:4203/remoteEntry.json',
    'rpm-users': 'http://localhost:4204/remoteEntry.json',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    '@angular/cdk': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    'primeng': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    'primeng/icons': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    'primeng/api': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    'primeng/config': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/platform-browser': { singleton: true, strictVersion: true },
    '@angular/platform-browser/animations': { singleton: true, strictVersion: true },
    '@angular/platform-browser/animations/async': { singleton: true, strictVersion: true },
    'rxjs': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    'primeicons',
    '@softarc/native-federation-runtime',
    /^@primeuix\//,
    /^@primeng\/themes/,
  ],
});
