(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),l=n(1),s=n(2),i=n(4),u=n(3),m=n(5),b=(n(14),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.active,n=e.finished,a="".concat(t," more to do, ").concat(n," done");return c.a.createElement("div",{className:"d-flex app-header"},c.a.createElement("h1",null,"Todo list"),c.a.createElement("span",null,a))}}]),t}(a.Component)),p=(n(15),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.label;return c.a.createElement("li",{className:"list-group-item d-flex todo-list-item"},c.a.createElement("span",{className:"todo-list-text"},e),c.a.createElement("div",{className:"todo-list-item-btns"},c.a.createElement("button",{className:"btn btn-outline-danger btn-sm mr-2"},c.a.createElement("span",{className:"fa fa-trash-o"})),c.a.createElement("button",{className:"btn btn-outline-success btn-sm"},c.a.createElement("span",{className:"fa fa-exclamation"}))))}}]),t}(a.Component)),f=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.items.map(function(e){return c.a.createElement(p,e)});return c.a.createElement("ul",{className:"list-group mt-3"},e)}}]),t}(a.Component),d=(n(16),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"search-panel mr-2"},c.a.createElement("input",{className:"form-control",type:"text",placeholder:"Type to search"}))}}]),t}(a.Component)),h=(n(17),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Basic example"},c.a.createElement("button",{type:"button",className:"btn btn-primary"},"All"),c.a.createElement("button",{type:"button",className:"btn btn-outline-secondary"},"Active"),c.a.createElement("button",{type:"button",className:"btn btn-outline-secondary"},"Done"))}}]),t}(a.Component)),j=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"d-flex mt-3"},c.a.createElement(d,null),c.a.createElement(h,null))}}]),t}(a.Component),O=(n(18),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("form",{className:"mt-3"},c.a.createElement("div",{class:"form-group d-flex"},c.a.createElement("input",{type:"text",className:"form-control mr-1",placeholder:"What needs to be done?"}),c.a.createElement("button",{type:"submit",class:"btn btn-outline-secondary"},"Add")))}}]),t}(a.Component)),E=(n(19),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={todoData:[n.createTodoItem("Drink Coffee"),n.createTodoItem("Make Awesome App"),n.createTodoItem("Have a lunch")]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"createTodoItem",value:function(e){return{label:e,important:!1,done:!1}}},{key:"render",value:function(){var e=this.state.todoData,t=e.filter(function(e){return e.done}).length,n=e.length-t;return c.a.createElement("div",{className:"todo-app"},c.a.createElement(b,{active:n,finished:t}),c.a.createElement(j,null),c.a.createElement(f,{items:e}),c.a.createElement(O,null))}}]),t}(a.Component));o.a.render(c.a.createElement(E,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.3f421029.chunk.js.map