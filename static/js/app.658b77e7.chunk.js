(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{105:function(e,t,r){e.exports=r.p+"./fonts/Roboto-Regular.ttf"},106:function(e,t,r){e.exports=r.p+"./fonts/Roboto-Bold.ttf"},107:function(e,t,r){e.exports=r.p+"./fonts/Zapfino.otf"},119:function(e,t,r){e.exports=r.p+"static/media/stars-on-night.d71538a9.jpg"},125:function(e,t,r){"use strict";r.r(t),r.d(t,"App",(function(){return ze}));var n=r(30),o=r.n(n),a=r(4),c=r.n(a),i=r(0),s=r(3),l=r(89),d=r(28),u=r(48),p=r(8),f=r(131),b=r(91),y=Object.freeze({selected:"selected",username:"username",password:"password",appIsReady:"appIsReady",error:"error",increment:"increment",decrement:"decrement",isKeyboardOpen:"isKeyboardOpen",stateNames:{my:"my",tutorial:"tutorial",count:"count"}}),j=Object.freeze({primary:"#212121",accent:"#2196f3",aliceBlue:"#f0f8ff",black:"#000000",white:"#000000",lightestGrey:"#eee",lightGrey:"lightgrey",green:"green",red:"red",lightPink:"#ffb6c1",transparent:"transparent",royalBlue:"#4169e1"}),g=Object.freeze({dark:{main:{fg:j.aliceBlue,bg:j.primary}},colors:j});function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=y.selected,x=y.increment,v=y.decrement,w=y.username,P=y.password,C=y.appIsReady,k=y.error,R=y.isKeyboardOpen,B=y.stateNames.count,S=function(e,t){var r,n=t.type,o=t.payload;return(r={},c()(r,m,(function(){return h(h({},e),{},c()({},m,o))})),c()(r,C,(function(){return h(h({},e),{},c()({},C,o))})),c()(r,P,(function(){return h(h({},e),{},c()({},P,o))})),c()(r,w,(function(){return h(h({},e),{},c()({},w,o))})),c()(r,x,(function(){return h(h({},e),{},c()({},B,e[B]+o))})),c()(r,v,(function(){return h(h({},e),{},c()({},B,e[B]-o))})),c()(r,k,(function(){return h(h({},e),{},c()({},k,o))})),c()(r,R,(function(){return h(h({},e),{},c()({},R,o))})),r)[n]()},z=r(2),I=r.n(z),D=r(132),T={"Roboto-Regular":r(105),"Roboto-Bold":r(106),Zapfino:r(107)},L=r(26),H=y.isKeyboardOpen,E=Object(i.createContext)(),W=r(29),A=r(5),M=r(1),V=s.a.create({navBar:{flexDirection:"row",backgroundColor:g.dark.main.bg,paddingVertical:8},navBtn:{paddingHorizontal:12,minWidth:100}}),N=y.selected,K=y.stateNames,Z=function(){var e=Object(i.useContext)(E).dispatch;return Object(M.jsxs)(A.a,{style:V.navBar,children:[Object(M.jsx)(A.a,{style:V.navBtn,children:Object(M.jsx)(W.a,{title:"My",onPress:function(){return e({type:N,payload:K.my})}})}),Object(M.jsx)(A.a,{style:V.navBtn,children:Object(M.jsx)(W.a,{title:"Tutorial",style:V.navBtn,onPress:function(){return e({type:N,payload:K.tutorial})}})})]})},F=r(14),G=r.n(F),J=r(15),q=r.n(J),U=r(17),Q=r.n(U),X=r(18),Y=r.n(X),$=r(11),_=r.n($),ee=r(12),te=r(84);function re(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=_()(e);if(t){var o=_()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Y()(this,r)}}var ne=function(e){var t=e.style;return Object(M.jsxs)(ee.a,{style:t,children:["Hello, my name is ","Maru",". I am your const cat\ud83d\ude3c!"]})};ne.propTypes={style:r.n(te).a.object.isRequired};!function(e){Q()(r,e);var t=re(r);function r(){var e;G()(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).name="Maru",e}q()(r,[{key:"render",value:function(){return Object(M.jsxs)(ee.a,{children:["Hello, my name is ",this.name,". I am your class cat\ud83d\ude3c!"]})}}])}(i.PureComponent);var oe=r(85),ae=r(36),ce=r(51),ie=r(49),se=r(90),le={reactLogo:r(60),mainBgImage:r(60),tutBgImage:r(119)},de=s.a.create({cat:{color:"#eee"},contentContainer:{backgroundColor:"transparent",paddingTop:0,paddingBottom:0},mainBgImage:{position:"absolute",top:0,right:0,bottom:0,left:0,zIndex:-1,flex:1,resizeMode:"cover"},container:{flex:1,backgroundColor:"transparent",alignItems:"center",justifyContent:"center",paddingVertical:36},height:"ios"===p.a.OS?50:100,title:{marginTop:16,paddingVertical:8,borderWidth:4,borderColor:"#20232a",borderRadius:150,backgroundColor:"#61dafb",color:"#20232a",textAlign:"center",fontSize:100,fontWeight:"bold"},placeholder:{color:"green"},input:{width:200,fontSize:21,padding:10,borderWidth:1,borderColor:"#000000",marginBottom:10,borderRadius:6,color:"#aaa",backgroundColor:"#212121"},status:{padding:10,textAlign:"center"},logoContainer:{padding:20},text:{fontSize:30},reactLogo:{width:80,height:80},textMain:{fontFamily:"Roboto-Regular",fontSize:21,color:"#aaa",backgroundColor:"#212121",paddingVertical:8,paddingHorizontal:16},textBold:{fontFamily:"Roboto-Bold",fontSize:21,color:"#aaa",backgroundColor:"#212121",paddingVertical:8,paddingHorizontal:16},textCalligraphy:{fontFamily:"Zapfino",fontSize:50,color:"#aaa",backgroundColor:"#212121",paddingVertical:8,paddingHorizontal:16}}),ue={fg:"#aaa"},pe=function(){var e=Object(i.useContext)(E),t=e.username,r=e.password,n=e.count,o=e.keyboardStatus,a=e.width,c=e.height,s=e.dispatch,l=e.onLogin;return Object(M.jsx)(oe.a,{onPress:L.a.dismiss,children:Object(M.jsxs)(A.a,{children:[Object(M.jsx)(se.a,{contentContainerStyle:de.contentContainer,children:Object(M.jsxs)(u.a,{behavior:"ios"==p.a.OS&&"padding",children:[Object(M.jsx)(A.a,{style:de.logoContainer,children:Object(M.jsx)(ce.a,{source:le.reactLogo,style:de.reactLogo})}),Object(M.jsxs)(A.a,{style:de.container,children:[Object(M.jsx)(ne,{style:de.cat}),Object(M.jsx)(ae.a,{value:t,onChangeText:function(e){return s({type:y.username,payload:e})},maxLength:21,placeholder:"Username",style:de.input,placeholderTextColor:ue.fg}),Object(M.jsx)(ae.a,{value:r,onChangeText:function(e){return s({type:y.password,payload:e})},maxLength:30,placeholder:"Password",secureTextEntry:!0,style:de.input,placeholderTextColor:ue.fg}),Object(M.jsx)(W.a,{title:"Login",style:de.input,onPress:l}),Object(M.jsx)(W.a,{title:""+n,onPress:function(){return s({type:y.increment,payload:1})}}),Object(M.jsx)(W.a,{title:""+n,onPress:function(){return s({type:y.decrement,payload:1})}}),Object(M.jsx)(ee.a,{style:de.textDefault,children:"Platform Default"}),Object(M.jsx)(ee.a,{style:de.textMain,children:"Roboto-Regular"}),Object(M.jsx)(ee.a,{style:de.textBold,children:"Roboto-Bold"}),Object(M.jsx)(ee.a,{style:de.textCalligraphy,children:"Hello World! I'm Zapfino font"}),Object(M.jsx)(ee.a,{style:de.status,children:o})]})]})}),Object(M.jsx)(ie.a,{source:le.mainBgImage,style:[de.mainBgImage,{width:a,height:c}]})]})})},fe=r(47);function be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?be(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var je,ge=s.a.create({container:{flex:1,backgroundColor:g.dark.main.bg},text:{color:g.colors.green,fontSize:30},innerBox:{borderWidth:1,borderColor:g.colors.red,padding:40,borderRadius:10,width:300},image:{flex:1,resizeMode:"cover",justifyContent:"flex-end"},input:{borderWidth:1,borderColor:g.dark.main.fg,borderRadius:6,color:g.dark.main.fg,paddingVertical:4,paddingHorizontal:12,fontSize:21},form:{marginHorizontal:20},inputTitle:{marginBottom:10,fontSize:18,color:g.dark.main.fg},btn:ye({justifyContent:"center",alignItems:"center",paddingVertical:8,paddingHorizontal:12,marginTop:40,marginHorizontal:20,borderRadius:6,borderWidth:1},p.a.select({ios:{backgroundColor:g.colors.transparent,borderColor:g.dark.main.fg},android:{backgroundColor:g.colors.royalBlue,borderColor:g.colors.transparent},default:{}})),btnLabel:{fontSize:21,color:"ios"===p.a.OS?g.colors.royalBlue:g.dark.main.fg},header:{alignItems:"center",marginBottom:0},headerTitle:{fontSize:30,color:g.dark.main.fg}}),Oe=function(){var e=Object(i.useContext)(E).isKeyboardOpen;return Object(M.jsx)(A.a,{style:ge.container,children:Object(M.jsx)(ie.a,{source:le.tutBgImage,style:ge.image,children:Object(M.jsxs)(A.a,{style:ye(ye({},ge.form),{},{marginBottom:0}),children:[Object(M.jsxs)(A.a,{style:ge.header,children:[Object(M.jsx)(ee.a,{style:ge.headerTitle,children:"Hello again"}),Object(M.jsx)(ee.a,{style:ge.headerTitle,children:"Welcome back"})]}),Object(M.jsxs)(A.a,{children:[Object(M.jsxs)(ee.a,{style:ge.inputTitle,children:["EMAIL ADDRESS ",""+e]}),Object(M.jsx)(ae.a,{textAlign:"center",keyboardType:"email-address",style:ge.input})]}),Object(M.jsxs)(A.a,{style:{marginTop:20},children:[Object(M.jsx)(ee.a,{style:ge.inputTitle,children:"PASSWORD"}),Object(M.jsx)(ae.a,{secureTextEntry:!0,textAlign:"center",style:ge.input})]}),Object(M.jsx)(A.a,{children:Object(M.jsx)(fe.a,{activeOpacity:.8,style:ge.btn,onPress:function(){return L.a.dismiss()},children:Object(M.jsx)(ee.a,{style:ge.btnLabel,children:"SIGN IN"})})})]})})})};function he(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?he(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var xe=s.a.create({app:{flex:1,paddingTop:40,backgroundColor:g.dark.main.bg}}),ve=y.stateNames,we=y.selected,Pe=y.username,Ce=y.password,ke=y.appIsReady,Re=y.error,Be=y.keyboardStatus,Se=Object.freeze((je={},c()(je,we,ve.tutorial),c()(je,Pe,""),c()(je,Ce,""),c()(je,ke,!1),c()(je,Re,!1),c()(je,ve.count,0),c()(je,Be,void 0),je)),ze=function(){var e=Object(i.useReducer)(S,me({},Se)),t=o()(e,2),r=t[0],n=t[1];if(function(e){Object(i.useEffect)((function(){I.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I.a.awrap(I.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.awrap(D.a(T));case 2:case"end":return e.stop()}}),null,null,null,Promise));case 3:t.next=9;break;case 5:t.prev=5,t.t0=t.catch(0),e({type:y.error,payload:t.t0}),console.warn(t.t0);case 9:return t.prev=9,e({type:y.appIsReady,payload:!0}),t.finish(9);case 12:case"end":return t.stop()}}),null,null,[[0,5,9,12]],Promise)}),[e])}(n),function(e){Object(i.useEffect)((function(){var t=L.a.addListener("keyboardDidShow",(function(){e({type:H,payload:!0})})),r=L.a.addListener("keyboardDidHide",(function(){e({type:H,payload:!1})}));return function(){t.remove(),r.remove()}}),[e])}(n),!r.appIsReady)return Object(M.jsx)(b.a,{});var a=d.a.get("window"),c=a.width,s=a.height,f=r.selected&&r.selected===ve.my,j=r.selected&&r.selected===ve.tutorial,g=me(me({},r),{},{dispatch:n,width:c,height:s,onLogin:function(){return l.a.alert("Credentials",r.username&&r.password?r.username+" + "+r.password:"Please enter email and password")}}),O="ios"===p.a.OS?"padding":"";return Object(M.jsx)(u.a,{style:xe.app,behavior:O,children:Object(M.jsxs)(E.Provider,{value:g,children:[Object(M.jsx)(Z,{}),f&&Object(M.jsx)(pe,{}),j&&Object(M.jsx)(Oe,{})]})})};Object(f.a)(ze)},60:function(e,t,r){e.exports=r.p+"static/media/logo-react.ef20e673.png"},92:function(e,t,r){e.exports=r(125)}},[[92,1,2]]]);
//# sourceMappingURL=app.658b77e7.chunk.js.map