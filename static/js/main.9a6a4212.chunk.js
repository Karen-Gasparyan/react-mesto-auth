(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(19),i=n.n(s),r=n(20),o=n.n(r),l=n(10),u=(n(33),n(24)),j=n(2),d=n(3),p=n(23),b=(n(34),n(0)),h=function(){return Object(b.jsx)("div",{className:"header__logo"})},m=(n(36),function(e){var t=e.userEmail,n=e.signOut;return Object(b.jsxs)("div",{className:"my-profile",children:[Object(b.jsx)("p",{className:"my-profile__email",children:t}),Object(b.jsx)("button",{onClick:n,className:"my-profile__out-btn",children:"\u0412\u044b\u0439\u0442\u0438"})]})}),O=(n(37),function(e){var t=e.loggedIn,n=e.userEmail,a=e.signOut;return Object(b.jsx)("div",{className:"user__profile",children:t?Object(b.jsx)(m,{userEmail:n,signOut:a}):null})}),g=(n(38),function(e){var t=e.component,n=e.loggedIn,a=e.changeHeaderMenu,c=e.headerMenuBurger;return Object(b.jsx)("div",{className:"header__burger-menu",children:n?Object(b.jsx)(t,{changeHeaderMenu:a,headerMenuBurger:c}):null})}),f=(n(39),function(e){var t=e.loginPage,n=e.handleChangeLoginPage;return Object(b.jsx)(l.b,{to:t?"/signup":"/signin",onClick:n,className:"auth-button",children:t?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u043e\u0439\u0442\u0438"})});n(43);var _=function(e){var t=e.component,n=e.userEmail,a=e.loggedIn,c=e.visibleHeaderMenu,s=e.signOut,i=e.changeHeaderMenu,r=e.headerMenuBurger,o=e.loginPage,l=e.handleChangeLoginPage;return Object(b.jsxs)(b.Fragment,{children:[a&&c?Object(b.jsx)(m,{userEmail:n,signOut:s}):null,Object(b.jsxs)("div",{className:"header page__header",children:[Object(b.jsx)(h,{}),Object(b.jsx)(O,{loggedIn:a,userEmail:n,signOut:s}),a?Object(b.jsx)(g,{component:t,loggedIn:a,changeHeaderMenu:i,headerMenuBurger:r}):null,a?null:Object(b.jsx)(f,{loginPage:o,handleChangeLoginPage:l})]})]})},x=c.a.createContext();var v=function(e){var t=e.cardValues,n=e.onCardClick,a=e.onCardLike,s=e.onCardDelete,i=t.name,r=t.link,o=t.likes,l=t.owner,u=t._id,j=c.a.useContext(x),d=l===j._id,p="element__deleted ".concat(d?"element__deleted_active":""),h=o.some((function(e){return e===j._id})),m="element__like ".concat(h?"element__like_active":"");return Object(b.jsxs)("article",{className:"element",children:[Object(b.jsx)("img",{src:r,alt:i,onError:function(e){return e.target.src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"},className:"element__image",onClick:function(){n(i,r)}}),Object(b.jsx)("button",{type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",className:p,onClick:function(){s(u)}}),Object(b.jsxs)("div",{className:"element__description-wrapper",children:[Object(b.jsx)("h2",{className:"element__title",children:i}),Object(b.jsxs)("div",{className:"element__of-wrapper-likes",children:[Object(b.jsx)("button",{type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0441 \u043e\u0442\u043c\u0435\u0442\u043a\u043e\u0439 - \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",title:"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",className:m,onClick:function(){a(o,u)}}),Object(b.jsx)("p",{className:"element__of-number-likes",children:o.length})]})]})]})};var N=function(e){var t=e.onEditAvatar,n=e.onEditProfile,a=e.onAddPlace,s=e.onCardClick,i=e.cards,r=e.cardsError,o=e.onCardLike,l=e.onCardDelete,u=c.a.useContext(x),j=u.name,d=u.about,p=u.avatar;return Object(b.jsxs)("div",{className:"content page__content",children:[Object(b.jsxs)("section",{className:"profile content__profile",children:[Object(b.jsxs)("div",{className:"profile__wrapper",children:[Object(b.jsxs)("div",{className:"profile__avatar-wrapper",children:[Object(b.jsx)("img",{src:p,onError:function(e){return e.target.src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"},alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"}),Object(b.jsx)("div",{className:"profile__edit-avatar",onClick:t})]}),Object(b.jsxs)("div",{className:"profile__info",children:[Object(b.jsx)("h1",{className:"profile__title",children:j}),Object(b.jsx)("button",{type:"button",className:"profile__edit-button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 - \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:n}),Object(b.jsx)("p",{className:"profile__subtitile",children:d})]})]}),Object(b.jsx)("button",{type:"button",className:"profile__add-button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 - \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u0441 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u043c\u0435\u0441\u0442\u0430",onClick:a})]}),Object(b.jsx)("section",{className:"elements content__elements","aria-label":"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438, \u0441 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f\u043c\u0438 \u043c\u0435\u0441\u0442",children:r||i.map((function(e){return Object(b.jsx)(v,{cardValues:e,onCardClick:s,onCardLike:o,onCardDelete:l},e._id)}))})]})};var S=function(){return Object(b.jsx)("div",{className:"footer page__footer",children:Object(b.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 \u041a\u0430\u0440\u0435\u043d \u0413\u0430\u0441\u043f\u0430\u0440\u044f\u043d"})})},C=(n(44),function(e){var t=e.authData,n=t.email,a=t.password,c=t.emailError,s=t.passwordError,i=t.authDirty,r=t.validForm,o=t.handleChangeEmail,l=t.handleChangePassword,u=t.blurHandler,j=e.submitButtonText,d=e.onSubmit,p=e.name;return Object(b.jsxs)("form",{name:p,className:"auth__form",onSubmit:d,children:[Object(b.jsxs)("div",{className:"auth__inputs-wrapper",children:[Object(b.jsxs)("div",{className:"auth__input-wrapper",children:[Object(b.jsx)("input",{className:"auth__input-text auth__input-text_type_email",type:"email",name:"email",required:!0,minLength:"6",autoComplete:"off",placeholder:"Email",onBlur:u,value:n,onChange:o}),i&&c&&Object(b.jsx)("span",{id:"email-error",className:"error",children:c})]}),Object(b.jsxs)("div",{className:"auth__input-wrapper",children:[Object(b.jsx)("input",{className:"auth__input-text auth__input-text_type_password",type:"password",name:"password",required:!0,minLength:"8",maxLength:"50",autoComplete:"off",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onBlur:u,value:a,onChange:l}),i&&s&&Object(b.jsx)("span",{id:"password-error",className:"error",children:s})]})]}),Object(b.jsx)("button",{type:"submit",className:"auth__register-btn ".concat(r?"":"auth__register-btn_invalid"),disabled:!r,children:j})]})}),w=(n(45),function(e){var t=e.authData,n=e.handleSubmitLogin,c=e.setLoginPage;Object(a.useEffect)((function(){c(!0)}));return Object(b.jsxs)("div",{className:"login",children:[Object(b.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(b.jsx)(C,{authData:t,onSubmit:function(e){e.preventDefault(),n()},name:"authorize",submitButtonText:"\u0412\u043e\u0439\u0442\u0438"})]})}),k=(n(46),function(e){var t=e.authData,n=e.handleSubmitRegister;return Object(b.jsxs)("div",{className:"register",children:[Object(b.jsx)("h2",{className:"register__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(b.jsx)(C,{authData:t,onSubmit:function(e){e.preventDefault(),n()},name:"register",submitButtonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(b.jsx)("p",{className:"register__text-question",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})}),y=n.p+"static/media/burger-menu.ccf70202.svg",E=n.p+"static/media/close-menu-Icon.ba016e89.svg",L=(n(47),function(e){var t=e.changeHeaderMenu,n=e.headerMenuBurger;return Object(b.jsx)("button",{className:"loged__switch-button",onClick:t,children:Object(b.jsx)("img",{src:n?y:E,alt:n?"\u0420\u0430\u0441\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e":"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043c\u0435\u043d\u044e"})})}),T=n(25),I=n(26),B=function(e){var t=e.component,n=Object(I.a)(e,["component"]);return Object(b.jsx)(d.Route,{children:function(){return n.loggedIn?Object(b.jsx)(t,Object(T.a)({},n)):Object(b.jsx)(d.Redirect,{to:"/signin"})}})},A=c.a.createContext(),P=(n(48),function(){return Object(b.jsx)("div",{className:"loadingio-spinner-spin-fnepk7fl33h",children:Object(b.jsxs)("div",{className:"ldio-gqe9nbj4c1",children:[Object(b.jsx)("div",{children:Object(b.jsx)("div",{})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})})]})})});var R=function(e){var t=e.title,n=e.name,a=e.buttonText,s=e.children,i=e.isOpen,r=e.onClose,o=e.onSubmit,l=e.submitButtonValidation,u=c.a.useContext(A);return Object(b.jsx)("div",{className:"pop-up pop-up_".concat(n," ").concat(i?"pop-up_opened":""),children:Object(b.jsxs)("div",{className:"pop-up__container",children:[Object(b.jsxs)("form",{className:"pop-up__form",name:n,onSubmit:o,noValidate:!0,children:[Object(b.jsx)("h2",{className:"pop-up__title",children:t}),s,Object(b.jsxs)("button",{type:"submit","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0444\u043e\u0440\u043c\u044b",className:"pop-up__save-btn ".concat(l?"":"pop-up__save-btn_invalid"),disabled:!l,children:[a,u?Object(b.jsx)(P,{}):null]})]}),Object(b.jsx)("button",{type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430",title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"pop-up__close-btn",onClick:r})]})})};var U=function(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateUser,i=e.loading,r=e.resetForms,o=c.a.useContext(x),l=Object(a.useState)(""),u=Object(j.a)(l,2),d=u[0],p=u[1],h=Object(a.useState)(""),m=Object(j.a)(h,2),O=m[0],g=m[1],f=Object(a.useState)(""),_=Object(j.a)(f,2),v=_[0],N=_[1],S=Object(a.useState)(""),C=Object(j.a)(S,2),w=C[0],k=C[1],y=Object(a.useState)(!1),E=Object(j.a)(y,2),L=E[0],T=E[1],I=Object(a.useState)(!1),B=Object(j.a)(I,2),A=B[0],P=B[1];function U(e){e.target.value||"userName"!==e.target.name?e.target.value||"userAbout"!==e.target.name||k("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"):N("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c")}return Object(a.useEffect)((function(){p(o.name),g(o.about)}),[o,t]),Object(a.useEffect)((function(){P(!(!d||!O||v||w))}),[d,O,v,w]),Object(a.useEffect)((function(){r&&(N(""),k(""),T(!1),P(!1))}),[r]),Object(b.jsxs)(R,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",buttonText:i?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s({userName:d,about:O})},submitButtonValidation:A,children:[Object(b.jsxs)("div",{className:"pop-up__input-wrapper",children:[Object(b.jsx)("input",{name:"userName",value:d||"",required:!0,minLength:"2",maxLength:"20",autoComplete:"off",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f",type:"text",className:"pop-up__input-text pop-up__input-text_type_name",id:"userName",onChange:function(e){p(e.target.value),e.target.value.length<2||e.target.value.length>=20?(N("\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0435\u043d\u0435\u0435 2 \u0438 \u0431\u043e\u043b\u0435\u0435 20 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),T(!0)):N("")},onBlur:U}),L&&v&&Object(b.jsx)("span",{id:"userName-error",className:"error",children:v})]}),Object(b.jsxs)("div",{className:"pop-up__input-wrapper",children:[Object(b.jsx)("input",{name:"userAbout",value:O||"",required:!0,minLength:"2",maxLength:"200",autoComplete:"off",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c",type:"text",className:"pop-up__input-text pop-up__input-text_type_about",id:"userAbout",onChange:function(e){g(e.target.value),e.target.value.length<2||e.target.value.length>=200?(k("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0435\u043d\u0435\u0435 2 \u0438 \u0431\u043e\u043b\u0435\u0435 200 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),T(!0)):k("")},onBlur:U}),L&&w&&Object(b.jsx)("span",{id:"userAbout-error",className:"error",children:w})]})]})};var H=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,s=e.loading,i=e.resetForms,r=Object(a.useState)(""),o=Object(j.a)(r,2),l=o[0],u=o[1],d=Object(a.useState)(""),p=Object(j.a)(d,2),h=p[0],m=p[1],O=Object(a.useState)(!1),g=Object(j.a)(O,2),f=g[0],_=g[1],x=Object(a.useState)(!1),v=Object(j.a)(x,2),N=v[0],S=v[1];return Object(a.useEffect)((function(){i&&(u(""),m(""),_(!1),S(!1))}),[i]),Object(a.useEffect)((function(){S(!(!l||h))}),[l,h]),Object(b.jsx)(R,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"change-avatar",buttonText:s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c(l),u("")},submitButtonValidation:N,children:Object(b.jsxs)("div",{className:"pop-up__input-wrapper",children:[Object(b.jsx)("input",{name:"linkToAvatar",required:!0,autoComplete:"off",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"url",className:"pop-up__input-text pop-up__input-text_type_link",id:"linkToAvatar",value:l,onChange:function(e){u(e.target.value),/^(ftp|http|https):\/\/[^ "]+$/.test(e.target.value)?(m(""),_(!1),S(!0)):(m("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL"),_(!0))},onBlur:function(e){e.target.value||m("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c")}}),f&&h&&Object(b.jsx)("span",{id:"linkToAvatar-error",className:"error",children:h})]})})};var D=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,s=e.loading,i=e.resetForms,r=Object(a.useState)(""),o=Object(j.a)(r,2),l=o[0],u=o[1],d=Object(a.useState)(""),p=Object(j.a)(d,2),h=p[0],m=p[1],O=Object(a.useState)(""),g=Object(j.a)(O,2),f=g[0],_=g[1],x=Object(a.useState)(""),v=Object(j.a)(x,2),N=v[0],S=v[1],C=Object(a.useState)(!1),w=Object(j.a)(C,2),k=w[0],y=w[1],E=Object(a.useState)(!1),L=Object(j.a)(E,2),T=L[0],I=L[1];function B(e){e.target.value||"placeTitle"!==e.target.name?e.target.value||"placeLink"!==e.target.name||S("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"):_("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c")}return Object(a.useEffect)((function(){I(!(!l||!h||f||N))}),[l,h,f,N]),Object(a.useEffect)((function(){i&&(u(""),m(""),_(""),S(""),y(!1),I(!1))}),[i]),Object(b.jsxs)(R,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"img",buttonText:s?"\u0421\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:l,link:h}),u(""),m("")},submitButtonValidation:T,children:[Object(b.jsxs)("div",{className:"pop-up__input-wrapper",children:[Object(b.jsx)("input",{name:"placeTitle",required:!0,minLength:"2",maxLength:"30",autoComplete:"off",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",className:"pop-up__input-text pop-up__input-text_type_title",id:"placeName",value:l,onChange:function(e){u(e.target.value),e.target.value.length<2||e.target.value.length>=30?(_("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0435\u043d\u0435\u0435 2 \u0438 \u0431\u043e\u043b\u0435\u0435 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),y(!0)):_("")},onBlur:B}),k&&f&&Object(b.jsx)("span",{id:"placeName-error",className:"error",children:f})]}),Object(b.jsxs)("div",{className:"pop-up__input-wrapper",children:[Object(b.jsx)("input",{name:"placeLink",required:!0,autoComplete:"off",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"url",className:"pop-up__input-text pop-up__input-text_type_link",id:"linkToImage",value:h,onChange:function(e){m(e.target.value),/^(ftp|http|https):\/\/[^ "]+$/.test(e.target.value)?(S(""),y(!1),I(!0)):(S("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL"),y(!0))},onBlur:B}),k&&N&&Object(b.jsx)("span",{id:"linkToImage-error",className:"error",children:N})]})]})};var M=function(e){var t=e.card,n=t.isOpen,a=t.name,c=t.link,s=e.onClose;return Object(b.jsx)("div",{className:"pop-up pop-up_fullscreen ".concat(n?"pop-up_opened":""),children:Object(b.jsxs)("div",{className:"pop-up__container-fullscreen",children:[Object(b.jsx)("img",{src:c,alt:"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u043c\u0435\u0441\u0442\u0430",className:"pop-up__image-fullscreen"}),Object(b.jsx)("p",{className:"pop-up__captiion-fullscreen",children:a}),Object(b.jsx)("button",{type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430",title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"pop-up__close-btn",onClick:s})]})})},F=n.p+"static/media/infoTooltip-done.a9eb6caf.svg",q=n.p+"static/media/infoTooltip-error.d0f413bf.svg";var J=function(e){var t=e.title,n=e.isOpen,a=e.messageIcon;return Object(b.jsx)("div",{className:"pop-up ".concat(n?"pop-up_opened":""),children:Object(b.jsxs)("div",{className:"pop-up__container",children:[Object(b.jsx)("img",{src:a?F:q,alt:a?"\u0423\u0441\u043f\u0435\u0448\u043d\u043e":"\u041e\u0448\u0438\u0431\u043a\u0430",style:{width:"50px",height:"50px",margin:"0 auto 15px"}}),Object(b.jsx)("h2",{className:"pop-up__title",style:{margin:"0",textAlign:"center"},children:t})]})})},V=(n(49),function(e){var t=e.isOpen;return Object(b.jsx)("div",{className:"pop-up ".concat(t?"pop-up_opened":""),children:Object(b.jsxs)("div",{className:"pop-up__container",children:[Object(b.jsx)("div",{className:"loadingio-spinner-spin-0nakerftw6lh LoadingMessage-spinner",children:Object(b.jsxs)("div",{className:"ldio-j4d19yj87y",children:[Object(b.jsx)("div",{children:Object(b.jsx)("div",{})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{})})]})}),Object(b.jsx)("h2",{className:"pop-up__title LoadingMessage-title",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})]})})}),z=(n(50),function(e){var t=e.isOpen,n=e.onClose,a=e.isDone,c=e.messageText;return Object(b.jsx)("div",{className:"pop-up ".concat(t?"pop-up_opened":""),children:Object(b.jsxs)("div",{className:"pop-up__container",children:[Object(b.jsx)("img",{src:a?F:q,alt:a?"\u0423\u0441\u043f\u0435\u0448\u043d\u043e":"\u041e\u0448\u0438\u0431\u043a\u0430",className:"infoTooltip-icon"}),Object(b.jsx)("h2",{className:"pop-up__title infoTooltip-title",children:c}),Object(b.jsx)("button",{type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430",title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"pop-up__close-btn infoTooltip-button",onClick:n})]})})}),G=n(14),$=n(22),W=new(function(){function e(t){Object(G.a)(this,e),this._BASE_URL=t}return Object($.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"_headerHeandler",value:function(e){return{Authorization:"Bearer ".concat(e),"Content-Type":"application/json; charset=UTF-8"}}},{key:"getInitialCards",value:function(e){return fetch("".concat(this._BASE_URL,"cards"),{method:"GET",headers:this._headerHeandler(e)}).then(this._checkResponse)}},{key:"getUserInfo",value:function(e){return fetch("".concat(this._BASE_URL,"users/me"),{method:"GET",headers:this._headerHeandler(e)}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e,t){return fetch("".concat(this._BASE_URL,"users/me/avatar"),{method:"PATCH",headers:this._headerHeandler(e),body:JSON.stringify({avatar:t})}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e,t,n){return fetch("".concat(this._BASE_URL,"users/me"),{method:"PATCH",headers:this._headerHeandler(e),body:JSON.stringify({name:t,about:n})}).then(this._checkResponse)}},{key:"setNewCard",value:function(e,t){return fetch("".concat(this._BASE_URL,"cards"),{method:"POST",headers:this._headerHeandler(e),body:JSON.stringify(t)}).then(this._checkResponse)}},{key:"deleteCard",value:function(e,t){return fetch("".concat(this._BASE_URL,"cards/").concat(t),{method:"DELETE",headers:this._headerHeandler(e),body:JSON.stringify({_id:t})}).then(this._checkResponse)}},{key:"changeLike",value:function(e,t,n){return n?fetch("".concat(this._BASE_URL,"cards/").concat(t,"/likes"),{method:"PUT",headers:this._headerHeandler(e)}).then(this._checkResponse):fetch("".concat(this._BASE_URL,"cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headerHeandler(e)}).then(this._checkResponse)}}]),e}())("http://194.67.109.173/"),K=new function e(t){var n=this;Object(G.a)(this,e),this.register=function(e,t){return fetch("".concat(n._BASE_URL,"signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return 400===e.status?Promise.reject("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"):409===e.status?Promise.reject("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c email \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d"):e.json()}))},this.authorize=function(e,t){return fetch("".concat(n._BASE_URL,"signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return 400===e.status?Promise.reject("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"):401===e.status?Promise.reject("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u0447\u0442\u0430 \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"):e.json()}))},this.getContent=function(e){return fetch("".concat(n._BASE_URL,"users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return 400===e.status?Promise.reject("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435"):401===e.status?Promise.reject("\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d"):e.json()}))},this._BASE_URL=t}("http://194.67.109.173/");var Q=function(){var e=Object(d.useHistory)(),t=Object(a.useState)({}),n=Object(j.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(!1),r=Object(j.a)(i,2),o=r[0],l=r[1],h=Object(a.useState)(null),m=Object(j.a)(h,2),O=m[0],g=m[1],f=Object(a.useState)(!1),v=Object(j.a)(f,2),C=v[0],y=v[1],E=Object(a.useState)(!0),T=Object(j.a)(E,2),I=T[0],P=T[1],R=Object(a.useState)(!1),F=Object(j.a)(R,2),q=F[0],G=F[1],$=Object(a.useState)(!1),Q=Object(j.a)($,2),X=Q[0],Y=Q[1],Z=Object(a.useState)(!1),ee=Object(j.a)(Z,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(!1),ce=Object(j.a)(ae,2),se=ce[0],ie=ce[1],re=Object(a.useState)(!1),oe=Object(j.a)(re,2),le=oe[0],ue=oe[1],je=Object(a.useState)(!1),de=Object(j.a)(je,2),pe=de[0],be=de[1],he=Object(a.useState)(null),me=Object(j.a)(he,2),Oe=me[0],ge=me[1],fe=Object(a.useState)(!1),_e=Object(j.a)(fe,2),xe=_e[0],ve=_e[1],Ne=Object(a.useState)(""),Se=Object(j.a)(Ne,2),Ce=Se[0],we=Se[1],ke=Object(a.useState)(null),ye=Object(j.a)(ke,2),Ee=ye[0],Le=ye[1],Te=Object(a.useState)(!1),Ie=Object(j.a)(Te,2),Be=Ie[0],Ae=Ie[1],Pe=Object(a.useState)({}),Re=Object(j.a)(Pe,2),Ue=Re[0],He=Re[1],De=Object(a.useState)([]),Me=Object(j.a)(De,2),Fe=Me[0],qe=Me[1],Je=Object(a.useState)(null),Ve=Object(j.a)(Je,2),ze=Ve[0],Ge=Ve[1],$e=Object(a.useState)(""),We=Object(j.a)($e,2),Ke=We[0],Qe=We[1],Xe=Object(a.useState)(""),Ye=Object(j.a)(Xe,2),Ze=Ye[0],et=Ye[1],tt=Object(a.useState)(!1),nt=Object(j.a)(tt,2),at=nt[0],ct=nt[1],st=Object(a.useState)(""),it=Object(j.a)(st,2),rt=it[0],ot=it[1],lt=Object(a.useState)(""),ut=Object(j.a)(lt,2),jt=ut[0],dt=ut[1],pt=Object(a.useState)(!1),bt=Object(j.a)(pt,2),ht=bt[0],mt=bt[1],Ot=Object(a.useState)(!1),gt=Object(j.a)(Ot,2),ft=gt[0],_t=gt[1];Object(a.useEffect)((function(){_t(!(!Ke||!Ze||rt||jt))}),[Ke,Ze,rt,jt]),Object(a.useEffect)((function(){if(localStorage.getItem("jwt")){var t=localStorage.getItem("jwt");K.getContent(t).then((function(t){var n=t.data;g(n.email),l(!0),e.push("/")})).catch((function(e){return console.log(e)}))}}),[e]),Object(a.useEffect)((function(){if(localStorage.getItem("jwt")){var e=localStorage.getItem("jwt");W.getUserInfo(e).then((function(e){var t=e.data;return s(t)})).catch((function(e){s({name:e,about:"Something went wrong",avatar:"https://www.wpfixit.com/wp-content/uploads/2019/03/HTTP-error-when-uploading-images-in-WordPress.jpg"})}))}}),[o]),Object(a.useEffect)((function(){if(localStorage.getItem("jwt")){var e=localStorage.getItem("jwt");W.getInitialCards(e).then((function(e){var t=e.data;return qe(t.reverse())})).catch((function(e){return Ge("".concat(e," - Something went wrong"))}))}}),[o]);var xt={email:Ke,password:Ze,emailError:rt,passwordError:jt,authDirty:ht,validForm:ft,handleChangeEmail:function(e){Qe(e.target.value),"email"===e.target.name&&e.target.value.length<6?(ot("Email \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0435\u043d\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),mt(!0)):ot("")},handleChangePassword:function(e){et(e.target.value),"password"===e.target.name&&e.target.value.length<8?(dt("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0435\u043d\u0435\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),mt(!0)):dt("")},blurHandler:function(e){e.target.value||"email"!==e.target.name?e.target.value||"password"!==e.target.name||dt("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"):ot("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c")}},vt=function(){Qe(""),et("")},Nt=function(e){ie(!0),we(e);setTimeout((function(){ie(!1)}),1500)},St=function(){G(!1),Y(!1),ne(!1),be(!1),He({}),ve(!1),Ae(!0),we("")};return Object(b.jsx)(p.HashRouter,{basename:"/react-mesto-auth",children:Object(b.jsx)(A.Provider,{value:xe,children:Object(b.jsx)(x.Provider,{value:c,children:Object(b.jsx)("div",{className:"body",children:Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)(_,{component:L,userEmail:O,loggedIn:o,visibleHeaderMenu:C,signOut:function(){localStorage.removeItem("jwt"),l(!1),vt(),g(""),e.push("/")},changeHeaderMenu:function(){!C&&I?(y(!0),P(!1)):(y(!1),P(!0))},headerMenuBurger:I,loginPage:at,handleChangeLoginPage:function(){ct(!1)}}),Object(b.jsxs)(d.Switch,{children:[Object(b.jsx)(d.Route,{path:"/signin",children:Object(b.jsx)(w,{authData:xt,handleSubmitLogin:function(){ue(!0),K.authorize(Ke,Ze).then((function(t){var n=t.token;if(n)return localStorage.setItem("jwt",n),g(Ke),ue(!1),l(!0),e.push("/"),n})).catch((function(e){ge(!1),ue(!1),be(!0),we(e)}))},setLoginPage:ct})}),Object(b.jsx)(d.Route,{path:"/signup",children:Object(b.jsx)(k,{authData:xt,handleSubmitRegister:function(){K.register(Ke,Ze).then((function(t){var n=t.data;n&&(g(n.email),ge(!0),we("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"),be(!0),vt(),e.push("/signin"))})).catch((function(e){ge(!1),we(e),be(!0)}))}})}),Object(b.jsx)(B,{exact:!0,path:"/",component:N,loggedIn:o,onEditAvatar:function(){G(!0),Ae(!1)},onEditProfile:function(){Y(!0),Ae(!1)},onAddPlace:function(){ne(!0),Ae(!1)},onCardClick:function(e,t){He({isOpen:!0,name:e,link:t})},cards:Fe,cardsError:ze,onCardLike:function(e,t){var n=e.some((function(e){return e===c._id}));if(localStorage.getItem("jwt")){var a=localStorage.getItem("jwt");W.changeLike(a,t,!n).then((function(e){var n=e.data;qe((function(e){return e.map((function(e){return e._id===t?n:e}))})),Le(!0)})).catch((function(e){return Nt("Something went wrong - ".concat(e))})),Le(!1)}},onCardDelete:function(e){if(localStorage.getItem("jwt")){var t=localStorage.getItem("jwt");W.deleteCard(t,e).then((function(t){qe((function(t){return t.filter((function(t){return t._id!==e}))})),t&&(Nt("\u041f\u043e\u0441\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d"),Le(!0))})).catch((function(e){Nt("Something went wrong - ".concat(e)),Le(!1)}))}}}),Object(b.jsx)(d.Route,{children:o?Object(b.jsx)(d.Redirect,{to:"/"}):Object(b.jsx)(d.Redirect,{to:"/signin"})})]}),Object(b.jsx)(S,{}),Object(b.jsx)(H,{isOpen:q,onClose:St,onUpdateAvatar:function(e){if(ve(!0),localStorage.getItem("jwt")){var t=localStorage.getItem("jwt");W.setUserAvatar(t,e).then((function(e){var t=e.data;s(t),ve(!1),St()})).catch((function(e){Nt("Something went wrong - ".concat(e)),Le(!1),ve(!1)}))}},loading:xe,resetForms:Be}),Object(b.jsx)(U,{isOpen:X,onClose:St,onUpdateUser:function(e){var t=e.userName,n=e.about;if(ve(!0),localStorage.getItem("jwt")){var a=localStorage.getItem("jwt");W.setUserInfo(a,t,n).then((function(e){var t=e.data;s(t),ve(!1),St()})).catch((function(e){Nt("Something went wrong - ".concat(e)),Le(!1),ve(!1)}))}},loading:xe,resetForms:Be}),Object(b.jsx)(D,{isOpen:te,onClose:St,onAddPlace:function(e){if(ve(!0),localStorage.getItem("jwt")){var t=localStorage.getItem("jwt");W.setNewCard(t,e).then((function(e){var t=e.data;qe([t].concat(Object(u.a)(Fe))),ve(!1),St()})).catch((function(e){Nt("Something went wrong - ".concat(e)),Le(!1),ve(!1)}))}},loading:xe,resetForms:Be}),Object(b.jsx)(M,{card:Ue,onClose:St}),Object(b.jsx)(J,{messageIcon:Ee,title:Ce,isOpen:se}),Object(b.jsx)(V,{isOpen:le}),Object(b.jsx)(z,{isOpen:pe,onClose:St,isDone:Oe,messageText:Ce})]})})})})})};i.a.render(Object(b.jsxs)(c.a.StrictMode,{children:[Object(b.jsx)(o.a,{url:"https://img.icons8.com/emoji/48/000000/russia-emoji.png"}),Object(b.jsx)(l.a,{children:Object(b.jsx)(Q,{})})]}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.9a6a4212.chunk.js.map