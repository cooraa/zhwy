/**
共用功能类
调用方法
var Comm = Common();
Comm.Func();
**/
function Common() {
    var common = {};
    //ajax封装
    common.ajax = function(_url, paramData, Type, callBack) {
        api.ajax({
            url: _url,
            method: Type,
            dataType: "json",
            data: paramData
        }, function(ret, err) {
            if (ret) {
                // api.alert({
                //     msg: JSON.stringify(ret)
                // });
                callBack(ret);
            } else {
                // api.alert({
                //     msg: JSON.stringify(err)
                // });
            }
        });
    }
    return common;
}
