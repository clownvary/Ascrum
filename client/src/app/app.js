/**
 * Created by clownvary on 2015/9/11.
 * Email:vary_007@163.com
 */
angular.module('app', [])
    .controller('home', ['$rootScope', '$scope', function ($rootScope, $scope) {
        $rootScope.title = 'welcome';
        $scope.content = 'from scope'
    }]);