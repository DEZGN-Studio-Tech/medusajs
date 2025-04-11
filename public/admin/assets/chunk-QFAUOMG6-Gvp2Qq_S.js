import{r as y}from"./chunk-A2MEYV4D-BKkvf94G.js";import{co as m,s,aI as d,q as a,aW as n,cT as o}from"./index-3TwjZzBg.js";var c="claims",v=o(c),K=(i,t,u)=>{const{data:e,...r}=m({queryFn:async()=>s.admin.claim.retrieve(i,t),queryKey:v.detail(i,t),...u});return{...e,...r}},Q=(i,t)=>{const{data:u,...e}=m({queryFn:async()=>s.admin.claim.list(i),queryKey:v.list(i),...t});return{...u,...e}},b=(i,t)=>d({mutationFn:u=>s.admin.claim.create(u),onSuccess:(u,e,r)=>{a.invalidateQueries({queryKey:n.details()}),a.invalidateQueries({queryKey:n.preview(i)}),a.invalidateQueries({queryKey:v.lists()})},...t}),S=(i,t,u)=>d({mutationFn:()=>s.admin.claim.cancel(i),onSuccess:(e,r,l)=>{a.invalidateQueries({queryKey:n.details()}),a.invalidateQueries({queryKey:n.preview(t)}),a.invalidateQueries({queryKey:v.details()}),a.invalidateQueries({queryKey:v.lists()})},...u}),I=(i,t,u)=>d({mutationFn:e=>s.admin.claim.addInboundItems(i,e),onSuccess:(e,r,l)=>{a.invalidateQueries({queryKey:n.details()}),a.invalidateQueries({queryKey:n.preview(t)})},...u}),C=(i,t,u)=>d({mutationFn:({actionId:e,...r})=>s.admin.claim.updateInboundItem(i,e,r),onSuccess:(e,r,l)=>{a.invalidateQueries({queryKey:n.details()}),a.invalidateQueries({queryKey:n.preview(t)})},...u}),F=(i,t,u)=>d({mutationFn:e=>s.admin.claim.removeInboundItem(i,e),onSuccess:(e,r,l)=>{a.invalidateQueries({queryKey:n.details()}),a.invalidateQueries({queryKey:n.preview(t)}),a.invalidateQueries({queryKey:y.details()})},...u}),x=(i,t,u)=>d({mutationFn:e=>s.admin.claim.addInboundShipping(i,e),onSuccess:(e,r,l)=>{a.invalidateQueries({queryKey:n.details()}),a.invalidateQueries({queryKey:n.preview(t)})},...u}),w=(i,t,u)=>d({mutationFn:({actionId:e,...r})=>s.admin.claim.updateInboundShipping(i,e,r),onSuccess:(e,r,l)=>{a.invalidateQueries({queryKey:n.details()}),a.invalidateQueries({queryKey:n.preview(t)})},...u}),g=(i,t,u)=>d({mutationFn:e=>s.admin.claim.deleteInboundShipping(i,e),onSuccess:(e,r,l)=>{a.invalidateQueries({queryKey:n.details()}),a.invalidateQueries({queryKey:n.preview(t)})},...u}),h=(i,t,u)=>d({mutationFn:e=>s.admin.claim.addOutboundItems(i,e),onSuccess:(e,r,l)=>{a.invalidateQueries({queryKey:n.details()}),a.invalidateQueries({queryKey:n.preview(t)})},...u}),O=(i,t,u)=>d({mutationFn:({actionId:e,...r})=>s.admin.claim.updateOutboundItem(i,e,r),onSuccess:(e,r,l)=>{a.invalidateQueries({queryKey:n.details()}),a.invalidateQueries({queryKey:n.preview(t)})},...u}),R=(i,t,u)=>d({mutationFn:e=>s.admin.claim.removeOutboundItem(i,e),onSuccess:(e,r,l)=>{a.invalidateQueries({queryKey:n.details()}),a.invalidateQueries({queryKey:n.preview(t)})},...u}),A=(i,t,u)=>d({mutationFn:e=>s.admin.claim.addOutboundShipping(i,e),onSuccess:(e,r,l)=>{a.invalidateQueries({queryKey:n.details()}),a.invalidateQueries({queryKey:n.preview(t)})},...u}),U=(i,t,u)=>d({mutationFn:({actionId:e,...r})=>s.admin.claim.updateOutboundShipping(i,e,r),onSuccess:(e,r,l)=>{a.invalidateQueries({queryKey:n.details()}),a.invalidateQueries({queryKey:n.preview(t)})},...u}),f=(i,t,u)=>d({mutationFn:e=>s.admin.claim.deleteOutboundShipping(i,e),onSuccess:(e,r,l)=>{a.invalidateQueries({queryKey:n.details()}),a.invalidateQueries({queryKey:n.preview(t)})},...u}),k=(i,t,u)=>d({mutationFn:e=>s.admin.claim.request(i,e),onSuccess:(e,r,l)=>{a.invalidateQueries({queryKey:y.all}),a.invalidateQueries({queryKey:n.details()}),a.invalidateQueries({queryKey:n.preview(t)}),a.invalidateQueries({queryKey:v.lists()})},...u}),D=(i,t,u)=>d({mutationFn:()=>s.admin.claim.cancelRequest(i),onSuccess:(e,r,l)=>{a.invalidateQueries({queryKey:n.details()}),a.invalidateQueries({queryKey:n.preview(t)}),a.invalidateQueries({queryKey:v.details()}),a.invalidateQueries({queryKey:v.lists()})},...u});export{Q as a,S as b,b as c,K as d,k as e,x as f,w as g,U as h,g as i,I as j,C as k,F as l,A as m,f as n,h as o,O as p,R as q,D as u};
