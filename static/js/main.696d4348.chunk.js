(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(t,e,a){t.exports=a(25)},,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=a(6),l=a(11),s=a(8),u=a(1),m=a(2),d=a(4),f=a(3),p=a(5),b=(a(19),function(t){function e(){return Object(u.a)(this,e),Object(d.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this.props,e=t.active,a=t.finished,n="".concat(e," more to do, ").concat(a," done");return r.a.createElement("div",{className:"d-flex app-header"},r.a.createElement("h1",null,"Todo list"),r.a.createElement("span",null,n))}}]),e}(n.Component)),h=a(12),v=a(7),j=a.n(v),O=(a(20),function(t){function e(){return Object(u.a)(this,e),Object(d.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this.props,e=t.label,a=t.id,n=t.done,o=t.important,c=t.toggleState,i=t.deleteItem,l=j()({"todo-list-text":!0,"todo-list-text--finished":n,"todo-list-text--important":o});return r.a.createElement("li",{className:"list-group-item d-flex todo-list-item"},r.a.createElement("span",{onClick:c(a,"done"),className:l},e),r.a.createElement("div",{className:"todo-list-item__btns d-flex"},r.a.createElement("button",{onClick:i(a),className:"btn btn-outline-danger btn-sm mr-2"},r.a.createElement("span",{className:"fa fa-trash-o"})),r.a.createElement("button",{onClick:c(a,"important"),className:"btn btn-outline-success btn-sm"},r.a.createElement("span",{className:"fa fa-exclamation"}))))}}]),e}(n.Component)),g=function(t){function e(){return Object(u.a)(this,e),Object(d.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this.props,e=t.items,a=Object(h.a)(t,["items"]),n=e.map(function(t){return r.a.createElement(O,Object.assign({key:t.id},t,a))});return r.a.createElement("ul",{className:"list-group mt-3"},n)}}]),e}(n.Component),y=(a(21),function(t){function e(){var t,a;Object(u.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(r)))).onChange=function(t){var e=t.target.value;(0,a.props.updateFilter)(e.toLowerCase())},a}return Object(p.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-panel mr-2"},r.a.createElement("input",{onChange:this.onChange,className:"form-control",type:"text",placeholder:"Type to search"}))}}]),e}(n.Component)),E=(a(22),function(t){function e(){var t,a;Object(u.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(r)))).filters=[{name:"all",value:"All"},{name:"active",value:"Active"},{name:"done",value:"Done"}],a.getClasses=function(t){var e=a.props.state;return j()({btn:!0,"btn-primary":e===t,"btn-outline-secondary":e!==t})},a}return Object(p.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this,e=this.props.toggleState,a=this.filters.map(function(a){var n=a.name,o=a.value;return r.a.createElement("button",{key:n,type:"button",onClick:e(n),className:t.getClasses(n)},o)});return r.a.createElement("div",{className:"btn-group",role:"group"},a)}}]),e}(n.Component)),S=function(t){function e(){return Object(u.a)(this,e),Object(d.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this.props,e=t.toggleFilterState,a=t.state,n=t.updateFilter;return r.a.createElement("div",{className:"d-flex mt-3"},r.a.createElement(y,{updateFilter:n}),r.a.createElement(E,{state:a,toggleState:e}))}}]),e}(n.Component),C=(a(23),function(t){function e(){var t,a;Object(u.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(r)))).state={text:""},a.onSubmit=function(t){t.preventDefault(),(0,a.props.addItem)(a.state.text),a.setState({text:""})},a.onChange=function(t){var e=t.target.value;a.setState({text:e})},a}return Object(p.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this.state.text;return r.a.createElement("form",{onSubmit:this.onSubmit,className:"mt-3"},r.a.createElement("div",{className:"form-group d-flex"},r.a.createElement("input",{value:t,onChange:this.onChange,type:"text",className:"form-control mr-1",placeholder:"What needs to be done?",required:!0}),r.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"Add")))}}]),e}(n.Component)),k=(a(24),function(t){function e(){var t,a;Object(u.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(r)))).maxId=1,a.state={todoData:[a.createTodoItem("Drink Coffee"),a.createTodoItem("Make Awesome App"),a.createTodoItem("Have a lunch")],filterState:"all",filterString:""},a.onAddItem=function(t){var e=a.createTodoItem(t);a.setState(function(t){var a=t.todoData;return{todoData:[].concat(Object(s.a)(a),[e])}})},a.toggleState=function(t,e){return function(){a.setState(function(a){return{todoData:a.todoData.reduce(function(a,n){return t!==n.id?[].concat(Object(s.a)(a),[n]):[].concat(Object(s.a)(a),[Object(l.a)({},n,Object(i.a)({},e,!n[e]))])},[])}})}},a.deleteItem=function(t){return function(){a.setState(function(e){return{todoData:e.todoData.filter(function(e){return e.id!==t})}})}},a.handleFilterState=function(t){return function(){a.setState({filterState:t})}},a.updateFilter=function(t){a.setState({filterString:t})},a.filterMap={active:function(t){return!t.done},done:function(t){return t.done}},a}return Object(p.a)(e,t),Object(m.a)(e,[{key:"createTodoItem",value:function(t){return{label:t,important:!1,done:!1,id:this.maxId++}}},{key:"render",value:function(){var t=this,e=this.state,a=e.todoData,n=e.filterState,o=e.filterString,c=a.filter(function(t){return t.done}).length,i=a.length-c,l="all"===n?a:a.filter(function(e){return t.filterMap[n](e)}),s=o.length,u=0===s?l:l.filter(function(t){var e=t.label;return o===e.slice(0,s).toLowerCase()});return r.a.createElement("div",{className:"todo-app"},r.a.createElement(b,{active:i,finished:c}),r.a.createElement(S,{updateFilter:this.updateFilter,toggleFilterState:this.handleFilterState,state:n}),r.a.createElement(g,{items:u,toggleState:this.toggleState,deleteItem:this.deleteItem}),r.a.createElement(C,{addItem:this.onAddItem}))}}]),e}(n.Component));c.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.696d4348.chunk.js.map