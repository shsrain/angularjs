/**
 * 创建模块
 *
 */
angular.module("app", ['common','home','help','blog']);

/**
 * 启动模块
 *
 */
angular.element(document).ready(function() {
    angular.bootstrap(document.getElementById("app"),["app"]);
});

/**
 * 模块配置
 *
 */
angular.module("app").config([function(){

}]);

/**
 * 配置设置
 *
 */
angular.module('app').constant('MONGOLAB_CONFIG', {
  baseUrl: '/databases/',
  dbName: 'ascrum'
});

/**
 * 消息提醒配置
 *
 */
angular.module('app').constant('MESSAGES', {
  'errors.route.changeError':'路由错误',
  'crud.article.save.success':"文章保存成功",
  'crud.article.remove.success':"文章删除成功",
  'crud.article.remove.error':"文章删除失败",
  'crud.article.save.error':"文章保存失败{{id}}",
});

angular.module("app").controller('HeadCtrl', function($scope,MESSAGES) {
    //alert(MESSAGES['errors.route.changeError']);
});

angular.module("app").controller('BowerCtrl', function($scope,MESSAGES) {
    //alert(MESSAGES['crud.article.save.success']);
});

angular.module("app").controller('HeaderCtrl', function($scope,MESSAGES) {
    //alert(MESSAGES['crud.article.remove.success']);
});

angular.module("app").controller('FooterCtrl', function($scope,MESSAGES) {
    //alert(MESSAGES['crud.article.remove.error']);
});