/**
 * 创建模块
 *
 */
angular.module("help", [
    'ui.router']);
    
/**
 * 执行注册后的启动服务
 *
 */
angular.module('help').run();

/**
 * 服务提供者注册
 *
 */
angular.module('help').config([
    '$provide',
    function($provide) {

}]);

/**
 * 视图路由配置
 *
 */
angular.module('help').config([
    '$stateProvider', 
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('help-show',{
        url:"/help/show",
        views:{
            "main":{
                templateUrl:'partials/common/help.html',
                controller:''
            }
        }
    });
}]);