import{C as b}from"./chunk-MW4K5NNY-BbV7r0L0.js";import{K as y}from"./chunk-6HTZNHPT-CPBc_3HF.js";import{b as h,u as I}from"./chunk-AYRG2MQL-mMRU5BNu.js";import{a5 as a,R as F,b as v,dW as w,j as e,H as C,a8 as E,a9 as _,e0 as L,t as p,w as r,x as u,B as f}from"./index-3TwjZzBg.js";import"./triangles-mini-C3Kd2_nW.js";import"./prompt-DZ9zz8hi.js";var M=a.object({height:a.number().positive().optional(),width:a.number().positive().optional(),length:a.number().positive().optional(),weight:a.number().positive().optional(),mid_code:a.string().optional(),hs_code:a.string().optional(),origin_country:a.string().optional()}),S=t=>({height:t.height??void 0,width:t.width??void 0,length:t.length??void 0,weight:t.weight??void 0,mid_code:t.mid_code??void 0,hs_code:t.hs_code??void 0,origin_country:t.origin_country??void 0}),A=({item:t})=>{const{t:s}=v(),{handleSuccess:x}=I(),o=E({defaultValues:S(t),resolver:_(M)}),{mutateAsync:m,isPending:j}=L(t.id),g=o.handleSubmit(async n=>{await m(n,{onSuccess:()=>{p.success(s("inventory.toast.updateItem")),x()},onError:l=>p.error(l.message)})});return e.jsx(h.Form,{form:o,children:e.jsxs(y,{onSubmit:g,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsxs(h.Body,{className:"flex flex-1 flex-col gap-y-4 overflow-auto",children:[e.jsx(r.Field,{control:o.control,name:"height",render:({field:{onChange:n,value:l,...d}})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:s("fields.height")}),e.jsx(r.Control,{children:e.jsx(u,{type:"number",min:0,value:l||"",onChange:c=>{const i=c.target.value;n(i===""?null:parseFloat(i))},...d})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:o.control,name:"width",render:({field:{onChange:n,value:l,...d}})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:s("fields.width")}),e.jsx(r.Control,{children:e.jsx(u,{type:"number",min:0,value:l||"",onChange:c=>{const i=c.target.value;n(i===""?null:parseFloat(i))},...d})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:o.control,name:"length",render:({field:{onChange:n,value:l,...d}})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:s("fields.length")}),e.jsx(r.Control,{children:e.jsx(u,{type:"number",min:0,value:l||"",onChange:c=>{const i=c.target.value;n(i===""?null:parseFloat(i))},...d})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:o.control,name:"weight",render:({field:{onChange:n,value:l,...d}})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:s("fields.weight")}),e.jsx(r.Control,{children:e.jsx(u,{type:"number",min:0,value:l||"",onChange:c=>{const i=c.target.value;n(i===""?null:parseFloat(i))},...d})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:o.control,name:"mid_code",render:({field:n})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:s("fields.midCode")}),e.jsx(r.Control,{children:e.jsx(u,{...n})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:o.control,name:"hs_code",render:({field:n})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:s("fields.hsCode")}),e.jsx(r.Control,{children:e.jsx(u,{...n})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:o.control,name:"origin_country",render:({field:n})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:s("fields.countryOfOrigin")}),e.jsx(r.Control,{children:e.jsx(b,{...n})}),e.jsx(r.ErrorMessage,{})]})})]}),e.jsx(h.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(h.Close,{asChild:!0,children:e.jsx(f,{variant:"secondary",size:"small",children:s("actions.cancel")})}),e.jsx(f,{type:"submit",size:"small",isLoading:j,children:s("actions.save")})]})})]})})},D=()=>{const{id:t}=F(),{t:s}=v(),{inventory_item:x,isPending:o,isError:m,error:j}=w(t),g=!o&&x;if(m)throw j;return e.jsxs(h,{children:[e.jsx(h.Header,{children:e.jsx(C,{children:s("products.editAttributes")})}),g&&e.jsx(A,{item:x})]})};export{D as Component};
