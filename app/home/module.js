/**
 * 创建模块
 *
 */
angular.module("home", [
    'ui.router']);
    
/**
 * 执行注册后的启动服务
 *
 */
angular.module('home').run([
    'MyService',
    function(My){
}]);

/**
 * 服务提供者注册
 *
 */
angular.module('home').config([
    '$provide',
    function($provide) {

  // 提供者注入方式
  $provide.provider('MyProvider', function() {
      this.$get = function() {
          var result = {};
          result.greeting = 'MyProvider';
          return result;
      };
  });

  // 工厂注入方式
  $provide.factory('MyFactory',function(){
      var result = {};
      result.greeting = 'MyFactory';
      return result;
  });

  // 服务注入方式
  $provide.service('MyService',function(){
    this.greeting = 'MyService';
  });

  // 值对象注入方式
  $provide.constant('DEFINE','sdlfjdslflsdf');
  $provide.value('test','11111');
  
}]);

/**
 * 视图路由配置
 *
 */
angular.module('home').config([
    '$stateProvider', 
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('system-index',{
        url:"/system/index",
        views:{
            "main":{
                templateUrl:'partials/common/user.html',
                controller:'HomeCtrl'
            }            
        }
    });   
     $stateProvider.state('index-index',{
        url:"/index/index",
        views:{
            "main":{
                templateUrl:'partials/common/index.html',
                controller:'HomeCtrl'
            }            
        }
    });
    $stateProvider.state('user-show',{
        url:"/user/show?type&role",
        views:{
            "main":{
                templateUrl:'partials/common/user.html',
                controller:'HomeCtrl'
            }
        }
    });
    $stateProvider.state('log-show',{
        url:"/log/show",
        views:{
            "main":{
                templateUrl:'partials/common/log.html',
                controller:'HomeCtrl'
            }
        }
    }); 
    $stateProvider.state('gallery-index',{
        url:"/gallery/index",
        views:{
            "main":{
                templateUrl:'partials/common/gallery.html',
                controller:'HomeCtrl'
            }
        }
    });    
    $stateProvider.state('404',{
        url:"/404",
        views:{
            "main":{
                templateUrl:'partials/common/404.html',
                controller:'HomeCtrl'
            }
        }
    });     
    // 文章首页
    $stateProvider.state('article-index',{
        url:"/article/index",
        views:{
            "main":{
                templateUrl:'partials/article/index.html',
                controller:'HomeCtrl'
            }
        }
    });
    
    // 文章列表
    $stateProvider.state('article-list',{
        url:"/article/list",
        views:{
            "main":{
                templateUrl:'partials/article/list.html',
                controller:'HomeCtrl'
            }
        }
    });
    
    // 文章详细
    $stateProvider.state('article-show',{
        url:"/article/show?type&role",
        views:{
            "main":{
                templateUrl:'partials/article/show.html',
                controller:'HomeCtrl'
            }
        }
    });
}]);