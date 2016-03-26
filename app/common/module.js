/**
 * 创建模块
 *
 */
angular.module("common", []);
    
/**
 * 执行注册后的启动服务
 *
 */
angular.module('common').run();
/**
 * 服务提供者注册
 *
 */
angular.module('common').config([
    '$provide',
    function($provide) {

  // 服务注入方式
  $provide.service('MyService',function(){
    this.greeting = 'MyService';
  });
  
}]);