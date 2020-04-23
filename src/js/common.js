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
            '<p class="c-name">获得<a>空气净化器1台</a></p>' +
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
    },
    // 事件绑定
    bindEvent: function(){
        // 弹框 DOM 元素 selector
        var _domPopup = $('.popup');
        var _domConfirm = $('.confirm');
        var _domClose = $('.popup .btn-wrap .btn-close');
        var _domConfirmBtn = $('.confirm .btn-wrap .btn-confirm');

        // 关闭事件

    },
    // 打开弹框
    openConfirm(){
        var _domConfirm = $('.confirm');
        if(_domConfirm){    
            _domConfirm.remove();
        }

        var html = common.templateHtml.share;
        $('body').append(html);

    },
    openPopup(){

    },
    // 关闭弹框
    closeConfirm(){

    },
    closePopup(){

    }

}

$(function() {
    common.init();
});