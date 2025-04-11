import{a5 as i,R as f,b as p,fh as b,j as e,H as R,a8 as v,a9 as g,fi as y,t as m,w as s,x as h,B as j}from"./index-3TwjZzBg.js";import{K as E}from"./chunk-6HTZNHPT-CPBc_3HF.js";import{b as n,u as F}from"./chunk-AYRG2MQL-mMRU5BNu.js";import{T as C}from"./textarea-CM_3_w2I.js";import"./prompt-DZ9zz8hi.js";var w=i.object({value:i.string().min(1),label:i.string().min(1),description:i.string().optional()}),S=({returnReason:o})=>{const{t:r}=p(),{handleSuccess:t}=F(),l=v({defaultValues:{value:o.value,label:o.label,description:o.description??void 0},resolver:g(w)}),{mutateAsync:d,isPending:c}=y(o.id),u=l.handleSubmit(async a=>{await d(a,{onSuccess:({return_reason:x})=>{m.success(r("returnReasons.edit.successToast",{label:x.label})),t()},onError:x=>{m.error(x.message)}})});return e.jsx(n.Form,{form:l,children:e.jsxs(E,{className:"flex size-full flex-col overflow-hidden",onSubmit:u,children:[e.jsxs(n.Body,{className:"flex flex-1 flex-col gap-y-4 overflow-auto",children:[e.jsx(s.Field,{control:l.control,name:"value",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{tooltip:r("returnReasons.fields.value.tooltip"),children:r("returnReasons.fields.value.label")}),e.jsx(s.Control,{children:e.jsx(h,{...a,placeholder:r("returnReasons.fields.value.placeholder")})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:l.control,name:"label",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:r("returnReasons.fields.label.label")}),e.jsx(s.Control,{children:e.jsx(h,{...a,placeholder:r("returnReasons.fields.label.placeholder")})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:l.control,name:"description",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:r("returnReasons.fields.description.label")}),e.jsx(s.Control,{children:e.jsx(C,{...a,placeholder:r("returnReasons.fields.description.placeholder")})}),e.jsx(s.ErrorMessage,{})]})})]}),e.jsx(n.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(n.Close,{asChild:!0,children:e.jsx(j,{variant:"secondary",size:"small",type:"button",children:r("actions.cancel")})}),e.jsx(j,{size:"small",type:"submit",isLoading:c,children:r("actions.save")})]})})]})})},N=()=>{const{id:o}=f(),{t:r}=p(),{return_reason:t,isPending:l,isError:d,error:c}=b(o),u=!l&&!!t;if(d)throw c;return e.jsxs(n,{children:[e.jsxs(n.Header,{children:[e.jsx(n.Title,{asChild:!0,children:e.jsx(R,{children:r("returnReasons.edit.header")})}),e.jsx(n.Description,{className:"sr-only",children:r("returnReasons.edit.subtitle")})]}),u&&e.jsx(S,{returnReason:t})]})};export{N as Component};
