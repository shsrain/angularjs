/**
 * 主页控制器
 *
 */
function HelpCtrl(
    $scope,
    $rootScope,
    $location,
    helpModel,
    commonModel) {
    $scope.helpContent = [
            {"name": "Nexus S",
             "snippet": "Fast just got faster with Nexus S."},
            {"name": "Motorola XOOM™ with Wi-Fi",
             "snippet": "The Next, Next Generation tablet."},
            {"name": "MOTOROLA XOOM™",
             "snippet": "The Next, Next Generation tablet."}
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
angular.module('help').controller('HelpCtrl', [
    '$scope',
    '$rootScope',    
    '$location',
    'helpModel',
    'commonModel',
    HelpCtrl]);
