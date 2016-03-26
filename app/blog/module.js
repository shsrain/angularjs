/**
 * 创建模块
 *
 */
angular.module("blog", [
    'ui.router']);
    
/**
 * 执行注册后的启动服务
 *
 */
angular.module('blog').run();

/**
 * 服务提供者注册
 *
 */
angular.module('blog').config([
    '$provide',
    function($provide) {

}]);

/**
 * 视图路由配置
 *
 */
angular.module('blog').config([
    '$stateProvider', 
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('form-index',{
        url:"/form/index",
        views:{
            "main":{
                templateUrl:'partials/common/form.html',
                controller:''
            }            
        }
    });
    $stateProvider.state('table-index',{
        url:"/table/index",
        views:{
            "main":{
                templateUrl:'partials/common/table.html',
                controller:''
            }            
        }
    }); 
    $stateProvider.state('blog-show',{
        url:"/blog/show?blogId",
        views:{
            "main":{
                templateUrl:'partials/common/form.html',
                controller:''
            }            
        }
    });    
    $stateProvider.state('blog-remove',{
        url:"/blog/remove?blogId",
        views:{
            "main":{
                templateUrl:'partials/common/form.html',
                controller:''
            }            
        }
    });
    
}]);