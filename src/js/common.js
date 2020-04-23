var common = {
    templateHtml: {
        roules: '<div class="popup roules">' +
            '<div class="mask"></div>' +
            '<div class="content-wrap">' +
            '<div class="bg">' +
            '<div class="info">' +
            '<p>1、凡参与房产评估即可获得一次抽奖机会，一位用户可多次评估，但每人只能通过房产评估获得一次抽奖活动。</p>' +
            '<p>2、转发活动链接可增加一次抽奖机会。</p>' +
            '<p>3、申请贷款可以增加一次抽奖机会。</p>' +
            '<p>4、中奖用户填写正确的收货信息后，工作人员将在10个工作日内将礼品寄出，如有疑问请咨询<span>0512-962029</span>。</p>' +
            '</div>' +
            '</div>' +
            '<div class="btn-wrap">' +
            '<a class="btn-close"></a>' +
            '</div>' +
            '</div>' +
            '</div>',
        gift: '<div class="popup gift">' +
            '<div class="mask"></div>' +
            '<div class="content-wrap">' +
            '<div class="bg">' +
            '<div class="info-gift">' +
            '<p class="c-title">中奖啦</p>' +
            '<p class="c-name">获得<a>{name}{num}{unit}</a></p>' +
            '<a class="split">请准确填写以下收件信息</a>' +
            '<ul>' +
            '<li>' +
            '<a class="left">收件人</a>' +
            '<input type="text" placeholder="请输入收件人姓名" />' +
            '</li>' +
            '<li>' +
            '<a class="left">联系方式</a>' +
            '<input type="text" placeholder="请输入收件人手机号" />' +
            '</li>' +
            '<li>' +
            '<a class="left">收件地址</a>' +
            '<input type="text" placeholder="请输入详细收件人地址" />' +
            '</li>' +
            '</ul>' +
            '<div class="btn-wrap">' +
            '<a class="btn-commit">提交</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="btn-wrap">' +
            '<a class="btn-close"></a>' +
            '</div>' +
            '</div>' +
            '</div>',
        congratulate: '<div class="confirm congratulate">' +
            '<div class="mask"></div>' +
            '<div class="content-wrap">' +
            '<p class="msg">获得一次抽奖机会</p>' +
            '<div class="btn-wrap">' +
            '<a class="btn-confirm">确定</a>' +
            '</div>' +
            '</div>' +
            '</div>',
        sorry: '<div class="confirm sorry">' +
            '<div class="mask"></div>' +
            '<div class="content-wrap">' +
            '<p class="msg">您未中奖哦~</p>' +
            '<div class="btn-wrap">' +
            '<a class="btn-confirm">确定</a>' +
            '</div>' +
            '</div>' +
            '</div>',
        share: '<div class="confirm share">' +
            '<div class="mask"></div>' +
            '<div class="content-wrap">' +
            '<p class="msg">您未中奖哦~转发活动页面增加1次抽奖机会!</p>' +
            '<div class="btn-wrap">' +
            '<a class="btn-confirm">确定</a>' +
            '</div>' +
            '</div>' +
            '<div class="share-bg"></div>' +
            '</div>'
    },
    init: function() {
        var _this = common;
        // 
        _this.bindFooterEvent();
    },
    // 弹框事件绑定  *注--弹框加载后进行事件绑定 
    bindEvent: function(callback) {
        var _this = common;

        var _domCommitBtn = $('.popup .btn-wrap .btn-commit');
        var _domConfirmBtn = $('.confirm .btn-wrap .btn-confirm');
        var _domClose = $('.popup .btn-wrap .btn-close');

        // 关闭事件
        if (_domClose && _domClose.length > 0) {
            _domClose.bind('click', function() {
                _this.closeFrame();
            });
        }
        // 确认
        if (_domConfirmBtn && _domConfirmBtn.length > 0) {
            _domConfirmBtn.bind('click', function() {
                _this.closeFrame();
            });
        }
        // 有回调的提交方法
        if (_domCommitBtn && _domCommitBtn.length > 0) {
            _domCommitBtn.bind('click', function() {
                var data = {
                    name: $('.gift .info-gift ul li:nth-child(1) input').val(),
                    phone: $('.gift .info-gift ul li:nth-child(2) input').val(),
                    address: $('.gift .info-gift ul li:nth-child(3) input').val()
                }
                callback(data);
                _this.closeFrame();
            });
        }
    },
    /** 打开弹框
     * 
     * @param {*} name：    roules | gift | congratulate | sorry | share
     * @param {*} obj       中奖弹框打开时展示的信息对象. name='gift' 时必传
     * @param {*} callback  中奖弹框点击提交的回调函数 . name='gift' 时必传
     */
    openFrame: function(name, obj, callback) {
        var _domConfirm = $('.confirm');
        var _domPopup = $('.popup');
        if (_domConfirm) {
            _domConfirm.remove();
        }
        if (_domPopup && _domPopup.length > 0) {
            _domPopup.remove();
        }
        var html = common.templateHtml[name];

        if (name == 'gift') {
            var trArr = {
                name: obj.name,
                num: obj.num,
                unit: obj.unit
            }
            html = html.substitute(trArr)
        }

        $('body').append(html);
        // 事件绑定
        common.bindEvent(callback);
    },
    // 关闭弹框
    closeFrame: function() {
        var _domConfirm = $('.confirm');
        var _domPopup = $('.popup');
        if (_domConfirm) {
            _domConfirm.remove();
        }
        if (_domPopup && _domPopup.length > 0) {
            _domPopup.remove();
        }
        var _domCommitBtn = $('.popup .btn-wrap .btn-commit');
        var _domConfirmBtn = $('.confirm .btn-wrap .btn-confirm');
        var _domClose = $('.popup .btn-wrap .btn-close');
        // 解除绑定事件
        if (_domCommitBtn && _domCommitBtn.length > 0) {
            _domCommitBtn.unbind();
        }
        if (_domConfirmBtn && _domConfirmBtn.length > 0) {
            _domConfirmBtn.unbind();
        }
        if (_domClose && _domClose.length > 0) {
            _domClose.unbind();
        }
    },
    // 绑定 footer 事件
    bindFooterEvent: function() {
        var _domLi = $('footer ul li');
        _domLi.bind('click', function(e) {
            console.log(e);
            alert($(this).text());
        });
    }
};

// 原型链写入模板替换方法
(function($) {
    if (!$) return;
    $.extend(String.prototype, {
        substitute: function(data) {
            if (data && typeof(data) == 'object') {
                return this.replace(/\{([^{}]+)\}/g, function(match, key) {
                    var value = data[key];
                    return (value !== undefined) ? '' + value : '';
                });
            } else {
                return this.toString();
            }
        },
    });
})(jQuery);

$(function() {
    common.init();
});