(this["webpackJsonpnxt-trendz-specific-product-details"]=this["webpackJsonpnxt-trendz-specific-product-details"]||[]).push([[0],{34:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(27),r=s.n(c),i=s(5),o=s(4),l=s(9),d=s(11),u=s(12),j=s(13),m=s(15),b=s(14),p=s(7),h=s.n(p),g=(s(34),s(0)),O=function(e){function t(){var e;Object(u.a)(this,t);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=Object(m.a)(this,t,[].concat(a))).state={username:"",password:"",showSubmitError:!1,errorMsg:""},e.onChangeUsername=function(t){e.setState({username:t.target.value})},e.onChangePassword=function(t){e.setState({password:t.target.value})},e.onSubmitSuccess=function(t){var s=e.props.history;h.a.set("jwt_token",t,{expires:30,path:"/"}),s.replace("/")},e.onSubmitFailure=function(t){e.setState({showSubmitError:!0,errorMsg:t})},e.submitForm=function(){var t=Object(d.a)(Object(l.a)().mark((function t(s){var a,n,c,r,i,o,d;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),a=e.state,n=a.username,c=a.password,r={username:n,password:c},i={method:"POST",body:JSON.stringify(r)},t.next=7,fetch("https://apis.ccbp.in/login",i);case 7:return o=t.sent,t.next=10,o.json();case 10:d=t.sent,!0===o.ok?e.onSubmitSuccess(d.jwt_token):e.onSubmitFailure(d.error_msg);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.renderPasswordField=function(){var t=e.state.password;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("label",{className:"input-label",htmlFor:"password",children:"PASSWORD"}),Object(g.jsx)("input",{type:"password",id:"password",className:"password-input-field",value:t,onChange:e.onChangePassword})]})},e.renderUsernameField=function(){var t=e.state.username;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("label",{className:"input-label",htmlFor:"username",children:"USERNAME"}),Object(g.jsx)("input",{type:"text",id:"username",className:"username-input-field",value:t,onChange:e.onChangeUsername})]})},e}return Object(b.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.state,t=e.showSubmitError,s=e.errorMsg;return void 0!==h.a.get("jwt_token")?Object(g.jsx)(o.a,{to:"/"}):Object(g.jsxs)("div",{className:"login-form-container",children:[Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png",className:"login-website-logo-mobile-image",alt:"website logo"}),Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png",className:"login-image",alt:"website login"}),Object(g.jsxs)("form",{className:"form-container",onSubmit:this.submitForm,children:[Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png",className:"login-website-logo-desktop-image",alt:"website logo"}),Object(g.jsx)("div",{className:"input-container",children:this.renderUsernameField()}),Object(g.jsx)("div",{className:"input-container",children:this.renderPasswordField()}),Object(g.jsx)("button",{type:"submit",className:"login-button",children:"Login"}),t&&Object(g.jsxs)("p",{className:"error-message",children:["*",s]})]})]})}}])}(a.Component),x=O,f=(s(44),Object(o.g)((function(e){var t=function(){var t=e.history;h.a.remove("jwt_token"),t.replace("/login")};return Object(g.jsxs)("nav",{className:"nav-header",children:[Object(g.jsxs)("div",{className:"nav-content",children:[Object(g.jsxs)("div",{className:"nav-bar-mobile-logo-container",children:[Object(g.jsx)(i.b,{to:"/",children:Object(g.jsx)("img",{className:"website-logo",src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png",alt:"website logo"})}),Object(g.jsx)("button",{type:"button",className:"nav-mobile-btn",children:Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png",alt:"nav logout",className:"nav-bar-image",onClick:t})})]}),Object(g.jsxs)("div",{className:"nav-bar-large-container",children:[Object(g.jsx)(i.b,{to:"/",children:Object(g.jsx)("img",{className:"website-logo",src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png",alt:"website logo"})}),Object(g.jsxs)("ul",{className:"nav-menu",children:[Object(g.jsx)("li",{className:"nav-menu-item",children:Object(g.jsx)(i.b,{to:"/",className:"nav-link",children:"Home"})}),Object(g.jsx)("li",{className:"nav-menu-item",children:Object(g.jsx)(i.b,{to:"/products",className:"nav-link",children:"Products"})}),Object(g.jsx)("li",{className:"nav-menu-item",children:Object(g.jsx)(i.b,{to:"/cart",className:"nav-link",children:"Cart"})})]}),Object(g.jsx)("button",{type:"button",className:"logout-desktop-btn",onClick:t,children:"Logout"})]})]}),Object(g.jsx)("div",{className:"nav-menu-mobile",children:Object(g.jsxs)("ul",{className:"nav-menu-list-mobile",children:[Object(g.jsx)("li",{className:"nav-menu-item-mobile",children:Object(g.jsx)(i.b,{to:"/",className:"nav-link",children:Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png",alt:"nav home",className:"nav-bar-image"})})}),Object(g.jsx)("li",{className:"nav-menu-item-mobile",children:Object(g.jsx)(i.b,{to:"/products",className:"nav-link",children:Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png",alt:"nav products",className:"nav-bar-image"})})}),Object(g.jsx)("li",{className:"nav-menu-item-mobile",children:Object(g.jsx)(i.b,{to:"/cart",className:"nav-link",children:Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png",alt:"nav cart",className:"nav-bar-image"})})})]})})]})}))),v=(s(45),function(){return void 0===h.a.get("jwt_token")?Object(g.jsx)(o.a,{to:"/login"}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(f,{}),Object(g.jsxs)("div",{className:"home-container",children:[Object(g.jsxs)("div",{className:"home-content",children:[Object(g.jsx)("h1",{className:"home-heading",children:"Clothes That Get YOU Noticed"}),Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png",alt:"clothes that get you noticed",className:"home-mobile-img"}),Object(g.jsx)("p",{className:"home-description",children:"Fashion is part of the daily air and it does not quite help that it changes all the time. Clothes have always been a marker of the era and we are in a revolution. Your fashion makes you been seen and heard that way you are. So, celebrate the seasons new and exciting fashion in your own way."}),Object(g.jsx)(i.b,{to:"/products",children:Object(g.jsx)("button",{type:"button",className:"shop-now-button",children:"Shop Now"})})]}),Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png",alt:"clothes that get you noticed",className:"home-desktop-img"})]})]})}),N=s(18),y=s.n(N),w=s(16),S=(s(64),function(e){var t=function(t){var s=e.enterSearchInput;"Enter"===t.key&&s()},s=function(t){(0,e.changeSearchInput)(t.target.value)},a=e.clearFilters;return Object(g.jsxs)("div",{className:"filters-group-container",children:[function(){var a=e.searchInput;return Object(g.jsxs)("div",{className:"search-input-container",children:[Object(g.jsx)("input",{value:a,type:"search",className:"search-input",placeholder:"Search",onChange:s,onKeyDown:t}),Object(g.jsx)(w.d,{className:"search-icon"})]})}(),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{className:"category-heading",children:"Category"}),Object(g.jsx)("ul",{className:"categories-list",children:e.categoryOptions.map((function(t){var s=e.changeCategory,a=e.activeCategoryId,n=t.categoryId===a?"category-name active-category-name":"category-name";return Object(g.jsx)("li",{className:"category-item",onClick:function(){return s(t.categoryId)},children:Object(g.jsx)("p",{className:n,children:t.name})},t.categoryId)}))})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"rating-heading",children:"Rating"}),Object(g.jsx)("ul",{className:"ratings-list",children:e.ratingsList.map((function(t){var s=e.changeRating,a=e.activeRatingId===t.ratingId?"and-up active-rating":"and-up";return Object(g.jsxs)("li",{className:"rating-item",onClick:function(){return s(t.ratingId)},children:[Object(g.jsx)("img",{src:t.imageUrl,alt:"rating ".concat(t.ratingId),className:"rating-image"}),Object(g.jsx)("p",{className:a,children:"& up"})]},t.ratingId)}))})]}),Object(g.jsx)("button",{type:"button",className:"clear-filters-btn",onClick:a,children:"Clear Filters"})]})}),I=(s(65),function(e){var t=e.productData,s=t.title,a=t.brand,n=t.imageUrl,c=t.rating,r=t.price,o=t.id;return Object(g.jsxs)("li",{className:"product-item",children:[Object(g.jsx)(i.b,{to:"/products/".concat(o),children:Object(g.jsx)("img",{src:n,alt:"product",className:"thumbnail"})}),Object(g.jsx)("h1",{className:"title",children:s}),Object(g.jsxs)("p",{className:"brand",children:["by ",a]}),Object(g.jsxs)("div",{className:"product-details",children:[Object(g.jsxs)("p",{className:"price",children:["Rs ",r,"/-"]}),Object(g.jsxs)("div",{className:"rating-container",children:[Object(g.jsx)("p",{className:"rating",children:c}),Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/star-img.png",alt:"star",className:"star"})]})]})]})}),k=(s(66),function(e){var t=e.sortbyOptions,s=e.activeOptionId;return Object(g.jsxs)("div",{className:"products-header",children:[Object(g.jsx)("h1",{className:"products-list-heading",children:"All Products"}),Object(g.jsxs)("div",{className:"sort-by-container",children:[Object(g.jsx)(w.b,{className:"sort-by-icon"}),Object(g.jsx)("p",{className:"sort-by",children:"Sort by"}),Object(g.jsx)("select",{className:"sort-by-select",value:s,onChange:function(t){(0,e.changeSortby)(t.target.value)},children:t.map((function(e){return Object(g.jsx)("option",{value:e.optionId,className:"select-option",children:e.displayText},e.optionId)}))})]})]})}),C=(s(67),[{name:"Clothing",categoryId:"1"},{name:"Electronics",categoryId:"2"},{name:"Appliances",categoryId:"3"},{name:"Grocery",categoryId:"4"},{name:"Toys",categoryId:"5"}]),P=[{optionId:"PRICE_HIGH",displayText:"Price (High-Low)"},{optionId:"PRICE_LOW",displayText:"Price (Low-High)"}],D=[{ratingId:"4",imageUrl:"https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png"},{ratingId:"3",imageUrl:"https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png"},{ratingId:"2",imageUrl:"https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png"},{ratingId:"1",imageUrl:"https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png"}],F="INITIAL",R="SUCCESS",L="FAILURE",E="IN_PROGRESS",U=function(e){function t(){var e;Object(u.a)(this,t);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=Object(m.a)(this,t,[].concat(a))).state={productsList:[],apiStatus:F,activeOptionId:P[0].optionId,activeCategoryId:"",searchInput:"",activeRatingId:""},e.getProducts=Object(d.a)(Object(l.a)().mark((function t(){var s,a,n,c,r,i,o,d,u,j,m;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:E}),s=h.a.get("jwt_token"),a=e.state,n=a.activeOptionId,c=a.activeCategoryId,r=a.searchInput,i=a.activeRatingId,o="https://apis.ccbp.in/products?sort_by=".concat(n,"&category=").concat(c,"&title_search=").concat(r,"&rating=").concat(i),d={headers:{Authorization:"Bearer ".concat(s)},method:"GET"},t.next=7,fetch(o,d);case 7:if(!(u=t.sent).ok){t.next=16;break}return t.next=11,u.json();case 11:j=t.sent,m=j.products.map((function(e){return{title:e.title,brand:e.brand,price:e.price,id:e.id,imageUrl:e.image_url,rating:e.rating}})),e.setState({productsList:m,apiStatus:R}),t.next=17;break;case 16:e.setState({apiStatus:L});case 17:case"end":return t.stop()}}),t)}))),e.changeSortby=function(t){e.setState({activeOptionId:t},e.getProducts)},e.clearFilters=function(){e.setState({searchInput:"",activeCategoryId:"",activeRatingId:""},e.getProducts)},e.changeRating=function(t){e.setState({activeRatingId:t},e.getProducts)},e.changeCategory=function(t){e.setState({activeCategoryId:t},e.getProducts)},e.enterSearchInput=function(){e.getProducts()},e.changeSearchInput=function(t){e.setState({searchInput:t})},e.renderFailureView=function(){return Object(g.jsxs)("div",{className:"products-error-view-container",children:[Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png",alt:"products failure",className:"products-failure-img"}),Object(g.jsx)("h1",{className:"product-failure-heading-text",children:"Oops! Something Went Wrong"}),Object(g.jsx)("p",{className:"products-failure-description",children:"We are having some trouble processing your request. Please try again."})]})},e.renderProductsListView=function(){var t=e.state,s=t.productsList,a=t.activeOptionId;return s.length>0?Object(g.jsxs)("div",{className:"all-products-container",children:[Object(g.jsx)(k,{activeOptionId:a,sortbyOptions:P,changeSortby:e.changeSortby}),Object(g.jsx)("ul",{className:"products-list",children:s.map((function(e){return Object(g.jsx)(I,{productData:e},e.id)}))})]}):Object(g.jsxs)("div",{className:"no-products-view",children:[Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png",className:"no-products-img",alt:"no products"}),Object(g.jsx)("h1",{className:"no-products-heading",children:"No Products Found"}),Object(g.jsx)("p",{className:"no-products-description",children:"We could not find any products. Try other filters."})]})},e.renderLoadingView=function(){return Object(g.jsx)("div",{className:"products-loader-container",children:Object(g.jsx)(y.a,{type:"ThreeDots",color:"#0b69ff",height:"50",width:"50"})})},e.renderAllProducts=function(){switch(e.state.apiStatus){case R:return e.renderProductsListView();case L:return e.renderFailureView();case E:return e.renderLoadingView();default:return null}},e}return Object(b.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"render",value:function(){var e=this.state,t=e.activeCategoryId,s=e.searchInput,a=e.activeRatingId;return Object(g.jsxs)("div",{className:"all-products-section",children:[Object(g.jsx)(S,{searchInput:s,categoryOptions:C,ratingsList:D,changeSearchInput:this.changeSearchInput,enterSearchInput:this.enterSearchInput,activeCategoryId:t,activeRatingId:a,changeCategory:this.changeCategory,changeRating:this.changeRating,clearFilters:this.clearFilters}),this.renderAllProducts()]})}}])}(a.Component),_=U,z=(s(68),"INITIAL"),A="SUCCESS",T="FAILURE",V="IN_PROGRESS",q=function(e){function t(){var e;Object(u.a)(this,t);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=Object(m.a)(this,t,[].concat(a))).state={primeDeals:[],apiStatus:z},e.getPrimeDeals=Object(d.a)(Object(l.a)().mark((function t(){var s,a,n,c,r;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:V}),s=h.a.get("jwt_token"),a={headers:{Authorization:"Bearer ".concat(s)},method:"GET"},t.next=6,fetch("https://apis.ccbp.in/prime-deals",a);case 6:if(!0!==(n=t.sent).ok){t.next=13;break}return t.next=10,n.json();case 10:c=t.sent,r=c.prime_deals.map((function(e){return{title:e.title,brand:e.brand,price:e.price,id:e.id,imageUrl:e.image_url,rating:e.rating}})),e.setState({primeDeals:r,apiStatus:A});case 13:401===n.status&&e.setState({apiStatus:T});case 14:case"end":return t.stop()}}),t)}))),e.renderPrimeDealsList=function(){var t=e.state.primeDeals;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"primedeals-list-heading",children:"Exclusive Prime Deals"}),Object(g.jsx)("ul",{className:"products-list",children:t.map((function(e){return Object(g.jsx)(I,{productData:e},e.id)}))})]})},e.renderPrimeDealsFailureView=function(){return Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png",alt:"Register Prime",className:"register-prime-image"})},e.renderLoadingView=function(){return Object(g.jsx)("div",{className:"primedeals-loader-container",children:Object(g.jsx)(y.a,{type:"ThreeDots",color:"#0b69ff",height:"50",width:"50"})})},e}return Object(b.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){this.getPrimeDeals()}},{key:"render",value:function(){switch(this.state.apiStatus){case A:return this.renderPrimeDealsList();case T:return this.renderPrimeDealsFailureView();case V:return this.renderLoadingView();default:return null}}}])}(a.Component),G=q,M=(s(69),function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(f,{}),Object(g.jsxs)("div",{className:"product-sections",children:[Object(g.jsx)(G,{}),Object(g.jsx)(_,{})]})]})}),W=(s(70),function(e){var t=e.productDetails,s=t.imageUrl,a=t.title,n=t.brand,c=t.price,r=t.rating;return Object(g.jsxs)("li",{className:"similar-item",children:[Object(g.jsx)("img",{src:s,alt:"similar product ".concat(a),className:"similar-image"}),Object(g.jsx)("h1",{className:"title-similar",children:a}),Object(g.jsx)("p",{className:"brand-name",children:n}),Object(g.jsxs)("div",{className:"bottom-div",children:[Object(g.jsxs)("p",{className:"price-bottom",children:[c,"/-"]}),Object(g.jsxs)("p",{className:"rating-bottom",children:[Object(g.jsx)("span",{children:r}),Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/star-img.png",className:"star-img",alt:"star"})]})]})]})}),B=(s(71),"INITIAL"),H="SUCCESS",J="FAILURE",Y="IN_PROGRESS",K=function(e){function t(){var e;Object(u.a)(this,t);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=Object(m.a)(this,t,[].concat(a))).state={productsList:{},quantity:1,similarProductsData:[],apiStatus:B},e.getFormattedData=function(e){return{availability:e.availability,brand:e.brand,description:e.description,id:e.id,imageUrl:e.image_url,price:e.price,rating:e.rating,title:e.title,totalReviews:e.total_reviews}},e.getDetails=Object(d.a)(Object(l.a)().mark((function t(){var s,a,n,c,r,i,o,d,u;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.props.match,a=s.params,n=a.id,c=h.a.get("jwt_token"),r={method:"GET",headers:{Authorization:"Bearer ".concat(c)}},t.next=7,fetch("https://apis.ccbp.in/products/".concat(n),r);case 7:if(!(i=t.sent).ok){t.next=15;break}return t.next=11,i.json();case 11:o=t.sent,d=e.getFormattedData(o),u=o.similar_products.map((function(t){return e.getFormattedData(t)})),e.setState({productsList:d,similarProductsData:u,apiStatus:H});case 15:404===i.status&&e.setState({apiStatus:J});case 16:case"end":return t.stop()}}),t)}))),e.increment=function(){e.setState((function(e){return{quantity:e.quantity+1}}))},e.decrement=function(){e.state.quantity>1&&e.setState((function(e){return{quantity:e.quantity-1}}))},e.rendersuccessDetails=function(){var t=e.state,s=t.similarProductsData,a=t.productsList,n=a.imageUrl,c=a.title,r=a.brand,i=a.totalReviews,o=a.rating,l=a.availability,d=a.price,u=a.description,j=e.state.quantity;return Object(g.jsxs)("div",{className:"success-container",children:[Object(g.jsxs)("div",{className:"first-container",children:[Object(g.jsx)("img",{src:n,className:"src-image",alt:"product"}),Object(g.jsxs)("div",{className:"first-content",children:[Object(g.jsx)("h1",{className:"first-heading",children:c}),Object(g.jsxs)("p",{className:"first-price",children:["Rs ",d,"/- "]}),Object(g.jsxs)("div",{className:"rating-holder",children:[Object(g.jsxs)("div",{className:"rating",children:[Object(g.jsx)("p",{className:"para",children:o}),Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/star-img.png",className:"star-img",alt:"star"})]}),Object(g.jsxs)("p",{className:"review",children:[i," Reviews"]})]}),Object(g.jsx)("p",{className:"first-para",children:u}),Object(g.jsxs)("p",{className:"review",children:[Object(g.jsx)("span",{className:"first-bold",children:"Available: "}),l]}),Object(g.jsxs)("p",{className:"review",children:[Object(g.jsx)("span",{className:"first-bold",children:"Brand: "}),r]}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{className:"quantity-holder",children:[Object(g.jsx)("button",{type:"button",className:"btn","data-testid":"minus",onClick:e.decrement,children:Object(g.jsx)(w.a,{className:"btn-icons"})}),Object(g.jsx)("p",{className:"number",children:j}),Object(g.jsx)("button",{type:"button",className:"btn","data-testid":"plus",onClick:e.increment,children:Object(g.jsx)(w.c,{className:"btn-icons"})})]}),Object(g.jsx)("button",{type:"button",className:"add-btn",children:"ADD TO CART"})]})]}),Object(g.jsx)("h1",{className:"similar-heading",children:"Similar Products"}),Object(g.jsx)("ul",{className:"similar-list",children:s.map((function(e){return Object(g.jsx)(W,{productDetails:e},e.id)}))})]})},e.renderFailureView=function(){return Object(g.jsxs)("div",{className:"product-details-failure-view-container",children:[Object(g.jsx)("img",{alt:"failure view",src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png",className:"failure-view-image"}),Object(g.jsx)("h1",{className:"product-not-found-heading",children:"Product Not Found"}),Object(g.jsx)(i.b,{to:"/products",children:Object(g.jsx)("button",{type:"button",className:"button",children:"Continue Shopping"})})]})},e.renderLoaderView=function(){return Object(g.jsx)("div",{className:"products-details-loader-container","data-testid":"loader",children:Object(g.jsx)(N.Loader,{type:"ThreeDots",color:"#0b69ff",height:"50",width:"50"})})},e.renderProductDetails=function(){switch(e.state.apiStatus){case H:return e.rendersuccessDetails();case J:return e.renderFailureView();case Y:return e.renderLoaderView();default:return null}},e}return Object(b.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){this.getDetails()}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(f,{}),Object(g.jsx)("div",{className:"product-item-details-container",children:this.renderProductDetails()})]})}}])}(a.Component),Q=K,X=(s(72),function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(f,{}),Object(g.jsx)("div",{className:"cart-container",children:Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png",alt:"cart",className:"cart-img"})})]})}),Z=(s(73),function(){return Object(g.jsx)("div",{className:"not-found-container",children:Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png",alt:"not found",className:"not-found-img"})})}),$=s(29),ee=function(e){return void 0===h.a.get("jwt_token")?Object(g.jsx)(o.a,{to:"/login"}):Object(g.jsx)(o.b,Object($.a)({},e))},te=(s(74),function(){return Object(g.jsxs)(o.d,{children:[Object(g.jsx)(o.b,{exact:!0,path:"/login",component:x}),Object(g.jsx)(ee,{exact:!0,path:"/",component:v}),Object(g.jsx)(ee,{exact:!0,path:"/products",component:M}),Object(g.jsx)(ee,{exact:!0,path:"/products/:id",component:Q}),Object(g.jsx)(ee,{exact:!0,path:"/cart",component:X}),Object(g.jsx)(o.b,{path:"/not-found",component:Z}),Object(g.jsx)(o.a,{to:"not-found"})]})});r.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(i.a,{children:Object(g.jsx)(te,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.ff3237ec.chunk.js.map