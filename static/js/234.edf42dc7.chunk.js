"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[234],{9234:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,a,i,s=t(9439),c=t(168),l=t(7686),o=l.Z.li(r||(r=(0,c.Z)(["\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  &:last-child {\n    margin-bottom: 0px;\n  }\n"]))),u=l.Z.button(a||(a=(0,c.Z)(["\ncursor: pointer;\n"]))),d=t(2286),m=t(9434),x=t(3634),p=t(2791),h=t(184);function f(n){var e=n.item,t=(0,m.v9)(d.Jw),r=(0,p.useState)(null),a=(0,s.Z)(r,2),i=a[0],c=a[1],l=(0,m.I0)();return(0,h.jsxs)(o,{children:[(0,h.jsxs)("span",{children:[e.name,": ",e.number]}),(0,h.jsx)(u,{type:"button",onClick:function(){c(e.id),l((0,x.GK)(e.id))},disabled:t,children:e.id===i&&t?(0,h.jsx)(h.Fragment,{children:"Deleting..."}):(0,h.jsx)(h.Fragment,{children:"Delete"})})]},e.id)}var b,j,g,v,Z=l.Z.ul(i||(i=(0,c.Z)(["\n  padding: 0px;\n  text-align: left;\n  list-style: none;\n  margin: 0px;\n  margin-top: 20px;\n"])));function y(){var n=(0,m.v9)(d.DI);return(0,h.jsx)(Z,{children:n.map((function(n){return(0,h.jsx)(f,{item:n},n.id)}))})}var C,F,k=l.Z.form(b||(b=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 20px;\n"]))),w=l.Z.label(j||(j=(0,c.Z)(["\n  margin-bottom: 20px;\n"]))),A=l.Z.input(g||(g=(0,c.Z)(["\nmargin-left: 20px"]))),D=l.Z.button(v||(v=(0,c.Z)(["\ncursor: pointer;"])));function I(){var n=(0,p.useState)(""),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)(""),i=(0,s.Z)(a,2),c=i[0],l=i[1],o=(0,m.I0)(),u=(0,m.v9)(d.CA),f=(0,m.v9)(d.Af),b=function(n){var e=n.currentTarget,t=e.name,a=e.value;"name"===t?r(a):"number"===t&&l(a)},j=function(n,e){var t={name:n,number:e};f.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts.")):o((0,x.uK)(t))};return(0,h.jsxs)(k,{onSubmit:function(n){n.preventDefault(),j(t,c),r(""),l("")},children:[(0,h.jsxs)(w,{children:["Name",(0,h.jsx)(A,{type:"text",name:"name",pattern:"^[A-Za-z\\u0080-\\uFFFF ']+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:b,value:t})]}),(0,h.jsxs)(w,{children:["Number",(0,h.jsx)(A,{type:"tel",name:"number",pattern:"^(\\+?[0-9.\\(\\)\\-\\s]*)$",title:"number number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:b,value:c})]}),(0,h.jsx)(D,{type:"submit",disabled:u,children:u?(0,h.jsx)(h.Fragment,{children:"Adding..."}):(0,h.jsx)(h.Fragment,{children:"Add contact"})})]})}var S=l.Z.label(C||(C=(0,c.Z)(["\n  margin-bottom: 20px;\n"]))),_=l.Z.input(F||(F=(0,c.Z)(["\n  margin-left: 20px;\n"]))),q=t(1634);function z(){var n=(0,m.I0)(),e=(0,m.v9)(d.AD);return(0,h.jsxs)(S,{children:["Find contacts by name",(0,h.jsx)(_,{type:"text",name:"filter",value:e,onChange:function(e){n((0,q.T)(e.currentTarget.value))}})]})}var N=t(2606),T=function(){var n=(0,m.I0)(),e=(0,m.v9)(d.Sj),t=(0,m.v9)(d.zh);return(0,p.useEffect)((function(){n((0,x.yF)())}),[n]),(0,h.jsxs)(N.W2,{children:[(0,h.jsx)(N.H1,{children:"Phonebook"}),(0,h.jsx)(I,{}),(0,h.jsx)(N.H2,{children:"Contacts"}),(0,h.jsx)(N.im,{children:e&&!t?(0,h.jsx)("b",{children:"Request in progress..."}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(z,{}),(0,h.jsx)(y,{})]})})]})}}}]);
//# sourceMappingURL=234.edf42dc7.chunk.js.map