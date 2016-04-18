(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
    });
    $stateProvider
      .state("number", {
        url: "/",
        controller: "NumberCtrl as number",
        templateUrl: "/templates/number.html"
    });
  }
  angular
    .module("numbersToWords", ['ui.router'])
    .config(config);
})();