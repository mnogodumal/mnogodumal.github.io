const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var main = "";
var lax_min = { exports: {} };
(function(module) {
  function _classCallCheck(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: true, configurable: true, writable: true }) : e[t] = n, e;
  }
  function _slicedToArray(e, t) {
    return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(e, t) {
    if (e) {
      if ("string" == typeof e)
        return _arrayLikeToArray(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0;
    }
  }
  function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
      r[n] = e[n];
    return r;
  }
  function _iterableToArrayLimit(e, t) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
      var n = [], r = true, i = false, o = void 0;
      try {
        for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = true)
          ;
      } catch (e2) {
        i = true, o = e2;
      } finally {
        try {
          r || null == l.return || l.return();
        } finally {
          if (i)
            throw o;
        }
      }
      return n;
    }
  }
  function _arrayWithHoles(e) {
    if (Array.isArray(e))
      return e;
  }
  !function() {
    function n(e2) {
      return ["elInY+elHeight", "elCenterY-".concat(e2 = 0 < arguments.length && void 0 !== e2 ? e2 : 30), "elCenterY", "elCenterY+".concat(e2), "elOutY-elHeight"];
    }
    var l, u, s, _, P, I, t = { fadeInOut: function(e2, t2) {
      t2 = 1 < arguments.length && void 0 !== t2 ? t2 : 0;
      return { opacity: [n(0 < arguments.length && void 0 !== e2 ? e2 : 30), [t2, 1, 1, 1, t2]] };
    }, fadeIn: function(e2, t2) {
      return { opacity: [["elInY+elHeight", 0 < arguments.length && void 0 !== e2 ? e2 : "elCenterY"], [1 < arguments.length && void 0 !== t2 ? t2 : 0, 1]] };
    }, fadeOut: function(e2, t2) {
      return { opacity: [[0 < arguments.length && void 0 !== e2 ? e2 : "elCenterY", "elOutY-elHeight"], [1, 1 < arguments.length && void 0 !== t2 ? t2 : 0]] };
    }, blurInOut: function(e2, t2) {
      t2 = 1 < arguments.length && void 0 !== t2 ? t2 : 20;
      return { blur: [n(0 < arguments.length && void 0 !== e2 ? e2 : 100), [t2, 0, 0, 0, t2]] };
    }, blurIn: function(e2, t2) {
      return { blur: [["elInY+elHeight", 0 < arguments.length && void 0 !== e2 ? e2 : "elCenterY"], [1 < arguments.length && void 0 !== t2 ? t2 : 20, 0]] };
    }, blurOut: function(e2, t2) {
      return { opacity: [[0 < arguments.length && void 0 !== e2 ? e2 : "elCenterY", "elOutY-elHeight"], [0, 1 < arguments.length && void 0 !== t2 ? t2 : 20]] };
    }, scaleInOut: function(e2, t2) {
      t2 = 1 < arguments.length && void 0 !== t2 ? t2 : 0.6;
      return { scale: [n(0 < arguments.length && void 0 !== e2 ? e2 : 100), [t2, 1, 1, 1, t2]] };
    }, scaleIn: function(e2, t2) {
      return { scale: [["elInY+elHeight", 0 < arguments.length && void 0 !== e2 ? e2 : "elCenterY"], [1 < arguments.length && void 0 !== t2 ? t2 : 0.6, 1]] };
    }, scaleOut: function(e2, t2) {
      return { scale: [[0 < arguments.length && void 0 !== e2 ? e2 : "elCenterY", "elOutY-elHeight"], [1, 1 < arguments.length && void 0 !== t2 ? t2 : 0.6]] };
    }, slideX: function(e2, t2) {
      return { translateX: [["elInY", 0 < arguments.length && void 0 !== e2 ? e2 : 0], [0, 1 < arguments.length && void 0 !== t2 ? t2 : 500]] };
    }, slideY: function(e2, t2) {
      return { translateY: [["elInY", 0 < arguments.length && void 0 !== e2 ? e2 : 0], [0, 1 < arguments.length && void 0 !== t2 ? t2 : 500]] };
    }, spin: function(e2, t2) {
      e2 = 0 < arguments.length && void 0 !== e2 ? e2 : 1e3;
      return { rotate: [[0, e2], [0, 1 < arguments.length && void 0 !== t2 ? t2 : 360], { modValue: e2 }] };
    }, flipX: function(e2, t2) {
      e2 = 0 < arguments.length && void 0 !== e2 ? e2 : 1e3;
      return { rotateX: [[0, e2], [0, 1 < arguments.length && void 0 !== t2 ? t2 : 360], { modValue: e2 }] };
    }, flipY: function(e2, t2) {
      e2 = 0 < arguments.length && void 0 !== e2 ? e2 : 1e3;
      return { rotateY: [[0, e2], [0, 1 < arguments.length && void 0 !== t2 ? t2 : 360], { modValue: e2 }] };
    }, jiggle: function(e2, t2) {
      e2 = 0 < arguments.length && void 0 !== e2 ? e2 : 50, t2 = 1 < arguments.length && void 0 !== t2 ? t2 : 40;
      return { skewX: [[0, +e2, 2 * e2, 3 * e2, 4 * e2], [0, t2, 0, -t2, 0], { modValue: 4 * e2 }] };
    }, seesaw: function(e2, t2) {
      e2 = 0 < arguments.length && void 0 !== e2 ? e2 : 50, t2 = 1 < arguments.length && void 0 !== t2 ? t2 : 40;
      return { skewY: [[0, +e2, 2 * e2, 3 * e2, 4 * e2], [0, t2, 0, -t2, 0], { modValue: 4 * e2 }] };
    }, zigzag: function(e2, t2) {
      e2 = 0 < arguments.length && void 0 !== e2 ? e2 : 100, t2 = 1 < arguments.length && void 0 !== t2 ? t2 : 100;
      return { translateX: [[0, +e2, 2 * e2, 3 * e2, 4 * e2], [0, t2, 0, -t2, 0], { modValue: 4 * e2 }] };
    }, hueRotate: function(e2, t2) {
      e2 = 0 < arguments.length && void 0 !== e2 ? e2 : 600;
      return { "hue-rotate": [[0, e2], [0, 1 < arguments.length && void 0 !== t2 ? t2 : 360], { modValue: e2 }] };
    } }, e = (l = ["perspective", "scaleX", "scaleY", "scale", "skewX", "skewY", "skew", "rotateX", "rotateY", "rotate"], u = ["blur", "hue-rotate", "brightness"], s = ["translateX", "translateY", "translateZ"], _ = ["perspective", "border-radius", "blur", "translateX", "translateY", "translateZ"], P = ["hue-rotate", "rotate", "rotateX", "rotateY", "skew", "skewX", "skewY"], I = { easeInQuad: function(e2) {
      return e2 * e2;
    }, easeOutQuad: function(e2) {
      return e2 * (2 - e2);
    }, easeInOutQuad: function(e2) {
      return e2 < 0.5 ? 2 * e2 * e2 : (4 - 2 * e2) * e2 - 1;
    }, easeInCubic: function(e2) {
      return e2 * e2 * e2;
    }, easeOutCubic: function(e2) {
      return --e2 * e2 * e2 + 1;
    }, easeInOutCubic: function(e2) {
      return e2 < 0.5 ? 4 * e2 * e2 * e2 : (e2 - 1) * (2 * e2 - 2) * (2 * e2 - 2) + 1;
    }, easeInQuart: function(e2) {
      return e2 * e2 * e2 * e2;
    }, easeOutQuart: function(e2) {
      return 1 - --e2 * e2 * e2 * e2;
    }, easeInOutQuart: function(e2) {
      return e2 < 0.5 ? 8 * e2 * e2 * e2 * e2 : 1 - 8 * --e2 * e2 * e2 * e2;
    }, easeInQuint: function(e2) {
      return e2 * e2 * e2 * e2 * e2;
    }, easeOutQuint: function(e2) {
      return 1 + --e2 * e2 * e2 * e2 * e2;
    }, easeInOutQuint: function(e2) {
      return e2 < 0.5 ? 16 * e2 * e2 * e2 * e2 * e2 : 1 + 16 * --e2 * e2 * e2 * e2 * e2;
    }, easeOutBounce: function(e2) {
      var t2 = 7.5625, n2 = 2.75;
      return e2 < 1 / n2 ? t2 * e2 * e2 : e2 < 2 / n2 ? t2 * (e2 -= 1.5 / n2) * e2 + 0.75 : e2 < 2.5 / n2 ? t2 * (e2 -= 2.25 / n2) * e2 + 0.9375 : t2 * (e2 -= 2.625 / n2) * e2 + 0.984375;
    }, easeInBounce: function(e2) {
      return 1 - I.easeOutBounce(1 - e2);
    }, easeOutBack: function(e2) {
      return 1 + 2.70158 * Math.pow(e2 - 1, 3) + 1.70158 * Math.pow(e2 - 1, 2);
    }, easeInBack: function(e2) {
      return 2.70158 * e2 * e2 * e2 - 1.70158 * e2 * e2;
    } }, new function e2() {
      var o = this;
      _classCallCheck(this, e2), _defineProperty(this, "drivers", []), _defineProperty(this, "elements", []), _defineProperty(this, "frame", 0), _defineProperty(this, "debug", false), _defineProperty(this, "windowWidth", 0), _defineProperty(this, "windowHeight", 0), _defineProperty(this, "presets", t), _defineProperty(this, "debugData", { frameLengths: [] }), _defineProperty(this, "init", function() {
        o.findAndAddElements(), window.requestAnimationFrame(o.onAnimationFrame), o.windowWidth = document.body.clientWidth, o.windowHeight = document.body.clientHeight, window.onresize = o.onWindowResize;
      }), _defineProperty(this, "onWindowResize", function() {
        document.body.clientWidth === o.windowWidth && document.body.clientHeight === o.windowHeight || (o.windowWidth = document.body.clientWidth, o.windowHeight = document.body.clientHeight, o.elements.forEach(function(e3) {
          return e3.calculateTransforms();
        }));
      }), _defineProperty(this, "onAnimationFrame", function(e3) {
        o.debug && (o.debugData.frameStart = Date.now());
        var t2, n2 = {};
        o.drivers.forEach(function(e4) {
          n2[e4.name] = e4.getValue(o.frame);
        }), o.elements.forEach(function(e4) {
          e4.update(n2, o.frame);
        }), o.debug && o.debugData.frameLengths.push(Date.now() - o.debugData.frameStart), o.frame % 60 == 0 && o.debug && (t2 = Math.ceil(o.debugData.frameLengths.reduce(function(e4, t3) {
          return e4 + t3;
        }, 0) / 60), console.log("Average frame calculation time: ".concat(t2, "ms")), o.debugData.frameLengths = []), o.frame++, window.requestAnimationFrame(o.onAnimationFrame);
      }), _defineProperty(this, "addDriver", function(e3, t2) {
        var n2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        o.drivers.push(new i(e3, t2, n2));
      }), _defineProperty(this, "removeDriver", function(t2) {
        o.drivers = o.drivers.filter(function(e3) {
          return e3.name !== t2;
        });
      }), _defineProperty(this, "findAndAddElements", function() {
        o.elements = [], document.querySelectorAll(".lax").forEach(function(e3) {
          var t2 = [];
          e3.classList.forEach(function(e4) {
            e4.includes("lax_preset") && (e4 = e4.replace("lax_preset_", ""), t2.push(e4));
          });
          var n2 = _defineProperty({}, "scrollY", { presets: t2 });
          o.elements.push(new f(".lax", o, e3, n2, 0, {}));
        });
      }), _defineProperty(this, "addElements", function(n2, r, i2) {
        document.querySelectorAll(n2).forEach(function(e3, t2) {
          o.elements.push(new f(n2, o, e3, r, t2, i2));
        });
      }), _defineProperty(this, "removeElements", function(t2) {
        o.elements = o.elements.filter(function(e3) {
          return e3.selector !== t2;
        });
      }), _defineProperty(this, "addElement", function(e3, t2, n2) {
        o.elements.push(new f("", o, e3, t2, 0, n2));
      }), _defineProperty(this, "removeElement", function(t2) {
        o.elements = o.elements.filter(function(e3) {
          return e3.domElement !== t2;
        });
      });
    }());
    function c(e2, t2) {
      if (Array.isArray(e2))
        return e2;
      for (var n2 = Object.keys(e2).map(function(e3) {
        return parseInt(e3);
      }).sort(function(e3, t3) {
        return t3 < e3 ? 1 : -1;
      }), r = n2[n2.length - 1], i2 = 0; i2 < n2.length; i2++) {
        var o = n2[i2];
        if (t2 < o) {
          r = o;
          break;
        }
      }
      return e2[r];
    }
    function d(e2, t2, n2) {
      var r = t2.width, i2 = t2.height, o = t2.x, a = t2.y;
      if ("number" == typeof e2)
        return e2;
      var l2, u2 = document.body.scrollHeight, s2 = document.body.scrollWidth, c2 = window.innerWidth, d2 = window.innerHeight, f2 = _slicedToArray((l2 = void 0 !== window.pageXOffset, f2 = "CSS1Compat" === (document.compatMode || ""), t2 = l2 ? window.pageXOffset : (f2 ? document.documentElement : document.body).scrollLeft, [l2 ? window.pageYOffset : (f2 ? document.documentElement : document.body).scrollTop, t2]), 2), t2 = f2[0], o = o + f2[1], f2 = o + r, a = a + t2, t2 = a + i2;
      return Function("return ".concat(e2.replace(/screenWidth/g, c2).replace(/screenHeight/g, d2).replace(/pageHeight/g, u2).replace(/pageWidth/g, s2).replace(/elWidth/g, r).replace(/elHeight/g, i2).replace(/elInY/g, a - d2).replace(/elOutY/g, t2).replace(/elCenterY/g, a + i2 / 2 - d2 / 2).replace(/elInX/g, o - c2).replace(/elOutX/g, f2).replace(/elCenterX/g, o + r / 2 - c2 / 2).replace(/index/g, n2)))();
    }
    function i(e2, t2) {
      var n2 = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      _classCallCheck(this, i), _defineProperty(this, "getValueFn", void 0), _defineProperty(this, "name", ""), _defineProperty(this, "lastValue", 0), _defineProperty(this, "frameStep", 1), _defineProperty(this, "m1", 0), _defineProperty(this, "m2", 0), _defineProperty(this, "inertia", 0), _defineProperty(this, "inertiaEnabled", false), _defineProperty(this, "getValue", function(e3) {
        var t3 = n2.lastValue;
        return e3 % n2.frameStep == 0 && (t3 = n2.getValueFn(e3)), n2.inertiaEnabled && (e3 = t3 - n2.lastValue, n2.m1 = 0.8 * n2.m1 + e3 * (1 - 0.8), n2.m2 = 0.8 * n2.m2 + n2.m1 * (1 - 0.8), n2.inertia = Math.round(5e3 * n2.m2) / 15e3), n2.lastValue = t3, [n2.lastValue, n2.inertia];
      }), this.name = e2, this.getValueFn = t2, Object.keys(r).forEach(function(e3) {
        n2[e3] = r[e3];
      }), this.lastValue = this.getValueFn(0);
    }
    function f(e2, t2, n2, r) {
      var b = this, i2 = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0, o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : {};
      _classCallCheck(this, f), _defineProperty(this, "domElement", void 0), _defineProperty(this, "transformsData", void 0), _defineProperty(this, "styles", {}), _defineProperty(this, "selector", ""), _defineProperty(this, "groupIndex", 0), _defineProperty(this, "laxInstance", void 0), _defineProperty(this, "onUpdate", void 0), _defineProperty(this, "update", function(e3, t3) {
        var n3, r2 = b.transforms, i3 = {};
        for (n3 in r2) {
          var o2 = r2[n3];
          e3[n3] || console.error("No lax driver with name: ", n3);
          var a2, l2 = _slicedToArray(e3[n3], 2), u2 = l2[0], s2 = l2[1];
          for (a2 in o2) {
            var c2, d2 = _slicedToArray(o2[a2], 3), f2 = d2[0], h = d2[1], m = d2[2], p2 = void 0 === m ? {} : m, g = p2.modValue, y = p2.frameStep, v = void 0 === y ? 1 : y, w = p2.easing, d2 = p2.inertia, m = p2.inertiaMode, y = p2.cssFn, p2 = p2.cssUnit, p2 = void 0 === p2 ? "" : p2, w = I[w];
            t3 % v == 0 && (w = function(e4, t4, n4, r3) {
              var i4 = 0;
              if (e4.forEach(function(e5) {
                e5 < n4 && i4++;
              }), i4 <= 0)
                return t4[0];
              if (i4 >= e4.length)
                return t4[e4.length - 1];
              var o3, a3 = (a3 = e4[o3 = i4 - 1], e4 = e4[i4], (n4 - a3) / (e4 - a3));
              return r3 && (a3 = r3(a3)), o3 = t4[o3], t4 = t4[i4], o3 * (1 - (a3 = a3)) + t4 * a3;
            }(f2, h, g ? u2 % g : u2, w), d2 && (c2 = s2 * d2, "absolute" === m && (c2 = Math.abs(c2)), w += c2), c2 = "px" == (p2 || _.includes(a2) ? "px" : P.includes(a2) ? "deg" : "") ? 0 : 3, c2 = w.toFixed(c2), i3[a2] = y ? y(c2, b.domElement) : c2 + p2);
          }
        }
        b.applyStyles(i3), b.onUpdate && b.onUpdate(e3, b.domElement);
      }), _defineProperty(this, "calculateTransforms", function() {
        b.transforms = {};
        var e3, l2 = b.laxInstance.windowWidth;
        for (e3 in b.transformsData)
          !function(e4) {
            var o2 = b.transformsData[e4], a2 = {}, t3 = o2.presets;
            (void 0 === t3 ? [] : t3).forEach(function(e5) {
              var t4, n4 = _slicedToArray(e5.split(":"), 3), r2 = n4[0], i3 = n4[1], e5 = n4[2], n4 = window.lax.presets[r2];
              n4 ? (t4 = n4(i3, e5), Object.keys(t4).forEach(function(e6) {
                o2[e6] = t4[e6];
              })) : console.error("Lax preset cannot be found with name: ", r2);
            }), delete o2.presets;
            for (var n3 in o2)
              !function(e5) {
                var t4 = _slicedToArray(o2[e5], 3), n4 = t4[0], r2 = void 0 === n4 ? [-1e9, 1e9] : n4, n4 = t4[1], n4 = void 0 === n4 ? [-1e9, 1e9] : n4, t4 = t4[2], t4 = void 0 === t4 ? {} : t4, i3 = b.domElement.getBoundingClientRect(), r2 = c(r2, l2).map(function(e6) {
                  return d(e6, i3, b.groupIndex);
                }), n4 = c(n4, l2).map(function(e6) {
                  return d(e6, i3, b.groupIndex);
                });
                a2[e5] = [r2, n4, t4];
              }(n3);
            b.transforms[e4] = a2;
          }(e3);
      }), _defineProperty(this, "applyStyles", function(e3) {
        var r2, i3, o2, t3 = (r2 = e3, i3 = { transform: "", filter: "" }, o2 = { translateX: 1e-5, translateY: 1e-5, translateZ: 1e-5 }, Object.keys(r2).forEach(function(e4) {
          var t4 = r2[e4], n3 = _.includes(e4) ? "px" : P.includes(e4) ? "deg" : "";
          s.includes(e4) ? o2[e4] = t4 : l.includes(e4) ? i3.transform += "".concat(e4, "(").concat(t4).concat(n3, ") ") : u.includes(e4) ? i3.filter += "".concat(e4, "(").concat(t4).concat(n3, ") ") : i3[e4] = "".concat(t4).concat(n3, " ");
        }), i3.transform = "translate3d(".concat(o2.translateX, "px, ").concat(o2.translateY, "px, ").concat(o2.translateZ, "px) ").concat(i3.transform), i3);
        Object.keys(t3).forEach(function(e4) {
          b.domElement.style.setProperty(e4, t3[e4]);
        });
      }), this.selector = e2, this.laxInstance = t2, this.domElement = n2, this.transformsData = r, this.groupIndex = i2;
      var a = void 0 === (i2 = o.style) ? {} : i2, o = o.onUpdate;
      Object.keys(a).forEach(function(e3) {
        n2.style.setProperty(e3, a[e3]);
      }), o && (this.onUpdate = o), this.calculateTransforms();
    }
    void 0 !== module.exports ? module.exports = e : window.lax = e;
  }();
})(lax_min);
var lax = lax_min.exports;
window.addEventListener("load", () => {
  lax.init();
  lax.addDriver("scrollY", function() {
    return window.scrollY;
  });
  lax.addElements(".lax-item", {
    scrollY: {
      rotate: [
        ["0", "pageHeight/2", "pageHeight"],
        [0, "90", "180"]
      ]
    }
  });
});
window.addEventListener("load", () => {
  let titles = document.querySelectorAll("#grid-cards .about__item-title");
  let glass = document.querySelectorAll("#grid-cards .about__item-glass");
  let text = document.querySelectorAll("#grid-cards .about__item-text");
  equalHeight(titles);
  equalHeight(glass);
  equalHeight(text);
});
function equalHeight(el) {
  let max = 0;
  el.forEach((item) => {
    if (item.clientHeight >= max) {
      max = item.clientHeight;
    }
  });
  el.forEach((item) => {
    item.style.height = max + "px";
  });
}
class Burger {
  constructor(obj) {
    this.createAnchor(obj.anchor);
    this.createOverflow();
    this.replaceNavbar(obj.node);
    console.log("burger menu registered");
  }
  createAnchor(anchor2) {
    this.anchor = new Object();
    this.anchor.wrapper = anchor2;
    this.anchor.button = document.createElement("button");
    this.anchor.button.classList.add("burger-anchor");
    for (let i = 0; i < 3; i++) {
      let span = document.createElement("span");
      span.classList.add("burger-anchor__span");
      this.anchor.button.append(span);
    }
    this.anchor.wrapper.append(this.anchor.button);
    let listener;
    this.anchor.button.addEventListener("click", listener = () => {
      console.log(this);
      this.open();
    });
    this.anchor.toTop = () => {
      let c = this.anchor.button.getBoundingClientRect();
      let top = c.top + document.body.scrollTop;
      let left = c.left;
      this.anchor.button.style.top = top + "px";
      this.anchor.button.style.left = left + "px";
      document.querySelector(".header").style.position = "static";
      document.querySelector(".header .container").style.position = "static";
      this.anchor.wrapper.style.position = "static";
      this.anchor.button.classList.add("burger-anchor-active");
      this.anchor.button.removeEventListener("click", listener);
      this.anchor.button.addEventListener("click", listener = () => {
        this.close();
      });
    };
    this.anchor.toDefault = () => {
      document.querySelector(".header").style.position = "relative";
      document.querySelector(".header .container").style.position = "relative";
      this.anchor.wrapper.style.position = "relative";
      this.anchor.button.classList.remove("burger-anchor-active");
      this.anchor.button.removeAttribute("style");
      this.anchor.button.removeEventListener("click", listener);
      this.anchor.button.addEventListener("click", listener = () => {
        this.open();
      });
    };
  }
  createOverflow() {
    this.overflow = document.createElement("div");
    this.overflow.classList.add("overflow");
    this.overflow.event = document.createElement("div");
    this.overflow.event.classList.add("overflowEvent");
    this.overflow.append(this.overflow.event);
    document.body.append(this.overflow);
  }
  replaceNavbar(node) {
    this.navbar = node;
    this.navbar.classList.display = "block";
    this.navbar.container = this.navbar.children[0];
    this.navbar.classList.display;
    this.overflow.append(this.navbar);
  }
  open() {
    function fadeIn(el) {
      let opacity = 0.1;
      el.overflow.event.style.display = "block";
      let timer = setInterval(function() {
        if (opacity >= 1) {
          if (!el.navbar.classList.contains("burger-active")) {
            el.navbar.classList.add("burger-active");
            el.anchor.toTop();
          }
          clearInterval(timer);
        }
        el.overflow.event.style.opacity = opacity;
        el.overflow.event.style.filter = "alpha(opacity=" + opacity * 100 + ")";
        opacity += opacity * 0.1;
      }, 10);
    }
    this.overflow.style.display = "block";
    fadeIn(this);
  }
  close() {
    const fadeOut = (el) => {
      let opacity = 1;
      let timer = setInterval(function() {
        if (opacity <= 0.1) {
          clearInterval(timer);
          el.style.display = "none";
        }
        el.event.style.opacity = opacity;
        el.event.style.filter = "alpha(opacity=" + opacity * 100 + ")";
        opacity -= opacity * 0.1;
      }, 10);
    };
    if (this.navbar.classList.contains("burger-active")) {
      this.navbar.classList.remove("burger-active");
      this.anchor.toDefault();
    }
    fadeOut(this.overflow);
  }
}
let media = window.matchMedia("(max-width: calc(768px - 1px))");
if (media.matches) {
  new Burger({
    node: document.querySelector(".navbar"),
    anchor: document.querySelector("#header .header__column:nth-child(1)")
  });
}
let overflow = document.getElementById("overflow");
let overflowEvent = document.getElementById("overflow-event");
let closeBtn = document.getElementById("modal-city-close");
let anchor = document.getElementById("modal-city-anchor");
let output = document.getElementById("modal-city-output");
let cities = document.querySelectorAll("#modal-city-body .modal-city__body-item");
anchor.addEventListener("click", () => {
  openModal();
});
[overflowEvent, closeBtn].forEach((el) => {
  el.addEventListener("click", () => {
    closeModal();
  });
});
cities.forEach((el) => {
  el.addEventListener("click", () => {
    let city = el.textContent;
    output.textContent = city;
    closeModal();
  });
});
function openModal() {
  const fadeIn = (element) => {
    let opacity = 0.1;
    element.style.display = "block";
    let timer = setInterval(function() {
      if (opacity >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = opacity;
      element.style.filter = "alpha(opacity=" + opacity * 100 + ")";
      opacity += opacity * 0.1;
    }, 10);
  };
  overflow.style.display = "block";
  fadeIn(overflowEvent);
}
function closeModal() {
  const fadeOut = (element) => {
    let opacity = 1;
    let timer = setInterval(function() {
      if (opacity <= 0.1) {
        clearInterval(timer);
        overflow.style.display = "none";
      }
      element.style.opacity = opacity;
      element.style.filter = "alpha(opacity=" + opacity * 100 + ")";
      opacity -= opacity * 0.1;
    }, 10);
  };
  fadeOut(overflowEvent);
}
