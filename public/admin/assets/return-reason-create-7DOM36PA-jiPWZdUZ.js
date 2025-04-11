import{a5 as t,j as e,b as h,a8 as p,a9 as f,fg as b,t as i,H as R,T as g,w as s,x as c,B as d}from"./index-3TwjZzBg.js";import{K as v}from"./chunk-6HTZNHPT-CPBc_3HF.js";import{R as l,u as y}from"./chunk-AYRG2MQL-mMRU5BNu.js";import{T as C}from"./textarea-CM_3_w2I.js";import"./prompt-DZ9zz8hi.js";var F=t.object({value:t.string().min(1),label:t.string().min(1),description:t.string().optional()}),N=()=>{const{t:r}=h(),{handleSuccess:u}=y(),n=p({defaultValues:{value:"",label:"",description:""},resolver:f(F)}),{mutateAsync:x,isPending:m}=b(),j=n.handleSubmit(async a=>{await x(a,{onSuccess:({return_reason:o})=>{i.success(r("returnReasons.create.successToast",{label:o.label})),u("../")},onError:o=>{i.error(o.message)}})});return e.jsx(l.Form,{form:n,children:e.jsxs(v,{className:"flex size-full flex-col overflow-hidden",onSubmit:j,children:[e.jsx(l.Header,{}),e.jsx(l.Body,{className:"flex flex-1 justify-center overflow-auto px-6 py-16",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8",children:[e.jsxs("div",{className:"flex flex-col gap-y-1",children:[e.jsx(l.Title,{asChild:!0,children:e.jsx(R,{children:r("returnReasons.create.header")})}),e.jsx(l.Description,{asChild:!0,children:e.jsx(g,{size:"small",className:"text-ui-fg-subtle",children:r("returnReasons.create.subtitle")})})]}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsx(s.Field,{control:n.control,name:"value",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{tooltip:r("returnReasons.fields.value.tooltip"),children:r("returnReasons.fields.value.label")}),e.jsx(s.Control,{children:e.jsx(c,{...a,placeholder:r("returnReasons.fields.value.placeholder")})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:n.control,name:"label",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:r("returnReasons.fields.label.label")}),e.jsx(s.Control,{children:e.jsx(c,{...a,placeholder:r("returnReasons.fields.label.placeholder")})}),e.jsx(s.ErrorMessage,{})]})})]}),e.jsx(s.Field,{control:n.control,name:"description",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:r("returnReasons.fields.description.label")}),e.jsx(s.Control,{children:e.jsx(C,{...a,placeholder:r("returnReasons.fields.description.placeholder")})}),e.jsx(s.ErrorMessage,{})]})})]})}),e.jsx(l.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-2",children:[e.jsx(l.Close,{asChild:!0,children:e.jsx(d,{size:"small",variant:"secondary",type:"button",children:r("actions.cancel")})}),e.jsx(d,{size:"small",type:"submit",isLoading:m,children:r("actions.save")})]})})]})})},M=()=>e.jsx(l,{children:e.jsx(N,{})});export{M as Component};
