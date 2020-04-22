var activity = {
    turnplate: {
        restaraunts: [], //大转盘奖品名称
        bRotate: false //false:停止;ture:旋转
    },
    init: function() {
        var _this = activity;
        _this.turnplate.restaraunts = ['一等奖空气净化器', '很抱歉未中奖', '二等奖车乐福洗车券', '差点就中了', '三等奖5元话费', '谢谢参与'];
        _this.bindEvent();
    },
    rotateFn: function(item, txt) {
        var _this = activity;
        var angles = item * (360 / _this.turnplate.restaraunts.length) - (360 / (_this.turnplate.restaraunts.length * 2));
        if (angles < 270) {
            angles = 390 - angles;
        } else {
            angles = 360 - angles + 390;
        }
        $('#wheelcanvas').stopRotate();
        $('#wheelcanvas').rotate({
            angle: 0,
            animateTo: angles + 1800,
            duration: 8000,
            callback: function() {
                alert(txt);
                _this.turnplate.bRotate = !_this.turnplate.bRotate;
            }
        });
    },
    // 生产随机数事件
    rnd: function(n, m) {
        var random = Math.floor(Math.random() * (m - n + 1) + n);
        return random;
    },
    // 按钮事件
    bindEvent: function() {
        var _this = activity;
        $('.pointer').click(function() {
            if (_this.turnplate.bRotate) return;
            _this.turnplate.bRotate = !_this.turnplate.bRotate;
            //获取随机数(奖品个数范围内)
            var item = _this.rnd(1, _this.turnplate.restaraunts.length);
            //奖品数量等于10,指针落在对应奖品区域的中心角度[252, 216, 180, 144, 108, 72, 36, 360, 324, 288]
            _this.rotateFn(item, _this.turnplate.restaraunts[item - 1]);
        });
    }
}

// 初始化
$(function() {
    activity.init();
});