import{u as q,a as M,b as H}from"./chunk-ZJRFL6ZN-CE8__ic_.js";import{u as Q,a as $,b as J}from"./chunk-3OJ4LCJL-DebhewBk.js";import{ba as R,j as e,R as K,d as U,a as X,du as Y,q as Z,b as h,u as W,dJ as V,H as w,A as T,T as u,r as _,dB as ee,k as G,dK as se,bn as i,L as te,B as re,aR as ae,p as oe,s as ie,t as f,dL as ne}from"./index-3TwjZzBg.js";import{u as N,_ as O}from"./chunk-X3LH6P65-Btkv0AYL.js";import"./lodash-DX4RA4fA.js";import"./chunk-TMAS4ILY-s6Q1yrhJ.js";import{S as ce}from"./chunk-2RQLKDBF-fuZW0wpJ.js";import{u as k}from"./use-prompt-CA4RogzL.js";import{P as z}from"./pencil-square-Czhs4i4M.js";import{T as B}from"./trash-h8c7x3oc.js";import{A as le}from"./arrow-path-B6Ttlfw4.js";import{C as A}from"./container-BA5vwixE.js";import{S as de}from"./status-badge-GMLcCPL1.js";import{C as E}from"./checkbox-CzmZkMwa.js";import{c as I}from"./index-DaxSIiAy.js";import"./chunk-C76H5USB-CjT44BNF.js";import"./chunk-MSDRGCRR-CyFJh2x6.js";import"./chunk-P3UUX2T6-CCJNm3Vl.js";import"./chunk-B4FQDBC3-DAZ8A8dh.js";import"./format-5cF-El6b.js";import"./chunk-NNBHHXXN-CuWZfXIT.js";import"./chunk-PDWBYQOW-BedvhUOI.js";import"./chunk-MWVM4TYO-bKUcYSnf.js";import"./chunk-7DXVXBSA-CCclXhoB.js";import"./chunk-ADOCJB6L-BqPWwiOO.js";import"./react-country-flag.esm-D6Szrndd.js";import"./chunk-YEDAFXMB-CMQ5Pcrt.js";import"./chunk-AOFGTNG6-BbVNTsNA.js";import"./table-DDJ49Ynr.js";import"./chunk-WX2SMNCD-C9MLG2ae.js";import"./plus-mini-C3O8ZmgT.js";import"./command-bar-DLFavFOM.js";import"./index-DoM0XQLc.js";import"./chunk-DV5RB7II-Cpu9FkjR.js";import"./_isIndex-DxA6ijc5.js";import"./x-mark-mini-bh-sIjjf.js";import"./date-picker-DqwqyhY7.js";import"./popover-CFQzNc4W.js";import"./triangle-left-mini-BLsjNbpU.js";import"./index-BRadGGcg.js";import"./Trans-fSIB5GrC.js";import"./check-CuJX17N8.js";import"./prompt-DZ9zz8hi.js";var us=s=>{const{id:t}=s.params||{},{customer:r}=R(t,void 0,{initialData:s.data,enabled:!!t});if(!r)return null;const n=[r.first_name,r.last_name].filter(Boolean).join(" ")||r.email;return e.jsx("span",{children:n})},me=({customer:s})=>{const{t}=h(),r=k(),a=W(),{mutateAsync:n}=V(s.id),l=[s.first_name,s.last_name].filter(Boolean).join(" "),o=s.has_account?"green":"orange",d=s.has_account?t("customers.fields.registered"):t("customers.fields.guest"),p=async()=>{await r({title:t("customers.delete.title"),description:t("customers.delete.description",{email:s.email}),verificationInstruction:t("general.typeToConfirm"),verificationText:s.email,confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await n(void 0,{onSuccess:()=>{f.success(t("customers.delete.successToast",{email:s.email})),a("/customers",{replace:!0})},onError:x=>{f.error(x.message)}})};return e.jsxs(A,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(w,{children:s.email}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(de,{color:o,children:d}),e.jsx(T,{groups:[{actions:[{label:t("actions.edit"),icon:e.jsx(z,{}),to:"edit"}]},{actions:[{label:t("actions.delete"),icon:e.jsx(B,{}),onClick:p}]}]})]})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(u,{size:"small",leading:"compact",weight:"plus",children:t("fields.name")}),e.jsx(u,{size:"small",leading:"compact",children:l||"-"})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(u,{size:"small",leading:"compact",weight:"plus",children:t("fields.company")}),e.jsx(u,{size:"small",leading:"compact",children:s.company_name||"-"})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(u,{size:"small",leading:"compact",weight:"plus",children:t("fields.phone")}),e.jsx(u,{size:"small",leading:"compact",children:s.phone||"-"})]})]})},v=10,b="cusgr",ue=({customer:s})=>{const t=k(),[r,a]=_.useState({}),{raw:n,searchParams:l}=q({pageSize:v,prefix:b}),{customer_groups:o,count:d,isLoading:p,isError:g,error:x}=ee({...l,fields:"+customers.id",customers:{id:s.id}},{placeholderData:G}),{mutateAsync:y}=se(s.id),j=M(),P=ge(s.id),{table:L}=N({data:o??[],columns:P,count:d,getRowId:m=>m.id,enablePagination:!0,enableRowSelection:!0,pageSize:v,prefix:b,rowSelection:{state:r,updater:a}}),F=async()=>{const m=Object.keys(r);await t({title:i("general.areYouSure"),description:i("customers.groups.removeMany",{groups:o==null?void 0:o.filter(c=>m.includes(c.id)).map(c=>c.name).join(",")}),confirmText:i("actions.remove"),cancelText:i("actions.cancel")})&&await y({remove:m},{onSuccess:()=>{f.success(i("customers.groups.removed.success",{groups:o.filter(c=>m.includes(c.id)).map(c=>c==null?void 0:c.name)}))},onError:c=>{f.error(c.message)}})};if(g)throw x;return e.jsxs(A,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(w,{level:"h2",children:i("customerGroups.domain")}),e.jsx(te,{to:`/customers/${s.id}/add-customer-groups`,children:e.jsx(re,{variant:"secondary",size:"small",children:i("general.add")})})]}),e.jsx(O,{table:L,columns:P,pageSize:v,isLoading:p,count:d,prefix:b,navigateTo:m=>`/customer-groups/${m.id}`,filters:j,search:!0,pagination:!0,orderBy:[{key:"name",label:i("fields.name")},{key:"created_at",label:i("fields.createdAt")},{key:"updated_at",label:i("fields.updatedAt")}],commands:[{action:F,label:i("actions.remove"),shortcut:"r"}],queryObject:n,noRecords:{message:i("customers.groups.list.noRecordsMessage")}})]})},pe=({group:s,customerId:t})=>{const r=k(),{t:a}=h(),{mutateAsync:n}=ne(s.id),l=async()=>{await r({title:a("general.areYouSure"),description:a("customers.groups.remove",{name:s.name}),confirmText:a("actions.remove"),cancelText:a("actions.cancel")})&&await n([t],{onError:d=>{f.error(d.message)}})};return e.jsx(T,{groups:[{actions:[{label:a("actions.edit"),icon:e.jsx(z,{}),to:`/customer-groups/${s.id}/edit`},{label:a("actions.remove"),onClick:l,icon:e.jsx(B,{})}]}]})},D=I(),ge=s=>{const t=H();return _.useMemo(()=>[D.display({id:"select",header:({table:r})=>e.jsx(E,{checked:r.getIsSomePageRowsSelected()?"indeterminate":r.getIsAllPageRowsSelected(),onCheckedChange:a=>r.toggleAllPageRowsSelected(!!a)}),cell:({row:r})=>e.jsx(E,{checked:r.getIsSelected(),onCheckedChange:a=>r.toggleSelected(!!a),onClick:a=>{a.stopPropagation()}})}),...t,D.display({id:"actions",cell:({row:r})=>e.jsx(pe,{group:r.original,customerId:s})})],[t,s])},C="cusord",S=10,xe="*customer,*items,*sales_channel",fe="id,status,display_id,created_at,email,fulfillment_status,payment_status,total,currency_code",he=({customer:s})=>{const{t}=h(),{searchParams:r,raw:a}=Q({pageSize:S,prefix:C}),{orders:n,count:l,isLoading:o,isError:d,error:p}=ae({customer_id:s.id,fields:fe+","+xe,...r},{placeholderData:G}),g=ve(),x=$(),{table:y}=N({data:n??[],columns:g,enablePagination:!0,count:l,pageSize:S,prefix:C});if(d)throw p;return e.jsxs(A,{className:"divide-y p-0",children:[e.jsx("div",{className:"flex items-center justify-between px-6 py-4",children:e.jsx(w,{level:"h2",children:t("orders.domain")})}),e.jsx(O,{columns:g,table:y,pagination:!0,navigateTo:j=>`/orders/${j.original.id}`,filters:x,count:l,isLoading:o,pageSize:S,orderBy:[{key:"display_id",label:t("orders.fields.displayId")},{key:"created_at",label:t("fields.createdAt")},{key:"updated_at",label:t("fields.updatedAt")}],search:!0,queryObject:a,prefix:C})]})},ye=({order:s})=>{const{t}=h();return e.jsx(T,{groups:[{actions:[{label:t("transferOwnership.label"),to:`${s.id}/transfer`,icon:e.jsx(le,{})}]}]})},je=I(),ve=()=>{const s=J({exclude:["customer"]});return _.useMemo(()=>[...s,je.display({id:"actions",cell:({row:t})=>e.jsx(ye,{order:t.original})})],[s])},ps=()=>{const{id:s}=K(),t=U(),{customer:r,isLoading:a,isError:n,error:l}=R(s,void 0,{initialData:t}),{getWidgets:o}=X();if(a||!r)return e.jsx(Y,{sections:2,showJSON:!0,showMetadata:!0});if(n)throw l;return e.jsxs(ce,{widgets:{before:o("customer.details.before"),after:o("customer.details.after")},data:r,hasOutlet:!0,showJSON:!0,showMetadata:!0,children:[e.jsx(me,{customer:r}),e.jsx(he,{customer:r}),e.jsx(ue,{customer:r})]})},be=s=>({queryKey:oe.detail(s),queryFn:async()=>ie.admin.customer.retrieve(s)}),gs=async({params:s})=>{const t=s.id,r=be(t);return Z.ensureQueryData(r)};export{us as Breadcrumb,ps as Component,gs as loader};
