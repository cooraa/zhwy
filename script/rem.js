//适配兼容
(function(doc, win) {
	var docEl = doc.documentElement,isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
	  dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,
	  dpr = window.top === window.self ? dpr : 1, //
	  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
	docEl.dataset.dpr = dpr;
	var recalc = function() {
	  var width = docEl.clientWidth;
	  if (width / dpr > 1080) {
		width = 1080 * dpr;
	  }
	  docEl.dataset.width = width;
	  docEl.dataset.percent = 20 * (width / 320);
	  docEl.style.fontSize = 20 * (width / 375) + 'px';
	};
	recalc();
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
})(document, window);