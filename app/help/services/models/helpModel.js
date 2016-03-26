/**
 * 模型构造函数
 *
 */
function helpModel($http){
    // todo
}

/**
 * 定义模型原型链方法
 *
 */
 
// 获取
angular.injector(["help"]).invoke(['$http', function($http){
    
    helpModel.prototype.get = function () {
        return '帮助内容';
     }
    
}]); 

/**
 * 注册模型为服务并注入构造函数依赖
 *
 */
angular.module('help').service('helpModel', [
    '$http',
    helpModel]);

