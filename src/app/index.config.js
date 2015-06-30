function config ($logProvider, localStorageServiceProvider) {
  'ngInject';

  localStorageServiceProvider.setPrefix('test-shop-app');
}

export default config;
