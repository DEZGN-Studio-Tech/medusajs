import{u as j}from"./chunk-6CNRNROJ-BaiPc2gK.js";import{C as _}from"./chunk-3LLQ6F7F-D8feSniG.js";import{K as P}from"./chunk-6HTZNHPT-CPBc_3HF.js";import{b as r,u as b}from"./chunk-AYRG2MQL-mMRU5BNu.js";import{P as y}from"./chunk-B3XEMIUY-Cu96nNOF.js";import{a1 as S,a3 as C,R as v,b as f,Q as F,j as e,H as E,a8 as w,a9 as T,U as V,t as h,r as D,w as n,B as u,s as L}from"./index-3TwjZzBg.js";import"./x-mark-mini-bh-sIjjf.js";import"./triangles-mini-C3Kd2_nW.js";import"./plus-mini-C3O8ZmgT.js";import"./prompt-DZ9zz8hi.js";var N=S({shipping_profile_id:C()}),R=({product:l})=>{var d;const{t:o}=f(),{handleSuccess:p}=b(),t=j({queryKey:["shipping_profiles"],queryFn:s=>L.admin.shippingProfile.list(s),getOptions:s=>s.shipping_profiles.map(a=>({label:a.name,value:a.id}))}),i=w({defaultValues:{shipping_profile_id:((d=l.shipping_profile)==null?void 0:d.id)??""},resolver:T(N)}),c=i.watch("shipping_profile_id"),{mutateAsync:m,isPending:x}=V(l.id),g=i.handleSubmit(async s=>{await m({shipping_profile_id:s.shipping_profile_id===""?null:s.shipping_profile_id},{onSuccess:({product:a})=>{h.success(o("products.shippingProfile.edit.toasts.success",{title:a.title})),p()},onError:a=>{h.error(a.message)}})});return D.useEffect(()=>{typeof c>"u"&&i.setValue("shipping_profile_id","")},[c]),e.jsx(r.Form,{form:i,children:e.jsxs(P,{onSubmit:g,className:"flex h-full flex-col",children:[e.jsx(r.Body,{children:e.jsx("div",{className:"flex h-full flex-col gap-y-4",children:e.jsx(n.Field,{control:i.control,name:"shipping_profile_id",render:({field:s})=>e.jsxs(n.Item,{children:[e.jsx(n.Label,{children:o("products.fields.shipping_profile.label")}),e.jsx(n.Control,{children:e.jsx(_,{...s,allowClear:!0,options:t.options,searchValue:t.searchValue,onSearchValueChange:t.onSearchValueChange,fetchNextPage:t.fetchNextPage})}),e.jsx(n.ErrorMessage,{})]})})})}),e.jsx(r.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(r.Close,{asChild:!0,children:e.jsx(u,{size:"small",variant:"secondary",children:o("actions.cancel")})}),e.jsx(u,{size:"small",type:"submit",isLoading:x,children:o("actions.save")})]})})]})})},k=()=>{const{id:l}=v(),{t:o}=f(),{product:p,isLoading:t,isError:i,error:c}=F(l,{fields:y});if(i)throw c;return e.jsxs(r,{children:[e.jsx(r.Header,{children:e.jsx(r.Title,{asChild:!0,children:e.jsx(E,{children:o("products.shippingProfile.edit.header")})})}),!t&&p&&e.jsx(R,{product:p})]})};export{k as Component};
