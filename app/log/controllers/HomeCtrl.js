/**
 * 主页控制器
 *
 */
function HomeCtrl(
    $scope,
    $location,
    test,
    articleModel,
    MyProvider,
    MyFactory,
    MyService,
    DEFINE,
    commonModel,
    $rootScope) {
        
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.name = "John Doe";
    $scope.updated = 0;

    $scope.toggle = function() {
        commonModel.setHeader($rootScope,{title:'sdfsdfdsf',keywords:'sdfsdfdsf',description:'description'});
        alert($location.search().role);
        $location.path('/article/show');
    };

    // 方法返回字符串
    $scope.fullName = function(a) {
        return a;
    };

    // 方法返回Json
    $scope.phones = function(){
        var data = [
            {"name": "Nexus S",
             "snippet": "Fast just got faster with Nexus S."},
            {"name": "Motorola XOOM™ with Wi-Fi",
             "snippet": "The Next, Next Generation tablet."},
            {"name": "MOTOROLA XOOM™",
             "snippet": "The Next, Next Generation tablet."}
          ];
          return $scope.phonesList = data;
    };

    // 数据更新侦听
    $scope.$watch('name',  function(newValue, oldValue) {
        if (newValue === oldValue) { return; }
        $scope.updated++;
    });

    // 获取服务器模型
    $scope.modelGet = function() {

        articleModel.get({
           articleId:2,
           success:function(data){
               $scope.serverData = data;
           }
        });
    };
}

/**
 * 注册控制器到模块
 *
 */
angular.module('home').controller('HomeCtrl', [
    '$scope',
    '$location',
    'test',
    'articleModel',
    'MyProvider',
    'MyFactory',
    'MyService',
    'DEFINE', 
    'commonModel',
    '$rootScope',
    HomeCtrl]);
