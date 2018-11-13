//等比缩放
!(function(doc, win) {
  var timer,
      docEle = doc.documentElement,
      evt = "onorientationchange" in window ? "orientationchange" : "resize",
      setFontSize = function() {
          var width = docEle.getBoundingClientRect().width;
          if (typeof width === 'number') {
              width && (docEle.style.fontSize = 50 * (width / 320) + "px");
          }
      };

  win.addEventListener(evt, function() {
      clearTimeout(timer);
      timer = setTimeout(setFontSize, 1000);
  }, false);
  setFontSize()
}(document, window))
