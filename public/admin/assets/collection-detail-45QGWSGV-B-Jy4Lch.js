import{u as _}from"./chunk-G3QXMPRB-CNl9ISUG.js";import{dt as j,j as o,d as q,R as I,a as z,du as M,q as W,b as p,u as B,dr as H,H as b,A as g,T as f,e as L,k as O,dv as C,W as Q,r as Y,dw as $,s as F,t as d}from"./index-3TwjZzBg.js";import{u as G,_ as J}from"./chunk-X3LH6P65-Btkv0AYL.js";import"./lodash-DX4RA4fA.js";import{u as K,a as U}from"./chunk-IPEN5VX6-gPbm08VW.js";import"./chunk-TMAS4ILY-s6Q1yrhJ.js";import{S as Z}from"./chunk-2RQLKDBF-fuZW0wpJ.js";import{u as x}from"./use-prompt-CA4RogzL.js";import{P as S}from"./pencil-square-Czhs4i4M.js";import{T as P}from"./trash-h8c7x3oc.js";import{C as w}from"./container-BA5vwixE.js";import{C as v}from"./checkbox-CzmZkMwa.js";import{c as V}from"./index-DaxSIiAy.js";import"./chunk-IQBAUTU5-CGI0W2nv.js";import"./chunk-ADOCJB6L-BqPWwiOO.js";import"./chunk-P3UUX2T6-CCJNm3Vl.js";import"./chunk-YEDAFXMB-CMQ5Pcrt.js";import"./chunk-AOFGTNG6-BbVNTsNA.js";import"./table-DDJ49Ynr.js";import"./chunk-WX2SMNCD-C9MLG2ae.js";import"./plus-mini-C3O8ZmgT.js";import"./command-bar-DLFavFOM.js";import"./index-DoM0XQLc.js";import"./chunk-C76H5USB-CjT44BNF.js";import"./chunk-DV5RB7II-Cpu9FkjR.js";import"./format-5cF-El6b.js";import"./_isIndex-DxA6ijc5.js";import"./x-mark-mini-bh-sIjjf.js";import"./date-picker-DqwqyhY7.js";import"./popover-CFQzNc4W.js";import"./triangle-left-mini-BLsjNbpU.js";import"./index-BRadGGcg.js";import"./Trans-fSIB5GrC.js";import"./check-CuJX17N8.js";import"./prompt-DZ9zz8hi.js";var He=s=>{const{id:e}=s.params||{},{collection:t}=j(e,{initialData:s.data,enabled:!!e});return t?o.jsx("span",{children:t.title}):null},X=({collection:s})=>{const{t:e}=p(),t=x(),r=B(),{mutateAsync:i}=H(s.id),a=async()=>{await t({title:e("general.areYouSure"),description:e("collections.deleteWarning",{count:1,title:s.title})})&&(await i(),r("../",{replace:!0}))};return o.jsxs(w,{className:"divide-y p-0",children:[o.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[o.jsx(b,{children:s.title}),o.jsx(g,{groups:[{actions:[{icon:o.jsx(S,{}),label:e("actions.edit"),to:`/collections/${s.id}/edit`,disabled:!s.id}]},{actions:[{icon:o.jsx(P,{}),label:e("actions.delete"),onClick:a,disabled:!s.id}]}]})]}),o.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[o.jsx(f,{size:"small",leading:"compact",weight:"plus",children:e("fields.handle")}),o.jsxs(f,{size:"small",children:["/",s.handle]})]})]})},l=10,ee=({collection:s})=>{const{t:e}=p(),{searchParams:t,raw:r}=K({pageSize:l}),{products:i,count:a,isLoading:n,isError:u,error:T}=L({limit:l,...t,collection_id:[s.id]},{placeholderData:O}),k=U(["collections"]),h=se(),{table:D}=G({data:i??[],columns:h,getRowId:c=>c.id,count:a,enablePagination:!0,enableRowSelection:!0,pageSize:l,meta:{collectionId:s.id}}),A=x(),{mutateAsync:R}=C(s.id),E=async c=>{const m=Object.keys(c);await A({title:e("general.areYouSure"),description:e("collections.removeProductsWarning",{count:m.length}),confirmText:e("actions.remove"),cancelText:e("actions.cancel")})&&await R({remove:m},{onSuccess:()=>{d.success(e("collections.products.remove.successToast",{count:m.length}))},onError:N=>{d.error(N.message)}})};if(u)throw T;return o.jsxs(w,{className:"divide-y p-0",children:[o.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[o.jsx(b,{level:"h2",children:e("products.domain")}),o.jsx(g,{groups:[{actions:[{icon:o.jsx(Q,{}),label:e("actions.add"),to:"products"}]}]})]}),o.jsx(J,{table:D,columns:h,search:!0,pagination:!0,pageSize:l,navigateTo:({original:c})=>`/products/${c.id}`,count:a,filters:k,isLoading:n,orderBy:[{key:"title",label:e("fields.title")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],queryObject:r,commands:[{action:E,label:e("actions.remove"),shortcut:"r"}],noRecords:{message:e("collections.products.list.noRecordsMessage")}})]})},te=({product:s,collectionId:e})=>{const{t}=p(),r=x(),{mutateAsync:i}=C(e),a=async()=>{await r({title:t("general.areYouSure"),description:t("collections.removeSingleProductWarning",{title:s.title}),confirmText:t("actions.remove"),cancelText:t("actions.cancel")})&&await i({remove:[s.id]},{onSuccess:()=>{d.success(t("collections.products.remove.successToast",{count:1}))},onError:u=>{d.error(u.message)}})};return o.jsx(g,{groups:[{actions:[{icon:o.jsx(S,{}),label:t("actions.edit"),to:`/products/${s.id}/edit`}]},{actions:[{icon:o.jsx(P,{}),label:t("actions.remove"),onClick:a}]}]})},y=V(),se=()=>{const s=_();return Y.useMemo(()=>[y.display({id:"select",header:({table:e})=>o.jsx(v,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:t=>e.toggleAllPageRowsSelected(!!t)}),cell:({row:e})=>o.jsx(v,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),onClick:t=>{t.stopPropagation()}})}),...s,y.display({id:"actions",cell:({row:e,table:t})=>{const{collectionId:r}=t.options.meta;return o.jsx(te,{product:e.original,collectionId:r})}})],[s])},Le=()=>{const s=q(),{id:e}=I(),{collection:t,isLoading:r,isError:i,error:a}=j(e,{initialData:s}),{getWidgets:n}=z();if(r||!t)return o.jsx(M,{sections:2,showJSON:!0,showMetadata:!0});if(i)throw a;return o.jsxs(Z,{widgets:{after:n("product_collection.details.after"),before:n("product_collection.details.before")},showJSON:!0,showMetadata:!0,data:t,children:[o.jsx(X,{collection:t}),o.jsx(ee,{collection:t})]})},oe=s=>({queryKey:$.detail(s),queryFn:async()=>F.admin.productCollection.retrieve(s)}),Oe=async({params:s})=>{const e=s.id,t=oe(e);return W.ensureQueryData(t)};export{He as Breadcrumb,Le as Component,Oe as loader};
