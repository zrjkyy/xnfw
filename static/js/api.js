(function () {
    //ajax请求配置
    var ajaxSys = function (opt) {
        var setting = {
            type: "get",
            dataType: "json",
            async: true,
            cache: false
        };
        var option = $.extend(setting, opt);

        var _ajax = {
            url: option.url, //接口url
            type: option.type,
            data: option.data,
            dataType: option.dataType,
            async: option.async,
            cache: option.cache,
            success: function (res) {
                option.callback && option.callback(res);
            },
            error: function (a, b) {
                option.errorcallback && option.errorcallback(a, b);
            }
        };
        if (option.data instanceof Array) {
            // 数组
            _ajax.contentType = 'application/json';
            _ajax.data = JSON.stringify(option.data);
        }
        $.ajax(_ajax);
    };

    window.api = {
        ajaxGet: function (json) {
            ajaxSys({
                url: json.url,
                data: json.data ? json.data : {},
                type: "get",
                callback: json.callback,
                errorcallback: json.errorcallback
            });
        },
        ajaxPost: function (json) {
            ajaxSys({
                url: json.url,
                data: json.data ? json.data : {},
                type: "post",
                callback: json.callback,
                errorcallback: json.errorcallback
            });
        },
        getHtml: function (json) {
            ajaxSys({
                url: json.url,
                data: json.data ? json.data : {},
                dataType: "html",
                callback: json.callback,
                errorcallback: json.errorcallback
            });
        }
    };

})();