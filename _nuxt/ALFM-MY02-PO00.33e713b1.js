import{_ as s,c as n,a as t,t as i,o as a}from"./entry.b6e4d86e.js";const c={name:"ALFM-MY02-PO00",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub",footer:"none",floatMenu:"none",title:"USIM 정보 입력"},acd:[]}},mounted(){this.$emit("setLayout",this.layout),this.$emit("openPopup",["MY02PO00","btn_MY02PO00",101])}},_={class:"container"},d={class:"content",id:"content"},l={class:"title_nav"},p={class:"section"},r=t("h3",{class:"tit02"},"USIM 정보 입력",-1),u={class:"btn_group"};function M(h,o,m,P,e,b){return a(),n("div",_,[t("div",d,[t("h2",l,i(e.layout.title),1),t("div",p,[r,t("div",u,[t("button",{type:"button",class:"btn md c03",id:"btn_MY02PO00",onClick:o[0]||(o[0]=f=>{this.$emit("openPopup",["MY02PO00","btn_MY02PO00",101])})},"USIM 정보 입력")])])])])}const O=s(c,[["render",M]]);export{O as default};