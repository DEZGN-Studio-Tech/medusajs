import{S as o}from"./chunk-2RQLKDBF-fuZW0wpJ.js";import{e3 as c,a as d,j as e,du as m,b as g,H as p,T as i,A as x,by as f}from"./index-3TwjZzBg.js";import{P as u}from"./pencil-square-Czhs4i4M.js";import{C as j}from"./container-BA5vwixE.js";import"./Trans-fSIB5GrC.js";import"./x-mark-mini-bh-sIjjf.js";import"./check-CuJX17N8.js";var h=({user:a})=>{var l;const{i18n:n,t:s}=g(),r=[a.first_name,a.last_name].filter(Boolean).join(" ");return e.jsxs(j,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsxs("div",{children:[e.jsx(p,{children:s("profile.domain")}),e.jsx(i,{className:"text-ui-fg-subtle",size:"small",children:s("profile.manageYourProfileDetails")})]}),e.jsx(x,{groups:[{actions:[{label:s("actions.edit"),to:"edit",icon:e.jsx(u,{})}]}]})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(i,{size:"small",leading:"compact",weight:"plus",children:s("fields.name")}),e.jsx(i,{size:"small",leading:"compact",children:r||"-"})]}),e.jsxs("div",{className:"grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(i,{size:"small",leading:"compact",weight:"plus",children:s("fields.email")}),e.jsx(i,{size:"small",leading:"compact",children:a.email})]}),e.jsxs("div",{className:"grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(i,{size:"small",leading:"compact",weight:"plus",children:s("profile.fields.languageLabel")}),e.jsx(i,{size:"small",leading:"compact",children:((l=f.find(t=>t.code===n.language))==null?void 0:l.display_name)||"-"})]})]})},S=()=>{const{user:a,isPending:n,isError:s,error:r}=c(),{getWidgets:l}=d();if(n||!a)return e.jsx(m,{sections:1});if(s)throw r;return e.jsx(o,{widgets:{after:l("profile.details.after"),before:l("profile.details.before")},children:e.jsx(h,{user:a})})};export{S as Component};
