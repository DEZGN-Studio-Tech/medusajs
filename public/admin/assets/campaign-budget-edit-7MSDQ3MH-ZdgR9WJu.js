import{g as v}from"./chunk-MWVM4TYO-bKUcYSnf.js";import{a1 as E,af as F,b as y,R as S,dl as B,j as e,H as I,a8 as T,a9 as w,dp as N,t as b,w as l,x as R,B as f}from"./index-3TwjZzBg.js";import{K as H}from"./chunk-6HTZNHPT-CPBc_3HF.js";import{b as r,u as L}from"./chunk-AYRG2MQL-mMRU5BNu.js";import{C as _}from"./currency-input-AIgrKFiS.js";import"./prompt-DZ9zz8hi.js";import"./index.esm-CKiNwtOK.js";var z=E({limit:F().min(0).optional().nullable()}),K=({campaign:s})=>{var m;const{t}=y(),{handleSuccess:d}=L(),n=T({defaultValues:{limit:((m=s==null?void 0:s.budget)==null?void 0:m.limit)||void 0},resolver:w(z)}),{mutateAsync:c,isPending:u}=N(s.id),C=n.handleSubmit(async i=>{await c({budget:{limit:i.limit?i.limit:null}},{onSuccess:({campaign:a})=>{b.success(t("campaigns.edit.successToast",{name:a.name})),d()},onError:a=>{b.error(a.message)}})});return e.jsx(r.Form,{form:n,children:e.jsxs(H,{onSubmit:C,className:"flex flex-1 flex-col",children:[e.jsx(r.Body,{children:e.jsx("div",{className:"flex flex-col gap-y-4",children:e.jsx(l.Field,{control:n.control,name:"limit",render:({field:{onChange:i,value:a,...x}})=>{var p,g,h,j;return e.jsxs(l.Item,{className:"basis-1/2",children:[e.jsx(l.Label,{children:t("campaigns.budget.fields.limit")}),e.jsx(l.Control,{children:((p=s.budget)==null?void 0:p.type)==="spend"?e.jsx(_,{min:0,onValueChange:o=>i(o?parseInt(o):null),code:(g=s.budget)==null?void 0:g.currency_code,symbol:(h=s.budget)!=null&&h.currency_code?v((j=s.budget)==null?void 0:j.currency_code):"",...x,value:a||void 0}):e.jsx(R,{min:0,...x,value:a,onChange:o=>{i(o.target.value===""?null:parseInt(o.target.value))}},"usage")}),e.jsx(l.ErrorMessage,{})]})}})})}),e.jsx(r.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(r.Close,{asChild:!0,children:e.jsx(f,{variant:"secondary",size:"small",children:t("actions.cancel")})}),e.jsx(f,{isLoading:u,type:"submit",variant:"primary",size:"small",children:t("actions.save")})]})})]})})},k=()=>{const{t:s}=y(),{id:t}=S(),{campaign:d,isLoading:n,isError:c,error:u}=B(t);if(c)throw u;return e.jsxs(r,{children:[e.jsx(r.Header,{children:e.jsx(r.Title,{asChild:!0,children:e.jsx(I,{children:s("campaigns.budget.edit.header")})})}),!n&&d&&e.jsx(K,{campaign:d})]})};export{k as Component};
