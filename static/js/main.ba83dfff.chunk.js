(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,n,e){t.exports={ContactList:"ContactList_ContactList__37CPC",ContactList_item:"ContactList_ContactList_item__WWcVK",completed:"ContactList_completed__AZPR4",ContactList_text:"ContactList_ContactList_text__1Xt6Q",ContactList_actions:"ContactList_ContactList_actions__2x6zp",ContactList_button:"ContactList_ContactList_button__3AX0f"}},19:function(t,n,e){},2:function(t,n,e){t.exports={ContactEditor:"Contact_ContactEditor__2bAlK",ContactEditor_label:"Contact_ContactEditor_label__1mjZc",ContactEditor_input:"Contact_ContactEditor_input__3w_OD",ContactEditorinput:"Contact_ContactEditorinput__3sn6l",ContactEditor_button:"Contact_ContactEditor_button__MOzE9"}},29:function(t,n,e){},30:function(t,n,e){"use strict";e.r(n);var a=e(1),c=e.n(a),o=e(12),i=e.n(o),s=(e(19),e(14)),r=e(3),l=e(6),u=e(7),d=e(9),b=e(8),C=e(13),m=e.n(C),h=e(10),_=e.n(h),j=e(0),f=function(t){var n=t.contacts,e=t.onRemoveContact;return Object(j.jsx)("ul",{className:_.a.ContactList,children:n.map((function(t){return Object(j.jsxs)("li",{className:_.a.ContactList_item,children:[t.name+":"+t.number,Object(j.jsx)("button",{className:_.a.ContactList_button,type:"button",name:"delte",onClick:function(){return e(t.id)},children:"delete"})]},t.id)}))})};function p(t){var n=t.value,e=t.onChangeFilter;return Object(j.jsxs)("div",{children:["Find contacts by name",Object(j.jsx)("input",{type:"text",value:n,onChange:function(t){return e(t.target.value)}})]})}var O=e(5),v=e(2),g=e.n(v),x=function(t){Object(d.a)(e,t);var n=Object(b.a)(e);function e(){var t;Object(l.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=n.call.apply(n,[this].concat(c))).state={name:"",number:""},t.handleChange=function(n){var e=n.target,a=e.name,c=e.value;t.setState(Object(O.a)({},a,c))},t.handleSubmit=function(n){n.preventDefault(),t.props.onAddContact(Object(r.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(u.a)(e,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:g.a.ContactEditor,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:g.a.ContactEditor_label,children:["Name",Object(j.jsx)("input",{className:g.a.ContactEditor_input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(j.jsxs)("label",{className:g.a.ContactEditor_label,children:["Number",Object(j.jsx)("input",{className:g.a.ContactEditor_input,type:"text",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(j.jsx)("button",{className:g.a.ContactEditor_button,type:"submit",children:"Add contact"})]})}}]),e}(a.Component),L=(e(29),function(t){Object(d.a)(e,t);var n=Object(b.a)(e);function e(){var t;Object(l.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=n.call.apply(n,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(n){if(t.state.contacts.map((function(t){return t.name})).includes(n.name))alert("".concat(n.name," is already in contacts"));else if(0===n.name.length)alert("Fields must be filled!");else{var e=Object(r.a)(Object(r.a)({},n),{},{id:m.a.generate()});t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[e])}}))}},t.changeFilter=function(n){t.setState({filter:n})},t.getVisibleContacts=function(){var n=t.state,e=n.contacts,a=n.filter;return e.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.removeContact=function(n){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},t}return Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,n){var e=this.state.contacts;e!==n.contacts&&localStorage.setItem("contacts",JSON.stringify(e))}},{key:"render",value:function(){var t=this.state.filter,n=this.getVisibleContacts();return Object(j.jsx)("div",{className:"Container",children:Object(j.jsxs)("div",{className:"Container2",children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(x,{onAddContact:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),n.length>1&&Object(j.jsx)(p,{value:t,onChangeFilter:this.changeFilter}),n.length>0&&Object(j.jsx)(f,{contacts:n,onRemoveContact:this.removeContact})]})})}}]),e}(a.Component)),E=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,31)).then((function(n){var e=n.getCLS,a=n.getFID,c=n.getFCP,o=n.getLCP,i=n.getTTFB;e(t),a(t),c(t),o(t),i(t)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root")),E()}},[[30,1,2]]]);
//# sourceMappingURL=main.ba83dfff.chunk.js.map