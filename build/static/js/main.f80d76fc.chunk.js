(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,a,t){e.exports=t(46)},24:function(e,a,t){},25:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(4),r=t.n(c),m=(t(24),t(3)),s=(t(25),t(6)),o=(t(8),t(1)),i=t(5),u=t.n(i),p="http://18.140.60.218/api",d=function(e){var a=e.account,t=e.setAccount,c=Object(n.useState)({name:"",_id:"",pass:"",email:"",sex:""}),r=Object(m.a)(c,2),i=r[0],d=r[1],g=function(e){var a=Object(s.a)({},i);a[e.target.name]=e.target.value,d(a),console.log(a)},E=function(){return 0===i.pass.length?(o.b.error("Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 M\u1eadt kh\u1ea9u tr\u1ed1ng"),!1):0===i.name.length?(o.b.error("Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 H\u1ecd v\xe0 t\xean tr\u1ed1ng"),!1):0!==i.email.length||(o.b.error("Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 Email tr\u1ed1ng"),!1)},h=function(e){u()({method:"put",url:"".concat(p,"/login"),data:e}).then((function(a){console.log(a),o.b.success(a.data),t(e)}))};return Object(n.useEffect)((function(){d(a)}),[]),l.a.createElement("div",{className:"container"},l.a.createElement("aside",{className:"col-sm-8"},l.a.createElement("div",{className:"card"},l.a.createElement("article",{className:"card-body"},l.a.createElement("h4",{className:"card-title text-center mb-4 mt-1"},"Th\xf4ng tin t\xe0i kho\u1ea3n"),l.a.createElement("hr",null),l.a.createElement("p",{className:"text-success text-center"}),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{style:{marginRight:"8px"}},"T\xean \u0111\u0103ng nh\u1eadp:")),l.a.createElement("input",{name:"_id",className:"form-control",value:i._id,onChange:g,disabled:!0}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{style:{marginRight:"46px"}},"M\u1eadt kh\u1ea9u: ")),l.a.createElement("input",{name:"pass",className:"form-control",value:i.pass,type:"password",onChange:g}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{style:{marginRight:"45px"}},"H\u1ecd v\xe0 t\xean:")),l.a.createElement("input",{name:"name",className:"form-control",value:i.name,onChange:g}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("label",{style:{marginRight:"75px"}},"Email:")),l.a.createElement("input",{name:"email",className:"form-control",value:i.email,onChange:g}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Gi\u1edbi t\xednh"),l.a.createElement("div",{className:"radio"},l.a.createElement("label",null,l.a.createElement("input",{id:"male",type:"radio",value:"male",name:"sex",checked:"male"===i.sex,onChange:g,style:{marginLeft:"50px"}}),l.a.createElement("span",{style:{marginLeft:"7px"}},"Nam"),l.a.createElement("input",{id:"female",type:"radio",value:"female",name:"sex",checked:"female"===i.sex,onChange:g,style:{marginLeft:"100px"}}),l.a.createElement("span",{style:{marginLeft:"7px"}},"N\u1eef")))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"btn btn-primary btn-block",onClick:function(){!0===E()&&h(i)}},"Ch\u1ec9nh s\u1eeda")))))))},g=l.a.memo((function(e){var a=Object(n.useState)({name:"",_id:"",pass:"",pass1:"",email:"",sex:""}),t=Object(m.a)(a,2),c=t[0],r=t[1];console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}));var i=function(e){var a=Object(s.a)({},c);a[e.target.name]=e.target.value,r(a),console.log(a)},d=function(a){console.log(a),u()({method:"get",url:"".concat(p,"/checkid/?_id=").concat(a)}).then((function(a){(0===c.name.length?(o.b.error("Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 H\u1ecd v\xe0 t\xean tr\u1ed1ng"),0):0===c._id.length?(o.b.error("Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 T\xean \u0111\u0103ng nh\u1eadp tr\u1ed1ng"),0):0===c.pass.length?(o.b.error("Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 M\u1eadt kh\u1ea9u tr\u1ed1ng"),0):0===c.pass1.length?(o.b.error("Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u tr\u1ed1ng"),0):0===c.email.length?(o.b.error("Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 Email tr\u1ed1ng"),0):c.pass===c.pass1||(o.b.error("M\u1eadt kh\u1ea9u v\xe0 Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u ph\u1ea3i gi\u1ed1ng nhau"),0))&&(!function(e){u()({method:"post",url:"".concat(p,"/addtodo"),data:e}).then((function(e){console.log(e),o.b.success(e.data)}))}({_id:c._id,pass:c.pass,name:c.name,email:c.email,sex:c.sex}),e.setIsOpen(1))})).catch((function(e){o.b.error(e.response.data)}))};return l.a.createElement("div",{className:"container"},l.a.createElement("aside",{className:"col-sm-4"},l.a.createElement("div",{className:"card"},l.a.createElement("article",{className:"card-body"},l.a.createElement("h4",{className:"card-title mb-4 mt-1"},"\u0110\u0103ng k\xfd"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"H\u1ecd v\xe0 t\xean"),l.a.createElement("input",{name:"name",className:"form-control",placeholder:"H\u1ecd v\xe0 t\xean",onChange:i})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"T\xean \u0111\u0103ng nh\u1eadp"),l.a.createElement("input",{name:"_id",className:"form-control",placeholder:"T\xean \u0111\u0103ng nh\u1eadp",onChange:i})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Nh\u1eadp m\u1eadt kh\u1ea9u"),l.a.createElement("input",{name:"pass",className:"form-control",placeholder:"\xcdt nh\u1ea5t 6 k\xfd t\u1ef1",type:"password",onChange:i})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u"),l.a.createElement("input",{name:"pass1",className:"form-control",placeholder:"\xcdt nh\u1ea5t 6 k\xfd t\u1ef1",type:"password",onChange:i})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email"),l.a.createElement("input",{name:"email",className:"form-control",placeholder:"abc@gmail.com",onChange:i})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Gi\u1edbi t\xednh"),l.a.createElement("div",{className:"radio"},l.a.createElement("label",null,l.a.createElement("input",{type:"radio",value:"male",defaultChecked:!0,name:"sex",style:{marginLeft:"50px"},onChange:i}),l.a.createElement("span",{style:{marginLeft:"7px"}},"Nam"),l.a.createElement("input",{type:"radio",value:"female",name:"sex",style:{marginLeft:"100px"},onChange:i}),l.a.createElement("span",{style:{marginLeft:"7px"}},"N\u1eef")))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"btn btn-primary btn-block",onClick:function(){d(c._id)}},"\u0110\u0103ng k\xfd")))))))})),E=l.a.memo((function(e){console.log("Dang nhap render");var a=e.setIsOpen,t=e.setAccount,c=Object(n.useState)({_id:"",pass:""}),r=Object(m.a)(c,2),i=r[0],d=r[1],g=function(e){var a=Object(s.a)({},i);a[e.target.name]=e.target.value,d(a),console.log(a)},E=function(){return 0===i._id.length?(o.b.error("Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 t\xean \u0111\u0103ng nh\u1eadp tr\u1ed1ng"),!1):0!==i.pass.length||(o.b.error("Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 m\u1eadt kh\u1ea9u tr\u1ed1ng"),!1)},h=function(e){u()({method:"post",url:"".concat(p,"/login"),data:e}).then((function(e){console.log(e),o.b.success(e.data.status),t(e.data.user),a(3)})).catch((function(e){o.b.error(e.response.data)}))};return l.a.createElement("div",{className:"container"},l.a.createElement("aside",{className:"col-sm-4"},l.a.createElement("div",{className:"card"},l.a.createElement("article",{className:"card-body"},l.a.createElement("h4",{className:"card-title text-center mb-4 mt-1"},"\u0110\u0103ng nh\u1eadp"),l.a.createElement("hr",null),l.a.createElement("p",{className:"text-success text-center"}),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text"},l.a.createElement("i",{className:"fa fa-user"}))),l.a.createElement("input",{name:"_id",className:"form-control",placeholder:"T\xean \u0111\u0103ng nh\u1eadp",type:"",onChange:g}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text"},l.a.createElement("i",{className:"fa fa-lock"}))),l.a.createElement("input",{name:"pass",className:"form-control",placeholder:"M\u1eadt kh\u1ea9u",type:"password",onChange:g}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"btn btn-primary btn-block",onClick:function(){!0===E()&&h(i)}},"\u0110\u0103ng nh\u1eadp"),l.a.createElement("p",{className:"text-center"},l.a.createElement("a",{className:"btn",onClick:function(){a(2)}},"\u0110\u0103ng k\xfd"))))))))}));t(45);var h=function(){var e=Object(n.useState)(1),a=Object(m.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)({_id:"",pass:"",name:"",email:"",sex:""}),s=Object(m.a)(r,2),i=s[0],u=s[1];return l.a.createElement("div",null,function(e){switch(e){case 1:return l.a.createElement(E,{setIsOpen:c,setAccount:u});case 2:return l.a.createElement(g,{setIsOpen:c});case 3:return l.a.createElement(d,{account:i,setAccount:u});default:return}}(t),l.a.createElement(o.a,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.f80d76fc.chunk.js.map