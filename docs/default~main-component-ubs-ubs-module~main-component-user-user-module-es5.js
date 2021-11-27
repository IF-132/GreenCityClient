function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~main-component-ubs-ubs-module~main-component-user-user-module"], {
  /***/
  "./node_modules/ngx-google-places-autocomplete/__ivy_ngcc__/bundles/ngx-google-places-autocomplete.umd.js":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/ngx-google-places-autocomplete/__ivy_ngcc__/bundles/ngx-google-places-autocomplete.umd.js ***!
    \****************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNgxGooglePlacesAutocomplete__ivy_ngcc__BundlesNgxGooglePlacesAutocompleteUmdJs(module, exports, __webpack_require__) {
    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), exports, __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js")) : undefined;
    })(this, function (ɵngcc0, exports, _angular_core) {
      'use strict';

      var Options = function () {
        /**
         * @param {?=} opt
         */
        function Options(opt) {
          if (!opt) return;
          Object.assign(this, opt);
        }

        return Options;
      }();

      var GooglePlaceDirective = function () {
        /**
         * @param {?} el
         * @param {?} ngZone
         */
        function GooglePlaceDirective(el, ngZone) {
          this.el = el;
          this.ngZone = ngZone;
          this.onAddressChange = new _angular_core.EventEmitter();
        }
        /**
         * @return {?}
         */


        GooglePlaceDirective.prototype.ngAfterViewInit = function () {
          if (!this.options) this.options = new Options();
          this.initialize();
        };
        /**
         * @return {?}
         */


        GooglePlaceDirective.prototype.isGoogleLibExists = function () {
          return !(!google || !google.maps || !google.maps.places);
        };
        /**
         * @return {?}
         */


        GooglePlaceDirective.prototype.initialize = function () {
          var _this = this;

          if (!this.isGoogleLibExists()) throw new Error("Google maps library can not be found");
          this.autocomplete = new google.maps.places.Autocomplete(this.el.nativeElement, this.options);
          if (!this.autocomplete) throw new Error("Autocomplete is not initialized");

          if (!this.autocomplete.addListener != null) {
            this.eventListener = this.autocomplete.addListener('place_changed', function () {
              _this.handleChangeEvent();
            });
          }

          this.el.nativeElement.addEventListener('keydown', function (event) {
            if (!event.key) {
              return;
            }

            var
            /** @type {?} */
            key = event.key.toLowerCase();

            if (key == 'enter' && event.target === _this.el.nativeElement) {
              event.preventDefault();
              event.stopPropagation();
            }
          }); // according to https://gist.github.com/schoenobates/ef578a02ac8ab6726487

          if (window && window.navigator && window.navigator.userAgent && navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
            setTimeout(function () {
              var
              /** @type {?} */
              containers = document.getElementsByClassName('pac-container');

              if (containers) {
                var
                /** @type {?} */
                arr = Array.from(containers);

                if (arr) {
                  for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                    var container = arr_1[_i];
                    if (!container) continue;
                    container.addEventListener('touchend', function (e) {
                      e.stopImmediatePropagation();
                    });
                  }
                }
              }
            }, 500);
          }
        };
        /**
         * @return {?}
         */


        GooglePlaceDirective.prototype.reset = function () {
          this.autocomplete.setComponentRestrictions(this.options.componentRestrictions);
          this.autocomplete.setTypes(this.options.types);
        };
        /**
         * @return {?}
         */


        GooglePlaceDirective.prototype.handleChangeEvent = function () {
          var _this = this;

          this.ngZone.run(function () {
            _this.place = _this.autocomplete.getPlace();

            if (_this.place) {
              _this.onAddressChange.emit(_this.place);
            }
          });
        };
        /**
         * @nocollapse
         */


        GooglePlaceDirective.ctorParameters = function () {
          return [{
            type: _angular_core.ElementRef
          }, {
            type: _angular_core.NgZone
          }];
        };

        GooglePlaceDirective.propDecorators = {
          'options': [{
            type: _angular_core.Input,
            args: ['options']
          }],
          'onAddressChange': [{
            type: _angular_core.Output
          }]
        };

        GooglePlaceDirective.ɵfac = function GooglePlaceDirective_Factory(t) {
          return new (t || GooglePlaceDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone));
        };

        GooglePlaceDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({
          type: GooglePlaceDirective,
          selectors: [["", "ngx-google-places-autocomplete", ""]],
          inputs: {
            options: "options"
          },
          outputs: {
            onAddressChange: "onAddressChange"
          },
          exportAs: ["ngx-places"]
        });
        /*@__PURE__*/

        (function () {
          ɵngcc0.ɵsetClassMetadata(GooglePlaceDirective, [{
            type: _angular_core.Directive,
            args: [{
              selector: '[ngx-google-places-autocomplete]',
              exportAs: 'ngx-places'
            }]
          }], function () {
            return [{
              type: ɵngcc0.ElementRef
            }, {
              type: ɵngcc0.NgZone
            }];
          }, {
            onAddressChange: [{
              type: _angular_core.Output
            }],
            options: [{
              type: _angular_core.Input,
              args: ['options']
            }]
          });
        })();

        return GooglePlaceDirective;
      }();

      var GooglePlaceModule = function () {
        function GooglePlaceModule() {}
        /**
         * @nocollapse
         */


        GooglePlaceModule.ctorParameters = function () {
          return [];
        };

        GooglePlaceModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({
          type: GooglePlaceModule
        });
        GooglePlaceModule.ɵinj = ɵngcc0.ɵɵdefineInjector({
          factory: function GooglePlaceModule_Factory(t) {
            return new (t || GooglePlaceModule)();
          }
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(GooglePlaceModule, {
            declarations: [GooglePlaceDirective],
            exports: [GooglePlaceDirective]
          });
        })();
        /*@__PURE__*/


        (function () {
          ɵngcc0.ɵsetClassMetadata(GooglePlaceModule, [{
            type: _angular_core.NgModule,
            args: [{
              declarations: [GooglePlaceDirective],
              exports: [GooglePlaceDirective]
            }]
          }], function () {
            return [];
          }, null);
        })();

        return GooglePlaceModule;
      }();

      exports.GooglePlaceModule = GooglePlaceModule;
      exports.GooglePlaceDirective = GooglePlaceDirective;
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
    }); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdvb2dsZS1wbGFjZXMtYXV0b2NvbXBsZXRlLnVtZC5qcyIsInNvdXJjZXMiOlsibmd4LWdvb2dsZS1wbGFjZXMtYXV0b2NvbXBsZXRlLnVtZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGlHQUF3RTtBQUN4RSxzRUFBc0Q7QUFDdEQseUJBQVU7QUFDViwwQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQU1NO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7b0JBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FNTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O2dEQUFrRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKSkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJywgJ0Bhbmd1bGFyL2NvcmUnXSwgZmFjdG9yeSkgOlxuXHQoZmFjdG9yeSgoZ2xvYmFsLm5nID0gZ2xvYmFsLm5nIHx8IHt9LCBnbG9iYWwubmdbJ25neC1nb29nbGUtcGxhY2VzLWF1dG9jb21wbGV0ZSddID0gZ2xvYmFsLm5nWyduZ3gtZ29vZ2xlLXBsYWNlcy1hdXRvY29tcGxldGUnXSB8fCB7fSksZ2xvYmFsLm5nLmNvcmUpKTtcbn0odGhpcywgKGZ1bmN0aW9uIChleHBvcnRzLF9hbmd1bGFyX2NvcmUpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgT3B0aW9ucyA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/PX0gb3B0XG4gICAgICovXG4gICAgZnVuY3Rpb24gT3B0aW9ucyhvcHQpIHtcbiAgICAgICAgaWYgKCFvcHQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0KTtcbiAgICB9XG4gICAgcmV0dXJuIE9wdGlvbnM7XG59KCkpO1xuXG52YXIgR29vZ2xlUGxhY2VEaXJlY3RpdmUgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZWxcbiAgICAgKiBAcGFyYW0gez99IG5nWm9uZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEdvb2dsZVBsYWNlRGlyZWN0aXZlKGVsLCBuZ1pvbmUpIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLm5nWm9uZSA9IG5nWm9uZTtcbiAgICAgICAgdGhpcy5vbkFkZHJlc3NDaGFuZ2UgPSBuZXcgX2FuZ3VsYXJfY29yZS5FdmVudEVtaXR0ZXIoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBHb29nbGVQbGFjZURpcmVjdGl2ZS5wcm90b3R5cGUubmdBZnRlclZpZXdJbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucylcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG5ldyBPcHRpb25zKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBHb29nbGVQbGFjZURpcmVjdGl2ZS5wcm90b3R5cGUuaXNHb29nbGVMaWJFeGlzdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhKCFnb29nbGUgfHwgIWdvb2dsZS5tYXBzIHx8ICFnb29nbGUubWFwcy5wbGFjZXMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBHb29nbGVQbGFjZURpcmVjdGl2ZS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLmlzR29vZ2xlTGliRXhpc3RzKCkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHb29nbGUgbWFwcyBsaWJyYXJ5IGNhbiBub3QgYmUgZm91bmRcIik7XG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICBpZiAoIXRoaXMuYXV0b2NvbXBsZXRlKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXV0b2NvbXBsZXRlIGlzIG5vdCBpbml0aWFsaXplZFwiKTtcbiAgICAgICAgaWYgKCF0aGlzLmF1dG9jb21wbGV0ZS5hZGRMaXN0ZW5lciAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXIgPSB0aGlzLmF1dG9jb21wbGV0ZS5hZGRMaXN0ZW5lcigncGxhY2VfY2hhbmdlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVDaGFuZ2VFdmVudCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghZXZlbnQua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8ga2V5ID0gZXZlbnQua2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAoa2V5ID09ICdlbnRlcicgJiYgZXZlbnQudGFyZ2V0ID09PSBfdGhpcy5lbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGFjY29yZGluZyB0byBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9zY2hvZW5vYmF0ZXMvZWY1NzhhMDJhYzhhYjY3MjY0ODdcbiAgICAgICAgaWYgKHdpbmRvdyAmJiB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGFkfGlQaG9uZXxpUG9kKS9nKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udGFpbmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhYy1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVycykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBhcnIgPSBBcnJheS5mcm9tKGNvbnRhaW5lcnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGFycl8xID0gYXJyOyBfaSA8IGFycl8xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBhcnJfMVtfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250YWluZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEdvb2dsZVBsYWNlRGlyZWN0aXZlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGUuc2V0Q29tcG9uZW50UmVzdHJpY3Rpb25zKHRoaXMub3B0aW9ucy5jb21wb25lbnRSZXN0cmljdGlvbnMpO1xuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZS5zZXRUeXBlcyh0aGlzLm9wdGlvbnMudHlwZXMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBHb29nbGVQbGFjZURpcmVjdGl2ZS5wcm90b3R5cGUuaGFuZGxlQ2hhbmdlRXZlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5wbGFjZSA9IF90aGlzLmF1dG9jb21wbGV0ZS5nZXRQbGFjZSgpO1xuICAgICAgICAgICAgaWYgKF90aGlzLnBsYWNlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub25BZGRyZXNzQ2hhbmdlLmVtaXQoX3RoaXMucGxhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEdvb2dsZVBsYWNlRGlyZWN0aXZlLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnW25neC1nb29nbGUtcGxhY2VzLWF1dG9jb21wbGV0ZV0nLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRBczogJ25neC1wbGFjZXMnXG4gICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgXTtcbiAgICAvKipcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIEdvb2dsZVBsYWNlRGlyZWN0aXZlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRWxlbWVudFJlZiwgfSxcbiAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk5nWm9uZSwgfSxcbiAgICBdOyB9O1xuICAgIEdvb2dsZVBsYWNlRGlyZWN0aXZlLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAnb3B0aW9ucyc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnb3B0aW9ucycsXSB9LF0sXG4gICAgICAgICdvbkFkZHJlc3NDaGFuZ2UnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk91dHB1dCB9LF0sXG4gICAgfTtcbiAgICByZXR1cm4gR29vZ2xlUGxhY2VEaXJlY3RpdmU7XG59KCkpO1xuXG52YXIgR29vZ2xlUGxhY2VNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdvb2dsZVBsYWNlTW9kdWxlKCkge1xuICAgIH1cbiAgICBHb29nbGVQbGFjZU1vZHVsZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuTmdNb2R1bGUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogW0dvb2dsZVBsYWNlRGlyZWN0aXZlXSxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogW0dvb2dsZVBsYWNlRGlyZWN0aXZlXVxuICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgIF07XG4gICAgLyoqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKi9cbiAgICBHb29nbGVQbGFjZU1vZHVsZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgIHJldHVybiBHb29nbGVQbGFjZU1vZHVsZTtcbn0oKSk7XG5cbmV4cG9ydHMuR29vZ2xlUGxhY2VNb2R1bGUgPSBHb29nbGVQbGFjZU1vZHVsZTtcbmV4cG9ydHMuR29vZ2xlUGxhY2VEaXJlY3RpdmUgPSBHb29nbGVQbGFjZURpcmVjdGl2ZTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpKTtcbiJdfQ==

    /***/

  },

  /***/
  "./src/app/main/service/route-guards/auth-page-guard.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/main/service/route-guards/auth-page-guard.service.ts ***!
    \**********************************************************************/

  /*! exports provided: AuthPageGuardService */

  /***/
  function srcAppMainServiceRouteGuardsAuthPageGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthPageGuardService", function () {
      return AuthPageGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _component_auth_components_auth_modal_auth_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../component/auth/components/auth-modal/auth-modal.component */
    "./src/app/main/component/auth/components/auth-modal/auth-modal.component.ts");
    /* harmony import */


    var _localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../localstorage/local-storage.service */
    "./src/app/main/service/localstorage/local-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var AuthPageGuardService = /*#__PURE__*/function () {
      function AuthPageGuardService(localStorageService, router, dialog) {
        var _this2 = this;

        _classCallCheck(this, AuthPageGuardService);

        this.localStorageService = localStorageService;
        this.router = router;
        this.dialog = dialog;
        this.isLoggedIn = false;
        this.localStorageService.userIdBehaviourSubject.subscribe(function (userId) {
          return _this2.isLoggedIn = userId !== null && !isNaN(userId);
        });
        this.localStorageService.ubsRegBehaviourSubject.subscribe(function (value) {
          return _this2.ubsRegValue = value;
        });
      }

      _createClass(AuthPageGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (!this.isLoggedIn) {
            this.openSingInWindow('sign-in');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
        }
      }, {
        key: "openSingInWindow",
        value: function openSingInWindow(popupName) {
          var _this3 = this;

          this.dialog.open(_component_auth_components_auth_modal_auth_modal_component__WEBPACK_IMPORTED_MODULE_3__["AuthModalComponent"], {
            hasBackdrop: true,
            closeOnNavigation: true,
            panelClass: 'custom-dialog-container',
            data: {
              popUpName: popupName
            }
          }).afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(Boolean)).subscribe(function (userId) {
            if (!_this3.ubsRegValue) {
              _this3.router.navigateByUrl("".concat(userId, "/profile"));
            } else {
              _this3.router.navigateByUrl('/ubs/order');
            }
          });
        }
      }]);

      return AuthPageGuardService;
    }();

    AuthPageGuardService.ɵfac = function AuthPageGuardService_Factory(t) {
      return new (t || AuthPageGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]));
    };

    AuthPageGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthPageGuardService,
      factory: AuthPageGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthPageGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~main-component-ubs-ubs-module~main-component-user-user-module-es5.js.map