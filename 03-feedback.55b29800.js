!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function h(e){return c=e,f=setTimeout(x,t),s?y(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function x(){var e=p();if(j(e))return O(e);f=setTimeout(x,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function O(e){return f=void 0,v&&r?y(e):(r=i=void 0,u)}function T(){var e=p(),n=j(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return h(l);if(d)return f=setTimeout(x,t),y(l)}return void 0===f&&(f=setTimeout(x,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:O(p())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var h={form:document.querySelector(".feedback-form"),inputEmail:document.querySelector("input"),textareaMessage:document.querySelector("textarea")},j="feedback-form-state",x={},O=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};!function(){if(O(j)){var e=O(j);h.inputEmail.value=e.email,h.textareaMessage.value=e.message}}(),h.form.addEventListener("input",e(t)((function(){x.email=h.inputEmail.value,x.message=h.textareaMessage.value,function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}}(j,x)}),500)),h.form.addEventListener("submit",(function(e){e.preventDefault(),""!==h.inputEmail.value&&""!==h.textareaMessage.value&&(console.log(x),e.currentTarget.reset(),localStorage.removeItem(j))}))}();
//# sourceMappingURL=03-feedback.55b29800.js.map
