(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e){e.exports=[{id:1,name:"image1",image:"./imgs/img1.png"},{id:2,name:"image2",image:"./imgs/img2.png"},{id:3,name:"image3",image:"./imgs/img3.png"},{id:4,name:"image4",image:"./imgs/img4.png"},{id:5,name:"image5",image:"./imgs/img5.png"},{id:6,name:"image6",image:"./imgs/img6.png"},{id:7,name:"image7",image:"./imgs/img7.png"},{id:8,name:"image8",image:"./imgs/img8.png"},{id:9,name:"image9",image:"./imgs/img9.png"},{id:10,name:"image10",image:"./imgs/img10.png"},{id:11,name:"image11",image:"./imgs/img11.png"},{id:12,name:"image12",image:"./imgs/img12.png"}]},,,,function(e,a,t){e.exports=t(20)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),m=t(3),c=t.n(m),o=(t(17),t(8)),r=t(4),s=t(5),l=t(9),g=t(6),d=t(10);t(18);var p=function(e){var a={nav:{backgroundColor:"#DA071D",color:"white"},a:{color:"white",fontSize:"calc(10px + 14 * (100vw - 320px)/ 800)"},navItems:{display:"flex",flexDirection:"row"},span1:{position:"relative",right:"40%",fontSize:"calc(10px + 14 * (100vw - 320px)/ 800)"},span2:{fontSize:"calc(10px + 14 * (100vw - 320px)/ 800)"}};return i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar fixed-top",style:a.nav},i.a.createElement("a",{className:"navbar-brand mb-0 h3",href:"#",style:a.a},"Clicky Game"),i.a.createElement("div",{className:"navbar-nav",style:a.navItems},i.a.createElement("span",{className:"nav-item mb-0 h1",style:a.span1},"Click an image to begin!"),i.a.createElement("span",{className:"nav-item mb-0 h1",style:a.span2},"Score: ",e.score," | Top Score: ",e.topScore))))};var u=function(){var e={jumbotron:{backgroundAttachment:"fixed",backgroundImage:"url(./imgs/jumb.gif)",backgroundPosition:"0 -250px",minHeight:"500px",backgroundSize:"100%",paddingTop:"100px"},innerJumb:{color:"white",fontWeight:"bold"}};return i.a.createElement("div",{className:"jumbotron",style:e.jumbotron},i.a.createElement("h1",{className:"display-4 d-flex justify-content-center",style:e.innerJumb},"Adventure Time Clicky Game"),i.a.createElement("p",{className:"lead d-flex justify-content-center",style:e.innerJumb},"Click on an image to earn points, but don't click on any more than once!"))};var h=function(e){return i.a.createElement("img",{alt:e.name,src:e.image,style:{display:"block",height:"150px",margin:"15px 55px",width:"120px"},id:e.id,onClick:e.handleClick})},v=t(7);t(19);var f=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("span",null,"Clicky Game 2019"))},b=t(1),k=t.n(b),y=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),m=0;m<n;m++)i[m]=arguments[m];return(t=Object(l.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(i)))).state={score:0,topScore:0,images:v,selected:[]},t.checkTopScore=function(){t.state.score>t.state.topScore&&t.setState({topScore:t.state.score})},t.handleClick=function(e){e.persist(),console.log(e);var a=e.target.id;t.state.selected.includes(a)?t.setState({images:k()(t.state.images),selected:[],score:0}):t.setState({images:k()(t.state.images),selected:[a].concat(Object(o.a)(t.state.selected)),score:t.state.score+1},function(){return t.checkTopScore()})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement(p,{score:this.state.score,topScore:this.state.topScore}),i.a.createElement(u,null),i.a.createElement("div",{id:"game",className:"container"},this.state.images.map(function(a){return console.log(a.id),i.a.createElement(h,{key:a.name,image:a.image,name:a.name,id:a.id,handleClick:e.handleClick})})),i.a.createElement(f,null))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.f766032a.chunk.js.map