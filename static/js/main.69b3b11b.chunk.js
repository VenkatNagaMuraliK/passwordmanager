(this["webpackJsonppassword-manager"]=this["webpackJsonppassword-manager"]||[]).push([[0],{14:function(e,s,t){},16:function(e,s,t){"use strict";t.r(s);var a=t(2),n=t.n(a),c=t(4),r=t.n(c),i=t(6),l=t(5),d=t(8),o=t(9),m=t(7),p=t(18),j=(t(14),t(0)),h=["yellow","green","orange","brown","blue"],b=function(e){Object(o.a)(t,e);var s=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=s.call.apply(s,[this].concat(n))).state={isTrue:!1,latestList:[],website:"",username:"",password:"",isShow:!1},e.listenWebsite=function(s){e.setState({website:s.target.value})},e.listenUsername=function(s){e.setState({username:s.target.value})},e.listenPassword=function(s){e.setState({password:s.target.value})},e.addContent=function(s){s.preventDefault();var t=e.state,a=t.username,n=t.website,c=t.password,r=n.slice(0,1).toUpperCase(),l=h[Math.floor(5*Math.random())],d={id:Object(p.a)(),initialValue:r,websiteName:n,userName:a,Password:c,classAdd:l};e.setState((function(e){return{latestList:[].concat(Object(i.a)(e.latestList),[d]),website:"",username:"",password:"",isTrue:!0,searchInput:""}}))},e.showPassword=function(s){s.target.checked?e.setState({isShow:!0}):e.setState({isShow:!1})},e.searchList=function(s){e.setState({searchInput:s.target.value})},e.deleteItem=function(s){var t=e.state.latestList.filter((function(e){return e.id!==s})),a=0!==t.length;e.setState({latestList:t,isTrue:a})},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this,s=this.state,t=s.website,a=s.username,n=s.password,c=s.latestList,r=s.isShow,i=s.searchInput,l=this.state.isTrue,d=c.filter((function(e){return e.websiteName.toLowerCase().includes(i.toLowerCase())}));return l=0!==d.length,Object(j.jsxs)("div",{className:"main-container",children:[Object(j.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png",className:"app-logo",alt:"app logo"}),Object(j.jsxs)("div",{className:"sub-div1",children:[Object(j.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png",className:"sub-div1-image2",alt:"password manager"}),Object(j.jsxs)("form",{className:"add-details",onSubmit:this.addContent,children:[Object(j.jsx)("h1",{className:"detail-heading",children:"Add New Password"}),Object(j.jsxs)("div",{className:"input-holder",children:[Object(j.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png",className:"input-image",alt:"website"}),Object(j.jsx)("input",{type:"text",className:"input-element",placeholder:"Enter Website",onChange:this.listenWebsite,value:t})]}),Object(j.jsxs)("div",{className:"input-holder",children:[Object(j.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png",className:"input-image",alt:"username"}),Object(j.jsx)("input",{type:"text",className:"input-element",placeholder:"Enter Username",onChange:this.listenUsername,value:a})]}),Object(j.jsxs)("div",{className:"input-holder",children:[Object(j.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png",className:"input-image",alt:"password"}),Object(j.jsx)("input",{type:"password",className:"input-element",placeholder:"Enter Password",onChange:this.listenPassword,value:n})]}),Object(j.jsx)("button",{type:"submit",className:"add-btn",children:"Add"})]}),Object(j.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png",className:"sub-div1-image1",alt:"password manager"})]}),Object(j.jsxs)("div",{className:"sub-div2",children:[Object(j.jsxs)("div",{className:"first-div",children:[Object(j.jsxs)("div",{className:"your-password",children:[Object(j.jsx)("h1",{className:"heading-name",children:"Your Passwords"}),Object(j.jsx)("p",{className:"colored-text",children:d.length})]}),Object(j.jsxs)("div",{className:"search-holder",children:[Object(j.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png",className:"input-image",alt:"search"}),Object(j.jsx)("input",{type:"search",className:"input-element",placeholder:"Search",onChange:this.searchList,value:i})]})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"show-passwords",children:[Object(j.jsx)("input",{type:"checkbox",className:"check-box",id:"check",onChange:this.showPassword}),Object(j.jsx)("label",{htmlFor:"check",className:"label-password",children:"Show Passwords"})]}),!l&&Object(j.jsxs)("div",{className:"empty-state",children:[Object(j.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/no-passwords-img.png",className:"empty-image",alt:"no passwords"}),Object(j.jsx)("p",{className:"no-passwords",children:"No Passwords"})]}),l&&Object(j.jsx)("ul",{className:"result-container",children:d.map((function(s){return Object(j.jsxs)("li",{className:"item-list",id:s.id,children:[Object(j.jsx)("p",{className:"initial ".concat(s.classAdd),children:s.initialValue}),Object(j.jsxs)("div",{className:"list-content",children:[Object(j.jsx)("p",{className:"website",children:s.websiteName}),Object(j.jsx)("p",{className:"website",children:s.userName}),!r&&Object(j.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png",className:"stars-image",alt:"stars"}),r&&Object(j.jsx)("p",{className:"website",children:s.Password})]}),Object(j.jsx)("button",{type:"button",className:"del-btn",onClick:function(){return e.deleteItem(s.id)},"data-testid":"delete",children:Object(j.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png",className:"del-image",alt:"delete"})})]},s.id)}))})]})]})}}]),t}(a.Component),u=b;r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.69b3b11b.chunk.js.map