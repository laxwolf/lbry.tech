webpackJsonp([1],{"+8wA":function(t,e){},0:function(t,e){},"1/Zw":function(t,e){},"4UDY":function(t,e){},"7P5P":function(t,e){},"7zck":function(t,e){},AxLV:function(t,e){},EZ7f:function(t,e){},FoGp:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-toolbar",{attrs:{"clipped-left":"",app:"","scroll-off-screen":""}},[a("v-toolbar-title",{staticClass:"align-center"},[a("span",{staticClass:"title"},[a("router-link",{attrs:{to:"/"}},[t._v("LBRY.tech")])],1)]),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[a("v-btn",{attrs:{flat:"",to:"/overview"}},[t._v("Overview")]),t._v(" "),a("v-btn",{attrs:{flat:"",to:"/documentation"}},[t._v("Documentation")]),t._v(" "),a("v-btn",{attrs:{flat:"",to:"/contribute"}},[t._v("How to Contribute")]),t._v(" "),a("v-btn",{attrs:{flat:"",to:"/develop"}},[t._v("How to Develop")]),t._v(" "),a("v-btn",{attrs:{flat:"",to:"/resources"}},[t._v("Resources")])],1)],1),t._v(" "),a("v-content",[a("v-alert",{staticClass:"pt-5 pb-5 ma-0",attrs:{type:"error",value:"true",id:"in-development-alert"}},[a("strong",[t._v("This website is in beta.")]),t._v(" We are actively developing this website to showcase and teach about the LBRY protocol. All things may not work as expected!"),a("br"),t._v("This website is open source and you can "),a("a",{attrs:{href:"https://github.com/lbryio/lbry.tech",target:"_blank"}},[t._v("contribute to it on Github")]),t._v(".")]),t._v(" "),a("router-view")],1)],1)},staticRenderFns:[]};var n=a("VU/8")({data:function(){return{}},name:"App"},i,!1,function(t){a("EZ7f")},null,null).exports,r=a("/ocq"),o=new s.default,l={data:function(){return{uploadDialog:!1,txhash:"",confirmed:!1}},watch:{uploadDialog:function(){var t=this;this.uploadDialog&&setTimeout(function(){t.confirmed=!0},1e4)}},created:function(){var t=this;o.$on("file-uploaded",function(e){t.txhash=e,t.uploadDialog=!0})},name:"Hook"},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","grid-list-md":"","text-xs-center":"",id:"hook"}},[a("v-layout",{attrs:{row:"",wrap:"",id:"hook-navigation"}},[a("v-flex",{attrs:{xs4:""}},[a("router-link",{attrs:{exact:"",to:"/"}},[a("v-btn",{attrs:{color:"grey",fab:""}},[t._v("1")]),t._v("\n        Resolve a claim\n      ")],1)],1),t._v(" "),a("v-flex",{attrs:{xs4:""}},[a("router-link",{attrs:{to:"/step-2"}},[a("v-btn",{attrs:{color:"grey",fab:""}},[t._v("2")]),t._v("\n        Publish content\n      ")],1)],1),t._v(" "),a("v-flex",{attrs:{xs4:""}},[a("router-link",{attrs:{to:"/step-3"}},[a("v-btn",{attrs:{color:"grey",fab:""}},[t._v("3")]),t._v("\n        Support with LBC\n      ")],1)],1)],1),t._v(" "),a("router-view"),t._v(" "),a("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"30rem"},model:{value:t.uploadDialog,callback:function(e){t.uploadDialog=e},expression:"uploadDialog"}},[a("v-card",[t.confirmed?[a("v-card-title",{staticClass:"headline"},[t._v("Your image has been published!")]),t._v(" "),a("v-card-text",[a("a",{attrs:{href:"https://explorer.lbry.io/tx/"+t.txhash,target:"_blank"}},[t._v("Check out your content on the LBRY blockchain explorer")])]),t._v(" "),a("v-card-actions",[a("v-btn",{attrs:{flat:""},on:{click:function(e){t.uploadDialog=!1}}},[t._v("Dismiss this dialog")])],1)]:[a("v-card-title",{staticClass:"headline"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}),t._v(" Waiting for confirmations...")],1),t._v(" "),a("v-card-text",[t._v("Your image was uploaded to the LBRY network but we are currently waiting for the first confirmation. This should take just a few minutes. In the mean time, go ahead and try the other steps!")])]],2)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(l,u,!1,function(t){a("7P5P")},null,null).exports,d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"edit-link mt-3"},[e("v-divider"),this._v(" "),e("p",{staticClass:"mt-2"},[e("a",{staticClass:"grey--text text--darken-1",attrs:{href:this.url,target:"_blank"}},[this._v("Edit this page on Github")])])],1)},staticRenderFns:[]};var v=a("VU/8")({props:["url"],data:function(){return{}},name:"EditLink"},d,!1,function(t){a("oCsX")},null,null).exports,m={components:{"edit-link":v,hook:c},data:function(){return{}},name:"Home"},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("hook"),t._v(" "),a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",xl6:"","offset-xl3":""}},[a("h1",[t._v("HTML Ipsum Presents")]),t._v(" "),a("p",[a("strong",[t._v("Pellentesque habitant morbi tristique")]),t._v(" senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. "),a("em",[t._v("Aenean ultricies mi vitae est.")]),t._v(" Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, "),a("code",[t._v("commodo vitae")]),t._v(", ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. "),a("a",{attrs:{href:"#"}},[t._v("Donec non enim")]),t._v(" in turpis pulvinar facilisis. Ut felis.")]),t._v(" "),a("h2",[t._v("Header Level 2")]),t._v(" "),a("ol",[a("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),a("li",[t._v("Aliquam tincidunt mauris eu risus.")])]),t._v(" "),a("blockquote",[a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.")])]),t._v(" "),a("h3",[t._v("Header Level 3")]),t._v(" "),a("ul",[a("li",[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),t._v(" "),a("li",[t._v("Aliquam tincidunt mauris eu risus.")])]),t._v(" "),a("pre",[a("code",[t._v("\n        #header h1 a {\n          display: block;\n          width: 300px;\n          height: 80px;\n        }\n        ")])])])],1),t._v(" "),a("edit-link",{attrs:{url:"https://github.com/lbryio/lbry.tech/blob/master/src/components/pages/Home.vue"}})],1)],1)},staticRenderFns:[]};var h=a("VU/8")(m,p,!1,function(t){a("lN29")},null,null).exports,f={components:{"edit-link":v},data:function(){return{}},name:"Overview"},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",xl6:"","offset-xl3":""}},[a("h1",{staticClass:"display-1"},[a("p",[t._v("Introduction to LBRY protocol")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://placehold.it/1200x600?text=Placeholder+Graphic"}})]),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar leo id nisl ullamcorper, non tristique nulla varius. Curabitur urna turpis, porta ac lectus vel, imperdiet semper mi. Integer sollicitudin, urna id imperdiet commodo, quam nunc ultrices dolor, eu laoreet risus ante nec purus. Vivamus eget ornare felis.")]),t._v(" "),a("h2",{staticClass:"title"},[a("p",[t._v("Subtitle here")])]),t._v(" "),a("p",[t._v("Morbi sed mauris libero. "),a("strong",[t._v("Mauris blandit")]),t._v(" sem vel libero ultrices, non porta elit rhoncus. Proin augue quam, fermentum eu malesuada a, convallis eget ligula. Vestibulum dapibus nisl eu risus blandit mattis. Quisque pretium quam id arcu aliquam imperdiet. Fusce bibendum venenatis ex eget bibendum. Cras dapibus justo vel libero cursus tincidunt. Etiam vel tincidunt augue. Proin venenatis, lorem sit amet posuere porttitor, risus est laoreet ipsum, sed interdum elit augue sed lectus. Cras dignissim odio ut commodo vestibulum. ")]),t._v(" "),a("h2",{staticClass:"title"},[a("p",[t._v("Subtitle here")])]),t._v(" "),a("p",[t._v("Morbi sed mauris libero. "),a("strong",[t._v("Mauris blandit")]),t._v(" sem vel libero ultrices, non porta elit rhoncus. Proin augue quam, fermentum eu malesuada a, convallis eget ligula. Vestibulum dapibus nisl eu risus blandit mattis. Quisque pretium quam id arcu aliquam imperdiet. Fusce bibendum venenatis ex eget bibendum. Cras dapibus justo vel libero cursus tincidunt. Etiam vel tincidunt augue. Proin venenatis, lorem sit amet posuere porttitor, risus est laoreet ipsum, sed interdum elit augue sed lectus. Cras dignissim odio ut commodo vestibulum. ")]),t._v(" "),a("h2",{staticClass:"title"},[a("p",[t._v("Subtitle here")])]),t._v(" "),a("p",[t._v("Morbi sed mauris libero. "),a("strong",[t._v("Mauris blandit")]),t._v(" sem vel libero ultrices, non porta elit rhoncus. Proin augue quam, fermentum eu malesuada a, convallis eget ligula. Vestibulum dapibus nisl eu risus blandit mattis. Quisque pretium quam id arcu aliquam imperdiet. Fusce bibendum venenatis ex eget bibendum. Cras dapibus justo vel libero cursus tincidunt. Etiam vel tincidunt augue. Proin venenatis, lorem sit amet posuere porttitor, risus est laoreet ipsum, sed interdum elit augue sed lectus. Cras dignissim odio ut commodo vestibulum. ")])])],1),t._v(" "),a("edit-link",{attrs:{url:"https://github.com/lbryio/lbry.tech/blob/master/src/components/pages/Overview.vue"}})],1)},staticRenderFns:[]};var _=a("VU/8")(f,b,!1,function(t){a("+8wA")},null,null).exports,g={components:{"edit-link":v},data:function(){return{}},name:"Documentation"},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{attrs:{clipped:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",[t._v("Link 1")])],1)],1),t._v(" "),a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",[t._v("Link 2")])],1)],1)],1)],1),t._v(" "),a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",xl6:"","offset-xl3":""}},[a("h1",{staticClass:"display-1"},[a("p",[t._v("Documentation lives here!")])])])],1),t._v(" "),a("edit-link",{attrs:{url:"https://github.com/lbryio/lbry.tech/blob/master/src/components/pages/Documentation.vue"}})],1)],1)},staticRenderFns:[]};var C=a("VU/8")(g,x,!1,function(t){a("FoGp")},null,null).exports,k={components:{"edit-link":v},data:function(){return{}},name:"Contribute"},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",xl6:"","offset-xl3":""}},[e("h1",{staticClass:"display-1"},[e("p",[this._v("How to Contribute")])])])],1),this._v(" "),e("edit-link",{attrs:{url:"https://github.com/lbryio/lbry.tech/blob/master/src/components/pages/Contribute.vue"}})],1)},staticRenderFns:[]};var y=a("VU/8")(k,w,!1,function(t){a("Pk2N")},null,null).exports,L={components:{"edit-link":v},data:function(){return{}},name:"Develop"},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",xl6:"","offset-xl3":""}},[e("h1",{staticClass:"display-1"},[e("p",[this._v("Development resources and guides")])])])],1),this._v(" "),e("edit-link",{attrs:{url:"https://github.com/lbryio/lbry.tech/blob/master/src/components/pages/Develop.vue"}})],1)},staticRenderFns:[]};var D=a("VU/8")(L,R,!1,function(t){a("nUYG")},null,null).exports,q={components:{"edit-link":v},data:function(){return{}},name:"Resources"},E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",xl6:"","offset-xl3":""}},[a("h1",{staticClass:"display-1"},[a("p",[t._v("Important Resources")])]),t._v(" "),a("p",[a("ul",[a("li",[a("a",{attrs:{href:"https://discord.gg/YjYbwhS",target:"_blank"}},[t._v("Discord")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.lbry.io/",target:"_blank"}},[t._v("Slack")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.reddit.com/r/lbry/",target:"_blank"}},[t._v("Reddit")])])])])])],1),t._v(" "),a("edit-link",{attrs:{url:"https://github.com/lbryio/lbry.tech/blob/master/src/components/pages/Resources.vue"}})],1)},staticRenderFns:[]};var F=a("VU/8")(q,E,!1,function(t){a("AxLV")},null,null).exports,U=a("mvHQ"),V=a.n(U),S={data:function(){return{address:"Claim goes here",jsonData:"",isLoading:!1,exampleCode:""}},methods:{fetchMetadata:function(){var t=this;t.jsonData="",t.isLoading=!0,t.exampleCode='# Example code using the daemon\ncurl \'http://localhost:5279\' --data \'{"method":"resolve","params":{"uri":"'+this.address+"\"}}'",this.$http.get("//beta.lbry.tech/forward?method=resolve&uri="+this.address).then(function(e){t.isLoading=!1,t.jsonData=V()(e.body,null,"  ")})},chooseClaim:function(t){this.address=t,this.fetchMetadata()}},name:"Step1"},P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"",id:"step1-page"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("h1",{staticClass:"display-2"},[t._v("Learn the LBRY protocol by examples")]),t._v(" "),a("p",{staticClass:"subheading"},[t._v("Let's start by getting the associated metadata for "),a("a",{attrs:{href:"#"}},[t._v("a claim")]),t._v(".")])]),t._v(" "),a("v-flex",{attrs:{xs12:"",sm10:""}},[a("v-text-field",{attrs:{solo:"",dark:"",prefix:"lbry://"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm2:""}},[a("v-btn",{staticClass:"mt-0",attrs:{large:""},on:{click:t.fetchMetadata}},[t._v("Execute")])],1),t._v(" "),""!=t.exampleCode?a("v-flex",{attrs:{xs12:""}},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.exampleCode,expression:"exampleCode"}]},[a("code",{staticClass:"bash"})])]):t._e(),t._v(" "),t.isLoading?a("v-flex",{attrs:{xs12:""}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):t._e(),t._v(" "),t.jsonData?a("v-flex",{attrs:{xs12:""}},[a("p",{staticClass:"subheading"},[t._v("Success! Here is the response for "),a("strong",[t._v("lbry://"+t._s(t.address))]),t._v(":")]),t._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.jsonData,expression:"jsonData"}],staticClass:"json-example"},[a("code",{staticClass:"json"})]),t._v(" "),a("v-btn",{staticClass:"mt-3",attrs:{large:""},on:{click:function(e){t.$router.push("step-2")}}},[t._v("Go to next step")])],1):t._e(),t._v(" "),t.isLoading||t.jsonData?t._e():[a("v-flex",{attrs:{xs12:""}},[a("p",{staticClass:"subheading"},[t._v("... or select a live example from below")])]),t._v(" "),a("v-flex",{attrs:{xs12:"",sm3:""}},[a("v-card",{attrs:{hover:""}},[a("v-card-media",{attrs:{src:"https://spee.ch/0654f2e2322ccfefa02a956d252df9ac7611d8b0/placeholder-itsadisaster.jpeg",height:"200px"},on:{click:function(e){t.chooseClaim("itsadisaster")}}}),t._v(" "),a("v-card-title",{on:{click:function(e){t.chooseClaim("itsadisaster")}}},[a("div",[a("h4",{staticClass:"mb-0"},[t._v("It's a Disaster")]),t._v(" "),a("div",{staticClass:"account"},[t._v("Anonymous")])])])],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm3:""}},[a("v-card",{attrs:{hover:""}},[a("v-card-media",{attrs:{src:"https://spee.ch/b1bd330e048fc22dc7bf941c33dd8245eef492c1/unbubbled.png",height:"200px"},on:{click:function(e){t.chooseClaim("unbubbled1-1")}}}),t._v(" "),a("v-card-title",{on:{click:function(e){t.chooseClaim("unbubbled1-1")}}},[a("div",[a("h4",{staticClass:"mb-0"},[t._v("Unbubbled with Jamie King, Ep1.1 - Bitcoin, Boom or Bust")]),t._v(" "),a("div",{staticClass:"account"},[t._v("@Unbubbled")])])])],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm3:""}},[a("v-card",{attrs:{hover:""}},[a("v-card-media",{attrs:{src:"https://spee.ch/9880947df41af880bc19724ceddd1cce957a07e2/placeholder-fortninte.jpeg",height:"200px"},on:{click:function(e){t.chooseClaim("fortnite-top-stream-moments-nickatnyte")}}}),t._v(" "),a("v-card-title",{on:{click:function(e){t.chooseClaim("fortnite-top-stream-moments-nickatnyte")}}},[a("div",[a("h4",{staticClass:"mb-0"},[t._v("FORTNITE TOP STREAM MOMENTS - Nickatnyte & GamingwithMolt")]),t._v(" "),a("div",{staticClass:"account"},[t._v("@nickatnyte")])])])],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm3:""}},[a("v-card",{attrs:{hover:""}},[a("v-card-media",{attrs:{src:"https://spee.ch/a3b8258478ad88954f42f6ac3427eab380720f60/placeholder-lbrymine.png",height:"200px"},on:{click:function(e){t.chooseClaim("six")}}}),t._v(" "),a("v-card-title",{on:{click:function(e){t.chooseClaim("six")}}},[a("div",[a("h4",{staticClass:"mb-0"},[t._v("LBRY Coin (LBC) GPU Miner for AMD and NVIDIA")]),t._v(" "),a("div",{staticClass:"account"},[t._v("Anonymous")])])])],1)],1)]],2)],1)},staticRenderFns:[]};var j=a("VU/8")(S,P,!1,function(t){a("4UDY")},null,null).exports,B=a("iPd/"),A=a.n(B),I=a("yazS"),M={directives:{imagesLoaded:A.a},components:{ImageUploader:I.ImageUploader},data:function(){return{valid:!1,isLoading:!1,topLine:"This is an example meme",bottomLine:"that I made",title:"",description:"",author:"",language:"EN",license:"Public Domain",nsfw:!1,backgroundImage:"",textFieldRules:[function(t){return!!t||"Field is required"}]}},methods:{updateCanvas:function(){var t=document.getElementById("meme-canvas").getContext("2d"),e=document.getElementById("base-image");t.clearRect(0,0,400,300),t.drawImage(e,0,0,400,300,0,0,400,300),t.lineWidth=4,t.font="bold 28px Coda",t.strokeStyle="black",t.fillStyle="white",t.textAlign="center",t.textBaseline="top",t.strokeText(this.topLine.toUpperCase(),200,20),t.fillText(this.topLine.toUpperCase(),200,20),t.strokeText(this.bottomLine.toUpperCase(),200,260),t.fillText(this.bottomLine.toUpperCase(),200,260)},submit:function(){o.$emit("file-uploaded","txhashhere")},imagesLoaded:function(t){var e=this;document.fonts.load("bold 28px Coda").then(function(){e.updateCanvas()})},setImage:function(t){document.getElementById("base-image").src=t,setTimeout(this.updateCanvas,1e3)},imageUploaded:function(){}},created:function(){},watch:{topLine:function(){this.updateCanvas()},bottomLine:function(){this.updateCanvas()}},name:"Step2"},T={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"",id:"step2-page"}},[a("v-layout",{directives:[{name:"images-loaded",rawName:"v-images-loaded",value:t.imagesLoaded,expression:"imagesLoaded"}],attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("h1",{staticClass:"display-2"},[t._v("Publish your content on the blockchain")]),t._v(" "),a("p",{staticClass:"subheading"},[t._v("Upload an image to the blockchain and you are able to view it on the "),a("a",{attrs:{href:"http://explorer.lbry.io",target:"_blank"}},[t._v("LBRY Blockchain Explorer")]),t._v(".")])]),t._v(" "),a("v-flex",{attrs:{xs12:"",sm8:""}},[a("img",{attrs:{src:"https://spee.ch/40ac6818bbac87a208722bf4467653341d460908/lbry-green.png",id:"base-image"}}),t._v(" "),a("canvas",{attrs:{id:"meme-canvas",width:"400",height:"300"}},[t._v("\n        Sorry, canvas not supported\n      ")]),t._v(" "),a("v-flex",{staticClass:"mx-auto",attrs:{xs12:"",sm6:""}},[a("v-card",{staticClass:"pa-3"},[a("p",{staticClass:"subheading"},[t._v("Upload a background image")]),t._v(" "),a("image-uploader",{attrs:{quality:.8,autoRotate:!0,maxWidth:400,outputFormat:"string",preview:!1},on:{input:t.setImage,onComplete:t.imageUploaded}})],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm4:""}},[a("v-card",{staticClass:"pa-3"},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{dark:"",solo:"",rules:t.textFieldRules,required:""},model:{value:t.topLine,callback:function(e){t.topLine=e},expression:"topLine"}}),t._v(" "),a("v-text-field",{attrs:{dark:"",solo:"",rules:t.textFieldRules,required:""},model:{value:t.bottomLine,callback:function(e){t.bottomLine=e},expression:"bottomLine"}}),t._v(" "),a("v-text-field",{attrs:{label:"Title",rules:t.textFieldRules,required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),a("v-text-field",{attrs:{label:"Description",rules:t.textFieldRules,required:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),a("v-text-field",{attrs:{label:"Author",rules:t.textFieldRules,required:""},model:{value:t.author,callback:function(e){t.author=e},expression:"author"}}),t._v(" "),a("v-text-field",{attrs:{label:"Language",rules:t.textFieldRules,required:""},model:{value:t.language,callback:function(e){t.language=e},expression:"language"}}),t._v(" "),a("v-text-field",{attrs:{label:"License",rules:t.textFieldRules,required:""},model:{value:t.license,callback:function(e){t.license=e},expression:"license"}}),t._v(" "),a("v-checkbox",{attrs:{label:"NSFW"},model:{value:t.nsfw,callback:function(e){t.nsfw=e},expression:"nsfw"}}),t._v(" "),a("v-btn",{attrs:{disabled:!t.valid},on:{click:t.submit}},[t._v("Submit")])],1)],1)],1),t._v(" "),t.isLoading?a("v-flex",{attrs:{xs12:""}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):t._e()],1)],1)},staticRenderFns:[]};var Y=a("VU/8")(M,T,!1,function(t){a("1/Zw")},null,null).exports,N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{fluid:"",id:"step3-page"}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("h1",{staticClass:"display-2"},[this._v("Support your favorite content creators with LBRY")]),this._v(" "),e("p",{staticClass:"subheading"},[this._v("Send LBRY coins to claim addresses and the owner will receive it in their wallet.")])])],1)],1)},staticRenderFns:[]};var $=a("VU/8")({data:function(){return{}},methods:{},name:"Step3"},N,!1,function(t){a("eyFN")},null,null).exports;s.default.use(r.a);var H=new r.a({routes:[{path:"/",name:"Home",component:h,children:[{path:"",name:"Step1",component:j},{path:"step-2",name:"Step2",component:Y},{path:"step-3",name:"Step3",component:$}]},{path:"/overview",name:"Overview",component:_},{path:"/documentation",name:"Documentation",component:C},{path:"/contribute",name:"Contribute",component:y},{path:"/develop",name:"Develop",component:D},{path:"/resources",name:"Resources",component:F}]}),G=a("3EgV"),O=a.n(G),W=(a("7zck"),a("8+8L")),Q=a("5CJf"),z=a.n(Q);s.default.use(O.a,{theme:{primary:"#155b4a"}}),s.default.use(W.a),s.default.use(z.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:H,components:{App:n},template:"<App/>"})},Pk2N:function(t,e){},eyFN:function(t,e){},lN29:function(t,e){},nUYG:function(t,e){},oCsX:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.662bc049405ca38516eb.js.map