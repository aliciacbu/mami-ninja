(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7oih":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("q1tI"),a=n.n(r),o=n("qhky"),i=n("XM63"),c=n.n(i),u=n("Wbzz"),s=n("AC56"),l=n.n(s);function f(){var e=Object(r.useRef)(),t=Object(r.useCallback)((function(){var e=document.getElementsByTagName("head")[0],t=document.createElement("link");t.rel="stylesheet",t.id="dark-mode",t.href="../dark.css",e.appendChild(t)}),[]),n=Object(r.useCallback)((function(){var t=document.querySelectorAll("#dark-mode");t&&(t.forEach((function(e){return e.remove()})),e.current.textContent="🌙")}),[]),o=Object(r.useCallback)((function(e){"string"==typeof window.localStorage.getItem("theme")||"boolean"==typeof e.matches&&(e.matches?t():n())}),[]);return Object(r.useEffect)((function(){var e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");return e.addListener(o),function(){e.removeListener(o)}}),[]),a.a.createElement("nav",{className:"navbar"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"flex"},a.a.createElement("div",null,a.a.createElement(u.Link,{to:"/",className:"brand"},a.a.createElement("span",{className:"emoji"},a.a.createElement("img",{src:l.a,height:"30",width:"30",alt:"Mami Ninja"}))," ",a.a.createElement("span",{className:"name"},"Mami Ninja"))),a.a.createElement("div",{className:"flex"},a.a.createElement(u.Link,{to:"/recursos"},"Recursos"),a.a.createElement(u.Link,{to:"/reflexiones"},"Reflexiones"),a.a.createElement("button",{ref:e,id:"dark-mode-button",onClick:function(r){"dark"===("undefined"!=typeof window&&localStorage.getItem("theme"))?(localStorage.removeItem("theme"),n()):("undefined"!=typeof window&&(localStorage.setItem("theme","dark"),e.current.textContent="☀️"),t())}},"undefined"!=typeof window&&"dark"===localStorage.getItem("theme")?"☀️":"🌙")))))}function p(){return a.a.createElement("footer",{className:"footer flex"},a.a.createElement("section",{className:"container"},a.a.createElement("nav",{className:"footer-links"},a.a.createElement(u.Link,{to:"/recursos"},"Recursos"),a.a.createElement(u.Link,{to:"/reflexiones"},"Reflexiones"),a.a.createElement("a",{href:"https://instagram.com/mami.ninja.ig",target:"_blank",rel:"noopener noreferrer"},"Instagram"),a.a.createElement(u.Link,{to:"/rss.xml"},"RSS")),a.a.createElement("nav",{className:"flex justify-center"},"Con ❤️")))}n("OMi8"),n("uutW");function d(e){var t=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,null,a.a.createElement("link",{rel:"shortcut icon",type:"image/png",href:c.a})),a.a.createElement(f,null),a.a.createElement("main",null,t),a.a.createElement(p,null))}},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},AC56:function(e,t,n){e.exports=n.p+"static/ninja-icon-03767ffddd199d6f0c9ba1d7c9d8d499.png"},Aeqt:function(e,t,n){"use strict";t.a={siteTitle:"Mami Ninja",siteUrl:"https://mami.ninja",siteLogo:"/logo.png",description:"Mamá en constanste aprendizaje.",userTwitter:""}},EYWl:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),a=n.n(r),o=n("qhky"),i=n("Aeqt");function c(e){var t,n,r,c=e.postNode,u=e.postPath,s=e.postSEO,l=e.coverPicture,f=e.customDescription,p="",d=!0;if(s){var m,h=c.frontmatter;if(t=h.title,n=c.excerpt,h.banner||l)p=null!==(m=h.banner)&&void 0!==m?m:l,d=!1;r=""+i.a.siteUrl+u}else t=i.a.siteTitle,n=f||i.a.description,p=i.a.siteLogo;d&&(p=""+i.a.siteUrl+p);var y=[{"@context":"http://schema.org","@type":"WebSite",url:i.a.siteUrl,name:t,alternateName:t}];return s&&y.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":r,name:t,image:p}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:i.a.siteUrl,name:t,alternateName:t,headline:t,image:{"@type":"ImageObject",url:p},description:n}),a.a.createElement(o.a,null,a.a.createElement("meta",{name:"description",content:n}),a.a.createElement("meta",{name:"image",content:p}),a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(y)),a.a.createElement("meta",{property:"og:url",content:s?r:i.a.siteUrl}),s&&a.a.createElement("meta",{property:"og:type",content:"article"}),a.a.createElement("meta",{property:"og:title",content:t}),a.a.createElement("meta",{property:"og:description",content:n}),a.a.createElement("meta",{property:"og:image",content:p}),a.a.createElement("meta",{name:"twitter:card",content:"summary"}),a.a.createElement("meta",{name:"twitter:creator",content:i.a.userTwitter}),a.a.createElement("meta",{name:"twitter:title",content:t}),a.a.createElement("meta",{name:"twitter:description",content:n}),a.a.createElement("meta",{name:"twitter:image",content:p}))}},OMi8:function(e,t,n){},XM63:function(e,t,n){e.exports=n.p+"static/favicon-03767ffddd199d6f0c9ba1d7c9d8d499.png"},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,u,s,l;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(u=c;0!=u--;)if(!e(t[u],i[u]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!i.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!e(u.value[1],i.get(u.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(u=c;0!=u--;)if(t[u]!==i[u])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,s[u]))return!1;if(n&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!e(t[s[u]],i[s[u]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},qhky:function(e,t,n){"use strict";(function(e){var r,a,o,i,c=n("17x9"),u=n.n(c),s=n("8+s/"),l=n.n(s),f=n("bmMU"),p=n.n(f),d=n("q1tI"),m=n.n(d),h=n("6qGY"),y=n.n(h),b="bodyAttributes",g="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),E="cssText",O="href",A="http-equiv",C="innerHTML",S="itemprop",j="name",k="property",x="rel",L="src",I="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",M="defer",R="encodeSpecialCharacters",q="onChangeClientState",U="titleTemplate",_=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),B=[T.NOSCRIPT,T.SCRIPT,T.STYLE],D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=Q(e,T.TITLE),n=Q(e,U);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,N);return t||r||void 0},V=function(e){return Q(e,q)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||n===x&&"canonical"===e[n].toLowerCase()||u===x&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==C&&c!==E&&c!==S||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],u=y()({},r[c],a[c]);r[c]=u}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Z=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:e.requestAnimationFrame||Z,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ue(T.BODY,r),ue(T.HTML,a),ce(f,p);var d={baseTag:se(T.BASE,n),linkTags:se(T.LINK,o),metaTags:se(T.META,i),noscriptTags:se(T.NOSCRIPT,c),scriptTags:se(T.SCRIPT,s),styleTags:se(T.STYLE,l)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(T.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[m.a.createElement(T.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case g:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===C||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(T.BASE,t,r),bodyAttributes:pe(b,n,r),htmlAttributes:pe(g,a,r),link:pe(T.LINK,o,r),meta:pe(T.META,i,r),noscript:pe(T.NOSCRIPT,c,r),script:pe(T.SCRIPT,u,r),style:pe(T.STYLE,s,r),title:pe(T.TITLE,{title:f,titleAttributes:p},r)}},me=l()((function(e){return{baseTag:$([O,I],e),bodyAttributes:X(b,e),defer:Q(e,M),encode:Q(e,R),htmlAttributes:X(g,e),linkTags:G(T.LINK,[x,O],e),metaTags:G(T.META,[j,w,A,k,S],e),noscriptTags:G(T.NOSCRIPT,[C],e),onChangeClientState:V(e),scriptTags:G(T.SCRIPT,[L,C],e),styleTags:G(T.STYLE,[E],e),title:J(e),titleAttributes:X(v,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),he=(a=me,i=o=function(e){function t(){return H(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case T.TITLE:return F({},a,((t={})[r.type]=i,t.titleAttributes=F({},o),t));case T.BODY:return F({},a,{bodyAttributes:F({},o)});case T.HTML:return F({},a,{htmlAttributes:F({},o)})}return F({},a,((n={})[r.type]=F({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(z(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},Y(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind,t.a=he}).call(this,n("yLpj"))},uutW:function(e,t,n){},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-5ebeed9ba6749ec26655.js.map