var f=(o,r,n)=>new Promise((l,a)=>{var c=e=>{try{t(n.next(e))}catch(s){a(s)}},i=e=>{try{t(n.throw(e))}catch(s){a(s)}},t=e=>e.done?l(e.value):Promise.resolve(e.value).then(c,i);t((n=n.apply(o,r)).next())});import{B as h,u as b}from"./useTable.b4e3dd22.js";import{T as g}from"./useForm.18f8f904.js";import{u as T}from"./index.db770e2c.js";import{M as _,c as C,s as w}from"./MenuDrawer.a4e31dc2.js";import{e as B}from"./ispeak.758c272c.js";import{_ as D}from"./index.c6b1a9a4.js";import{B as k,a1 as u,D as E,F as S,w as m,a6 as p,ae as R}from"./vendor.bf608252.js";import"./index.2e1482db.js";import"./index.7eff839f.js";/* empty css               *//* empty css               */import"./useWindowSizeFn.011a8160.js";import"./useContentViewHeight.259d05a9.js";/* empty css               *//* empty css               *//* empty css               */import"./index.cea2f594.js";/* empty css                */import"./sortable.esm.b519ac50.js";/* empty css                *//* empty css              *//* empty css               */import"./index.38d5512e.js";import"./download.fc55a757.js";/* empty css               */import"./index.c733c9c3.js";const y=k({name:"IspeakTagList",components:{BasicTable:h,MenuDrawer:_,TableAction:g},setup(){const[o,{openDrawer:r}]=T(),[n,{reload:l}]=b({title:"ispeak\u6807\u7B7E\u5217\u8868",api:B,columns:C,formConfig:{labelWidth:120,schemas:w},isTreeTable:!1,pagination:!0,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!0,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function a(){r(!0,{isUpdate:!1})}function c(e){r(!0,{record:e,isUpdate:!0})}function i(e){return f(this,null,function*(){t()})}function t(){l()}return{registerTable:n,registerDrawer:o,handleCreate:a,handleEdit:c,handleDelete:i,handleSuccess:t}}}),F=R(" \u65B0\u589E\u6807\u7B7E ");function v(o,r,n,l,a,c){const i=u("a-button"),t=u("TableAction"),e=u("BasicTable"),s=u("MenuDrawer");return E(),S("div",null,[m(e,{onRegister:o.registerTable},{toolbar:p(()=>[m(i,{type:"primary",onClick:o.handleCreate},{default:p(()=>[F]),_:1},8,["onClick"])]),action:p(({record:d})=>[m(t,{actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,d)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,d)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),m(s,{onRegister:o.registerDrawer,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var re=D(y,[["render",v]]);export{re as default};