(this["webpackJsonpapnic-virtual-labs"]=this["webpackJsonpapnic-virtual-labs"]||[]).push([[0],{122:function(e,a,t){"use strict";t.r(a),t.d(a,"getStore",(function(){return Oe})),t.d(a,"getHistory",(function(){return Pe}));var n,r=t(29),i=t(0),c=t.n(i),l=t(21),o=t.n(l),s=t(84),u=t(88),m=t(17),p=t(12),d=t(24),g=t(67),b=t.n(g),f=Object(m.b)("APP/ERROR"),v=Object(m.b)("APP/LABLIST"),E=Object(m.b)("APP/LOADING"),h=Object(m.b)("APP/LOADED"),O=Object(m.b)("APP/PAGESIZE"),P=Object(m.b)("APP/CURRENTPAGE"),j={pJSON:r,error:!1,labList:[],loading:!1,loaded:!1,pageSize:3,currentPage:1},y=Object(m.c)(j,(n={},Object(d.a)(n,P,(function(e,a){return e.currentPage=a.currentPage,e})),Object(d.a)(n,O,(function(e,a){return e.pageSize=a.pageSize,e})),Object(d.a)(n,v,(function(e,a){return e.labList=a.labList,e})),Object(d.a)(n,E,(function(e,a){return e.loading=a.loading,e})),Object(d.a)(n,h,(function(e,a){return e.loaded=a.loaded,e})),Object(d.a)(n,f,(function(e,a){return e.error=a.error,e})),n)),A=function(){var e=Object(p.c)({app:y}),a={app:j},t=Object(u.a)(Object(m.d)({serializableCheck:!1}));return Object(m.a)({devTools:!1,reducer:e,middleware:t,preloadedState:a,enhancers:[]})},x=t(16),L=t(146),N=t(86),S=t(140),D=t(145),R=t(85),k={palette:{type:"light",background:{default:"#fff",paper:"#fff"},primary:{main:"#de004a"},secondary:{main:"#e7487d"}}},w=t(69),T=t(70),C=t(89),z=t(87),B=t(81),I=t.n(B),G=t(75),J=t.n(G),U=t(76),W=t.n(U),M=t(79),Z=t.n(M),_=t(80),H=t.n(_),V=t(77),$=t.n(V),q=t(78),F=t.n(q),K=t(71),Q=t.n(K),X=(i.Component,t(52)),Y=t(150),ee=t(151),ae=t(141),te=t(142),ne=Object(S.a)((function(e){return{lab:{cursor:"move",borderLeft:"2px solid "+e.palette.primary.main,paddingLeft:e.spacing(2),marginTop:e.spacing(2),marginBottom:e.spacing(2),background:"white"},mightyBB:{textTransform:"none",display:"block"},thumbnail:{width:"100%",maxWidth:200,marginTop:e.spacing(2)},labDescription:{marginRight:e.spacing(2),textAlign:"left",fontSize:14},labTitle:{textAlign:"left",fontSize:18},labDuration:{textAlign:"left",fontSize:12}}})),re="lab",ie=function(e){var a=e.id,t=e.lab,n=e.index,r=e.moveCard,l=Object(i.useRef)(null),o=ne(),s=Object(Y.a)({accept:re,hover:function(e,a){var t;if(l.current){var i=e.index,c=n;if(i!==c){var o=null===(t=l.current)||void 0===t?void 0:t.getBoundingClientRect(),s=(o.bottom-o.top)/2,u=a.getClientOffset().y-o.top;i<c&&u<s||i>c&&u>s||(r(i,c),e.index=c)}}}}),u=Object(X.a)(s,2)[1],m=Object(ee.a)({item:{type:re,id:a,index:n},collect:function(e){return{isDragging:e.isDragging()}}}),p=Object(X.a)(m,2),d=p[0].isDragging?0:1;return(0,p[1])(u(l)),c.a.createElement("div",{className:o.lab,ref:l,style:{opacity:d}},c.a.createElement("div",{className:o.mightyBB,onClick:function(e){e.preventDefault(),window.open(t.viewDetailsURL,"_blank")}},c.a.createElement(ae.a,{container:!0},c.a.createElement(ae.a,{item:!0,xs:9},c.a.createElement(te.a,{className:o.labTitle},t.name),c.a.createElement(te.a,{className:o.labDescription},t.description),c.a.createElement(te.a,{className:o.labDuration},t.formattedDuration,", ",t.language)),c.a.createElement(ae.a,{item:!0,xs:3},c.a.createElement("img",{className:o.thumbnail,src:t.thumbnail,alt:t.name})))))},ce=t(82),le=t.n(ce),oe=t(144),se=t(147),ue=Object(S.a)((function(e){return{virtualLabs:{marginTop:35,background:"white"},progress:{marginTop:60},pagination:{textAlign:"center",marginBottom:e.spacing()},grow:{flexGrow:1},pagify:{textAlign:"right"},slider:{marginTop:e.spacing()},error:{margin:e.spacing()}}}));function me(){var e=ue(),a=Object(x.b)(),t=Object(x.c)((function(e){return e.app})),n=t.error,r=t.labList,l=t.loading,o=t.loaded,s=t.pageSize,u=t.currentPage,m=Object(i.useCallback)((function(e,t){var n=r[e];a({type:"APP/LABLIST",labList:le()(r,{$splice:[[e,1],[t,0,n]]})})}),[r,a]);return n?c.a.createElement(se.a,{className:e.error,severity:"warning",variant:"filled"},c.a.createElement(te.a,{variant:"h5"},n)):l&&!o?c.a.createElement("div",{className:e.progress},c.a.createElement(oe.a,{color:"primary"})):r.length?c.a.createElement("div",{className:e.virtualLabs},c.a.createElement(ae.a,{container:!0,className:e.pagination},c.a.createElement(ae.a,{item:!0,xs:3,className:e.slider},c.a.createElement(ge,null)),c.a.createElement(ae.a,{item:!0,className:e.grow}),c.a.createElement(ae.a,{item:!0},c.a.createElement("div",{className:e.pagify},c.a.createElement(fe,null)))),r.map((function(e,a){var t=s*(u-1);return a>t&&a<=t+s?function(e,a){return c.a.createElement(ie,{key:e.id,lab:e,index:a,id:e.id,moveCard:m})}(e,a):null}))):null}var pe=t(152);function de(e){return"".concat(e)}function ge(){var e=Object(x.b)(),a=Object(x.c)((function(e){return e.app})),t=a.pageSize,n=a.labList;return c.a.createElement(ae.a,{container:!0},c.a.createElement(ae.a,{item:!0},c.a.createElement(te.a,{style:{marginRight:8,fontSize:16}},t)),c.a.createElement(ae.a,{item:!0,xs:8},c.a.createElement(pe.a,{marks:!0,value:t,getAriaValueText:de,valueLabelDisplay:"auto",step:1,min:2,max:n.length,onChange:function(a,t){e({type:"APP/PAGESIZE",pageSize:t}),e({type:"APP/CURRENTPAGE",currentPage:1})}})))}var be=t(148);function fe(){var e=Object(x.b)(),a=Object(x.c)((function(e){return e.app})),t=a.pageSize,n=a.currentPage,r=a.labList,i=Math.floor(r.length/t);return i<2?null:c.a.createElement(be.a,{size:"small",shape:"rounded",count:i,page:n,onChange:function(a,t){e({type:"APP/CURRENTPAGE",currentPage:t})}})}var ve=Object(S.a)((function(e){return{app:{maxWidth:580,margin:"auto",background:"white"}}}));function Ee(){var e=Object(x.c)((function(e){return e.app})),a=e.loading,t=e.loaded;c.a.useEffect((function(){t||a||function(){var e=Oe();e.dispatch({type:"APP/LOADING",loading:!0}),b.a.get("https://academy.apnic.net/wp-json/academy/virtual-labs").then((function(a){e.dispatch({type:"APP/LABLIST",labList:a.data.virtualLabs})})).catch((function(a){console.log("error",a.toString()),e.dispatch({type:"APP/ERROR",error:a.toString()})})).finally((function(){e.dispatch({type:"APP/LOADING",loading:!1}),e.dispatch({type:"APP/LOADED",loaded:!0})}))}()}),[t,a]);var n=ve();return c.a.createElement(D.a,{theme:Object(R.a)(k)},c.a.createElement("div",{className:n.app},c.a.createElement(me,null)))}console.log("".concat(r.name," ").concat(r.version));var he=A(),Oe=function(){return he},Pe=function(){return Object(s.a)()};o.a.render(c.a.createElement(x.a,{store:he},c.a.createElement(L.a,{backend:N.a},c.a.createElement(Ee,null))),document.getElementById("apnic"))},29:function(e){e.exports=JSON.parse('{"name":"apnic-virtual-labs","version":"0.1.1","description":"WordPress/React Practical Exercise 31st July 2020","author":{"name":"chris dorward","email":"listingslab@gmail.com"},"scripts":{"start":"react-scripts start","build":"react-scripts build"},"dependencies":{"@material-ui/core":"^4.11.0","@material-ui/icons":"^4.9.1","@material-ui/lab":"^4.0.0-alpha.56","@reduxjs/toolkit":"^1.4.0","axios":"^0.19.2","faker":"^4.1.0","history":"^5.0.0","immutability-helper":"^3.1.1","react":"^16.13.1","react-dnd":"^11.1.3","react-dnd-html5-backend":"^11.1.3","react-dom":"^16.13.1","react-frame-component":"^4.1.3","react-redux":"^7.2.1","react-scripts":"3.4.1","redux":"^4.0.5"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"license":"MIT"}')},96:function(e,a,t){e.exports=t(122)}},[[96,1,2]]]);
//# sourceMappingURL=main.c3d00e86.chunk.js.map