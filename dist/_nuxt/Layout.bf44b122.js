import{_ as e,c as o,a as t,t as c,f as s,o as a}from"./entry.c8fdadf4.js";const i={name:"GuideLayout",emits:["setLayout","openPopup"],data(){return{layout:{header:"main",footer:"",title:"title nav",floatMenu:"none"}}},mounted(){this.$emit("setLayout",this.layout)}},l={class:"container"},d={class:"content",id:"content"},r={class:"title_nav"},u=s('<div class="page_info">page info</div><div class="section"><h3 class="tit02">section</h3> content </div><div class="section"><h3 class="tit02">section</h3> content content content content content content content content content <br> content content content content content content content content content <br> content content content content content content content content content <br> content content content content content content content content content <br> content content content content content content content content content <br> content content content content content content content content content <br> content content content content content content content content content <br> content content content content content content content content content <br> content content content content content content content content content </div><div class="section ty02"><h3 class="tit02">section ty02</h3> content </div><div class="section"><h3 class="tit02">Layout (header, footer, title)</h3> 해당 페이지 내의 data 수정 후 mounted() 이벤트로 MainLayout.vue 에 전송<br><br><b>layout: { header: &#39;sub&#39;, footer: &#39;none&#39;, title: &#39;공통&#39;, floatMenu: &#39;none&#39; },</b><br><b>this.$emit(&#39;setLayout&#39;, this.layout);</b><ul class="text_list bull"><li><b>header</b> : &#39;main&#39;, &#39;sub&#39;, &#39;sub2&#39;, &#39;none&#39; (필수)</li><li><b>footer</b> : &#39;&#39;, &#39;none&#39;</li><li><b>title</b> : &#39;&#39;, &#39;text&#39;</li><li><b>floatMenu</b> : &#39;&#39;, &#39;none&#39;</li></ul><br><br><p><strong>&#39;header&#39; : &#39;main&#39;</strong></p><div class="header_guide"><div class="h_left"><span class="logo"></span></div><div class="h_right"><span class="rcmd"></span><span class="menu"></span></div></div><br><p><strong>&#39;header&#39; : &#39;sub&#39;</strong></p><div class="header_guide"><div class="h_left"><span class="back"></span><strong class="ttl">title</strong></div><div class="h_right"><span class="rcmd"></span><span class="menu"></span></div></div><br><p><strong>&#39;header&#39; : &#39;sub2&#39;</strong></p><div class="header_guide"><div class="h_left"><span class="back"></span><strong class="ttl">title</strong></div><div class="h_right"></div></div><br><p><strong>&#39;header&#39; : &#39;none&#39;</strong></p><div class="header_guide">헤더없음</div></div><div class="bottom_float"><div class="inner"><div class="float_btn_wrap"><div class="btn_group"><button type="button" class="btn lg c01">button</button></div><div class="btn_group"><button type="button" class="btn lg c02">button</button><button type="button" class="btn lg c03">button</button></div></div></div></div>',6);function b(v,p,_,h,n,g){return a(),o("div",l,[t("div",d,[t("h2",r,c(n.layout.title),1),u])])}const y=e(i,[["render",b]]);export{y as default};