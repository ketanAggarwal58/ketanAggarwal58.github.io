(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.dishes = '';
        $scope.message = '';
        $scope.checked = false;

        $scope.checkLunch = function() {
            if ($scope.dishes.trim().length === 0) {
                $scope.empty = true;
            } else {
                $scope.checked = true;
                $scope.empty = false;
                var aDishes = $scope.dishes.split(',');
                var aDishesWoEmptys = aDishes.filter(function(v) {
                    return v.trim() !== '';
                });

                if (aDishesWoEmptys.length <= 3) {
                    $scope.message = 'Enjoy!';
                } else {
                    $scope.message = 'Too much!';
                }
            }
        };
    }
})();
