import{a as W}from"./chunk-6CNRNROJ-BaiPc2gK.js";import{r,b as B,ag as K,j as t,m as p,T as w,ah as V,D as X,ai as G,aj as $,ak as J}from"./index-3TwjZzBg.js";import{X as Q}from"./x-mark-mini-bh-sIjjf.js";import{T as Y}from"./triangles-mini-C3Kd2_nW.js";import{T as Z}from"./Trans-fSIB5GrC.js";import{R as ee,A as te,C as ne}from"./index-DoM0XQLc.js";var se=8,ae=28,re=r.forwardRef(({value:s,onChange:i,className:b,...z},E)=>{const m=r.useRef(null);r.useImperativeHandle(E,()=>m.current,[]);const[g,I]=r.useState(!1),{i18n:A,t:T}=B(),[o,x]=r.useState([]),{searchValue:l,onSearchValueChange:k,query:j}=W(),{product_categories:M,isPending:D,isError:R,error:O}=K({q:j,parent_category_id:l?void 0:ie(o),include_descendants_tree:!l},{enabled:g}),[y,L]=r.useState(!1);r.useEffect(()=>{let e;return D?L(!0):e=setTimeout(()=>{L(!1)},150),()=>{clearTimeout(e)}},[D]),r.useEffect(()=>{l&&x([])},[l]);function P(e){var n;e.preventDefault(),e.stopPropagation(),x(o.slice(0,o.length-1)),(n=m.current)==null||n.focus()}function U(e){return n=>{var h;n.preventDefault(),n.stopPropagation(),x([...o,{id:e.value,label:e.label}]),(h=m.current)==null||h.focus()}}const N=r.useCallback(e=>n=>{var h;n.preventDefault(),n.stopPropagation(),S(s,e.value)?i(s.filter(a=>a!==e.value)):i([...s,e.value]),(h=m.current)==null||h.focus()},[s,i]);function v(e){e||(k(""),x([])),e&&requestAnimationFrame(()=>{var n;(n=m.current)==null||n.focus()}),I(e)}const d=le(M||[]),C=s.length>0,q=!g&&s.length>0,F=r.useMemo(()=>{const n=s.length.toString().length;return ae+n*se},[s]),u=!l&&o.length>0,[c,f]=r.useState(-1),_=r.useCallback(e=>{var h;if(!g)return;const n=u?d.length+1:d.length;if(e.key==="ArrowDown")e.preventDefault(),f(a=>a<n-1?a+1:a);else if(e.key==="ArrowUp")e.preventDefault(),f(a=>a>0?a-1:a);else if(e.key==="ArrowRight"){const a=u?c-1:c;if(!((h=d[a])==null?void 0:h.has_children)||l)return;e.preventDefault(),x([...o,{id:d[a].value,label:d[a].label}]),f(0)}else if(e.key==="Enter"&&c!==-1){if(e.preventDefault(),u&&c===0){x(o.slice(0,o.length-1)),f(0);return}const a=u?c-1:c;N(d[a])(e)}},[g,c,d,o,N,l,u]);if(r.useEffect(()=>(window.addEventListener("keydown",_),()=>{window.removeEventListener("keydown",_)}),[_]),R)throw O;return t.jsxs(ee,{open:g,onOpenChange:v,children:[t.jsx(te,{asChild:!0,onClick:()=>{g||v(!0)},children:t.jsxs("div",{"data-anchor":!0,className:p("relative flex cursor-pointer items-center gap-x-2 overflow-hidden","h-8 w-full rounded-md","bg-ui-bg-field transition-fg shadow-borders-base","has-[input:focus]:shadow-borders-interactive-with-active","has-[:invalid]:shadow-borders-error has-[[aria-invalid=true]]:shadow-borders-error","has-[:disabled]:bg-ui-bg-disabled has-[:disabled]:text-ui-fg-disabled has-[:disabled]:cursor-not-allowed",{"shadow-borders-interactive-with-active":g},b),style:{"--tag-width":`${F}px`},children:[C&&t.jsxs("button",{type:"button",onClick:e=>{e.preventDefault(),i([])},className:"bg-ui-bg-base hover:bg-ui-bg-base-hover txt-compact-small-plus text-ui-fg-subtle focus-within:border-ui-fg-interactive transition-fg absolute left-0.5 top-0.5 flex h-[28px] items-center rounded-[4px] border py-[3px] pl-1.5 pr-1 outline-none",children:[t.jsx("span",{className:"tabular-nums",children:s.length}),t.jsx(Q,{className:"text-ui-fg-muted"})]}),q&&t.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-[calc(var(--tag-width)+8px)] flex size-full items-center",children:t.jsx(w,{size:"small",leading:"compact",children:T("general.selected")})}),t.jsx("input",{ref:m,value:l,onChange:e=>{k(e.target.value)},className:p("txt-compact-small size-full cursor-pointer appearance-none bg-transparent pr-8 outline-none","hover:bg-ui-bg-field-hover","focus:cursor-text","placeholder:text-ui-fg-muted",{"pl-2":!C,"pl-[calc(var(--tag-width)+8px)]":C}),...z}),t.jsx("button",{type:"button",onClick:()=>v(!0),className:"text-ui-fg-muted transition-fg hover:bg-ui-bg-field-hover absolute right-0 flex size-8 items-center justify-center rounded-r outline-none",children:t.jsx(Y,{className:"text-ui-fg-muted"})})]})}),t.jsxs(ne,{sideOffset:4,role:"listbox",className:p("shadow-elevation-flyout bg-ui-bg-base -left-2 z-50 w-[var(--radix-popper-anchor-width)] rounded-[8px]","max-h-[200px] overflow-y-auto","data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95","data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95","data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"),onInteractOutside:e=>{e.preventDefault(),!e.target.closest("[data-anchor]")&&v(!1)},children:[u&&t.jsxs(r.Fragment,{children:[t.jsx("div",{className:"p-1",children:t.jsxs("button",{"data-active":c===0,role:"button",className:p("transition-fg grid w-full appearance-none grid-cols-[20px_1fr] items-center justify-center gap-2 rounded-md px-2 py-1.5 text-left outline-none","data-[active=true]:bg-ui-bg-field-hover"),type:"button",onClick:P,onMouseEnter:()=>f(0),onMouseLeave:()=>f(-1),tabIndex:-1,children:[t.jsx(V,{className:"text-ui-fg-muted"}),t.jsx(w,{size:"small",leading:"compact",children:oe(o)})]})}),t.jsx(X,{})]}),t.jsxs("div",{className:"p-1",children:[d.length>0&&!y&&d.map((e,n)=>t.jsxs("div",{className:p("transition-fg bg-ui-bg-base grid cursor-pointer grid-cols-1 items-center gap-2 overflow-hidden",{"grid-cols-[1fr_32px]":e.has_children&&!l}),children:[t.jsxs("button",{"data-active":u?c===n+1:c===n,type:"button",role:"option",className:p("grid h-full w-full appearance-none grid-cols-[20px_1fr] items-center gap-2 overflow-hidden rounded-md px-2 py-1.5 text-left outline-none","data-[active=true]:bg-ui-bg-field-hover"),onClick:N(e),onMouseEnter:()=>f(u?n+1:n),onMouseLeave:()=>f(-1),tabIndex:-1,children:[t.jsx("div",{className:"flex size-5 items-center justify-center",children:S(s,e.value)&&t.jsx(G,{})}),t.jsx(w,{as:"span",size:"small",leading:"compact",className:"w-full truncate",children:e.label})]}),e.has_children&&!l&&t.jsx("button",{className:p("text-ui-fg-muted flex size-8 appearance-none items-center justify-center rounded-md outline-none","hover:bg-ui-bg-base-hover active:bg-ui-bg-base-pressed"),type:"button",onClick:U(e),tabIndex:-1,children:t.jsx($,{})})]},e.value)),y&&Array.from({length:5}).map((e,n)=>t.jsxs("div",{className:"grid grid-cols-[20px_1fr_20px] gap-2 px-2 py-1.5",children:[t.jsx("div",{}),t.jsx(J,{size:"small",leading:"compact"}),t.jsx("div",{})]},n)),d.length===0&&!y&&t.jsx("div",{className:"px-2 py-1.5",children:t.jsx(w,{size:"small",leading:"compact",children:j?t.jsx(Z,{i18n:A,i18nKey:"general.noResultsTitle",tOptions:{query:j},components:[t.jsx("span",{className:"font-medium"},"query")]}):T("general.noResultsTitle")})})]})]})]})});re.displayName="CategoryCombobox";function ie(s){return s.length?s[s.length-1].id:"null"}function oe(s){return s.length?s[s.length-1].label:null}function le(s){return s.map(i=>{var b;return{value:i.id,label:i.name,has_children:((b=i.category_children)==null?void 0:b.length)>0}})}function S(s,i){return s.includes(i)}export{re as C};
