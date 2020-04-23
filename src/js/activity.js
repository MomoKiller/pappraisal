var activity = {
    turnplate: {
        restaraunts: [], //大转盘奖品名称
        bRotate: false //false:停止;ture:旋转
    },
    init: function() {
        var _this = activity;
        _this.turnplate.restaraunts = ['一等奖空气净化器', '很抱歉未中奖', '二等奖车乐福洗车券', '差点就中了', '三等奖5元话费', '谢谢参与'];
        _this.bindEvent();

        // 加载规则
        common.openFrame('roules');
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
                _this.turnplate.bRotate = !_this.turnplate.bRotate;


                /**  根据 item 值弹不同框
                 *   弹框事件已经在common.js 中封装。 参数在注释里面
                 *   调用方式： common.openFrame('gift', obj, callback);    
                 *   callback 是点击提交的回调函数； 直接写里面或者另外定义  
                 *   
                 */
                var obj = {
                    name: '空气净化器',
                    num: 1,
                    unit: '台'
                }

                switch (item) {
                    case 1:
                        common.openFrame('gift', obj, function(item) { console.log('这个是你提交的对象', item) });
                        break;
                    case 2:
                        common.openFrame('sorry');
                        break;
                    case 3:
                        common.openFrame('gift', obj, function(item) { console.log('这个是你提交的对象', item) });
                        break;
                    case 4:
                        common.openFrame('sorry');
                        break;
                    case 5:
                        common.openFrame('gift', obj, function(item) { console.log('这个是你提交的对象', item) });
                        break;
                    case 6:
                        common.openFrame('sorry');
                        break;
                    default:
                        break;
                }
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