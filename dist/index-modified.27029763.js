// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"foD0P":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4e5dac8afe405db7";
module.bundle.HMR_BUNDLE_ID = "502da65727029763";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}]},["foD0P"], null, "parcelRequiree970")
/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */ var pJS = function(tag_id, params) {
    var canvas_el = document.querySelector('#' + tag_id + ' > .particles-js-canvas-el');
    /* particles.js variables with default values */ this.pJS = {
        canvas: {
            el: canvas_el,
            w: canvas_el.offsetWidth,
            h: canvas_el.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#fff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#ff0000'
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: '',
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: false,
                anim: {
                    enable: false,
                    speed: 2,
                    opacity_min: 0,
                    sync: false
                }
            },
            size: {
                value: 20,
                random: false,
                anim: {
                    enable: false,
                    speed: 20,
                    size_min: 0,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 100,
                color: '#fff',
                opacity: 1,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 3000,
                    rotateY: 3000
                }
            },
            array: []
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: 0.4
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {
            }
        },
        retina_detect: false,
        fn: {
            interact: {
            },
            modes: {
            },
            vendors: {
            }
        },
        tmp: {
        }
    };
    var pJS1 = this.pJS;
    /* params settings */ if (params) Object.deepExtend(pJS1, params);
    pJS1.tmp.obj = {
        size_value: pJS1.particles.size.value,
        size_anim_speed: pJS1.particles.size.anim.speed,
        move_speed: pJS1.particles.move.speed,
        line_linked_distance: pJS1.particles.line_linked.distance,
        line_linked_width: pJS1.particles.line_linked.width,
        mode_grab_distance: pJS1.interactivity.modes.grab.distance,
        mode_bubble_distance: pJS1.interactivity.modes.bubble.distance,
        mode_bubble_size: pJS1.interactivity.modes.bubble.size,
        mode_repulse_distance: pJS1.interactivity.modes.repulse.distance
    };
    pJS1.fn.retinaInit = function() {
        if (pJS1.retina_detect && window.devicePixelRatio > 1) {
            pJS1.canvas.pxratio = window.devicePixelRatio;
            pJS1.tmp.retina = true;
        } else {
            pJS1.canvas.pxratio = 1;
            pJS1.tmp.retina = false;
        }
        pJS1.canvas.w = pJS1.canvas.el.offsetWidth * pJS1.canvas.pxratio;
        pJS1.canvas.h = pJS1.canvas.el.offsetHeight * pJS1.canvas.pxratio;
        pJS1.particles.size.value = pJS1.tmp.obj.size_value * pJS1.canvas.pxratio;
        pJS1.particles.size.anim.speed = pJS1.tmp.obj.size_anim_speed * pJS1.canvas.pxratio;
        pJS1.particles.move.speed = pJS1.tmp.obj.move_speed * pJS1.canvas.pxratio;
        pJS1.particles.line_linked.distance = pJS1.tmp.obj.line_linked_distance * pJS1.canvas.pxratio;
        pJS1.interactivity.modes.grab.distance = pJS1.tmp.obj.mode_grab_distance * pJS1.canvas.pxratio;
        pJS1.interactivity.modes.bubble.distance = pJS1.tmp.obj.mode_bubble_distance * pJS1.canvas.pxratio;
        pJS1.particles.line_linked.width = pJS1.tmp.obj.line_linked_width * pJS1.canvas.pxratio;
        pJS1.interactivity.modes.bubble.size = pJS1.tmp.obj.mode_bubble_size * pJS1.canvas.pxratio;
        pJS1.interactivity.modes.repulse.distance = pJS1.tmp.obj.mode_repulse_distance * pJS1.canvas.pxratio;
    };
    /* ---------- pJS functions - canvas ------------ */ pJS1.fn.canvasInit = function() {
        pJS1.canvas.ctx = pJS1.canvas.el.getContext('2d');
    };
    pJS1.fn.canvasSize = function() {
        pJS1.canvas.el.width = pJS1.canvas.w;
        pJS1.canvas.el.height = pJS1.canvas.h;
        if (pJS1 && pJS1.interactivity.events.resize) window.addEventListener('resize', function() {
            pJS1.canvas.w = pJS1.canvas.el.offsetWidth;
            pJS1.canvas.h = pJS1.canvas.el.offsetHeight;
            /* resize canvas */ if (pJS1.tmp.retina) {
                pJS1.canvas.w *= pJS1.canvas.pxratio;
                pJS1.canvas.h *= pJS1.canvas.pxratio;
            }
            pJS1.canvas.el.width = pJS1.canvas.w;
            pJS1.canvas.el.height = pJS1.canvas.h;
            /* repaint canvas on anim disabled */ if (!pJS1.particles.move.enable) {
                pJS1.fn.particlesEmpty();
                pJS1.fn.particlesCreate();
                pJS1.fn.particlesDraw();
                pJS1.fn.vendors.densityAutoParticles();
            }
            /* density particles enabled */ pJS1.fn.vendors.densityAutoParticles();
        });
    };
    pJS1.fn.canvasPaint = function() {
        pJS1.canvas.ctx.fillRect(0, 0, pJS1.canvas.w, pJS1.canvas.h);
    };
    pJS1.fn.canvasClear = function() {
        pJS1.canvas.ctx.clearRect(0, 0, pJS1.canvas.w, pJS1.canvas.h);
    };
    /* --------- pJS functions - particles ----------- */ pJS1.fn.particle = function(color, opacity, position) {
        /* size */ this.radius = (pJS1.particles.size.random ? Math.random() : 1) * pJS1.particles.size.value;
        if (pJS1.particles.size.anim.enable) {
            this.size_status = false;
            this.vs = pJS1.particles.size.anim.speed / 100;
            if (!pJS1.particles.size.anim.sync) this.vs = this.vs * Math.random();
        }
        /* position */ this.x = position ? position.x : Math.random() * pJS1.canvas.w;
        this.y = position ? position.y : Math.random() * pJS1.canvas.h;
        /* check position  - into the canvas */ if (this.x > pJS1.canvas.w - this.radius * 2) this.x = this.x - this.radius;
        else if (this.x < this.radius * 2) this.x = this.x + this.radius;
        if (this.y > pJS1.canvas.h - this.radius * 2) this.y = this.y - this.radius;
        else if (this.y < this.radius * 2) this.y = this.y + this.radius;
        /* check position - avoid overlap */ if (pJS1.particles.move.bounce) pJS1.fn.vendors.checkOverlap(this, position);
        /* color */ this.color = {
        };
        if (typeof color.value == 'object') {
            if (color.value instanceof Array) {
                var color_selected = color.value[Math.floor(Math.random() * pJS1.particles.color.value.length)];
                this.color.rgb = hexToRgb(color_selected);
            } else {
                if (color.value.r != undefined && color.value.g != undefined && color.value.b != undefined) this.color.rgb = {
                    r: color.value.r,
                    g: color.value.g,
                    b: color.value.b
                };
                if (color.value.h != undefined && color.value.s != undefined && color.value.l != undefined) this.color.hsl = {
                    h: color.value.h,
                    s: color.value.s,
                    l: color.value.l
                };
            }
        } else if (color.value == 'random') this.color.rgb = {
            r: Math.floor(Math.random() * 256) + 0,
            g: Math.floor(Math.random() * 256) + 0,
            b: Math.floor(Math.random() * 256) + 0
        };
        else if (typeof color.value == 'string') {
            this.color = color;
            this.color.rgb = hexToRgb(this.color.value);
        }
        /* opacity */ this.opacity = (pJS1.particles.opacity.random ? Math.random() : 1) * pJS1.particles.opacity.value;
        if (pJS1.particles.opacity.anim.enable) {
            this.opacity_status = false;
            this.vo = pJS1.particles.opacity.anim.speed / 100;
            if (!pJS1.particles.opacity.anim.sync) this.vo = this.vo * Math.random();
        }
        /* animation - velocity for speed */ var velbase = {
        };
        switch(pJS1.particles.move.direction){
            case 'top':
                velbase = {
                    x: 0,
                    y: -1
                };
                break;
            case 'top-right':
                velbase = {
                    x: 0.5,
                    y: -0.5
                };
                break;
            case 'right':
                velbase = {
                    x: 1,
                    y: -0
                };
                break;
            case 'bottom-right':
                velbase = {
                    x: 0.5,
                    y: 0.5
                };
                break;
            case 'bottom':
                velbase = {
                    x: 0,
                    y: 1
                };
                break;
            case 'bottom-left':
                velbase = {
                    x: -0.5,
                    y: 1
                };
                break;
            case 'left':
                velbase = {
                    x: -1,
                    y: 0
                };
                break;
            case 'top-left':
                velbase = {
                    x: -0.5,
                    y: -0.5
                };
                break;
            default:
                velbase = {
                    x: 0,
                    y: 0
                };
                break;
        }
        if (pJS1.particles.move.straight) {
            this.vx = velbase.x;
            this.vy = velbase.y;
            if (pJS1.particles.move.random) {
                this.vx = this.vx * Math.random();
                this.vy = this.vy * Math.random();
            }
        } else {
            this.vx = velbase.x + Math.random() - 0.5;
            this.vy = velbase.y + Math.random() - 0.5;
        }
        // var theta = 2.0 * Math.PI * Math.random();
        // this.vx = Math.cos(theta);
        // this.vy = Math.sin(theta);
        this.vx_i = this.vx;
        this.vy_i = this.vy;
        /* if shape is image */ var shape_type = pJS1.particles.shape.type;
        if (typeof shape_type == 'object') {
            if (shape_type instanceof Array) {
                var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
                this.shape = shape_selected;
            }
        } else this.shape = shape_type;
        if (this.shape == 'image') {
            var sh = pJS1.particles.shape;
            this.img = {
                src: sh.image.src,
                ratio: sh.image.width / sh.image.height
            };
            if (!this.img.ratio) this.img.ratio = 1;
            if (pJS1.tmp.img_type == 'svg' && pJS1.tmp.source_svg != undefined) {
                pJS1.fn.vendors.createSvgImg(this);
                if (pJS1.tmp.pushing) this.img.loaded = false;
            }
        }
    };
    pJS1.fn.particle.prototype.draw = function() {
        var p = this;
        if (p.radius_bubble != undefined) var radius = p.radius_bubble;
        else var radius = p.radius;
        if (p.opacity_bubble != undefined) var opacity = p.opacity_bubble;
        else var opacity = p.opacity;
        if (p.color.rgb) var color_value = 'rgba(' + p.color.rgb.r + ',' + p.color.rgb.g + ',' + p.color.rgb.b + ',' + opacity + ')';
        else var color_value = 'hsla(' + p.color.hsl.h + ',' + p.color.hsl.s + '%,' + p.color.hsl.l + '%,' + opacity + ')';
        pJS1.canvas.ctx.fillStyle = color_value;
        pJS1.canvas.ctx.beginPath();
        switch(p.shape){
            case 'circle':
                pJS1.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
                break;
            case 'edge':
                pJS1.canvas.ctx.rect(p.x - radius, p.y - radius, radius * 2, radius * 2);
                break;
            case 'triangle':
                pJS1.fn.vendors.drawShape(pJS1.canvas.ctx, p.x - radius, p.y + radius / 1.66, radius * 2, 3, 2);
                break;
            case 'polygon':
                pJS1.fn.vendors.drawShape(pJS1.canvas.ctx, p.x - radius / (pJS1.particles.shape.polygon.nb_sides / 3.5), p.y - radius / 0.76, radius * 2.66 / (pJS1.particles.shape.polygon.nb_sides / 3), pJS1.particles.shape.polygon.nb_sides, 1 // sideCountDenominator
                );
                break;
            case 'star':
                pJS1.fn.vendors.drawShape(pJS1.canvas.ctx, p.x - radius * 2 / (pJS1.particles.shape.polygon.nb_sides / 4), p.y - radius / 1.52, radius * 5.32 / (pJS1.particles.shape.polygon.nb_sides / 3), pJS1.particles.shape.polygon.nb_sides, 2 // sideCountDenominator
                );
                break;
            case 'image':
                function draw() {
                    pJS1.canvas.ctx.drawImage(img_obj, p.x - radius, p.y - radius, radius * 2, radius * 2 / p.img.ratio);
                }
                if (pJS1.tmp.img_type == 'svg') var img_obj = p.img.obj;
                else var img_obj = pJS1.tmp.img_obj;
                if (img_obj) draw();
                break;
        }
        pJS1.canvas.ctx.closePath();
        if (pJS1.particles.shape.stroke.width > 0) {
            pJS1.canvas.ctx.strokeStyle = pJS1.particles.shape.stroke.color;
            pJS1.canvas.ctx.lineWidth = pJS1.particles.shape.stroke.width;
            pJS1.canvas.ctx.stroke();
        }
        pJS1.canvas.ctx.fill();
    };
    pJS1.fn.particlesCreate = function() {
        for(var i = 0; i < pJS1.particles.number.value; i++)pJS1.particles.array.push(new pJS1.fn.particle(pJS1.particles.color, pJS1.particles.opacity.value));
    };
    pJS1.fn.particlesUpdate = function() {
        for(var i = 0; i < pJS1.particles.array.length; i++){
            /* the particle */ var p = pJS1.particles.array[i];
            // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
            // var f = -BANG_SIZE / d;
            // if ( d < BANG_SIZE ) {
            //     var t = Math.atan2( dy, dx );
            //     p.vx = f * Math.cos(t);
            //     p.vy = f * Math.sin(t);
            // }
            /* move the particle */ if (pJS1.particles.move.enable) {
                var ms = pJS1.particles.move.speed / 2;
                p.x += p.vx * ms;
                p.y += p.vy * ms;
            }
            /* change opacity status */ if (pJS1.particles.opacity.anim.enable) {
                if (p.opacity_status == true) {
                    if (p.opacity >= pJS1.particles.opacity.value) p.opacity_status = false;
                    p.opacity += p.vo;
                } else {
                    if (p.opacity <= pJS1.particles.opacity.anim.opacity_min) p.opacity_status = true;
                    p.opacity -= p.vo;
                }
                if (p.opacity < 0) p.opacity = 0;
            }
            /* change size */ if (pJS1.particles.size.anim.enable) {
                if (p.size_status == true) {
                    if (p.radius >= pJS1.particles.size.value) p.size_status = false;
                    p.radius += p.vs;
                } else {
                    if (p.radius <= pJS1.particles.size.anim.size_min) p.size_status = true;
                    p.radius -= p.vs;
                }
                if (p.radius < 0) p.radius = 0;
            }
            /* change particle position if it is out of canvas */ if (pJS1.particles.move.out_mode == 'bounce') var new_pos = {
                x_left: p.radius,
                x_right: pJS1.canvas.w,
                y_top: p.radius,
                y_bottom: pJS1.canvas.h
            };
            else var new_pos = {
                x_left: -p.radius,
                x_right: pJS1.canvas.w + p.radius,
                y_top: -p.radius,
                y_bottom: pJS1.canvas.h + p.radius
            };
            if (p.x - p.radius > pJS1.canvas.w) {
                p.x = new_pos.x_left;
                p.y = Math.random() * pJS1.canvas.h;
            } else if (p.x + p.radius < 0) {
                p.x = new_pos.x_right;
                p.y = Math.random() * pJS1.canvas.h;
            }
            if (p.y - p.radius > pJS1.canvas.h) {
                p.y = new_pos.y_top;
                p.x = Math.random() * pJS1.canvas.w;
            } else if (p.y + p.radius < 0) {
                p.y = new_pos.y_bottom;
                p.x = Math.random() * pJS1.canvas.w;
            }
            /* out of canvas modes */ switch(pJS1.particles.move.out_mode){
                case 'bounce':
                    if (p.x + p.radius > pJS1.canvas.w) p.vx = -p.vx;
                    else if (p.x - p.radius < 0) p.vx = -p.vx;
                    if (p.y + p.radius > pJS1.canvas.h) p.vy = -p.vy;
                    else if (p.y - p.radius < 0) p.vy = -p.vy;
                    break;
            }
            /* events */ if (isInArray('grab', pJS1.interactivity.events.onhover.mode)) pJS1.fn.modes.grabParticle(p);
            if (isInArray('bubble', pJS1.interactivity.events.onhover.mode) || isInArray('bubble', pJS1.interactivity.events.onclick.mode)) pJS1.fn.modes.bubbleParticle(p);
            if (isInArray('repulse', pJS1.interactivity.events.onhover.mode) || isInArray('repulse', pJS1.interactivity.events.onclick.mode)) pJS1.fn.modes.repulseParticle(p);
            /* interaction auto between particles */ if (pJS1.particles.line_linked.enable || pJS1.particles.move.attract.enable) for(var j = i + 1; j < pJS1.particles.array.length; j++){
                var p2 = pJS1.particles.array[j];
                /* link particles */ if (pJS1.particles.line_linked.enable) pJS1.fn.interact.linkParticles(p, p2);
                /* attract particles */ if (pJS1.particles.move.attract.enable) pJS1.fn.interact.attractParticles(p, p2);
                /* bounce particles */ if (pJS1.particles.move.bounce) pJS1.fn.interact.bounceParticles(p, p2);
            }
        }
    };
    pJS1.fn.particlesDraw = function() {
        /* clear canvas */ pJS1.canvas.ctx.clearRect(0, 0, pJS1.canvas.w, pJS1.canvas.h);
        /* update each particles param */ pJS1.fn.particlesUpdate();
        /* draw each particle */ for(var i = 0; i < pJS1.particles.array.length; i++){
            var p = pJS1.particles.array[i];
            p.draw();
        }
    };
    pJS1.fn.particlesEmpty = function() {
        pJS1.particles.array = [];
    };
    pJS1.fn.particlesRefresh = function() {
        /* init all */ cancelRequestAnimFrame(pJS1.fn.checkAnimFrame);
        cancelRequestAnimFrame(pJS1.fn.drawAnimFrame);
        pJS1.tmp.source_svg = undefined;
        pJS1.tmp.img_obj = undefined;
        pJS1.tmp.count_svg = 0;
        pJS1.fn.particlesEmpty();
        pJS1.fn.canvasClear();
        /* restart */ pJS1.fn.vendors.start();
    };
    /* ---------- pJS functions - particles interaction ------------ */ pJS1.fn.interact.linkParticles = function(p1, p2) {
        var dx = p1.x - p2.x, dy = p1.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
        /* draw a line between p1 and p2 if the distance between them is under the config distance */ if (dist <= pJS1.particles.line_linked.distance) {
            var opacity_line = pJS1.particles.line_linked.opacity - dist / (1 / pJS1.particles.line_linked.opacity) / pJS1.particles.line_linked.distance;
            if (opacity_line > 0) {
                /* style */ var color_line = pJS1.particles.line_linked.color_rgb_line;
                pJS1.canvas.ctx.strokeStyle = 'rgba(' + color_line.r + ',' + color_line.g + ',' + color_line.b + ',' + opacity_line + ')';
                pJS1.canvas.ctx.lineWidth = pJS1.particles.line_linked.width;
                //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
                /* path */ pJS1.canvas.ctx.beginPath();
                pJS1.canvas.ctx.moveTo(p1.x, p1.y);
                pJS1.canvas.ctx.lineTo(p2.x, p2.y);
                pJS1.canvas.ctx.stroke();
                pJS1.canvas.ctx.closePath();
            }
        }
    };
    pJS1.fn.interact.attractParticles = function(p1, p2) {
        /* condensed particles */ var dx = p1.x - p2.x, dy = p1.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
        if (dist <= pJS1.particles.line_linked.distance) {
            var ax = dx / (pJS1.particles.move.attract.rotateX * 1000), ay = dy / (pJS1.particles.move.attract.rotateY * 1000);
            p1.vx -= ax;
            p1.vy -= ay;
            p2.vx += ax;
            p2.vy += ay;
        }
    };
    pJS1.fn.interact.bounceParticles = function(p1, p2) {
        var dx = p1.x - p2.x, dy = p1.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy), dist_p = p1.radius + p2.radius;
        if (dist <= dist_p) {
            p1.vx = -p1.vx;
            p1.vy = -p1.vy;
            p2.vx = -p2.vx;
            p2.vy = -p2.vy;
        }
    };
    /* ---------- pJS functions - modes events ------------ */ pJS1.fn.modes.pushParticles = function(nb, pos) {
        pJS1.tmp.pushing = true;
        for(var i = 0; i < nb; i++){
            pJS1.particles.array.push(new pJS1.fn.particle(pJS1.particles.color, pJS1.particles.opacity.value, {
                'x': pos ? pos.pos_x : Math.random() * pJS1.canvas.w,
                'y': pos ? pos.pos_y : Math.random() * pJS1.canvas.h
            }));
            if (i == nb - 1) {
                if (!pJS1.particles.move.enable) pJS1.fn.particlesDraw();
                pJS1.tmp.pushing = false;
            }
        }
    };
    pJS1.fn.modes.removeParticles = function(nb) {
        pJS1.particles.array.splice(0, nb);
        if (!pJS1.particles.move.enable) pJS1.fn.particlesDraw();
    };
    pJS1.fn.modes.bubbleParticle = function(p) {
        /* on hover event */ if (pJS1.interactivity.events.onhover.enable && isInArray('bubble', pJS1.interactivity.events.onhover.mode)) {
            var dx_mouse = p.x - pJS1.interactivity.mouse.pos_x, dy_mouse = p.y - pJS1.interactivity.mouse.pos_y, dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse), ratio = 1 - dist_mouse / pJS1.interactivity.modes.bubble.distance;
            function init() {
                p.opacity_bubble = p.opacity;
                p.radius_bubble = p.radius;
            }
            /* mousemove - check ratio */ if (dist_mouse <= pJS1.interactivity.modes.bubble.distance) {
                if (ratio >= 0 && pJS1.interactivity.status == 'mousemove') {
                    /* size */ if (pJS1.interactivity.modes.bubble.size != pJS1.particles.size.value) {
                        if (pJS1.interactivity.modes.bubble.size > pJS1.particles.size.value) {
                            var size = p.radius + pJS1.interactivity.modes.bubble.size * ratio;
                            if (size >= 0) p.radius_bubble = size;
                        } else {
                            var dif = p.radius - pJS1.interactivity.modes.bubble.size, size = p.radius - dif * ratio;
                            if (size > 0) p.radius_bubble = size;
                            else p.radius_bubble = 0;
                        }
                    }
                    /* opacity */ if (pJS1.interactivity.modes.bubble.opacity != pJS1.particles.opacity.value) {
                        if (pJS1.interactivity.modes.bubble.opacity > pJS1.particles.opacity.value) {
                            var opacity = pJS1.interactivity.modes.bubble.opacity * ratio;
                            if (opacity > p.opacity && opacity <= pJS1.interactivity.modes.bubble.opacity) p.opacity_bubble = opacity;
                        } else {
                            var opacity = p.opacity - (pJS1.particles.opacity.value - pJS1.interactivity.modes.bubble.opacity) * ratio;
                            if (opacity < p.opacity && opacity >= pJS1.interactivity.modes.bubble.opacity) p.opacity_bubble = opacity;
                        }
                    }
                }
            } else init();
            /* mouseleave */ if (pJS1.interactivity.status == 'mouseleave') init();
        } else if (pJS1.interactivity.events.onclick.enable && isInArray('bubble', pJS1.interactivity.events.onclick.mode)) {
            if (pJS1.tmp.bubble_clicking) {
                var dx_mouse = p.x - pJS1.interactivity.mouse.click_pos_x, dy_mouse = p.y - pJS1.interactivity.mouse.click_pos_y, dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse), time_spent = (new Date().getTime() - pJS1.interactivity.mouse.click_time) / 1000;
                if (time_spent > pJS1.interactivity.modes.bubble.duration) pJS1.tmp.bubble_duration_end = true;
                if (time_spent > pJS1.interactivity.modes.bubble.duration * 2) {
                    pJS1.tmp.bubble_clicking = false;
                    pJS1.tmp.bubble_duration_end = false;
                }
            }
            function process(bubble_param, particles_param, p_obj_bubble, p_obj, id) {
                if (bubble_param != particles_param) {
                    if (!pJS1.tmp.bubble_duration_end) {
                        if (dist_mouse <= pJS1.interactivity.modes.bubble.distance) {
                            if (p_obj_bubble != undefined) var obj = p_obj_bubble;
                            else var obj = p_obj;
                            if (obj != bubble_param) {
                                var value = p_obj - time_spent * (p_obj - bubble_param) / pJS1.interactivity.modes.bubble.duration;
                                if (id == 'size') p.radius_bubble = value;
                                if (id == 'opacity') p.opacity_bubble = value;
                            }
                        } else {
                            if (id == 'size') p.radius_bubble = undefined;
                            if (id == 'opacity') p.opacity_bubble = undefined;
                        }
                    } else if (p_obj_bubble != undefined) {
                        var value_tmp = p_obj - time_spent * (p_obj - bubble_param) / pJS1.interactivity.modes.bubble.duration, dif = bubble_param - value_tmp;
                        value = bubble_param + dif;
                        if (id == 'size') p.radius_bubble = value;
                        if (id == 'opacity') p.opacity_bubble = value;
                    }
                }
            }
            if (pJS1.tmp.bubble_clicking) {
                /* size */ process(pJS1.interactivity.modes.bubble.size, pJS1.particles.size.value, p.radius_bubble, p.radius, 'size');
                /* opacity */ process(pJS1.interactivity.modes.bubble.opacity, pJS1.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
            }
        }
    };
    pJS1.fn.modes.repulseParticle = function(p) {
        if (pJS1.interactivity.events.onhover.enable && isInArray('repulse', pJS1.interactivity.events.onhover.mode) && pJS1.interactivity.status == 'mousemove') {
            var dx_mouse = p.x - pJS1.interactivity.mouse.pos_x, dy_mouse = p.y - pJS1.interactivity.mouse.pos_y, dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
            var normVec = {
                x: dx_mouse / dist_mouse,
                y: dy_mouse / dist_mouse
            }, repulseRadius = pJS1.interactivity.modes.repulse.distance, velocity = 100, repulseFactor = clamp(1 / repulseRadius * (-1 * Math.pow(dist_mouse / repulseRadius, 2) + 1) * repulseRadius * velocity, 0, 50);
            var pos = {
                x: p.x + normVec.x * repulseFactor,
                y: p.y + normVec.y * repulseFactor
            };
            if (pJS1.particles.move.out_mode == 'bounce') {
                if (pos.x - p.radius > 0 && pos.x + p.radius < pJS1.canvas.w) p.x = pos.x;
                if (pos.y - p.radius > 0 && pos.y + p.radius < pJS1.canvas.h) p.y = pos.y;
            } else {
                p.x = pos.x;
                p.y = pos.y;
            }
        } else if (pJS1.interactivity.events.onclick.enable && isInArray('repulse', pJS1.interactivity.events.onclick.mode)) {
            if (!pJS1.tmp.repulse_finish) {
                pJS1.tmp.repulse_count++;
                if (pJS1.tmp.repulse_count == pJS1.particles.array.length) pJS1.tmp.repulse_finish = true;
            }
            if (pJS1.tmp.repulse_clicking) {
                var repulseRadius = Math.pow(pJS1.interactivity.modes.repulse.distance / 6, 3);
                var dx = pJS1.interactivity.mouse.click_pos_x - p.x, dy = pJS1.interactivity.mouse.click_pos_y - p.y, d = dx * dx + dy * dy;
                var force = -repulseRadius / d * 1;
                function process() {
                    var f = Math.atan2(dy, dx);
                    p.vx = force * Math.cos(f);
                    p.vy = force * Math.sin(f);
                    if (pJS1.particles.move.out_mode == 'bounce') {
                        var pos = {
                            x: p.x + p.vx,
                            y: p.y + p.vy
                        };
                        if (pos.x + p.radius > pJS1.canvas.w) p.vx = -p.vx;
                        else if (pos.x - p.radius < 0) p.vx = -p.vx;
                        if (pos.y + p.radius > pJS1.canvas.h) p.vy = -p.vy;
                        else if (pos.y - p.radius < 0) p.vy = -p.vy;
                    }
                }
                // default
                if (d <= repulseRadius) process();
            // bang - slow motion mode
            // if(!pJS.tmp.repulse_finish){
            //   if(d <= repulseRadius){
            //     process();
            //   }
            // }else{
            //   process();
            // }
            } else if (pJS1.tmp.repulse_clicking == false) {
                p.vx = p.vx_i;
                p.vy = p.vy_i;
            }
        }
    };
    pJS1.fn.modes.grabParticle = function(p) {
        if (pJS1.interactivity.events.onhover.enable && pJS1.interactivity.status == 'mousemove') {
            var dx_mouse = p.x - pJS1.interactivity.mouse.pos_x, dy_mouse = p.y - pJS1.interactivity.mouse.pos_y, dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
            /* draw a line between the cursor and the particle if the distance between them is under the config distance */ if (dist_mouse <= pJS1.interactivity.modes.grab.distance) {
                var opacity_line = pJS1.interactivity.modes.grab.line_linked.opacity - dist_mouse / (1 / pJS1.interactivity.modes.grab.line_linked.opacity) / pJS1.interactivity.modes.grab.distance;
                if (opacity_line > 0) {
                    /* style */ var color_line = pJS1.particles.line_linked.color_rgb_line;
                    pJS1.canvas.ctx.strokeStyle = 'rgba(' + color_line.r + ',' + color_line.g + ',' + color_line.b + ',' + opacity_line + ')';
                    pJS1.canvas.ctx.lineWidth = pJS1.particles.line_linked.width;
                    //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
                    /* path */ pJS1.canvas.ctx.beginPath();
                    pJS1.canvas.ctx.moveTo(p.x, p.y);
                    pJS1.canvas.ctx.lineTo(pJS1.interactivity.mouse.pos_x, pJS1.interactivity.mouse.pos_y);
                    pJS1.canvas.ctx.stroke();
                    pJS1.canvas.ctx.closePath();
                }
            }
        }
    };
    /* ---------- pJS functions - vendors ------------ */ pJS1.fn.vendors.eventsListeners = function() {
        /* events target element */ if (pJS1.interactivity.detect_on == 'window') pJS1.interactivity.el = window;
        else pJS1.interactivity.el = pJS1.canvas.el;
        /* detect mouse pos - on hover / click event */ if (pJS1.interactivity.events.onhover.enable || pJS1.interactivity.events.onclick.enable) {
            /* el on mousemove */ pJS1.interactivity.el.addEventListener('mousemove', function(e) {
                if (pJS1.interactivity.el == window) var pos_x = e.clientX, pos_y = e.clientY;
                else var pos_x = e.offsetX || e.clientX, pos_y = e.offsetY || e.clientY;
                pJS1.interactivity.mouse.pos_x = pos_x;
                pJS1.interactivity.mouse.pos_y = pos_y;
                if (pJS1.tmp.retina) {
                    pJS1.interactivity.mouse.pos_x *= pJS1.canvas.pxratio;
                    pJS1.interactivity.mouse.pos_y *= pJS1.canvas.pxratio;
                }
                pJS1.interactivity.status = 'mousemove';
            });
            /* el on onmouseleave */ pJS1.interactivity.el.addEventListener('mouseleave', function(e) {
                pJS1.interactivity.mouse.pos_x = null;
                pJS1.interactivity.mouse.pos_y = null;
                pJS1.interactivity.status = 'mouseleave';
            });
        }
        /* on click event */ if (pJS1.interactivity.events.onclick.enable) pJS1.interactivity.el.addEventListener('click', function() {
            pJS1.interactivity.mouse.click_pos_x = pJS1.interactivity.mouse.pos_x;
            pJS1.interactivity.mouse.click_pos_y = pJS1.interactivity.mouse.pos_y;
            pJS1.interactivity.mouse.click_time = new Date().getTime();
            if (pJS1.interactivity.events.onclick.enable) switch(pJS1.interactivity.events.onclick.mode){
                case 'push':
                    if (pJS1.particles.move.enable) pJS1.fn.modes.pushParticles(pJS1.interactivity.modes.push.particles_nb, pJS1.interactivity.mouse);
                    else {
                        if (pJS1.interactivity.modes.push.particles_nb == 1) pJS1.fn.modes.pushParticles(pJS1.interactivity.modes.push.particles_nb, pJS1.interactivity.mouse);
                        else if (pJS1.interactivity.modes.push.particles_nb > 1) pJS1.fn.modes.pushParticles(pJS1.interactivity.modes.push.particles_nb);
                    }
                    break;
                case 'remove':
                    pJS1.fn.modes.removeParticles(pJS1.interactivity.modes.remove.particles_nb);
                    break;
                case 'bubble':
                    pJS1.tmp.bubble_clicking = true;
                    break;
                case 'repulse':
                    pJS1.tmp.repulse_clicking = true;
                    pJS1.tmp.repulse_count = 0;
                    pJS1.tmp.repulse_finish = false;
                    setTimeout(function() {
                        pJS1.tmp.repulse_clicking = false;
                    }, pJS1.interactivity.modes.repulse.duration * 1000);
                    break;
            }
        });
    };
    pJS1.fn.vendors.densityAutoParticles = function() {
        if (pJS1.particles.number.density.enable) {
            /* calc area */ var area = pJS1.canvas.el.width * pJS1.canvas.el.height / 1000;
            if (pJS1.tmp.retina) area = area / (pJS1.canvas.pxratio * 2);
            /* calc number of particles based on density area */ var nb_particles = area * pJS1.particles.number.value / pJS1.particles.number.density.value_area;
            /* add or remove X particles */ var missing_particles = pJS1.particles.array.length - nb_particles;
            if (missing_particles < 0) pJS1.fn.modes.pushParticles(Math.abs(missing_particles));
            else pJS1.fn.modes.removeParticles(missing_particles);
        }
    };
    pJS1.fn.vendors.checkOverlap = function(p1, position) {
        for(var i = 0; i < pJS1.particles.array.length; i++){
            var p2 = pJS1.particles.array[i];
            var dx = p1.x - p2.x, dy = p1.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
            if (dist <= p1.radius + p2.radius) {
                p1.x = position ? position.x : Math.random() * pJS1.canvas.w;
                p1.y = position ? position.y : Math.random() * pJS1.canvas.h;
                pJS1.fn.vendors.checkOverlap(p1);
            }
        }
    };
    pJS1.fn.vendors.createSvgImg = function(p) {
        /* set color to svg element */ var svgXml = pJS1.tmp.source_svg, rgbHex = /#([0-9A-F]{3,6})/gi, coloredSvgXml = svgXml.replace(rgbHex, function(m, r, g, b) {
            if (p.color.rgb) var color_value = 'rgba(' + p.color.rgb.r + ',' + p.color.rgb.g + ',' + p.color.rgb.b + ',' + p.opacity + ')';
            else var color_value = 'hsla(' + p.color.hsl.h + ',' + p.color.hsl.s + '%,' + p.color.hsl.l + '%,' + p.opacity + ')';
            return color_value;
        });
        /* prepare to create img with colored svg */ var svg = new Blob([
            coloredSvgXml
        ], {
            type: 'image/svg+xml;charset=utf-8'
        }), DOMURL = window.URL || window.webkitURL || window, url = DOMURL.createObjectURL(svg);
        /* create particle img obj */ var img = new Image();
        img.addEventListener('load', function() {
            p.img.obj = img;
            p.img.loaded = true;
            DOMURL.revokeObjectURL(url);
            pJS1.tmp.count_svg++;
        });
        img.src = url;
    };
    pJS1.fn.vendors.destroypJS = function() {
        cancelAnimationFrame(pJS1.fn.drawAnimFrame);
        canvas_el.remove();
        pJSDom = null;
    };
    pJS1.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator) {
        // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
        var sideCount = sideCountNumerator * sideCountDenominator;
        var decimalSides = sideCountNumerator / sideCountDenominator;
        var interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
        var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
        c.save();
        c.beginPath();
        c.translate(startX, startY);
        c.moveTo(0, 0);
        for(var i = 0; i < sideCount; i++){
            c.lineTo(sideLength, 0);
            c.translate(sideLength, 0);
            c.rotate(interiorAngle);
        }
        //c.stroke();
        c.fill();
        c.restore();
    };
    pJS1.fn.vendors.exportImg = function() {
        window.open(pJS1.canvas.el.toDataURL('image/png'), '_blank');
    };
    pJS1.fn.vendors.loadImg = function(type) {
        pJS1.tmp.img_error = undefined;
        if (pJS1.particles.shape.image.src != '') {
            if (type == 'svg') {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', pJS1.particles.shape.image.src);
                xhr.onreadystatechange = function(data) {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            pJS1.tmp.source_svg = data.currentTarget.response;
                            pJS1.fn.vendors.checkBeforeDraw();
                        } else {
                            console.log('Error pJS - Image not found');
                            pJS1.tmp.img_error = true;
                        }
                    }
                };
                xhr.send();
            } else {
                var img = new Image();
                img.addEventListener('load', function() {
                    pJS1.tmp.img_obj = img;
                    pJS1.fn.vendors.checkBeforeDraw();
                });
                img.src = pJS1.particles.shape.image.src;
            }
        } else {
            console.log('Error pJS - No image.src');
            pJS1.tmp.img_error = true;
        }
    };
    pJS1.fn.vendors.draw = function() {
        if (pJS1.particles.shape.type == 'image') {
            if (pJS1.tmp.img_type == 'svg') {
                if (pJS1.tmp.count_svg >= pJS1.particles.number.value) {
                    pJS1.fn.particlesDraw();
                    if (!pJS1.particles.move.enable) cancelRequestAnimFrame(pJS1.fn.drawAnimFrame);
                    else pJS1.fn.drawAnimFrame = requestAnimFrame(pJS1.fn.vendors.draw);
                } else //console.log('still loading...');
                if (!pJS1.tmp.img_error) pJS1.fn.drawAnimFrame = requestAnimFrame(pJS1.fn.vendors.draw);
            } else {
                if (pJS1.tmp.img_obj != undefined) {
                    pJS1.fn.particlesDraw();
                    if (!pJS1.particles.move.enable) cancelRequestAnimFrame(pJS1.fn.drawAnimFrame);
                    else pJS1.fn.drawAnimFrame = requestAnimFrame(pJS1.fn.vendors.draw);
                } else if (!pJS1.tmp.img_error) pJS1.fn.drawAnimFrame = requestAnimFrame(pJS1.fn.vendors.draw);
            }
        } else {
            pJS1.fn.particlesDraw();
            if (!pJS1.particles.move.enable) cancelRequestAnimFrame(pJS1.fn.drawAnimFrame);
            else pJS1.fn.drawAnimFrame = requestAnimFrame(pJS1.fn.vendors.draw);
        }
    };
    pJS1.fn.vendors.checkBeforeDraw = function() {
        // if shape is image
        if (pJS1.particles.shape.type == 'image') {
            if (pJS1.tmp.img_type == 'svg' && pJS1.tmp.source_svg == undefined) pJS1.tmp.checkAnimFrame = requestAnimFrame(check);
            else {
                //console.log('images loaded! cancel check');
                cancelRequestAnimFrame(pJS1.tmp.checkAnimFrame);
                if (!pJS1.tmp.img_error) {
                    pJS1.fn.vendors.init();
                    pJS1.fn.vendors.draw();
                }
            }
        } else {
            pJS1.fn.vendors.init();
            pJS1.fn.vendors.draw();
        }
    };
    pJS1.fn.vendors.init = function() {
        /* init canvas + particles */ pJS1.fn.retinaInit();
        pJS1.fn.canvasInit();
        pJS1.fn.canvasSize();
        pJS1.fn.canvasPaint();
        pJS1.fn.particlesCreate();
        pJS1.fn.vendors.densityAutoParticles();
        /* particles.line_linked - convert hex colors to rgb */ pJS1.particles.line_linked.color_rgb_line = hexToRgb(pJS1.particles.line_linked.color);
    };
    pJS1.fn.vendors.start = function() {
        if (isInArray('image', pJS1.particles.shape.type)) {
            pJS1.tmp.img_type = pJS1.particles.shape.image.src.substr(pJS1.particles.shape.image.src.length - 3);
            pJS1.fn.vendors.loadImg(pJS1.tmp.img_type);
        } else pJS1.fn.vendors.checkBeforeDraw();
    };
    /* ---------- pJS - start ------------ */ pJS1.fn.vendors.eventsListeners();
    pJS1.fn.vendors.start();
};
/* ---------- global functions - vendors ------------ */ Object.deepExtend = function(destination, source) {
    for(var property in source)if (source[property] && source[property].constructor && source[property].constructor === Object) {
        destination[property] = destination[property] || {
        };
        arguments.callee(destination[property], source[property]);
    } else destination[property] = source[property];
    return destination;
};
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();
window.cancelRequestAnimFrame = (function() {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
})();
function hexToRgb(hex) {
    // By Tim Down - http://stackoverflow.com/a/5624139/3493650
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
function clamp(number, min, max) {
    return Math.min(Math.max(number, min), max);
}
function isInArray(value, array) {
    return array.indexOf(value) > -1;
}
/* ---------- particles.js functions - start ------------ */ window.pJSDom = [];
window.particlesJS = function(tag_id, params) {
    //console.log(params);
    /* no string id? so it's object params, and set the id with default id */ if (typeof tag_id != 'string') {
        params = tag_id;
        tag_id = 'particles-js';
    }
    /* no id? set the id to default id */ if (!tag_id) tag_id = 'particles-js';
    /* pJS elements */ var pJS_tag = document.getElementById(tag_id), pJS_canvas_class = 'particles-js-canvas-el', exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);
    /* remove canvas if exists into the pJS target tag */ if (exist_canvas.length) while(exist_canvas.length > 0)pJS_tag.removeChild(exist_canvas[0]);
    /* create canvas element */ var canvas_el = document.createElement('canvas');
    canvas_el.className = pJS_canvas_class;
    /* set size canvas */ canvas_el.style.width = "100%";
    canvas_el.style.height = "100%";
    /* append canvas */ var canvas = document.getElementById(tag_id).appendChild(canvas_el);
    /* launch particle.js */ if (canvas != null) pJSDom.push(new pJS(tag_id, params));
};
window.particlesJS.load = function(tag_id, path_config_json, callback) {
    /* load json config */ var xhr = new XMLHttpRequest();
    xhr.open('GET', path_config_json);
    xhr.onreadystatechange = function(data) {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var params = JSON.parse(data.currentTarget.response);
                window.particlesJS(tag_id, params);
                if (callback) callback();
            } else {
                console.log('Error pJS - XMLHttpRequest status: ' + xhr.status);
                console.log('Error pJS - File config not found');
            }
        }
    };
    xhr.send();
};

//# sourceMappingURL=index-modified.27029763.js.map
