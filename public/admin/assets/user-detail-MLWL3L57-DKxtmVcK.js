import{S as m}from"./chunk-2RQLKDBF-fuZW0wpJ.js";import{cR as d,j as a,q as p,d as f,R as x,a as g,du as y,p as j,s as h,b as v,u as b,eg as S,H as w,A as D,T as l,t as c}from"./index-3TwjZzBg.js";import{u as T}from"./use-prompt-CA4RogzL.js";import{P as C}from"./pencil-square-Czhs4i4M.js";import{T as U}from"./trash-h8c7x3oc.js";import{C as P}from"./container-BA5vwixE.js";import"./Trans-fSIB5GrC.js";import"./x-mark-mini-bh-sIjjf.js";import"./check-CuJX17N8.js";import"./prompt-DZ9zz8hi.js";var J=e=>{const{id:s}=e.params||{},{user:t}=d(s,void 0,{initialData:e.data,enabled:!!s});if(!t)return null;const r=[t.first_name,t.last_name].filter(Boolean).join(" ")||t.email;return a.jsx("span",{children:r})},q=e=>({queryKey:j.detail(e),queryFn:async()=>h.admin.user.retrieve(e)}),K=async({params:e})=>{const s=e.id,t=q(s);return p.ensureQueryData(t)},N=({user:e})=>{const{t:s}=v(),t=b(),i=T(),{mutateAsync:r}=S(e.id),n=[e.first_name,e.last_name].filter(Boolean).join(" "),o=async()=>{await i({title:s("general.areYouSure"),description:s("users.deleteUserWarning",{name:n??e.email}),verificationText:n??e.email,verificationInstruction:s("general.typeToConfirm"),confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await r(void 0,{onSuccess:()=>{c.success(s("users.deleteUserSuccess",{name:e.email})),t("..")},onError:u=>{c.error(u.message)}})};return a.jsxs(P,{className:"divide-y p-0",children:[a.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[a.jsx(w,{children:e.email}),a.jsx(D,{groups:[{actions:[{label:s("actions.edit"),to:"edit",icon:a.jsx(C,{})}]},{actions:[{label:s("actions.delete"),onClick:o,icon:a.jsx(U,{})}]}]})]}),a.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[a.jsx(l,{size:"small",leading:"compact",weight:"plus",children:s("fields.name")}),a.jsx(l,{size:"small",leading:"compact",children:n??"-"})]})]})},O=()=>{const e=f(),{id:s}=x(),{user:t,isPending:i,isError:r,error:n}=d(s,void 0,{initialData:e}),{getWidgets:o}=g();if(i||!t)return a.jsx(y,{sections:1,showJSON:!0,showMetadata:!0});if(r)throw n;return a.jsx(m,{data:t,showJSON:!0,showMetadata:!0,widgets:{after:o("user.details.after"),before:o("user.details.before")},children:a.jsx(N,{user:t})})};export{J as Breadcrumb,O as Component,K as loader};
