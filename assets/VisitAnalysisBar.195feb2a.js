var p=Object.defineProperty;var i=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var s=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,n=(r,e)=>{for(var t in e||(e={}))l.call(e,t)&&s(r,t,e[t]);if(i)for(var t of i(e))m.call(e,t)&&s(r,t,e[t]);return r};import{u as c}from"./useECharts.b7363f5b.js";import{b as h}from"./props.f48aca0b.js";import{B as u,r as f,$ as d,D as y,F as b,Y as g}from"./vendor.bf608252.js";import"./index.c6b1a9a4.js";const B=u({props:n({},h),setup(r){const e=f(null),{setOptions:t}=c(e);return d(()=>{t({tooltip:{trigger:"axis",axisPointer:{lineStyle:{width:1,color:"#019680"}}},grid:{left:"1%",right:"1%",top:"2  %",bottom:0,containLabel:!0},xAxis:{type:"category",data:[...new Array(12)].map((a,o)=>`${o+1}\u6708`)},yAxis:{type:"value",max:8e3,splitNumber:4},series:[{data:[3e3,2e3,3333,5e3,3200,4200,3200,2100,3e3,5100,6e3,3200,4800],type:"bar",barMaxWidth:80}]})}),(a,o)=>(y(),b("div",{ref_key:"chartRef",ref:e,style:g({height:a.height,width:a.width})},null,4))}});export{B as default};