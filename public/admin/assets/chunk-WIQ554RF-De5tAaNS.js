import{an as t}from"./index-3TwjZzBg.js";var a={ACTIVE:["green",t.t("statuses.active")],INACTIVE:["red",t.t("statuses.inactive")],DRAFT:["grey",t.t("statuses.draft")],SCHEDULED:["orange",`${t.t("promotions.fields.campaign")} ${t.t("statuses.scheduled").toLowerCase()}`],EXPIRED:["red",`${t.t("promotions.fields.campaign")} ${t.t("statuses.expired").toLowerCase()}`]},u=s=>{const n=new Date,e=s.campaign;if(!e)return a[s.status.toUpperCase()];if(e.starts_at&&new Date(e.starts_at)>n)return a.SCHEDULED;const r=e.budget,o=r&&r.used>r.limit;return e.ends_at&&new Date(e.ends_at)<n||o?a.EXPIRED:a[s.status.toUpperCase()]};export{u as g};
