var index = {
    init: function() {
        index.bindEvent();
    },
    bindEvent: function() {
        var _domCode = $('.code');
        var _domBtnWrap = $('.btn-wrap');
        var _domRoules = $('.btn-roules');
        var _domPan = $('.btn-pan');
        $('.btn-wrap a').bind('click', function() {
            _domCode.css('display', 'block');
            _domPan.css('display', 'none');
            _domRoules.css('display', 'none');
            _domBtnWrap.css('display', 'none');
        });
    }
}

$(function() {
    index.init();
});