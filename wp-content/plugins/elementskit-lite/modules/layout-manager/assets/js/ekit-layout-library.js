!function(){var e={703:function(e,t,a){"use strict";var r=a(414);function n(){}function o(){}o.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,o,l){if(l!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:n};return a.PropTypes=a,a}},697:function(e,t,a){e.exports=a(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},216:function(e,t,a){"use strict";undefined;var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),n=a(363),o=m(n),l=m(a(697)),i=a(81),c=m(a(315)),s=m(a(282)),u=m(a(821));function m(e){return e&&e.__esModule?e:{"default":e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var y=0,v=0,b=0,h=0,w="data-lazyload-listened",g=[],E=[],R=!1;try{var k=Object.defineProperty({},"passive",{get:function(){R=!0}});window.addEventListener("test",null,k)}catch(P){}var _=!!R&&{capture:!1,passive:!0},N=function(e){var t=e.ref;if(t instanceof HTMLElement){var a=(0,c["default"])(t),r=e.props.overflow&&a!==t.ownerDocument&&a!==document&&a!==document.documentElement?function(e,t){var a=e.ref,r=void 0,n=void 0,o=void 0,l=void 0;try{var i=t.getBoundingClientRect();r=i.top,n=i.left,o=i.height,l=i.width}catch(P){r=y,n=v,o=h,l=b}var c=window.innerHeight||document.documentElement.clientHeight,s=window.innerWidth||document.documentElement.clientWidth,u=Math.max(r,0),m=Math.max(n,0),d=Math.min(c,r+o)-u,f=Math.min(s,n+l)-m,p=void 0,w=void 0,g=void 0,E=void 0;try{var R=a.getBoundingClientRect();p=R.top,w=R.left,g=R.height,E=R.width}catch(P){p=y,w=v,g=h,E=b}var k=p-u,_=w-m,N=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return k-N[0]<=d&&k+g+N[1]>=0&&_-N[0]<=f&&_+E+N[1]>=0}(e,a):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var a=void 0,r=void 0;try{var n=t.getBoundingClientRect();a=n.top,r=n.height}catch(P){a=y,r=h}var o=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return a-l[0]<=o&&a+r+l[1]>=0}(e);r?e.visible||(e.props.once&&E.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},L=function(){E.forEach((function(e){var t=g.indexOf(e);-1!==t&&g.splice(t,1)})),E=[]},O=function(){for(var e=0;e<g.length;++e){var t=g[e];N(t)}L()},T=void 0,j=null,S=function(e){function t(e){d(this,t);var a=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.visible=!1,a.setRef=a.setRef.bind(a),a}return p(t,e),r(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"==typeof t&&(e=e.document.querySelector(t));var a=this.props.debounce!==undefined&&"throttle"===T||"debounce"===T&&this.props.debounce===undefined;if(a&&((0,i.off)(e,"scroll",j,_),(0,i.off)(window,"resize",j,_),j=null),j||(this.props.debounce!==undefined?(j=(0,s["default"])(O,"number"==typeof this.props.debounce?this.props.debounce:300),T="debounce"):this.props.throttle!==undefined?(j=(0,u["default"])(O,"number"==typeof this.props.throttle?this.props.throttle:300),T="throttle"):j=O),this.props.overflow){var r=(0,c["default"])(this.ref);if(r&&"function"==typeof r.getAttribute){var n=+r.getAttribute(w)+1;1===n&&r.addEventListener("scroll",j,_),r.setAttribute(w,n)}}else if(0===g.length||a){var o=this.props,l=o.scroll,m=o.resize;l&&(0,i.on)(e,"scroll",j,_),m&&(0,i.on)(window,"resize",j,_)}g.push(this),N(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,c["default"])(this.ref);if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(w)-1;0===t?(e.removeEventListener("scroll",j,_),e.removeAttribute(w)):e.setAttribute(w,t)}}var a=g.indexOf(this);-1!==a&&g.splice(a,1),0===g.length&&"undefined"!=typeof window&&((0,i.off)(window,"resize",j,_),(0,i.off)(window,"scroll",j,_))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,a=e.children,r=e.placeholder,n=e.className,l=e.classNamePrefix,i=e.style;return o["default"].createElement("div",{className:l+"-wrapper "+n,ref:this.setRef,style:i},this.visible?a:r||o["default"].createElement("div",{style:{height:t},className:l+"-placeholder"}))}}]),t}(n.Component);S.propTypes={className:l["default"].string,classNamePrefix:l["default"].string,once:l["default"].bool,height:l["default"].oneOfType([l["default"].number,l["default"].string]),offset:l["default"].oneOfType([l["default"].number,l["default"].arrayOf(l["default"].number)]),overflow:l["default"].bool,resize:l["default"].bool,scroll:l["default"].bool,children:l["default"].node,throttle:l["default"].oneOfType([l["default"].number,l["default"].bool]),debounce:l["default"].oneOfType([l["default"].number,l["default"].bool]),placeholder:l["default"].node,scrollContainer:l["default"].oneOfType([l["default"].string,l["default"].object]),unmountIfInvisible:l["default"].bool,style:l["default"].object},S.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var I=function(e){return e.displayName||e.name||"Component"};t.ZP=S},282:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t,a){var r=void 0,n=void 0,o=void 0,l=void 0,i=void 0,c=function s(){var c=+new Date-l;c<t&&c>=0?r=setTimeout(s,t-c):(r=null,a||(i=e.apply(o,n),r||(o=null,n=null)))};return function(){o=this,n=arguments,l=+new Date;var s=a&&!r;return r||(r=setTimeout(c,t)),s&&(i=e.apply(o,n),o=null,n=null),i}}},81:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,a,r){r=r||!1,e.addEventListener?e.addEventListener(t,a,r):e.attachEvent&&e.attachEvent("on"+t,(function(t){a.call(e,t||window.event)}))},t.off=function(e,t,a,r){r=r||!1,e.removeEventListener?e.removeEventListener(t,a,r):e.detachEvent&&e.detachEvent("on"+t,a)}},315:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,a=/(scroll|auto)/,r=e;r;){if(!r.parentNode)return e.ownerDocument||document.documentElement;var n=window.getComputedStyle(r),o=n.position,l=n.overflow,i=n["overflow-x"],c=n["overflow-y"];if("static"===o&&t)r=r.parentNode;else{if(a.test(l)&&a.test(i)&&a.test(c))return r;r=r.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},821:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t,a){var r,n;return t||(t=250),function(){var o=a||this,l=+new Date,i=arguments;r&&l<r+t?(clearTimeout(n),n=setTimeout((function(){r=l,e.apply(o,i)}),t)):(r=l,e.apply(o,i))}}},363:function(e){"use strict";e.exports=React}},t={};function a(r){var n=t[r];if(n!==undefined)return n.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,a),o.exports}!function(){"use strict";var e=function(e){return React.createElement("div",{className:"dialog-header dialog-lightbox-header"},React.createElement("div",{className:"elementor-templates-modal__header ekit-layout-library--header"},e.children))};var t=function(e){var t=e.isBackBtn,a=e.backBtn,r=e.tabName;return t?React.createElement("div",{className:"elementor-templates-modal__header__logo-area ekit-layout-library--logo"},React.createElement("div",{id:"elementor-template-library-header-preview-back",onClick:a},React.createElement("i",{className:"eicon-","aria-hidden":"true"}),React.createElement("span",null,"Back to ",r))):React.createElement("div",{className:"elementor-templates-modal__header__logo-area ekit-layout-library--logo"},React.createElement("div",{className:"elementor-templates-modal__header__logo"},React.createElement("span",{className:"elementor-templates-modal__header__logo__icon-wrapper e-logo-wrapper"},React.createElement("img",{src:window.ElementsKitLayoutManager.buttonIcon,alt:"ElementsKit"})),React.createElement("span",{className:"elementor-templates-modal__header__logo__title"},"ElementsKit")))};function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,o,l,i=[],c=!0,s=!1;try{if(o=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(r=o.call(a)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(u){s=!0,n=u}finally{try{if(!c&&null!=a["return"]&&(l=a["return"](),Object(l)!==l))return}finally{if(s)throw n}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var o=function(e){var t=e.menuItems,a=e.switchTab,n=e.currentTab,o=e.isMenu,l=e.isDisabled;return o?React.createElement("div",{className:"elementor-templates-modal__header__menu-area","data-disabled":l},React.createElement("div",{id:"elementor-template-library-header-menu"},Object.entries(t).reverse().map((function(e,t){var o=r(e,2),l=(o[0],o[1]);return React.createElement("div",{className:"elementor-component-tab elementor-template-library-menu-item"+(n===l.slug?" elementor-active":""),"data-tab":l.slug,onClick:a,key:t},l.title)})))):React.createElement("div",{className:"elementor-templates-modal__header__menu-area",hidden:!0})};var l=function(e){var t=e.isPreviewBtns,a=e.previewUrl,r=e.packageType,n=e.handleInsert,o=e.curTemplateId,l="",i=window.ElementsKitLayoutManager,c=i.hasPro,s=i.licenseStatus,u=i.links,m=React.createElement("a",{className:"elementor-template-library-template-action elementor-template-library-template-insert elementor-button",onClick:n},React.createElement("i",{className:"eicon-file-download","aria-hidden":"true"}),React.createElement("span",{className:"elementor-button-title"},"Insert")),d=m;return c||(d=React.createElement("a",{href:u.go_premium,className:"elementor-go-pro elementor-button",target:"_blank"},React.createElement("i",{className:"eicon-external-link-square"}),"Go Premium")),c&&"invalid"===s&&(d=React.createElement("a",{href:u.active_license,className:"elementor-go-pro elementor-button",target:"_blank"},React.createElement("i",{className:"eicon-external-link-square"}),"Active License")),t&&(l=React.createElement("div",{id:"elementor-template-library-header-tools"},React.createElement("div",{id:"elementor-template-library-header-preview"},React.createElement("div",{id:"elementor-template-library-header-preview-insert-wrapper",className:"elementor-templates-modal__header__item","data-id":o},React.createElement("a",{className:"elementor-template-library-template-action ekit-layout-library--live",href:a,target:"_blank"},React.createElement("i",{className:"eicon-editor-external-link"}),React.createElement("span",{className:"elementor-button-title"},"Live Preview")),"free"===r?m:d)))),React.createElement("div",{className:"elementor-templates-modal__header__items-area"},React.createElement("div",{className:"elementor-templates-modal__header__close elementor-templates-modal__header__close--normal elementor-templates-modal__header__item",onClick:window.ekitLayoutModal.hide},React.createElement("i",{className:"eicon-close","aria-hidden":"true",title:"Close"}),React.createElement("span",{className:"elementor-screen-only"},"Close")),l)};var i=function(e){return React.createElement("div",{className:"dialog-content dialog-lightbox-content"},React.createElement("div",{className:"elementor-template-library-templates"},e.children))};var c=function(e){var t=e.showBanner,a=window.ElementsKitLayoutManager.banner,r=a.enable,n=a.link,o=a.img,l=a.target;return t&&r?React.createElement("a",{href:n,className:"ekit-layout-library--banner",target:l},React.createElement("img",{src:o,alt:""})):null};function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,o,l,i=[],c=!0,s=!1;try{if(o=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(r=o.call(a)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(u){s=!0,n=u}finally{try{if(!c&&null!=a["return"]&&(l=a["return"](),Object(l)!==l))return}finally{if(s)throw n}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var m=function(e){var t=e.showTemplatesGroup,a=e.groups,r=e.handleGroupList;if(!t)return null;var n=function(e){return Array.isArray(e.groups)?e.title:Object.values(e.groups)[0].title};return React.createElement("div",{className:"ekit-layout-library--templates ekit-layout-library--groups"},Object.entries(a).map((function(e,t){var a,o=s(e,2),l=(o[0],o[1]);return React.createElement("div",{className:"ekit-layout-library--template",key:t},React.createElement("div",{className:"ekit-layout-library--template-block","data-group":Object.keys(l.groups)[0],"data-count":(a=l,!Array.isArray(a.groups)&&"count"in Object.values(a.groups)[0]?Object.values(a.groups)[0].count:1),onClick:r},React.createElement("div",{className:"ekit-layout-library--thumb"},React.createElement("img",{src:l.thumbnail||"",alt:n(l)})),React.createElement("p",{className:"ekit-layout-library--title"},n(l))))})))};var d=function(e){var t=e.showPreview,a=e.previewImg;return t?React.createElement("div",{id:"elementskit-template-library-preview",className:"ekit-layout-library--preview"},React.createElement("img",{className:"elementskit-template-preview-img",src:a})):null};function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,o,l,i=[],c=!0,s=!1;try{if(o=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(r=o.call(a)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(u){s=!0,n=u}finally{try{if(!c&&null!=a["return"]&&(l=a["return"](),Object(l)!==l))return}finally{if(s)throw n}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var y=function(e){var t=e.showToolbar,a=e.showCats,r=e.cats,n=e.catFilter,o=e.catLabel,l=e.handleSearch,i=e.tabName;if(!t)return null;var c="";return a&&(c=React.createElement("div",{id:"elementor-template-library-filter"},React.createElement("div",{className:"ekit-layout-library--cats"},React.createElement("span",{className:"ekit-layout-library--cats-label"},o||"Category"),React.createElement("ul",{className:"ekit-layout-library--cats-list"},React.createElement("li",null,React.createElement("span",{"data-cat":"",onClick:n},"All")),Object.entries(r).map((function(e,t){var a=f(e,2),r=(a[0],a[1]);return React.createElement("li",{key:t},React.createElement("span",{"data-cat":r.slug,onClick:n},r.title))})))))),React.createElement("div",{id:"elementor-template-library-toolbar",className:"ekit-template-library-toolbar"},React.createElement("div",{id:"elementor-template-library-filter-toolbar-remote",className:"elementor-template-library-filter-toolbar"},c),React.createElement("div",{id:"elementor-template-library-filter-text-wrapper",className:"ekit-layout-library--search"},React.createElement("label",{htmlFor:"elementor-template-library-filter-text",className:"elementor-screen-only"},"Search ",i,":"),React.createElement("input",{id:"elementor-template-library-filter-text",placeholder:"Search "+i,onKeyDown:l}),React.createElement("i",{className:"eicon-search",onClick:l})))},v=a(216);var b=function(e){var t=e.layout,a=e.showPreview,r=e.handleInsert,n=window.ElementsKitLayoutManager,o=n.hasPro,l=n.licenseStatus,i=n.links,c=React.createElement("button",{className:"ekit-layout-library--action ekit-layout-library--insert",onClick:r},React.createElement("i",{className:"eicon-file-download"}),"Insert"),s=c;return o||(s=React.createElement("a",{href:i.go_premium,className:"ekit-layout-library--action",target:"_blank"},React.createElement("i",{className:"eicon-external-link-square"}),"Go Premium")),o&&"invalid"===l&&(s=React.createElement("a",{href:i.active_license,className:"ekit-layout-library--action ekit-layout-library--license",target:"_blank"},React.createElement("i",{className:"eicon-external-link-square"}),"Active License")),React.createElement(v.ZP,{overflow:!0,once:!0},React.createElement("div",{className:"ekit-layout-library--template-block","data-type":t["package"],"data-id":t.ID,hidden:!t.thumbnail},React.createElement("div",{className:"ekit-layout-library--thumb",onClick:a,"data-img":t.preview.url,"data-link":t.live_demo_url,"data-id":t.ID,"data-type":t["package"]},React.createElement("img",{src:t.thumbnail||"",alt:t.title})),"free"===t["package"]?c:s,React.createElement("p",{className:"ekit-layout-library--title"},t.title)))};var h=function(e){var t=e.showTemplateList,a=e.layouts,r=e.showPreview,n=e.handleInsert;if(!t)return null;var o=0,l=[[],[],[],[]];return Object.keys(a).map((function(e,t){o++,t%4==0&&(o=0),l[o].push(e)})),React.createElement("div",{className:"ekit-layout-library--templates"},React.createElement("div",{className:"ekit-layout-library--template"},l[0].map((function(e,t){return React.createElement(b,{key:t,layout:a[e],showPreview:r,handleInsert:n})}))),React.createElement("div",{className:"ekit-layout-library--template"},l[1].map((function(e,t){return React.createElement(b,{key:t,layout:a[e],showPreview:r,handleInsert:n})}))),React.createElement("div",{className:"ekit-layout-library--template"},l[2].map((function(e,t){return React.createElement(b,{key:t,layout:a[e],showPreview:r,handleInsert:n})}))),React.createElement("div",{className:"ekit-layout-library--template"},l[3].map((function(e,t){return React.createElement(b,{key:t,layout:a[e],showPreview:r,handleInsert:n})}))))};var w=function(e){var t=e.isLoading;return React.createElement("div",{className:"dialog-loading dialog-lightbox-loading ekit-layout-library--loading",hidden:!t},React.createElement("div",{id:"elementor-template-library-loading"},React.createElement("div",{className:"elementor-loader-wrapper"},React.createElement("div",{className:"elementor-loader"},React.createElement("div",{className:"elementor-loader-boxes"},React.createElement("div",{className:"elementor-loader-box"}),React.createElement("div",{className:"elementor-loader-box"}),React.createElement("div",{className:"elementor-loader-box"}),React.createElement("div",{className:"elementor-loader-box"}))),React.createElement("div",{className:"elementor-loading-title"},"Loading"))))};var g=function(e){return e.showFooter?React.createElement("div",{id:"elementor-template-library-footer-banner"},React.createElement("img",{className:"elementor-nerd-box-icon",src:window.ElementsKitLayoutManager.infoIcon}),React.createElement("div",{className:"elementor-excerpt"},"Stay tuned! More awesome templates coming real soon.")):null};function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function R(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,j(r.key),r)}}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=O(e);if(t){var n=O(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return N(this,a)}}function N(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return L(e)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function T(e,t,a){return(t=j(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function j(e){var t=function(e,t){if("object"!==E(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(a!==undefined){var r=a.call(e,t||"default");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===E(t)?t:String(t)}var S,I,P=function(a){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(f,wp.element.Component);var r,n,s,u=_(f);function f(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),T(L(t=u.call(this,e)),"getLayouts",(function(){var e=t.state,a=e.api_url,r=e.tab,n=e.layouts_cache;r in n?t.setState({tabs:n[r].taxonomies.layout_tabs,layouts:n[r].layouts,groups:n[r].layouts,currentGroup:"",cats:n[r].taxonomies.layout_categories,catLabel:""}):t.setState({isLoading:!0},(function(){fetch(a+"tabs="+r).then((function(e){return e.json()})).then((function(e){n[r]=e,t.setState({tabs:e.taxonomies.layout_tabs,layouts:e.layouts,layouts_cache:n,groups:e.layouts,currentGroup:"",cats:e.taxonomies.layout_categories,catLabel:"",isLoading:!1})}))}))})),T(L(t),"catFilter",(function(e){var a=t.state.api_url,r=e.target.dataset.cat,n=""===r?"":e.target.innerText;t.setState({isLoading:!0,tab:"sections"},(function(){fetch(a+"tabs=sections&categories="+r).then((function(e){return e.json()})).then((function(e){t.setState({layouts:e.layouts,catLabel:n,isLoading:!1})}))}))})),T(L(t),"switchTab",(function(e){t.setState({tab:e.target.dataset.tab},(function(){t.getLayouts(),t.messageEl.current.scrollTop=0}))})),T(L(t),"showPreview",(function(e){var a=e.currentTarget.dataset,r=a.img,n=a.link,o=a.id,l=a.type;t.setState({previewImg:r,previewUrl:n,previewPackage:l,curTemplateId:o}),t.messageEl.current.scrollTop=0})),T(L(t),"handleSearch",(function(e){var a=e.currentTarget,r=e.key;if("click"===e.type)a=a.previousElementSibling;else if("Enter"!==r)return;var n=a.value.replace(" ","_").toLowerCase(),o=t.state,l=o.layouts_cache[o.tab].layouts,i=Object.keys(l),c={};i.filter((function(e){l[e].get_searchable_unique_name.includes(n)&&(c[e]=l[e])})),t.setState({layouts:c,catLabel:""})})),T(L(t),"backBtn",(function(){if(t.state.previewImg)return t.setState({previewImg:""}),void("currentRequest"in window.ekitLayoutModal&&window.ekitLayoutModal.currentRequest.reject());t.setState({currentGroup:""})})),T(L(t),"handleGroupList",(function(e){var a=t.state.api_url,r=e.currentTarget.dataset.group;t.setState({isLoading:!0}),fetch(a+"groups="+r).then((function(e){return e.json()})).then((function(e){t.setState({layouts:e.layouts,currentGroup:r},(function(){setTimeout((function(){t.setState({isLoading:!1})}),250)}))}))})),T(L(t),"handleInsert",(function(e){var a=e.currentTarget.parentElement.dataset.id,r=L(t);t.setState({isLoading:!0}),window.ekitLayoutModal.currentRequest=elementorCommon.ajax.addRequest("get_elementskit_template_data",{unique_id:a,data:{edit_mode:!0,display:!0,template_id:a},success:function(e){$e.run("document/elements/import",{model:window.elementor.elementsModel,data:e,options:window.ElementsKitLayoutManager.modelOps}),r.setState({isLoading:!1,previewImg:""}),window.ekitLayoutModal.hide()}}).fail((function(){r.setState({isLoading:!1,previewImg:""})}))}));var a=window.ElementsKitLayoutManager.apiUrl,r=a.indexOf("?")<0?"?":"&";return t.state={api_url:a+r,tab:window.ElementsKitLayoutManager.defaultTab,tabs:{},groups:{},currentGroup:"",layouts:{},layouts_cache:{},cats:{},catLabel:"",previewImg:"",previewUrl:"",previewPackage:"",isLoading:!0,curTemplateId:""},t.messageEl=wp.element.createRef(),t}return r=f,(n=[{key:"componentDidMount",value:function(){this.getLayouts()}},{key:"render",value:function(){var a=this.state,r=a.previewImg,n=a.previewUrl,s=a.previewPackage,u=a.isLoading,f=a.currentGroup,p=a.layouts,v=a.groups,b=a.cats,E=a.catLabel,R=a.tab,k=a.tabs,_=a.curTemplateId,N={banner:!0,menu:!0,backBtn:!1,previewBtns:!1,preview:!1,toolbar:!0,cats:!0,footer:!0,templateList:!0,templateGroups:!1};return r&&(N.banner=!1,N.menu=!1,N.backBtn=!0,N.previewBtns=!0,N.preview=!0,N.toolbar=!1,N.templateList=!1,N.footer=!1),f&&(N.backBtn=!0),"templates"===R&&(N.cats=!1),"templates"===R&&""===f&&(N.templateList=!1,N.templateGroups=!0),React.createElement(React.Fragment,null,React.createElement(e,null,React.createElement(t,{isBackBtn:N.backBtn,backBtn:this.backBtn,tabName:R}),React.createElement(o,{menuItems:k,switchTab:this.switchTab,currentTab:R,isMenu:N.menu,isDisabled:u}),React.createElement(l,{isPreviewBtns:N.previewBtns,previewUrl:n,packageType:s,handleInsert:this.handleInsert,curTemplateId:_})),React.createElement("div",{className:"dialog-message dialog-lightbox-message",ref:this.messageEl},React.createElement(i,{isLoading:u},React.createElement(c,{showBanner:N.banner}),React.createElement(d,{previewImg:r,showPreview:N.preview}),React.createElement(y,{showToolbar:N.toolbar,showCats:N.cats,cats:b,catFilter:this.catFilter,catLabel:E,handleSearch:this.handleSearch,tabName:R}),React.createElement(m,{showTemplatesGroup:N.templateGroups,groups:v,handleGroupList:this.handleGroupList}),React.createElement(h,{showTemplateList:N.templateList,layouts:p,showPreview:this.showPreview,handleInsert:this.handleInsert}),React.createElement(g,{showFooter:N.footer})),React.createElement(w,{isLoading:this.state.isLoading})))}}])&&R(r.prototype,n),s&&R(r,s),Object.defineProperty(r,"prototype",{writable:!1}),f}();S=jQuery,I={getModal:function(){var e=this;return e.modal||(e.modal=elementor.dialogsManager.createWidget("lightbox",{id:"ekitLayoutLibrary",onShow:function(){e.modal.getElements("widget").addClass("elementor-templates-modal"),e.modal.getElements("header").remove(),e.modal.getElements("message").remove(),e.modal.getElements("buttonsWrapper").remove();var t=e.modal.getElements("widgetContent")[0];wp.element.render(React.createElement(P,null),t)},onHide:function(){"currentRequest"in window.ekitLayoutModal&&window.ekitLayoutModal.currentRequest.reject()}}),window.ekitLayoutModal=e.modal),this.modal},showTemplatesModal:function(){var e=S(this).parents(".elementor-add-section-inline"),t=e.next(".elementor-top-section").data("model-cid"),a={};function r(){var e=S(".ekit-template-library-toolbar").eq(0).width();S(".ekit-layout-library--cats-list").css("width",e)}e.length&&(e.find(".elementor-add-section-close").trigger("click"),S.each(window.elementor.elements.models,(function(e,r){r.cid===t&&(a={at:e})}))),window.ElementsKitLayoutManager.modelOps=a,I.getModal().show(),S(window).trigger("resize"),r(),S(window).on("resize",r),S(window).on("click.ekitLayoutLib",r)},previewLoaded:function(){var e=setInterval((function(){window.elementor.$previewContents.find(".elementor-add-new-section").length&&(I.addButton(),clearInterval(e))}),100);window.elementor.$previewContents.on("click.ekitLayoutLib",".elementskit-add-template-button",I.showTemplatesModal)},addButton:function(){var e=window.elementor.$previewContents.find(".elementor-add-template-button"),t=S('<div class="elementskit-add-template-button" title="Add ElementsKit Template"><img src="'+ElementsKitLayoutManager.buttonIcon+'" alt=""></div>');e.after(t),window.elementor.$previewContents.on("click.ekitLayoutLib",".elementor-editor-section-settings .elementor-editor-element-add",(function(){var e=S(this).parents(".elementor-top-section").prev(".elementor-add-section").find(".elementor-add-template-button");e.siblings(".elementskit-add-template-button").length||e.after(t.clone())}))},init:function(){window.elementor.on("preview:loaded",window._.bind(I.previewLoaded,I))}},S(window).on("elementor:init",I.init)}()}();