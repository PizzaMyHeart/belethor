(this.webpackJsonpbelethor=this.webpackJsonpbelethor||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e){e.exports=JSON.parse('{"food":[{"name":"Goat Cheese Wheel","price":10,"img":"https://images.uesp.net/thumb/7/79/SR-icon-food-GoatCheeseWheel.png/96px-SR-icon-food-GoatCheeseWheel.png"},{"name":"Sliced Eidar Cheese","price":10,"img":"https://images.uesp.net/thumb/2/28/SR-icon-food-SlicedEidarCheese.png/96px-SR-icon-food-SlicedEidarCheese.png"},{"name":"Leek","price":1,"img":"https://images.uesp.net/thumb/2/27/SR-icon-food-Leek.png/96px-SR-icon-food-Leek.png"},{"name":"Potato","price":1,"img":"https://images.uesp.net/thumb/3/34/SR-icon-food-Potato.png/96px-SR-icon-food-Potato.png"},{"name":"Red Apple","price":3,"img":"https://images.uesp.net/thumb/d/d7/SR-icon-food-RedApple.png/96px-SR-icon-food-RedApple.png"},{"name":"Tomato","price":4,"img":"https://images.uesp.net/thumb/d/de/SR-icon-food-Tomato.png/96px-SR-icon-food-Tomato.png"}],"books":[{"name":"Beggar Prince","price":5,"img":"https://images.uesp.net/thumb/2/29/SR-icon-book-BasicBook5a.png/96px-SR-icon-book-BasicBook5a.png"},{"name":"Biography of Barenziah, vol. 1","price":3,"img":"https://images.uesp.net/thumb/8/81/SR-icon-book-BasicBook2.png/96px-SR-icon-book-BasicBook2.png"},{"name":"Biography of Barenziah, vol. 2","price":3,"img":"https://images.uesp.net/thumb/8/81/SR-icon-book-BasicBook2.png/96px-SR-icon-book-BasicBook2.png"},{"name":"Biography of Barenziah, vol. 3","price":3,"img":"https://images.uesp.net/thumb/8/81/SR-icon-book-BasicBook2.png/96px-SR-icon-book-BasicBook2.png"},{"name":"Fall from Glory","price":8,"img":"https://images.uesp.net/thumb/7/7e/SR-icon-book-BasicBook7.png/96px-SR-icon-book-BasicBook7.png"},{"name":"Nightingales: Fact or Fiction?","price":3,"img":"https://images.uesp.net/thumb/2/29/SR-icon-book-BasicBook5a.png/96px-SR-icon-book-BasicBook5a.png"},{"name":"Uncommon Taste","price":3,"img":"https://images.uesp.net/thumb/f/ff/SR-icon-book-BasicBook3a.png/96px-SR-icon-book-BasicBook3a.png"}],"potions":[{"name":"Potion of Alteration","price":49,"img":"https://images.uesp.net/thumb/6/62/SR-icon-potion-Skill.png/96px-SR-icon-potion-Skill.png"},{"name":"Draught of Alteration","price":106,"img":"https://images.uesp.net/thumb/6/62/SR-icon-potion-Skill.png/96px-SR-icon-potion-Skill.png"}],"misc":[{"name":"Candlestick","price":25,"img":"https://images.uesp.net/0/08/SR-icon-misc-Candlestick3.png"},{"name":"Cave Bear Pelt","price":60,"img":"https://images.uesp.net/thumb/3/31/SR-icon-misc-CaveBearPelt.png/96px-SR-icon-misc-CaveBearPelt.png"},{"name":"Goblet","price":5,"img":"https://images.uesp.net/thumb/7/7c/SR-icon-misc-Goblet2.png/96px-SR-icon-misc-Goblet2.png"},{"name":"Horker Tusk","price":15,"img":"https://images.uesp.net/thumb/c/cf/SR-icon-misc-HorkerTusk.png/96px-SR-icon-misc-HorkerTusk.png"},{"name":"Jug","price":5,"img":"https://images.uesp.net/thumb/6/60/SR-icon-misc-Jug1.png/96px-SR-icon-misc-Jug1.png"},{"name":"Pot","price":5,"img":"https://images.uesp.net/thumb/4/40/SR-icon-misc-Pot1.png/24px-SR-icon-misc-Pot1.png"},{"name":"Tankard","price":1,"img":"https://images.uesp.net/thumb/f/fa/SR-icon-misc-Tankard.png/48px-SR-icon-misc-Tankard.png"},{"name":"Troll Skull","price":5,"img":"https://images.uesp.net/thumb/f/fb/SR-icon-misc-TrollSkull.png/48px-SR-icon-misc-TrollSkull.png"}]}')},,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(13),o=c.n(s),a=c(6),r=(c(18),c(4)),l=(c(10),c(11),c(7)),m=c(5),p=c(0);var d=function(e){var t=[];function c(e){return t.filter((function(t){return t.name===e}))[0].price}return Object.keys(e.data).map((function(c){return t.push(e.data[c])})),t=t.flat(),console.log(t),Object(p.jsxs)(p.Fragment,{children:[console.log(e.cartItems),Object(p.jsxs)("div",{className:"p-8",children:[Object.keys(e.cartItems).map((function(t,n){var i=e.cartItems[t],s=function(e,t){return e*t}(c(t),i),o=c(t);return console.log("priceProduct: "+s),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"",children:[Object(p.jsx)("div",{className:"mr-16",children:t}),Object(p.jsxs)("div",{className:"flex",children:[Object(p.jsx)("button",{className:"bg-red-300 mr-8 h-8 w-8",onClick:function(){return function(t,c){var n=e.cartItems[t]-1;if(e.setCartItems(Object(m.a)(Object(m.a)({},e.cartItems),{},Object(l.a)({},t,n))),e.setTotalPrice(e.totalPrice-c),0===n){var i=Object(m.a)({},e.cartItems);delete i[t],e.setCartItems(i)}}(t,o)},children:"-"}),Object(p.jsx)("div",{className:"mr-8",children:i}),Object(p.jsx)("button",{className:"bg-blue-300 mr-4 h-8 w-8",onClick:function(){return function(t,c){var n=e.cartItems[t]+1;e.setCartItems(Object(m.a)(Object(m.a)({},e.cartItems),{},Object(l.a)({},t,n))),console.log(e.totalPrice),e.setTotalPrice(e.totalPrice+c)}(t,o)},children:"+"}),Object(p.jsx)("button",{onClick:function(){return function(t,c){e.setTotalPrice(e.totalPrice-c);var n=Object(m.a)({},e.cartItems);delete n[t],e.setCartItems(n)}(t,s)},children:"\ud83d\uddd1"})]})]}),Object(p.jsxs)("div",{children:[c(t)," septims"]}),Object(p.jsx)("div",{children:s}),Object(p.jsx)("br",{})]},n)})),Object(p.jsxs)("div",{children:[function(){if(0!==Object.keys(e.cartItems).length)return Object.values(e.cartItems).reduce((function(e,t){return e+t}))}()," items in cart."]}),Object(p.jsxs)("div",{children:["Total price: ",e.totalPrice," septims"]}),Object(p.jsx)("button",{onClick:function(){e.setCartItems({}),e.setTotalPrice(0)},children:"Empty cart"}),Object(p.jsx)("div",{children:Object(p.jsx)(a.b,{to:"/checkout",children:"Checkout"})})]})]})};var h=function(e){return Object(p.jsx)("nav",{children:Object(p.jsxs)("ul",{className:"flex",children:[Object(p.jsx)("li",{className:"mr-[20px]",children:Object(p.jsx)(a.b,{to:"/",children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)(a.b,{to:"/about",children:"About"})}),Object(p.jsxs)("li",{className:"ml-auto",children:[Object(p.jsxs)("div",{id:"cart-icon",children:["Cart (",Object.keys(e.cartItems).length,")"]}),Object(p.jsx)("div",{id:"cart",className:"bg-white right-0 pr-16 border-solid border-2 border-slate rounded-lg grid-cols-3",children:Object(p.jsx)(d,{cartItems:e.cartItems,setCartItems:e.setCartItems,totalPrice:e.totalPrice,setTotalPrice:e.setTotalPrice,addToCart:e.addToCart,data:e.data})})]})]})})},u=c(2);var b=function(){return Object(p.jsxs)("main",{children:[Object(p.jsx)("h1",{className:"underline",children:"About Us"}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{className:"h-2/5 w-2/5",src:"https://www.giantbomb.com/a/uploads/scale_small/14/146864/2112486-2112485-char_belethor.jpg",alt:"Belethor profile pic"})}),Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:"Belethor's General Goods is a merchant's shop located in the Plains District of Whiterun. It can be found in the Whiterun Marketplace, next to Arcadia's Cauldron. The shop is open every day between 8 am and 8 pm. It's owned and run by Belethor and his assistant, Sigurd. Like most general goods stores, Belethor will trade in almost anything, including weapons, armor, jewelry, potions, food and books. He typically has 750 Gold available every 48 hours. The Dragonborn can invest 500 Gold in his shop if they have the investor perk. After investing in his shop, most of the items in the shop can be taken rather than stolen."})})]})};function j(e){return Object(p.jsxs)("div",{className:"product",children:[Object(p.jsx)("img",{src:e.img,alt:""}),Object(p.jsx)("div",{children:e.name}),Object(p.jsx)("div",{children:e.price}),Object(p.jsx)("button",{className:"hover:bg-slate-200",onClick:function(){return e.onClick()},children:"Add \ud83d\uded2"})]})}function g(e){return Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"checkbox",name:e.objKey,defaultChecked:e.inputChecked,onChange:e.handleChecked}),e.objKey]})}var O=function(e){var t=e.cartItems,c=e.setCartItems,i=e.totalPrice,s=e.setTotalPrice,o=Object(n.useState)(Object.keys(e.data)),a=Object(r.a)(o,2),d=a[0],h=a[1],u=!0;function b(e){return Object(p.jsx)(g,{objKey:e,inputChecked:u,handleChecked:function(){return function(e){var t=d.slice();d.includes(e)?t=t.filter((function(t){return t!==e})):t.push(e);h(t),u=!u,console.log("Checked: ",u)}(e)}},e)}function O(e,n,o){return Object(p.jsx)(j,{name:e,price:n,img:o,onClick:function(){return function(e,n){var o;console.log(e+" added to cart."),Object.keys(t).includes(e)?(console.log(e),o=Number(t[e])+1):o=1;c(Object(m.a)(Object(m.a)({},t),{},Object(l.a)({},e,o))),console.log(n),s(i+n)}(e,n)}},e)}var x=[];return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object.keys(e.data).map((function(e){return b(e)}))}),d.map((function(t){e.data[t].map((function(e){return x.push(e)}))})),Object(p.jsx)("div",{className:"grid grid-cols-4",children:x.map((function(e){return O(e.name,e.price,e.img)}))})]})};var x=function(e){return Object(p.jsxs)("div",{className:"home",children:[Object(p.jsx)("img",{src:"https://c4.wallpaperflare.com/wallpaper/535/182/424/whiterun-the-elder-scrolls-the-elder-scrolls-v-skyrim-video-games-custom-hd-wallpaper-preview.jpg",alt:""}),Object(p.jsx)(O,{cartItems:e.cartItems,setCartItems:e.setCartItems,totalPrice:e.totalPrice,setTotalPrice:e.setTotalPrice,data:e.data})]})};c(20);var f=function(e){var t=e.cartItems,c=e.setCartItems,n=e.totalPrice,i=e.setTotalPrice;return Object(p.jsxs)("div",{className:"checkout grid place-items-center h-screen",children:["Checkout.",Object(p.jsx)(d,{className:"w-screen",cartItems:t,setCartItems:c,totalPrice:n,setTotalPrice:i,addToCart:function(e,s){var o;console.log(e+" added to cart."),Object.keys(t).includes(e)?(console.log(e),o=Number(t[e])+1):o=1,c(Object(m.a)(Object(m.a)({},t),{},Object(l.a)({},e,o))),console.log(s),i(n+s)},data:e.data}),Object(p.jsx)("button",{children:Object(p.jsx)(a.b,{to:"/",children:"Back to store"})})]})};c(21),c(12);var k=function(){var e=Object(n.useState)({}),t=Object(r.a)(e,2),i=t[0],s=t[1],o=Object(n.useState)(0),a=Object(r.a)(o,2),l=a[0],m=a[1],d=Object(n.useState)(c(12)),j=Object(r.a)(d,2),g=j[0];return j[1],Object(p.jsxs)("main",{className:"px-[25px]",children:[Object(p.jsx)(h,{cartItems:i,setCartItems:s,totalPrice:l,setTotalPrice:m,data:g}),Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{path:"/",element:Object(p.jsx)(x,{cartItems:i,setCartItems:s,totalPrice:l,setTotalPrice:m,data:g})}),Object(p.jsx)(u.a,{path:"/about",element:Object(p.jsx)(b,{})}),Object(p.jsx)(u.a,{path:"/checkout",element:Object(p.jsx)(f,{cartItems:i,setCartItems:s,totalPrice:l,setTotalPrice:m,data:g})})]})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,23)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),i(e),s(e),o(e)}))};o.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(a.a,{children:Object(p.jsx)(k,{})})}),document.getElementById("root")),v()}],[[22,1,2]]]);
//# sourceMappingURL=main.4a1a2afc.chunk.js.map