(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+az/":function(e,t,o){!function(e,t){"use strict";var o=function(e){e&&Object.assign(this,e)},n=function(){function e(e,o){this.el=e,this.ngZone=o,this.onAddressChange=new t.EventEmitter}return e.prototype.ngAfterViewInit=function(){this.options||(this.options=new o),this.initialize()},e.prototype.isGoogleLibExists=function(){return!(!google||!google.maps||!google.maps.places)},e.prototype.initialize=function(){var e=this;if(!this.isGoogleLibExists())throw new Error("Google maps library can not be found");if(this.autocomplete=new google.maps.places.Autocomplete(this.el.nativeElement,this.options),!this.autocomplete)throw new Error("Autocomplete is not initialized");null!=!this.autocomplete.addListener&&(this.eventListener=this.autocomplete.addListener("place_changed",(function(){e.handleChangeEvent()}))),this.el.nativeElement.addEventListener("keydown",(function(t){t.key&&"enter"==t.key.toLowerCase()&&t.target===e.el.nativeElement&&(t.preventDefault(),t.stopPropagation())})),window&&window.navigator&&window.navigator.userAgent&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&setTimeout((function(){var e=document.getElementsByClassName("pac-container");if(e){var t=Array.from(e);if(t)for(var o=0,n=t;o<n.length;o++){var i=n[o];i&&i.addEventListener("touchend",(function(e){e.stopImmediatePropagation()}))}}}),500)},e.prototype.reset=function(){this.autocomplete.setComponentRestrictions(this.options.componentRestrictions),this.autocomplete.setTypes(this.options.types)},e.prototype.handleChangeEvent=function(){var e=this;this.ngZone.run((function(){e.place=e.autocomplete.getPlace(),e.place&&e.onAddressChange.emit(e.place)}))},e.decorators=[{type:t.Directive,args:[{selector:"[ngx-google-places-autocomplete]",exportAs:"ngx-places"}]}],e.ctorParameters=function(){return[{type:t.ElementRef},{type:t.NgZone}]},e.propDecorators={options:[{type:t.Input,args:["options"]}],onAddressChange:[{type:t.Output}]},e}(),i=function(){function e(){}return e.decorators=[{type:t.NgModule,args:[{declarations:[n],exports:[n]}]}],e.ctorParameters=function(){return[]},e}();e.GooglePlaceModule=i,e.GooglePlaceDirective=n,Object.defineProperty(e,"__esModule",{value:!0})}(t,o("CcnG"))},"7Gk6":function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var n={arrowLeft:"assets/img/icon/econews/arrow_left.svg",ellipse:"assets/img/icon/econews/ellipse.svg",largeImage:"assets/img/icon/econews/news-default-large.png",twitter:"assets/img/icon/econews/twitter.svg",facebook:"assets/img/icon/econews/facebook.svg",linkedIn:"assets/img/icon/econews/linkedin.svg"}},q5jP:function(e,t,o){"use strict";o.d(t,"a",(function(){return u}));var n=o("mrSG"),i=o("CcnG"),s=o("ZYCi"),a=o("F/XL"),r=o("82Ky"),c=o("o3x0"),p=o("VnD/"),l=o("fOhs"),u=function(){function e(e,t,o){var n=this;this.localStorageService=e,this.router=t,this.dialog=o,this.isLoggedIn=!1,this.localStorageService.userIdBehaviourSubject.subscribe((function(e){return n.isLoggedIn=null!==e&&!isNaN(e)}))}return e.prototype.canActivate=function(e,t){return this.isLoggedIn?Object(a.a)(!0):(this.openSingInWindow(),Object(a.a)(!1))},e.prototype.openSingInWindow=function(){var e=this;this.dialog.open(l.a,{hasBackdrop:!0,closeOnNavigation:!0,panelClass:"custom-dialog-container",data:{popUpName:"sign-in"}}).afterClosed().pipe(Object(p.a)(Boolean)).subscribe((function(t){return e.router.navigateByUrl(t+"/profile")}))},e.ctorParameters=function(){return[{type:r.a},{type:s.g},{type:c.c}]},e=n.__decorate([Object(i.Injectable)({providedIn:"root"})],e)}()}}]);