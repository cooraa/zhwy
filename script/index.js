
apiready = function() {
    $api.fixStatusBar($api.dom('header'));
    api.setStatusBarStyle({
        style: 'dark',
        color: '#6ab494'
    });
    funIniGroup();
}

function funIniGroup() {
    var frameNames = ['home_frame', 'market_frame', 'housekeeper_frame', 'community_frame', 'my_frame'];
    var eHeaderLis = $api.domAll('.nav'),
        frames = [];
    for (var i = 0, len = eHeaderLis.length; i < len; i++) {
        frames.push({
            name: 'frame' + i,
            url: './html/' + frameNames[i] + '.html',
            bgColor: 'rgba(0,0,0,.2)',
            bounces: true
        })
    }
    api.openFrameGroup({
        name: 'group',
        scrollEnabled: false,
        rect: {
            x: 0,
            y: $api.dom('header').offsetHeight,
            w: api.winWidth,
            h: $api.dom('#main').offsetHeight
        },
        index: 0,
        frames: frames
    }, function(ret, err) {

    });
}

// 随意切换按钮
function randomSwitchBtn(tag) {
    if (tag == $api.dom('#footer li.active')) return;
    var eFootLis = $api.domAll('#footer li'),
        eHeaderLis = $api.domAll('.nav'),
        index = 0;
    for (var i = 0, len = eFootLis.length; i < len; i++) {
        if (tag == eFootLis[i]) {
            index = i;
        } else {
            $api.removeCls(eFootLis[i], 'active');
            $api.removeCls(eHeaderLis[i], 'active');
        }
    }
    $api.addCls(eFootLis[index], 'active');
    $api.addCls(eHeaderLis[index], 'active');
    api.setFrameGroupIndex({
        name: 'group',
        index: index
    });
}
function stewardlist(){
  api.openWin({
        name:'stewardlist_win',
        url:'./html/housekeeper/chitchat/stewardlist_win.html'
  });
}
//打开页面
function openMyHouse() {
    api.openWin({
        name:'myHouse_win',
        url:'./html/home/house/myHouse_win.html'
    });
}
