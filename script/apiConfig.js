/**
 配置文件
 共用功能类
 调用方法
 var Config = Config();
 Config.Func();
 */
var host = "https://www.gxht.net.cn/yaojiang_war_exploded/";

function Config() {
    var config = {
        "getLunboUrl": host + "findLunbo.do", //首页--获取轮播图数据
        "getJiuUrl": host + "findHengpai.do", //首页--获取九宫格数据
    }
    return config;
}