(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{cEy7:function(t,e,n){"use strict";n.r(e);n("pNMO"),n("4Brf"),n("sMBO"),n("ls82");var a=n("HaE+"),o=n("vDqi"),r=n.n(o),c={data:function(){return{project:{name:""},loading:!1}},created:function(){},mounted:function(){this.getDetail(this.$route.params.id)},methods:{getDetail:function(t){var e=this;return Object(a.a)(regeneratorRuntime.mark((function a(){var o,c,i,s;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.loading=!0,e.project.name=t,a.prev=2,a.next=5,r.a.get("https://api.github.com/repos/GitHub-Laziji/".concat(t));case 5:return o=a.sent,c=o.data,i=n("52Kp").Base64,e.project.id=c.id,e.project.url=c.html_url,e.project.stargazersCount=c.stargazers_count,e.project.watchersCount=c.watchers_count,e.project.forksCount=c.forks_count,e.project.language=c.language,e.project.description=c.description,e.project.license=c.license?c.license.spdx_id:null,e.project.createTime=e.$util.utcToLocal(c.created_at),e.project.updateTime=e.$util.utcToLocal(c.updated_at),a.next=20,r.a.get("https://api.github.com/repos/GitHub-Laziji/".concat(t,"/contents/README.md"));case 20:s=a.sent,e.project.content=e.$markdown(i.decode(s.data.content)),e.loading=!1,a.next=29;break;case 25:a.prev=25,a.t0=a.catch(2),e.loading=!1,e.$message({message:a.t0.message,type:"error"});case 29:case"end":return a.stop()}}),a,null,[[2,25]])})))()},goGithub:function(t){window.open(t)},more:function(){this.$router.push("/user/project")}}},i=n("KHd+"),s=Object(i.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"min-height":"600px"}},[n("el-card",{staticStyle:{"min-height":"400px"},attrs:{shadow:"never"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("el-row",[n("el-col",{attrs:{span:12}},[n("span",[t._v(t._s(t.project.name))])]),n("el-col",{attrs:{span:12}},[n("div",{staticStyle:{"text-align":"right"}},[n("el-button",{staticStyle:{padding:"3px 0"},attrs:{type:"text",icon:"el-icon-share"},on:{click:function(e){return t.$share()}}},[t._v("分享")]),n("el-button",{staticStyle:{padding:"3px 0"},attrs:{type:"text",icon:"el-icon-back"},on:{click:function(e){return t.goGithub(t.project.url)}}},[t._v("前往GitHub")]),n("el-button",{staticStyle:{padding:"3px 0"},attrs:{type:"text",icon:"el-icon-more-outline"},on:{click:t.more}},[t._v("更多项目")])],1)])],1)],1),n("div",{staticStyle:{"font-size":"0.9rem","line-height":"1.5",color:"#606c71"}},[t._v("\n            发布 "+t._s(t.project.createTime)+"\n            "),n("br"),t._v(" 更新 "+t._s(t.project.updateTime)+"\n        ")]),n("div",{staticStyle:{"font-size":"1.1rem","line-height":"1.5",color:"#303133",padding:"20px 0px 0px 0px"}},[t._v("\n            "+t._s(t.project.description)+"\n        ")]),n("div",{staticStyle:{"font-size":"1.1rem",color:"#303133",padding:"15px 0px 15px 0px","border-bottom":"1px solid #E4E7ED"}},[n("el-row",[n("el-col",{staticStyle:{"padding-top":"5px"},attrs:{span:16}},[n("el-tooltip",{attrs:{effect:"dark",content:"star "+t.project.stargazersCount,placement:"bottom"}},[n("i",{staticClass:"el-icon-star-off",staticStyle:{margin:"0px 5px 0px 0px"}})]),t._v("\n                    "+t._s(t.project.stargazersCount)+"\n                    "),n("el-tooltip",{attrs:{effect:"dark",content:"watch "+t.project.watchersCount,placement:"bottom"}},[n("i",{staticClass:"el-icon-view",staticStyle:{margin:"0px 5px 0px 15px"}})]),t._v("\n                    "+t._s(t.project.watchersCount)+"\n                    "),n("el-tooltip",{attrs:{effect:"dark",content:"fork "+t.project.forksCount,placement:"bottom"}},[n("i",{staticClass:"el-icon-bell",staticStyle:{margin:"0px 5px 0px 15px"}})]),t._v("\n                    "+t._s(t.project.forksCount)+"\n                ")],1),n("el-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[t.project.license?n("el-tag",{attrs:{size:"small",type:"danger"}},[t._v(t._s(t.project.license))]):t._e(),n("el-tag",{attrs:{size:"small",type:"success"}},[t._v(t._s(t.project.language))])],1)],1)],1),t.project.content?n("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"markdown-body",staticStyle:{"padding-top":"20px"},domProps:{innerHTML:t._s(t.project.content)}}):t._e(),t.project.content?t._e():n("div",{staticStyle:{padding:"20px 0px 20px 0px","text-align":"center"}},[n("font",{staticStyle:{"font-size":"30px",color:"#dddddd"}},[n("b",[t._v("还没有介绍 (╯°Д°)╯︵ ┻━┻")])])],1)])],1)])}),[],!1,null,"0456075b",null);e.default=s.exports}}]);