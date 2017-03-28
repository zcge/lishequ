//get_code
(function () {
    var url = "http://api.sunrisekid.com/";
    var api = [
        'get_code%%getCode',//获取短信验证码
        'register%%register',//注册
        'login%%login',//登录
        'forgetcode%%forgetCode',//忘记密码验证
        'forgetpwd%%forgetPwd',//更新新密码
        'get_member%%getMember',//获取用户信息
        'edit_member%%editMember',//编辑用户信息
        'get_messages%%getMessage',//获取用户消息
        'message_info%%getMessageInfo',//获取用户消息详情
        'create_order%%createOrder',//创建订单
        'my_orders%%getMyOrders',//我的订单
        'order_detail%%getOrderDetail',//订单详情
        'comment%%getComment',
        'my_comments%%getMyComments',
        'collection%%getCollection',
        'get_banners%%getBanners',
        'feedback%%getFeedback',
    ];
    var self = {
        init: function () {
            api.forEach(function (value, key) {
                value = value.split('%%');
                var apiName = value[1],
                    apiUrl = value[0];
                self[apiName] = self.post.bind(this, apiUrl);
            })
        },
        getApiName: function (str) {
            return url + str;
        },
        post: function (str, data, cb, fcb) {
            var apiName = self.getApiName(str);
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: apiName,
                data: data,
                success: function (data) {
                    cb && cb(data);
                },
                error: function (error) {
                    fcb && fcb(error);
                }
            });
        },
    }
    self.init();
    window.communityAPI = self;
})();