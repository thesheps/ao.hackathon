var app = angular.module("aoMetrics", ["chart.js", "ngAria", "ngAnimate", "ngMaterial", "md.data.table"]);

app.config(function ($mdDateLocaleProvider) {
    $mdDateLocaleProvider.formatDate = function (date) {
        return moment(date).format("DD/MM/YYYY");
    };
});

app.run(function($rootScope) {
    $rootScope.dialogs = 0;
});