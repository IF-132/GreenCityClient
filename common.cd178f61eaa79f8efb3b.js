(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"7Gk6":function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var i={arrowLeft:"assets/img/icon/econews/arrow_left.svg",ellipse:"assets/img/icon/econews/ellipse.svg",largeImage:"assets/img/icon/econews/news-default-large.png",twitter:"assets/img/icon/econews/twitter.svg",facebook:"assets/img/icon/econews/facebook.svg",linkedIn:"assets/img/icon/econews/linkedin.svg"}},q5jP:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var i=t("mrSG"),o=t("CcnG"),s=t("ZYCi"),a=t("F/XL"),r=t("82Ky"),c=t("o3x0"),g=t("VnD/"),u=t("fOhs"),l=function(){function e(e,n,t){var i=this;this.localStorageService=e,this.router=n,this.dialog=t,this.isLoggedIn=!1,this.localStorageService.userIdBehaviourSubject.subscribe((function(e){return i.isLoggedIn=null!==e&&!isNaN(e)}))}return e.prototype.canActivate=function(e,n){return this.isLoggedIn?Object(a.a)(!0):(this.openSingInWindow(),Object(a.a)(!1))},e.prototype.openSingInWindow=function(){var e=this;this.dialog.open(u.a,{hasBackdrop:!0,closeOnNavigation:!0,panelClass:"custom-dialog-container",data:{popUpName:"sign-in"}}).afterClosed().pipe(Object(g.a)(Boolean)).subscribe((function(n){return e.router.navigateByUrl(n+"/profile")}))},e.ctorParameters=function(){return[{type:r.a},{type:s.g},{type:c.c}]},e=i.__decorate([Object(o.Injectable)({providedIn:"root"})],e)}()}}]);