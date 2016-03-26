/**
 * 模型构造函数
 *
 */
function commonModel($http){
    // todo
}

/**
 * 定义模型原型链方法
 *
 */
 
// 获取
angular.injector(["common"]).invoke([function(){
    
    commonModel.prototype.setHeader = function ($rootScope,param) {
        $rootScope.metaTitle = param.title;
        $rootScope.metaKeywords = param.keywords;
        $rootScope.metaDescription = param.description;
     }
    
}]); 

/**
 * 注册模型为服务并注入构造函数依赖
 *
 */
angular.module('common').service('commonModel', [
    '$http',
    commonModel]);

