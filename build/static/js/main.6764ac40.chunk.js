(this.webpackJsonpcovidapp=this.webpackJsonpcovidapp||[]).push([[0],{33:function(e,t,a){e.exports=a(64)},38:function(e,t,a){},39:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),c=a.n(r),m=(a(38),a(12)),o=a(1),u=(a(39),a(40),a(15)),i=a.n(u),s=a(29),E=a(30),d=a(8),b=a(9),h=a(11),v=a(10),p=a(31),f=a.n(p),g=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props,t=e.summary,a=e.currentDate;return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"NewConfirmed"},l.a.createElement("h3",null,"New Confirmed"),l.a.createElement("h1",null,t.NewConfirmed),l.a.createElement("h4",null,new Date(a).toDateString())),l.a.createElement("div",{className:"TotalConfirmed"},l.a.createElement("h4",null,"Total Confirmed"),l.a.createElement("h1",null,t.TotalConfirmed),l.a.createElement("h4",null,new Date(a).toDateString())),l.a.createElement("div",{className:"NewDeaths"},l.a.createElement("h4",null,"New Deaths"),l.a.createElement("h1",null,t.NewDeaths),l.a.createElement("h4",null,new Date(a).toDateString())),l.a.createElement("div",{className:"TotalDeaths"},l.a.createElement("h4",null,"Total Deaths"),l.a.createElement("h1",null,t.TotalDeaths),l.a.createElement("h4",null,new Date(a).toDateString())),l.a.createElement("div",{className:"TotalRecovered"},l.a.createElement("h4",null,"Total Recovered"),l.a.createElement("h1",null,t.TotalRecovered),l.a.createElement("h4",null,new Date(a).toDateString())))}}]),a}(l.a.Component),N=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.countries;return l.a.createElement("tr",null,l.a.createElement("td",null,e.Country),l.a.createElement("td",null,e.NewConfirmed),l.a.createElement("td",null,e.TotalConfirmed),l.a.createElement("td",null,e.TotalRecovered),l.a.createElement("td",null,e.TotalDeaths))}}]),a}(l.a.Component),y=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).insert=function(e){n.setState(Object(E.a)({},e.target.name,e.target.value))},n.show=function(){alert(n.state.txt)},n.state={countries:[],global:[],currentDate:null,loading:!0,txt:""},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://api.covid19api.com/summary");case 2:t=e.sent,this.setState({countries:t.data.Countries}),this.setState({global:t.data.Global}),this.setState({currentDate:t.data.Date}),this.setState({loading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.countries.filter((function(t){return-1!==t.Country.toLowerCase().indexOf(e.state.txt.toLowerCase())}));return this.state.loading?l.a.createElement("h1",null,"Loading ....... "):l.a.createElement("div",null,l.a.createElement(g,{summary:this.state.global,currentDate:this.state.currentDate}),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("input",{className:"form-control",name:"txt",value:this.state.txt,onChange:this.insert,id:"myInput",type:"text",placeholder:"Enter Your Country Name To Search.."}),l.a.createElement("br",null),l.a.createElement("table",{className:"table table-hover table-responsive-sm table-bordered table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"table-primary"},l.a.createElement("th",null,"Country"),l.a.createElement("th",null,"New Confirmed "),l.a.createElement("th",null,"Total Confirmed"),l.a.createElement("th",null,"Total Recovered"),l.a.createElement("th",null,"Total Deaths"))),l.a.createElement("tbody",{id:"myTable"},t.map((function(e){return l.a.createElement(N,{countries:e,key:e.Country})})))),l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)))}}]),a}(l.a.Component),D=function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("footer",{className:"mt-auto bg-primary  footer1 "},l.a.createElement("p",null,"\xa9 Copyright All Rights Reserved")))},C=function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark mb-4 bg-primary"},l.a.createElement("div",{className:"container"},l.a.createElement(m.b,{className:"navbar-brand",to:"/"},"COVID19 DATA APP"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor01"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(m.b,{className:"nav-link",to:"/"},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link",to:"/About"},"About")))))))},w=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container mt-5"},l.a.createElement("h3",{id:"abt"},"This App is developed using the API.",l.a.createElement("br",null),l.a.createElement("a",{id:"abt",href:"https://api.covid19api.com/summary"}," https://api.covid19api.com/summary ")),l.a.createElement("h3",{id:"abt"},"All data is collected from that API."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",{id:"abt"},"Thank You for Visiting the website."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",null,"Designed and developed by,"),l.a.createElement("h5",null,"----Sachin Gawade.")))};var T=function(){return l.a.createElement(m.a,null,l.a.createElement(C,null),l.a.createElement("div",{className:"container"},l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",exact:!0,component:y}),l.a.createElement(o.a,{path:"/about",exact:!0,component:w}))),l.a.createElement(D,null))};c.a.render(l.a.createElement(T,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.6764ac40.chunk.js.map