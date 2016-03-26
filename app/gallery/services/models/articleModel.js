/**
 * 模型构造函数
 *
 */
function articleModel($http){
    // todo
}

/**
 * 定义模型原型链方法
 *
 */
 
// 获取
angular.injector(["home"]).invoke(['$http', function($http){
    
    articleModel.prototype.get = function (param) {
        $http.get("http://172.18.10.189:8888/api/DrugInfo/BindSelectSys")
        .success(function(response) {
            this.model = response;
            if(angular.isFunction(param.success)){
                param.success(this.model);
            }
        });
     }
    
}]); 


// 新增
articleModel.prototype.add = function(param){
    
}

// 更新
articleModel.prototype.update = function(param){
    
}

// 删除
articleModel.prototype.remove = function(param){
    
};

// 保存
articleModel.prototype.save = function(param){
    
};

/**
 * 注册模型为服务并注入构造函数依赖
 *
 */
angular.module('home').service('articleModel', [
    '$http',
    articleModel]);

