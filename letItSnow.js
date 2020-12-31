"use strict";

function letItSnow(flakes, target) {
  var d = document;
  var s = d.createElement('style');
  s.type = 'text/css';
  s.innerHTML = ".snowy-sky{overflow:hidden;position:absolute;left:0;top:0;background-color:#b6becc;width:100%;height:100%}.snow-flake{position:absolute;filter: blur(1px);background-color:#fff;animation:snowy 14s linear infinite}@keyframes snowy{0%{transform:translateX(-500%);top:-20%}100%{transform:translateX(500%);top:100%}}";
  d.getElementsByTagName('head')[0].appendChild(s);
  var k = d.createElement('div');
  k.classList.add('snowy-sky');
  target ? target.appendChild(k) : d.body.appendChild(k);

  function r(v) {
    var c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return Math.floor(Math.random() * v) + c;
  }

  for (var i = 0; i < flakes; i++) {
    var f = d.createElement('div');
    f.classList.add('snow-flake');
    var w = "".concat(r(10, 10), "px");
    var fs = f.style;
    fs.width = w;
    fs.height = w;
    fs.borderRadius = w;
    fs.opacity = r(5, 2) * 0.1;
    fs.left = "".concat(r(100), "%");
    fs.animationDuration = "".concat(r(flakes, 50)*0.1, "s");
    k.appendChild(f);
  }
}

letItSnow(200)

