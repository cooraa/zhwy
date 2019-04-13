new Vue({
        el: "#app",
        data: {
            tabIndex: 0,
            tabData: ['市集', '惠邻', '易物', '金服'],
            nineGong: [{
                name: '饮料',
                url: '../image/market/drinks.png'
            }, {
                name: '吃饭',
                url: '../image/market/eat.png'
            }, {
                name: '食品',
                url: '../image/market/foods.png'
            }, {
                name: '家政',
                url: '../image/market/housekeeping.png'
            }, {
                name: '母婴',
                url: '../image/market/baby.png'
            }, {
                name: '严选',
                url: '../image/market/selected.png'
            }, {
                name: '乐途',
                url: '../image/market/tourism.png'
            }, {
                name: '全部',
                url: '../image/market/all.png'
            }],
            wheelData: [{
                url: '../image/home/b1.jpg'
            }, {
                url: '../image/home/b2.jpg'
            }, {
                url: '../image/home/b3.jpg'
            }],
            store: [{
                title: '香甜木瓜干',
                url: '../image/market/goods2.png',
                price: '¥20.00'
            }, {
                title: '香甜木瓜干',
                url: '../image/market/goods2.png',
                price: '¥20.00'
            }, {
                title: '香甜木瓜干',
                url: '../image/market/goods2.png',
                price: '¥20.00'
            }, {
                title: '香甜木瓜干',
                url: '../image/market/goods2.png',
                price: '¥20.00'
            }, {
                title: '香甜木瓜干',
                url: '../image/market/goods2.png',
                price: '¥20.00'
            }, {
                title: '香甜木瓜干',
                url: '../image/market/goods2.png',
                price: '¥20.00'
            }]
        },
        methods: {
            tabToggle(index) {
                this.tabIndex = index;
            }
        }
    })
    // 轮播图
var slideTab0 = new auiSlide({
    container: document.getElementById("tab0-aui-slide"),
    "height": 164,
    "speed": 300,
    "pageShow": true,
    "autoPlay": 3000, //自动播放
    "pageStyle": 'dot',
    "loop": true,
    'dotPosition': 'center'
})
//tab1-aui-slide
var slideTab1 = new auiSlide({
    container: document.getElementById("tab1-aui-slide"),
    "height": 164,
    "speed": 300,
    "pageShow": true,
    "autoPlay": 3000, //自动播放
    "pageStyle": 'dot',
    "loop": true,
    'dotPosition': 'center'
})
