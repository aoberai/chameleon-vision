(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dc1c444","chunk-98e0c8cc","chunk-3af6ee7f"],{"0b81":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("CVselect",{attrs:{name:"Camera",list:e.cameraList},model:{value:e.currentCameraIndex,callback:function(t){e.currentCameraIndex=t},expression:"currentCameraIndex"}}),a("CVselect",{attrs:{name:"Resolution",list:e.resolutionList},model:{value:e.cameraSettings.resolution,callback:function(t){e.$set(e.cameraSettings,"resolution",t)},expression:"cameraSettings.resolution"}}),a("CVselect",{attrs:{name:"Stream Resolution",list:["1:1","1:2","1:4","1:6"]},model:{value:e.cameraSettings.streamDivisor,callback:function(t){e.$set(e.cameraSettings,"streamDivisor",t)},expression:"cameraSettings.streamDivisor"}}),a("CVnumberinput",{attrs:{name:"Diagonal FOV"},model:{value:e.cameraSettings.fov,callback:function(t){e.$set(e.cameraSettings,"fov",t)},expression:"cameraSettings.fov"}}),a("v-btn",{staticStyle:{"margin-top":"10px"},attrs:{small:"",color:"#4baf62"},on:{click:e.sendCameraSettings}},[e._v("Save Camera Settings")])],1)},n=[],i=a("8384"),r=a("9696"),o={name:"CameraSettings",components:{CVselect:i["a"],CVnumberinput:r["a"]},data(){return{}},methods:{sendCameraSettings(){this.handleInput("cameraSettings",this.cameraSettings)}},computed:{currentCameraIndex:{get(){return this.$store.state.currentCameraIndex},set(e){this.$store.commit("currentCameraIndex",e)}},cameraList:{get(){return this.$store.state.cameraList},set(e){this.$store.commit("cameraList",e)}},resolutionList:{get(){return this.$store.state.resolutionList}},cameraSettings:{get(){return this.$store.state.cameraSettings},set(e){this.$store.commit("cameraSettings",e)}}}},l=o,c=a("2877"),d=a("6544"),u=a.n(d),m=a("8336"),p=Object(c["a"])(l,s,n,!1,null,"9200c51c",null);t["default"]=p.exports;u()(p,{VBtn:m["a"]})},"13f2":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("CVnumberinput",{attrs:{name:"Team Number"},model:{value:e.settings.teamNumber,callback:function(t){e.$set(e.settings,"teamNumber",t)},expression:"settings.teamNumber"}}),a("CVradio",{attrs:{list:["DHCP","Static"]},model:{value:e.settings.connectionType,callback:function(t){e.$set(e.settings,"connectionType",t)},expression:"settings.connectionType"}}),a("v-divider",{attrs:{color:"white"}}),a("CVinput",{attrs:{name:"IP",disabled:e.isDisabled},model:{value:e.settings.ip,callback:function(t){e.$set(e.settings,"ip",t)},expression:"settings.ip"}}),a("CVinput",{attrs:{name:"NetMask",disabled:e.isDisabled},model:{value:e.settings.netmask,callback:function(t){e.$set(e.settings,"netmask",t)},expression:"settings.netmask"}}),a("CVinput",{attrs:{name:"Gateway",disabled:e.isDisabled},model:{value:e.settings.gateway,callback:function(t){e.$set(e.settings,"gateway",t)},expression:"settings.gateway"}}),a("v-divider",{attrs:{color:"white"}}),a("CVinput",{attrs:{name:"Hostname"},model:{value:e.settings.hostname,callback:function(t){e.$set(e.settings,"hostname",t)},expression:"settings.hostname"}}),a("v-btn",{staticStyle:{"margin-top":"10px"},attrs:{small:"",color:"#4baf62"},on:{click:e.sendGeneralSettings}},[e._v("Save General Settings")])],1)},n=[],i=a("9696"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-radio-group",{attrs:{row:"",dark:"",mandatory:!0},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}},e._l(e.list,(function(e,t){return a("v-radio",{key:t,attrs:{color:"#4baf62",label:e,value:t}})})),1)],1)},o=[],l={name:"Radio",props:["value","list"],data(){return{}},computed:{localValue:{get(){return this.value},set(e){this.$emit("input",e)}}}},c=l,d=a("2877"),u=a("6544"),m=a.n(u),p=(a("2c64"),a("ba87")),h=a("9d26"),v=a("c37a"),g=a("a9ad"),f=a("4e82"),b=a("5311"),C=a("7560"),x=a("fe09"),S=a("80d2"),V=a("58df");const $=Object(V["a"])(g["a"],b["a"],Object(f["a"])("radioGroup"),C["a"]);var k=$.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$vuetify.icons.radioOff"},onIcon:{type:String,default:"$vuetify.icons.radioOn"},readonly:Boolean,value:{default:null}},data:()=>({isFocused:!1}),computed:{classes(){return{"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused,...this.themeClasses,...this.groupClasses}},computedColor(){return x["a"].options.computed.computedColor.call(this)},computedIcon(){return this.isActive?this.onIcon:this.offIcon},computedId(){return v["a"].options.computed.computedId.call(this)},hasLabel:v["a"].options.computed.hasLabel,hasState(){return(this.radioGroup||{}).hasState},isDisabled(){return this.disabled||!!(this.radioGroup||{}).disabled},isReadonly(){return this.readonly||!!(this.radioGroup||{}).readonly},computedName(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||`radio-${this.radioGroup._uid}`},validationState(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput(e){return x["a"].options.methods.genInput.call(this,"radio",e)},genLabel(){return this.hasLabel?this.$createElement(p["a"],{on:{click:e=>{e.preventDefault(),this.onChange()}},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(S["o"])(this,"label")||this.label):null},genRadio(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput({name:this.computedName,value:this.value,...this.$attrs}),this.genRipple(this.setTextColor(this.validationState)),this.$createElement(h["a"],this.setTextColor(this.validationState,{}),this.computedIcon)])},onFocus(e){this.isFocused=!0,this.$emit("focus",e)},onBlur(e){this.isFocused=!1,this.$emit("blur",e)},onChange(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:()=>{}},render(e){const t={staticClass:"v-radio",class:this.classes};return e("div",t,[this.genRadio(),this.genLabel()])}}),I=(a("ec29"),a("3d86"),a("604c")),y=a("8547");const w=Object(V["a"])(y["a"],I["a"],v["a"]);var _=w.extend({name:"v-radio-group",provide(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:{default:null}},computed:{classes(){return{...v["a"].options.computed.classes.call(this),"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row}}},methods:{genDefaultSlot(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},v["a"].options.methods.genDefaultSlot.call(this))},genInputSlot(){const e=v["a"].options.methods.genInputSlot.call(this);return delete e.data.on.click,e},genLabel(){const e=v["a"].options.methods.genLabel.call(this);return e?(e.data.attrs.id=this.computedId,delete e.data.attrs.for,e.tag="div",e):null},onClick:I["a"].options.methods.onClick}}),D=Object(d["a"])(c,r,o,!1,null,"343af1f8",null),T=D.exports;m()(D,{VRadio:k,VRadioGroup:_});var E=a("759a"),G={name:"General",components:{CVnumberinput:i["a"],CVradio:T,CVinput:E["a"]},data(){return{}},methods:{sendGeneralSettings(){this.handleInput("generalSettings",this.settings)}},computed:{isDisabled(){return 0===this.settings.connectionType},settings:{get(){return this.$store.state.settings}}}},L=G,F=a("8336"),M=a("ce7e"),O=Object(d["a"])(L,s,n,!1,null,"1dcf8b5f",null);t["default"]=O.exports;m()(O,{VBtn:F["a"],VDivider:M["a"]})},1447:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",{attrs:{dense:"",align:"center"}},[a("v-col",{attrs:{cols:2}},[a("span",[e._v(e._s(e.name))])]),a("v-col",{attrs:{cols:10}},[a("v-slider",{staticClass:"align-center",attrs:{value:e.localValue,dark:"",max:e.max,min:e.min,"hide-details":"",color:"#4baf62",step:e.step},on:{start:function(t){e.isClicked=!0},end:function(t){e.isClicked=!1},change:e.handleclick,input:e.handleInput},scopedSlots:e._u([{key:"append",fn:function(){return[a("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"50px"},attrs:{dark:"",max:e.max,min:e.min,value:e.localValue,"hide-details":"","single-line":"",type:"number",step:e.step},on:{input:e.handleChange,focus:function(t){e.isFocused=!0},blur:function(t){e.isFocused=!1}}})]},proxy:!0}])})],1)],1)],1)},n=[],i={name:"Slider",props:["min","max","name","value","step"],data(){return{isFocused:!1,isClicked:!1}},methods:{handleChange(e){this.isFocused&&(this.localValue=parseFloat(e))},handleInput(e){!this.isFocused&&this.isClicked&&(this.localValue=e)},handleclick(e){this.isFocused||(this.localValue=e)}},computed:{localValue:{get(){return this.value},set(e){this.$emit("input",e)}}}},r=i,o=a("2877"),l=a("6544"),c=a.n(l),d=a("62ad"),u=a("0fd9"),m=a("ba0d"),p=a("8654"),h=Object(o["a"])(r,s,n,!1,null,"3505e445",null);t["a"]=h.exports;c()(h,{VCol:d["a"],VRow:u["a"],VSlider:m["a"],VTextField:p["a"]})},"26d3":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",[a("v-col",{staticClass:"colsClass",attrs:{cols:"6"}},[a("v-tabs",{attrs:{"background-color":"#212121",dark:"","fixed-tabs":"",height:"50","slider-color":"#4baf62"},model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},[a("v-tab",{attrs:{to:""}},[e._v("General")]),a("v-tab",{attrs:{to:""}},[e._v("Cameras")]),a("v-tab",{attrs:{to:""}},[e._v("Driver Mode")])],1),a("div",{staticStyle:{"padding-left":"30px"}},[a(e.selectedComponent,{tag:"component",on:{update:function(t){return e.$emit("save")}}})],1)],1),a("v-col",{directives:[{name:"show",rawName:"v-show",value:1===e.selectedTab||2===e.selectedTab,expression:"selectedTab === 1 || selectedTab === 2"}],staticClass:"colsClass"},[a("div",{staticClass:"videoClass"},[a("img",{attrs:{src:e.steamAddress}})])])],1)],1)},n=[],i=a("13f2"),r=a("0b81"),o=a("e5f2"),l={name:"SettingsTab",components:{General:i["default"],Cameras:r["default"],DriverMode:o["default"]},data(){return{selectedTab:0}},computed:{selectedComponent:{get(){switch(this.selectedTab){case 0:return"General";case 1:return"Cameras";case 2:return"DriverMode"}return""}},steamAddress:{get:function(){return"http://"+location.hostname+":"+this.$store.state.port+"/stream.mjpg"}}}},c=l,d=(a("4d6b"),a("2877")),u=a("6544"),m=a.n(u),p=a("62ad"),h=a("0fd9"),v=a("71a3"),g=a("fe57"),f=Object(d["a"])(c,s,n,!1,null,"334f1a60",null);t["default"]=f.exports;m()(f,{VCol:p["a"],VRow:h["a"],VTab:v["a"],VTabs:g["a"]})},"2c64":function(e,t,a){},"3d86":function(e,t,a){},"4d6b":function(e,t,a){"use strict";var s=a("d8d5"),n=a.n(s);n.a},"759a":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",{attrs:{dense:"",align:"center"}},[a("v-col",{attrs:{cols:3}},[a("span",[e._v(e._s(e.name))])]),a("v-col",{attrs:{cols:9}},[a("v-text-field",{attrs:{dark:"",dense:"",disabled:e.disabled,"error-messages":e.errorMessage},on:{keydown:e.handleKeyboard},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}})],1)],1)],1)},n=[],i={name:"Input",props:["name","value","disabled","errorMessage"],data(){return{}},methods:{handleKeyboard(e){"Enter"==e.key&&this.$emit("Enter")}},computed:{localValue:{get(){return this.value},set(e){this.$emit("input",e)}}}},r=i,o=a("2877"),l=a("6544"),c=a.n(l),d=a("62ad"),u=a("0fd9"),m=a("8654"),p=Object(o["a"])(r,s,n,!1,null,"60193ff2",null);t["a"]=p.exports;c()(p,{VCol:d["a"],VRow:u["a"],VTextField:m["a"]})},9696:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",{attrs:{dense:"",align:"center"}},[a("v-col",{attrs:{cols:2}},[a("span",[e._v(e._s(e.name))])]),a("v-col",[a("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"70px"},attrs:{dark:"","hide-details":"","single-line":"",type:"number"},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}})],1)],1)],1)},n=[],i={name:"NumberInput",props:["name","value"],data(){return{}},computed:{localValue:{get(){return this.value},set(e){this.$emit("input",parseInt(e))}}}},r=i,o=a("2877"),l=a("6544"),c=a.n(l),d=a("62ad"),u=a("0fd9"),m=a("8654"),p=Object(o["a"])(r,s,n,!1,null,"648eb9bb",null);t["a"]=p.exports;c()(p,{VCol:d["a"],VRow:u["a"],VTextField:m["a"]})},d8d5:function(e,t,a){},e5f2:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("CVselect",{attrs:{name:"Camera",list:e.cameraList},model:{value:e.currentCameraIndex,callback:function(t){e.currentCameraIndex=t},expression:"currentCameraIndex"}}),a("CVswitch",{attrs:{name:"Driver Mode"},on:{input:e.sendDriverMode},model:{value:e.driverState.isDriver,callback:function(t){e.$set(e.driverState,"isDriver",t)},expression:"driverState.isDriver"}}),a("CVslider",{attrs:{name:"Exposure",min:0,max:100},on:{input:e.sendDriverMode},model:{value:e.driverState.driverExposure,callback:function(t){e.$set(e.driverState,"driverExposure",t)},expression:"driverState.driverExposure"}}),a("CVslider",{attrs:{name:"Brightness",min:0,max:100},on:{input:e.sendDriverMode},model:{value:e.driverState.driverBrightness,callback:function(t){e.$set(e.driverState,"driverBrightness",t)},expression:"driverState.driverBrightness"}})],1)},n=[],i=a("8384"),r=a("b530"),o=a("1447"),l={name:"DriverMode",components:{CVselect:i["a"],CVswitch:r["a"],CVslider:o["a"]},methods:{sendDriverMode(){this.handleInput("driverMode",this.driverState),this.$emit("update")}},computed:{currentCameraIndex:{get(){return this.$store.state.currentCameraIndex},set(e){this.$store.commit("currentCameraIndex",e)}},cameraList:{get(){return this.$store.state.cameraList},set(e){this.$store.commit("cameraList",e)}},driverState:{get(){return this.$store.state.driverMode},set(e){this.$store.commit("driverMode",e)}}}},c=l,d=a("2877"),u=Object(d["a"])(c,s,n,!1,null,"a82c7778",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-1dc1c444.113adf3d.js.map