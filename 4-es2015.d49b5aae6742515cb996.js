(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7Gk6":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i={arrowLeft:"assets/img/icon/econews/arrow_left.svg",ellipse:"assets/img/icon/econews/ellipse.svg",largeImage:"assets/img/icon/econews/news-default-large.png",twitter:"assets/img/icon/econews/twitter.svg",facebook:"assets/img/icon/econews/facebook.svg",linkedIn:"assets/img/icon/econews/linkedin.svg"}},GGLt:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var i=n("2Vo4"),r=n("XNiG"),a=n("HDdC"),s=n("z6cu"),o=n("vkgz"),c=n("fXoL"),l=n("tk/3"),d=n("Aljx"),p=n("82Ky");let g=(()=>{class t{constructor(t,e,n){this.http=t,this.shareFormService=e,this.localStorageService=n,this.orderSubject=new i.a({}),this.url="https://greencity-ubs.azurewebsites.net/ubs",this.locationSubject=new r.a,this.locationSub=new r.a,this.currentAddress=new r.a}getOrders(){const t=this.localStorageService.getUbsOrderData();return t?new a.a(e=>e.next(t)).pipe(Object(o.a)(t=>this.shareFormService.orderDetails=t)):this.http.get(this.url+"/order-details").pipe(Object(o.a)(t=>this.shareFormService.orderDetails=t))}setLocationData(t){this.locationSub.next(t)}setCurrentAddress(t){this.currentAddress.next(t)}getPersonalData(){const t=this.localStorageService.getUbsPersonalData();return t?new a.a(e=>e.next(t)).pipe(Object(o.a)(t=>this.shareFormService.personalData=t)):this.http.get(this.url+"/personal-data").pipe(Object(o.a)(t=>this.shareFormService.personalData=t))}processOrder(t){return this.http.post(this.url+"/processOrder",t,{responseType:"text"})}processCertificate(t){return this.http.get(`${this.url}/certificate/${t}`)}addAdress(t){return this.http.post(this.url+"/save-order-address",t)}deleteAddress(t){return this.http.post(`${this.url}/${t.id}/delete-order-address`,t.id)}findAllAddresses(){return this.http.get(this.url+"/findAll-order-address")}setOrder(t){this.orderSubject.next(t)}changeShouldBePaid(){const t=this.orderSubject.getValue();t.shouldBePaid=!1,this.setOrder(t)}getOrderUrl(){return this.processOrder(this.orderSubject.getValue())}getUbsOrderStatus(){const t=this.localStorageService.getUbsOrderId();return t?this.getLiqPayStatus(t):Object(s.a)(new Error("There is no OrderId!"))}getLiqPayStatus(t){return this.http.get(`${this.url}/getLiqPayStatus/${t}`)}getLocations(){return this.http.get(this.url+"/order/get-locations")}addLocation(t){return this.http.post(this.url+"/order/get-locations",t)}completedLocation(t){this.locationSubject.next(t)}processLiqPayOrder(t){return this.http.post(this.url+"/processLiqPayOrder",t,{responseType:"text"})}getLiqPayForm(){return this.processLiqPayOrder(this.orderSubject.getValue())}getOrderFromNotification(t){const e="ua"===localStorage.getItem("language")?1:2;return this.http.get(`${this.url}/client/get-data-for-order-surcharge/${t}/${e}`)}cancelUBSwithoutSaving(){this.shareFormService.isDataSaved=!0,this.localStorageService.removeUbsOrderId(),this.shareFormService.saveDataOnLocalStorage()}}return t.\u0275fac=function(e){return new(e||t)(c["\u0275\u0275inject"](l.b),c["\u0275\u0275inject"](d.a),c["\u0275\u0275inject"](p.a))},t.\u0275prov=c["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},OX3A:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var i=n("IzEk"),r=n("fXoL"),a=n("tyNb"),s=n("BhRD"),o=n("iCRQ"),c=n("dPY1"),l=n("ofXK"),d=n("sYmb");function p(t,e){1&t&&r["\u0275\u0275element"](0,"img",17),2&t&&r["\u0275\u0275property"]("src",e.$implicit,r["\u0275\u0275sanitizeUrl"])}let g=(()=>{class t{constructor(t,e,n,i,r){this.router=t,this.route=e,this.snackBar=n,this.habitAssignService=i,this.profileService=r,this.requesting=!1,this.whiteStar="assets/img/icon/star-2.png",this.greenStar="assets/img/icon/star-1.png",this.stars=[this.whiteStar,this.whiteStar,this.whiteStar]}ngOnInit(){this.getStars(this.habit.complexity)}getStars(t){for(this.star=0;this.star<t;this.star++)this.stars[this.star]=this.greenStar}goHabitMore(){this.router.navigate(["addhabit",this.habit.id],{relativeTo:this.route})}addHabit(){this.requesting=!0,this.habitAssignService.assignHabit(this.habit.id).pipe(Object(i.a)(1)).subscribe(()=>{this.router.navigate(["profile",this.profileService.userId]),this.snackBar.openSnackBar("habitAdded")})}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](a.g),r["\u0275\u0275directiveInject"](a.a),r["\u0275\u0275directiveInject"](s.a),r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](c.a))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["app-habits-gallery-view"]],inputs:{habit:"habit"},decls:30,vars:12,consts:[[1,"habit-wrp"],[1,"habit__container"],[1,"habit__header"],[1,"calendar"],["src","assets/img/icon/Calendar_icon.png","alt","calendar",1,"calendar__icon"],[1,"days"],[1,"stars"],["alt","star",3,"src",4,"ngFor","ngForOf"],[1,"habit__picture"],["alt","habit picture",3,"src"],[1,"habit__info"],[1,"tags"],[1,"title"],[1,"aquired"],[1,"habit__action-wrp"],[1,"secondary-global-button",3,"click"],[1,"primary-global-button",3,"disabled","click"],["alt","star",3,"src"]],template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275element"](4,"img",4),r["\u0275\u0275elementStart"](5,"span",5),r["\u0275\u0275text"](6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"div",6),r["\u0275\u0275template"](8,p,1,1,"img",7),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](9,"div",8),r["\u0275\u0275element"](10,"img",9),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](11,"div",10),r["\u0275\u0275elementStart"](12,"div",11),r["\u0275\u0275elementStart"](13,"span"),r["\u0275\u0275text"](14),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](15,"div",12),r["\u0275\u0275elementStart"](16,"h2"),r["\u0275\u0275text"](17),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](18,"div",13),r["\u0275\u0275elementStart"](19,"p"),r["\u0275\u0275text"](20,"Aquired by 134 users"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](21,"div",14),r["\u0275\u0275elementStart"](22,"div"),r["\u0275\u0275elementStart"](23,"button",15),r["\u0275\u0275listener"]("click",(function(){return e.goHabitMore()})),r["\u0275\u0275text"](24),r["\u0275\u0275pipe"](25,"translate"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](26,"div"),r["\u0275\u0275elementStart"](27,"button",16),r["\u0275\u0275listener"]("click",(function(){return e.addHabit()})),r["\u0275\u0275text"](28),r["\u0275\u0275pipe"](29,"translate"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&t&&(r["\u0275\u0275advance"](6),r["\u0275\u0275textInterpolate1"]("",e.habit.defaultDuration," days"),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngForOf",e.stars),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("src",e.habit.image,r["\u0275\u0275sanitizeUrl"]),r["\u0275\u0275advance"](4),r["\u0275\u0275textInterpolate"](e.habit.habitTranslation.habitItem),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](e.habit.habitTranslation.name),r["\u0275\u0275advance"](7),r["\u0275\u0275textInterpolate1"](" ",r["\u0275\u0275pipeBind1"](25,8,"user.habit.all-habits.btn-more")," "),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("disabled",e.habit.isAssigned),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",r["\u0275\u0275pipeBind1"](29,10,"user.habit.all-habits.btn-add")," "))},directives:[l.t],pipes:[d.d],styles:[".action-wrp[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.secondary-global-button[_ngcontent-%COMP%]{background:transparent}.habit-wrp[_ngcontent-%COMP%]{width:100%;background:var(--secondary-light-grey);border-radius:8px;padding:30px;height:640px}.habit-wrp[_ngcontent-%COMP%]   .habit__container[_ngcontent-%COMP%]{display:grid;grid-template-rows:20px 40% 37.5% 111px;height:100%}.habit__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.habit__picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.habit__picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding-top:25px;height:100%;max-width:100%;width:auto}.habit__action-wrp[_ngcontent-%COMP%]{display:grid;grid-template-rows:repeat(2,48px);row-gap:15px}.habit__action-wrp[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;font-weight:600;height:48px;word-break:break-word}.calendar[_ngcontent-%COMP%]{text-transform:uppercase;font-size:14px;color:var(--primary-green)}.calendar[_ngcontent-%COMP%]   .calendar__icon[_ngcontent-%COMP%]{margin-right:15px}.habit__info[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:30px 0}.habit__info[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]{font-family:var(--primary-font);font-size:14px;line-height:16px;color:var(--primary-green);text-transform:uppercase}.habit__info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin:10px 0 8px}.habit__info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600;font-size:24px;line-height:30px;color:var(--primary-dark-grey);display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.habit__info[_ngcontent-%COMP%]   .aquired[_ngcontent-%COMP%], .habit__info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:var(--secondary-font);font-style:normal}.habit__info[_ngcontent-%COMP%]   .aquired[_ngcontent-%COMP%]{font-weight:500;font-size:14px;line-height:20px;color:var(--tertiary-light-grey)}"]}),t})()},VKqL:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var i=n("jOOL"),r=n("IzEk"),a=n("fXoL"),s=n("tyNb"),o=n("0IaG"),c=n("GGLt"),l=n("Aljx");const d=["formEditProf"];let p=(()=>{class t{constructor(t,e,n,i){this.router=t,this.dialog=e,this.orderService=n,this.ubsOrderFormService=i,this.areChangesSaved=!1,this.initialValues={},this.previousPath="",this.popupConfig={hasBackdrop:!0,closeOnNavigation:!0,disableClose:!0,panelClass:"",data:{popupTitle:"",popupSubtitle:"",popupConfirm:"",popupCancel:""}}}getFormValues(){}canDeactivate(){return!!this.areChangesSaved||!this.checkChanges()}cancel(){this.cancelPopupJustifying(!0),localStorage.removeItem("newsTags")}checkChanges(){const t=this.getFormValues();for(const e of Object.keys(t))if(JSON.stringify(t[e])!==JSON.stringify(this.initialValues[e])&&void 0!==this.initialValues[e])return!0}cancelUBSwithoutSaving(){this.orderService.cancelUBSwithoutSaving(),this.router.navigateByUrl("/ubs")}cancelUBS(){const t=this.getFormValues();this.cancelPopupJustifying(t)}cancelPopupJustifying(t){t?this.dialog.open(i.a,this.popupConfig).afterClosed().pipe(Object(r.a)(1)).subscribe(t=>{t&&(this.orderService.changeShouldBePaid(),this.orderService.getOrderUrl().subscribe(t=>{this.ubsOrderFormService.transferOrderId(t),this.ubsOrderFormService.setOrderResponseErrorStatus(!t),this.areChangesSaved=!0,this.router.navigate(["ubs","confirm"])}))}):(this.areChangesSaved=!0,this.router.navigate([this.previousPath]))}}return t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275directiveInject"](s.g),a["\u0275\u0275directiveInject"](o.c),a["\u0275\u0275directiveInject"](c.a),a["\u0275\u0275directiveInject"](l.a))},t.\u0275cmp=a["\u0275\u0275defineComponent"]({type:t,selectors:[["app-form-base"]],viewQuery:function(t,e){var n;1&t&&a["\u0275\u0275viewQuery"](d,!0),2&t&&a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(e.formEditProf=n.first)},hostBindings:function(t,e){1&t&&a["\u0275\u0275listener"]("beforeunload",(function(){return e.canDeactivate()}),!1,a["\u0275\u0275resolveWindow"])},decls:0,vars:0,template:function(t,e){},encapsulation:2}),t})()},"aW+4":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("fXoL");let r=(()=>{class t{setWordDeclension(t){return"1"===t.slice(-1)&&"11"!==t.slice(-2)?"a":"234".includes(t.slice(-1))&&!["12","13","14"].includes(t.slice(-2))?"b":""}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},cP9i:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var i=n("tk/3"),r=n("jtHE"),a=n("HDdC"),s=n("1G5W"),o=n("IzEk"),c=n("AytR"),l=n("fXoL"),d=n("82Ky");let p=(()=>{class t{constructor(t,e){this.http=t,this.localStorageService=e,this.backEnd=c.a.backendLink,this.destroyed$=new r.a(1),this.localStorageService.languageBehaviourSubject.pipe(Object(s.a)(this.destroyed$)).subscribe(t=>this.language=t)}getAllPresentTags(){return this.http.get(`${this.backEnd}econews/tags/all?lang=${this.language}`)}getEcoNewsListByPage(t,e){return this.http.get(`${this.backEnd}econews?page=${t}&size=${e}`)}getNewsListByTags(t,e,n){return this.http.get(`${this.backEnd}econews/tags?page=${t}&size=${e}&tags=${n}`)}getNewsList(){return(new i.d).set("Content-type","application/json"),new a.a(t=>{this.http.get(this.backEnd+"econews").pipe(Object(o.a)(1)).subscribe(e=>{t.next(e)})})}getEcoNewsById(t){return this.http.get(`${this.backEnd}econews/${t}?lang=${this.language}`)}getRecommendedNews(t){return this.http.get(`${this.backEnd}econews/recommended?openedEcoNewsId=${t}`)}getIsLikedByUser(t){return this.http.get(this.backEnd+"econews/isLikedByUser",{params:{econewsId:t}})}postToggleLike(t){return this.http.post(`${this.backEnd}econews/like?id=${t}`,{})}ngOnDestroy(){this.destroyed$.next(!0),this.destroyed$.complete()}}return t.\u0275fac=function(e){return new(e||t)(l["\u0275\u0275inject"](i.b),l["\u0275\u0275inject"](d.a))},t.\u0275prov=l["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},iatx:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("fXoL"),r=n("sYmb");let a=(()=>{class t{constructor(){this.imagePath="assets/img/noNews.svg"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i["\u0275\u0275defineComponent"]({type:t,selectors:[["app-no-data"]],inputs:{imagePath:"imagePath",title:"title",text:"text"},decls:12,vars:7,consts:[[1,"container"],[1,"picture"],["alt","No data available",3,"src"],[1,"description"],[1,"description__title"],[1,"description__advise"]],template:function(t,e){1&t&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275element"](2,"img",2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"div",3),i["\u0275\u0275elementStart"](4,"div",4),i["\u0275\u0275elementStart"](5,"h2"),i["\u0275\u0275text"](6),i["\u0275\u0275pipe"](7,"translate"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](8,"div",5),i["\u0275\u0275elementStart"](9,"p"),i["\u0275\u0275text"](10),i["\u0275\u0275pipe"](11,"translate"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&t&&(i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("src",e.imagePath,i["\u0275\u0275sanitizeUrl"]),i["\u0275\u0275advance"](4),i["\u0275\u0275textInterpolate1"](" ",i["\u0275\u0275pipeBind1"](7,3,e.title)," "),i["\u0275\u0275advance"](4),i["\u0275\u0275textInterpolate1"](" ",i["\u0275\u0275pipeBind1"](11,5,e.text)," "))},pipes:[r.d],styles:[".container[_ngcontent-%COMP%]{max-width:625px;margin:0 auto;text-align:center}.container[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}.container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .description__title[_ngcontent-%COMP%]{font-family:var(--secondary-font)}.container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .description__title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px;font-weight:600;line-height:48px}.container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .description__advise[_ngcontent-%COMP%]{font-family:var(--primary-font)}.container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .description__advise[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;line-height:32px;letter-spacing:.5px}"]}),t})()},xEgn:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("fXoL"),r=n("ofXK"),a=n("sYmb");const s=function(t){return{"global-tag-clicked":t}},o=function(t){return{"global-tag-close-icon":t}};function c(t,e){if(1&t){const t=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"li"),i["\u0275\u0275elementStart"](1,"a",4),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](t);const n=e.$implicit;return i["\u0275\u0275nextContext"]().toggleFilter(n.name)})),i["\u0275\u0275text"](2),i["\u0275\u0275pipe"](3,"translate"),i["\u0275\u0275element"](4,"div",5),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&t){const t=e.$implicit;i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngClass",i["\u0275\u0275pureFunction1"](5,s,t.isActive)),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",i["\u0275\u0275pipeBind1"](3,3,t.name)," "),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngClass",i["\u0275\u0275pureFunction1"](7,o,t.isActive))}}let l=(()=>{class t{constructor(){this.filters=[],this.tagsListData=[],this.tagsList=new i.EventEmitter}ngOnInit(){this.emitActiveFilters()}ngOnChanges(t){var e;(null===(e=t.tagsListData)||void 0===e?void 0:e.currentValue)&&this.setTags(t.tagsListData.currentValue)}emitTrueFilterValues(){return this.filters.filter(t=>t.isActive).map(t=>t.name)}emitActiveFilters(){this.tagsList.emit(this.emitTrueFilterValues())}toggleFilter(t){this.filters.forEach(e=>e.isActive=e.name===t?!e.isActive:e.isActive),this.emitActiveFilters(),this.setSessionStorageFilters()}setTags(t){const e=this.getSessionStorageFilters();this.filters=t.map(t=>({name:t,isActive:e.includes(t)})),this.emitActiveFilters()}setSessionStorageFilters(){sessionStorage.setItem(this.storageKey,JSON.stringify(this.emitTrueFilterValues()))}getSessionStorageFilters(){const t=sessionStorage.getItem(this.storageKey);return null!==t?JSON.parse(t):[]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i["\u0275\u0275defineComponent"]({type:t,selectors:[["app-tag-filter"]],inputs:{storageKey:"storageKey",tagsListData:"tagsListData",header:"header"},outputs:{tagsList:"tagsList"},features:[i["\u0275\u0275NgOnChangesFeature"]],decls:6,vars:4,consts:[[1,"wrapper"],["tabindex","0"],["aria-label","filter by items",1,"ul-eco-buttons"],[4,"ngFor","ngForOf"],["tabindex","0",1,"custom-chip","global-tag",3,"ngClass","click"],[3,"ngClass"]],template:function(t,e){1&t&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"span",1),i["\u0275\u0275text"](2),i["\u0275\u0275pipe"](3,"translate"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"ul",2),i["\u0275\u0275template"](5,c,5,9,"li",3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&t&&(i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind1"](3,2,e.header)),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngForOf",e.filters))},directives:[r.t,r.r],pipes:[a.d],styles:[".wrapper[_ngcontent-%COMP%]{display:grid;grid-template-rows:repeat(2,auto);row-gap:15px;align-items:center}.wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;margin-top:-10px;font-family:var(--primary-font);font-style:normal;font-weight:700;font-size:18px;line-height:20px;color:var(--secondary-dark-grey);height:24px}.ul-eco-buttons[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;overflow:auto;white-space:nowrap;min-height:42px}.ul-eco-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;font-size:14px;line-height:16px}@media (min-width:576px){.wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:-webkit-max-content auto;grid-template-columns:max-content auto;row-gap:0;-moz-column-gap:24px;column-gap:24px}.wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:20px}}"]}),t})()}}]);