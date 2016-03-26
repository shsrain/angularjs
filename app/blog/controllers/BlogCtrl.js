/**
 * 主页控制器
 *
 */
function BlogCtrl(
    $scope,
    $rootScope,
    $location,
    commonModel) {
    $scope.blogList = [
            {"title": "Nexus S 1",
             "type": "Nexus S 1",
             "anchor": "Nexus S 1",
             "time": "Nexus S 1",
             "blogId": 1},
            {"title": "Nexus S 2",
             "type": "Nexus S 2",
             "anchor": "Nexus S 2",
             "time": "Nexus S 2",
             "blogId": 2},
            {"title": "Nexus S 3",
             "type": "Nexus S 3",
             "anchor": "Nexus S 3",
             "time": "Nexus S 3",
             "blogId": 3}
          ];
    // 方法返回Json
    $scope.helpShow = function(){
        return helpModel.get();          
    };          
}

/**
 * 注册控制器到模块
 *
 */
angular.module('blog').controller('BlogCtrl', [
    '$scope',
    '$rootScope',    
    '$location',
    'commonModel',
    BlogCtrl]);
