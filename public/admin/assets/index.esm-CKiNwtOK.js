import{r as N,aM as he}from"./index-3TwjZzBg.js";var l=function(){return l=Object.assign||function(r){for(var a,n=1,u=arguments.length;n<u;n++){a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(r[t]=a[t])}return r},l.apply(this,arguments)};function fe(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,n=Object.getOwnPropertySymbols(e);u<n.length;u++)r.indexOf(n[u])<0&&Object.prototype.propertyIsEnumerable.call(e,n[u])&&(a[n[u]]=e[n[u]]);return a}function V(e,r,a){if(a||arguments.length===2)for(var n=0,u=r.length,t;n<u;n++)(t||!(n in r))&&(t||(t=Array.prototype.slice.call(r,0,n)),t[n]=r[n]);return e.concat(t||Array.prototype.slice.call(r))}var F=function(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},Le={k:1e3,m:1e6,b:1e9},Ue=function(e,r){r===void 0&&(r=".");var a=new RegExp("(\\d+(".concat(F(r),"\\d*)?)([kmb])$"),"i"),n=e.match(a);if(n){var u=n[1],t=n[3],i=Le[t.toLowerCase()];return Number(u.replace(r,"."))*i}},Ge=function(e,r){r===void 0&&(r=",");var a=new RegExp(F(r),"g");return e.replace(a,"")},Me=function(e,r){var a=F(r.join("")),n=new RegExp("[^\\d".concat(a,"]"),"gi");return e.replace(n,"")},ce=function(e){var r=e.value,a=e.groupSeparator,n=a===void 0?",":a,u=e.decimalSeparator,t=u===void 0?".":u,i=e.allowDecimals,o=i===void 0?!0:i,c=e.decimalsLimit,D=c===void 0?2:c,E=e.allowNegativeValue,v=E===void 0?!0:E,g=e.disableAbbreviations,K=g===void 0?!1:g,P=e.prefix,S=P===void 0?"":P,O=e.transformRawValue,I=O===void 0?function($){return $}:O,f=I(r);if(f==="-")return f;var m=K?[]:["k","m","b"],x=new RegExp("((^|\\D)-\\d)|(-".concat(F(S),")")),H=x.test(f),C=RegExp("(\\d+)-?".concat(F(S))).exec(r)||[],k=C[0],Q=C[1],X=S?k?f.replace(k,"").concat(Q):f.replace(S,""):f,Y=Ge(X,n),j=Me(Y,V([n,t],m,!0)),B=j;if(!K){if(m.some(function($){return $===j.toLowerCase().replace(t,"")}))return"";var Z=Ue(j,t);Z&&(B=String(Z))}var L=H&&v?"-":"";if(t&&B.includes(t)){var U=j.split(t),_=U[0],G=U[1],M=D&&G?G.slice(0,D):G,ee=o?"".concat(t).concat(M):"";return"".concat(L).concat(_).concat(ee)}return"".concat(L).concat(B)},$e=function(e,r,a){if(a!==void 0&&e.length>1){if(a===0)return e.replace(r,"");if(e.includes(r)){var n=e.split(r),u=n[0],t=n[1];if(t.length===a)return e;if(t.length>a)return"".concat(u).concat(r).concat(t.slice(0,a))}var i=e.length>a?new RegExp("(\\d+)(\\d{".concat(a,"})")):new RegExp("(\\d)(\\d+)"),o=e.match(i);if(o){var u=o[1],t=o[2];return"".concat(u).concat(r).concat(t)}}return e},xe=function(e,r){var a=r.groupSeparator,n=a===void 0?",":a,u=r.decimalSeparator,t=u===void 0?".":u,i=new RegExp("\\d([^".concat(F(n)).concat(F(t),"0-9]+)")),o=e.match(i);return o?o[1]:void 0},J=function(e){var r=e.value,a=e.decimalSeparator,n=e.intlConfig,u=e.decimalScale,t=e.prefix,i=t===void 0?"":t,o=e.suffix,c=o===void 0?"":o;if(r===""||r===void 0)return"";if(r==="-")return"-";var D=new RegExp("^\\d?-".concat(i?"".concat(F(i),"?"):"","\\d")).test(r),E=a!=="."?Te(r,a,D):r;a&&a!=="-"&&E.startsWith(a)&&(E="0"+E);var v=n||{},g=v.locale,K=v.currency,P=fe(v,["locale","currency"]),S=l(l({},P),{minimumFractionDigits:u||0,maximumFractionDigits:20}),O=n?new Intl.NumberFormat(g,l(l({},S),K&&{style:"currency",currency:K})):new Intl.NumberFormat(void 0,S),I=O.formatToParts(Number(E)),f=We(I,e),m=xe(f,l({},e)),x=r.slice(-1)===a?a:"",H=E.match(RegExp("\\d+\\.(\\d+)"))||[],C=H[1];return u===void 0&&C&&a&&(f.includes(a)?f=f.replace(RegExp("(\\d+)(".concat(F(a),")(\\d+)"),"g"),"$1$2".concat(C)):m&&!c?f=f.replace(m,"".concat(a).concat(C).concat(m)):f="".concat(f).concat(a).concat(C)),c&&x?"".concat(f).concat(x).concat(c):m&&x?f.replace(m,"".concat(x).concat(m)):m&&c?f.replace(m,"".concat(x).concat(c)):[f,x,c].join("")},Te=function(e,r,a){var n=e;return r&&r!=="."&&(n=n.replace(RegExp(F(r),"g"),"."),a&&r==="-"&&(n="-".concat(n.slice(1)))),n},We=function(e,r){var a=r.prefix,n=r.groupSeparator,u=r.decimalSeparator,t=r.decimalScale,i=r.disableGroupSeparators,o=i===void 0?!1:i;return e.reduce(function(c,D,E){var v=D.type,g=D.value;return E===0&&a?v==="minusSign"?[g,a]:v==="currency"?V(V([],c,!0),[a],!1):[a,g]:v==="currency"?a?c:V(V([],c,!0),[g],!1):v==="group"?o?c:V(V([],c,!0),[n!==void 0?n:g],!1):v==="decimal"?t!==void 0&&t===0?c:V(V([],c,!0),[u!==void 0?u:g],!1):v==="fraction"?V(V([],c,!0),[t!==void 0?g.slice(0,t):g],!1):V(V([],c,!0),[g],!1)},[""]).join("")},He={currencySymbol:"",groupSeparator:"",decimalSeparator:"",prefix:"",suffix:""},qe=function(e){var r=e||{},a=r.locale,n=r.currency,u=fe(r,["locale","currency"]),t=a?new Intl.NumberFormat(a,l(l({},u),n&&{currency:n,style:"currency"})):new Intl.NumberFormat;return t.formatToParts(1000.1).reduce(function(i,o,c){return o.type==="currency"?c===0?l(l({},i),{currencySymbol:o.value,prefix:o.value}):l(l({},i),{currencySymbol:o.value,suffix:o.value}):o.type==="group"?l(l({},i),{groupSeparator:o.value}):o.type==="decimal"?l(l({},i),{decimalSeparator:o.value}):i},He)},we=function(e){return RegExp(/\d/,"gi").test(e)},ze=function(e,r,a){if(a===void 0||r===""||r===void 0||e===""||e===void 0)return e;if(!e.match(/\d/g))return"";var n=e.split(r),u=n[0],t=n[1];if(a===0)return u;var i=t||"";if(i.length<a)for(;i.length<a;)i+="0";else i=i.slice(0,a);return"".concat(u).concat(r).concat(i)},Je=function(e){var r=e.selectionStart,a=e.value,n=e.lastKeyStroke,u=e.stateValue,t=e.groupSeparator,i=r,o=a;if(u&&i){var c=a.split("");return n==="Backspace"&&u[i]===t&&(c.splice(i-1,1),i-=1),n==="Delete"&&u[i]===t&&(c.splice(i,1),i+=1),o=c.join(""),{modifiedValue:o,cursorPosition:i}}return{modifiedValue:o,cursorPosition:r}},Qe=N.forwardRef(function(e,r){var a=e.allowDecimals,n=a===void 0?!0:a,u=e.allowNegativeValue,t=u===void 0?!0:u,i=e.id,o=e.name,c=e.className,D=e.customInput,E=e.decimalsLimit,v=e.defaultValue,g=e.disabled,K=g===void 0?!1:g,P=e.maxLength,S=e.value,O=e.onValueChange,I=e.fixedDecimalLength,f=e.placeholder,m=e.decimalScale,x=e.prefix,H=e.suffix,C=e.intlConfig,k=e.step,Q=e.min,X=e.max,Y=e.disableGroupSeparators,j=Y===void 0?!1:Y,B=e.disableAbbreviations,Z=B===void 0?!1:B,L=e.decimalSeparator,U=e.groupSeparator,_=e.onChange,G=e.onFocus,M=e.onBlur,ee=e.onKeyDown,$=e.onKeyUp,Ve=e.transformRawValue,se=e.formatValueOnBlur,Ee=se===void 0?!0:se,Re=fe(e,["allowDecimals","allowNegativeValue","id","name","className","customInput","decimalsLimit","defaultValue","disabled","maxLength","value","onValueChange","fixedDecimalLength","placeholder","decimalScale","prefix","suffix","intlConfig","step","min","max","disableGroupSeparators","disableAbbreviations","decimalSeparator","groupSeparator","onChange","onFocus","onBlur","onKeyDown","onKeyUp","transformRawValue","formatValueOnBlur"]);if(L&&we(L))throw new Error("decimalSeparator cannot be a number");if(U&&we(U))throw new Error("groupSeparator cannot be a number");var re=N.useMemo(function(){return qe(C)},[C]),d=L||re.decimalSeparator||"",T=U||re.groupSeparator||"";if(d&&T&&d===T&&j===!1)throw new Error("decimalSeparator cannot be the same as groupSeparator");var q={decimalSeparator:d,groupSeparator:T,disableGroupSeparators:j,intlConfig:C,prefix:x||re.prefix,suffix:H},te={decimalSeparator:d,groupSeparator:T,allowDecimals:n,decimalsLimit:E||I||2,allowNegativeValue:t,disableAbbreviations:Z,prefix:x||re.prefix,transformRawValue:Ve},de=N.useState(function(){return v!=null?J(l(l({},q),{decimalScale:m,value:String(v)})):S!=null?J(l(l({},q),{decimalScale:m,value:String(S)})):""}),y=de[0],z=de[1],pe=N.useState(!1),ue=pe[0],Oe=pe[1],ve=N.useState(0),ie=ve[0],oe=ve[1],me=N.useState(0),ge=me[0],Ce=me[1],Se=N.useState(null),Ne=Se[0],De=Se[1],A=N.useRef(null);N.useImperativeHandle(r,function(){return A.current});var be=function(s,h){Oe(!0);var b=Je({selectionStart:h,value:s,lastKeyStroke:Ne,stateValue:y,groupSeparator:T}),R=b.modifiedValue,w=b.cursorPosition,p=ce(l({value:R},te));if(!(P&&p.replace(/-/g,"").length>P)){if(p===""||p==="-"||p===d){O&&O(void 0,o,{float:null,formatted:"",value:""}),z(p),oe(1);return}var W=d?p.replace(d,"."):p,ae=parseFloat(W),le=J(l({value:p},q));if(w!=null){var ne=w+(le.length-s.length);ne=ne<=0?x?x.length:0:ne,oe(ne),Ce(ge+1)}if(z(le),O){var Be={float:ae,formatted:le,value:p};O(p,o,Be)}}},Fe=function(s){var h=s.target,b=h.value,R=h.selectionStart;be(b,R),_&&_(s)},ke=function(s){return G&&G(s),y?y.length:0},Ae=function(s){var h=s.target.value,b=ce(l({value:h},te));if(b==="-"||b===d||!b){z(""),M&&M(s);return}var R=$e(b,d,I),w=ze(R,d,m!==void 0?m:I),p=d?w.replace(d,"."):w,W=parseFloat(p),ae=J(l(l({},q),{value:w}));O&&Ee&&O(w,o,{float:W,formatted:ae,value:w}),z(ae),M&&M(s)},Ke=function(s){var h=s.key;if(De(h),k&&(h==="ArrowUp"||h==="ArrowDown")){s.preventDefault(),oe(y.length);var b=S!=null?String(S):void 0,R=d&&b?b.replace(d,"."):b,w=parseFloat(R??ce(l({value:y},te)))||0,p=h==="ArrowUp"?w+k:w-k;if(Q!==void 0&&p<Number(Q)||!t&&p<0||X!==void 0&&p>Number(X))return;var W=String(k).includes(".")?Number(String(k).split(".")[1].length):void 0;be(String(W?p.toFixed(W):p).replace(".",d))}ee&&ee(s)},Pe=function(s){var h=s.key,b=s.currentTarget.selectionStart;if(h!=="ArrowUp"&&h!=="ArrowDown"&&y!=="-"){var R=xe(y,{groupSeparator:T,decimalSeparator:d});if(R&&b&&b>y.length-R.length&&A.current){var w=y.length-R.length;A.current.setSelectionRange(w,w)}}$&&$(s)};N.useEffect(function(){S==null&&v==null&&z("")},[v,S]),N.useEffect(function(){ue&&y!=="-"&&A.current&&document.activeElement===A.current&&A.current.setSelectionRange(ie,ie)},[y,ie,A,ue,ge]);var Ie=function(){return S!=null&&y!=="-"&&(!d||y!==d)?J(l(l({},q),{decimalScale:ue?void 0:m,value:String(S)})):y},ye=l({type:"text",inputMode:"decimal",id:i,name:o,className:c,onChange:Fe,onBlur:Ae,onFocus:ke,onKeyDown:Ke,onKeyUp:Pe,placeholder:f,disabled:K,value:Ie(),ref:A},Re);if(D){var je=D;return he.createElement(je,l({},ye))}return he.createElement("input",l({},ye))});Qe.displayName="CurrencyInput";export{Qe as C,J as f};
