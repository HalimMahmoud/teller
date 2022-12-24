var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,o=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&u(e,a,t[a]);if(r)for(var a of r(t))l.call(t,a)&&u(e,a,t[a]);return e},c=(e,r)=>t(e,a(r));import{R as d,u as i,C as m,I as s,T as g,a as y,S as v,G as E,B as h,b,p,c as C,d as f}from"./vendor.0a7aad65.js";const N=d.memo((({id:e,category:t,count:a,hundreds:r,total:n,indicator:l})=>{const u=i(F).value;m.exports.useEffect((()=>{console.log(e,l,"render Counter")}));const c=m.exports.useRef(),[g,y]=m.exports.useState(!1),v=u.data.find((t=>t.id===e)),E=()=>y((e=>!e));return g?d.createElement(s,{type:"number",ref:c,value:w("hundreds"===l?v.hundreds:"total"===l?v.total:v.count),onChange:t=>{(t=>{const a=Number(t.target.value);F.value.data[u.data.findIndex((t=>t.id===e))]={id:e,category:v.category,count:v.count,hundreds:v.hundreds,total:v.total,[l]:a}})(t)},onBlur:t=>{E(),(t=>{const a=Number(t.target.value);F.value.data[u.data.findIndex((t=>t.id===e))]=o({},x(l,a,v.category,u.data.find((t=>t.id===e))))})(t)},onKeyDown:e=>{if("Enter"!==e.code&&"NumpadEnter"!==e.code)return e.code;{let e=c.current.inputRef.current,t=[...c.current.inputRef.current.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("input")],a=t.findIndex((t=>t===e));t[(e=>e+3>=t.length?t.length-1:e+3)(a)].focus()}}}):d.createElement(s,{ref:c,type:"text",value:"hundreds"===l?w(v.hundreds):"total"===l?new Intl.NumberFormat("en-EG").format(w(v.total)):w(v.count),onFocus:E})})),I=e=>Math.trunc(Number(e)),w=e=>Number(e).toString(),q=(e,t)=>Number(Math.trunc(e/t)*t),x=(e,t,a,r)=>.5===Number(a)||.25===Number(a)||Number.isInteger(a)?function(){switch(e){case"count":return{id:r.id,category:a,count:I(t),hundreds:Number(t/100),total:r.category*I(t)};case"hundreds":return{id:r.id,category:a,count:I(100*t),hundreds:Number(t),total:r.category*I(100*t)};case"total":return{id:r.id,category:a,count:I(q(t,a)/r.category),hundreds:Number(q(t,a)/100/r.category),total:q(t,a)}}}():{id:r.id,category:a,count:I(t),total:I(t)};var R=d.memo(N);const O=()=>d.createElement(g,{celled:!0,compact:!0},d.createElement(g.Header,null,d.createElement(g.Row,null,d.createElement(g.HeaderCell,null,"Total"),d.createElement(g.HeaderCell,null,"Hundreds"),d.createElement(g.HeaderCell,null,"Count"),d.createElement(g.HeaderCell,null,"Category"))),d.createElement(k,null)),S=d.memo((({data:e,length:t})=>e.map((e=>d.createElement(g.Row,{key:e.id},d.createElement(g.Cell,{textAlign:"right",width:7},d.createElement(R,c(o({},e),{indicator:"total"}))),(.5===Number(e.category)||.25===Number(e.category)||Number.isInteger(e.category))&&d.createElement(g.Cell,{width:3},d.createElement(R,c(o({},e),{indicator:"hundreds"}))),d.createElement(g.Cell,{width:4,colSpan:.5===Number(e.category)||.25===Number(e.category)||Number.isInteger(e.category)?void 0:2},d.createElement(R,c(o({},e),{indicator:"count"}))),d.createElement(g.Cell,{width:2},.5===Number(e.category)||.25===Number(e.category)||Number.isInteger(e.category)?new Intl.NumberFormat("en-EG").format(e.category):e.category)))))),k=()=>(i(F).value,d.createElement(g.Body,null,d.createElement(S,{data:F.value.data,length:F.value.length}),d.createElement(g.Row,null,d.createElement(g.Cell,{textAlign:"right"},new Intl.NumberFormat("en-EG").format(F.value.total)),d.createElement(g.Cell,{colSpan:3},"Counted")),d.createElement(g.Row,null,d.createElement(g.Cell,{textAlign:"right"},F.value.requiredIsEdited?d.createElement(s,{type:"number",value:Number(F.value.required).toString(),onChange:e=>F.value.required=Math.trunc(Number(e.target.value)),onBlur:()=>F.value.requiredIsEdited=!F.value.requiredIsEdited}):d.createElement(s,{type:"text",value:new Intl.NumberFormat("en-EG").format(Number(F.value.required).toString()),onChange:e=>F.value.required=Math.trunc(Number(e.target.value)),onFocus:()=>F.value.requiredIsEdited=!F.value.requiredIsEdited})),d.createElement(g.Cell,{colSpan:3},"Required")),d.createElement(g.Row,null,d.createElement(g.Cell,{textAlign:"right",error:F.value.total-F.value.required!=0,positive:F.value.total-F.value.required==0},new Intl.NumberFormat("en-EG").format(F.value.total-F.value.required)),d.createElement(g.Cell,{colSpan:3},"Difference"))));var G=d.memo((function(){const{moreCurrency:e,coinCurrency:t}=i(F).value;return d.createElement(y,{as:v},d.createElement(O,null),d.createElement(E,{verticalAlign:"middle"},d.createElement(E.Row,null,d.createElement(E.Column,{width:2},d.createElement(h,{onClick:()=>{F.value.data=[...j.data],F.value.required=j.required,F.value.requiredIsEdited=j.requiredIsEdited,F.value.coinCurrency=j.coinCurrency,F.value.moreCurrency=j.moreCurrency,F.value.addons=j.addons,F.value.currentInput=j.currentInput}}," Reset ")),d.createElement(E.Column,{width:3},d.createElement(h.Group,{compact:!0},d.createElement(h,{icon:"add",onClick:()=>{++F.value.addons&&F.value.data.push({id:11+F.value.addons,category:`D/W No.${F.value.addons}`,count:0,total:0})}}),d.createElement(h.Or,{text:"or"}),d.createElement(h,{icon:"minus",onClick:()=>{F.value.data.find((e=>.5!==Number(e.category)&&.25!==Number(e.category)&&!Number.isInteger(e.category)))&&F.value.data.pop()&&--F.value.addons}}))),d.createElement(E.Column,{width:3},d.createElement(h.Group,{compact:!0},d.createElement(h,{icon:"redo",onClick:()=>F.redo()}),d.createElement(h.Or,{text:"or"}),d.createElement(h,{icon:"undo",onClick:()=>F.undo()}))),d.createElement(E.Column,{width:4},d.createElement(b,{toggle:!0,label:"More categories",checked:e,onClick:()=>{F.value.data=F.value.data.find((e=>1e3===e.category||500===e.category||2===e.category))?[...F.value.data.slice(2,8),...F.value.data.slice(9)]:[{id:0,category:1e3,count:0,hundreds:0,total:0},{id:1,category:500,count:0,hundreds:0,total:0},...F.value.data.slice(0,6),{id:8,category:2,count:0,hundreds:0,total:0},...F.value.data.slice(6)],F.value.moreCurrency=!F.value.moreCurrency}})),d.createElement(E.Column,{width:4},d.createElement(b,{toggle:!0,label:"Coins",checked:t,onClick:()=>{F.value.data.find((e=>.5===e.category||.25===e.category))?F.value.data.find((e=>1e3===e.category||500===e.category||2===e.category))?F.value.data=[...F.value.data.slice(0,10),...F.value.data.slice(12)]:F.value.data=[...F.value.data.slice(0,7),...F.value.data.slice(9)]:F.value.data.find((e=>1e3===e.category||500===e.category||2===e.category))?F.value.data=[...F.value.data.slice(0,10),{id:10,category:.5,count:0,hundreds:0,total:0},{id:11,category:.25,count:0,hundreds:0,total:0},...F.value.data.slice(10)]:F.value.data=[...F.value.data.slice(0,7),{category:.5,count:0,hundreds:0,total:0},{category:.25,count:0,hundreds:0,total:0},...F.value.data.slice(7)],F.value.coinCurrency=!F.value.coinCurrency}})))))}));const j={data:[{id:2,category:200,count:0,hundreds:0,total:0},{id:3,category:100,count:0,hundreds:0,total:0},{id:4,category:50,count:0,hundreds:0,total:0},{id:5,category:20,count:0,hundreds:0,total:0},{id:6,category:10,count:0,hundreds:0,total:0},{id:7,category:5,count:0,hundreds:0,total:0},{id:9,category:1,count:0,hundreds:0,total:0}],required:0,requiredIsEdited:!1,coinCurrency:!1,moreCurrency:!1,addons:0,currentInput:0},F=C(p(j,{total:e=>e.data.map((e=>e.total)).reduce(((e,t)=>e+t)),length:e=>e.data.length}));function B(){return d.createElement(G,null)}f.render(d.createElement(d.StrictMode,null,d.createElement(B,null)),document.getElementById("root"));