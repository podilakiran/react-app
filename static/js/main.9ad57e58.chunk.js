(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,,function(e,t,n){},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__1dRYt",icon:"HeaderCartButton_icon__2qRQ4",badge:"HeaderCartButton_badge__Ua2Kc",bump:"HeaderCartButton_bump__2D1km"}},function(e,t,n){e.exports={meal:"MealItem_meal__3I42O",description:"MealItem_description__38OBu",price:"MealItem_price__2i-_h"}},function(e,t,n){e.exports={backdrop:"Model_backdrop__1UQ4u",modal:"Model_modal__3D0LH","slide-down":"Model_slide-down__VA-JH"}},,function(e,t,n){e.exports={header:"Header_header__ozNR-","main-image":"Header_main-image__2Gh83"}},function(e,t,n){e.exports={summary:"MealsSummery_summary__2fZmM"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__3rios","meals-appear":"AvailableMeals_meals-appear__1PfzF"}},function(e,t,n){e.exports={card:"Card_card__3NVS5"}},function(e,t,n){e.exports={form:"MealItemForm_form__hujQ7"}},function(e,t,n){e.exports={input:"Input_input__1Xfhs"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(3),r=n.n(i),s=(n(20),n(4)),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},d=n(5),u=n.n(d),j=a.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),m=function(e){var t=Object(c.useContext)(j).items.reduce((function(e,t){return e+t.Amount}),0);return Object(o.jsxs)("button",{className:u.a.button,onClick:e.onClick,children:[Object(o.jsx)("span",{className:u.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:u.a.badge,children:t})]})},b=n.p+"static/media/meals.2971f633.jpg",h=n(9),p=n.n(h),x=function(e){return Object(o.jsxs)(c.Fragment,{children:[Object(o.jsxs)("header",{className:p.a.header,children:[Object(o.jsx)("h1",{children:"React Meals"}),Object(o.jsx)(m,{onClick:e.onClick})]}),Object(o.jsx)("div",{className:p.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"Table full of delicious food."})})]})},O=n(10),f=n.n(O),_=function(e){return Object(o.jsxs)("section",{className:f.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(11),g=n.n(v),N=n(12),H=n.n(N),A=function(e){return Object(o.jsx)("div",{className:H.a.card,children:e.children})},y=n(6),C=n.n(y),M=n(13),k=n.n(M),w=n(15),I=n(14),B=n.n(I),F=function(e){return Object(o.jsxs)("div",{className:B.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(w.a)({},e.input))]})},D=function(e){return Object(o.jsxs)("form",{className:k.a.form,children:[Object(o.jsx)(F,{label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",defaultValue:"1",step:"1"}}),Object(o.jsx)("button",{children:"+ Add"})]})},z=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:C.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("h3",{children:e.name})}),Object(o.jsx)("div",{className:C.a.description,children:e.description}),Object(o.jsx)("div",{className:C.a.price,children:t})]}),Object(o.jsx)("div",{children:Object(o.jsx)(D,{})})]})},R=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99},{id:"m5",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],S=function(e){var t=R.map((function(e){return Object(o.jsx)(z,{name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:g.a.meals,children:Object(o.jsx)(A,{children:Object(o.jsx)("ul",{children:t})})})},E=function(e){return Object(o.jsxs)(c.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(S,{})]})},P=n(2),V=n.n(P),G=n(7),J=n.n(G),Q=function(e){return Object(o.jsx)("div",{className:J.a.backdrop,onClick:e.onHide})},T=function(e){return Object(o.jsx)("div",{className:J.a.modal,children:Object(o.jsx)("div",{className:J.a.content,children:e.children})})},Y=document.getElementById("overlays"),q=function(e){return Object(o.jsxs)(c.Fragment,{children:[r.a.createPortal(Object(o.jsx)(Q,{onHide:e.onHide}),Y),r.a.createPortal(Object(o.jsx)(T,{children:e.children}),Y)]})},U=function(e){var t=Object(o.jsx)("ul",{className:V.a.cartItems,children:[{id:"c1",name:"Sushi",amount:2,price:12.99}].map((function(e){return Object(o.jsx)("li",{children:e.name})}))});return Object(o.jsxs)(q,{onHide:e.onHide,children:[t,Object(o.jsxs)("div",{className:V.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:"35.62"})]}),Object(o.jsxs)("div",{className:V.a.actions,children:[Object(o.jsx)("button",{className:V.a.buttonAlt,onClick:e.onHide,children:"Close"}),Object(o.jsx)("button",{className:V.a.button,children:"Order"})]})]})},K={items:[],totalAmount:0},L=function(e,t){return"ADD"==t.type?{items:e.items.concat(t.item),totalAmount:e.totalAmount+t.item.price*t.state.amount}:K},X=function(e){var t=Object(c.useReducer)(L,K),n=Object(s.a)(t,2),a=n[0],i=n[1],r={items:a.items,totalAmount:a.totalAmount,addItem:function(e){i({type:"ADD",item:e})},removeItem:function(e){i({type:"REMOVE",id:e})}};return Object(o.jsx)(j.Provider,{value:r,children:e.children})};var Z=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(X,{children:[n&&Object(o.jsx)(U,{onHide:function(e){a(!1)}}),Object(o.jsx)(x,{onClick:function(e){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(E,{})})]})};r.a.render(Object(o.jsx)(Z,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.9ad57e58.chunk.js.map