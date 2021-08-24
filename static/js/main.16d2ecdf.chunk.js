(this["webpackJsonpspacex-app"]=this["webpackJsonpspacex-app"]||[]).push([[0],[,,,,function(e,t,s){e.exports={description:"styles_description__Ukzwf",description__image:"styles_description__image__3JJCi",description__text:"styles_description__text__EuenN",description__title:"styles_description__title__1JkKC",description__about:"styles_description__about__3e3Io",likeButton:"styles_likeButton__22pox",likeButtonHovered:"styles_likeButtonHovered__37fRi",rocketList:"styles_rocketList__32pEv",rocketList__item:"styles_rocketList__item__mHy7l",rocketList__info:"styles_rocketList__info__2I31j",rocketList__button:"styles_rocketList__button__1zvpu",rocketList__image:"styles_rocketList__image__2AjGo",rocketList__details:"styles_rocketList__details__jZ7yI",success:"styles_success__2Oerp",failure:"styles_failure__1xlyG",goBackButton:"styles_goBackButton__3ZcaN"}},,function(e,t,s){e.exports={container:"styles_container__1vUxE",rocketContainer:"styles_rocketContainer__3QtuM",flight:"styles_flight__Lixqo",tip:"styles_tip__tg91c",rocket:"styles_rocket__24M3X",dots:"styles_dots__3cewC",window:"styles_window__1JJie",wing:"styles_wing__2MAOb",wingOne:"styles_wingOne__1N24J",wingTwo:"styles_wingTwo__3SnjH",bum:"styles_bum__cjfqP",light:"styles_light__1574W",light2:"styles_light2__1DWQd",flame:"styles_flame__1S2uh",glow:"styles_glow__1hbFs",flame2:"styles_flame2__38_N5"}},function(e,t,s){e.exports={item:"styles_item__2gbNs",body:"styles_body__Mxtxv",title:"styles_title___w0Jz",description:"styles_description__3ZnSA",like:"styles_like__1UNUe",success:"styles_success__2xpbR",failure:"styles_failure__3xViQ",search:"styles_search__2hCyc",formControl:"styles_formControl__1Se8K"}},,,,,function(e,t,s){e.exports={main:"styles_main__3eJMh",list:"styles_list__2H6DH",description:"styles_description__300X1",search_wrapper:"styles_search_wrapper__39GDk",search_button:"styles_search_button__1ycr6",search_input:"styles_search_input__1TpNR",search_select:"styles_search_select__KK2w3",sidebar_open:"styles_sidebar_open__KXa2d",sidebar_close:"styles_sidebar_close__tbURv"}},,,function(e,t,s){e.exports={header:"styles_header__D7Cd9",headerTitle:"styles_headerTitle__22Tb8",button_burger:"styles_button_burger__1i_19"}},function(e,t,s){e.exports={category_wrapper:"styles_category_wrapper__2v5P8",item:"styles_item__YLZs6",item_active:"styles_item_active__2RK4i",like:"styles_like__5aUmW"}},,function(e,t,s){e.exports={app:"styles_app__1VXZu"}},,,,,,,,,function(e,t,s){"use strict";s.r(t);var a=s(2),n=s(13),r=s.n(n),i=s(5),c=s(8),o=s.n(c),l=s(9),u=s(10),d=s(1),_=s(11),h=s(14),m=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"_getData",value:function(){var e=Object(h.a)(o.a.mark((function e(t){var s,a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.path,a=t.data,n=t.config,e.prev=1,e.next=4,fetch("".concat("https://api.spacexdata.com/v4/").concat(s),Object(_.a)(Object(_.a)({},n),{},{body:JSON.stringify(a),headers:{"Content-type":"application/json"}}));case 4:return r=e.sent,e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e.catch(1),console.error("getData Error: ",e.t0),e.abrupt("return");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchRockets",value:function(){var e=Object(h.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._getData({path:"rockets/query",data:{options:{limit:4}},config:{method:"POST"}});case 3:return t=e.sent,e.abrupt("return",this._transformRocketsData(t.docs));case 7:return e.prev=7,e.t0=e.catch(0),console.error("Loading rockets error: ",e.t0),e.abrupt("return");case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchLaunches",value:function(){var e=Object(h.a)(o.a.mark((function e(t){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._getData({path:"launches/query",data:{options:{limit:15,sort:{date_unix:"desc"},page:t,pagination:!0}},config:{method:"POST"}});case 3:return s=e.sent,e.abrupt("return",this._transformLaunchesData(s.docs));case 7:return e.prev=7,e.t0=e.catch(0),console.error("Loading rockets error: ",e.t0),e.abrupt("return");case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_transformLaunchesData",value:function(e){return e.map((function(e){return Object(_.a)(Object(_.a)({},e),{},{dataType:"Launches",favoriteDate:0})}))}},{key:"_transformRocketsData",value:function(e){return e.map((function(e){return Object(_.a)(Object(_.a)({},e),{},{dataType:"Rockets",favoriteDate:0})}))}}]),e}(),f=new(function(){function e(){Object(l.a)(this,e),this.favoritesDataStore=e.loadFromLocalStorage(),Object(d.o)(this,{favoritesDataStore:d.p,addItem:d.f.bound,deleteItem:d.f.bound})}return Object(u.a)(e,[{key:"updateLocalStorage",value:function(){localStorage.setItem("favorites",JSON.stringify(this.favoritesDataStore))}},{key:"addToFavorites",set:function(e){e.favoriteDate=Date.now(),this.addItem(e),this.updateLocalStorage()}},{key:"deleteFromFavorites",set:function(e){var t=this.favoritesDataStore.findIndex((function(t){return t.id===e}));this.deleteItem(t),this.updateLocalStorage()}},{key:"addItem",value:function(e){this.favoritesDataStore.push(e)}},{key:"deleteItem",value:function(e){this.favoritesDataStore.splice(e,1)}}],[{key:"loadFromLocalStorage",value:function(){var e=localStorage.getItem("favorites");return e?JSON.parse(e).sort((function(e,t){return t.favoriteDate-e.favoriteDate})):[]}}]),e}()),j=s(3),b=j.a.object({name:j.a.string(),id:j.a.string(),dataType:j.a.literal("Launches"),success:j.a.union([j.a.boolean(),j.a.null()]),flight_number:j.a.number(),links:j.a.object({webcast:j.a.union([j.a.string(),j.a.null()]),wikipedia:j.a.union([j.a.string(),j.a.null()]),patch:j.a.object({small:j.a.union([j.a.string(),j.a.null()])})}),rocket:j.a.string(),date_local:j.a.string(),date_unix:j.a.number(),details:j.a.string().nullable(),favoriteDate:j.a.number()}),p=j.a.array(b),g=j.a.object({name:j.a.string(),id:j.a.string(),flickr_images:j.a.array(j.a.string()),dataType:j.a.literal("Rockets"),description:j.a.string(),height:j.a.object({meters:j.a.number()}),diameter:j.a.object({meters:j.a.number()}),mass:j.a.object({kg:j.a.number()}),favoriteDate:j.a.number()}),y=j.a.array(g),k=new(function(){function e(){Object(l.a)(this,e),this.keyword="",this.filterCategory="",Object(d.o)(this,{keyword:d.p,addKeyword:d.f.bound,findItem:d.f,filterCategory:d.p,changeFilterCategory:d.f.bound,filteredData:d.g})}return Object(u.a)(e,[{key:"addKeyword",value:function(e){this.keyword=e}},{key:"findItem",value:function(e){var t=new RegExp(this.keyword,"i");return e.name.match(t)}},{key:"changeFilterCategory",value:function(e){this.filterCategory=e}},{key:"filteredData",get:function(){var e=this;return"Favorites"===v.currentCategory?f.favoritesDataStore.filter((function(t){return""===e.filterCategory||t.dataType===e.filterCategory})).filter((function(t){return!e.keyword||e.findItem(t)})):v.currentData}}]),e}()),v=new(function(){function e(){Object(l.a)(this,e),this._isLoading=!0,this._page=1,this._selectedCategory="Launches",this._selectedItemId=null,this._rocket=void 0,this.sidebarIsOpen=!1,this.launchesItems=[],this.rocketsItems=[],Object(d.o)(this,{_isLoading:d.p,_page:d.p,_selectedItemId:d.p,_selectedCategory:d.p,_rocket:d.p,sidebarIsOpen:d.p,currentCategory:d.g,launchesItems:d.p,rocketsItems:d.p,rocketItem:d.g,currentData:d.g,currentItem:d.g,fetchData:d.j.bound,loadMoreLaunches:d.f.bound,setIsLoading:d.f.bound,setCategory:d.f.bound,setLaunchesItems:d.f.bound,setRocketsItems:d.f.bound,setRocketItem:d.f.bound,setItemId:d.f.bound,toggleSidebar:d.f.bound})}return Object(u.a)(e,[{key:"toggleSidebar",value:function(e){this.sidebarIsOpen=e}},{key:"currentCategory",get:function(){return this._selectedCategory}},{key:"currentData",get:function(){return"Rockets"===this._selectedCategory?this.rocketsItems:"Favorites"===this._selectedCategory?f.favoritesDataStore?f.favoritesDataStore:[]:this.launchesItems}},{key:"currentItem",get:function(){var e=this;return this.currentData.find((function(t){return t.id===e._selectedItemId}))||this.currentData[0]}},{key:"rocketItem",get:function(){return this._rocket}},{key:"changeCategory",set:function(e){this.setCategory(e),this.setItemId(null),k.changeFilterCategory("")}},{key:"changeItemId",set:function(e){this.setItemId(e)}},{key:"setCategory",value:function(e){this._selectedCategory=e}},{key:"setItemId",value:function(e){this._selectedItemId=e}},{key:"setRocketItem",value:function(e){this._rocket=this.rocketsItems.find((function(t){return t.id===e}))}},{key:"setLaunchesItems",value:function(e){this.launchesItems=this.launchesItems.concat(p.parse(e))}},{key:"setRocketsItems",value:function(e){this.rocketsItems=y.parse(e)}},{key:"setIsLoading",value:function(e){this._isLoading=e}},{key:"fetchData",value:o.a.mark((function e(t){var s,a,n=this,r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=r.length>1&&void 0!==r[1]?r[1]:this._page,a=new m,this.setIsLoading(!0),"Launches"!==t){e.next=6;break}return e.next=6,a.fetchLaunches(s).then((function(e){n.setLaunchesItems(e),n.setIsLoading(!1)})).catch((function(e){return console.log(e,"Error")}));case 6:if("Rockets"!==t){e.next=9;break}return e.next=9,a.fetchRockets().then((function(e){n.setRocketsItems(e),n.setIsLoading(!1)})).catch((function(e){return console.log(e,"Error")}));case 9:case"end":return e.stop()}}),e,this)}))},{key:"loadMoreLaunches",value:function(){this._page++,this.fetchData("Launches")}}]),e}()),O=s(15),x=s.n(O),I=s(0),w=Object(i.a)((function(){return Object(I.jsxs)("header",{className:x.a.header,children:[Object(I.jsx)("button",{className:x.a.button_burger,onClick:function(){v.sidebarIsOpen?v.toggleSidebar(!1):v.toggleSidebar(!0)},children:v.sidebarIsOpen?Object(I.jsx)("i",{className:"fas fa-times"}):Object(I.jsx)("i",{className:"fas fa-bars"})}),Object(I.jsxs)("h1",{className:x.a.headerTitle,children:[Object(I.jsx)("i",{className:"fas fa-space-shuttle"}),"SpaceX App"]})]})})),N=s(16),L=s.n(N),D=[{id:1,name:"Launches",endpoint:"./launches"},{id:2,name:"Rockets",endpoint:"./rockets"},{id:3,name:"Favorites",endpoint:"./favorites"}],S=Object(i.a)((function(){return Object(I.jsx)("nav",{className:L.a.category_wrapper,children:D.map((function(e){return Object(I.jsx)("div",{className:"".concat(L.a.item," ").concat(v.currentCategory===e.name&&L.a.item_active),onClick:function(){v.changeCategory=e.name,v.toggleSidebar(!0)},children:e.name},e.id)}))})})),C=s(7),F=s.n(C),R=Object(i.a)((function(){return Object(I.jsxs)("div",{className:F.a.search,children:[Object(I.jsx)("input",{type:"text",value:k.keyword?k.keyword:"",onChange:function(e){return k.addKeyword(e.target.value)}}),Object(I.jsxs)("select",{value:k.filterCategory,onChange:function(e){return k.changeFilterCategory(e.target.value)},children:[Object(I.jsx)("option",{value:"",children:"All"},"000"),D.map((function(e){return"Favorites"!==e.name&&Object(I.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]})})),T=Object(i.a)((function(){var e=v.currentData;return Object(I.jsxs)(I.Fragment,{children:["Favorites"===v.currentCategory&&Object(I.jsx)(R,{}),e?k.filteredData.map((function(e){var t,s,a;return Object(I.jsxs)("div",{className:F.a.item,onClick:function(){v.changeItemId=e.id,v.toggleSidebar(!1)},children:[Object(I.jsx)("img",{className:F.a.img,src:"Launches"===e.dataType?e.links.patch.small?e.links.patch.small:"https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg":e.flickr_images[0],alt:e.name}),Object(I.jsxs)("div",{className:F.a.body,children:[Object(I.jsx)("h3",{className:F.a.title,children:e.name}),Object(I.jsxs)("div",{className:F.a.description,children:[Object(I.jsx)("div",{children:"Launches"===e.dataType&&e.hasOwnProperty("success")?(a=e.success,null===a?"Status: No data":a?Object(I.jsxs)(I.Fragment,{children:["Status:",Object(I.jsx)("span",{className:F.a.success,children:" Success"})]}):Object(I.jsxs)(I.Fragment,{children:["Status:",Object(I.jsx)("span",{className:F.a.failure,children:" Failure"})]})):"Status: No data"}),"Launches"===e.dataType?"Launch: ".concat((s=e.date_unix,new Date(1e3*s).toLocaleString("ru-RU"))):e.description]})]}),"Favorites"!==v.currentCategory&&(null===(t=f.favoritesDataStore)||void 0===t?void 0:t.some((function(t){return t.id===e.id})))&&Object(I.jsx)("i",{className:"".concat(F.a.like," fas fa-heart")})]},e.id)})):Object(I.jsx)("p",{children:"Not found items"})]})})),J=s(19),B=s(4),M=s.n(B),E=function(e){var t=e.rocketsItem,s=t.name,a=t.height,n=t.diameter,r=t.mass,i=t.flickr_images;return Object(I.jsxs)("div",{className:M.a.rocketList__info,children:[Object(I.jsx)("div",{children:Object(I.jsx)("img",{className:M.a.rocketList__image,src:i[0],alt:s})}),Object(I.jsxs)("div",{className:M.a.rocketList__details,children:[Object(I.jsx)("h3",{children:s}),Object(I.jsxs)("div",{children:["Height: ",a.meters," meters"]}),Object(I.jsxs)("div",{children:["Diameter: ",n.meters," meters"]}),Object(I.jsxs)("div",{children:["Mass: ",r.kg," kg"]})]})]})},H=Object(i.a)((function(e){var t=e.launchesItem,s=Object(a.useState)(!1),n=Object(J.a)(s,2),r=n[0],i=n[1];Object(a.useEffect)((function(){v.setRocketItem(t.rocket)}),[t.rocket]);var c=v.rocketItem;return"undefined"!==typeof t&&"undefined"!==typeof c?Object(I.jsxs)("div",{className:M.a.rocketList,children:[Object(I.jsxs)("div",{className:M.a.rocketList__item,children:[Object(I.jsx)("div",{children:Object(I.jsx)("strong",{children:"Rocket:"})}),Object(I.jsxs)("div",{children:[Object(I.jsxs)("button",{className:M.a.rocketList__button,onClick:function(){return i(!r)},children:[c.name," ",r?"[\u2191]":"[\u2193]"]}),r&&Object(I.jsx)(E,{rocketsItem:c})]},c.id)]}),Object(I.jsxs)("div",{className:M.a.rocketList__item,children:[Object(I.jsx)("strong",{children:"Success:"}),t.success?Object(I.jsx)("span",{className:M.a.success,children:"Success"}):Object(I.jsx)("span",{className:M.a.failure,children:"Failure"})]}),Object(I.jsxs)("div",{className:M.a.rocketList__item,children:[Object(I.jsx)("strong",{children:"Flight number: "}),t.flight_number]}),Object(I.jsxs)("div",{className:M.a.rocketList__item,children:[Object(I.jsx)("strong",{children:"Webcast: "}),null!==t.links.webcast?Object(I.jsx)("a",{href:t.links.webcast,target:"_blank",rel:"noreferrer",children:t.links.webcast}):"none"]}),Object(I.jsxs)("div",{className:M.a.rocketList__item,children:[Object(I.jsx)("strong",{children:"Wikipedia: "}),null!==t.links.wikipedia?Object(I.jsx)("a",{href:t.links.wikipedia,target:"_blank",rel:"noreferrer",children:t.links.wikipedia}):"none"]})]}):Object(I.jsx)("div",{children:"Full description not found"})})),K=Object(i.a)((function(){var e,t=v.currentItem;return t?Object(I.jsxs)("div",{className:M.a.description,children:[Object(I.jsx)("img",{className:M.a.description__image,src:"links"in t?t.links.patch.small?t.links.patch.small:"https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg":t.flickr_images[0],alt:t.name}),Object(I.jsxs)("div",{className:M.a.description__text,children:[Object(I.jsx)("h2",{className:M.a.description__title,children:t.name}),Object(I.jsx)("div",{className:M.a.description__about,children:"details"in t?t.details:t.description})]}),"Launches"===t.dataType?Object(I.jsx)(H,{launchesItem:t}):Object(I.jsx)(E,{rocketsItem:t}),Object(I.jsx)("button",{className:M.a.likeButton,onClick:function(){var e;return(null===(e=f.favoritesDataStore)||void 0===e?void 0:e.some((function(e){return e.id===t.id})))?f.deleteFromFavorites=t.id:f.addToFavorites=t},children:Object(I.jsx)("i",{className:(null===(e=f.favoritesDataStore)||void 0===e?void 0:e.some((function(e){return e.id===t.id})))?"".concat(M.a.likeButtonHovered," fas fa-heart"):"far fa-heart"})})]},t.id):Object(I.jsx)("div",{style:{width:"100%"},children:Object(I.jsx)("h1",{style:{textAlign:"center",marginTop:"100px"},children:"No items"})})})),U=s(12),A=s.n(U),P=Object(i.a)((function(){return Object(I.jsxs)("main",{className:A.a.main,children:[Object(I.jsx)(S,{}),Object(I.jsx)("div",{className:"".concat(A.a.list," ").concat(v.sidebarIsOpen?A.a.sidebar_open:A.a.sidebar_close),onScroll:function(e){Math.floor(e.target.offsetHeight+e.target.scrollTop+1)===e.target.scrollHeight&&v.loadMoreLaunches()},children:Object(I.jsx)(T,{})}),Object(I.jsx)(K,{})]})})),W=s(6),X=s.n(W),Z=function(){return Object(I.jsx)("div",{className:X.a.container,children:Object(I.jsxs)("div",{className:X.a.rocketContainer,children:[Object(I.jsx)("div",{className:X.a.tip}),Object(I.jsx)("div",{className:X.a.rocket}),Object(I.jsx)("div",{className:X.a.window}),Object(I.jsx)("div",{className:X.a.dots}),Object(I.jsx)("div",{className:X.a.bum}),Object(I.jsx)("div",{className:"".concat(X.a.wing," ").concat(X.a.wingOne)}),Object(I.jsx)("div",{className:"".concat(X.a.wing," ").concat(X.a.wingTwo)}),Object(I.jsx)("div",{className:X.a.light}),Object(I.jsx)("div",{className:X.a.light2}),Object(I.jsx)("div",{className:X.a.flame}),Object(I.jsx)("div",{className:X.a.flame2})]})})},q=s(18),z=s.n(q),G=Object(i.a)((function(){return Object(a.useEffect)((function(){v.fetchData("Launches"),v.fetchData("Rockets")}),[]),Object(I.jsxs)("div",{className:z.a.app,children:[Object(I.jsx)(w,{}),0===v.launchesItems.length||0===v.rocketsItems.length?Object(I.jsx)(Z,{}):Object(I.jsx)(P,{})]})})),Q=document.getElementById("root");r.a.render(Object(I.jsx)(a.StrictMode,{children:Object(I.jsx)(G,{})}),Q)}],[[27,1,2]]]);
//# sourceMappingURL=main.16d2ecdf.chunk.js.map