(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,a,t){e.exports=t.p+"static/media/logo.37a39b35.png"},53:function(e,a,t){e.exports=t(79)},58:function(e,a,t){},69:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(41),l=t.n(r),s=(t(58),t(11)),m=t(12),u=t(18),i=t(13),o=t(19),h=t(51),p=t(14),E=t(83),d=t(84),b=(t(69),t(47)),g=t.n(b),f=t(24),_=t(10),y=t.n(_),N=t(25),v=t.n(N),k=t(48),j=t.n(k),O=t(82);function w(e){var a=e.launch,t=a.flight_number,n=a.mission_name,r=a.launch_date_local,l=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission:"," ",c.a.createElement("span",{className:v()({"text-success":l,"text-danger":!l})},n)),c.a.createElement("p",null,"Date: ",c.a.createElement(j.a,{format:"YYYY-MM-DD HH:mm"},r))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(O.a,{to:"/launch/".concat(t),className:"btn btn-secondary"},"Launch Details"))))}function x(){return c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Fail"))}function L(){var e=Object(f.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return L=function(){return e},e}var D=y()(L()),Y=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("h1",{className:"display-4 my-3"},"Launches"),c.a.createElement(x,null),c.a.createElement(p.Query,{query:D},function(e){var a=e.loading,t=e.error,r=e.data;return a?c.a.createElement("h4",null,"Loading ... "):(t&&console.log(t),c.a.createElement(n.Fragment,null,r.launches.map(function(e){return c.a.createElement(w,{key:e.flight_number,launch:e})})))}))}}]),a}(n.Component);function q(){var e=Object(f.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return q=function(){return e},e}var F=y()(q()),I=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement(n.Fragment,null,c.a.createElement(p.Query,{query:F,variables:{flight_number:e}},function(e){var a=e.loading,t=e.error,n=e.data;if(a)return c.a.createElement("h4",null,"Loading...");t&&console.log(t);var r=n.launch,l=r.mission_name,s=r.flight_number,m=r.launch_year,u=r.launch_success,i=r.rocket,o=i.rocket_id,h=i.rocket_name,p=i.rocket_type;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission:")," ",l),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",s),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),c.a.createElement("li",{className:"list-group-item"},"Launch Successful:"," ",c.a.createElement("span",{className:v()({"text-success":u,"text-danger":!u})},u?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",o),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",h),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",p)),c.a.createElement("hr",null),c.a.createElement(O.a,{to:"/",className:"btn btn-secondary"},"Back"))}))}}]),a}(n.Component),M=new h.a({uri:"/graphql"}),Q=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(p.ApolloProvider,{client:M},c.a.createElement(E.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:g.a,alt:"SpaceX",style:{width:300,display:"block",margin:"auto"}}),c.a.createElement(d.a,{exact:!0,path:"/",component:Y}),c.a.createElement(d.a,{exact:!0,path:"/launch/:flight_number",component:I}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[53,2,1]]]);
//# sourceMappingURL=main.6286ae02.chunk.js.map