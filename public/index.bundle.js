/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blankObject", function() { return blankObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyDev", function() { return destroyDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_differs", function() { return _differs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_differsImmutable", function() { return _differsImmutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fire", function() { return fire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_set", function() { return _set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_stage", function() { return _stage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDev", function() { return setDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callAll", function() { return callAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_mount", function() { return _mount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PENDING", function() { return PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS", function() { return SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAILURE", function() { return FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromStore", function() { return removeFromStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proto", function() { return proto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protoDev", function() { return protoDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapAnimation", function() { return wrapAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixPosition", function() { return fixPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlePromise", function() { return handlePromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachNode", function() { return detachNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachBetween", function() { return detachBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachBefore", function() { return detachBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachAfter", function() { return detachAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reinsertBetween", function() { return reinsertBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reinsertChildren", function() { return reinsertChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reinsertAfter", function() { return reinsertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reinsertBefore", function() { return reinsertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyEach", function() { return destroyEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFragment", function() { return createFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSvgElement", function() { return createSvgElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createText", function() { return createText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComment", function() { return createComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addListener", function() { return addListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeListener", function() { return removeListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttributes", function() { return setAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCustomElementData", function() { return setCustomElementData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return removeAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setXlinkAttribute", function() { return setXlinkAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBindingGroupValue", function() { return getBindingGroupValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeRangesToArray", function() { return timeRangesToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claimElement", function() { return claimElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claimText", function() { return claimText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setData", function() { return setData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInputType", function() { return setInputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyle", function() { return setStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOption", function() { return selectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOptions", function() { return selectOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectValue", function() { return selectValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMultipleValue", function() { return selectMultipleValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addResizeListener", function() { return addResizeListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyBlock", function() { return destroyBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outroAndDestroyBlock", function() { return outroAndDestroyBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixAndOutroAndDestroyBlock", function() { return fixAndOutroAndDestroyBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateKeyedEach", function() { return updateKeyedEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measure", function() { return measure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpreadUpdate", function() { return getSpreadUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidAttributeNameCharacter", function() { return invalidAttributeNameCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escaped", function() { return escaped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missingComponent", function() { return missingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateSsrComponent", function() { return validateSsrComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRule", function() { return generateRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapTransition", function() { return wrapTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outros", function() { return outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupOutros", function() { return groupOutros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionManager", function() { return transitionManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignTrue", function() { return assignTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callAfter", function() { return callAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLoc", function() { return addLoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exclude", function() { return exclude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
function noop() {}

function assign(tar, src) {
	for (var k in src) tar[k] = src[k];
	return tar;
}

function assignTrue(tar, src) {
	for (var k in src) tar[k] = 1;
	return tar;
}

function isPromise(value) {
	return value && typeof value.then === 'function';
}

function callAfter(fn, i) {
	if (i === 0) fn();
	return () => {
		if (!--i) fn();
	};
}

function addLoc(element, file, line, column, char) {
	element.__svelte_meta = {
		loc: { file, line, column, char }
	};
}

function exclude(src, prop) {
	const tar = {};
	for (const k in src) k === prop || (tar[k] = src[k]);
	return tar;
}

function run(fn) {
	fn();
}

function append(target, node) {
	target.appendChild(node);
}

function insert(target, node, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function detachBetween(before, after) {
	while (before.nextSibling && before.nextSibling !== after) {
		before.parentNode.removeChild(before.nextSibling);
	}
}

function detachBefore(after) {
	while (after.previousSibling) {
		after.parentNode.removeChild(after.previousSibling);
	}
}

function detachAfter(before) {
	while (before.nextSibling) {
		before.parentNode.removeChild(before.nextSibling);
	}
}

function reinsertBetween(before, after, target) {
	while (before.nextSibling && before.nextSibling !== after) {
		target.appendChild(before.parentNode.removeChild(before.nextSibling));
	}
}

function reinsertChildren(parent, target) {
	while (parent.firstChild) target.appendChild(parent.firstChild);
}

function reinsertAfter(before, target) {
	while (before.nextSibling) target.appendChild(before.nextSibling);
}

function reinsertBefore(after, target) {
	var parent = after.parentNode;
	while (parent.firstChild !== after) target.appendChild(parent.firstChild);
}

function destroyEach(iterations, detach) {
	for (var i = 0; i < iterations.length; i += 1) {
		if (iterations[i]) iterations[i].d(detach);
	}
}

function createFragment() {
	return document.createDocumentFragment();
}

function createElement(name) {
	return document.createElement(name);
}

function createSvgElement(name) {
	return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function createText(data) {
	return document.createTextNode(data);
}

function createComment() {
	return document.createComment('');
}

function addListener(node, event, handler) {
	node.addEventListener(event, handler, false);
}

function removeListener(node, event, handler) {
	node.removeEventListener(event, handler, false);
}

function setAttribute(node, attribute, value) {
	node.setAttribute(attribute, value);
}

function setAttributes(node, attributes) {
	for (var key in attributes) {
		if (key === 'style') {
			node.style.cssText = attributes[key];
		} else if (key in node) {
			node[key] = attributes[key];
		} else {
			if (attributes[key] === undefined) removeAttribute(node, key);
			else setAttribute(node, key, attributes[key]);
		}
	}
}

function setCustomElementData(node, prop, value) {
	if (prop in node) {
		node[prop] = value;
	} else if (value) {
		setAttribute(node, prop, value);
	} else {
		removeAttribute(node, prop);
	}
}

function removeAttribute(node, attribute) {
	node.removeAttribute(attribute);
}

function setXlinkAttribute(node, attribute, value) {
	node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function getBindingGroupValue(group) {
	var value = [];
	for (var i = 0; i < group.length; i += 1) {
		if (group[i].checked) value.push(group[i].__value);
	}
	return value;
}

function toNumber(value) {
	return value === '' ? undefined : +value;
}

function timeRangesToArray(ranges) {
	var array = [];
	for (var i = 0; i < ranges.length; i += 1) {
		array.push({ start: ranges.start(i), end: ranges.end(i) });
	}
	return array;
}

function children (element) {
	return Array.from(element.childNodes);
}

function claimElement (nodes, name, attributes, svg) {
	for (var i = 0; i < nodes.length; i += 1) {
		var node = nodes[i];
		if (node.nodeName === name) {
			for (var j = 0; j < node.attributes.length; j += 1) {
				var attribute = node.attributes[j];
				if (!attributes[attribute.name]) node.removeAttribute(attribute.name);
			}
			return nodes.splice(i, 1)[0]; // TODO strip unwanted attributes
		}
	}

	return svg ? createSvgElement(name) : createElement(name);
}

function claimText (nodes, data) {
	for (var i = 0; i < nodes.length; i += 1) {
		var node = nodes[i];
		if (node.nodeType === 3) {
			node.data = data;
			return nodes.splice(i, 1)[0];
		}
	}

	return createText(data);
}

function setData(text, data) {
	text.data = '' + data;
}

function setInputType(input, type) {
	try {
		input.type = type;
	} catch (e) {}
}

function setStyle(node, key, value) {
	node.style.setProperty(key, value);
}

function selectOption(select, value) {
	for (var i = 0; i < select.options.length; i += 1) {
		var option = select.options[i];

		if (option.__value === value) {
			option.selected = true;
			return;
		}
	}
}

function selectOptions(select, value) {
	for (var i = 0; i < select.options.length; i += 1) {
		var option = select.options[i];
		option.selected = ~value.indexOf(option.__value);
	}
}

function selectValue(select) {
	var selectedOption = select.querySelector(':checked') || select.options[0];
	return selectedOption && selectedOption.__value;
}

function selectMultipleValue(select) {
	return [].map.call(select.querySelectorAll(':checked'), function(option) {
		return option.__value;
	});
}

function addResizeListener(element, fn) {
	if (getComputedStyle(element).position === 'static') {
		element.style.position = 'relative';
	}

	const object = document.createElement('object');
	object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
	object.type = 'text/html';

	let win;

	object.onload = () => {
		win = object.contentDocument.defaultView;
		win.addEventListener('resize', fn);
	};

	if (/Trident/.test(navigator.userAgent)) {
		element.appendChild(object);
		object.data = 'about:blank';
	} else {
		object.data = 'about:blank';
		element.appendChild(object);
	}

	return {
		cancel: () => {
			win && win.removeEventListener && win.removeEventListener('resize', fn);
			element.removeChild(object);
		}
	};
}

function toggleClass(element, name, toggle) {
	element.classList.toggle(name, !!toggle);
}

function linear(t) {
	return t;
}

function generateRule({ a, b, delta, duration }, ease, fn) {
	const step = 16.666 / duration;
	let keyframes = '{\n';

	for (let p = 0; p <= 1; p += step) {
		const t = a + delta * ease(p);
		keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
	}

	return keyframes + `100% {${fn(b, 1 - b)}}\n}`;
}

// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
	let hash = 5381;
	let i = str.length;

	while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
	return hash >>> 0;
}

function wrapTransition(component, node, fn, params, intro) {
	let obj = fn.call(component, node, params);
	let duration;
	let ease;
	let cssText;

	let initialised = false;

	return {
		t: intro ? 0 : 1,
		running: false,
		program: null,
		pending: null,

		run(b, callback) {
			if (typeof obj === 'function') {
				transitionManager.wait().then(() => {
					obj = obj();
					this._run(b, callback);
				});
			} else {
				this._run(b, callback);
			}
		},

		_run(b, callback) {
			duration = obj.duration || 300;
			ease = obj.easing || linear;

			const program = {
				start: window.performance.now() + (obj.delay || 0),
				b,
				callback: callback || noop
			};

			if (intro && !initialised) {
				if (obj.css && obj.delay) {
					cssText = node.style.cssText;
					node.style.cssText += obj.css(0, 1);
				}

				if (obj.tick) obj.tick(0, 1);
				initialised = true;
			}

			if (!b) {
				program.group = outros.current;
				outros.current.remaining += 1;
			}

			if (obj.delay) {
				this.pending = program;
			} else {
				this.start(program);
			}

			if (!this.running) {
				this.running = true;
				transitionManager.add(this);
			}
		},

		start(program) {
			component.fire(`${program.b ? 'intro' : 'outro'}.start`, { node });

			program.a = this.t;
			program.delta = program.b - program.a;
			program.duration = duration * Math.abs(program.b - program.a);
			program.end = program.start + program.duration;

			if (obj.css) {
				if (obj.delay) node.style.cssText = cssText;

				const rule = generateRule(program, ease, obj.css);
				transitionManager.addRule(rule, program.name = '__svelte_' + hash(rule));

				node.style.animation = (node.style.animation || '')
					.split(', ')
					.filter(anim => anim && (program.delta < 0 || !/__svelte/.test(anim)))
					.concat(`${program.name} ${program.duration}ms linear 1 forwards`)
					.join(', ');
			}

			this.program = program;
			this.pending = null;
		},

		update(now) {
			const program = this.program;
			if (!program) return;

			const p = now - program.start;
			this.t = program.a + program.delta * ease(p / program.duration);
			if (obj.tick) obj.tick(this.t, 1 - this.t);
		},

		done() {
			const program = this.program;
			this.t = program.b;

			if (obj.tick) obj.tick(this.t, 1 - this.t);

			component.fire(`${program.b ? 'intro' : 'outro'}.end`, { node });

			if (!program.b && !program.invalidated) {
				program.group.callbacks.push(() => {
					program.callback();
					if (obj.css) transitionManager.deleteRule(node, program.name);
				});

				if (--program.group.remaining === 0) {
					program.group.callbacks.forEach(run);
				}
			} else {
				if (obj.css) transitionManager.deleteRule(node, program.name);
			}

			this.running = !!this.pending;
		},

		abort(reset) {
			if (this.program) {
				if (reset && obj.tick) obj.tick(1, 0);
				if (obj.css) transitionManager.deleteRule(node, this.program.name);
				this.program = this.pending = null;
				this.running = false;
			}
		},

		invalidate() {
			if (this.program) {
				this.program.invalidated = true;
			}
		}
	};
}

let outros = {};

function groupOutros() {
	outros.current = {
		remaining: 0,
		callbacks: []
	};
}

var transitionManager = {
	running: false,
	transitions: [],
	bound: null,
	stylesheet: null,
	activeRules: {},
	promise: null,

	add(transition) {
		this.transitions.push(transition);

		if (!this.running) {
			this.running = true;
			requestAnimationFrame(this.bound || (this.bound = this.next.bind(this)));
		}
	},

	addRule(rule, name) {
		if (!this.stylesheet) {
			const style = createElement('style');
			document.head.appendChild(style);
			transitionManager.stylesheet = style.sheet;
		}

		if (!this.activeRules[name]) {
			this.activeRules[name] = true;
			this.stylesheet.insertRule(`@keyframes ${name} ${rule}`, this.stylesheet.cssRules.length);
		}
	},

	next() {
		this.running = false;

		const now = window.performance.now();
		let i = this.transitions.length;

		while (i--) {
			const transition = this.transitions[i];

			if (transition.program && now >= transition.program.end) {
				transition.done();
			}

			if (transition.pending && now >= transition.pending.start) {
				transition.start(transition.pending);
			}

			if (transition.running) {
				transition.update(now);
				this.running = true;
			} else if (!transition.pending) {
				this.transitions.splice(i, 1);
			}
		}

		if (this.running) {
			requestAnimationFrame(this.bound);
		} else if (this.stylesheet) {
			let i = this.stylesheet.cssRules.length;
			while (i--) this.stylesheet.deleteRule(i);
			this.activeRules = {};
		}
	},

	deleteRule(node, name) {
		node.style.animation = node.style.animation
			.split(', ')
			.filter(anim => anim && anim.indexOf(name) === -1)
			.join(', ');
	},

	wait() {
		if (!transitionManager.promise) {
			transitionManager.promise = Promise.resolve();
			transitionManager.promise.then(() => {
				transitionManager.promise = null;
			});
		}

		return transitionManager.promise;
	}
};

function wrapAnimation(node, from, fn, params) {
	if (!from) return;

	const to = node.getBoundingClientRect();
	if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return;

	const info = fn(node, { from, to }, params);

	const duration = 'duration' in info ? info.duration : 300;
	const delay = 'delay' in info ? info.delay : 0;
	const ease = info.easing || linear;
	const start = window.performance.now() + delay;
	const end = start + duration;

	const program = {
		a: 0,
		t: 0,
		b: 1,
		delta: 1,
		duration,
		start,
		end
	};

	const cssText = node.style.cssText;

	const animation = {
		pending: delay ? program : null,
		program: delay ? null : program,
		running: true,

		start() {
			if (info.css) {
				if (delay) node.style.cssText = cssText;

				const rule = generateRule(program, ease, info.css);
				program.name = `__svelte_${hash(rule)}`;

				transitionManager.addRule(rule, program.name);

				node.style.animation = (node.style.animation || '')
					.split(', ')
					.filter(anim => anim && (program.delta < 0 || !/__svelte/.test(anim)))
					.concat(`${program.name} ${program.duration}ms linear 1 forwards`)
					.join(', ');
			}

			animation.program = program;
			animation.pending = null;
		},

		update: now => {
			const p = now - program.start;
			const t = program.a + program.delta * ease(p / program.duration);
			if (info.tick) info.tick(t, 1 - t);
		},

		done() {
			if (info.tick) info.tick(1, 0);
			animation.stop();
		},

		stop() {
			if (info.css) transitionManager.deleteRule(node, program.name);
			animation.running = false;
		}
	};

	transitionManager.add(animation);

	if (info.tick) info.tick(0, 1);

	if (delay) {
		if (info.css) node.style.cssText += info.css(0, 1);
	} else {
		animation.start();
	}

	return animation;
}

function fixPosition(node) {
	const style = getComputedStyle(node);

	if (style.position !== 'absolute' && style.position !== 'fixed') {
		const { width, height } = style;
		const a = node.getBoundingClientRect();
		node.style.position = 'absolute';
		node.style.width = width;
		node.style.height = height;
		const b = node.getBoundingClientRect();

		if (a.left !== b.left || a.top !== b.top) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
		}
	}
}

function handlePromise(promise, info) {
	var token = info.token = {};

	function update(type, index, key, value) {
		if (info.token !== token) return;

		info.resolved = key && { [key]: value };

		const child_ctx = assign(assign({}, info.ctx), info.resolved);
		const block = type && (info.current = type)(info.component, child_ctx);

		if (info.block) {
			if (info.blocks) {
				info.blocks.forEach((block, i) => {
					if (i !== index && block) {
						groupOutros();
						block.o(() => {
							block.d(1);
							info.blocks[i] = null;
						});
					}
				});
			} else {
				info.block.d(1);
			}

			block.c();
			block[block.i ? 'i' : 'm'](info.mount(), info.anchor);

			info.component.root.set({}); // flush any handlers that were created
		}

		info.block = block;
		if (info.blocks) info.blocks[index] = block;
	}

	if (isPromise(promise)) {
		promise.then(value => {
			update(info.then, 1, info.value, value);
		}, error => {
			update(info.catch, 2, info.error, error);
		});

		// if we previously had a then/catch block, destroy it
		if (info.current !== info.pending) {
			update(info.pending, 0);
			return true;
		}
	} else {
		if (info.current !== info.then) {
			update(info.then, 1, info.value, promise);
			return true;
		}

		info.resolved = { [info.value]: promise };
	}
}

function destroyBlock(block, lookup) {
	block.d(1);
	lookup[block.key] = null;
}

function outroAndDestroyBlock(block, lookup) {
	block.o(function() {
		destroyBlock(block, lookup);
	});
}

function fixAndOutroAndDestroyBlock(block, lookup) {
	block.f();
	outroAndDestroyBlock(block, lookup);
}

function updateKeyedEach(old_blocks, component, changed, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, intro_method, next, get_context) {
	var o = old_blocks.length;
	var n = list.length;

	var i = o;
	var old_indexes = {};
	while (i--) old_indexes[old_blocks[i].key] = i;

	var new_blocks = [];
	var new_lookup = {};
	var deltas = {};

	var i = n;
	while (i--) {
		var child_ctx = get_context(ctx, list, i);
		var key = get_key(child_ctx);
		var block = lookup[key];

		if (!block) {
			block = create_each_block(component, key, child_ctx);
			block.c();
		} else if (dynamic) {
			block.p(changed, child_ctx);
		}

		new_blocks[i] = new_lookup[key] = block;

		if (key in old_indexes) deltas[key] = Math.abs(i - old_indexes[key]);
	}

	var will_move = {};
	var did_move = {};

	function insert(block) {
		block[intro_method](node, next);
		lookup[block.key] = block;
		next = block.first;
		n--;
	}

	while (o && n) {
		var new_block = new_blocks[n - 1];
		var old_block = old_blocks[o - 1];
		var new_key = new_block.key;
		var old_key = old_block.key;

		if (new_block === old_block) {
			// do nothing
			next = new_block.first;
			o--;
			n--;
		}

		else if (!new_lookup[old_key]) {
			// remove old block
			destroy(old_block, lookup);
			o--;
		}

		else if (!lookup[new_key] || will_move[new_key]) {
			insert(new_block);
		}

		else if (did_move[old_key]) {
			o--;

		} else if (deltas[new_key] > deltas[old_key]) {
			did_move[new_key] = true;
			insert(new_block);

		} else {
			will_move[old_key] = true;
			o--;
		}
	}

	while (o--) {
		var old_block = old_blocks[o];
		if (!new_lookup[old_block.key]) destroy(old_block, lookup);
	}

	while (n) insert(new_blocks[n - 1]);

	return new_blocks;
}

function measure(blocks) {
	const rects = {};
	let i = blocks.length;
	while (i--) rects[blocks[i].key] = blocks[i].node.getBoundingClientRect();
	return rects;
}

function animate(blocks, rects, fn, params) {
	let i = blocks.length;
	while (i--) {
		const block = blocks[i];
		const from = rects[block.key];

		if (!from) continue;
		const to = block.node.getBoundingClientRect();

		if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) continue;


	}
}

function getSpreadUpdate(levels, updates) {
	var update = {};

	var to_null_out = {};
	var accounted_for = {};

	var i = levels.length;
	while (i--) {
		var o = levels[i];
		var n = updates[i];

		if (n) {
			for (var key in o) {
				if (!(key in n)) to_null_out[key] = 1;
			}

			for (var key in n) {
				if (!accounted_for[key]) {
					update[key] = n[key];
					accounted_for[key] = 1;
				}
			}

			levels[i] = n;
		} else {
			for (var key in o) {
				accounted_for[key] = 1;
			}
		}
	}

	for (var key in to_null_out) {
		if (!(key in update)) update[key] = undefined;
	}

	return update;
}

// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter
const invalidAttributeNameCharacter = /[\s'">\/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;

function spread(args) {
	const attributes = Object.assign({}, ...args);
	let str = '';

	Object.keys(attributes).forEach(name => {
		if (invalidAttributeNameCharacter.test(name)) return;

		const value = attributes[name];
		if (value === undefined) return;
		if (value === true) str += " " + name;

		const escaped = String(value)
			.replace(/"/g, '&#34;')
			.replace(/'/g, '&#39;');

		str += " " + name + "=" + JSON.stringify(escaped);
	});

	return str;
}

const escaped = {
	'"': '&quot;',
	"'": '&#39;',
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;'
};

function escape(html) {
	return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function each(items, assign, fn) {
	let str = '';
	for (let i = 0; i < items.length; i += 1) {
		str += fn(assign(items[i], i));
	}
	return str;
}

const missingComponent = {
	_render: () => ''
};

function validateSsrComponent(component, name) {
	if (!component || !component._render) {
		if (name === 'svelte:component') name += 'this={...}';
		throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
	}

	return component;
}

function debug(file, line, column, values) {
	console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`);
	console.log(values);
	return '';
}

function blankObject() {
	return Object.create(null);
}

function destroy(detach) {
	this.destroy = noop;
	this.fire('destroy');
	this.set = noop;

	this._fragment.d(detach !== false);
	this._fragment = null;
	this._state = {};
}

function destroyDev(detach) {
	destroy.call(this, detach);
	this.destroy = function() {
		console.warn('Component was already destroyed');
	};
}

function _differs(a, b) {
	return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

function _differsImmutable(a, b) {
	return a != a ? b == b : a !== b;
}

function fire(eventName, data) {
	var handlers =
		eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		var handler = handlers[i];

		if (!handler.__calling) {
			try {
				handler.__calling = true;
				handler.call(this, data);
			} finally {
				handler.__calling = false;
			}
		}
	}
}

function flush(component) {
	component._lock = true;
	callAll(component._beforecreate);
	callAll(component._oncreate);
	callAll(component._aftercreate);
	component._lock = false;
}

function get() {
	return this._state;
}

function init(component, options) {
	component._handlers = blankObject();
	component._slots = blankObject();
	component._bind = options._bind;
	component._staged = {};

	component.options = options;
	component.root = options.root || component;
	component.store = options.store || component.root.store;

	if (!options.root) {
		component._beforecreate = [];
		component._oncreate = [];
		component._aftercreate = [];
	}
}

function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
}

function set(newState) {
	this._set(assign({}, newState));
	if (this.root._lock) return;
	flush(this.root);
}

function _set(newState) {
	var oldState = this._state,
		changed = {},
		dirty = false;

	newState = assign(this._staged, newState);
	this._staged = {};

	for (var key in newState) {
		if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
	}
	if (!dirty) return;

	this._state = assign(assign({}, oldState), newState);
	this._recompute(changed, this._state);
	if (this._bind) this._bind(changed, this._state);

	if (this._fragment) {
		this.fire("state", { changed: changed, current: this._state, previous: oldState });
		this._fragment.p(changed, this._state);
		this.fire("update", { changed: changed, current: this._state, previous: oldState });
	}
}

function _stage(newState) {
	assign(this._staged, newState);
}

function setDev(newState) {
	if (typeof newState !== 'object') {
		throw new Error(
			this._debugName + '.set was called without an object of data key-values to update.'
		);
	}

	this._checkReadOnly(newState);
	set.call(this, newState);
}

function callAll(fns) {
	while (fns && fns.length) fns.shift()();
}

function _mount(target, anchor) {
	this._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);
}

var PENDING = {};
var SUCCESS = {};
var FAILURE = {};

function removeFromStore() {
	this.store._remove(this);
}

var proto = {
	destroy,
	get,
	fire,
	on,
	set,
	_recompute: noop,
	_set,
	_stage,
	_mount,
	_differs
};

var protoDev = {
	destroy: destroyDev,
	get,
	fire,
	on,
	set: setDev,
	_recompute: noop,
	_set,
	_stage,
	_mount,
	_differs
};




/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _VisualTOC = __webpack_require__(2);

var _VisualTOC2 = _interopRequireDefault(_VisualTOC);

var _ClusterSummary = __webpack_require__(5);

var _ClusterSummary2 = _interopRequireDefault(_ClusterSummary);

var _ReducedWeights = __webpack_require__(6);

var _ReducedWeights2 = _interopRequireDefault(_ReducedWeights);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eagerly initialize vtoc  as it's above the fold
var tocNav = document.getElementById('vtoc');
var visualTOC = new _VisualTOC2.default({ target: tocNav });

// lazily initialize any diagram below the fold. E.G:
{
    var figure = document.getElementById('clusters-summary-container');
    var clusterSummary = new _ClusterSummary2.default({
        target: figure,
        data: {
            "model_layers_url": "banding/model_layer_weights.json",
            "image_url": "fun image",
            "n_clusters": 4,
            "n_clusters_min": 4,
            "n_clusters_max": 19,
            "cluster_path_prefix": "upscaled_banding"
        }
    });

    var reducedWeightTags = document.getElementsByTagName('ReducedWeights');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = reducedWeightTags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var reducedWeightTag = _step.value;

            console.log('found tag: ', reducedWeightTag, reducedWeightTag.attributes);
            var num_to_show = 42;
            if (reducedWeightTag.attributes.num_to_show) {
                num_to_show = parseInt(reducedWeightTag.attributes.num_to_show.value, 10);
            }
            new _ReducedWeights2.default({
                target: reducedWeightTag,
                data: {
                    "weights_url": reducedWeightTag.attributes.weights_url.value.replace(/%/g, '%25'),
                    "num_to_show": num_to_show
                }
            });
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

var _util = __webpack_require__(3);

var _lucidComponents = __webpack_require__(4);

function data() {
	return {
		sections: [{ title: "Example Section with image", colab_url: "", anchor: "#experiment-aligned", sprite_index: 0 }, { title: "Example Section with image-VGG", colab_url: "", anchor: "#experiment-styletransfer", sprite_index: 1 }, { title: "Example Section with image", colab_url: "", anchor: "#experiment-xy2rgb", sprite_index: 3 }, { title: "Example Section with image", colab_url: "", anchor: "#experiment-featureviz-rgba", sprite_index: 2 }, { title: "Example Section with image", colab_url: "", anchor: "#experiment-featureviz-3d", sprite_index: 4 }, { title: "Example Section with image", colab_url: "", anchor: "#experiment-styletransfer-3d", sprite_index: 5 }]
	};
} /* src/diagrams/VisualTOC.html generated by Svelte v2.13.2 */
;

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-1eb0vow-style';
	style.textContent = ".visual-toc.svelte-1eb0vow{counter-reset:toc-heading;display:grid;grid-auto-flow:dense;grid-template-columns:1fr 1fr 1fr;grid-gap:16px}@media(min-width: 1000px){.visual-toc.svelte-1eb0vow{grid-gap:8px;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr}}@media(min-width: 1180px){.visual-toc.svelte-1eb0vow{grid-gap:20px}}.visual-toc-item.svelte-1eb0vow{display:flex;flex-flow:column}.visual-toc-top.svelte-1eb0vow{flex-grow:1;border:1px solid #E5E5E5;border-radius:5px;overflow:hidden;text-decoration:none;transition:box-shadow 0.35s, transform 0.35s;transform:scale(1.0);display:flex;flex-flow:column}.visual-toc-top.svelte-1eb0vow:hover{box-shadow:0px 1px 4px rgba(0,0,0,0.05);transform:scale(1.02);transition:box-shadow 0.15s, transform 0.15s}.visual-toc-heading.svelte-1eb0vow,.visual-toc-subheading.svelte-1eb0vow{display:block;line-height:1.3em;font-size:85%;padding:0.5em 1em 1em 1em}.visual-toc-heading.svelte-1eb0vow{counter-increment:toc-heading;color:#333;font-weight:600}.visual-toc-heading.svelte-1eb0vow::before{display:block;content:\"Section \" counter(toc-heading);font-weight:400;text-transform:uppercase;font-size:0.6rem;color:#666}.visual-toc-subheading.svelte-1eb0vow{display:none;color:#666;font-size:75%}.visual-toc-colab.svelte-1eb0vow{border-radius:5px;border:dashed 1px rgba(0,0,0,0.1);margin-top:1em;padding-left:1.2em;padding-right:1.2em;padding-top:0.25em;padding-bottom:0.25em;text-transform:uppercase;color:#aaa;font-size:10.5px;line-height:24px}.visual-toc-colab.svelte-1eb0vow>img.svelte-1eb0vow{position:relative;top:4px}.visual-toc-item.svelte-1eb0vow:hover .visual-toc-colab>img.svelte-1eb0vow{filter:unset}.visual-toc-colab.svelte-1eb0vow:hover{background-color:hsl(0, 0%, 97%);border-color:rgba(0,0,0,0.2);color:#888}a.svelte-1eb0vow{display:block;text-decoration:none;cursor:pointer}a.svelte-1eb0vow canvas{width:100%}";
	(0, _shared.append)(document.head, style);
}

function create_main_fragment(component, ctx) {
	var nav;

	var each_value = ctx.sections;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(component, get_each_context(ctx, each_value, i));
	}

	return {
		c: function c() {
			nav = (0, _shared.createElement)("nav");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			nav.className = "visual-toc svelte-1eb0vow";
		},
		m: function m(target, anchor) {
			(0, _shared.insert)(target, nav, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(nav, null);
			}
		},
		p: function p(changed, ctx) {
			if (changed.sections) {
				each_value = ctx.sections;

				for (var i = 0; i < each_value.length; i += 1) {
					var child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(component, child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(nav, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}
		},
		d: function d(detach) {
			if (detach) {
				(0, _shared.detachNode)(nav);
			}

			(0, _shared.destroyEach)(each_blocks, detach);
		}
	};
}

// (2:2) {#each sections as section, i}
function create_each_block(component, ctx) {
	var div,
	    a,
	    text,
	    span,
	    text_1_value = ctx.section.title,
	    text_1,
	    text_2,
	    a_href_value,
	    text_4,
	    a_1,
	    a_1_href_value;

	var sprite_initial_data = {
		url: "images/vtoc.jpg",
		width: "320",
		columns: "3",
		index: ctx.section.sprite_index
	};
	var sprite = new _lucidComponents.Sprite({
		root: component.root,
		store: component.store,
		data: sprite_initial_data
	});

	var if_block = ctx.section.subtitle && create_if_block(component, ctx);

	return {
		c: function c() {
			div = (0, _shared.createElement)("div");
			a = (0, _shared.createElement)("a");
			sprite._fragment.c();
			text = (0, _shared.createText)("\n      ");
			span = (0, _shared.createElement)("span");
			text_1 = (0, _shared.createText)(text_1_value);
			text_2 = (0, _shared.createText)("\n      ");
			if (if_block) if_block.c();
			text_4 = (0, _shared.createText)("\n    ");
			a_1 = (0, _shared.createElement)("a");
			a_1.innerHTML = "try in a <img alt=\"Colab\" src=\"images/colab.svg\" class=\"svelte-1eb0vow\"> notebook";
			span.className = "visual-toc-heading svelte-1eb0vow";
			a.href = a_href_value = ctx.section.anchor;
			a.className = "visual-toc-top svelte-1eb0vow";
			a_1.href = a_1_href_value = ctx.section.colab_url;
			a_1.className = "visual-toc-colab svelte-1eb0vow";
			div.className = "visual-toc-item svelte-1eb0vow";
		},
		m: function m(target, anchor) {
			(0, _shared.insert)(target, div, anchor);
			(0, _shared.append)(div, a);
			sprite._mount(a, null);
			(0, _shared.append)(a, text);
			(0, _shared.append)(a, span);
			(0, _shared.append)(span, text_1);
			(0, _shared.append)(a, text_2);
			if (if_block) if_block.m(a, null);
			(0, _shared.append)(div, text_4);
			(0, _shared.append)(div, a_1);
		},
		p: function p(changed, ctx) {
			var sprite_changes = {};
			if (changed.sections) sprite_changes.index = ctx.section.sprite_index;
			sprite._set(sprite_changes);

			if (changed.sections && text_1_value !== (text_1_value = ctx.section.title)) {
				(0, _shared.setData)(text_1, text_1_value);
			}

			if (ctx.section.subtitle) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block(component, ctx);
					if_block.c();
					if_block.m(a, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (changed.sections && a_href_value !== (a_href_value = ctx.section.anchor)) {
				a.href = a_href_value;
			}

			if (changed.sections && a_1_href_value !== (a_1_href_value = ctx.section.colab_url)) {
				a_1.href = a_1_href_value;
			}
		},
		d: function d(detach) {
			if (detach) {
				(0, _shared.detachNode)(div);
			}

			sprite.destroy();
			if (if_block) if_block.d();
		}
	};
}

// (7:6) {#if section.subtitle}
function create_if_block(component, ctx) {
	var span,
	    text_value = ctx.section.subtitle,
	    text;

	return {
		c: function c() {
			span = (0, _shared.createElement)("span");
			text = (0, _shared.createText)(text_value);
			span.className = "visual-toc-subheading svelte-1eb0vow";
		},
		m: function m(target, anchor) {
			(0, _shared.insert)(target, span, anchor);
			(0, _shared.append)(span, text);
		},
		p: function p(changed, ctx) {
			if (changed.sections && text_value !== (text_value = ctx.section.subtitle)) {
				(0, _shared.setData)(text, text_value);
			}
		},
		d: function d(detach) {
			if (detach) {
				(0, _shared.detachNode)(span);
			}
		}
	};
}

function get_each_context(ctx, list, i) {
	var child_ctx = Object.create(ctx);
	child_ctx.section = list[i];
	child_ctx.each_value = list;
	child_ctx.i = i;
	return child_ctx;
}

function VisualTOC(options) {
	(0, _shared.init)(this, options);
	this._state = (0, _shared.assign)(data(), options.data);
	this._intro = true;

	if (!document.getElementById("svelte-1eb0vow-style")) add_css();

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		(0, _shared.flush)(this);
	}
}

(0, _shared.assign)(VisualTOC.prototype, _shared.proto);
exports.default = VisualTOC;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;
function range(n) {
  return Array(n).fill().map(function (_, i) {
    return i;
  });
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
function noop() {}

function assign(target) {
	var k,
		source,
		i = 1,
		len = arguments.length;
	for (; i < len; i++) {
		source = arguments[i];
		for (k in source) target[k] = source[k];
	}

	return target;
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function createElement(name) {
	return document.createElement(name);
}

function blankObject() {
	return Object.create(null);
}

function destroy(detach) {
	this.destroy = noop;
	this.fire('destroy');
	this.set = this.get = noop;

	if (detach !== false) this._fragment.u();
	this._fragment.d();
	this._fragment = this._state = null;
}

function _differs(a, b) {
	return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

function dispatchObservers(component, group, changed, newState, oldState) {
	for (var key in group) {
		if (!changed[key]) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function fire(eventName, data) {
	var handlers =
		eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
}

function get(key) {
	return key ? this._state[key] : this._state;
}

function init(component, options) {
	component._observers = { pre: blankObject(), post: blankObject() };
	component._handlers = blankObject();
	component._bind = options._bind;

	component.options = options;
	component.root = options.root || component;
	component.store = component.root.store || options.store;
}

function observe(key, callback, options) {
	var group = options && options.defer
		? this._observers.post
		: this._observers.pre;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
}

function on(eventName, handler) {
	if (eventName === 'teardown') return this.on('destroy', handler);

	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
}

function set(newState) {
	this._set(assign({}, newState));
	if (this.root._lock) return;
	this.root._lock = true;
	callAll(this.root._beforecreate);
	callAll(this.root._oncreate);
	callAll(this.root._aftercreate);
	this.root._lock = false;
}

function _set(newState) {
	var oldState = this._state,
		changed = {},
		dirty = false;

	for (var key in newState) {
		if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
	}
	if (!dirty) return;

	this._state = assign({}, oldState, newState);
	this._recompute(changed, this._state);
	if (this._bind) this._bind(changed, this._state);

	if (this._fragment) {
		dispatchObservers(this, this._observers.pre, changed, this._state, oldState);
		this._fragment.p(changed, this._state);
		dispatchObservers(this, this._observers.post, changed, this._state, oldState);
	}
}

function callAll(fns) {
	while (fns && fns.length) fns.shift()();
}

function _mount(target, anchor) {
	this._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);
}

function _unmount() {
	if (this._fragment) this._fragment.u();
}

var proto = {
	destroy: destroy,
	get: get,
	fire: fire,
	observe: observe,
	on: on,
	set: set,
	teardown: destroy,
	_recompute: noop,
	_set: _set,
	_mount: _mount,
	_unmount: _unmount,
	_differs: _differs
};

/* src/Sprite.html generated by Svelte v1.57.1 */

// We need to create a global cache of loaded images independent of any sprite instance.
const cache = new Map();

function realHeight(width, height) {
  return height ? height : width;
}

function data() {
  return {
    url: '',
    index: 0,
    width: 100,
    loaded: null,
    columns: Infinity,
    height: null,
    img: null
  }
}
var methods = {
  draw() {
    if (this.refs.canvas) {
      const context = this.refs.canvas.getContext('2d');
      const { img, index, width, realHeight, columns, loaded } = this.get();
      context.clearRect(0, 0, width, realHeight);
      const sx = Array.isArray(index) ? index[0] * width : (index % columns) * width;
      const sy = Array.isArray(index) ? index[1] * realHeight : Math.floor(index / columns) * realHeight;
      if (loaded) {
        context.drawImage(img, sx, sy, width, realHeight, 0, 0, width, realHeight);
      } else {
        context.fillStyle = '#ccc';
        context.fillRect(0, 0, width, realHeight);
        context.fillStyle = "#eee";
        context.textAlign = 'center';
        context.font = '16px sans-serif';
        context.fillText('...', width / 2, realHeight / 2);
      }
    }
  }
};

function oncreate() {
  const done = (e) => {
    this.set({loaded: true});
    const {img} = this.get();
    img.removeEventListener('loaded', done);
  };
  // TODO this redraws one too many times on when you change the index and url at the same time. 
  // could add the svelte extras dependency for 'observeMany', but not sure it's worth it.
  this.observe('index', index => {
    this.draw();
  }, { init: false });
  this.observe('img', index => {
    this.draw();
  }, { init: false });
  this.observe('loaded', loaded => {
    this.draw();
  }, { init: false });
  this.observe('url', url => {
    // Clear any pending events for old urls.
    const currentImg = this.get('img');
    if (currentImg) {currentImg.removeEventListener('load', done); }
    // Check if we've already seen this url in the global cache
    if (cache.has(url)) {
      const cached = cache.get(url);
      // If we've seen it, we need to check if we're currently loading it.
      if (cached.loaded) {
        // If it's loaded, just start using it!
        this.set({
          loaded: true,
          img: cached.img
        });
      } else {
        // If it's not loaded, we need to wait until the other request is done before we start drawing.
        this.set({
          loaded: false,
          img: cached.img
        });
        cached.img.addEventListener('load', done);
      }
    } else {
      // If we haven't seen the url yet, we need to load the image.
      const img = new Image();
      this.set({ 
        loaded: false,
        img: img
       });
      const data = {img};
      // We need this event to persist, so that we still know when an abandoned image is done loading.
      const finished = (e) => {
        data.loaded = true;
        img.removeEventListener('load', finished);
      };
      img.addEventListener('load', finished);
      img.addEventListener('load', done);
      cache.set(url, data);
      img.src = url;
    }
  });
}
function create_main_fragment(component, state) {
	var canvas;

	return {
		c: function create() {
			canvas = createElement("canvas");
			this.h();
		},

		h: function hydrate() {
			canvas.width = state.width;
			canvas.height = state.realHeight;
		},

		m: function mount(target, anchor) {
			insertNode(canvas, target, anchor);
			component.refs.canvas = canvas;
		},

		p: function update(changed, state) {
			if (changed.width) {
				canvas.width = state.width;
			}

			if (changed.realHeight) {
				canvas.height = state.realHeight;
			}
		},

		u: function unmount() {
			detachNode(canvas);
		},

		d: function destroy$$1() {
			if (component.refs.canvas === canvas) component.refs.canvas = null;
		}
	};
}

function Sprite(options) {
	init(this, options);
	this.refs = {};
	this._state = assign(data(), options.data);
	this._recompute({ width: 1, height: 1 }, this._state);

	var _oncreate = oncreate.bind(this);

	if (!options.root) {
		this._oncreate = [];
	}

	this._fragment = create_main_fragment(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		callAll(this._oncreate);
	}
}

assign(Sprite.prototype, methods, proto);

Sprite.prototype._recompute = function _recompute(changed, state) {
	if (changed.width || changed.height) {
		if (this._differs(state.realHeight, (state.realHeight = realHeight(state.width, state.height)))) changed.realHeight = true;
	}
};

var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + "]";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

function dsv(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }

  function parseRows(text, f) {
    var rows = [], // output rows
        N = text.length,
        I = 0, // current character index
        n = 0, // current line number
        t, // current token
        eof = N <= 0, // current token followed by EOF?
        eol = false; // current token followed by EOL?

    // Strip the trailing newline.
    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL;

      // Unescape quotes.
      var i, j = I, c;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);
        if ((i = I) >= N) eof = true;
        else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      }

      // Find next delimiter or newline.
      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      }

      // Return last token before EOF.
      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF) row.push(t), t = token();
      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    })).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(text) {
    return text == null ? ""
        : reFormat.test(text += "") ? "\"" + text.replace(/"/g, "\"\"") + "\""
        : text;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatRows: formatRows
  };
}

var csv = dsv(",");

var csvParse = csv.parse;

var tsv = dsv("\t");

var tsvParse = tsv.parse;

// Copyright 2018 The Lucid Authors.All Rights Reserved.


// // Basic usage examples: 
// import {load} from 'lucid-components';
// 
// load("test.csv").then(response => console.log("1", response));
// load(["test.csv", "test.tsv"]).then(response => console.log("2", response[0], response[1]));
// load('3a.jpg').then(response => {this.refs.img.src = response.src;})
// 
// // You can also namespace requests, which will cancel previous requests
// load("test.csv", "namespace").then(response => console.log("This will never be called."))
// load("test.tsv", "namespace").then(response => console.log("This will interrupt the previous one and be resolved instead."))



// We will cache requests and parsing.
const cache$1 = new Map();
const suppress = new Map();
const namespaces = new Map();

// Mapping file extensions to loaders
const loaders = new Map([
  ['gif', image],
  ['png', image],
  ['jpeg', image],
  ['jpg', image],
  ['csv', csv$1],
  ['tsv', tsv$1],
  ['txt', text],
  ['text', text],
  ['json', json],
]);

// Loaders
function handleErrors(response) {
  if (response.ok) {
    return response;
  } else {
    throw new Error(response.status + ':' + response.statusText);
  }
}

function image(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = event => resolve(img);
    img.onerror = event => reject(event);
    img.src = url;
  })
}

function json(url) {
  return fetch(url).then(handleErrors).then(response => response.json())
}

function text(url) {
  return fetch(url).then(handleErrors).then(response => response.text());
}

function csv$1(url) {
  return text(url).then(text => Promise.resolve(csvParse(text)));
}

function tsv$1(url) {
  return text(url).then(text => Promise.resolve(tsvParse(text)));
}


// Load a url or an array of urls.
function load(url, namespace) {

  // We will to create a namespace if we don't have one.
  let ns = namespace != null ? namespace : Date.now() + "" + Math.random();

  // Create a unique ID for this request
  let requestID = "namespace:" + ns + ", url:" + url + ", random:" + Date.now() + "" + Math.random();
  suppress.set(requestID, false);

  // If we have a previous request in this namespace, mark it as suppressed so 
  // that the promise is never resolved. Then we reset the current namespace to 
  // the current request.
  if (namespaces.has(ns)) {
    const pendingRequestID = namespaces.get(ns);
    suppress.set(pendingRequestID, true);
  }
  namespaces.set(ns, requestID);
  
  return new Promise((resolve, reject) => {
    let p;
    if (Array.isArray(url)) {
      const promises = url.map(u => _loadURL(u));
      p = Promise.all(promises);
    } else {
      p =  _loadURL(url);
    }
    p
      .then(val => {
        //check to see if we've suppressed this request.
        if (!suppress.get(requestID)) {
          resolve(val);
        }
      })
      .catch(error => {
        //check to see if we've suppressed this request.
        if (!suppress.get(requestID)) {
          reject(error);
        }
      });
    
  });
}

// Private loading function
function _loadURL(url) {
  let id = url;
  if (cache$1.has(id)) {
    return cache$1.get(id);
  } else {
    let extension = parseFileExtensionFromURL(url, loaders);
    let loader = loaders.get(extension);
    let p = loader(url);
    cache$1.set(id, p);
    return p;
  }
}

// Helpers

// Returns a filetype extension from a given url string
function parseFileExtensionFromURL(url, loaders) {
  const parts = url.split(".");
  const ext = parts[parts.length - 1];
  if (!loaders.has(ext)) {
    console.warn('Trying to load url: ' + url + ' with an unknown filetype. Assuming "text".');
  }
  return loaders.has(ext) ? ext : 'text';
}

// Copyright 2018 The Lucid Authors.All Rights Reserved.


//# sourceMappingURL=index.js.map


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

function range(n) {
	return Array(n).fill().map(function (_, i) {
		return i;
	});
} /* src/diagrams/ClusterSummary.html generated by Svelte v2.13.2 */


function cluster_percentage(clusters, layer_index, cluster_index) {
	var convert_to_100 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	var all_assignments = clusters['cluster_assignments'][layer_index];
	var my_assignments = all_assignments.filter(function (assigned_index) {
		return assigned_index == cluster_index;
	});
	if (convert_to_100) {
		return Math.round(my_assignments.length / all_assignments.length * 1000) / 10;
	} else {
		return Math.round(my_assignments.length / all_assignments.length * 1000) / 1000;
	}
}

function data() {
	return {
		model_layers_url: "",
		image_url: "none",
		model_layers: [],
		n_clusters: 4,
		n_clusters_min: 4,
		n_clusters_max: 4,
		cluster_path_prefix: null,
		clustering_type: "kmeans",
		clusters: null
	};
};

var methods = {
	refresh_model_layers: function refresh_model_layers() {
		var _this = this;

		var _get = this.get(),
		    model_layers_url = _get.model_layers_url;

		if (!model_layers_url) {
			console.warn('skipping refresh_model_layers because model_layers_url is null');
			return;
		}

		fetch(model_layers_url).then(function (res) {
			return res.json();
		}).then(function (data) {
			_this.set({ model_layers: data });
		});
	},
	load_clusters: function load_clusters() {
		var _this2 = this;

		var _get2 = this.get(),
		    cluster_path_prefix = _get2.cluster_path_prefix,
		    clustering_type = _get2.clustering_type,
		    n_clusters = _get2.n_clusters;

		if (cluster_path_prefix === null) {
			console.warn('skipping load clusters because cluster_path_prefix is null');
			return;
		}
		var url = cluster_path_prefix + '/cluster_assignment_' + clustering_type + '_n_clusters_' + n_clusters + '.json';
		fetch(url).then(function (res) {
			return res.json();
		}).then(function (data) {
			_this2.set({ clusters: data });
		});
	}
};

function oncreate() {
	var _this3 = this;

	this.on('update', function (_ref) {
		var changed = _ref.changed,
		    current = _ref.current,
		    previous = _ref.previous;

		console.log('update', changed, current, previous);

		var _get3 = _this3.get(),
		    model_layers = _get3.model_layers;

		if (!model_layers.length || changed['model_layers_url']) {
			_this3.refresh_model_layers();
		}
		if (changed['n_clusters']) {
			_this3.load_clusters();
		}
	});
};

function create_main_fragment(component, ctx) {
	var div, text, input, text_1;

	function input_change_input_handler() {
		component.set({ n_clusters: (0, _shared.toNumber)(input.value) });
	}

	var if_block = ctx.clusters && create_if_block(component, ctx);

	return {
		c: function c() {
			div = (0, _shared.createElement)("div");
			text = (0, _shared.createText)("# Clusters: ");
			input = (0, _shared.createElement)("input");
			text_1 = (0, _shared.createText)("\n    ");
			if (if_block) if_block.c();
			(0, _shared.addListener)(input, "change", input_change_input_handler);
			(0, _shared.addListener)(input, "input", input_change_input_handler);
			(0, _shared.setAttribute)(input, "type", "range");
			input.min = ctx.n_clusters_min;
			input.max = ctx.n_clusters_max;
			div.className = "clusters";
		},
		m: function m(target, anchor) {
			(0, _shared.insert)(target, div, anchor);
			(0, _shared.append)(div, text);
			(0, _shared.append)(div, input);

			input.value = ctx.n_clusters;

			(0, _shared.append)(div, text_1);
			if (if_block) if_block.m(div, null);
		},
		p: function p(changed, ctx) {
			if (changed.n_clusters) input.value = ctx.n_clusters;
			if (changed.n_clusters_min) {
				input.min = ctx.n_clusters_min;
			}

			if (changed.n_clusters_max) {
				input.max = ctx.n_clusters_max;
			}

			if (ctx.clusters) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block(component, ctx);
					if_block.c();
					if_block.m(div, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d: function d(detach) {
			if (detach) {
				(0, _shared.detachNode)(div);
			}

			(0, _shared.removeListener)(input, "change", input_change_input_handler);
			(0, _shared.removeListener)(input, "input", input_change_input_handler);
			if (if_block) if_block.d();
		}
	};
}

// (9:12) {#each clusters.cluster_sort_order as _, cluster_index}
function create_each_block(component, ctx) {
	var th,
	    raw_value = ctx.clusters.center_images[ctx.cluster_index];

	return {
		c: function c() {
			th = (0, _shared.createElement)("th");
		},
		m: function m(target, anchor) {
			(0, _shared.insert)(target, th, anchor);
			th.innerHTML = raw_value;
		},
		p: function p(changed, ctx) {
			if (changed.clusters && raw_value !== (raw_value = ctx.clusters.center_images[ctx.cluster_index])) {
				th.innerHTML = raw_value;
			}
		},
		d: function d(detach) {
			if (detach) {
				(0, _shared.detachNode)(th);
			}
		}
	};
}

// (15:8) {#each model_layers as model_layer, layer_index}
function create_each_block_1(component, ctx) {
	var tr, td, text_1;

	function select_block_type(ctx) {
		if (ctx.model_layer.highlight_me) return create_if_block_1;
		return create_if_block_2;
	}

	var current_block_type = select_block_type(ctx);
	var if_block = current_block_type(component, ctx);

	var each_value_2 = ctx.clusters.cluster_sort_order;

	var each_blocks = [];

	for (var i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2(component, get_each_context_1(ctx, each_value_2, i));
	}

	return {
		c: function c() {
			tr = (0, _shared.createElement)("tr");
			td = (0, _shared.createElement)("td");
			if_block.c();
			text_1 = (0, _shared.createText)("\n            ");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			(0, _shared.setStyle)(td, "padding-right", "10px");
		},
		m: function m(target, anchor) {
			(0, _shared.insert)(target, tr, anchor);
			(0, _shared.append)(tr, td);
			if_block.m(td, null);
			(0, _shared.append)(tr, text_1);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tr, null);
			}
		},
		p: function p(changed, ctx) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(changed, ctx);
			} else {
				if_block.d(1);
				if_block = current_block_type(component, ctx);
				if_block.c();
				if_block.m(td, null);
			}

			if (changed.clusters) {
				each_value_2 = ctx.clusters.cluster_sort_order;

				for (var i = 0; i < each_value_2.length; i += 1) {
					var child_ctx = get_each_context_1(ctx, each_value_2, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block_2(component, child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(tr, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value_2.length;
			}
		},
		d: function d(detach) {
			if (detach) {
				(0, _shared.detachNode)(tr);
			}

			if_block.d();

			(0, _shared.destroyEach)(each_blocks, detach);
		}
	};
}

// (18:14) {#if model_layer.highlight_me}
function create_if_block_1(component, ctx) {
	var mark,
	    a,
	    text_value = ctx.model_layer.pretty_name[1],
	    text,
	    a_href_value,
	    text_2,
	    code,
	    text_3_value = ctx.model_layer.pretty_name[2],
	    text_3,
	    text_4;

	return {
		c: function c() {
			mark = (0, _shared.createElement)("mark");
			a = (0, _shared.createElement)("a");
			text = (0, _shared.createText)(text_value);
			text_2 = (0, _shared.createText)("\n                  (layer ");
			code = (0, _shared.createElement)("code");
			text_3 = (0, _shared.createText)(text_3_value);
			text_4 = (0, _shared.createText)(")");
			a.href = a_href_value = "#" + ctx.model_layer.pretty_name[0];
		},
		m: function m(target, anchor) {
			(0, _shared.insert)(target, mark, anchor);
			(0, _shared.append)(mark, a);
			(0, _shared.append)(a, text);
			(0, _shared.append)(mark, text_2);
			(0, _shared.append)(mark, code);
			(0, _shared.append)(code, text_3);
			(0, _shared.append)(mark, text_4);
		},
		p: function p(changed, ctx) {
			if (changed.model_layers && text_value !== (text_value = ctx.model_layer.pretty_name[1])) {
				(0, _shared.setData)(text, text_value);
			}

			if (changed.model_layers && a_href_value !== (a_href_value = "#" + ctx.model_layer.pretty_name[0])) {
				a.href = a_href_value;
			}

			if (changed.model_layers && text_3_value !== (text_3_value = ctx.model_layer.pretty_name[2])) {
				(0, _shared.setData)(text_3, text_3_value);
			}
		},
		d: function d(detach) {
			if (detach) {
				(0, _shared.detachNode)(mark);
			}
		}
	};
}

// (25:14) {:else}
function create_if_block_2(component, ctx) {
	var a,
	    text_value = ctx.model_layer.pretty_name[1],
	    text,
	    a_href_value,
	    text_2,
	    code,
	    text_3_value = ctx.model_layer.pretty_name[2],
	    text_3,
	    text_4;

	return {
		c: function c() {
			a = (0, _shared.createElement)("a");
			text = (0, _shared.createText)(text_value);
			text_2 = (0, _shared.createText)("\n                (layer ");
			code = (0, _shared.createElement)("code");
			text_3 = (0, _shared.createText)(text_3_value);
			text_4 = (0, _shared.createText)(")");
			a.href = a_href_value = "#" + ctx.model_layer.pretty_name[0];
		},
		m: function m(target, anchor) {
			(0, _shared.insert)(target, a, anchor);
			(0, _shared.append)(a, text);
			(0, _shared.insert)(target, text_2, anchor);
			(0, _shared.insert)(target, code, anchor);
			(0, _shared.append)(code, text_3);
			(0, _shared.insert)(target, text_4, anchor);
		},
		p: function p(changed, ctx) {
			if (changed.model_layers && text_value !== (text_value = ctx.model_layer.pretty_name[1])) {
				(0, _shared.setData)(text, text_value);
			}

			if (changed.model_layers && a_href_value !== (a_href_value = "#" + ctx.model_layer.pretty_name[0])) {
				a.href = a_href_value;
			}

			if (changed.model_layers && text_3_value !== (text_3_value = ctx.model_layer.pretty_name[2])) {
				(0, _shared.setData)(text_3, text_3_value);
			}
		},
		d: function d(detach) {
			if (detach) {
				(0, _shared.detachNode)(a);
				(0, _shared.detachNode)(text_2);
				(0, _shared.detachNode)(code);
				(0, _shared.detachNode)(text_4);
			}
		}
	};
}

// (32:12) {#each clusters.cluster_sort_order as _, cluster_index}
function create_each_block_2(component, ctx) {
	var td,
	    text_value = cluster_percentage(ctx.clusters, ctx.layer_index, ctx.cluster_index, true),
	    text,
	    text_1;

	return {
		c: function c() {
			td = (0, _shared.createElement)("td");
			text = (0, _shared.createText)(text_value);
			text_1 = (0, _shared.createText)("%");
			td.className = "cluster";
			(0, _shared.setStyle)(td, "background", "rgba(217, 157, 38, " + cluster_percentage(ctx.clusters, ctx.layer_index, ctx.cluster_index) + ")");
		},
		m: function m(target, anchor) {
			(0, _shared.insert)(target, td, anchor);
			(0, _shared.append)(td, text);
			(0, _shared.append)(td, text_1);
		},
		p: function p(changed, ctx) {
			if (changed.clusters && text_value !== (text_value = cluster_percentage(ctx.clusters, ctx.layer_index, ctx.cluster_index, true))) {
				(0, _shared.setData)(text, text_value);
			}

			if (changed.clusters) {
				(0, _shared.setStyle)(td, "background", "rgba(217, 157, 38, " + cluster_percentage(ctx.clusters, ctx.layer_index, ctx.cluster_index) + ")");
			}
		},
		d: function d(detach) {
			if (detach) {
				(0, _shared.detachNode)(td);
			}
		}
	};
}

// (3:4) {#if clusters}
function create_if_block(component, ctx) {
	var span, text, text_1, table, thead, tr, th, text_3, text_6, tbody;

	var each_value = ctx.clusters.cluster_sort_order;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(component, get_each_context(ctx, each_value, i));
	}

	var each_value_1 = ctx.model_layers;

	var each_1_blocks = [];

	for (var i = 0; i < each_value_1.length; i += 1) {
		each_1_blocks[i] = create_each_block_1(component, get_each_1_context(ctx, each_value_1, i));
	}

	return {
		c: function c() {
			span = (0, _shared.createElement)("span");
			text = (0, _shared.createText)(ctx.n_clusters);
			text_1 = (0, _shared.createText)("\n    ");
			table = (0, _shared.createElement)("table");
			thead = (0, _shared.createElement)("thead");
			tr = (0, _shared.createElement)("tr");
			th = (0, _shared.createElement)("th");
			th.textContent = "Experiment";
			text_3 = (0, _shared.createText)("\n            ");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			text_6 = (0, _shared.createText)("\n        ");
			tbody = (0, _shared.createElement)("tbody");

			for (var i = 0; i < each_1_blocks.length; i += 1) {
				each_1_blocks[i].c();
			}
		},
		m: function m(target, anchor) {
			(0, _shared.insert)(target, span, anchor);
			(0, _shared.append)(span, text);
			(0, _shared.insert)(target, text_1, anchor);
			(0, _shared.insert)(target, table, anchor);
			(0, _shared.append)(table, thead);
			(0, _shared.append)(thead, tr);
			(0, _shared.append)(tr, th);
			(0, _shared.append)(tr, text_3);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tr, null);
			}

			(0, _shared.append)(table, text_6);
			(0, _shared.append)(table, tbody);

			for (var i = 0; i < each_1_blocks.length; i += 1) {
				each_1_blocks[i].m(tbody, null);
			}
		},
		p: function p(changed, ctx) {
			if (changed.n_clusters) {
				(0, _shared.setData)(text, ctx.n_clusters);
			}

			if (changed.clusters) {
				each_value = ctx.clusters.cluster_sort_order;

				for (var i = 0; i < each_value.length; i += 1) {
					var child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(component, child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(tr, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}

			if (changed.model_layers || changed.clusters) {
				each_value_1 = ctx.model_layers;

				for (var i = 0; i < each_value_1.length; i += 1) {
					var _child_ctx = get_each_1_context(ctx, each_value_1, i);

					if (each_1_blocks[i]) {
						each_1_blocks[i].p(changed, _child_ctx);
					} else {
						each_1_blocks[i] = create_each_block_1(component, _child_ctx);
						each_1_blocks[i].c();
						each_1_blocks[i].m(tbody, null);
					}
				}

				for (; i < each_1_blocks.length; i += 1) {
					each_1_blocks[i].d(1);
				}
				each_1_blocks.length = each_value_1.length;
			}
		},
		d: function d(detach) {
			if (detach) {
				(0, _shared.detachNode)(span);
				(0, _shared.detachNode)(text_1);
				(0, _shared.detachNode)(table);
			}

			(0, _shared.destroyEach)(each_blocks, detach);

			(0, _shared.destroyEach)(each_1_blocks, detach);
		}
	};
}

function get_each_context(ctx, list, i) {
	var child_ctx = Object.create(ctx);
	child_ctx._ = list[i];
	child_ctx.each_value = list;
	child_ctx.cluster_index = i;
	return child_ctx;
}

function get_each_1_context(ctx, list, i) {
	var child_ctx = Object.create(ctx);
	child_ctx.model_layer = list[i];
	child_ctx.each_value_1 = list;
	child_ctx.layer_index = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	var child_ctx = Object.create(ctx);
	child_ctx._ = list[i];
	child_ctx.each_value_2 = list;
	child_ctx.cluster_index = i;
	return child_ctx;
}

function ClusterSummary(options) {
	var _this4 = this;

	(0, _shared.init)(this, options);
	this._state = (0, _shared.assign)(data(), options.data);
	this._intro = true;

	this._fragment = create_main_fragment(this, this._state);

	this.root._oncreate.push(function () {
		oncreate.call(_this4);
		_this4.fire("update", { changed: (0, _shared.assignTrue)({}, _this4._state), current: _this4._state });
	});

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		(0, _shared.flush)(this);
	}
}

(0, _shared.assign)(ClusterSummary.prototype, _shared.proto);
(0, _shared.assign)(ClusterSummary.prototype, methods);
exports.default = ClusterSummary;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

function overflow_display_type(_ref) {
	var show_overflow = _ref.show_overflow;

	return show_overflow ? 'inline' : 'none';
} /* src/diagrams/ReducedWeights.html generated by Svelte v2.13.2 */


function data() {
	return {
		weights_url: null,
		model_name: null,
		layer: null,
		reduced_weights: null,
		all_weights: null,
		num_to_show: 42,
		show_overflow: false
	};
};

var methods = {};

function oncreate() {
	var _this = this;

	this.on('update', function (_ref2) {
		var changed = _ref2.changed,
		    current = _ref2.current,
		    previous = _ref2.previous;

		// console.log('reduced weights update', changed, current, previous);
		var _get = _this.get(),
		    weights_url = _get.weights_url;

		if (changed['weights_url'] && weights_url) {
			fetch(weights_url).then(function (res) {
				return res.json();
			}).then(function (data) {
				_this.set(data);

				var _get2 = _this.get(),
				    reduced_weights = _get2.reduced_weights;

				var all_weights = Array();
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = reduced_weights[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var row = _step.value;

						Array.prototype.push.apply(all_weights, row);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				_this.set({ all_weights: all_weights });
			});
		}
	});
};

function add_css() {
	var style = (0, _shared.createElement)("style");
	style.id = 'svelte-121lxd1-style';
	style.textContent = ".expand_widget.svelte-121lxd1{cursor:pointer;font-size:smaller;opacity:0.5;width:100%;display:block;text-align:center}.reduced_weights.svelte-121lxd1 img{padding-right:1px}";
	(0, _shared.append)(document.head, style);
}

function create_main_fragment(component, ctx) {
	var div;

	var if_block = ctx.all_weights && create_if_block(component, ctx);

	return {
		c: function c() {
			div = (0, _shared.createElement)("div");
			if (if_block) if_block.c();
			div.className = "reduced_weights svelte-121lxd1";
		},
		m: function m(target, anchor) {
			(0, _shared.insert)(target, div, anchor);
			if (if_block) if_block.m(div, null);
		},
		p: function p(changed, ctx) {
			if (ctx.all_weights) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block(component, ctx);
					if_block.c();
					if_block.m(div, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d: function d(detach) {
			if (detach) {
				(0, _shared.detachNode)(div);
			}

			if (if_block) if_block.d();
		}
	};
}

// (4:8) {#each all_weights.slice(0, (show_overflow ? all_weights.length : num_to_show)) as weight_entry, weight_index}
function create_each_block(component, ctx) {
	var raw_value = ctx.weight_entry,
	    raw_before,
	    raw_after;

	return {
		c: function c() {
			raw_before = (0, _shared.createElement)('noscript');
			raw_after = (0, _shared.createElement)('noscript');
		},
		m: function m(target, anchor) {
			(0, _shared.insert)(target, raw_before, anchor);
			raw_before.insertAdjacentHTML("afterend", raw_value);
			(0, _shared.insert)(target, raw_after, anchor);
		},
		p: function p(changed, ctx) {
			if ((changed.all_weights || changed.show_overflow || changed.num_to_show) && raw_value !== (raw_value = ctx.weight_entry)) {
				(0, _shared.detachBetween)(raw_before, raw_after);
				raw_before.insertAdjacentHTML("afterend", raw_value);
			}
		},
		d: function d(detach) {
			if (detach) {
				(0, _shared.detachBetween)(raw_before, raw_after);
				(0, _shared.detachNode)(raw_before);
				(0, _shared.detachNode)(raw_after);
			}
		}
	};
}

// (10:12) {#if show_overflow}
function create_if_block_2(component, ctx) {
	var span;

	return {
		c: function c() {
			span = (0, _shared.createElement)("span");
			span.textContent = "click to hide";
		},
		m: function m(target, anchor) {
			(0, _shared.insert)(target, span, anchor);
		},


		p: _shared.noop,

		d: function d(detach) {
			if (detach) {
				(0, _shared.detachNode)(span);
			}
		}
	};
}

// (12:12) {:else}
function create_if_block_3(component, ctx) {
	var span,
	    text_value = ctx.all_weights.length - ctx.num_to_show,
	    text,
	    text_1;

	return {
		c: function c() {
			span = (0, _shared.createElement)("span");
			text = (0, _shared.createText)(text_value);
			text_1 = (0, _shared.createText)(" weights hidden");
		},
		m: function m(target, anchor) {
			(0, _shared.insert)(target, span, anchor);
			(0, _shared.append)(span, text);
			(0, _shared.append)(span, text_1);
		},
		p: function p(changed, ctx) {
			if ((changed.all_weights || changed.num_to_show) && text_value !== (text_value = ctx.all_weights.length - ctx.num_to_show)) {
				(0, _shared.setData)(text, text_value);
			}
		},
		d: function d(detach) {
			if (detach) {
				(0, _shared.detachNode)(span);
			}
		}
	};
}

// (8:8) {#if all_weights.length > num_to_show}
function create_if_block_1(component, ctx) {
	var span;

	function select_block_type(ctx) {
		if (ctx.show_overflow) return create_if_block_2;
		return create_if_block_3;
	}

	var current_block_type = select_block_type(ctx);
	var if_block = current_block_type(component, ctx);

	function click_handler(event) {
		component.set({ show_overflow: !ctx.show_overflow });
	}

	return {
		c: function c() {
			span = (0, _shared.createElement)("span");
			if_block.c();
			(0, _shared.addListener)(span, "click", click_handler);
			span.className = "expand_widget svelte-121lxd1";
		},
		m: function m(target, anchor) {
			(0, _shared.insert)(target, span, anchor);
			if_block.m(span, null);
		},
		p: function p(changed, _ctx) {
			ctx = _ctx;
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(changed, ctx);
			} else {
				if_block.d(1);
				if_block = current_block_type(component, ctx);
				if_block.c();
				if_block.m(span, null);
			}
		},
		d: function d(detach) {
			if (detach) {
				(0, _shared.detachNode)(span);
			}

			if_block.d();
			(0, _shared.removeListener)(span, "click", click_handler);
		}
	};
}

// (2:4) {#if all_weights}
function create_if_block(component, ctx) {
	var span, text_1, if_block_anchor;

	var each_value = ctx.all_weights.slice(0, ctx.show_overflow ? ctx.all_weights.length : ctx.num_to_show);

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(component, get_each_context(ctx, each_value, i));
	}

	var if_block = ctx.all_weights.length > ctx.num_to_show && create_if_block_1(component, ctx);

	return {
		c: function c() {
			span = (0, _shared.createElement)("span");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			text_1 = (0, _shared.createText)("\n        ");
			if (if_block) if_block.c();
			if_block_anchor = (0, _shared.createComment)();
		},
		m: function m(target, anchor) {
			(0, _shared.insert)(target, span, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(span, null);
			}

			(0, _shared.insert)(target, text_1, anchor);
			if (if_block) if_block.m(target, anchor);
			(0, _shared.insert)(target, if_block_anchor, anchor);
		},
		p: function p(changed, ctx) {
			if (changed.all_weights || changed.show_overflow || changed.num_to_show) {
				each_value = ctx.all_weights.slice(0, ctx.show_overflow ? ctx.all_weights.length : ctx.num_to_show);

				for (var i = 0; i < each_value.length; i += 1) {
					var child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(component, child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(span, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}

			if (ctx.all_weights.length > ctx.num_to_show) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block_1(component, ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d: function d(detach) {
			if (detach) {
				(0, _shared.detachNode)(span);
			}

			(0, _shared.destroyEach)(each_blocks, detach);

			if (detach) {
				(0, _shared.detachNode)(text_1);
			}

			if (if_block) if_block.d(detach);
			if (detach) {
				(0, _shared.detachNode)(if_block_anchor);
			}
		}
	};
}

function get_each_context(ctx, list, i) {
	var child_ctx = Object.create(ctx);
	child_ctx.weight_entry = list[i];
	child_ctx.each_value = list;
	child_ctx.weight_index = i;
	return child_ctx;
}

function ReducedWeights(options) {
	var _this2 = this;

	(0, _shared.init)(this, options);
	this._state = (0, _shared.assign)(data(), options.data);
	this._recompute({ show_overflow: 1 }, this._state);
	this._intro = true;

	if (!document.getElementById("svelte-121lxd1-style")) add_css();

	this._fragment = create_main_fragment(this, this._state);

	this.root._oncreate.push(function () {
		oncreate.call(_this2);
		_this2.fire("update", { changed: (0, _shared.assignTrue)({}, _this2._state), current: _this2._state });
	});

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);

		(0, _shared.flush)(this);
	}
}

(0, _shared.assign)(ReducedWeights.prototype, _shared.proto);
(0, _shared.assign)(ReducedWeights.prototype, methods);

ReducedWeights.prototype._recompute = function _recompute(changed, state) {
	if (changed.show_overflow) {
		if (this._differs(state.overflow_display_type, state.overflow_display_type = overflow_display_type(state))) changed.overflow_display_type = true;
	}
};
exports.default = ReducedWeights;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTNiNDRlY2VlODJmMWZhZmRkMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFncmFtcy9WaXN1YWxUT0MuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVjaWQtY29tcG9uZW50cy9wdWJsaWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWdyYW1zL0NsdXN0ZXJTdW1tYXJ5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWdyYW1zL1JlZHVjZWRXZWlnaHRzLmh0bWwiXSwibmFtZXMiOlsidG9jTmF2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZpc3VhbFRPQyIsIlZpc3VhbFRPQyIsInRhcmdldCIsImZpZ3VyZSIsImNsdXN0ZXJTdW1tYXJ5IiwiQ2x1c3RlclN1bW1hcnkiLCJkYXRhIiwicmVkdWNlZFdlaWdodFRhZ3MiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInJlZHVjZWRXZWlnaHRUYWciLCJjb25zb2xlIiwibG9nIiwiYXR0cmlidXRlcyIsIm51bV90b19zaG93IiwicGFyc2VJbnQiLCJ2YWx1ZSIsIlJlZHVjZWRXZWlnaHRzIiwid2VpZ2h0c191cmwiLCJyZXBsYWNlIiwicmFuZ2UiLCJuIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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QkFBMEI7O0FBRTFCLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNkJBQTZCLEVBQUU7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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LFcsQ0FBWSxNLEdBQU0sSUFBRyxXLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBSGxDLGEsRUFBYTs7Ozs7Ozs7WUFEZ0IsRyxDQUFJLEVBQUUsZUFBZSxLQUFDLGFBQWxCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBTG5DLFcsQ0FBWSxLLENBQU0sQyxFQUFHLElBQUMsYUFBRCxHQUFjLElBQUcsV0FBSCxDQUFlLE1BQTdCLEdBQW1DLElBQUcsVzs7OztnQ0FBaEUsTSxFQUFBLE0sRUFBQTs7OztvQkFJRyxXLENBQVksTSxHQUFNLElBQUcsVyxJQUFXLGlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBSjlCLFcsQ0FBWSxLLENBQU0sQyxFQUFHLElBQUMsYUFBRCxHQUFjLElBQUcsV0FBSCxDQUFlLE1BQTdCLEdBQW1DLElBQUcsVzs7bUNBQWhFLE0sRUFBQSxNLEVBQUE7Ozs7Ozs7Ozs7Ozs7OztvQ0FBQSxNOzs7V0FJRyxXLENBQVksTSxHQUFNLElBQUcsVyxFQUFXIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGEzYjQ0ZWNlZTgyZjFmYWZkZDFiIiwiZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmZ1bmN0aW9uIGFzc2lnbih0YXIsIHNyYykge1xuXHRmb3IgKHZhciBrIGluIHNyYykgdGFyW2tdID0gc3JjW2tdO1xuXHRyZXR1cm4gdGFyO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25UcnVlKHRhciwgc3JjKSB7XG5cdGZvciAodmFyIGsgaW4gc3JjKSB0YXJba10gPSAxO1xuXHRyZXR1cm4gdGFyO1xufVxuXG5mdW5jdGlvbiBpc1Byb21pc2UodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBjYWxsQWZ0ZXIoZm4sIGkpIHtcblx0aWYgKGkgPT09IDApIGZuKCk7XG5cdHJldHVybiAoKSA9PiB7XG5cdFx0aWYgKCEtLWkpIGZuKCk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZExvYyhlbGVtZW50LCBmaWxlLCBsaW5lLCBjb2x1bW4sIGNoYXIpIHtcblx0ZWxlbWVudC5fX3N2ZWx0ZV9tZXRhID0ge1xuXHRcdGxvYzogeyBmaWxlLCBsaW5lLCBjb2x1bW4sIGNoYXIgfVxuXHR9O1xufVxuXG5mdW5jdGlvbiBleGNsdWRlKHNyYywgcHJvcCkge1xuXHRjb25zdCB0YXIgPSB7fTtcblx0Zm9yIChjb25zdCBrIGluIHNyYykgayA9PT0gcHJvcCB8fCAodGFyW2tdID0gc3JjW2tdKTtcblx0cmV0dXJuIHRhcjtcbn1cblxuZnVuY3Rpb24gcnVuKGZuKSB7XG5cdGZuKCk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZCh0YXJnZXQsIG5vZGUpIHtcblx0dGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBpbnNlcnQodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcblx0dGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IpO1xufVxuXG5mdW5jdGlvbiBkZXRhY2hOb2RlKG5vZGUpIHtcblx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBkZXRhY2hCZXR3ZWVuKGJlZm9yZSwgYWZ0ZXIpIHtcblx0d2hpbGUgKGJlZm9yZS5uZXh0U2libGluZyAmJiBiZWZvcmUubmV4dFNpYmxpbmcgIT09IGFmdGVyKSB7XG5cdFx0YmVmb3JlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKTtcblx0fVxufVxuXG5mdW5jdGlvbiBkZXRhY2hCZWZvcmUoYWZ0ZXIpIHtcblx0d2hpbGUgKGFmdGVyLnByZXZpb3VzU2libGluZykge1xuXHRcdGFmdGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKTtcblx0fVxufVxuXG5mdW5jdGlvbiBkZXRhY2hBZnRlcihiZWZvcmUpIHtcblx0d2hpbGUgKGJlZm9yZS5uZXh0U2libGluZykge1xuXHRcdGJlZm9yZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJlZm9yZS5uZXh0U2libGluZyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRCZXR3ZWVuKGJlZm9yZSwgYWZ0ZXIsIHRhcmdldCkge1xuXHR3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoYmVmb3JlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYmVmb3JlLm5leHRTaWJsaW5nKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVpbnNlcnRDaGlsZHJlbihwYXJlbnQsIHRhcmdldCkge1xuXHR3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHRhcmdldC5hcHBlbmRDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIHJlaW5zZXJ0QWZ0ZXIoYmVmb3JlLCB0YXJnZXQpIHtcblx0d2hpbGUgKGJlZm9yZS5uZXh0U2libGluZykgdGFyZ2V0LmFwcGVuZENoaWxkKGJlZm9yZS5uZXh0U2libGluZyk7XG59XG5cbmZ1bmN0aW9uIHJlaW5zZXJ0QmVmb3JlKGFmdGVyLCB0YXJnZXQpIHtcblx0dmFyIHBhcmVudCA9IGFmdGVyLnBhcmVudE5vZGU7XG5cdHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCAhPT0gYWZ0ZXIpIHRhcmdldC5hcHBlbmRDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lFYWNoKGl0ZXJhdGlvbnMsIGRldGFjaCkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRpZiAoaXRlcmF0aW9uc1tpXSkgaXRlcmF0aW9uc1tpXS5kKGRldGFjaCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnQoKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQobmFtZSkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3ZnRWxlbWVudChuYW1lKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHQoZGF0YSkge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1lbnQoKSB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcbn1cblxuZnVuY3Rpb24gYWRkTGlzdGVuZXIobm9kZSwgZXZlbnQsIGhhbmRsZXIpIHtcblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKG5vZGUsIGV2ZW50LCBoYW5kbGVyKSB7XG5cdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuXHRub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG5cdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0aWYgKGtleSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0bm9kZS5zdHlsZS5jc3NUZXh0ID0gYXR0cmlidXRlc1trZXldO1xuXHRcdH0gZWxzZSBpZiAoa2V5IGluIG5vZGUpIHtcblx0XHRcdG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGF0dHJpYnV0ZXNba2V5XSA9PT0gdW5kZWZpbmVkKSByZW1vdmVBdHRyaWJ1dGUobm9kZSwga2V5KTtcblx0XHRcdGVsc2Ugc2V0QXR0cmlidXRlKG5vZGUsIGtleSwgYXR0cmlidXRlc1trZXldKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gc2V0Q3VzdG9tRWxlbWVudERhdGEobm9kZSwgcHJvcCwgdmFsdWUpIHtcblx0aWYgKHByb3AgaW4gbm9kZSkge1xuXHRcdG5vZGVbcHJvcF0gPSB2YWx1ZTtcblx0fSBlbHNlIGlmICh2YWx1ZSkge1xuXHRcdHNldEF0dHJpYnV0ZShub2RlLCBwcm9wLCB2YWx1ZSk7XG5cdH0gZWxzZSB7XG5cdFx0cmVtb3ZlQXR0cmlidXRlKG5vZGUsIHByb3ApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShub2RlLCBhdHRyaWJ1dGUpIHtcblx0bm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbn1cblxuZnVuY3Rpb24gc2V0WGxpbmtBdHRyaWJ1dGUobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuXHRub2RlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldEJpbmRpbmdHcm91cFZhbHVlKGdyb3VwKSB7XG5cdHZhciB2YWx1ZSA9IFtdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGdyb3VwLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0aWYgKGdyb3VwW2ldLmNoZWNrZWQpIHZhbHVlLnB1c2goZ3JvdXBbaV0uX192YWx1ZSk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgPT09ICcnID8gdW5kZWZpbmVkIDogK3ZhbHVlO1xufVxuXG5mdW5jdGlvbiB0aW1lUmFuZ2VzVG9BcnJheShyYW5nZXMpIHtcblx0dmFyIGFycmF5ID0gW107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0YXJyYXkucHVzaCh7IHN0YXJ0OiByYW5nZXMuc3RhcnQoaSksIGVuZDogcmFuZ2VzLmVuZChpKSB9KTtcblx0fVxuXHRyZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNoaWxkcmVuIChlbGVtZW50KSB7XG5cdHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIGNsYWltRWxlbWVudCAobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIHN2Zykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIG5vZGUgPSBub2Rlc1tpXTtcblx0XHRpZiAobm9kZS5ub2RlTmFtZSA9PT0gbmFtZSkge1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBqICs9IDEpIHtcblx0XHRcdFx0dmFyIGF0dHJpYnV0ZSA9IG5vZGUuYXR0cmlidXRlc1tqXTtcblx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5uYW1lXSkgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5vZGVzLnNwbGljZShpLCAxKVswXTsgLy8gVE9ETyBzdHJpcCB1bndhbnRlZCBhdHRyaWJ1dGVzXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN2ZyA/IGNyZWF0ZVN2Z0VsZW1lbnQobmFtZSkgOiBjcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjbGFpbVRleHQgKG5vZGVzLCBkYXRhKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgbm9kZSA9IG5vZGVzW2ldO1xuXHRcdGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XG5cdFx0XHRub2RlLmRhdGEgPSBkYXRhO1xuXHRcdFx0cmV0dXJuIG5vZGVzLnNwbGljZShpLCAxKVswXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVGV4dChkYXRhKTtcbn1cblxuZnVuY3Rpb24gc2V0RGF0YSh0ZXh0LCBkYXRhKSB7XG5cdHRleHQuZGF0YSA9ICcnICsgZGF0YTtcbn1cblxuZnVuY3Rpb24gc2V0SW5wdXRUeXBlKGlucHV0LCB0eXBlKSB7XG5cdHRyeSB7XG5cdFx0aW5wdXQudHlwZSA9IHR5cGU7XG5cdH0gY2F0Y2ggKGUpIHt9XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlKG5vZGUsIGtleSwgdmFsdWUpIHtcblx0bm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0T3B0aW9uKHNlbGVjdCwgdmFsdWUpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdHZhciBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcblxuXHRcdGlmIChvcHRpb24uX192YWx1ZSA9PT0gdmFsdWUpIHtcblx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdE9wdGlvbnMoc2VsZWN0LCB2YWx1ZSkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuXHRcdG9wdGlvbi5zZWxlY3RlZCA9IH52YWx1ZS5pbmRleE9mKG9wdGlvbi5fX3ZhbHVlKTtcblx0fVxufVxuXG5mdW5jdGlvbiBzZWxlY3RWYWx1ZShzZWxlY3QpIHtcblx0dmFyIHNlbGVjdGVkT3B0aW9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJykgfHwgc2VsZWN0Lm9wdGlvbnNbMF07XG5cdHJldHVybiBzZWxlY3RlZE9wdGlvbiAmJiBzZWxlY3RlZE9wdGlvbi5fX3ZhbHVlO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RNdWx0aXBsZVZhbHVlKHNlbGVjdCkge1xuXHRyZXR1cm4gW10ubWFwLmNhbGwoc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJzpjaGVja2VkJyksIGZ1bmN0aW9uKG9wdGlvbikge1xuXHRcdHJldHVybiBvcHRpb24uX192YWx1ZTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFJlc2l6ZUxpc3RlbmVyKGVsZW1lbnQsIGZuKSB7XG5cdGlmIChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuXHRcdGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuXHR9XG5cblx0Y29uc3Qgb2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0Jyk7XG5cdG9iamVjdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6IC0xOycpO1xuXHRvYmplY3QudHlwZSA9ICd0ZXh0L2h0bWwnO1xuXG5cdGxldCB3aW47XG5cblx0b2JqZWN0Lm9ubG9hZCA9ICgpID0+IHtcblx0XHR3aW4gPSBvYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3O1xuXHRcdHdpbi5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmbik7XG5cdH07XG5cblx0aWYgKC9UcmlkZW50Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG5cdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChvYmplY3QpO1xuXHRcdG9iamVjdC5kYXRhID0gJ2Fib3V0OmJsYW5rJztcblx0fSBlbHNlIHtcblx0XHRvYmplY3QuZGF0YSA9ICdhYm91dDpibGFuayc7XG5cdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChvYmplY3QpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRjYW5jZWw6ICgpID0+IHtcblx0XHRcdHdpbiAmJiB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lciAmJiB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZm4pO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVDaGlsZChvYmplY3QpO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbWVudCwgbmFtZSwgdG9nZ2xlKSB7XG5cdGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShuYW1lLCAhIXRvZ2dsZSk7XG59XG5cbmZ1bmN0aW9uIGxpbmVhcih0KSB7XG5cdHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJ1bGUoeyBhLCBiLCBkZWx0YSwgZHVyYXRpb24gfSwgZWFzZSwgZm4pIHtcblx0Y29uc3Qgc3RlcCA9IDE2LjY2NiAvIGR1cmF0aW9uO1xuXHRsZXQga2V5ZnJhbWVzID0gJ3tcXG4nO1xuXG5cdGZvciAobGV0IHAgPSAwOyBwIDw9IDE7IHAgKz0gc3RlcCkge1xuXHRcdGNvbnN0IHQgPSBhICsgZGVsdGEgKiBlYXNlKHApO1xuXHRcdGtleWZyYW1lcyArPSBwICogMTAwICsgYCV7JHtmbih0LCAxIC0gdCl9fVxcbmA7XG5cdH1cblxuXHRyZXR1cm4ga2V5ZnJhbWVzICsgYDEwMCUgeyR7Zm4oYiwgMSAtIGIpfX1cXG59YDtcbn1cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Rhcmtza3lhcHAvc3RyaW5nLWhhc2gvYmxvYi9tYXN0ZXIvaW5kZXguanNcbmZ1bmN0aW9uIGhhc2goc3RyKSB7XG5cdGxldCBoYXNoID0gNTM4MTtcblx0bGV0IGkgPSBzdHIubGVuZ3RoO1xuXG5cdHdoaWxlIChpLS0pIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSBeIHN0ci5jaGFyQ29kZUF0KGkpO1xuXHRyZXR1cm4gaGFzaCA+Pj4gMDtcbn1cblxuZnVuY3Rpb24gd3JhcFRyYW5zaXRpb24oY29tcG9uZW50LCBub2RlLCBmbiwgcGFyYW1zLCBpbnRybykge1xuXHRsZXQgb2JqID0gZm4uY2FsbChjb21wb25lbnQsIG5vZGUsIHBhcmFtcyk7XG5cdGxldCBkdXJhdGlvbjtcblx0bGV0IGVhc2U7XG5cdGxldCBjc3NUZXh0O1xuXG5cdGxldCBpbml0aWFsaXNlZCA9IGZhbHNlO1xuXG5cdHJldHVybiB7XG5cdFx0dDogaW50cm8gPyAwIDogMSxcblx0XHRydW5uaW5nOiBmYWxzZSxcblx0XHRwcm9ncmFtOiBudWxsLFxuXHRcdHBlbmRpbmc6IG51bGwsXG5cblx0XHRydW4oYiwgY2FsbGJhY2spIHtcblx0XHRcdGlmICh0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLndhaXQoKS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRvYmogPSBvYmooKTtcblx0XHRcdFx0XHR0aGlzLl9ydW4oYiwgY2FsbGJhY2spO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX3J1bihiLCBjYWxsYmFjayk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdF9ydW4oYiwgY2FsbGJhY2spIHtcblx0XHRcdGR1cmF0aW9uID0gb2JqLmR1cmF0aW9uIHx8IDMwMDtcblx0XHRcdGVhc2UgPSBvYmouZWFzaW5nIHx8IGxpbmVhcjtcblxuXHRcdFx0Y29uc3QgcHJvZ3JhbSA9IHtcblx0XHRcdFx0c3RhcnQ6IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSArIChvYmouZGVsYXkgfHwgMCksXG5cdFx0XHRcdGIsXG5cdFx0XHRcdGNhbGxiYWNrOiBjYWxsYmFjayB8fCBub29wXG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoaW50cm8gJiYgIWluaXRpYWxpc2VkKSB7XG5cdFx0XHRcdGlmIChvYmouY3NzICYmIG9iai5kZWxheSkge1xuXHRcdFx0XHRcdGNzc1RleHQgPSBub2RlLnN0eWxlLmNzc1RleHQ7XG5cdFx0XHRcdFx0bm9kZS5zdHlsZS5jc3NUZXh0ICs9IG9iai5jc3MoMCwgMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAob2JqLnRpY2spIG9iai50aWNrKDAsIDEpO1xuXHRcdFx0XHRpbml0aWFsaXNlZCA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghYikge1xuXHRcdFx0XHRwcm9ncmFtLmdyb3VwID0gb3V0cm9zLmN1cnJlbnQ7XG5cdFx0XHRcdG91dHJvcy5jdXJyZW50LnJlbWFpbmluZyArPSAxO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob2JqLmRlbGF5KSB7XG5cdFx0XHRcdHRoaXMucGVuZGluZyA9IHByb2dyYW07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN0YXJ0KHByb2dyYW0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXRoaXMucnVubmluZykge1xuXHRcdFx0XHR0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0XHR0cmFuc2l0aW9uTWFuYWdlci5hZGQodGhpcyk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHN0YXJ0KHByb2dyYW0pIHtcblx0XHRcdGNvbXBvbmVudC5maXJlKGAke3Byb2dyYW0uYiA/ICdpbnRybycgOiAnb3V0cm8nfS5zdGFydGAsIHsgbm9kZSB9KTtcblxuXHRcdFx0cHJvZ3JhbS5hID0gdGhpcy50O1xuXHRcdFx0cHJvZ3JhbS5kZWx0YSA9IHByb2dyYW0uYiAtIHByb2dyYW0uYTtcblx0XHRcdHByb2dyYW0uZHVyYXRpb24gPSBkdXJhdGlvbiAqIE1hdGguYWJzKHByb2dyYW0uYiAtIHByb2dyYW0uYSk7XG5cdFx0XHRwcm9ncmFtLmVuZCA9IHByb2dyYW0uc3RhcnQgKyBwcm9ncmFtLmR1cmF0aW9uO1xuXG5cdFx0XHRpZiAob2JqLmNzcykge1xuXHRcdFx0XHRpZiAob2JqLmRlbGF5KSBub2RlLnN0eWxlLmNzc1RleHQgPSBjc3NUZXh0O1xuXG5cdFx0XHRcdGNvbnN0IHJ1bGUgPSBnZW5lcmF0ZVJ1bGUocHJvZ3JhbSwgZWFzZSwgb2JqLmNzcyk7XG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLmFkZFJ1bGUocnVsZSwgcHJvZ3JhbS5uYW1lID0gJ19fc3ZlbHRlXycgKyBoYXNoKHJ1bGUpKTtcblxuXHRcdFx0XHRub2RlLnN0eWxlLmFuaW1hdGlvbiA9IChub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJylcblx0XHRcdFx0XHQuc3BsaXQoJywgJylcblx0XHRcdFx0XHQuZmlsdGVyKGFuaW0gPT4gYW5pbSAmJiAocHJvZ3JhbS5kZWx0YSA8IDAgfHwgIS9fX3N2ZWx0ZS8udGVzdChhbmltKSkpXG5cdFx0XHRcdFx0LmNvbmNhdChgJHtwcm9ncmFtLm5hbWV9ICR7cHJvZ3JhbS5kdXJhdGlvbn1tcyBsaW5lYXIgMSBmb3J3YXJkc2ApXG5cdFx0XHRcdFx0LmpvaW4oJywgJyk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG5cdFx0XHR0aGlzLnBlbmRpbmcgPSBudWxsO1xuXHRcdH0sXG5cblx0XHR1cGRhdGUobm93KSB7XG5cdFx0XHRjb25zdCBwcm9ncmFtID0gdGhpcy5wcm9ncmFtO1xuXHRcdFx0aWYgKCFwcm9ncmFtKSByZXR1cm47XG5cblx0XHRcdGNvbnN0IHAgPSBub3cgLSBwcm9ncmFtLnN0YXJ0O1xuXHRcdFx0dGhpcy50ID0gcHJvZ3JhbS5hICsgcHJvZ3JhbS5kZWx0YSAqIGVhc2UocCAvIHByb2dyYW0uZHVyYXRpb24pO1xuXHRcdFx0aWYgKG9iai50aWNrKSBvYmoudGljayh0aGlzLnQsIDEgLSB0aGlzLnQpO1xuXHRcdH0sXG5cblx0XHRkb25lKCkge1xuXHRcdFx0Y29uc3QgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbTtcblx0XHRcdHRoaXMudCA9IHByb2dyYW0uYjtcblxuXHRcdFx0aWYgKG9iai50aWNrKSBvYmoudGljayh0aGlzLnQsIDEgLSB0aGlzLnQpO1xuXG5cdFx0XHRjb21wb25lbnQuZmlyZShgJHtwcm9ncmFtLmIgPyAnaW50cm8nIDogJ291dHJvJ30uZW5kYCwgeyBub2RlIH0pO1xuXG5cdFx0XHRpZiAoIXByb2dyYW0uYiAmJiAhcHJvZ3JhbS5pbnZhbGlkYXRlZCkge1xuXHRcdFx0XHRwcm9ncmFtLmdyb3VwLmNhbGxiYWNrcy5wdXNoKCgpID0+IHtcblx0XHRcdFx0XHRwcm9ncmFtLmNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0aWYgKG9iai5jc3MpIHRyYW5zaXRpb25NYW5hZ2VyLmRlbGV0ZVJ1bGUobm9kZSwgcHJvZ3JhbS5uYW1lKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKC0tcHJvZ3JhbS5ncm91cC5yZW1haW5pbmcgPT09IDApIHtcblx0XHRcdFx0XHRwcm9ncmFtLmdyb3VwLmNhbGxiYWNrcy5mb3JFYWNoKHJ1bik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChvYmouY3NzKSB0cmFuc2l0aW9uTWFuYWdlci5kZWxldGVSdWxlKG5vZGUsIHByb2dyYW0ubmFtZSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucnVubmluZyA9ICEhdGhpcy5wZW5kaW5nO1xuXHRcdH0sXG5cblx0XHRhYm9ydChyZXNldCkge1xuXHRcdFx0aWYgKHRoaXMucHJvZ3JhbSkge1xuXHRcdFx0XHRpZiAocmVzZXQgJiYgb2JqLnRpY2spIG9iai50aWNrKDEsIDApO1xuXHRcdFx0XHRpZiAob2JqLmNzcykgdHJhbnNpdGlvbk1hbmFnZXIuZGVsZXRlUnVsZShub2RlLCB0aGlzLnByb2dyYW0ubmFtZSk7XG5cdFx0XHRcdHRoaXMucHJvZ3JhbSA9IHRoaXMucGVuZGluZyA9IG51bGw7XG5cdFx0XHRcdHRoaXMucnVubmluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRpbnZhbGlkYXRlKCkge1xuXHRcdFx0aWYgKHRoaXMucHJvZ3JhbSkge1xuXHRcdFx0XHR0aGlzLnByb2dyYW0uaW52YWxpZGF0ZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxubGV0IG91dHJvcyA9IHt9O1xuXG5mdW5jdGlvbiBncm91cE91dHJvcygpIHtcblx0b3V0cm9zLmN1cnJlbnQgPSB7XG5cdFx0cmVtYWluaW5nOiAwLFxuXHRcdGNhbGxiYWNrczogW11cblx0fTtcbn1cblxudmFyIHRyYW5zaXRpb25NYW5hZ2VyID0ge1xuXHRydW5uaW5nOiBmYWxzZSxcblx0dHJhbnNpdGlvbnM6IFtdLFxuXHRib3VuZDogbnVsbCxcblx0c3R5bGVzaGVldDogbnVsbCxcblx0YWN0aXZlUnVsZXM6IHt9LFxuXHRwcm9taXNlOiBudWxsLFxuXG5cdGFkZCh0cmFuc2l0aW9uKSB7XG5cdFx0dGhpcy50cmFuc2l0aW9ucy5wdXNoKHRyYW5zaXRpb24pO1xuXG5cdFx0aWYgKCF0aGlzLnJ1bm5pbmcpIHtcblx0XHRcdHRoaXMucnVubmluZyA9IHRydWU7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5ib3VuZCB8fCAodGhpcy5ib3VuZCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpKSk7XG5cdFx0fVxuXHR9LFxuXG5cdGFkZFJ1bGUocnVsZSwgbmFtZSkge1xuXHRcdGlmICghdGhpcy5zdHlsZXNoZWV0KSB7XG5cdFx0XHRjb25zdCBzdHlsZSA9IGNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLnN0eWxlc2hlZXQgPSBzdHlsZS5zaGVldDtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuYWN0aXZlUnVsZXNbbmFtZV0pIHtcblx0XHRcdHRoaXMuYWN0aXZlUnVsZXNbbmFtZV0gPSB0cnVlO1xuXHRcdFx0dGhpcy5zdHlsZXNoZWV0Lmluc2VydFJ1bGUoYEBrZXlmcmFtZXMgJHtuYW1lfSAke3J1bGV9YCwgdGhpcy5zdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG5cdFx0fVxuXHR9LFxuXG5cdG5leHQoKSB7XG5cdFx0dGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cblx0XHRjb25zdCBub3cgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG5cdFx0bGV0IGkgPSB0aGlzLnRyYW5zaXRpb25zLmxlbmd0aDtcblxuXHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdGNvbnN0IHRyYW5zaXRpb24gPSB0aGlzLnRyYW5zaXRpb25zW2ldO1xuXG5cdFx0XHRpZiAodHJhbnNpdGlvbi5wcm9ncmFtICYmIG5vdyA+PSB0cmFuc2l0aW9uLnByb2dyYW0uZW5kKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24uZG9uZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHJhbnNpdGlvbi5wZW5kaW5nICYmIG5vdyA+PSB0cmFuc2l0aW9uLnBlbmRpbmcuc3RhcnQpIHtcblx0XHRcdFx0dHJhbnNpdGlvbi5zdGFydCh0cmFuc2l0aW9uLnBlbmRpbmcpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHJhbnNpdGlvbi5ydW5uaW5nKSB7XG5cdFx0XHRcdHRyYW5zaXRpb24udXBkYXRlKG5vdyk7XG5cdFx0XHRcdHRoaXMucnVubmluZyA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKCF0cmFuc2l0aW9uLnBlbmRpbmcpIHtcblx0XHRcdFx0dGhpcy50cmFuc2l0aW9ucy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucnVubmluZykge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYm91bmQpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zdHlsZXNoZWV0KSB7XG5cdFx0XHRsZXQgaSA9IHRoaXMuc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoaS0tKSB0aGlzLnN0eWxlc2hlZXQuZGVsZXRlUnVsZShpKTtcblx0XHRcdHRoaXMuYWN0aXZlUnVsZXMgPSB7fTtcblx0XHR9XG5cdH0sXG5cblx0ZGVsZXRlUnVsZShub2RlLCBuYW1lKSB7XG5cdFx0bm9kZS5zdHlsZS5hbmltYXRpb24gPSBub2RlLnN0eWxlLmFuaW1hdGlvblxuXHRcdFx0LnNwbGl0KCcsICcpXG5cdFx0XHQuZmlsdGVyKGFuaW0gPT4gYW5pbSAmJiBhbmltLmluZGV4T2YobmFtZSkgPT09IC0xKVxuXHRcdFx0LmpvaW4oJywgJyk7XG5cdH0sXG5cblx0d2FpdCgpIHtcblx0XHRpZiAoIXRyYW5zaXRpb25NYW5hZ2VyLnByb21pc2UpIHtcblx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLnByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcblx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLnByb21pc2UudGhlbigoKSA9PiB7XG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLnByb21pc2UgPSBudWxsO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRyYW5zaXRpb25NYW5hZ2VyLnByb21pc2U7XG5cdH1cbn07XG5cbmZ1bmN0aW9uIHdyYXBBbmltYXRpb24obm9kZSwgZnJvbSwgZm4sIHBhcmFtcykge1xuXHRpZiAoIWZyb20pIHJldHVybjtcblxuXHRjb25zdCB0byA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdGlmIChmcm9tLmxlZnQgPT09IHRvLmxlZnQgJiYgZnJvbS5yaWdodCA9PT0gdG8ucmlnaHQgJiYgZnJvbS50b3AgPT09IHRvLnRvcCAmJiBmcm9tLmJvdHRvbSA9PT0gdG8uYm90dG9tKSByZXR1cm47XG5cblx0Y29uc3QgaW5mbyA9IGZuKG5vZGUsIHsgZnJvbSwgdG8gfSwgcGFyYW1zKTtcblxuXHRjb25zdCBkdXJhdGlvbiA9ICdkdXJhdGlvbicgaW4gaW5mbyA/IGluZm8uZHVyYXRpb24gOiAzMDA7XG5cdGNvbnN0IGRlbGF5ID0gJ2RlbGF5JyBpbiBpbmZvID8gaW5mby5kZWxheSA6IDA7XG5cdGNvbnN0IGVhc2UgPSBpbmZvLmVhc2luZyB8fCBsaW5lYXI7XG5cdGNvbnN0IHN0YXJ0ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpICsgZGVsYXk7XG5cdGNvbnN0IGVuZCA9IHN0YXJ0ICsgZHVyYXRpb247XG5cblx0Y29uc3QgcHJvZ3JhbSA9IHtcblx0XHRhOiAwLFxuXHRcdHQ6IDAsXG5cdFx0YjogMSxcblx0XHRkZWx0YTogMSxcblx0XHRkdXJhdGlvbixcblx0XHRzdGFydCxcblx0XHRlbmRcblx0fTtcblxuXHRjb25zdCBjc3NUZXh0ID0gbm9kZS5zdHlsZS5jc3NUZXh0O1xuXG5cdGNvbnN0IGFuaW1hdGlvbiA9IHtcblx0XHRwZW5kaW5nOiBkZWxheSA/IHByb2dyYW0gOiBudWxsLFxuXHRcdHByb2dyYW06IGRlbGF5ID8gbnVsbCA6IHByb2dyYW0sXG5cdFx0cnVubmluZzogdHJ1ZSxcblxuXHRcdHN0YXJ0KCkge1xuXHRcdFx0aWYgKGluZm8uY3NzKSB7XG5cdFx0XHRcdGlmIChkZWxheSkgbm9kZS5zdHlsZS5jc3NUZXh0ID0gY3NzVGV4dDtcblxuXHRcdFx0XHRjb25zdCBydWxlID0gZ2VuZXJhdGVSdWxlKHByb2dyYW0sIGVhc2UsIGluZm8uY3NzKTtcblx0XHRcdFx0cHJvZ3JhbS5uYW1lID0gYF9fc3ZlbHRlXyR7aGFzaChydWxlKX1gO1xuXG5cdFx0XHRcdHRyYW5zaXRpb25NYW5hZ2VyLmFkZFJ1bGUocnVsZSwgcHJvZ3JhbS5uYW1lKTtcblxuXHRcdFx0XHRub2RlLnN0eWxlLmFuaW1hdGlvbiA9IChub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJylcblx0XHRcdFx0XHQuc3BsaXQoJywgJylcblx0XHRcdFx0XHQuZmlsdGVyKGFuaW0gPT4gYW5pbSAmJiAocHJvZ3JhbS5kZWx0YSA8IDAgfHwgIS9fX3N2ZWx0ZS8udGVzdChhbmltKSkpXG5cdFx0XHRcdFx0LmNvbmNhdChgJHtwcm9ncmFtLm5hbWV9ICR7cHJvZ3JhbS5kdXJhdGlvbn1tcyBsaW5lYXIgMSBmb3J3YXJkc2ApXG5cdFx0XHRcdFx0LmpvaW4oJywgJyk7XG5cdFx0XHR9XG5cblx0XHRcdGFuaW1hdGlvbi5wcm9ncmFtID0gcHJvZ3JhbTtcblx0XHRcdGFuaW1hdGlvbi5wZW5kaW5nID0gbnVsbDtcblx0XHR9LFxuXG5cdFx0dXBkYXRlOiBub3cgPT4ge1xuXHRcdFx0Y29uc3QgcCA9IG5vdyAtIHByb2dyYW0uc3RhcnQ7XG5cdFx0XHRjb25zdCB0ID0gcHJvZ3JhbS5hICsgcHJvZ3JhbS5kZWx0YSAqIGVhc2UocCAvIHByb2dyYW0uZHVyYXRpb24pO1xuXHRcdFx0aWYgKGluZm8udGljaykgaW5mby50aWNrKHQsIDEgLSB0KTtcblx0XHR9LFxuXG5cdFx0ZG9uZSgpIHtcblx0XHRcdGlmIChpbmZvLnRpY2spIGluZm8udGljaygxLCAwKTtcblx0XHRcdGFuaW1hdGlvbi5zdG9wKCk7XG5cdFx0fSxcblxuXHRcdHN0b3AoKSB7XG5cdFx0XHRpZiAoaW5mby5jc3MpIHRyYW5zaXRpb25NYW5hZ2VyLmRlbGV0ZVJ1bGUobm9kZSwgcHJvZ3JhbS5uYW1lKTtcblx0XHRcdGFuaW1hdGlvbi5ydW5uaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdHRyYW5zaXRpb25NYW5hZ2VyLmFkZChhbmltYXRpb24pO1xuXG5cdGlmIChpbmZvLnRpY2spIGluZm8udGljaygwLCAxKTtcblxuXHRpZiAoZGVsYXkpIHtcblx0XHRpZiAoaW5mby5jc3MpIG5vZGUuc3R5bGUuY3NzVGV4dCArPSBpbmZvLmNzcygwLCAxKTtcblx0fSBlbHNlIHtcblx0XHRhbmltYXRpb24uc3RhcnQoKTtcblx0fVxuXG5cdHJldHVybiBhbmltYXRpb247XG59XG5cbmZ1bmN0aW9uIGZpeFBvc2l0aW9uKG5vZGUpIHtcblx0Y29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXG5cdGlmIChzdHlsZS5wb3NpdGlvbiAhPT0gJ2Fic29sdXRlJyAmJiBzdHlsZS5wb3NpdGlvbiAhPT0gJ2ZpeGVkJykge1xuXHRcdGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gc3R5bGU7XG5cdFx0Y29uc3QgYSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0bm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cdFx0bm9kZS5zdHlsZS53aWR0aCA9IHdpZHRoO1xuXHRcdG5vZGUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdGNvbnN0IGIgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0aWYgKGEubGVmdCAhPT0gYi5sZWZ0IHx8IGEudG9wICE9PSBiLnRvcCkge1xuXHRcdFx0Y29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXHRcdFx0Y29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IHN0eWxlLnRyYW5zZm9ybTtcblxuXHRcdFx0bm9kZS5zdHlsZS50cmFuc2Zvcm0gPSBgJHt0cmFuc2Zvcm19IHRyYW5zbGF0ZSgke2EubGVmdCAtIGIubGVmdH1weCwgJHthLnRvcCAtIGIudG9wfXB4KWA7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb21pc2UocHJvbWlzZSwgaW5mbykge1xuXHR2YXIgdG9rZW4gPSBpbmZvLnRva2VuID0ge307XG5cblx0ZnVuY3Rpb24gdXBkYXRlKHR5cGUsIGluZGV4LCBrZXksIHZhbHVlKSB7XG5cdFx0aWYgKGluZm8udG9rZW4gIT09IHRva2VuKSByZXR1cm47XG5cblx0XHRpbmZvLnJlc29sdmVkID0ga2V5ICYmIHsgW2tleV06IHZhbHVlIH07XG5cblx0XHRjb25zdCBjaGlsZF9jdHggPSBhc3NpZ24oYXNzaWduKHt9LCBpbmZvLmN0eCksIGluZm8ucmVzb2x2ZWQpO1xuXHRcdGNvbnN0IGJsb2NrID0gdHlwZSAmJiAoaW5mby5jdXJyZW50ID0gdHlwZSkoaW5mby5jb21wb25lbnQsIGNoaWxkX2N0eCk7XG5cblx0XHRpZiAoaW5mby5ibG9jaykge1xuXHRcdFx0aWYgKGluZm8uYmxvY2tzKSB7XG5cdFx0XHRcdGluZm8uYmxvY2tzLmZvckVhY2goKGJsb2NrLCBpKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGkgIT09IGluZGV4ICYmIGJsb2NrKSB7XG5cdFx0XHRcdFx0XHRncm91cE91dHJvcygpO1xuXHRcdFx0XHRcdFx0YmxvY2subygoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGJsb2NrLmQoMSk7XG5cdFx0XHRcdFx0XHRcdGluZm8uYmxvY2tzW2ldID0gbnVsbDtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpbmZvLmJsb2NrLmQoMSk7XG5cdFx0XHR9XG5cblx0XHRcdGJsb2NrLmMoKTtcblx0XHRcdGJsb2NrW2Jsb2NrLmkgPyAnaScgOiAnbSddKGluZm8ubW91bnQoKSwgaW5mby5hbmNob3IpO1xuXG5cdFx0XHRpbmZvLmNvbXBvbmVudC5yb290LnNldCh7fSk7IC8vIGZsdXNoIGFueSBoYW5kbGVycyB0aGF0IHdlcmUgY3JlYXRlZFxuXHRcdH1cblxuXHRcdGluZm8uYmxvY2sgPSBibG9jaztcblx0XHRpZiAoaW5mby5ibG9ja3MpIGluZm8uYmxvY2tzW2luZGV4XSA9IGJsb2NrO1xuXHR9XG5cblx0aWYgKGlzUHJvbWlzZShwcm9taXNlKSkge1xuXHRcdHByb21pc2UudGhlbih2YWx1ZSA9PiB7XG5cdFx0XHR1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCB2YWx1ZSk7XG5cdFx0fSwgZXJyb3IgPT4ge1xuXHRcdFx0dXBkYXRlKGluZm8uY2F0Y2gsIDIsIGluZm8uZXJyb3IsIGVycm9yKTtcblx0XHR9KTtcblxuXHRcdC8vIGlmIHdlIHByZXZpb3VzbHkgaGFkIGEgdGhlbi9jYXRjaCBibG9jaywgZGVzdHJveSBpdFxuXHRcdGlmIChpbmZvLmN1cnJlbnQgIT09IGluZm8ucGVuZGluZykge1xuXHRcdFx0dXBkYXRlKGluZm8ucGVuZGluZywgMCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYgKGluZm8uY3VycmVudCAhPT0gaW5mby50aGVuKSB7XG5cdFx0XHR1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCBwcm9taXNlKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGluZm8ucmVzb2x2ZWQgPSB7IFtpbmZvLnZhbHVlXTogcHJvbWlzZSB9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lCbG9jayhibG9jaywgbG9va3VwKSB7XG5cdGJsb2NrLmQoMSk7XG5cdGxvb2t1cFtibG9jay5rZXldID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gb3V0cm9BbmREZXN0cm95QmxvY2soYmxvY2ssIGxvb2t1cCkge1xuXHRibG9jay5vKGZ1bmN0aW9uKCkge1xuXHRcdGRlc3Ryb3lCbG9jayhibG9jaywgbG9va3VwKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGZpeEFuZE91dHJvQW5kRGVzdHJveUJsb2NrKGJsb2NrLCBsb29rdXApIHtcblx0YmxvY2suZigpO1xuXHRvdXRyb0FuZERlc3Ryb3lCbG9jayhibG9jaywgbG9va3VwKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlS2V5ZWRFYWNoKG9sZF9ibG9ja3MsIGNvbXBvbmVudCwgY2hhbmdlZCwgZ2V0X2tleSwgZHluYW1pYywgY3R4LCBsaXN0LCBsb29rdXAsIG5vZGUsIGRlc3Ryb3ksIGNyZWF0ZV9lYWNoX2Jsb2NrLCBpbnRyb19tZXRob2QsIG5leHQsIGdldF9jb250ZXh0KSB7XG5cdHZhciBvID0gb2xkX2Jsb2Nrcy5sZW5ndGg7XG5cdHZhciBuID0gbGlzdC5sZW5ndGg7XG5cblx0dmFyIGkgPSBvO1xuXHR2YXIgb2xkX2luZGV4ZXMgPSB7fTtcblx0d2hpbGUgKGktLSkgb2xkX2luZGV4ZXNbb2xkX2Jsb2Nrc1tpXS5rZXldID0gaTtcblxuXHR2YXIgbmV3X2Jsb2NrcyA9IFtdO1xuXHR2YXIgbmV3X2xvb2t1cCA9IHt9O1xuXHR2YXIgZGVsdGFzID0ge307XG5cblx0dmFyIGkgPSBuO1xuXHR3aGlsZSAoaS0tKSB7XG5cdFx0dmFyIGNoaWxkX2N0eCA9IGdldF9jb250ZXh0KGN0eCwgbGlzdCwgaSk7XG5cdFx0dmFyIGtleSA9IGdldF9rZXkoY2hpbGRfY3R4KTtcblx0XHR2YXIgYmxvY2sgPSBsb29rdXBba2V5XTtcblxuXHRcdGlmICghYmxvY2spIHtcblx0XHRcdGJsb2NrID0gY3JlYXRlX2VhY2hfYmxvY2soY29tcG9uZW50LCBrZXksIGNoaWxkX2N0eCk7XG5cdFx0XHRibG9jay5jKCk7XG5cdFx0fSBlbHNlIGlmIChkeW5hbWljKSB7XG5cdFx0XHRibG9jay5wKGNoYW5nZWQsIGNoaWxkX2N0eCk7XG5cdFx0fVxuXG5cdFx0bmV3X2Jsb2Nrc1tpXSA9IG5ld19sb29rdXBba2V5XSA9IGJsb2NrO1xuXG5cdFx0aWYgKGtleSBpbiBvbGRfaW5kZXhlcykgZGVsdGFzW2tleV0gPSBNYXRoLmFicyhpIC0gb2xkX2luZGV4ZXNba2V5XSk7XG5cdH1cblxuXHR2YXIgd2lsbF9tb3ZlID0ge307XG5cdHZhciBkaWRfbW92ZSA9IHt9O1xuXG5cdGZ1bmN0aW9uIGluc2VydChibG9jaykge1xuXHRcdGJsb2NrW2ludHJvX21ldGhvZF0obm9kZSwgbmV4dCk7XG5cdFx0bG9va3VwW2Jsb2NrLmtleV0gPSBibG9jaztcblx0XHRuZXh0ID0gYmxvY2suZmlyc3Q7XG5cdFx0bi0tO1xuXHR9XG5cblx0d2hpbGUgKG8gJiYgbikge1xuXHRcdHZhciBuZXdfYmxvY2sgPSBuZXdfYmxvY2tzW24gLSAxXTtcblx0XHR2YXIgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvIC0gMV07XG5cdFx0dmFyIG5ld19rZXkgPSBuZXdfYmxvY2sua2V5O1xuXHRcdHZhciBvbGRfa2V5ID0gb2xkX2Jsb2NrLmtleTtcblxuXHRcdGlmIChuZXdfYmxvY2sgPT09IG9sZF9ibG9jaykge1xuXHRcdFx0Ly8gZG8gbm90aGluZ1xuXHRcdFx0bmV4dCA9IG5ld19ibG9jay5maXJzdDtcblx0XHRcdG8tLTtcblx0XHRcdG4tLTtcblx0XHR9XG5cblx0XHRlbHNlIGlmICghbmV3X2xvb2t1cFtvbGRfa2V5XSkge1xuXHRcdFx0Ly8gcmVtb3ZlIG9sZCBibG9ja1xuXHRcdFx0ZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG5cdFx0XHRvLS07XG5cdFx0fVxuXG5cdFx0ZWxzZSBpZiAoIWxvb2t1cFtuZXdfa2V5XSB8fCB3aWxsX21vdmVbbmV3X2tleV0pIHtcblx0XHRcdGluc2VydChuZXdfYmxvY2spO1xuXHRcdH1cblxuXHRcdGVsc2UgaWYgKGRpZF9tb3ZlW29sZF9rZXldKSB7XG5cdFx0XHRvLS07XG5cblx0XHR9IGVsc2UgaWYgKGRlbHRhc1tuZXdfa2V5XSA+IGRlbHRhc1tvbGRfa2V5XSkge1xuXHRcdFx0ZGlkX21vdmVbbmV3X2tleV0gPSB0cnVlO1xuXHRcdFx0aW5zZXJ0KG5ld19ibG9jayk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0d2lsbF9tb3ZlW29sZF9rZXldID0gdHJ1ZTtcblx0XHRcdG8tLTtcblx0XHR9XG5cdH1cblxuXHR3aGlsZSAoby0tKSB7XG5cdFx0dmFyIG9sZF9ibG9jayA9IG9sZF9ibG9ja3Nbb107XG5cdFx0aWYgKCFuZXdfbG9va3VwW29sZF9ibG9jay5rZXldKSBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcblx0fVxuXG5cdHdoaWxlIChuKSBpbnNlcnQobmV3X2Jsb2Nrc1tuIC0gMV0pO1xuXG5cdHJldHVybiBuZXdfYmxvY2tzO1xufVxuXG5mdW5jdGlvbiBtZWFzdXJlKGJsb2Nrcykge1xuXHRjb25zdCByZWN0cyA9IHt9O1xuXHRsZXQgaSA9IGJsb2Nrcy5sZW5ndGg7XG5cdHdoaWxlIChpLS0pIHJlY3RzW2Jsb2Nrc1tpXS5rZXldID0gYmxvY2tzW2ldLm5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdHJldHVybiByZWN0cztcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZShibG9ja3MsIHJlY3RzLCBmbiwgcGFyYW1zKSB7XG5cdGxldCBpID0gYmxvY2tzLmxlbmd0aDtcblx0d2hpbGUgKGktLSkge1xuXHRcdGNvbnN0IGJsb2NrID0gYmxvY2tzW2ldO1xuXHRcdGNvbnN0IGZyb20gPSByZWN0c1tibG9jay5rZXldO1xuXG5cdFx0aWYgKCFmcm9tKSBjb250aW51ZTtcblx0XHRjb25zdCB0byA9IGJsb2NrLm5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRpZiAoZnJvbS5sZWZ0ID09PSB0by5sZWZ0ICYmIGZyb20ucmlnaHQgPT09IHRvLnJpZ2h0ICYmIGZyb20udG9wID09PSB0by50b3AgJiYgZnJvbS5ib3R0b20gPT09IHRvLmJvdHRvbSkgY29udGludWU7XG5cblxuXHR9XG59XG5cbmZ1bmN0aW9uIGdldFNwcmVhZFVwZGF0ZShsZXZlbHMsIHVwZGF0ZXMpIHtcblx0dmFyIHVwZGF0ZSA9IHt9O1xuXG5cdHZhciB0b19udWxsX291dCA9IHt9O1xuXHR2YXIgYWNjb3VudGVkX2ZvciA9IHt9O1xuXG5cdHZhciBpID0gbGV2ZWxzLmxlbmd0aDtcblx0d2hpbGUgKGktLSkge1xuXHRcdHZhciBvID0gbGV2ZWxzW2ldO1xuXHRcdHZhciBuID0gdXBkYXRlc1tpXTtcblxuXHRcdGlmIChuKSB7XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gbykge1xuXHRcdFx0XHRpZiAoIShrZXkgaW4gbikpIHRvX251bGxfb3V0W2tleV0gPSAxO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gbikge1xuXHRcdFx0XHRpZiAoIWFjY291bnRlZF9mb3Jba2V5XSkge1xuXHRcdFx0XHRcdHVwZGF0ZVtrZXldID0gbltrZXldO1xuXHRcdFx0XHRcdGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bGV2ZWxzW2ldID0gbjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIG8pIHtcblx0XHRcdFx0YWNjb3VudGVkX2ZvcltrZXldID0gMTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmb3IgKHZhciBrZXkgaW4gdG9fbnVsbF9vdXQpIHtcblx0XHRpZiAoIShrZXkgaW4gdXBkYXRlKSkgdXBkYXRlW2tleV0gPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRyZXR1cm4gdXBkYXRlO1xufVxuXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTJcbi8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNub25jaGFyYWN0ZXJcbmNvbnN0IGludmFsaWRBdHRyaWJ1dGVOYW1lQ2hhcmFjdGVyID0gL1tcXHMnXCI+XFwvPVxcdXtGREQwfS1cXHV7RkRFRn1cXHV7RkZGRX1cXHV7RkZGRn1cXHV7MUZGRkV9XFx1ezFGRkZGfVxcdXsyRkZGRX1cXHV7MkZGRkZ9XFx1ezNGRkZFfVxcdXszRkZGRn1cXHV7NEZGRkV9XFx1ezRGRkZGfVxcdXs1RkZGRX1cXHV7NUZGRkZ9XFx1ezZGRkZFfVxcdXs2RkZGRn1cXHV7N0ZGRkV9XFx1ezdGRkZGfVxcdXs4RkZGRX1cXHV7OEZGRkZ9XFx1ezlGRkZFfVxcdXs5RkZGRn1cXHV7QUZGRkV9XFx1e0FGRkZGfVxcdXtCRkZGRX1cXHV7QkZGRkZ9XFx1e0NGRkZFfVxcdXtDRkZGRn1cXHV7REZGRkV9XFx1e0RGRkZGfVxcdXtFRkZGRX1cXHV7RUZGRkZ9XFx1e0ZGRkZFfVxcdXtGRkZGRn1cXHV7MTBGRkZFfVxcdXsxMEZGRkZ9XS91O1xuXG5mdW5jdGlvbiBzcHJlYWQoYXJncykge1xuXHRjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgLi4uYXJncyk7XG5cdGxldCBzdHIgPSAnJztcblxuXHRPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdGlmIChpbnZhbGlkQXR0cmlidXRlTmFtZUNoYXJhY3Rlci50ZXN0KG5hbWUpKSByZXR1cm47XG5cblx0XHRjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cdFx0aWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybjtcblx0XHRpZiAodmFsdWUgPT09IHRydWUpIHN0ciArPSBcIiBcIiArIG5hbWU7XG5cblx0XHRjb25zdCBlc2NhcGVkID0gU3RyaW5nKHZhbHVlKVxuXHRcdFx0LnJlcGxhY2UoL1wiL2csICcmIzM0OycpXG5cdFx0XHQucmVwbGFjZSgvJy9nLCAnJiMzOTsnKTtcblxuXHRcdHN0ciArPSBcIiBcIiArIG5hbWUgKyBcIj1cIiArIEpTT04uc3RyaW5naWZ5KGVzY2FwZWQpO1xuXHR9KTtcblxuXHRyZXR1cm4gc3RyO1xufVxuXG5jb25zdCBlc2NhcGVkID0ge1xuXHQnXCInOiAnJnF1b3Q7Jyxcblx0XCInXCI6ICcmIzM5OycsXG5cdCcmJzogJyZhbXA7Jyxcblx0JzwnOiAnJmx0OycsXG5cdCc+JzogJyZndDsnXG59O1xuXG5mdW5jdGlvbiBlc2NhcGUoaHRtbCkge1xuXHRyZXR1cm4gU3RyaW5nKGh0bWwpLnJlcGxhY2UoL1tcIicmPD5dL2csIG1hdGNoID0+IGVzY2FwZWRbbWF0Y2hdKTtcbn1cblxuZnVuY3Rpb24gZWFjaChpdGVtcywgYXNzaWduLCBmbikge1xuXHRsZXQgc3RyID0gJyc7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRzdHIgKz0gZm4oYXNzaWduKGl0ZW1zW2ldLCBpKSk7XG5cdH1cblx0cmV0dXJuIHN0cjtcbn1cblxuY29uc3QgbWlzc2luZ0NvbXBvbmVudCA9IHtcblx0X3JlbmRlcjogKCkgPT4gJydcbn07XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU3NyQ29tcG9uZW50KGNvbXBvbmVudCwgbmFtZSkge1xuXHRpZiAoIWNvbXBvbmVudCB8fCAhY29tcG9uZW50Ll9yZW5kZXIpIHtcblx0XHRpZiAobmFtZSA9PT0gJ3N2ZWx0ZTpjb21wb25lbnQnKSBuYW1lICs9ICd0aGlzPXsuLi59Jztcblx0XHR0aHJvdyBuZXcgRXJyb3IoYDwke25hbWV9PiBpcyBub3QgYSB2YWxpZCBTU1IgY29tcG9uZW50LiBZb3UgbWF5IG5lZWQgdG8gcmV2aWV3IHlvdXIgYnVpbGQgY29uZmlnIHRvIGVuc3VyZSB0aGF0IGRlcGVuZGVuY2llcyBhcmUgY29tcGlsZWQsIHJhdGhlciB0aGFuIGltcG9ydGVkIGFzIHByZS1jb21waWxlZCBtb2R1bGVzYCk7XG5cdH1cblxuXHRyZXR1cm4gY29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBkZWJ1ZyhmaWxlLCBsaW5lLCBjb2x1bW4sIHZhbHVlcykge1xuXHRjb25zb2xlLmxvZyhge0BkZWJ1Z30gJHtmaWxlID8gZmlsZSArICcgJyA6ICcnfSgke2xpbmV9OiR7Y29sdW1ufSlgKTtcblx0Y29uc29sZS5sb2codmFsdWVzKTtcblx0cmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBibGFua09iamVjdCgpIHtcblx0cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3koZGV0YWNoKSB7XG5cdHRoaXMuZGVzdHJveSA9IG5vb3A7XG5cdHRoaXMuZmlyZSgnZGVzdHJveScpO1xuXHR0aGlzLnNldCA9IG5vb3A7XG5cblx0dGhpcy5fZnJhZ21lbnQuZChkZXRhY2ggIT09IGZhbHNlKTtcblx0dGhpcy5fZnJhZ21lbnQgPSBudWxsO1xuXHR0aGlzLl9zdGF0ZSA9IHt9O1xufVxuXG5mdW5jdGlvbiBkZXN0cm95RGV2KGRldGFjaCkge1xuXHRkZXN0cm95LmNhbGwodGhpcywgZGV0YWNoKTtcblx0dGhpcy5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS53YXJuKCdDb21wb25lbnQgd2FzIGFscmVhZHkgZGVzdHJveWVkJyk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIF9kaWZmZXJzKGEsIGIpIHtcblx0cmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGIgfHwgKChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JykgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicpO1xufVxuXG5mdW5jdGlvbiBfZGlmZmVyc0ltbXV0YWJsZShhLCBiKSB7XG5cdHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiO1xufVxuXG5mdW5jdGlvbiBmaXJlKGV2ZW50TmFtZSwgZGF0YSkge1xuXHR2YXIgaGFuZGxlcnMgPVxuXHRcdGV2ZW50TmFtZSBpbiB0aGlzLl9oYW5kbGVycyAmJiB0aGlzLl9oYW5kbGVyc1tldmVudE5hbWVdLnNsaWNlKCk7XG5cdGlmICghaGFuZGxlcnMpIHJldHVybjtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIGhhbmRsZXIgPSBoYW5kbGVyc1tpXTtcblxuXHRcdGlmICghaGFuZGxlci5fX2NhbGxpbmcpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGhhbmRsZXIuX19jYWxsaW5nID0gdHJ1ZTtcblx0XHRcdFx0aGFuZGxlci5jYWxsKHRoaXMsIGRhdGEpO1xuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0aGFuZGxlci5fX2NhbGxpbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZmx1c2goY29tcG9uZW50KSB7XG5cdGNvbXBvbmVudC5fbG9jayA9IHRydWU7XG5cdGNhbGxBbGwoY29tcG9uZW50Ll9iZWZvcmVjcmVhdGUpO1xuXHRjYWxsQWxsKGNvbXBvbmVudC5fb25jcmVhdGUpO1xuXHRjYWxsQWxsKGNvbXBvbmVudC5fYWZ0ZXJjcmVhdGUpO1xuXHRjb21wb25lbnQuX2xvY2sgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0KCkge1xuXHRyZXR1cm4gdGhpcy5fc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGluaXQoY29tcG9uZW50LCBvcHRpb25zKSB7XG5cdGNvbXBvbmVudC5faGFuZGxlcnMgPSBibGFua09iamVjdCgpO1xuXHRjb21wb25lbnQuX3Nsb3RzID0gYmxhbmtPYmplY3QoKTtcblx0Y29tcG9uZW50Ll9iaW5kID0gb3B0aW9ucy5fYmluZDtcblx0Y29tcG9uZW50Ll9zdGFnZWQgPSB7fTtcblxuXHRjb21wb25lbnQub3B0aW9ucyA9IG9wdGlvbnM7XG5cdGNvbXBvbmVudC5yb290ID0gb3B0aW9ucy5yb290IHx8IGNvbXBvbmVudDtcblx0Y29tcG9uZW50LnN0b3JlID0gb3B0aW9ucy5zdG9yZSB8fCBjb21wb25lbnQucm9vdC5zdG9yZTtcblxuXHRpZiAoIW9wdGlvbnMucm9vdCkge1xuXHRcdGNvbXBvbmVudC5fYmVmb3JlY3JlYXRlID0gW107XG5cdFx0Y29tcG9uZW50Ll9vbmNyZWF0ZSA9IFtdO1xuXHRcdGNvbXBvbmVudC5fYWZ0ZXJjcmVhdGUgPSBbXTtcblx0fVxufVxuXG5mdW5jdGlvbiBvbihldmVudE5hbWUsIGhhbmRsZXIpIHtcblx0dmFyIGhhbmRsZXJzID0gdGhpcy5faGFuZGxlcnNbZXZlbnROYW1lXSB8fCAodGhpcy5faGFuZGxlcnNbZXZlbnROYW1lXSA9IFtdKTtcblx0aGFuZGxlcnMucHVzaChoYW5kbGVyKTtcblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBoYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpO1xuXHRcdFx0aWYgKH5pbmRleCkgaGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIHNldChuZXdTdGF0ZSkge1xuXHR0aGlzLl9zZXQoYXNzaWduKHt9LCBuZXdTdGF0ZSkpO1xuXHRpZiAodGhpcy5yb290Ll9sb2NrKSByZXR1cm47XG5cdGZsdXNoKHRoaXMucm9vdCk7XG59XG5cbmZ1bmN0aW9uIF9zZXQobmV3U3RhdGUpIHtcblx0dmFyIG9sZFN0YXRlID0gdGhpcy5fc3RhdGUsXG5cdFx0Y2hhbmdlZCA9IHt9LFxuXHRcdGRpcnR5ID0gZmFsc2U7XG5cblx0bmV3U3RhdGUgPSBhc3NpZ24odGhpcy5fc3RhZ2VkLCBuZXdTdGF0ZSk7XG5cdHRoaXMuX3N0YWdlZCA9IHt9O1xuXG5cdGZvciAodmFyIGtleSBpbiBuZXdTdGF0ZSkge1xuXHRcdGlmICh0aGlzLl9kaWZmZXJzKG5ld1N0YXRlW2tleV0sIG9sZFN0YXRlW2tleV0pKSBjaGFuZ2VkW2tleV0gPSBkaXJ0eSA9IHRydWU7XG5cdH1cblx0aWYgKCFkaXJ0eSkgcmV0dXJuO1xuXG5cdHRoaXMuX3N0YXRlID0gYXNzaWduKGFzc2lnbih7fSwgb2xkU3RhdGUpLCBuZXdTdGF0ZSk7XG5cdHRoaXMuX3JlY29tcHV0ZShjaGFuZ2VkLCB0aGlzLl9zdGF0ZSk7XG5cdGlmICh0aGlzLl9iaW5kKSB0aGlzLl9iaW5kKGNoYW5nZWQsIHRoaXMuX3N0YXRlKTtcblxuXHRpZiAodGhpcy5fZnJhZ21lbnQpIHtcblx0XHR0aGlzLmZpcmUoXCJzdGF0ZVwiLCB7IGNoYW5nZWQ6IGNoYW5nZWQsIGN1cnJlbnQ6IHRoaXMuX3N0YXRlLCBwcmV2aW91czogb2xkU3RhdGUgfSk7XG5cdFx0dGhpcy5fZnJhZ21lbnQucChjaGFuZ2VkLCB0aGlzLl9zdGF0ZSk7XG5cdFx0dGhpcy5maXJlKFwidXBkYXRlXCIsIHsgY2hhbmdlZDogY2hhbmdlZCwgY3VycmVudDogdGhpcy5fc3RhdGUsIHByZXZpb3VzOiBvbGRTdGF0ZSB9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBfc3RhZ2UobmV3U3RhdGUpIHtcblx0YXNzaWduKHRoaXMuX3N0YWdlZCwgbmV3U3RhdGUpO1xufVxuXG5mdW5jdGlvbiBzZXREZXYobmV3U3RhdGUpIHtcblx0aWYgKHR5cGVvZiBuZXdTdGF0ZSAhPT0gJ29iamVjdCcpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHR0aGlzLl9kZWJ1Z05hbWUgKyAnLnNldCB3YXMgY2FsbGVkIHdpdGhvdXQgYW4gb2JqZWN0IG9mIGRhdGEga2V5LXZhbHVlcyB0byB1cGRhdGUuJ1xuXHRcdCk7XG5cdH1cblxuXHR0aGlzLl9jaGVja1JlYWRPbmx5KG5ld1N0YXRlKTtcblx0c2V0LmNhbGwodGhpcywgbmV3U3RhdGUpO1xufVxuXG5mdW5jdGlvbiBjYWxsQWxsKGZucykge1xuXHR3aGlsZSAoZm5zICYmIGZucy5sZW5ndGgpIGZucy5zaGlmdCgpKCk7XG59XG5cbmZ1bmN0aW9uIF9tb3VudCh0YXJnZXQsIGFuY2hvcikge1xuXHR0aGlzLl9mcmFnbWVudFt0aGlzLl9mcmFnbWVudC5pID8gJ2knIDogJ20nXSh0YXJnZXQsIGFuY2hvciB8fCBudWxsKTtcbn1cblxudmFyIFBFTkRJTkcgPSB7fTtcbnZhciBTVUNDRVNTID0ge307XG52YXIgRkFJTFVSRSA9IHt9O1xuXG5mdW5jdGlvbiByZW1vdmVGcm9tU3RvcmUoKSB7XG5cdHRoaXMuc3RvcmUuX3JlbW92ZSh0aGlzKTtcbn1cblxudmFyIHByb3RvID0ge1xuXHRkZXN0cm95LFxuXHRnZXQsXG5cdGZpcmUsXG5cdG9uLFxuXHRzZXQsXG5cdF9yZWNvbXB1dGU6IG5vb3AsXG5cdF9zZXQsXG5cdF9zdGFnZSxcblx0X21vdW50LFxuXHRfZGlmZmVyc1xufTtcblxudmFyIHByb3RvRGV2ID0ge1xuXHRkZXN0cm95OiBkZXN0cm95RGV2LFxuXHRnZXQsXG5cdGZpcmUsXG5cdG9uLFxuXHRzZXQ6IHNldERldixcblx0X3JlY29tcHV0ZTogbm9vcCxcblx0X3NldCxcblx0X3N0YWdlLFxuXHRfbW91bnQsXG5cdF9kaWZmZXJzXG59O1xuXG5leHBvcnQgeyBibGFua09iamVjdCwgZGVzdHJveSwgZGVzdHJveURldiwgX2RpZmZlcnMsIF9kaWZmZXJzSW1tdXRhYmxlLCBmaXJlLCBmbHVzaCwgZ2V0LCBpbml0LCBvbiwgc2V0LCBfc2V0LCBfc3RhZ2UsIHNldERldiwgY2FsbEFsbCwgX21vdW50LCBQRU5ESU5HLCBTVUNDRVNTLCBGQUlMVVJFLCByZW1vdmVGcm9tU3RvcmUsIHByb3RvLCBwcm90b0Rldiwgd3JhcEFuaW1hdGlvbiwgZml4UG9zaXRpb24sIGhhbmRsZVByb21pc2UsIGFwcGVuZCwgaW5zZXJ0LCBkZXRhY2hOb2RlLCBkZXRhY2hCZXR3ZWVuLCBkZXRhY2hCZWZvcmUsIGRldGFjaEFmdGVyLCByZWluc2VydEJldHdlZW4sIHJlaW5zZXJ0Q2hpbGRyZW4sIHJlaW5zZXJ0QWZ0ZXIsIHJlaW5zZXJ0QmVmb3JlLCBkZXN0cm95RWFjaCwgY3JlYXRlRnJhZ21lbnQsIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVN2Z0VsZW1lbnQsIGNyZWF0ZVRleHQsIGNyZWF0ZUNvbW1lbnQsIGFkZExpc3RlbmVyLCByZW1vdmVMaXN0ZW5lciwgc2V0QXR0cmlidXRlLCBzZXRBdHRyaWJ1dGVzLCBzZXRDdXN0b21FbGVtZW50RGF0YSwgcmVtb3ZlQXR0cmlidXRlLCBzZXRYbGlua0F0dHJpYnV0ZSwgZ2V0QmluZGluZ0dyb3VwVmFsdWUsIHRvTnVtYmVyLCB0aW1lUmFuZ2VzVG9BcnJheSwgY2hpbGRyZW4sIGNsYWltRWxlbWVudCwgY2xhaW1UZXh0LCBzZXREYXRhLCBzZXRJbnB1dFR5cGUsIHNldFN0eWxlLCBzZWxlY3RPcHRpb24sIHNlbGVjdE9wdGlvbnMsIHNlbGVjdFZhbHVlLCBzZWxlY3RNdWx0aXBsZVZhbHVlLCBhZGRSZXNpemVMaXN0ZW5lciwgdG9nZ2xlQ2xhc3MsIGRlc3Ryb3lCbG9jaywgb3V0cm9BbmREZXN0cm95QmxvY2ssIGZpeEFuZE91dHJvQW5kRGVzdHJveUJsb2NrLCB1cGRhdGVLZXllZEVhY2gsIG1lYXN1cmUsIGFuaW1hdGUsIGdldFNwcmVhZFVwZGF0ZSwgaW52YWxpZEF0dHJpYnV0ZU5hbWVDaGFyYWN0ZXIsIHNwcmVhZCwgZXNjYXBlZCwgZXNjYXBlLCBlYWNoLCBtaXNzaW5nQ29tcG9uZW50LCB2YWxpZGF0ZVNzckNvbXBvbmVudCwgZGVidWcsIGxpbmVhciwgZ2VuZXJhdGVSdWxlLCBoYXNoLCB3cmFwVHJhbnNpdGlvbiwgb3V0cm9zLCBncm91cE91dHJvcywgdHJhbnNpdGlvbk1hbmFnZXIsIG5vb3AsIGFzc2lnbiwgYXNzaWduVHJ1ZSwgaXNQcm9taXNlLCBjYWxsQWZ0ZXIsIGFkZExvYywgZXhjbHVkZSwgcnVuIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdmVsdGUvc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBWaXN1YWxUT0MgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9kaWFncmFtcy9WaXN1YWxUT0MuaHRtbCc7XG5pbXBvcnQgQ2x1c3RlclN1bW1hcnkgICAgICAgICAgICAgICAgIGZyb20gJy4vZGlhZ3JhbXMvQ2x1c3RlclN1bW1hcnkuaHRtbCc7XG5pbXBvcnQgUmVkdWNlZFdlaWdodHMgICAgICAgICAgICAgICAgIGZyb20gJy4vZGlhZ3JhbXMvUmVkdWNlZFdlaWdodHMuaHRtbCc7XG5cbi8vIGVhZ2VybHkgaW5pdGlhbGl6ZSB2dG9jICBhcyBpdCdzIGFib3ZlIHRoZSBmb2xkXG5jb25zdCB0b2NOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndnRvYycpO1xuY29uc3QgdmlzdWFsVE9DID0gbmV3IFZpc3VhbFRPQyh7dGFyZ2V0OiB0b2NOYXZ9KTtcblxuXG5cbi8vIGxhemlseSBpbml0aWFsaXplIGFueSBkaWFncmFtIGJlbG93IHRoZSBmb2xkLiBFLkc6XG57XG4gIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbHVzdGVycy1zdW1tYXJ5LWNvbnRhaW5lcicpO1xuICBjb25zdCBjbHVzdGVyU3VtbWFyeSA9IG5ldyBDbHVzdGVyU3VtbWFyeSh7XG4gICAgICB0YXJnZXQ6IGZpZ3VyZSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgICBcIm1vZGVsX2xheWVyc191cmxcIjogXCJiYW5kaW5nL21vZGVsX2xheWVyX3dlaWdodHMuanNvblwiLFxuICAgICAgICAgIFwiaW1hZ2VfdXJsXCI6IFwiZnVuIGltYWdlXCIsXG4gICAgICAgICAgXCJuX2NsdXN0ZXJzXCI6IDQsXG4gICAgICAgICAgXCJuX2NsdXN0ZXJzX21pblwiOiA0LFxuICAgICAgICAgIFwibl9jbHVzdGVyc19tYXhcIjogMTksXG4gICAgICAgICAgXCJjbHVzdGVyX3BhdGhfcHJlZml4XCI6IFwidXBzY2FsZWRfYmFuZGluZ1wiLFxuICAgICAgfVxuICB9KTtcblxuICBjb25zdCByZWR1Y2VkV2VpZ2h0VGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdSZWR1Y2VkV2VpZ2h0cycpO1xuICBmb3IgKGxldCByZWR1Y2VkV2VpZ2h0VGFnIG9mIHJlZHVjZWRXZWlnaHRUYWdzKSB7XG4gICAgICBjb25zb2xlLmxvZygnZm91bmQgdGFnOiAnLCByZWR1Y2VkV2VpZ2h0VGFnLCByZWR1Y2VkV2VpZ2h0VGFnLmF0dHJpYnV0ZXMpO1xuICAgICAgbGV0IG51bV90b19zaG93ID0gNDI7XG4gICAgICBpZiAocmVkdWNlZFdlaWdodFRhZy5hdHRyaWJ1dGVzLm51bV90b19zaG93KSB7XG4gICAgICAgICAgbnVtX3RvX3Nob3cgPSBwYXJzZUludChyZWR1Y2VkV2VpZ2h0VGFnLmF0dHJpYnV0ZXMubnVtX3RvX3Nob3cudmFsdWUsIDEwKVxuICAgICAgfVxuICAgICAgbmV3IFJlZHVjZWRXZWlnaHRzKHtcbiAgICAgICAgICB0YXJnZXQ6IHJlZHVjZWRXZWlnaHRUYWcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBcIndlaWdodHNfdXJsXCI6IHJlZHVjZWRXZWlnaHRUYWcuYXR0cmlidXRlcy53ZWlnaHRzX3VybC52YWx1ZS5yZXBsYWNlKC8lL2csICclMjUnKSxcbiAgICAgICAgICAgICAgXCJudW1fdG9fc2hvd1wiOiBudW1fdG9fc2hvdyxcbiAgICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCI8bmF2IGNsYXNzPVwidmlzdWFsLXRvY1wiPlxuICB7I2VhY2ggc2VjdGlvbnMgYXMgc2VjdGlvbiwgaX1cbiAgPGRpdiBjbGFzcz1cInZpc3VhbC10b2MtaXRlbVwiPlxuICAgIDxhIGhyZWY9XCJ7c2VjdGlvbi5hbmNob3J9XCIgY2xhc3M9XCJ2aXN1YWwtdG9jLXRvcFwiPlxuICAgICAgPFNwcml0ZSB1cmw9J2ltYWdlcy92dG9jLmpwZycgd2lkdGg9MzIwIGNvbHVtbnM9MyBpbmRleD17c2VjdGlvbi5zcHJpdGVfaW5kZXh9Lz5cbiAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsLXRvYy1oZWFkaW5nXCI+e3NlY3Rpb24udGl0bGV9PC9zcGFuPlxuICAgICAgeyNpZiBzZWN0aW9uLnN1YnRpdGxlfVxuICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbC10b2Mtc3ViaGVhZGluZ1wiPntzZWN0aW9uLnN1YnRpdGxlfTwvc3Bhbj5cbiAgICAgIHsvaWZ9XG4gICAgPC9hPlxuICAgIDxhIGhyZWY9XCJ7c2VjdGlvbi5jb2xhYl91cmx9XCIgY2xhc3M9XCJ2aXN1YWwtdG9jLWNvbGFiXCI+XG4gICAgICB0cnkgaW4gYSA8aW1nIGFsdD1cIkNvbGFiXCIgc3JjPVwiaW1hZ2VzL2NvbGFiLnN2Z1wiPiBub3RlYm9va1xuICAgIDwvYT5cbiAgPC9kaXY+XG4gIHsvZWFjaH1cbjwvbmF2PlxuXG5cbjxzdHlsZT5cbi52aXN1YWwtdG9jIHtcbiAgY291bnRlci1yZXNldDogdG9jLWhlYWRpbmc7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiBkZW5zZTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgZ3JpZC1nYXA6IDE2cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gIC52aXN1YWwtdG9jIHtcbiAgICBncmlkLWdhcDogOHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMTgwcHgpIHtcbiAgLnZpc3VhbC10b2Mge1xuICAgIGdyaWQtZ2FwOiAyMHB4O1xuICB9XG59XG4udmlzdWFsLXRvYy1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG4udmlzdWFsLXRvYy10b3Age1xuICBmbGV4LWdyb3c6IDE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNUU1RTU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAvKiBib3gtc2hhZG93OiAwcHggMXB4IDRweCByZ2JhKDAsMCwwLDAuMDUpOyAqL1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG4udmlzdWFsLXRvYy10b3A6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMXB4IDRweCByZ2JhKDAsMCwwLDAuMDUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMTVzLCB0cmFuc2Zvcm0gMC4xNXM7XG59XG4udmlzdWFsLXRvYy1oZWFkaW5nLFxuLnZpc3VhbC10b2Mtc3ViaGVhZGluZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMS4zZW07XG4gIGZvbnQtc2l6ZTogODUlO1xuICBwYWRkaW5nOiAwLjVlbSAxZW0gMWVtIDFlbTtcbn1cbi52aXN1YWwtdG9jLWhlYWRpbmcge1xuICBjb3VudGVyLWluY3JlbWVudDogdG9jLWhlYWRpbmc7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnZpc3VhbC10b2MtaGVhZGluZzo6YmVmb3Jle1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCJTZWN0aW9uIFwiIGNvdW50ZXIodG9jLWhlYWRpbmcpO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgY29sb3I6ICM2NjY7XG59XG4udmlzdWFsLXRvYy1zdWJoZWFkaW5nIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogNzUlO1xufVxuLnZpc3VhbC10b2MtY29sYWIge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogZGFzaGVkIDFweCByZ2JhKDAsMCwwLDAuMSk7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgcGFkZGluZy1sZWZ0OiAxLjJlbTtcbiAgcGFkZGluZy1yaWdodDogMS4yZW07XG4gIHBhZGRpbmctdG9wOiAwLjI1ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjYWFhO1xuICBmb250LXNpemU6IDEwLjVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG5cbn1cbi52aXN1YWwtdG9jLWNvbGFiID4gaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDRweDtcbiAgLyogZmlsdGVyOiBncmF5c2NhbGUoKTsgKi9cbn1cbi52aXN1YWwtdG9jLWl0ZW06aG92ZXIgLnZpc3VhbC10b2MtY29sYWIgPiBpbWcge1xuICBmaWx0ZXI6IHVuc2V0O1xufVxuXG4vKiAudmlzdWFsLXRvYy10b3A6aG92ZXIsICAqL1xuLnZpc3VhbC10b2MtY29sYWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk3JSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xuICBjb2xvcjogIzg4ODtcbn1cblxuYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYSA6Z2xvYmFsKGNhbnZhcykge1xuICB3aWR0aDogMTAwJTtcbn1cbjwvc3R5bGU+XG5cblxuPHNjcmlwdD5cbmltcG9ydCB7IHJhbmdlIH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCJsdWNpZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VjdGlvbnM6IFtcbiAgICAgICAgeyB0aXRsZTogXCJFeGFtcGxlIFNlY3Rpb24gd2l0aCBpbWFnZVwiLCBjb2xhYl91cmw6IFwiXCIsIGFuY2hvcjogXCIjZXhwZXJpbWVudC1hbGlnbmVkXCIsIHNwcml0ZV9pbmRleDogMCAgfSxcbiAgICAgICAgeyB0aXRsZTogXCJFeGFtcGxlIFNlY3Rpb24gd2l0aCBpbWFnZS1WR0dcIiwgY29sYWJfdXJsOiBcIlwiLCBhbmNob3I6IFwiI2V4cGVyaW1lbnQtc3R5bGV0cmFuc2ZlclwiLCBzcHJpdGVfaW5kZXg6IDEgfSxcbiAgICAgICAgeyB0aXRsZTogXCJFeGFtcGxlIFNlY3Rpb24gd2l0aCBpbWFnZVwiLCBjb2xhYl91cmw6IFwiXCIsIGFuY2hvcjogXCIjZXhwZXJpbWVudC14eTJyZ2JcIiwgc3ByaXRlX2luZGV4OiAzIH0sXG4gICAgICAgIHsgdGl0bGU6IFwiRXhhbXBsZSBTZWN0aW9uIHdpdGggaW1hZ2VcIiwgY29sYWJfdXJsOiBcIlwiLCBhbmNob3I6IFwiI2V4cGVyaW1lbnQtZmVhdHVyZXZpei1yZ2JhXCIsIHNwcml0ZV9pbmRleDogMiB9LFxuICAgICAgICB7IHRpdGxlOiBcIkV4YW1wbGUgU2VjdGlvbiB3aXRoIGltYWdlXCIsIGNvbGFiX3VybDogXCJcIiwgYW5jaG9yOiBcIiNleHBlcmltZW50LWZlYXR1cmV2aXotM2RcIiwgc3ByaXRlX2luZGV4OiA0IH0sXG4gICAgICAgIHsgdGl0bGU6IFwiRXhhbXBsZSBTZWN0aW9uIHdpdGggaW1hZ2VcIiwgY29sYWJfdXJsOiBcIlwiLCBhbmNob3I6IFwiI2V4cGVyaW1lbnQtc3R5bGV0cmFuc2Zlci0zZFwiLCBzcHJpdGVfaW5kZXg6IDUgfSxcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHsgU3ByaXRlIH0sXG4gIGhlbHBlcnM6IHsgcmFuZ2UgfSxcbn1cbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlhZ3JhbXMvVmlzdWFsVE9DLmh0bWwiLCJleHBvcnQgZnVuY3Rpb24gcmFuZ2Uobil7XG4gIHJldHVybiBBcnJheShuKS5maWxsKCkubWFwKChfLCBpKSA9PiBpKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC5qcyIsImZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0KSB7XG5cdHZhciBrLFxuXHRcdHNvdXJjZSxcblx0XHRpID0gMSxcblx0XHRsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuXHRmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0c291cmNlID0gYXJndW1lbnRzW2ldO1xuXHRcdGZvciAoayBpbiBzb3VyY2UpIHRhcmdldFtrXSA9IHNvdXJjZVtrXTtcblx0fVxuXG5cdHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGluc2VydE5vZGUobm9kZSwgdGFyZ2V0LCBhbmNob3IpIHtcblx0dGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IpO1xufVxuXG5mdW5jdGlvbiBkZXRhY2hOb2RlKG5vZGUpIHtcblx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KG5hbWUpIHtcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGJsYW5rT2JqZWN0KCkge1xuXHRyZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveShkZXRhY2gpIHtcblx0dGhpcy5kZXN0cm95ID0gbm9vcDtcblx0dGhpcy5maXJlKCdkZXN0cm95Jyk7XG5cdHRoaXMuc2V0ID0gdGhpcy5nZXQgPSBub29wO1xuXG5cdGlmIChkZXRhY2ggIT09IGZhbHNlKSB0aGlzLl9mcmFnbWVudC51KCk7XG5cdHRoaXMuX2ZyYWdtZW50LmQoKTtcblx0dGhpcy5fZnJhZ21lbnQgPSB0aGlzLl9zdGF0ZSA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIF9kaWZmZXJzKGEsIGIpIHtcblx0cmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGIgfHwgKChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JykgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicpO1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaE9ic2VydmVycyhjb21wb25lbnQsIGdyb3VwLCBjaGFuZ2VkLCBuZXdTdGF0ZSwgb2xkU3RhdGUpIHtcblx0Zm9yICh2YXIga2V5IGluIGdyb3VwKSB7XG5cdFx0aWYgKCFjaGFuZ2VkW2tleV0pIGNvbnRpbnVlO1xuXG5cdFx0dmFyIG5ld1ZhbHVlID0gbmV3U3RhdGVba2V5XTtcblx0XHR2YXIgb2xkVmFsdWUgPSBvbGRTdGF0ZVtrZXldO1xuXG5cdFx0dmFyIGNhbGxiYWNrcyA9IGdyb3VwW2tleV07XG5cdFx0aWYgKCFjYWxsYmFja3MpIGNvbnRpbnVlO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc1tpXTtcblx0XHRcdGlmIChjYWxsYmFjay5fX2NhbGxpbmcpIGNvbnRpbnVlO1xuXG5cdFx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSB0cnVlO1xuXHRcdFx0Y2FsbGJhY2suY2FsbChjb21wb25lbnQsIG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG5cdFx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZmlyZShldmVudE5hbWUsIGRhdGEpIHtcblx0dmFyIGhhbmRsZXJzID1cblx0XHRldmVudE5hbWUgaW4gdGhpcy5faGFuZGxlcnMgJiYgdGhpcy5faGFuZGxlcnNbZXZlbnROYW1lXS5zbGljZSgpO1xuXHRpZiAoIWhhbmRsZXJzKSByZXR1cm47XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdGhhbmRsZXJzW2ldLmNhbGwodGhpcywgZGF0YSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0KGtleSkge1xuXHRyZXR1cm4ga2V5ID8gdGhpcy5fc3RhdGVba2V5XSA6IHRoaXMuX3N0YXRlO1xufVxuXG5mdW5jdGlvbiBpbml0KGNvbXBvbmVudCwgb3B0aW9ucykge1xuXHRjb21wb25lbnQuX29ic2VydmVycyA9IHsgcHJlOiBibGFua09iamVjdCgpLCBwb3N0OiBibGFua09iamVjdCgpIH07XG5cdGNvbXBvbmVudC5faGFuZGxlcnMgPSBibGFua09iamVjdCgpO1xuXHRjb21wb25lbnQuX2JpbmQgPSBvcHRpb25zLl9iaW5kO1xuXG5cdGNvbXBvbmVudC5vcHRpb25zID0gb3B0aW9ucztcblx0Y29tcG9uZW50LnJvb3QgPSBvcHRpb25zLnJvb3QgfHwgY29tcG9uZW50O1xuXHRjb21wb25lbnQuc3RvcmUgPSBjb21wb25lbnQucm9vdC5zdG9yZSB8fCBvcHRpb25zLnN0b3JlO1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlKGtleSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcblx0dmFyIGdyb3VwID0gb3B0aW9ucyAmJiBvcHRpb25zLmRlZmVyXG5cdFx0PyB0aGlzLl9vYnNlcnZlcnMucG9zdFxuXHRcdDogdGhpcy5fb2JzZXJ2ZXJzLnByZTtcblxuXHQoZ3JvdXBba2V5XSB8fCAoZ3JvdXBba2V5XSA9IFtdKSkucHVzaChjYWxsYmFjayk7XG5cblx0aWYgKCFvcHRpb25zIHx8IG9wdGlvbnMuaW5pdCAhPT0gZmFsc2UpIHtcblx0XHRjYWxsYmFjay5fX2NhbGxpbmcgPSB0cnVlO1xuXHRcdGNhbGxiYWNrLmNhbGwodGhpcywgdGhpcy5fc3RhdGVba2V5XSk7XG5cdFx0Y2FsbGJhY2suX19jYWxsaW5nID0gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBncm91cFtrZXldLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdFx0aWYgKH5pbmRleCkgZ3JvdXBba2V5XS5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gb24oZXZlbnROYW1lLCBoYW5kbGVyKSB7XG5cdGlmIChldmVudE5hbWUgPT09ICd0ZWFyZG93bicpIHJldHVybiB0aGlzLm9uKCdkZXN0cm95JywgaGFuZGxlcik7XG5cblx0dmFyIGhhbmRsZXJzID0gdGhpcy5faGFuZGxlcnNbZXZlbnROYW1lXSB8fCAodGhpcy5faGFuZGxlcnNbZXZlbnROYW1lXSA9IFtdKTtcblx0aGFuZGxlcnMucHVzaChoYW5kbGVyKTtcblxuXHRyZXR1cm4ge1xuXHRcdGNhbmNlbDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaW5kZXggPSBoYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpO1xuXHRcdFx0aWYgKH5pbmRleCkgaGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIHNldChuZXdTdGF0ZSkge1xuXHR0aGlzLl9zZXQoYXNzaWduKHt9LCBuZXdTdGF0ZSkpO1xuXHRpZiAodGhpcy5yb290Ll9sb2NrKSByZXR1cm47XG5cdHRoaXMucm9vdC5fbG9jayA9IHRydWU7XG5cdGNhbGxBbGwodGhpcy5yb290Ll9iZWZvcmVjcmVhdGUpO1xuXHRjYWxsQWxsKHRoaXMucm9vdC5fb25jcmVhdGUpO1xuXHRjYWxsQWxsKHRoaXMucm9vdC5fYWZ0ZXJjcmVhdGUpO1xuXHR0aGlzLnJvb3QuX2xvY2sgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gX3NldChuZXdTdGF0ZSkge1xuXHR2YXIgb2xkU3RhdGUgPSB0aGlzLl9zdGF0ZSxcblx0XHRjaGFuZ2VkID0ge30sXG5cdFx0ZGlydHkgPSBmYWxzZTtcblxuXHRmb3IgKHZhciBrZXkgaW4gbmV3U3RhdGUpIHtcblx0XHRpZiAodGhpcy5fZGlmZmVycyhuZXdTdGF0ZVtrZXldLCBvbGRTdGF0ZVtrZXldKSkgY2hhbmdlZFtrZXldID0gZGlydHkgPSB0cnVlO1xuXHR9XG5cdGlmICghZGlydHkpIHJldHVybjtcblxuXHR0aGlzLl9zdGF0ZSA9IGFzc2lnbih7fSwgb2xkU3RhdGUsIG5ld1N0YXRlKTtcblx0dGhpcy5fcmVjb21wdXRlKGNoYW5nZWQsIHRoaXMuX3N0YXRlKTtcblx0aWYgKHRoaXMuX2JpbmQpIHRoaXMuX2JpbmQoY2hhbmdlZCwgdGhpcy5fc3RhdGUpO1xuXG5cdGlmICh0aGlzLl9mcmFnbWVudCkge1xuXHRcdGRpc3BhdGNoT2JzZXJ2ZXJzKHRoaXMsIHRoaXMuX29ic2VydmVycy5wcmUsIGNoYW5nZWQsIHRoaXMuX3N0YXRlLCBvbGRTdGF0ZSk7XG5cdFx0dGhpcy5fZnJhZ21lbnQucChjaGFuZ2VkLCB0aGlzLl9zdGF0ZSk7XG5cdFx0ZGlzcGF0Y2hPYnNlcnZlcnModGhpcywgdGhpcy5fb2JzZXJ2ZXJzLnBvc3QsIGNoYW5nZWQsIHRoaXMuX3N0YXRlLCBvbGRTdGF0ZSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2FsbEFsbChmbnMpIHtcblx0d2hpbGUgKGZucyAmJiBmbnMubGVuZ3RoKSBmbnMuc2hpZnQoKSgpO1xufVxuXG5mdW5jdGlvbiBfbW91bnQodGFyZ2V0LCBhbmNob3IpIHtcblx0dGhpcy5fZnJhZ21lbnRbdGhpcy5fZnJhZ21lbnQuaSA/ICdpJyA6ICdtJ10odGFyZ2V0LCBhbmNob3IgfHwgbnVsbCk7XG59XG5cbmZ1bmN0aW9uIF91bm1vdW50KCkge1xuXHRpZiAodGhpcy5fZnJhZ21lbnQpIHRoaXMuX2ZyYWdtZW50LnUoKTtcbn1cblxudmFyIHByb3RvID0ge1xuXHRkZXN0cm95OiBkZXN0cm95LFxuXHRnZXQ6IGdldCxcblx0ZmlyZTogZmlyZSxcblx0b2JzZXJ2ZTogb2JzZXJ2ZSxcblx0b246IG9uLFxuXHRzZXQ6IHNldCxcblx0dGVhcmRvd246IGRlc3Ryb3ksXG5cdF9yZWNvbXB1dGU6IG5vb3AsXG5cdF9zZXQ6IF9zZXQsXG5cdF9tb3VudDogX21vdW50LFxuXHRfdW5tb3VudDogX3VubW91bnQsXG5cdF9kaWZmZXJzOiBfZGlmZmVyc1xufTtcblxuLyogc3JjL1Nwcml0ZS5odG1sIGdlbmVyYXRlZCBieSBTdmVsdGUgdjEuNTcuMSAqL1xuXG4vLyBXZSBuZWVkIHRvIGNyZWF0ZSBhIGdsb2JhbCBjYWNoZSBvZiBsb2FkZWQgaW1hZ2VzIGluZGVwZW5kZW50IG9mIGFueSBzcHJpdGUgaW5zdGFuY2UuXG5jb25zdCBjYWNoZSA9IG5ldyBNYXAoKTtcblxuZnVuY3Rpb24gcmVhbEhlaWdodCh3aWR0aCwgaGVpZ2h0KSB7XG4gIHJldHVybiBoZWlnaHQgPyBoZWlnaHQgOiB3aWR0aDtcbn1cblxuZnVuY3Rpb24gZGF0YSgpIHtcbiAgcmV0dXJuIHtcbiAgICB1cmw6ICcnLFxuICAgIGluZGV4OiAwLFxuICAgIHdpZHRoOiAxMDAsXG4gICAgbG9hZGVkOiBudWxsLFxuICAgIGNvbHVtbnM6IEluZmluaXR5LFxuICAgIGhlaWdodDogbnVsbCxcbiAgICBpbWc6IG51bGxcbiAgfVxufVxudmFyIG1ldGhvZHMgPSB7XG4gIGRyYXcoKSB7XG4gICAgaWYgKHRoaXMucmVmcy5jYW52YXMpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLnJlZnMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBjb25zdCB7IGltZywgaW5kZXgsIHdpZHRoLCByZWFsSGVpZ2h0LCBjb2x1bW5zLCBsb2FkZWQgfSA9IHRoaXMuZ2V0KCk7XG4gICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICBjb25zdCBzeCA9IEFycmF5LmlzQXJyYXkoaW5kZXgpID8gaW5kZXhbMF0gKiB3aWR0aCA6IChpbmRleCAlIGNvbHVtbnMpICogd2lkdGg7XG4gICAgICBjb25zdCBzeSA9IEFycmF5LmlzQXJyYXkoaW5kZXgpID8gaW5kZXhbMV0gKiByZWFsSGVpZ2h0IDogTWF0aC5mbG9vcihpbmRleCAvIGNvbHVtbnMpICogcmVhbEhlaWdodDtcbiAgICAgIGlmIChsb2FkZWQpIHtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBzeCwgc3ksIHdpZHRoLCByZWFsSGVpZ2h0LCAwLCAwLCB3aWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjY2NjJztcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgcmVhbEhlaWdodCk7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCIjZWVlXCI7XG4gICAgICAgIGNvbnRleHQudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgIGNvbnRleHQuZm9udCA9ICcxNnB4IHNhbnMtc2VyaWYnO1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KCcuLi4nLCB3aWR0aCAvIDIsIHJlYWxIZWlnaHQgLyAyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIG9uY3JlYXRlKCkge1xuICBjb25zdCBkb25lID0gKGUpID0+IHtcbiAgICB0aGlzLnNldCh7bG9hZGVkOiB0cnVlfSk7XG4gICAgY29uc3Qge2ltZ30gPSB0aGlzLmdldCgpO1xuICAgIGltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkZWQnLCBkb25lKTtcbiAgfTtcbiAgLy8gVE9ETyB0aGlzIHJlZHJhd3Mgb25lIHRvbyBtYW55IHRpbWVzIG9uIHdoZW4geW91IGNoYW5nZSB0aGUgaW5kZXggYW5kIHVybCBhdCB0aGUgc2FtZSB0aW1lLiBcbiAgLy8gY291bGQgYWRkIHRoZSBzdmVsdGUgZXh0cmFzIGRlcGVuZGVuY3kgZm9yICdvYnNlcnZlTWFueScsIGJ1dCBub3Qgc3VyZSBpdCdzIHdvcnRoIGl0LlxuICB0aGlzLm9ic2VydmUoJ2luZGV4JywgaW5kZXggPT4ge1xuICAgIHRoaXMuZHJhdygpO1xuICB9LCB7IGluaXQ6IGZhbHNlIH0pO1xuICB0aGlzLm9ic2VydmUoJ2ltZycsIGluZGV4ID0+IHtcbiAgICB0aGlzLmRyYXcoKTtcbiAgfSwgeyBpbml0OiBmYWxzZSB9KTtcbiAgdGhpcy5vYnNlcnZlKCdsb2FkZWQnLCBsb2FkZWQgPT4ge1xuICAgIHRoaXMuZHJhdygpO1xuICB9LCB7IGluaXQ6IGZhbHNlIH0pO1xuICB0aGlzLm9ic2VydmUoJ3VybCcsIHVybCA9PiB7XG4gICAgLy8gQ2xlYXIgYW55IHBlbmRpbmcgZXZlbnRzIGZvciBvbGQgdXJscy5cbiAgICBjb25zdCBjdXJyZW50SW1nID0gdGhpcy5nZXQoJ2ltZycpO1xuICAgIGlmIChjdXJyZW50SW1nKSB7Y3VycmVudEltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgZG9uZSk7IH1cbiAgICAvLyBDaGVjayBpZiB3ZSd2ZSBhbHJlYWR5IHNlZW4gdGhpcyB1cmwgaW4gdGhlIGdsb2JhbCBjYWNoZVxuICAgIGlmIChjYWNoZS5oYXModXJsKSkge1xuICAgICAgY29uc3QgY2FjaGVkID0gY2FjaGUuZ2V0KHVybCk7XG4gICAgICAvLyBJZiB3ZSd2ZSBzZWVuIGl0LCB3ZSBuZWVkIHRvIGNoZWNrIGlmIHdlJ3JlIGN1cnJlbnRseSBsb2FkaW5nIGl0LlxuICAgICAgaWYgKGNhY2hlZC5sb2FkZWQpIHtcbiAgICAgICAgLy8gSWYgaXQncyBsb2FkZWQsIGp1c3Qgc3RhcnQgdXNpbmcgaXQhXG4gICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgICAgaW1nOiBjYWNoZWQuaW1nXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgaXQncyBub3QgbG9hZGVkLCB3ZSBuZWVkIHRvIHdhaXQgdW50aWwgdGhlIG90aGVyIHJlcXVlc3QgaXMgZG9uZSBiZWZvcmUgd2Ugc3RhcnQgZHJhd2luZy5cbiAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgaW1nOiBjYWNoZWQuaW1nXG4gICAgICAgIH0pO1xuICAgICAgICBjYWNoZWQuaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBkb25lKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgd2UgaGF2ZW4ndCBzZWVuIHRoZSB1cmwgeWV0LCB3ZSBuZWVkIHRvIGxvYWQgdGhlIGltYWdlLlxuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICB0aGlzLnNldCh7IFxuICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICBpbWc6IGltZ1xuICAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IHtpbWd9O1xuICAgICAgLy8gV2UgbmVlZCB0aGlzIGV2ZW50IHRvIHBlcnNpc3QsIHNvIHRoYXQgd2Ugc3RpbGwga25vdyB3aGVuIGFuIGFiYW5kb25lZCBpbWFnZSBpcyBkb25lIGxvYWRpbmcuXG4gICAgICBjb25zdCBmaW5pc2hlZCA9IChlKSA9PiB7XG4gICAgICAgIGRhdGEubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmaW5pc2hlZCk7XG4gICAgICB9O1xuICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmaW5pc2hlZCk7XG4gICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGRvbmUpO1xuICAgICAgY2FjaGUuc2V0KHVybCwgZGF0YSk7XG4gICAgICBpbWcuc3JjID0gdXJsO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVfbWFpbl9mcmFnbWVudChjb21wb25lbnQsIHN0YXRlKSB7XG5cdHZhciBjYW52YXM7XG5cblx0cmV0dXJuIHtcblx0XHRjOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG5cdFx0XHRjYW52YXMgPSBjcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXHRcdFx0dGhpcy5oKCk7XG5cdFx0fSxcblxuXHRcdGg6IGZ1bmN0aW9uIGh5ZHJhdGUoKSB7XG5cdFx0XHRjYW52YXMud2lkdGggPSBzdGF0ZS53aWR0aDtcblx0XHRcdGNhbnZhcy5oZWlnaHQgPSBzdGF0ZS5yZWFsSGVpZ2h0O1xuXHRcdH0sXG5cblx0XHRtOiBmdW5jdGlvbiBtb3VudCh0YXJnZXQsIGFuY2hvcikge1xuXHRcdFx0aW5zZXJ0Tm9kZShjYW52YXMsIHRhcmdldCwgYW5jaG9yKTtcblx0XHRcdGNvbXBvbmVudC5yZWZzLmNhbnZhcyA9IGNhbnZhcztcblx0XHR9LFxuXG5cdFx0cDogZnVuY3Rpb24gdXBkYXRlKGNoYW5nZWQsIHN0YXRlKSB7XG5cdFx0XHRpZiAoY2hhbmdlZC53aWR0aCkge1xuXHRcdFx0XHRjYW52YXMud2lkdGggPSBzdGF0ZS53aWR0aDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNoYW5nZWQucmVhbEhlaWdodCkge1xuXHRcdFx0XHRjYW52YXMuaGVpZ2h0ID0gc3RhdGUucmVhbEhlaWdodDtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0dTogZnVuY3Rpb24gdW5tb3VudCgpIHtcblx0XHRcdGRldGFjaE5vZGUoY2FudmFzKTtcblx0XHR9LFxuXG5cdFx0ZDogZnVuY3Rpb24gZGVzdHJveSQkMSgpIHtcblx0XHRcdGlmIChjb21wb25lbnQucmVmcy5jYW52YXMgPT09IGNhbnZhcykgY29tcG9uZW50LnJlZnMuY2FudmFzID0gbnVsbDtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIFNwcml0ZShvcHRpb25zKSB7XG5cdGluaXQodGhpcywgb3B0aW9ucyk7XG5cdHRoaXMucmVmcyA9IHt9O1xuXHR0aGlzLl9zdGF0ZSA9IGFzc2lnbihkYXRhKCksIG9wdGlvbnMuZGF0YSk7XG5cdHRoaXMuX3JlY29tcHV0ZSh7IHdpZHRoOiAxLCBoZWlnaHQ6IDEgfSwgdGhpcy5fc3RhdGUpO1xuXG5cdHZhciBfb25jcmVhdGUgPSBvbmNyZWF0ZS5iaW5kKHRoaXMpO1xuXG5cdGlmICghb3B0aW9ucy5yb290KSB7XG5cdFx0dGhpcy5fb25jcmVhdGUgPSBbXTtcblx0fVxuXG5cdHRoaXMuX2ZyYWdtZW50ID0gY3JlYXRlX21haW5fZnJhZ21lbnQodGhpcywgdGhpcy5fc3RhdGUpO1xuXG5cdHRoaXMucm9vdC5fb25jcmVhdGUucHVzaChfb25jcmVhdGUpO1xuXG5cdGlmIChvcHRpb25zLnRhcmdldCkge1xuXHRcdHRoaXMuX2ZyYWdtZW50LmMoKTtcblx0XHR0aGlzLl9tb3VudChvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5hbmNob3IpO1xuXG5cdFx0Y2FsbEFsbCh0aGlzLl9vbmNyZWF0ZSk7XG5cdH1cbn1cblxuYXNzaWduKFNwcml0ZS5wcm90b3R5cGUsIG1ldGhvZHMsIHByb3RvKTtcblxuU3ByaXRlLnByb3RvdHlwZS5fcmVjb21wdXRlID0gZnVuY3Rpb24gX3JlY29tcHV0ZShjaGFuZ2VkLCBzdGF0ZSkge1xuXHRpZiAoY2hhbmdlZC53aWR0aCB8fCBjaGFuZ2VkLmhlaWdodCkge1xuXHRcdGlmICh0aGlzLl9kaWZmZXJzKHN0YXRlLnJlYWxIZWlnaHQsIChzdGF0ZS5yZWFsSGVpZ2h0ID0gcmVhbEhlaWdodChzdGF0ZS53aWR0aCwgc3RhdGUuaGVpZ2h0KSkpKSBjaGFuZ2VkLnJlYWxIZWlnaHQgPSB0cnVlO1xuXHR9XG59O1xuXG52YXIgRU9MID0ge30sXG4gICAgRU9GID0ge30sXG4gICAgUVVPVEUgPSAzNCxcbiAgICBORVdMSU5FID0gMTAsXG4gICAgUkVUVVJOID0gMTM7XG5cbmZ1bmN0aW9uIG9iamVjdENvbnZlcnRlcihjb2x1bW5zKSB7XG4gIHJldHVybiBuZXcgRnVuY3Rpb24oXCJkXCIsIFwicmV0dXJuIHtcIiArIGNvbHVtbnMubWFwKGZ1bmN0aW9uKG5hbWUsIGkpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobmFtZSkgKyBcIjogZFtcIiArIGkgKyBcIl1cIjtcbiAgfSkuam9pbihcIixcIikgKyBcIn1cIik7XG59XG5cbmZ1bmN0aW9uIGN1c3RvbUNvbnZlcnRlcihjb2x1bW5zLCBmKSB7XG4gIHZhciBvYmplY3QgPSBvYmplY3RDb252ZXJ0ZXIoY29sdW1ucyk7XG4gIHJldHVybiBmdW5jdGlvbihyb3csIGkpIHtcbiAgICByZXR1cm4gZihvYmplY3Qocm93KSwgaSwgY29sdW1ucyk7XG4gIH07XG59XG5cbi8vIENvbXB1dGUgdW5pcXVlIGNvbHVtbnMgaW4gb3JkZXIgb2YgZGlzY292ZXJ5LlxuZnVuY3Rpb24gaW5mZXJDb2x1bW5zKHJvd3MpIHtcbiAgdmFyIGNvbHVtblNldCA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICBjb2x1bW5zID0gW107XG5cbiAgcm93cy5mb3JFYWNoKGZ1bmN0aW9uKHJvdykge1xuICAgIGZvciAodmFyIGNvbHVtbiBpbiByb3cpIHtcbiAgICAgIGlmICghKGNvbHVtbiBpbiBjb2x1bW5TZXQpKSB7XG4gICAgICAgIGNvbHVtbnMucHVzaChjb2x1bW5TZXRbY29sdW1uXSA9IGNvbHVtbik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29sdW1ucztcbn1cblxuZnVuY3Rpb24gZHN2KGRlbGltaXRlcikge1xuICB2YXIgcmVGb3JtYXQgPSBuZXcgUmVnRXhwKFwiW1xcXCJcIiArIGRlbGltaXRlciArIFwiXFxuXFxyXVwiKSxcbiAgICAgIERFTElNSVRFUiA9IGRlbGltaXRlci5jaGFyQ29kZUF0KDApO1xuXG4gIGZ1bmN0aW9uIHBhcnNlKHRleHQsIGYpIHtcbiAgICB2YXIgY29udmVydCwgY29sdW1ucywgcm93cyA9IHBhcnNlUm93cyh0ZXh0LCBmdW5jdGlvbihyb3csIGkpIHtcbiAgICAgIGlmIChjb252ZXJ0KSByZXR1cm4gY29udmVydChyb3csIGkgLSAxKTtcbiAgICAgIGNvbHVtbnMgPSByb3csIGNvbnZlcnQgPSBmID8gY3VzdG9tQ29udmVydGVyKHJvdywgZikgOiBvYmplY3RDb252ZXJ0ZXIocm93KTtcbiAgICB9KTtcbiAgICByb3dzLmNvbHVtbnMgPSBjb2x1bW5zIHx8IFtdO1xuICAgIHJldHVybiByb3dzO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VSb3dzKHRleHQsIGYpIHtcbiAgICB2YXIgcm93cyA9IFtdLCAvLyBvdXRwdXQgcm93c1xuICAgICAgICBOID0gdGV4dC5sZW5ndGgsXG4gICAgICAgIEkgPSAwLCAvLyBjdXJyZW50IGNoYXJhY3RlciBpbmRleFxuICAgICAgICBuID0gMCwgLy8gY3VycmVudCBsaW5lIG51bWJlclxuICAgICAgICB0LCAvLyBjdXJyZW50IHRva2VuXG4gICAgICAgIGVvZiA9IE4gPD0gMCwgLy8gY3VycmVudCB0b2tlbiBmb2xsb3dlZCBieSBFT0Y/XG4gICAgICAgIGVvbCA9IGZhbHNlOyAvLyBjdXJyZW50IHRva2VuIGZvbGxvd2VkIGJ5IEVPTD9cblxuICAgIC8vIFN0cmlwIHRoZSB0cmFpbGluZyBuZXdsaW5lLlxuICAgIGlmICh0ZXh0LmNoYXJDb2RlQXQoTiAtIDEpID09PSBORVdMSU5FKSAtLU47XG4gICAgaWYgKHRleHQuY2hhckNvZGVBdChOIC0gMSkgPT09IFJFVFVSTikgLS1OO1xuXG4gICAgZnVuY3Rpb24gdG9rZW4oKSB7XG4gICAgICBpZiAoZW9mKSByZXR1cm4gRU9GO1xuICAgICAgaWYgKGVvbCkgcmV0dXJuIGVvbCA9IGZhbHNlLCBFT0w7XG5cbiAgICAgIC8vIFVuZXNjYXBlIHF1b3Rlcy5cbiAgICAgIHZhciBpLCBqID0gSSwgYztcbiAgICAgIGlmICh0ZXh0LmNoYXJDb2RlQXQoaikgPT09IFFVT1RFKSB7XG4gICAgICAgIHdoaWxlIChJKysgPCBOICYmIHRleHQuY2hhckNvZGVBdChJKSAhPT0gUVVPVEUgfHwgdGV4dC5jaGFyQ29kZUF0KCsrSSkgPT09IFFVT1RFKTtcbiAgICAgICAgaWYgKChpID0gSSkgPj0gTikgZW9mID0gdHJ1ZTtcbiAgICAgICAgZWxzZSBpZiAoKGMgPSB0ZXh0LmNoYXJDb2RlQXQoSSsrKSkgPT09IE5FV0xJTkUpIGVvbCA9IHRydWU7XG4gICAgICAgIGVsc2UgaWYgKGMgPT09IFJFVFVSTikgeyBlb2wgPSB0cnVlOyBpZiAodGV4dC5jaGFyQ29kZUF0KEkpID09PSBORVdMSU5FKSArK0k7IH1cbiAgICAgICAgcmV0dXJuIHRleHQuc2xpY2UoaiArIDEsIGkgLSAxKS5yZXBsYWNlKC9cIlwiL2csIFwiXFxcIlwiKTtcbiAgICAgIH1cblxuICAgICAgLy8gRmluZCBuZXh0IGRlbGltaXRlciBvciBuZXdsaW5lLlxuICAgICAgd2hpbGUgKEkgPCBOKSB7XG4gICAgICAgIGlmICgoYyA9IHRleHQuY2hhckNvZGVBdChpID0gSSsrKSkgPT09IE5FV0xJTkUpIGVvbCA9IHRydWU7XG4gICAgICAgIGVsc2UgaWYgKGMgPT09IFJFVFVSTikgeyBlb2wgPSB0cnVlOyBpZiAodGV4dC5jaGFyQ29kZUF0KEkpID09PSBORVdMSU5FKSArK0k7IH1cbiAgICAgICAgZWxzZSBpZiAoYyAhPT0gREVMSU1JVEVSKSBjb250aW51ZTtcbiAgICAgICAgcmV0dXJuIHRleHQuc2xpY2UoaiwgaSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJldHVybiBsYXN0IHRva2VuIGJlZm9yZSBFT0YuXG4gICAgICByZXR1cm4gZW9mID0gdHJ1ZSwgdGV4dC5zbGljZShqLCBOKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoKHQgPSB0b2tlbigpKSAhPT0gRU9GKSB7XG4gICAgICB2YXIgcm93ID0gW107XG4gICAgICB3aGlsZSAodCAhPT0gRU9MICYmIHQgIT09IEVPRikgcm93LnB1c2godCksIHQgPSB0b2tlbigpO1xuICAgICAgaWYgKGYgJiYgKHJvdyA9IGYocm93LCBuKyspKSA9PSBudWxsKSBjb250aW51ZTtcbiAgICAgIHJvd3MucHVzaChyb3cpO1xuICAgIH1cblxuICAgIHJldHVybiByb3dzO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0KHJvd3MsIGNvbHVtbnMpIHtcbiAgICBpZiAoY29sdW1ucyA9PSBudWxsKSBjb2x1bW5zID0gaW5mZXJDb2x1bW5zKHJvd3MpO1xuICAgIHJldHVybiBbY29sdW1ucy5tYXAoZm9ybWF0VmFsdWUpLmpvaW4oZGVsaW1pdGVyKV0uY29uY2F0KHJvd3MubWFwKGZ1bmN0aW9uKHJvdykge1xuICAgICAgcmV0dXJuIGNvbHVtbnMubWFwKGZ1bmN0aW9uKGNvbHVtbikge1xuICAgICAgICByZXR1cm4gZm9ybWF0VmFsdWUocm93W2NvbHVtbl0pO1xuICAgICAgfSkuam9pbihkZWxpbWl0ZXIpO1xuICAgIH0pKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0Um93cyhyb3dzKSB7XG4gICAgcmV0dXJuIHJvd3MubWFwKGZvcm1hdFJvdykuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFJvdyhyb3cpIHtcbiAgICByZXR1cm4gcm93Lm1hcChmb3JtYXRWYWx1ZSkuam9pbihkZWxpbWl0ZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0VmFsdWUodGV4dCkge1xuICAgIHJldHVybiB0ZXh0ID09IG51bGwgPyBcIlwiXG4gICAgICAgIDogcmVGb3JtYXQudGVzdCh0ZXh0ICs9IFwiXCIpID8gXCJcXFwiXCIgKyB0ZXh0LnJlcGxhY2UoL1wiL2csIFwiXFxcIlxcXCJcIikgKyBcIlxcXCJcIlxuICAgICAgICA6IHRleHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhcnNlOiBwYXJzZSxcbiAgICBwYXJzZVJvd3M6IHBhcnNlUm93cyxcbiAgICBmb3JtYXQ6IGZvcm1hdCxcbiAgICBmb3JtYXRSb3dzOiBmb3JtYXRSb3dzXG4gIH07XG59XG5cbnZhciBjc3YgPSBkc3YoXCIsXCIpO1xuXG52YXIgY3N2UGFyc2UgPSBjc3YucGFyc2U7XG5cbnZhciB0c3YgPSBkc3YoXCJcXHRcIik7XG5cbnZhciB0c3ZQYXJzZSA9IHRzdi5wYXJzZTtcblxuLy8gQ29weXJpZ2h0IDIwMTggVGhlIEx1Y2lkIEF1dGhvcnMuQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuXG4vLyAvLyBCYXNpYyB1c2FnZSBleGFtcGxlczogXG4vLyBpbXBvcnQge2xvYWR9IGZyb20gJ2x1Y2lkLWNvbXBvbmVudHMnO1xuLy8gXG4vLyBsb2FkKFwidGVzdC5jc3ZcIikudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhcIjFcIiwgcmVzcG9uc2UpKTtcbi8vIGxvYWQoW1widGVzdC5jc3ZcIiwgXCJ0ZXN0LnRzdlwiXSkudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhcIjJcIiwgcmVzcG9uc2VbMF0sIHJlc3BvbnNlWzFdKSk7XG4vLyBsb2FkKCczYS5qcGcnKS50aGVuKHJlc3BvbnNlID0+IHt0aGlzLnJlZnMuaW1nLnNyYyA9IHJlc3BvbnNlLnNyYzt9KVxuLy8gXG4vLyAvLyBZb3UgY2FuIGFsc28gbmFtZXNwYWNlIHJlcXVlc3RzLCB3aGljaCB3aWxsIGNhbmNlbCBwcmV2aW91cyByZXF1ZXN0c1xuLy8gbG9hZChcInRlc3QuY3N2XCIsIFwibmFtZXNwYWNlXCIpLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2coXCJUaGlzIHdpbGwgbmV2ZXIgYmUgY2FsbGVkLlwiKSlcbi8vIGxvYWQoXCJ0ZXN0LnRzdlwiLCBcIm5hbWVzcGFjZVwiKS50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKFwiVGhpcyB3aWxsIGludGVycnVwdCB0aGUgcHJldmlvdXMgb25lIGFuZCBiZSByZXNvbHZlZCBpbnN0ZWFkLlwiKSlcblxuXG5cbi8vIFdlIHdpbGwgY2FjaGUgcmVxdWVzdHMgYW5kIHBhcnNpbmcuXG5jb25zdCBjYWNoZSQxID0gbmV3IE1hcCgpO1xuY29uc3Qgc3VwcHJlc3MgPSBuZXcgTWFwKCk7XG5jb25zdCBuYW1lc3BhY2VzID0gbmV3IE1hcCgpO1xuXG4vLyBNYXBwaW5nIGZpbGUgZXh0ZW5zaW9ucyB0byBsb2FkZXJzXG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcChbXG4gIFsnZ2lmJywgaW1hZ2VdLFxuICBbJ3BuZycsIGltYWdlXSxcbiAgWydqcGVnJywgaW1hZ2VdLFxuICBbJ2pwZycsIGltYWdlXSxcbiAgWydjc3YnLCBjc3YkMV0sXG4gIFsndHN2JywgdHN2JDFdLFxuICBbJ3R4dCcsIHRleHRdLFxuICBbJ3RleHQnLCB0ZXh0XSxcbiAgWydqc29uJywganNvbl0sXG5dKTtcblxuLy8gTG9hZGVyc1xuZnVuY3Rpb24gaGFuZGxlRXJyb3JzKHJlc3BvbnNlKSB7XG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzICsgJzonICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW1hZ2UodXJsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5vbmxvYWQgPSBldmVudCA9PiByZXNvbHZlKGltZyk7XG4gICAgaW1nLm9uZXJyb3IgPSBldmVudCA9PiByZWplY3QoZXZlbnQpO1xuICAgIGltZy5zcmMgPSB1cmw7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGpzb24odXJsKSB7XG4gIHJldHVybiBmZXRjaCh1cmwpLnRoZW4oaGFuZGxlRXJyb3JzKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbn1cblxuZnVuY3Rpb24gdGV4dCh1cmwpIHtcbiAgcmV0dXJuIGZldGNoKHVybCkudGhlbihoYW5kbGVFcnJvcnMpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKTtcbn1cblxuZnVuY3Rpb24gY3N2JDEodXJsKSB7XG4gIHJldHVybiB0ZXh0KHVybCkudGhlbih0ZXh0ID0+IFByb21pc2UucmVzb2x2ZShjc3ZQYXJzZSh0ZXh0KSkpO1xufVxuXG5mdW5jdGlvbiB0c3YkMSh1cmwpIHtcbiAgcmV0dXJuIHRleHQodXJsKS50aGVuKHRleHQgPT4gUHJvbWlzZS5yZXNvbHZlKHRzdlBhcnNlKHRleHQpKSk7XG59XG5cblxuLy8gTG9hZCBhIHVybCBvciBhbiBhcnJheSBvZiB1cmxzLlxuZnVuY3Rpb24gbG9hZCh1cmwsIG5hbWVzcGFjZSkge1xuXG4gIC8vIFdlIHdpbGwgdG8gY3JlYXRlIGEgbmFtZXNwYWNlIGlmIHdlIGRvbid0IGhhdmUgb25lLlxuICBsZXQgbnMgPSBuYW1lc3BhY2UgIT0gbnVsbCA/IG5hbWVzcGFjZSA6IERhdGUubm93KCkgKyBcIlwiICsgTWF0aC5yYW5kb20oKTtcblxuICAvLyBDcmVhdGUgYSB1bmlxdWUgSUQgZm9yIHRoaXMgcmVxdWVzdFxuICBsZXQgcmVxdWVzdElEID0gXCJuYW1lc3BhY2U6XCIgKyBucyArIFwiLCB1cmw6XCIgKyB1cmwgKyBcIiwgcmFuZG9tOlwiICsgRGF0ZS5ub3coKSArIFwiXCIgKyBNYXRoLnJhbmRvbSgpO1xuICBzdXBwcmVzcy5zZXQocmVxdWVzdElELCBmYWxzZSk7XG5cbiAgLy8gSWYgd2UgaGF2ZSBhIHByZXZpb3VzIHJlcXVlc3QgaW4gdGhpcyBuYW1lc3BhY2UsIG1hcmsgaXQgYXMgc3VwcHJlc3NlZCBzbyBcbiAgLy8gdGhhdCB0aGUgcHJvbWlzZSBpcyBuZXZlciByZXNvbHZlZC4gVGhlbiB3ZSByZXNldCB0aGUgY3VycmVudCBuYW1lc3BhY2UgdG8gXG4gIC8vIHRoZSBjdXJyZW50IHJlcXVlc3QuXG4gIGlmIChuYW1lc3BhY2VzLmhhcyhucykpIHtcbiAgICBjb25zdCBwZW5kaW5nUmVxdWVzdElEID0gbmFtZXNwYWNlcy5nZXQobnMpO1xuICAgIHN1cHByZXNzLnNldChwZW5kaW5nUmVxdWVzdElELCB0cnVlKTtcbiAgfVxuICBuYW1lc3BhY2VzLnNldChucywgcmVxdWVzdElEKTtcbiAgXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IHA7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodXJsKSkge1xuICAgICAgY29uc3QgcHJvbWlzZXMgPSB1cmwubWFwKHUgPT4gX2xvYWRVUkwodSkpO1xuICAgICAgcCA9IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcCA9ICBfbG9hZFVSTCh1cmwpO1xuICAgIH1cbiAgICBwXG4gICAgICAudGhlbih2YWwgPT4ge1xuICAgICAgICAvL2NoZWNrIHRvIHNlZSBpZiB3ZSd2ZSBzdXBwcmVzc2VkIHRoaXMgcmVxdWVzdC5cbiAgICAgICAgaWYgKCFzdXBwcmVzcy5nZXQocmVxdWVzdElEKSkge1xuICAgICAgICAgIHJlc29sdmUodmFsKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIC8vY2hlY2sgdG8gc2VlIGlmIHdlJ3ZlIHN1cHByZXNzZWQgdGhpcyByZXF1ZXN0LlxuICAgICAgICBpZiAoIXN1cHByZXNzLmdldChyZXF1ZXN0SUQpKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgXG4gIH0pO1xufVxuXG4vLyBQcml2YXRlIGxvYWRpbmcgZnVuY3Rpb25cbmZ1bmN0aW9uIF9sb2FkVVJMKHVybCkge1xuICBsZXQgaWQgPSB1cmw7XG4gIGlmIChjYWNoZSQxLmhhcyhpZCkpIHtcbiAgICByZXR1cm4gY2FjaGUkMS5nZXQoaWQpO1xuICB9IGVsc2Uge1xuICAgIGxldCBleHRlbnNpb24gPSBwYXJzZUZpbGVFeHRlbnNpb25Gcm9tVVJMKHVybCwgbG9hZGVycyk7XG4gICAgbGV0IGxvYWRlciA9IGxvYWRlcnMuZ2V0KGV4dGVuc2lvbik7XG4gICAgbGV0IHAgPSBsb2FkZXIodXJsKTtcbiAgICBjYWNoZSQxLnNldChpZCwgcCk7XG4gICAgcmV0dXJuIHA7XG4gIH1cbn1cblxuLy8gSGVscGVyc1xuXG4vLyBSZXR1cm5zIGEgZmlsZXR5cGUgZXh0ZW5zaW9uIGZyb20gYSBnaXZlbiB1cmwgc3RyaW5nXG5mdW5jdGlvbiBwYXJzZUZpbGVFeHRlbnNpb25Gcm9tVVJMKHVybCwgbG9hZGVycykge1xuICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcIi5cIik7XG4gIGNvbnN0IGV4dCA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuICBpZiAoIWxvYWRlcnMuaGFzKGV4dCkpIHtcbiAgICBjb25zb2xlLndhcm4oJ1RyeWluZyB0byBsb2FkIHVybDogJyArIHVybCArICcgd2l0aCBhbiB1bmtub3duIGZpbGV0eXBlLiBBc3N1bWluZyBcInRleHRcIi4nKTtcbiAgfVxuICByZXR1cm4gbG9hZGVycy5oYXMoZXh0KSA/IGV4dCA6ICd0ZXh0Jztcbn1cblxuLy8gQ29weXJpZ2h0IDIwMTggVGhlIEx1Y2lkIEF1dGhvcnMuQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuZXhwb3J0IHsgU3ByaXRlLCBsb2FkIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2x1Y2lkLWNvbXBvbmVudHMvcHVibGljL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjxkaXYgY2xhc3M9XCJjbHVzdGVyc1wiPlxuICAgICMgQ2x1c3RlcnM6IDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBiaW5kOnZhbHVlPW5fY2x1c3RlcnMgbWluPXtuX2NsdXN0ZXJzX21pbn0gbWF4PXtuX2NsdXN0ZXJzX21heH0+XG4gICAgeyNpZiBjbHVzdGVyc31cbiAgICA8c3Bhbj57bl9jbHVzdGVyc308L3NwYW4+XG4gICAgPHRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5FeHBlcmltZW50PC90aD5cbiAgICAgICAgICAgIHsjZWFjaCBjbHVzdGVycy5jbHVzdGVyX3NvcnRfb3JkZXIgYXMgXywgY2x1c3Rlcl9pbmRleH1cbiAgICAgICAgICAgIDx0aD57QGh0bWwgY2x1c3RlcnMuY2VudGVyX2ltYWdlc1tjbHVzdGVyX2luZGV4XX08L3RoPlxuICAgICAgICAgICAgey9lYWNofVxuICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgIHsjZWFjaCBtb2RlbF9sYXllcnMgYXMgbW9kZWxfbGF5ZXIsIGxheWVyX2luZGV4fVxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAxMHB4O1wiPlxuICAgICAgICAgICAgICB7I2lmIG1vZGVsX2xheWVyLmhpZ2hsaWdodF9tZX1cbiAgICAgICAgICAgICAgICA8bWFyaz5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIje21vZGVsX2xheWVyLnByZXR0eV9uYW1lWzBdfVwiPlxuICAgICAgICAgICAgICAgICAgICB7bW9kZWxfbGF5ZXIucHJldHR5X25hbWVbMV19XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAobGF5ZXIgPGNvZGU+e21vZGVsX2xheWVyLnByZXR0eV9uYW1lWzJdfTwvY29kZT4pXG4gICAgICAgICAgICAgICAgPC9tYXJrPlxuICAgICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiN7bW9kZWxfbGF5ZXIucHJldHR5X25hbWVbMF19XCI+XG4gICAgICAgICAgICAgICAgICB7bW9kZWxfbGF5ZXIucHJldHR5X25hbWVbMV19XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIChsYXllciA8Y29kZT57bW9kZWxfbGF5ZXIucHJldHR5X25hbWVbMl19PC9jb2RlPilcbiAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgeyNlYWNoIGNsdXN0ZXJzLmNsdXN0ZXJfc29ydF9vcmRlciBhcyBfLCBjbHVzdGVyX2luZGV4fVxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiY2x1c3RlclwiIHN0eWxlPVwiYmFja2dyb3VuZDogcmdiYSgyMTcsIDE1NywgMzgsIHtjbHVzdGVyX3BlcmNlbnRhZ2UoY2x1c3RlcnMsIGxheWVyX2luZGV4LCBjbHVzdGVyX2luZGV4KX0pXCI+e2NsdXN0ZXJfcGVyY2VudGFnZShjbHVzdGVycywgbGF5ZXJfaW5kZXgsIGNsdXN0ZXJfaW5kZXgsIHRydWUpfSU8L3RkPlxuICAgICAgICAgICAgey9lYWNofVxuICAgICAgICA8L3RyPlxuICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgICB7L2lmfVxuPC9kaXY+XG5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIGZ1bmN0aW9uIHJhbmdlKG4pe1xuICAgICAgICByZXR1cm4gQXJyYXkobikuZmlsbCgpLm1hcCgoXywgaSkgPT4gaSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2x1c3Rlcl9wZXJjZW50YWdlKGNsdXN0ZXJzLCBsYXllcl9pbmRleCwgY2x1c3Rlcl9pbmRleCwgY29udmVydF90b18xMDA9ZmFsc2UpIHtcbiAgICAgICAgbGV0IGFsbF9hc3NpZ25tZW50cyA9IGNsdXN0ZXJzWydjbHVzdGVyX2Fzc2lnbm1lbnRzJ11bbGF5ZXJfaW5kZXhdO1xuICAgICAgICBsZXQgbXlfYXNzaWdubWVudHMgPSBhbGxfYXNzaWdubWVudHMuZmlsdGVyKGFzc2lnbmVkX2luZGV4ID0+IGFzc2lnbmVkX2luZGV4ID09IGNsdXN0ZXJfaW5kZXgpO1xuICAgICAgICBpZiAoY29udmVydF90b18xMDApIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG15X2Fzc2lnbm1lbnRzLmxlbmd0aCAvIGFsbF9hc3NpZ25tZW50cy5sZW5ndGggKiAxMDAwKSAvIDEwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobXlfYXNzaWdubWVudHMubGVuZ3RoIC8gYWxsX2Fzc2lnbm1lbnRzLmxlbmd0aCAqIDEwMDApIC8gMTAwMDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbW9kZWxfbGF5ZXJzX3VybDogXCJcIixcbiAgICAgICAgICAgICAgICBpbWFnZV91cmw6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIG1vZGVsX2xheWVyczogW10sXG4gICAgICAgICAgICAgICAgbl9jbHVzdGVyczogNCxcbiAgICAgICAgICAgICAgICBuX2NsdXN0ZXJzX21pbjogNCxcbiAgICAgICAgICAgICAgICBuX2NsdXN0ZXJzX21heDogNCxcbiAgICAgICAgICAgICAgICBjbHVzdGVyX3BhdGhfcHJlZml4OiBudWxsLFxuICAgICAgICAgICAgICAgIGNsdXN0ZXJpbmdfdHlwZTogXCJrbWVhbnNcIixcbiAgICAgICAgICAgICAgICBjbHVzdGVyczogbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgaGVscGVyczoge3JhbmdlLCBjbHVzdGVyX3BlcmNlbnRhZ2V9LFxuICAgICAgICBvbmNyZWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3VwZGF0ZScsICh7IGNoYW5nZWQsIGN1cnJlbnQsIHByZXZpb3VzIH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlJywgY2hhbmdlZCwgY3VycmVudCwgcHJldmlvdXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgbW9kZWxfbGF5ZXJzIH0gPSB0aGlzLmdldCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFtb2RlbF9sYXllcnMubGVuZ3RoIHx8IGNoYW5nZWRbJ21vZGVsX2xheWVyc191cmwnXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hfbW9kZWxfbGF5ZXJzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VkWyduX2NsdXN0ZXJzJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkX2NsdXN0ZXJzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgcmVmcmVzaF9tb2RlbF9sYXllcnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IG1vZGVsX2xheWVyc191cmwgfSA9IHRoaXMuZ2V0KCk7XG4gICAgICAgICAgICAgICAgaWYgKCFtb2RlbF9sYXllcnNfdXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybignc2tpcHBpbmcgcmVmcmVzaF9tb2RlbF9sYXllcnMgYmVjYXVzZSBtb2RlbF9sYXllcnNfdXJsIGlzIG51bGwnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZldGNoKG1vZGVsX2xheWVyc191cmwpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoe21vZGVsX2xheWVyczogZGF0YX0pXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYWRfY2x1c3RlcnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGNsdXN0ZXJfcGF0aF9wcmVmaXgsIGNsdXN0ZXJpbmdfdHlwZSwgbl9jbHVzdGVycyB9ID0gdGhpcy5nZXQoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2x1c3Rlcl9wYXRoX3ByZWZpeCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3NraXBwaW5nIGxvYWQgY2x1c3RlcnMgYmVjYXVzZSBjbHVzdGVyX3BhdGhfcHJlZml4IGlzIG51bGwnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gY2x1c3Rlcl9wYXRoX3ByZWZpeCArICcvY2x1c3Rlcl9hc3NpZ25tZW50XycgKyBjbHVzdGVyaW5nX3R5cGUgKyAnX25fY2x1c3RlcnNfJyArIG5fY2x1c3RlcnMgKyAnLmpzb24nO1xuICAgICAgICAgICAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoe2NsdXN0ZXJzOiBkYXRhfSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlhZ3JhbXMvQ2x1c3RlclN1bW1hcnkuaHRtbCIsIjxkaXYgY2xhc3M9XCJyZWR1Y2VkX3dlaWdodHNcIj5cbiAgICB7I2lmIGFsbF93ZWlnaHRzfVxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgeyNlYWNoIGFsbF93ZWlnaHRzLnNsaWNlKDAsIChzaG93X292ZXJmbG93ID8gYWxsX3dlaWdodHMubGVuZ3RoIDogbnVtX3RvX3Nob3cpKSBhcyB3ZWlnaHRfZW50cnksIHdlaWdodF9pbmRleH1cbiAgICAgICAgICAgIHtAaHRtbCB3ZWlnaHRfZW50cnl9XG4gICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7I2lmIGFsbF93ZWlnaHRzLmxlbmd0aCA+IG51bV90b19zaG93fVxuICAgICAgICA8c3BhbiBjbGFzcz1cImV4cGFuZF93aWRnZXRcIiBvbjpjbGljaz1cInNldCh7IHNob3dfb3ZlcmZsb3c6ICFzaG93X292ZXJmbG93IH0pXCI+XG4gICAgICAgICAgICB7I2lmIHNob3dfb3ZlcmZsb3d9XG4gICAgICAgICAgICA8c3Bhbj5jbGljayB0byBoaWRlPC9zcGFuPlxuICAgICAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgPHNwYW4+e2FsbF93ZWlnaHRzLmxlbmd0aCAtIG51bV90b19zaG93fSB3ZWlnaHRzIGhpZGRlbjwvc3Bhbj5cbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgey9pZn1cbiAgICB7L2lmfVxuPC9kaXY+XG5cblxuPHN0eWxlPlxuLmV4cGFuZF93aWRnZXQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZWR1Y2VkX3dlaWdodHMgOmdsb2JhbChpbWcpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XG59XG4ub3ZlcmZsb3dfd2VpZ2h0cyB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xufVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEgKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3ZWlnaHRzX3VybDogbnVsbCxcbiAgICAgICAgICAgICAgICBtb2RlbF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIGxheWVyOiBudWxsLFxuICAgICAgICAgICAgICAgIHJlZHVjZWRfd2VpZ2h0czogbnVsbCxcbiAgICAgICAgICAgICAgICBhbGxfd2VpZ2h0czogbnVsbCxcbiAgICAgICAgICAgICAgICBudW1fdG9fc2hvdzogNDIsXG4gICAgICAgICAgICAgICAgc2hvd19vdmVyZmxvdzogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgb3ZlcmZsb3dfZGlzcGxheV90eXBlOiAoe3Nob3dfb3ZlcmZsb3d9KSA9PiAoc2hvd19vdmVyZmxvdyA/ICdpbmxpbmUnOiAnbm9uZScpLFxuICAgICAgICB9LFxuICAgICAgICBvbmNyZWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3VwZGF0ZScsICh7IGNoYW5nZWQsIGN1cnJlbnQsIHByZXZpb3VzIH0pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVkdWNlZCB3ZWlnaHRzIHVwZGF0ZScsIGNoYW5nZWQsIGN1cnJlbnQsIHByZXZpb3VzKTtcbiAgICAgICAgICAgIGNvbnN0IHsgd2VpZ2h0c191cmwgfSA9IHRoaXMuZ2V0KCk7XG5cbiAgICAgICAgICAgIGlmIChjaGFuZ2VkWyd3ZWlnaHRzX3VybCddICYmIHdlaWdodHNfdXJsKSB7XG4gICAgICAgICAgICAgICAgZmV0Y2god2VpZ2h0c191cmwpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHJlZHVjZWRfd2VpZ2h0cyB9ID0gdGhpcy5nZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFsbF93ZWlnaHRzID0gQXJyYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcm93IG9mIHJlZHVjZWRfd2VpZ2h0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYWxsX3dlaWdodHMsIHJvdyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoe2FsbF93ZWlnaHRzOiBhbGxfd2VpZ2h0c30pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuXG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpYWdyYW1zL1JlZHVjZWRXZWlnaHRzLmh0bWwiXSwic291cmNlUm9vdCI6IiJ9