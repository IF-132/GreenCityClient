function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-component-eco-news-eco-news-module"], {
  /***/
  "./node_modules/@stomp/stompjs/esm6/augment-websocket.js":
  /*!***************************************************************!*\
    !*** ./node_modules/@stomp/stompjs/esm6/augment-websocket.js ***!
    \***************************************************************/

  /*! exports provided: augmentWebsocket */

  /***/
  function node_modulesStompStompjsEsm6AugmentWebsocketJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "augmentWebsocket", function () {
      return augmentWebsocket;
    });
    /**
     * @internal
     */


    function augmentWebsocket(webSocket, debug) {
      webSocket.terminate = function () {
        var noOp = function noOp() {}; // set all callbacks to no op


        this.onerror = noOp;
        this.onmessage = noOp;
        this.onopen = noOp;
        var ts = new Date();
        var origOnClose = this.onclose; // Track delay in actual closure of the socket

        this.onclose = function (closeEvent) {
          var delay = new Date().getTime() - ts.getTime();
          debug("Discarded socket closed after ".concat(delay, "ms, with code/reason: ").concat(closeEvent.code, "/").concat(closeEvent.reason));
        };

        this.close();
        origOnClose.call(this, {
          code: 4001,
          reason: 'Heartbeat failure, discarding the socket',
          wasClean: false
        });
      };
    } //# sourceMappingURL=augment-websocket.js.map

    /***/

  },

  /***/
  "./node_modules/@stomp/stompjs/esm6/byte.js":
  /*!**************************************************!*\
    !*** ./node_modules/@stomp/stompjs/esm6/byte.js ***!
    \**************************************************/

  /*! exports provided: BYTE */

  /***/
  function node_modulesStompStompjsEsm6ByteJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BYTE", function () {
      return BYTE;
    });
    /**
     * Some byte values, used as per STOMP specifications.
     *
     * Part of `@stomp/stompjs`.
     *
     * @internal
     */


    var BYTE = {
      // LINEFEED byte (octet 10)
      LF: '\x0A',
      // NULL byte (octet 0)
      NULL: '\x00'
    }; //# sourceMappingURL=byte.js.map

    /***/
  },

  /***/
  "./node_modules/@stomp/stompjs/esm6/client.js":
  /*!****************************************************!*\
    !*** ./node_modules/@stomp/stompjs/esm6/client.js ***!
    \****************************************************/

  /*! exports provided: Client */

  /***/
  function node_modulesStompStompjsEsm6ClientJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Client", function () {
      return Client;
    });
    /* harmony import */


    var _stomp_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./stomp-handler */
    "./node_modules/@stomp/stompjs/esm6/stomp-handler.js");
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./types */
    "./node_modules/@stomp/stompjs/esm6/types.js");
    /* harmony import */


    var _versions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./versions */
    "./node_modules/@stomp/stompjs/esm6/versions.js");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    /**
     * STOMP Client Class.
     *
     * Part of `@stomp/stompjs`.
     */


    var Client = /*#__PURE__*/function () {
      /**
       * Create an instance.
       */
      function Client() {
        var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Client);

        /**
         * STOMP versions to attempt during STOMP handshake. By default versions `1.0`, `1.1`, and `1.2` are attempted.
         *
         * Example:
         * ```javascript
         *        // Try only versions 1.0 and 1.1
         *        client.stompVersions = new Versions(['1.0', '1.1'])
         * ```
         */
        this.stompVersions = _versions__WEBPACK_IMPORTED_MODULE_2__["Versions"]["default"];
        /**
         * Will retry if Stomp connection is not established in specified milliseconds.
         * Default 0, which implies wait for ever.
         */

        this.connectionTimeout = 0;
        /**
         *  automatically reconnect with delay in milliseconds, set to 0 to disable.
         */

        this.reconnectDelay = 5000;
        /**
         * Incoming heartbeat interval in milliseconds. Set to 0 to disable.
         */

        this.heartbeatIncoming = 10000;
        /**
         * Outgoing heartbeat interval in milliseconds. Set to 0 to disable.
         */

        this.heartbeatOutgoing = 10000;
        /**
         * This switches on a non standard behavior while sending WebSocket packets.
         * It splits larger (text) packets into chunks of [maxWebSocketChunkSize]{@link Client#maxWebSocketChunkSize}.
         * Only Java Spring brokers seems to use this mode.
         *
         * WebSockets, by itself, split large (text) packets,
         * so it is not needed with a truly compliant STOMP/WebSocket broker.
         * Actually setting it for such broker will cause large messages to fail.
         *
         * `false` by default.
         *
         * Binary frames are never split.
         */

        this.splitLargeFrames = false;
        /**
         * See [splitLargeFrames]{@link Client#splitLargeFrames}.
         * This has no effect if [splitLargeFrames]{@link Client#splitLargeFrames} is `false`.
         */

        this.maxWebSocketChunkSize = 8 * 1024;
        /**
         * Usually the
         * [type of WebSocket frame]{@link https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send#Parameters}
         * is automatically decided by type of the payload.
         * Default is `false`, which should work with all compliant brokers.
         *
         * Set this flag to force binary frames.
         */

        this.forceBinaryWSFrames = false;
        /**
         * A bug in ReactNative chops a string on occurrence of a NULL.
         * See issue [https://github.com/stomp-js/stompjs/issues/89]{@link https://github.com/stomp-js/stompjs/issues/89}.
         * This makes incoming WebSocket messages invalid STOMP packets.
         * Setting this flag attempts to reverse the damage by appending a NULL.
         * If the broker splits a large message into multiple WebSocket messages,
         * this flag will cause data loss and abnormal termination of connection.
         *
         * This is not an ideal solution, but a stop gap until the underlying issue is fixed at ReactNative library.
         */

        this.appendMissingNULLonIncoming = false;
        /**
         * Activation state.
         *
         * It will usually be ACTIVE or INACTIVE.
         * When deactivating it may go from ACTIVE to INACTIVE without entering DEACTIVATING.
         */

        this.state = _types__WEBPACK_IMPORTED_MODULE_1__["ActivationState"].INACTIVE; // Dummy callbacks

        var noOp = function noOp() {};

        this.debug = noOp;
        this.beforeConnect = noOp;
        this.onConnect = noOp;
        this.onDisconnect = noOp;
        this.onUnhandledMessage = noOp;
        this.onUnhandledReceipt = noOp;
        this.onUnhandledFrame = noOp;
        this.onStompError = noOp;
        this.onWebSocketClose = noOp;
        this.onWebSocketError = noOp;
        this.logRawCommunication = false;
        this.onChangeState = noOp; // These parameters would typically get proper values before connect is called

        this.connectHeaders = {};
        this._disconnectHeaders = {}; // Apply configuration

        this.configure(conf);
      }
      /**
       * Underlying WebSocket instance, READONLY.
       */


      _createClass(Client, [{
        key: "webSocket",
        get: function get() {
          return this._stompHandler ? this._stompHandler._webSocket : undefined;
        }
        /**
         * Disconnection headers.
         */

      }, {
        key: "disconnectHeaders",
        get: function get() {
          return this._disconnectHeaders;
        },
        set: function set(value) {
          this._disconnectHeaders = value;

          if (this._stompHandler) {
            this._stompHandler.disconnectHeaders = this._disconnectHeaders;
          }
        }
        /**
         * `true` if there is a active connection with STOMP Broker
         */

      }, {
        key: "connected",
        get: function get() {
          return !!this._stompHandler && this._stompHandler.connected;
        }
        /**
         * version of STOMP protocol negotiated with the server, READONLY
         */

      }, {
        key: "connectedVersion",
        get: function get() {
          return this._stompHandler ? this._stompHandler.connectedVersion : undefined;
        }
        /**
         * if the client is active (connected or going to reconnect)
         */

      }, {
        key: "active",
        get: function get() {
          return this.state === _types__WEBPACK_IMPORTED_MODULE_1__["ActivationState"].ACTIVE;
        }
      }, {
        key: "_changeState",
        value: function _changeState(state) {
          this.state = state;
          this.onChangeState(state);
        }
        /**
         * Update configuration.
         */

      }, {
        key: "configure",
        value: function configure(conf) {
          // bulk assign all properties to this
          Object.assign(this, conf);
        }
        /**
         * Initiate the connection with the broker.
         * If the connection breaks, as per [Client#reconnectDelay]{@link Client#reconnectDelay},
         * it will keep trying to reconnect.
         *
         * Call [Client#deactivate]{@link Client#deactivate} to disconnect and stop reconnection attempts.
         */

      }, {
        key: "activate",
        value: function activate() {
          if (this.state === _types__WEBPACK_IMPORTED_MODULE_1__["ActivationState"].DEACTIVATING) {
            this.debug('Still DEACTIVATING, please await call to deactivate before trying to re-activate');
            throw new Error('Still DEACTIVATING, can not activate now');
          }

          if (this.active) {
            this.debug('Already ACTIVE, ignoring request to activate');
            return;
          }

          this._changeState(_types__WEBPACK_IMPORTED_MODULE_1__["ActivationState"].ACTIVE);

          this._connect();
        }
      }, {
        key: "_connect",
        value: function _connect() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var webSocket;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!this.connected) {
                      _context.next = 3;
                      break;
                    }

                    this.debug('STOMP: already connected, nothing to do');
                    return _context.abrupt("return");

                  case 3:
                    _context.next = 5;
                    return this.beforeConnect();

                  case 5:
                    if (this.active) {
                      _context.next = 8;
                      break;
                    }

                    this.debug('Client has been marked inactive, will not attempt to connect');
                    return _context.abrupt("return");

                  case 8:
                    // setup connection watcher
                    if (this.connectionTimeout > 0) {
                      // clear first
                      if (this._connectionWatcher) {
                        clearTimeout(this._connectionWatcher);
                      }

                      this._connectionWatcher = setTimeout(function () {
                        if (_this.connected) {
                          return;
                        } // Connection not established, close the underlying socket
                        // a reconnection will be attempted


                        _this.debug("Connection not established in ".concat(_this.connectionTimeout, "ms, closing socket"));

                        _this.forceDisconnect();
                      }, this.connectionTimeout);
                    }

                    this.debug('Opening Web Socket...'); // Get the actual WebSocket (or a similar object)

                    webSocket = this._createWebSocket();
                    this._stompHandler = new _stomp_handler__WEBPACK_IMPORTED_MODULE_0__["StompHandler"](this, webSocket, {
                      debug: this.debug,
                      stompVersions: this.stompVersions,
                      connectHeaders: this.connectHeaders,
                      disconnectHeaders: this._disconnectHeaders,
                      heartbeatIncoming: this.heartbeatIncoming,
                      heartbeatOutgoing: this.heartbeatOutgoing,
                      splitLargeFrames: this.splitLargeFrames,
                      maxWebSocketChunkSize: this.maxWebSocketChunkSize,
                      forceBinaryWSFrames: this.forceBinaryWSFrames,
                      logRawCommunication: this.logRawCommunication,
                      appendMissingNULLonIncoming: this.appendMissingNULLonIncoming,
                      discardWebsocketOnCommFailure: this.discardWebsocketOnCommFailure,
                      onConnect: function onConnect(frame) {
                        // Successfully connected, stop the connection watcher
                        if (_this._connectionWatcher) {
                          clearTimeout(_this._connectionWatcher);
                          _this._connectionWatcher = undefined;
                        }

                        if (!_this.active) {
                          _this.debug('STOMP got connected while deactivate was issued, will disconnect now');

                          _this._disposeStompHandler();

                          return;
                        }

                        _this.onConnect(frame);
                      },
                      onDisconnect: function onDisconnect(frame) {
                        _this.onDisconnect(frame);
                      },
                      onStompError: function onStompError(frame) {
                        _this.onStompError(frame);
                      },
                      onWebSocketClose: function onWebSocketClose(evt) {
                        _this._stompHandler = undefined; // a new one will be created in case of a reconnect

                        if (_this.state === _types__WEBPACK_IMPORTED_MODULE_1__["ActivationState"].DEACTIVATING) {
                          // Mark deactivation complete
                          _this._resolveSocketClose();

                          _this._resolveSocketClose = undefined;

                          _this._changeState(_types__WEBPACK_IMPORTED_MODULE_1__["ActivationState"].INACTIVE);
                        }

                        _this.onWebSocketClose(evt); // The callback is called before attempting to reconnect, this would allow the client
                        // to be `deactivated` in the callback.


                        if (_this.active) {
                          _this._schedule_reconnect();
                        }
                      },
                      onWebSocketError: function onWebSocketError(evt) {
                        _this.onWebSocketError(evt);
                      },
                      onUnhandledMessage: function onUnhandledMessage(message) {
                        _this.onUnhandledMessage(message);
                      },
                      onUnhandledReceipt: function onUnhandledReceipt(frame) {
                        _this.onUnhandledReceipt(frame);
                      },
                      onUnhandledFrame: function onUnhandledFrame(frame) {
                        _this.onUnhandledFrame(frame);
                      }
                    });

                    this._stompHandler.start();

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "_createWebSocket",
        value: function _createWebSocket() {
          var webSocket;

          if (this.webSocketFactory) {
            webSocket = this.webSocketFactory();
          } else {
            webSocket = new WebSocket(this.brokerURL, this.stompVersions.protocolVersions());
          }

          webSocket.binaryType = 'arraybuffer';
          return webSocket;
        }
      }, {
        key: "_schedule_reconnect",
        value: function _schedule_reconnect() {
          var _this2 = this;

          if (this.reconnectDelay > 0) {
            this.debug("STOMP: scheduling reconnection in ".concat(this.reconnectDelay, "ms"));
            this._reconnector = setTimeout(function () {
              _this2._connect();
            }, this.reconnectDelay);
          }
        }
        /**
         * Disconnect if connected and stop auto reconnect loop.
         * Appropriate callbacks will be invoked if underlying STOMP connection was connected.
         *
         * This call is async, it will resolve immediately if there is no underlying active websocket,
         * otherwise, it will resolve after underlying websocket is properly disposed.
         *
         * To reactivate you can call [Client#activate]{@link Client#activate}.
         */

      }, {
        key: "deactivate",
        value: function deactivate() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var retPromise;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.state !== _types__WEBPACK_IMPORTED_MODULE_1__["ActivationState"].ACTIVE)) {
                      _context2.next = 3;
                      break;
                    }

                    this.debug("Already ".concat(_types__WEBPACK_IMPORTED_MODULE_1__["ActivationState"][this.state], ", ignoring call to deactivate"));
                    return _context2.abrupt("return", Promise.resolve());

                  case 3:
                    this._changeState(_types__WEBPACK_IMPORTED_MODULE_1__["ActivationState"].DEACTIVATING); // Clear if a reconnection was scheduled


                    if (this._reconnector) {
                      clearTimeout(this._reconnector);
                    }

                    if (!(this._stompHandler && this.webSocket.readyState !== _types__WEBPACK_IMPORTED_MODULE_1__["StompSocketState"].CLOSED)) {
                      _context2.next = 9;
                      break;
                    }

                    // we need to wait for underlying websocket to close
                    retPromise = new Promise(function (resolve, reject) {
                      _this3._resolveSocketClose = resolve;
                    });
                    _context2.next = 11;
                    break;

                  case 9:
                    // indicate that auto reconnect loop should terminate
                    this._changeState(_types__WEBPACK_IMPORTED_MODULE_1__["ActivationState"].INACTIVE);

                    return _context2.abrupt("return", Promise.resolve());

                  case 11:
                    this._disposeStompHandler();

                    return _context2.abrupt("return", retPromise);

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
        /**
         * Force disconnect if there is an active connection by directly closing the underlying WebSocket.
         * This is different than a normal disconnect where a DISCONNECT sequence is carried out with the broker.
         * After forcing disconnect, automatic reconnect will be attempted.
         * To stop further reconnects call [Client#deactivate]{@link Client#deactivate} as well.
         */

      }, {
        key: "forceDisconnect",
        value: function forceDisconnect() {
          if (this._stompHandler) {
            this._stompHandler.forceDisconnect();
          }
        }
      }, {
        key: "_disposeStompHandler",
        value: function _disposeStompHandler() {
          // Dispose STOMP Handler
          if (this._stompHandler) {
            this._stompHandler.dispose();

            this._stompHandler = null;
          }
        }
        /**
         * Send a message to a named destination. Refer to your STOMP broker documentation for types
         * and naming of destinations.
         *
         * STOMP protocol specifies and suggests some headers and also allows broker specific headers.
         *
         * `body` must be String.
         * You will need to covert the payload to string in case it is not string (e.g. JSON).
         *
         * To send a binary message body use binaryBody parameter. It should be a
         * [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).
         * Sometimes brokers may not support binary frames out of the box.
         * Please check your broker documentation.
         *
         * `content-length` header is automatically added to the STOMP Frame sent to the broker.
         * Set `skipContentLengthHeader` to indicate that `content-length` header should not be added.
         * For binary messages `content-length` header is always added.
         *
         * Caution: The broker will, most likely, report an error and disconnect if message body has NULL octet(s)
         * and `content-length` header is missing.
         *
         * ```javascript
         *        client.publish({destination: "/queue/test", headers: {priority: 9}, body: "Hello, STOMP"});
         *
         *        // Only destination is mandatory parameter
         *        client.publish({destination: "/queue/test", body: "Hello, STOMP"});
         *
         *        // Skip content-length header in the frame to the broker
         *        client.publish({"/queue/test", body: "Hello, STOMP", skipContentLengthHeader: true});
         *
         *        var binaryData = generateBinaryData(); // This need to be of type Uint8Array
         *        // setting content-type header is not mandatory, however a good practice
         *        client.publish({destination: '/topic/special', binaryBody: binaryData,
         *                         headers: {'content-type': 'application/octet-stream'}});
         * ```
         */

      }, {
        key: "publish",
        value: function publish(params) {
          this._stompHandler.publish(params);
        }
        /**
         * STOMP brokers may carry out operation asynchronously and allow requesting for acknowledgement.
         * To request an acknowledgement, a `receipt` header needs to be sent with the actual request.
         * The value (say receipt-id) for this header needs to be unique for each use. Typically a sequence, a UUID, a
         * random number or a combination may be used.
         *
         * A complaint broker will send a RECEIPT frame when an operation has actually been completed.
         * The operation needs to be matched based in the value of the receipt-id.
         *
         * This method allow watching for a receipt and invoke the callback
         * when corresponding receipt has been received.
         *
         * The actual {@link FrameImpl} will be passed as parameter to the callback.
         *
         * Example:
         * ```javascript
         *        // Subscribing with acknowledgement
         *        let receiptId = randomText();
         *
         *        client.watchForReceipt(receiptId, function() {
         *          // Will be called after server acknowledges
         *        });
         *
         *        client.subscribe(TEST.destination, onMessage, {receipt: receiptId});
         *
         *
         *        // Publishing with acknowledgement
         *        receiptId = randomText();
         *
         *        client.watchForReceipt(receiptId, function() {
         *          // Will be called after server acknowledges
         *        });
         *        client.publish({destination: TEST.destination, headers: {receipt: receiptId}, body: msg});
         * ```
         */

      }, {
        key: "watchForReceipt",
        value: function watchForReceipt(receiptId, callback) {
          this._stompHandler.watchForReceipt(receiptId, callback);
        }
        /**
         * Subscribe to a STOMP Broker location. The callback will be invoked for each received message with
         * the {@link IMessage} as argument.
         *
         * Note: The library will generate an unique ID if there is none provided in the headers.
         *       To use your own ID, pass it using the headers argument.
         *
         * ```javascript
         *        callback = function(message) {
         *        // called when the client receives a STOMP message from the server
         *          if (message.body) {
         *            alert("got message with body " + message.body)
         *          } else {
         *            alert("got empty message");
         *          }
         *        });
         *
         *        var subscription = client.subscribe("/queue/test", callback);
         *
         *        // Explicit subscription id
         *        var mySubId = 'my-subscription-id-001';
         *        var subscription = client.subscribe(destination, callback, { id: mySubId });
         * ```
         */

      }, {
        key: "subscribe",
        value: function subscribe(destination, callback) {
          var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this._stompHandler.subscribe(destination, callback, headers);
        }
        /**
         * It is preferable to unsubscribe from a subscription by calling
         * `unsubscribe()` directly on {@link StompSubscription} returned by `client.subscribe()`:
         *
         * ```javascript
         *        var subscription = client.subscribe(destination, onmessage);
         *        // ...
         *        subscription.unsubscribe();
         * ```
         *
         * See: http://stomp.github.com/stomp-specification-1.2.html#UNSUBSCRIBE UNSUBSCRIBE Frame
         */

      }, {
        key: "unsubscribe",
        value: function unsubscribe(id) {
          var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._stompHandler.unsubscribe(id, headers);
        }
        /**
         * Start a transaction, the returned {@link ITransaction} has methods - [commit]{@link ITransaction#commit}
         * and [abort]{@link ITransaction#abort}.
         *
         * `transactionId` is optional, if not passed the library will generate it internally.
         */

      }, {
        key: "begin",
        value: function begin(transactionId) {
          return this._stompHandler.begin(transactionId);
        }
        /**
         * Commit a transaction.
         *
         * It is preferable to commit a transaction by calling [commit]{@link ITransaction#commit} directly on
         * {@link ITransaction} returned by [client.begin]{@link Client#begin}.
         *
         * ```javascript
         *        var tx = client.begin(txId);
         *        //...
         *        tx.commit();
         * ```
         */

      }, {
        key: "commit",
        value: function commit(transactionId) {
          this._stompHandler.commit(transactionId);
        }
        /**
         * Abort a transaction.
         * It is preferable to abort a transaction by calling [abort]{@link ITransaction#abort} directly on
         * {@link ITransaction} returned by [client.begin]{@link Client#begin}.
         *
         * ```javascript
         *        var tx = client.begin(txId);
         *        //...
         *        tx.abort();
         * ```
         */

      }, {
        key: "abort",
        value: function abort(transactionId) {
          this._stompHandler.abort(transactionId);
        }
        /**
         * ACK a message. It is preferable to acknowledge a message by calling [ack]{@link IMessage#ack} directly
         * on the {@link IMessage} handled by a subscription callback:
         *
         * ```javascript
         *        var callback = function (message) {
         *          // process the message
         *          // acknowledge it
         *          message.ack();
         *        };
         *        client.subscribe(destination, callback, {'ack': 'client'});
         * ```
         */

      }, {
        key: "ack",
        value: function ack(messageId, subscriptionId) {
          var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          this._stompHandler.ack(messageId, subscriptionId, headers);
        }
        /**
         * NACK a message. It is preferable to acknowledge a message by calling [nack]{@link IMessage#nack} directly
         * on the {@link IMessage} handled by a subscription callback:
         *
         * ```javascript
         *        var callback = function (message) {
         *          // process the message
         *          // an error occurs, nack it
         *          message.nack();
         *        };
         *        client.subscribe(destination, callback, {'ack': 'client'});
         * ```
         */

      }, {
        key: "nack",
        value: function nack(messageId, subscriptionId) {
          var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          this._stompHandler.nack(messageId, subscriptionId, headers);
        }
      }]);

      return Client;
    }(); //# sourceMappingURL=client.js.map

    /***/

  },

  /***/
  "./node_modules/@stomp/stompjs/esm6/compatibility/compat-client.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@stomp/stompjs/esm6/compatibility/compat-client.js ***!
    \*************************************************************************/

  /*! exports provided: CompatClient */

  /***/
  function node_modulesStompStompjsEsm6CompatibilityCompatClientJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompatClient", function () {
      return CompatClient;
    });
    /* harmony import */


    var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../client */
    "./node_modules/@stomp/stompjs/esm6/client.js");
    /* harmony import */


    var _heartbeat_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./heartbeat-info */
    "./node_modules/@stomp/stompjs/esm6/compatibility/heartbeat-info.js");
    /**
     * Available for backward compatibility, please shift to using {@link Client}.
     *
     * **Deprecated**
     *
     * Part of `@stomp/stompjs`.
     *
     * To upgrade, please follow the [Upgrade Guide](../additional-documentation/upgrading.html)
     */


    var CompatClient = /*#__PURE__*/function (_client__WEBPACK_IMPO) {
      _inherits(CompatClient, _client__WEBPACK_IMPO);

      var _super = _createSuper(CompatClient);

      /**
       * Available for backward compatibility, please shift to using {@link Client}
       * and [Client#webSocketFactory]{@link Client#webSocketFactory}.
       *
       * **Deprecated**
       *
       * @internal
       */
      function CompatClient(webSocketFactory) {
        var _this4;

        _classCallCheck(this, CompatClient);

        _this4 = _super.call(this);
        /**
         * It is no op now. No longer needed. Large packets work out of the box.
         */

        _this4.maxWebSocketFrameSize = 16 * 1024;
        _this4._heartbeatInfo = new _heartbeat_info__WEBPACK_IMPORTED_MODULE_1__["HeartbeatInfo"](_assertThisInitialized(_this4));
        _this4.reconnect_delay = 0;
        _this4.webSocketFactory = webSocketFactory; // Default from previous version

        _this4.debug = function () {
          var _console2;

          (_console2 = console).log.apply(_console2, arguments);
        };

        return _this4;
      }

      _createClass(CompatClient, [{
        key: "_parseConnect",
        value: function _parseConnect() {
          var closeEventCallback;
          var connectCallback;
          var errorCallback;
          var headers = {};

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          if (args.length < 2) {
            throw new Error('Connect requires at least 2 arguments');
          }

          if (typeof args[1] === 'function') {
            headers = args[0];
            connectCallback = args[1];
            errorCallback = args[2];
            closeEventCallback = args[3];
          } else {
            switch (args.length) {
              case 6:
                headers.login = args[0];
                headers.passcode = args[1];
                connectCallback = args[2];
                errorCallback = args[3];
                closeEventCallback = args[4];
                headers.host = args[5];
                break;

              default:
                headers.login = args[0];
                headers.passcode = args[1];
                connectCallback = args[2];
                errorCallback = args[3];
                closeEventCallback = args[4];
            }
          }

          return [headers, connectCallback, errorCallback, closeEventCallback];
        }
        /**
         * Available for backward compatibility, please shift to using [Client#activate]{@link Client#activate}.
         *
         * **Deprecated**
         *
         * The `connect` method accepts different number of arguments and types. See the Overloads list. Use the
         * version with headers to pass your broker specific options.
         *
         * overloads:
         * - connect(headers, connectCallback)
         * - connect(headers, connectCallback, errorCallback)
         * - connect(login, passcode, connectCallback)
         * - connect(login, passcode, connectCallback, errorCallback)
         * - connect(login, passcode, connectCallback, errorCallback, closeEventCallback)
         * - connect(login, passcode, connectCallback, errorCallback, closeEventCallback, host)
         *
         * params:
         * - headers, see [Client#connectHeaders]{@link Client#connectHeaders}
         * - connectCallback, see [Client#onConnect]{@link Client#onConnect}
         * - errorCallback, see [Client#onStompError]{@link Client#onStompError}
         * - closeEventCallback, see [Client#onWebSocketClose]{@link Client#onWebSocketClose}
         * - login [String], see [Client#connectHeaders](../classes/Client.html#connectHeaders)
         * - passcode [String], [Client#connectHeaders](../classes/Client.html#connectHeaders)
         * - host [String], see [Client#connectHeaders](../classes/Client.html#connectHeaders)
         *
         * To upgrade, please follow the [Upgrade Guide](../additional-documentation/upgrading.html)
         */

      }, {
        key: "connect",
        value: function connect() {
          var out = this._parseConnect.apply(this, arguments);

          if (out[0]) {
            this.connectHeaders = out[0];
          }

          if (out[1]) {
            this.onConnect = out[1];
          }

          if (out[2]) {
            this.onStompError = out[2];
          }

          if (out[3]) {
            this.onWebSocketClose = out[3];
          }

          _get(_getPrototypeOf(CompatClient.prototype), "activate", this).call(this);
        }
        /**
         * Available for backward compatibility, please shift to using [Client#deactivate]{@link Client#deactivate}.
         *
         * **Deprecated**
         *
         * See:
         * [Client#onDisconnect]{@link Client#onDisconnect}, and
         * [Client#disconnectHeaders]{@link Client#disconnectHeaders}
         *
         * To upgrade, please follow the [Upgrade Guide](../additional-documentation/upgrading.html)
         */

      }, {
        key: "disconnect",
        value: function disconnect(disconnectCallback) {
          var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          if (disconnectCallback) {
            this.onDisconnect = disconnectCallback;
          }

          this.disconnectHeaders = headers;

          _get(_getPrototypeOf(CompatClient.prototype), "deactivate", this).call(this);
        }
        /**
         * Available for backward compatibility, use [Client#publish]{@link Client#publish}.
         *
         * Send a message to a named destination. Refer to your STOMP broker documentation for types
         * and naming of destinations. The headers will, typically, be available to the subscriber.
         * However, there may be special purpose headers corresponding to your STOMP broker.
         *
         *  **Deprecated**, use [Client#publish]{@link Client#publish}
         *
         * Note: Body must be String. You will need to covert the payload to string in case it is not string (e.g. JSON)
         *
         * ```javascript
         *        client.send("/queue/test", {priority: 9}, "Hello, STOMP");
         *
         *        // If you want to send a message with a body, you must also pass the headers argument.
         *        client.send("/queue/test", {}, "Hello, STOMP");
         * ```
         *
         * To upgrade, please follow the [Upgrade Guide](../additional-documentation/upgrading.html)
         */

      }, {
        key: "send",
        value: function send(destination) {
          var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          headers = Object.assign({}, headers);
          var skipContentLengthHeader = headers['content-length'] === false;

          if (skipContentLengthHeader) {
            delete headers['content-length'];
          }

          this.publish({
            destination: destination,
            headers: headers,
            body: body,
            skipContentLengthHeader: skipContentLengthHeader
          });
        }
        /**
         * Available for backward compatibility, renamed to [Client#reconnectDelay]{@link Client#reconnectDelay}.
         *
         * **Deprecated**
         */

      }, {
        key: "reconnect_delay",
        set: function set(value) {
          this.reconnectDelay = value;
        }
        /**
         * Available for backward compatibility, renamed to [Client#webSocket]{@link Client#webSocket}.
         *
         * **Deprecated**
         */

      }, {
        key: "ws",
        get: function get() {
          return this.webSocket;
        }
        /**
         * Available for backward compatibility, renamed to [Client#connectedVersion]{@link Client#connectedVersion}.
         *
         * **Deprecated**
         */

      }, {
        key: "version",
        get: function get() {
          return this.connectedVersion;
        }
        /**
         * Available for backward compatibility, renamed to [Client#onUnhandledMessage]{@link Client#onUnhandledMessage}.
         *
         * **Deprecated**
         */

      }, {
        key: "onreceive",
        get: function get() {
          return this.onUnhandledMessage;
        }
        /**
         * Available for backward compatibility, renamed to [Client#onUnhandledMessage]{@link Client#onUnhandledMessage}.
         *
         * **Deprecated**
         */
        ,
        set: function set(value) {
          this.onUnhandledMessage = value;
        }
        /**
         * Available for backward compatibility, renamed to [Client#onUnhandledReceipt]{@link Client#onUnhandledReceipt}.
         * Prefer using [Client#watchForReceipt]{@link Client#watchForReceipt}.
         *
         * **Deprecated**
         */

      }, {
        key: "onreceipt",
        get: function get() {
          return this.onUnhandledReceipt;
        }
        /**
         * Available for backward compatibility, renamed to [Client#onUnhandledReceipt]{@link Client#onUnhandledReceipt}.
         *
         * **Deprecated**
         */
        ,
        set: function set(value) {
          this.onUnhandledReceipt = value;
        }
        /**
         * Available for backward compatibility, renamed to [Client#heartbeatIncoming]{@link Client#heartbeatIncoming}
         * [Client#heartbeatOutgoing]{@link Client#heartbeatOutgoing}.
         *
         * **Deprecated**
         */

      }, {
        key: "heartbeat",
        get: function get() {
          return this._heartbeatInfo;
        }
        /**
         * Available for backward compatibility, renamed to [Client#heartbeatIncoming]{@link Client#heartbeatIncoming}
         * [Client#heartbeatOutgoing]{@link Client#heartbeatOutgoing}.
         *
         * **Deprecated**
         */
        ,
        set: function set(value) {
          this.heartbeatIncoming = value.incoming;
          this.heartbeatOutgoing = value.outgoing;
        }
      }]);

      return CompatClient;
    }(_client__WEBPACK_IMPORTED_MODULE_0__["Client"]); //# sourceMappingURL=compat-client.js.map

    /***/

  },

  /***/
  "./node_modules/@stomp/stompjs/esm6/compatibility/heartbeat-info.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@stomp/stompjs/esm6/compatibility/heartbeat-info.js ***!
    \**************************************************************************/

  /*! exports provided: HeartbeatInfo */

  /***/
  function node_modulesStompStompjsEsm6CompatibilityHeartbeatInfoJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeartbeatInfo", function () {
      return HeartbeatInfo;
    });
    /**
     * Part of `@stomp/stompjs`.
     *
     * @internal
     */


    var HeartbeatInfo = /*#__PURE__*/function () {
      function HeartbeatInfo(client) {
        _classCallCheck(this, HeartbeatInfo);

        this.client = client;
      }

      _createClass(HeartbeatInfo, [{
        key: "outgoing",
        get: function get() {
          return this.client.heartbeatOutgoing;
        },
        set: function set(value) {
          this.client.heartbeatOutgoing = value;
        }
      }, {
        key: "incoming",
        get: function get() {
          return this.client.heartbeatIncoming;
        },
        set: function set(value) {
          this.client.heartbeatIncoming = value;
        }
      }]);

      return HeartbeatInfo;
    }(); //# sourceMappingURL=heartbeat-info.js.map

    /***/

  },

  /***/
  "./node_modules/@stomp/stompjs/esm6/compatibility/stomp.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@stomp/stompjs/esm6/compatibility/stomp.js ***!
    \*****************************************************************/

  /*! exports provided: Stomp */

  /***/
  function node_modulesStompStompjsEsm6CompatibilityStompJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Stomp", function () {
      return Stomp;
    });
    /* harmony import */


    var _versions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../versions */
    "./node_modules/@stomp/stompjs/esm6/versions.js");
    /* harmony import */


    var _compat_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./compat-client */
    "./node_modules/@stomp/stompjs/esm6/compatibility/compat-client.js");
    /**
     * STOMP Class, acts like a factory to create {@link Client}.
     *
     * Part of `@stomp/stompjs`.
     *
     * **Deprecated**
     *
     * It will be removed in next major version. Please switch to {@link Client}.
     */


    var Stomp = /*#__PURE__*/function () {
      function Stomp() {
        _classCallCheck(this, Stomp);
      }

      _createClass(Stomp, null, [{
        key: "client",
        value:
        /**
         * This method creates a WebSocket client that is connected to
         * the STOMP server located at the url.
         *
         * ```javascript
         *        var url = "ws://localhost:61614/stomp";
         *        var client = Stomp.client(url);
         * ```
         *
         * **Deprecated**
         *
         * It will be removed in next major version. Please switch to {@link Client}
         * using [Client#brokerURL]{@link Client#brokerURL}.
         */
        function client(url, protocols) {
          // This is a hack to allow another implementation than the standard
          // HTML5 WebSocket class.
          //
          // It is possible to use another class by calling
          //
          //     Stomp.WebSocketClass = MozWebSocket
          //
          // *prior* to call `Stomp.client()`.
          //
          // This hack is deprecated and `Stomp.over()` method should be used
          // instead.
          // See remarks on the function Stomp.over
          if (protocols == null) {
            protocols = _versions__WEBPACK_IMPORTED_MODULE_0__["Versions"]["default"].protocolVersions();
          }

          var wsFn = function wsFn() {
            var klass = Stomp.WebSocketClass || WebSocket;
            return new klass(url, protocols);
          };

          return new _compat_client__WEBPACK_IMPORTED_MODULE_1__["CompatClient"](wsFn);
        }
        /**
         * This method is an alternative to [Stomp#client]{@link Stomp#client} to let the user
         * specify the WebSocket to use (either a standard HTML5 WebSocket or
         * a similar object).
         *
         * In order to support reconnection, the function Client._connect should be callable more than once.
         * While reconnecting
         * a new instance of underlying transport (TCP Socket, WebSocket or SockJS) will be needed. So, this function
         * alternatively allows passing a function that should return a new instance of the underlying socket.
         *
         * ```javascript
         *        var client = Stomp.over(function(){
         *          return new WebSocket('ws://localhost:15674/ws')
         *        });
         * ```
         *
         * **Deprecated**
         *
         * It will be removed in next major version. Please switch to {@link Client}
         * using [Client#webSocketFactory]{@link Client#webSocketFactory}.
         */

      }, {
        key: "over",
        value: function over(ws) {
          var wsFn;

          if (typeof ws === 'function') {
            wsFn = ws;
          } else {
            console.warn('Stomp.over did not receive a factory, auto reconnect will not work. ' + 'Please see https://stomp-js.github.io/api-docs/latest/classes/Stomp.html#over');

            wsFn = function wsFn() {
              return ws;
            };
          }

          return new _compat_client__WEBPACK_IMPORTED_MODULE_1__["CompatClient"](wsFn);
        }
      }]);

      return Stomp;
    }();
    /**
     * In case you need to use a non standard class for WebSocket.
     *
     * For example when using within NodeJS environment:
     *
     * ```javascript
     *        StompJs = require('../../esm5/');
     *        Stomp = StompJs.Stomp;
     *        Stomp.WebSocketClass = require('websocket').w3cwebsocket;
     * ```
     *
     * **Deprecated**
     *
     *
     * It will be removed in next major version. Please switch to {@link Client}
     * using [Client#webSocketFactory]{@link Client#webSocketFactory}.
     */
    // tslint:disable-next-line:variable-name


    Stomp.WebSocketClass = null; //# sourceMappingURL=stomp.js.map

    /***/
  },

  /***/
  "./node_modules/@stomp/stompjs/esm6/frame-impl.js":
  /*!********************************************************!*\
    !*** ./node_modules/@stomp/stompjs/esm6/frame-impl.js ***!
    \********************************************************/

  /*! exports provided: FrameImpl */

  /***/
  function node_modulesStompStompjsEsm6FrameImplJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrameImpl", function () {
      return FrameImpl;
    });
    /* harmony import */


    var _byte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./byte */
    "./node_modules/@stomp/stompjs/esm6/byte.js");
    /**
     * Frame class represents a STOMP frame.
     *
     * @internal
     */


    var FrameImpl = /*#__PURE__*/function () {
      /**
       * Frame constructor. `command`, `headers` and `body` are available as properties.
       *
       * @internal
       */
      function FrameImpl(params) {
        _classCallCheck(this, FrameImpl);

        var command = params.command,
            headers = params.headers,
            body = params.body,
            binaryBody = params.binaryBody,
            escapeHeaderValues = params.escapeHeaderValues,
            skipContentLengthHeader = params.skipContentLengthHeader;
        this.command = command;
        this.headers = Object.assign({}, headers || {});

        if (binaryBody) {
          this._binaryBody = binaryBody;
          this.isBinaryBody = true;
        } else {
          this._body = body || '';
          this.isBinaryBody = false;
        }

        this.escapeHeaderValues = escapeHeaderValues || false;
        this.skipContentLengthHeader = skipContentLengthHeader || false;
      }
      /**
       * body of the frame
       */


      _createClass(FrameImpl, [{
        key: "body",
        get: function get() {
          if (!this._body && this.isBinaryBody) {
            this._body = new TextDecoder().decode(this._binaryBody);
          }

          return this._body;
        }
        /**
         * body as Uint8Array
         */

      }, {
        key: "binaryBody",
        get: function get() {
          if (!this._binaryBody && !this.isBinaryBody) {
            this._binaryBody = new TextEncoder().encode(this._body);
          }

          return this._binaryBody;
        }
        /**
         * deserialize a STOMP Frame from raw data.
         *
         * @internal
         */

      }, {
        key: "toString",
        value:
        /**
         * @internal
         */
        function toString() {
          return this.serializeCmdAndHeaders();
        }
        /**
         * serialize this Frame in a format suitable to be passed to WebSocket.
         * If the body is string the output will be string.
         * If the body is binary (i.e. of type Unit8Array) it will be serialized to ArrayBuffer.
         *
         * @internal
         */

      }, {
        key: "serialize",
        value: function serialize() {
          var cmdAndHeaders = this.serializeCmdAndHeaders();

          if (this.isBinaryBody) {
            return FrameImpl.toUnit8Array(cmdAndHeaders, this._binaryBody).buffer;
          } else {
            return cmdAndHeaders + this._body + _byte__WEBPACK_IMPORTED_MODULE_0__["BYTE"].NULL;
          }
        }
      }, {
        key: "serializeCmdAndHeaders",
        value: function serializeCmdAndHeaders() {
          var lines = [this.command];

          if (this.skipContentLengthHeader) {
            delete this.headers['content-length'];
          }

          for (var _i = 0, _Object$keys = Object.keys(this.headers || {}); _i < _Object$keys.length; _i++) {
            var name = _Object$keys[_i];
            var value = this.headers[name];

            if (this.escapeHeaderValues && this.command !== 'CONNECT' && this.command !== 'CONNECTED') {
              lines.push("".concat(name, ":").concat(FrameImpl.hdrValueEscape("".concat(value))));
            } else {
              lines.push("".concat(name, ":").concat(value));
            }
          }

          if (this.isBinaryBody || !this.isBodyEmpty() && !this.skipContentLengthHeader) {
            lines.push("content-length:".concat(this.bodyLength()));
          }

          return lines.join(_byte__WEBPACK_IMPORTED_MODULE_0__["BYTE"].LF) + _byte__WEBPACK_IMPORTED_MODULE_0__["BYTE"].LF + _byte__WEBPACK_IMPORTED_MODULE_0__["BYTE"].LF;
        }
      }, {
        key: "isBodyEmpty",
        value: function isBodyEmpty() {
          return this.bodyLength() === 0;
        }
      }, {
        key: "bodyLength",
        value: function bodyLength() {
          var binaryBody = this.binaryBody;
          return binaryBody ? binaryBody.length : 0;
        }
        /**
         * Compute the size of a UTF-8 string by counting its number of bytes
         * (and not the number of characters composing the string)
         */

      }], [{
        key: "fromRawFrame",
        value: function fromRawFrame(rawFrame, escapeHeaderValues) {
          var headers = {};

          var trim = function trim(str) {
            return str.replace(/^\s+|\s+$/g, '');
          }; // In case of repeated headers, as per standards, first value need to be used


          var _iterator = _createForOfIteratorHelper(rawFrame.headers.reverse()),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var header = _step.value;
              var idx = header.indexOf(':');
              var key = trim(header[0]);
              var value = trim(header[1]);

              if (escapeHeaderValues && rawFrame.command !== 'CONNECT' && rawFrame.command !== 'CONNECTED') {
                value = FrameImpl.hdrValueUnEscape(value);
              }

              headers[key] = value;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return new FrameImpl({
            command: rawFrame.command,
            headers: headers,
            binaryBody: rawFrame.binaryBody,
            escapeHeaderValues: escapeHeaderValues
          });
        }
      }, {
        key: "sizeOfUTF8",
        value: function sizeOfUTF8(s) {
          return s ? new TextEncoder().encode(s).length : 0;
        }
      }, {
        key: "toUnit8Array",
        value: function toUnit8Array(cmdAndHeaders, binaryBody) {
          var uint8CmdAndHeaders = new TextEncoder().encode(cmdAndHeaders);
          var nullTerminator = new Uint8Array([0]);
          var uint8Frame = new Uint8Array(uint8CmdAndHeaders.length + binaryBody.length + nullTerminator.length);
          uint8Frame.set(uint8CmdAndHeaders);
          uint8Frame.set(binaryBody, uint8CmdAndHeaders.length);
          uint8Frame.set(nullTerminator, uint8CmdAndHeaders.length + binaryBody.length);
          return uint8Frame;
        }
        /**
         * Serialize a STOMP frame as per STOMP standards, suitable to be sent to the STOMP broker.
         *
         * @internal
         */

      }, {
        key: "marshall",
        value: function marshall(params) {
          var frame = new FrameImpl(params);
          return frame.serialize();
        }
        /**
         *  Escape header values
         */

      }, {
        key: "hdrValueEscape",
        value: function hdrValueEscape(str) {
          return str.replace(/\\/g, '\\\\').replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/:/g, '\\c');
        }
        /**
         * UnEscape header values
         */

      }, {
        key: "hdrValueUnEscape",
        value: function hdrValueUnEscape(str) {
          return str.replace(/\\r/g, '\r').replace(/\\n/g, '\n').replace(/\\c/g, ':').replace(/\\\\/g, '\\');
        }
      }]);

      return FrameImpl;
    }(); //# sourceMappingURL=frame-impl.js.map

    /***/

  },

  /***/
  "./node_modules/@stomp/stompjs/esm6/index.js":
  /*!***************************************************!*\
    !*** ./node_modules/@stomp/stompjs/esm6/index.js ***!
    \***************************************************/

  /*! exports provided: Client, FrameImpl, Parser, StompConfig, StompHeaders, StompSubscription, StompSocketState, ActivationState, Versions, CompatClient, Stomp */

  /***/
  function node_modulesStompStompjsEsm6IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./client */
    "./node_modules/@stomp/stompjs/esm6/client.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Client", function () {
      return _client__WEBPACK_IMPORTED_MODULE_0__["Client"];
    });
    /* harmony import */


    var _frame_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./frame-impl */
    "./node_modules/@stomp/stompjs/esm6/frame-impl.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FrameImpl", function () {
      return _frame_impl__WEBPACK_IMPORTED_MODULE_1__["FrameImpl"];
    });
    /* harmony import */


    var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./parser */
    "./node_modules/@stomp/stompjs/esm6/parser.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Parser", function () {
      return _parser__WEBPACK_IMPORTED_MODULE_2__["Parser"];
    });
    /* harmony import */


    var _stomp_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./stomp-config */
    "./node_modules/@stomp/stompjs/esm6/stomp-config.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StompConfig", function () {
      return _stomp_config__WEBPACK_IMPORTED_MODULE_3__["StompConfig"];
    });
    /* harmony import */


    var _stomp_headers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./stomp-headers */
    "./node_modules/@stomp/stompjs/esm6/stomp-headers.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StompHeaders", function () {
      return _stomp_headers__WEBPACK_IMPORTED_MODULE_4__["StompHeaders"];
    });
    /* harmony import */


    var _stomp_subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./stomp-subscription */
    "./node_modules/@stomp/stompjs/esm6/stomp-subscription.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StompSubscription", function () {
      return _stomp_subscription__WEBPACK_IMPORTED_MODULE_5__["StompSubscription"];
    });
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./types */
    "./node_modules/@stomp/stompjs/esm6/types.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StompSocketState", function () {
      return _types__WEBPACK_IMPORTED_MODULE_6__["StompSocketState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ActivationState", function () {
      return _types__WEBPACK_IMPORTED_MODULE_6__["ActivationState"];
    });
    /* harmony import */


    var _versions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./versions */
    "./node_modules/@stomp/stompjs/esm6/versions.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Versions", function () {
      return _versions__WEBPACK_IMPORTED_MODULE_7__["Versions"];
    });
    /* harmony import */


    var _compatibility_compat_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./compatibility/compat-client */
    "./node_modules/@stomp/stompjs/esm6/compatibility/compat-client.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CompatClient", function () {
      return _compatibility_compat_client__WEBPACK_IMPORTED_MODULE_8__["CompatClient"];
    });
    /* harmony import */


    var _compatibility_stomp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./compatibility/stomp */
    "./node_modules/@stomp/stompjs/esm6/compatibility/stomp.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Stomp", function () {
      return _compatibility_stomp__WEBPACK_IMPORTED_MODULE_9__["Stomp"];
    }); // Compatibility code
    //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/@stomp/stompjs/esm6/parser.js":
  /*!****************************************************!*\
    !*** ./node_modules/@stomp/stompjs/esm6/parser.js ***!
    \****************************************************/

  /*! exports provided: Parser */

  /***/
  function node_modulesStompStompjsEsm6ParserJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Parser", function () {
      return Parser;
    });
    /**
     * @internal
     */


    var NULL = 0;
    /**
     * @internal
     */

    var LF = 10;
    /**
     * @internal
     */

    var CR = 13;
    /**
     * @internal
     */

    var COLON = 58;
    /**
     * This is an evented, rec descent parser.
     * A stream of Octets can be passed and whenever it recognizes
     * a complete Frame or an incoming ping it will invoke the registered callbacks.
     *
     * All incoming Octets are fed into _onByte function.
     * Depending on current state the _onByte function keeps changing.
     * Depending on the state it keeps accumulating into _token and _results.
     * State is indicated by current value of _onByte, all states are named as _collect.
     *
     * STOMP standards https://stomp.github.io/stomp-specification-1.2.html
     * imply that all lengths are considered in bytes (instead of string lengths).
     * So, before actual parsing, if the incoming data is String it is converted to Octets.
     * This allows faithful implementation of the protocol and allows NULL Octets to be present in the body.
     *
     * There is no peek function on the incoming data.
     * When a state change occurs based on an Octet without consuming the Octet,
     * the Octet, after state change, is fed again (_reinjectByte).
     * This became possible as the state change can be determined by inspecting just one Octet.
     *
     * There are two modes to collect the body, if content-length header is there then it by counting Octets
     * otherwise it is determined by NULL terminator.
     *
     * Following the standards, the command and headers are converted to Strings
     * and the body is returned as Octets.
     * Headers are returned as an array and not as Hash - to allow multiple occurrence of an header.
     *
     * This parser does not use Regular Expressions as that can only operate on Strings.
     *
     * It handles if multiple STOMP frames are given as one chunk, a frame is split into multiple chunks, or
     * any combination there of. The parser remembers its state (any partial frame) and continues when a new chunk
     * is pushed.
     *
     * Typically the higher level function will convert headers to Hash, handle unescaping of header values
     * (which is protocol version specific), and convert body to text.
     *
     * Check the parser.spec.js to understand cases that this parser is supposed to handle.
     *
     * Part of `@stomp/stompjs`.
     *
     * @internal
     */

    var Parser = /*#__PURE__*/function () {
      function Parser(onFrame, onIncomingPing) {
        _classCallCheck(this, Parser);

        this.onFrame = onFrame;
        this.onIncomingPing = onIncomingPing;
        this._encoder = new TextEncoder();
        this._decoder = new TextDecoder();
        this._token = [];

        this._initState();
      }

      _createClass(Parser, [{
        key: "parseChunk",
        value: function parseChunk(segment) {
          var appendMissingNULLonIncoming = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var chunk;

          if (segment instanceof ArrayBuffer) {
            chunk = new Uint8Array(segment);
          } else {
            chunk = this._encoder.encode(segment);
          } // See https://github.com/stomp-js/stompjs/issues/89
          // Remove when underlying issue is fixed.
          //
          // Send a NULL byte, if the last byte of a Text frame was not NULL.F


          if (appendMissingNULLonIncoming && chunk[chunk.length - 1] !== 0) {
            var chunkWithNull = new Uint8Array(chunk.length + 1);
            chunkWithNull.set(chunk, 0);
            chunkWithNull[chunk.length] = 0;
            chunk = chunkWithNull;
          } // tslint:disable-next-line:prefer-for-of


          for (var i = 0; i < chunk.length; i++) {
            var _byte = chunk[i];

            this._onByte(_byte);
          }
        } // The following implements a simple Rec Descent Parser.
        // The grammar is simple and just one byte tells what should be the next state

      }, {
        key: "_collectFrame",
        value: function _collectFrame(_byte2) {
          if (_byte2 === NULL) {
            // Ignore
            return;
          }

          if (_byte2 === CR) {
            // Ignore CR
            return;
          }

          if (_byte2 === LF) {
            // Incoming Ping
            this.onIncomingPing();
            return;
          }

          this._onByte = this._collectCommand;

          this._reinjectByte(_byte2);
        }
      }, {
        key: "_collectCommand",
        value: function _collectCommand(_byte3) {
          if (_byte3 === CR) {
            // Ignore CR
            return;
          }

          if (_byte3 === LF) {
            this._results.command = this._consumeTokenAsUTF8();
            this._onByte = this._collectHeaders;
            return;
          }

          this._consumeByte(_byte3);
        }
      }, {
        key: "_collectHeaders",
        value: function _collectHeaders(_byte4) {
          if (_byte4 === CR) {
            // Ignore CR
            return;
          }

          if (_byte4 === LF) {
            this._setupCollectBody();

            return;
          }

          this._onByte = this._collectHeaderKey;

          this._reinjectByte(_byte4);
        }
      }, {
        key: "_reinjectByte",
        value: function _reinjectByte(_byte5) {
          this._onByte(_byte5);
        }
      }, {
        key: "_collectHeaderKey",
        value: function _collectHeaderKey(_byte6) {
          if (_byte6 === COLON) {
            this._headerKey = this._consumeTokenAsUTF8();
            this._onByte = this._collectHeaderValue;
            return;
          }

          this._consumeByte(_byte6);
        }
      }, {
        key: "_collectHeaderValue",
        value: function _collectHeaderValue(_byte7) {
          if (_byte7 === CR) {
            // Ignore CR
            return;
          }

          if (_byte7 === LF) {
            this._results.headers.push([this._headerKey, this._consumeTokenAsUTF8()]);

            this._headerKey = undefined;
            this._onByte = this._collectHeaders;
            return;
          }

          this._consumeByte(_byte7);
        }
      }, {
        key: "_setupCollectBody",
        value: function _setupCollectBody() {
          var contentLengthHeader = this._results.headers.filter(function (header) {
            return header[0] === 'content-length';
          })[0];

          if (contentLengthHeader) {
            this._bodyBytesRemaining = parseInt(contentLengthHeader[1], 10);
            this._onByte = this._collectBodyFixedSize;
          } else {
            this._onByte = this._collectBodyNullTerminated;
          }
        }
      }, {
        key: "_collectBodyNullTerminated",
        value: function _collectBodyNullTerminated(_byte8) {
          if (_byte8 === NULL) {
            this._retrievedBody();

            return;
          }

          this._consumeByte(_byte8);
        }
      }, {
        key: "_collectBodyFixedSize",
        value: function _collectBodyFixedSize(_byte9) {
          // It is post decrement, so that we discard the trailing NULL octet
          if (this._bodyBytesRemaining-- === 0) {
            this._retrievedBody();

            return;
          }

          this._consumeByte(_byte9);
        }
      }, {
        key: "_retrievedBody",
        value: function _retrievedBody() {
          this._results.binaryBody = this._consumeTokenAsRaw();
          this.onFrame(this._results);

          this._initState();
        } // Rec Descent Parser helpers

      }, {
        key: "_consumeByte",
        value: function _consumeByte(_byte10) {
          this._token.push(_byte10);
        }
      }, {
        key: "_consumeTokenAsUTF8",
        value: function _consumeTokenAsUTF8() {
          return this._decoder.decode(this._consumeTokenAsRaw());
        }
      }, {
        key: "_consumeTokenAsRaw",
        value: function _consumeTokenAsRaw() {
          var rawResult = new Uint8Array(this._token);
          this._token = [];
          return rawResult;
        }
      }, {
        key: "_initState",
        value: function _initState() {
          this._results = {
            command: undefined,
            headers: [],
            binaryBody: undefined
          };
          this._token = [];
          this._headerKey = undefined;
          this._onByte = this._collectFrame;
        }
      }]);

      return Parser;
    }(); //# sourceMappingURL=parser.js.map

    /***/

  },

  /***/
  "./node_modules/@stomp/stompjs/esm6/stomp-config.js":
  /*!**********************************************************!*\
    !*** ./node_modules/@stomp/stompjs/esm6/stomp-config.js ***!
    \**********************************************************/

  /*! exports provided: StompConfig */

  /***/
  function node_modulesStompStompjsEsm6StompConfigJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StompConfig", function () {
      return StompConfig;
    });
    /**
     * Configuration options for STOMP Client, each key corresponds to
     * field by the same name in {@link Client}. This can be passed to
     * the constructor of {@link Client} or to [Client#configure]{@link Client#configure}.
     *
     * There used to be a class with the same name in `@stomp/ng2-stompjs`, which has been replaced by
     * {@link RxStompConfig} and {@link InjectableRxStompConfig}.
     *
     * Part of `@stomp/stompjs`.
     */


    var StompConfig = function StompConfig() {
      _classCallCheck(this, StompConfig);
    }; //# sourceMappingURL=stomp-config.js.map

    /***/

  },

  /***/
  "./node_modules/@stomp/stompjs/esm6/stomp-handler.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@stomp/stompjs/esm6/stomp-handler.js ***!
    \***********************************************************/

  /*! exports provided: StompHandler */

  /***/
  function node_modulesStompStompjsEsm6StompHandlerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StompHandler", function () {
      return StompHandler;
    });
    /* harmony import */


    var _byte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./byte */
    "./node_modules/@stomp/stompjs/esm6/byte.js");
    /* harmony import */


    var _frame_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./frame-impl */
    "./node_modules/@stomp/stompjs/esm6/frame-impl.js");
    /* harmony import */


    var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./parser */
    "./node_modules/@stomp/stompjs/esm6/parser.js");
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./types */
    "./node_modules/@stomp/stompjs/esm6/types.js");
    /* harmony import */


    var _versions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./versions */
    "./node_modules/@stomp/stompjs/esm6/versions.js");
    /* harmony import */


    var _augment_websocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./augment-websocket */
    "./node_modules/@stomp/stompjs/esm6/augment-websocket.js");
    /**
     * The STOMP protocol handler
     *
     * Part of `@stomp/stompjs`.
     *
     * @internal
     */


    var StompHandler = /*#__PURE__*/function () {
      function StompHandler(_client, _webSocket) {
        var _this5 = this;

        var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, StompHandler);

        this._client = _client;
        this._webSocket = _webSocket;
        this._serverFrameHandlers = {
          // [CONNECTED Frame](http://stomp.github.com/stomp-specification-1.2.html#CONNECTED_Frame)
          CONNECTED: function CONNECTED(frame) {
            _this5.debug("connected to server ".concat(frame.headers.server));

            _this5._connected = true;
            _this5._connectedVersion = frame.headers.version; // STOMP version 1.2 needs header values to be escaped

            if (_this5._connectedVersion === _versions__WEBPACK_IMPORTED_MODULE_4__["Versions"].V1_2) {
              _this5._escapeHeaderValues = true;
            }

            _this5._setupHeartbeat(frame.headers);

            _this5.onConnect(frame);
          },
          // [MESSAGE Frame](http://stomp.github.com/stomp-specification-1.2.html#MESSAGE)
          MESSAGE: function MESSAGE(frame) {
            // the callback is registered when the client calls
            // `subscribe()`.
            // If there is no registered subscription for the received message,
            // the default `onUnhandledMessage` callback is used that the client can set.
            // This is useful for subscriptions that are automatically created
            // on the browser side (e.g. [RabbitMQ's temporary
            // queues](http://www.rabbitmq.com/stomp.html)).
            var subscription = frame.headers.subscription;
            var onReceive = _this5._subscriptions[subscription] || _this5.onUnhandledMessage; // bless the frame to be a Message

            var message = frame;
            var client = _this5;
            var messageId = _this5._connectedVersion === _versions__WEBPACK_IMPORTED_MODULE_4__["Versions"].V1_2 ? message.headers.ack : message.headers['message-id']; // add `ack()` and `nack()` methods directly to the returned frame
            // so that a simple call to `message.ack()` can acknowledge the message.

            message.ack = function () {
              var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              return client.ack(messageId, subscription, headers);
            };

            message.nack = function () {
              var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              return client.nack(messageId, subscription, headers);
            };

            onReceive(message);
          },
          // [RECEIPT Frame](http://stomp.github.com/stomp-specification-1.2.html#RECEIPT)
          RECEIPT: function RECEIPT(frame) {
            var callback = _this5._receiptWatchers[frame.headers['receipt-id']];

            if (callback) {
              callback(frame); // Server will acknowledge only once, remove the callback

              delete _this5._receiptWatchers[frame.headers['receipt-id']];
            } else {
              _this5.onUnhandledReceipt(frame);
            }
          },
          // [ERROR Frame](http://stomp.github.com/stomp-specification-1.2.html#ERROR)
          ERROR: function ERROR(frame) {
            _this5.onStompError(frame);
          }
        }; // used to index subscribers

        this._counter = 0; // subscription callbacks indexed by subscriber's ID

        this._subscriptions = {}; // receipt-watchers indexed by receipts-ids

        this._receiptWatchers = {};
        this._partialData = '';
        this._escapeHeaderValues = false;
        this._lastServerActivityTS = Date.now();
        this.configure(config);
      }

      _createClass(StompHandler, [{
        key: "connectedVersion",
        get: function get() {
          return this._connectedVersion;
        }
      }, {
        key: "connected",
        get: function get() {
          return this._connected;
        }
      }, {
        key: "configure",
        value: function configure(conf) {
          // bulk assign all properties to this
          Object.assign(this, conf);
        }
      }, {
        key: "start",
        value: function start() {
          var _this6 = this;

          var parser = new _parser__WEBPACK_IMPORTED_MODULE_2__["Parser"]( // On Frame
          function (rawFrame) {
            var frame = _frame_impl__WEBPACK_IMPORTED_MODULE_1__["FrameImpl"].fromRawFrame(rawFrame, _this6._escapeHeaderValues); // if this.logRawCommunication is set, the rawChunk is logged at this._webSocket.onmessage


            if (!_this6.logRawCommunication) {
              _this6.debug("<<< ".concat(frame));
            }

            var serverFrameHandler = _this6._serverFrameHandlers[frame.command] || _this6.onUnhandledFrame;
            serverFrameHandler(frame);
          }, // On Incoming Ping
          function () {
            _this6.debug('<<< PONG');
          });

          this._webSocket.onmessage = function (evt) {
            _this6.debug('Received data');

            _this6._lastServerActivityTS = Date.now();

            if (_this6.logRawCommunication) {
              var rawChunkAsString = evt.data instanceof ArrayBuffer ? new TextDecoder().decode(evt.data) : evt.data;

              _this6.debug("<<< ".concat(rawChunkAsString));
            }

            parser.parseChunk(evt.data, _this6.appendMissingNULLonIncoming);
          };

          this._onclose = function (closeEvent) {
            _this6.debug("Connection closed to ".concat(_this6._client.brokerURL));

            _this6._cleanUp();

            _this6.onWebSocketClose(closeEvent);
          };

          this._webSocket.onclose = this._onclose;

          this._webSocket.onerror = function (errorEvent) {
            _this6.onWebSocketError(errorEvent);
          };

          this._webSocket.onopen = function () {
            // Clone before updating
            var connectHeaders = Object.assign({}, _this6.connectHeaders);

            _this6.debug('Web Socket Opened...');

            connectHeaders['accept-version'] = _this6.stompVersions.supportedVersions();
            connectHeaders['heart-beat'] = [_this6.heartbeatOutgoing, _this6.heartbeatIncoming].join(',');

            _this6._transmit({
              command: 'CONNECT',
              headers: connectHeaders
            });
          };
        }
      }, {
        key: "_setupHeartbeat",
        value: function _setupHeartbeat(headers) {
          var _this7 = this;

          if (headers.version !== _versions__WEBPACK_IMPORTED_MODULE_4__["Versions"].V1_1 && headers.version !== _versions__WEBPACK_IMPORTED_MODULE_4__["Versions"].V1_2) {
            return;
          } // It is valid for the server to not send this header
          // https://stomp.github.io/stomp-specification-1.2.html#Heart-beating


          if (!headers['heart-beat']) {
            return;
          } // heart-beat header received from the server looks like:
          //
          //     heart-beat: sx, sy


          var _headers$heartBeat$s = headers['heart-beat'].split(',').map(function (v) {
            return parseInt(v, 10);
          }),
              _headers$heartBeat$s2 = _slicedToArray(_headers$heartBeat$s, 2),
              serverOutgoing = _headers$heartBeat$s2[0],
              serverIncoming = _headers$heartBeat$s2[1];

          if (this.heartbeatOutgoing !== 0 && serverIncoming !== 0) {
            var ttl = Math.max(this.heartbeatOutgoing, serverIncoming);
            this.debug("send PING every ".concat(ttl, "ms"));
            this._pinger = setInterval(function () {
              if (_this7._webSocket.readyState === _types__WEBPACK_IMPORTED_MODULE_3__["StompSocketState"].OPEN) {
                _this7._webSocket.send(_byte__WEBPACK_IMPORTED_MODULE_0__["BYTE"].LF);

                _this7.debug('>>> PING');
              }
            }, ttl);
          }

          if (this.heartbeatIncoming !== 0 && serverOutgoing !== 0) {
            var _ttl = Math.max(this.heartbeatIncoming, serverOutgoing);

            this.debug("check PONG every ".concat(_ttl, "ms"));
            this._ponger = setInterval(function () {
              var delta = Date.now() - _this7._lastServerActivityTS; // We wait twice the TTL to be flexible on window's setInterval calls


              if (delta > _ttl * 2) {
                _this7.debug("did not receive server activity for the last ".concat(delta, "ms"));

                _this7._closeOrDiscardWebsocket();
              }
            }, _ttl);
          }
        }
      }, {
        key: "_closeOrDiscardWebsocket",
        value: function _closeOrDiscardWebsocket() {
          if (this.discardWebsocketOnCommFailure) {
            this.debug('Discarding websocket, the underlying socket may linger for a while');

            this._discardWebsocket();
          } else {
            this.debug('Issuing close on the websocket');

            this._closeWebsocket();
          }
        }
      }, {
        key: "forceDisconnect",
        value: function forceDisconnect() {
          if (this._webSocket) {
            if (this._webSocket.readyState === _types__WEBPACK_IMPORTED_MODULE_3__["StompSocketState"].CONNECTING || this._webSocket.readyState === _types__WEBPACK_IMPORTED_MODULE_3__["StompSocketState"].OPEN) {
              this._closeOrDiscardWebsocket();
            }
          }
        }
      }, {
        key: "_closeWebsocket",
        value: function _closeWebsocket() {
          this._webSocket.onmessage = function () {}; // ignore messages


          this._webSocket.close();
        }
      }, {
        key: "_discardWebsocket",
        value: function _discardWebsocket() {
          var _this8 = this;

          if (!this._webSocket.terminate) {
            Object(_augment_websocket__WEBPACK_IMPORTED_MODULE_5__["augmentWebsocket"])(this._webSocket, function (msg) {
              return _this8.debug(msg);
            });
          }

          this._webSocket.terminate();
        }
      }, {
        key: "_transmit",
        value: function _transmit(params) {
          var command = params.command,
              headers = params.headers,
              body = params.body,
              binaryBody = params.binaryBody,
              skipContentLengthHeader = params.skipContentLengthHeader;
          var frame = new _frame_impl__WEBPACK_IMPORTED_MODULE_1__["FrameImpl"]({
            command: command,
            headers: headers,
            body: body,
            binaryBody: binaryBody,
            escapeHeaderValues: this._escapeHeaderValues,
            skipContentLengthHeader: skipContentLengthHeader
          });
          var rawChunk = frame.serialize();

          if (this.logRawCommunication) {
            this.debug(">>> ".concat(rawChunk));
          } else {
            this.debug(">>> ".concat(frame));
          }

          if (this.forceBinaryWSFrames && typeof rawChunk === 'string') {
            rawChunk = new TextEncoder().encode(rawChunk);
          }

          if (typeof rawChunk !== 'string' || !this.splitLargeFrames) {
            this._webSocket.send(rawChunk);
          } else {
            var out = rawChunk;

            while (out.length > 0) {
              var chunk = out.substring(0, this.maxWebSocketChunkSize);
              out = out.substring(this.maxWebSocketChunkSize);

              this._webSocket.send(chunk);

              this.debug("chunk sent = ".concat(chunk.length, ", remaining = ").concat(out.length));
            }
          }
        }
      }, {
        key: "dispose",
        value: function dispose() {
          var _this9 = this;

          if (this.connected) {
            try {
              // clone before updating
              var disconnectHeaders = Object.assign({}, this.disconnectHeaders);

              if (!disconnectHeaders.receipt) {
                disconnectHeaders.receipt = "close-".concat(this._counter++);
              }

              this.watchForReceipt(disconnectHeaders.receipt, function (frame) {
                _this9._closeWebsocket();

                _this9._cleanUp();

                _this9.onDisconnect(frame);
              });

              this._transmit({
                command: 'DISCONNECT',
                headers: disconnectHeaders
              });
            } catch (error) {
              this.debug("Ignoring error during disconnect ".concat(error));
            }
          } else {
            if (this._webSocket.readyState === _types__WEBPACK_IMPORTED_MODULE_3__["StompSocketState"].CONNECTING || this._webSocket.readyState === _types__WEBPACK_IMPORTED_MODULE_3__["StompSocketState"].OPEN) {
              this._closeWebsocket();
            }
          }
        }
      }, {
        key: "_cleanUp",
        value: function _cleanUp() {
          this._connected = false;

          if (this._pinger) {
            clearInterval(this._pinger);
          }

          if (this._ponger) {
            clearInterval(this._ponger);
          }
        }
      }, {
        key: "publish",
        value: function publish(params) {
          var destination = params.destination,
              headers = params.headers,
              body = params.body,
              binaryBody = params.binaryBody,
              skipContentLengthHeader = params.skipContentLengthHeader;
          var hdrs = Object.assign({
            destination: destination
          }, headers);

          this._transmit({
            command: 'SEND',
            headers: hdrs,
            body: body,
            binaryBody: binaryBody,
            skipContentLengthHeader: skipContentLengthHeader
          });
        }
      }, {
        key: "watchForReceipt",
        value: function watchForReceipt(receiptId, callback) {
          this._receiptWatchers[receiptId] = callback;
        }
      }, {
        key: "subscribe",
        value: function subscribe(destination, callback) {
          var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          headers = Object.assign({}, headers);

          if (!headers.id) {
            headers.id = "sub-".concat(this._counter++);
          }

          headers.destination = destination;
          this._subscriptions[headers.id] = callback;

          this._transmit({
            command: 'SUBSCRIBE',
            headers: headers
          });

          var client = this;
          return {
            id: headers.id,
            unsubscribe: function unsubscribe(hdrs) {
              return client.unsubscribe(headers.id, hdrs);
            }
          };
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe(id) {
          var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          headers = Object.assign({}, headers);
          delete this._subscriptions[id];
          headers.id = id;

          this._transmit({
            command: 'UNSUBSCRIBE',
            headers: headers
          });
        }
      }, {
        key: "begin",
        value: function begin(transactionId) {
          var txId = transactionId || "tx-".concat(this._counter++);

          this._transmit({
            command: 'BEGIN',
            headers: {
              transaction: txId
            }
          });

          var client = this;
          return {
            id: txId,
            commit: function commit() {
              client.commit(txId);
            },
            abort: function abort() {
              client.abort(txId);
            }
          };
        }
      }, {
        key: "commit",
        value: function commit(transactionId) {
          this._transmit({
            command: 'COMMIT',
            headers: {
              transaction: transactionId
            }
          });
        }
      }, {
        key: "abort",
        value: function abort(transactionId) {
          this._transmit({
            command: 'ABORT',
            headers: {
              transaction: transactionId
            }
          });
        }
      }, {
        key: "ack",
        value: function ack(messageId, subscriptionId) {
          var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          headers = Object.assign({}, headers);

          if (this._connectedVersion === _versions__WEBPACK_IMPORTED_MODULE_4__["Versions"].V1_2) {
            headers.id = messageId;
          } else {
            headers['message-id'] = messageId;
          }

          headers.subscription = subscriptionId;

          this._transmit({
            command: 'ACK',
            headers: headers
          });
        }
      }, {
        key: "nack",
        value: function nack(messageId, subscriptionId) {
          var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          headers = Object.assign({}, headers);

          if (this._connectedVersion === _versions__WEBPACK_IMPORTED_MODULE_4__["Versions"].V1_2) {
            headers.id = messageId;
          } else {
            headers['message-id'] = messageId;
          }

          headers.subscription = subscriptionId;
          return this._transmit({
            command: 'NACK',
            headers: headers
          });
        }
      }]);

      return StompHandler;
    }(); //# sourceMappingURL=stomp-handler.js.map

    /***/

  },

  /***/
  "./node_modules/@stomp/stompjs/esm6/stomp-headers.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@stomp/stompjs/esm6/stomp-headers.js ***!
    \***********************************************************/

  /*! exports provided: StompHeaders */

  /***/
  function node_modulesStompStompjsEsm6StompHeadersJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StompHeaders", function () {
      return StompHeaders;
    });
    /**
     * STOMP headers. Many functions calls will accept headers as parameters.
     * The headers sent by Broker will be available as [IFrame#headers]{@link IFrame#headers}.
     *
     * `key` and `value` must be valid strings.
     * In addition, `key` must not contain `CR`, `LF`, or `:`.
     *
     * Part of `@stomp/stompjs`.
     */


    var StompHeaders = function StompHeaders() {
      _classCallCheck(this, StompHeaders);
    }; //# sourceMappingURL=stomp-headers.js.map

    /***/

  },

  /***/
  "./node_modules/@stomp/stompjs/esm6/stomp-subscription.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@stomp/stompjs/esm6/stomp-subscription.js ***!
    \****************************************************************/

  /*! exports provided: StompSubscription */

  /***/
  function node_modulesStompStompjsEsm6StompSubscriptionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StompSubscription", function () {
      return StompSubscription;
    });
    /**
     * Call [Client#subscribe]{@link Client#subscribe} to create a StompSubscription.
     *
     * Part of `@stomp/stompjs`.
     */


    var StompSubscription = function StompSubscription() {
      _classCallCheck(this, StompSubscription);
    }; //# sourceMappingURL=stomp-subscription.js.map

    /***/

  },

  /***/
  "./node_modules/@stomp/stompjs/esm6/types.js":
  /*!***************************************************!*\
    !*** ./node_modules/@stomp/stompjs/esm6/types.js ***!
    \***************************************************/

  /*! exports provided: StompSocketState, ActivationState */

  /***/
  function node_modulesStompStompjsEsm6TypesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StompSocketState", function () {
      return StompSocketState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivationState", function () {
      return ActivationState;
    });
    /**
     * Possible states for the IStompSocket
     */


    var StompSocketState;

    (function (StompSocketState) {
      StompSocketState[StompSocketState["CONNECTING"] = 0] = "CONNECTING";
      StompSocketState[StompSocketState["OPEN"] = 1] = "OPEN";
      StompSocketState[StompSocketState["CLOSING"] = 2] = "CLOSING";
      StompSocketState[StompSocketState["CLOSED"] = 3] = "CLOSED";
    })(StompSocketState || (StompSocketState = {}));
    /**
     * Possible activation state
     */


    var ActivationState;

    (function (ActivationState) {
      ActivationState[ActivationState["ACTIVE"] = 0] = "ACTIVE";
      ActivationState[ActivationState["DEACTIVATING"] = 1] = "DEACTIVATING";
      ActivationState[ActivationState["INACTIVE"] = 2] = "INACTIVE";
    })(ActivationState || (ActivationState = {})); //# sourceMappingURL=types.js.map

    /***/

  },

  /***/
  "./node_modules/@stomp/stompjs/esm6/versions.js":
  /*!******************************************************!*\
    !*** ./node_modules/@stomp/stompjs/esm6/versions.js ***!
    \******************************************************/

  /*! exports provided: Versions */

  /***/
  function node_modulesStompStompjsEsm6VersionsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Versions", function () {
      return Versions;
    });
    /**
     * Supported STOMP versions
     *
     * Part of `@stomp/stompjs`.
     */


    var Versions = /*#__PURE__*/function () {
      /**
       * Takes an array of string of versions, typical elements '1.0', '1.1', or '1.2'
       *
       * You will an instance if this class if you want to override supported versions to be declared during
       * STOMP handshake.
       */
      function Versions(versions) {
        _classCallCheck(this, Versions);

        this.versions = versions;
      }
      /**
       * Used as part of CONNECT STOMP Frame
       */


      _createClass(Versions, [{
        key: "supportedVersions",
        value: function supportedVersions() {
          return this.versions.join(',');
        }
        /**
         * Used while creating a WebSocket
         */

      }, {
        key: "protocolVersions",
        value: function protocolVersions() {
          return this.versions.map(function (x) {
            return "v".concat(x.replace('.', ''), ".stomp");
          });
        }
      }]);

      return Versions;
    }();
    /**
     * Indicates protocol version 1.0
     */


    Versions.V1_0 = '1.0';
    /**
     * Indicates protocol version 1.1
     */

    Versions.V1_1 = '1.1';
    /**
     * Indicates protocol version 1.2
     */

    Versions.V1_2 = '1.2';
    /**
     * @internal
     */

    Versions["default"] = new Versions([Versions.V1_0, Versions.V1_1, Versions.V1_2]); //# sourceMappingURL=versions.js.map

    /***/
  },

  /***/
  "./node_modules/inherits/inherits_browser.js":
  /*!***************************************************!*\
    !*** ./node_modules/inherits/inherits_browser.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesInheritsInherits_browserJs(module, exports) {
    if (typeof Object.create === 'function') {
      // implementation from standard node.js 'util' module
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      // old school shim for old browsers
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;

          var TempCtor = function TempCtor() {};

          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
    /***/

  },

  /***/
  "./node_modules/json3/lib/json3.js":
  /*!*****************************************!*\
    !*** ./node_modules/json3/lib/json3.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesJson3LibJson3Js(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function (module) {
      var __WEBPACK_AMD_DEFINE_RESULT__;
      /*! JSON v3.3.2 | https://bestiejs.github.io/json3 | Copyright 2012-2015, Kit Cambridge, Benjamin Tan | http://kit.mit-license.org */


      ;
      (function () {
        // Detect the `define` function exposed by asynchronous module loaders. The
        // strict `define` check is necessary for compatibility with `r.js`.
        var isLoader = true && __webpack_require__(
        /*! !webpack amd options */
        "./node_modules/webpack/buildin/amd-options.js"); // A set of types used to distinguish objects from primitives.


        var objectTypes = {
          "function": true,
          "object": true
        }; // Detect the `exports` object exposed by CommonJS implementations.

        var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports; // Use the `global` object exposed by Node (including Browserify via
        // `insert-module-globals`), Narwhal, and Ringo as the default context,
        // and the `window` object in browsers. Rhino exports a `global` function
        // instead.

        var root = objectTypes[typeof window] && window || this,
            freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

        if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
          root = freeGlobal;
        } // Public: Initializes JSON 3 using the given `context` object, attaching the
        // `stringify` and `parse` functions to the specified `exports` object.


        function runInContext(context, exports) {
          context || (context = root.Object());
          exports || (exports = root.Object()); // Native constructor aliases.

          var Number = context.Number || root.Number,
              String = context.String || root.String,
              Object = context.Object || root.Object,
              Date = context.Date || root.Date,
              SyntaxError = context.SyntaxError || root.SyntaxError,
              TypeError = context.TypeError || root.TypeError,
              Math = context.Math || root.Math,
              nativeJSON = context.JSON || root.JSON; // Delegate to the native `stringify` and `parse` implementations.

          if (typeof nativeJSON == "object" && nativeJSON) {
            exports.stringify = nativeJSON.stringify;
            exports.parse = nativeJSON.parse;
          } // Convenience aliases.


          var objectProto = Object.prototype,
              getClass = objectProto.toString,
              isProperty = objectProto.hasOwnProperty,
              undefined; // Internal: Contains `try...catch` logic used by other functions.
          // This prevents other functions from being deoptimized.

          function attempt(func, errorFunc) {
            try {
              func();
            } catch (exception) {
              if (errorFunc) {
                errorFunc();
              }
            }
          } // Test the `Date#getUTC*` methods. Based on work by @Yaffle.


          var isExtended = new Date(-3509827334573292);
          attempt(function () {
            // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
            // results for certain dates in Opera >= 10.53.
            isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 && isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
          }); // Internal: Determines whether the native `JSON.stringify` and `parse`
          // implementations are spec-compliant. Based on work by Ken Snyder.

          function has(name) {
            if (has[name] != null) {
              // Return cached feature test result.
              return has[name];
            }

            var isSupported;

            if (name == "bug-string-char-index") {
              // IE <= 7 doesn't support accessing string characters using square
              // bracket notation. IE 8 only supports this for primitives.
              isSupported = "a"[0] != "a";
            } else if (name == "json") {
              // Indicates whether both `JSON.stringify` and `JSON.parse` are
              // supported.
              isSupported = has("json-stringify") && has("date-serialization") && has("json-parse");
            } else if (name == "date-serialization") {
              // Indicates whether `Date`s can be serialized accurately by `JSON.stringify`.
              isSupported = has("json-stringify") && isExtended;

              if (isSupported) {
                var stringify = exports.stringify;
                attempt(function () {
                  isSupported = // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
                  // serialize extended years.
                  stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' && // The milliseconds are optional in ES 5, but required in 5.1.
                  stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' && // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                  // four-digit years instead of six-digit years. Credits: @Yaffle.
                  stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
                  // values less than 1000. Credits: @Yaffle.
                  stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
                });
              }
            } else {
              var value,
                  serialized = "{\"a\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}"; // Test `JSON.stringify`.

              if (name == "json-stringify") {
                var stringify = exports.stringify,
                    stringifySupported = typeof stringify == "function";

                if (stringifySupported) {
                  // A test function object with a custom `toJSON` method.
                  (value = function value() {
                    return 1;
                  }).toJSON = value;
                  attempt(function () {
                    stringifySupported = // Firefox 3.1b1 and b2 serialize string, number, and boolean
                    // primitives as object literals.
                    stringify(0) === "0" && // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                    // literals.
                    stringify(new Number()) === "0" && stringify(new String()) == '""' && // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                    // does not define a canonical JSON representation (this applies to
                    // objects with `toJSON` properties as well, *unless* they are nested
                    // within an object or array).
                    stringify(getClass) === undefined && // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                    // FF 3.1b3 pass this test.
                    stringify(undefined) === undefined && // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                    // respectively, if the value is omitted entirely.
                    stringify() === undefined && // FF 3.1b1, 2 throw an error if the given value is not a number,
                    // string, array, object, Boolean, or `null` literal. This applies to
                    // objects with custom `toJSON` methods as well, unless they are nested
                    // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                    // methods entirely.
                    stringify(value) === "1" && stringify([value]) == "[1]" && // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                    // `"[null]"`.
                    stringify([undefined]) == "[null]" && // YUI 3.0.0b1 fails to serialize `null` literals.
                    stringify(null) == "null" && // FF 3.1b1, 2 halts serialization if an array contains a function:
                    // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                    // elides non-JSON values from objects and arrays, unless they
                    // define custom `toJSON` methods.
                    stringify([undefined, getClass, null]) == "[null,null,null]" && // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                    // where character escape codes are expected (e.g., `\b` => `\u0008`).
                    stringify({
                      "a": [value, true, false, null, "\x00\b\n\f\r\t"]
                    }) == serialized && // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                    stringify(null, value) === "1" && stringify([1, 2], null, 1) == "[\n 1,\n 2\n]";
                  }, function () {
                    stringifySupported = false;
                  });
                }

                isSupported = stringifySupported;
              } // Test `JSON.parse`.


              if (name == "json-parse") {
                var parse = exports.parse,
                    parseSupported;

                if (typeof parse == "function") {
                  attempt(function () {
                    // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
                    // Conforming implementations should also coerce the initial argument to
                    // a string prior to parsing.
                    if (parse("0") === 0 && !parse(false)) {
                      // Simple parsing test.
                      value = parse(serialized);
                      parseSupported = value["a"].length == 5 && value["a"][0] === 1;

                      if (parseSupported) {
                        attempt(function () {
                          // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                          parseSupported = !parse('"\t"');
                        });

                        if (parseSupported) {
                          attempt(function () {
                            // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                            // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                            // certain octal literals.
                            parseSupported = parse("01") !== 1;
                          });
                        }

                        if (parseSupported) {
                          attempt(function () {
                            // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                            // points. These environments, along with FF 3.1b1 and 2,
                            // also allow trailing commas in JSON objects and arrays.
                            parseSupported = parse("1.") !== 1;
                          });
                        }
                      }
                    }
                  }, function () {
                    parseSupported = false;
                  });
                }

                isSupported = parseSupported;
              }
            }

            return has[name] = !!isSupported;
          }

          has["bug-string-char-index"] = has["date-serialization"] = has["json"] = has["json-stringify"] = has["json-parse"] = null;

          if (!has("json")) {
            // Common `[[Class]]` name aliases.
            var functionClass = "[object Function]",
                dateClass = "[object Date]",
                numberClass = "[object Number]",
                stringClass = "[object String]",
                arrayClass = "[object Array]",
                booleanClass = "[object Boolean]"; // Detect incomplete support for accessing string characters by index.

            var charIndexBuggy = has("bug-string-char-index"); // Internal: Normalizes the `for...in` iteration algorithm across
            // environments. Each enumerated key is yielded to a `callback` function.

            var _forOwn = function forOwn(object, callback) {
              var size = 0,
                  Properties,
                  dontEnums,
                  property; // Tests for bugs in the current environment's `for...in` algorithm. The
              // `valueOf` property inherits the non-enumerable flag from
              // `Object.prototype` in older versions of IE, Netscape, and Mozilla.

              (Properties = function Properties() {
                this.valueOf = 0;
              }).prototype.valueOf = 0; // Iterate over a new instance of the `Properties` class.

              dontEnums = new Properties();

              for (property in dontEnums) {
                // Ignore all properties inherited from `Object.prototype`.
                if (isProperty.call(dontEnums, property)) {
                  size++;
                }
              }

              Properties = dontEnums = null; // Normalize the iteration algorithm.

              if (!size) {
                // A list of non-enumerable properties inherited from `Object.prototype`.
                dontEnums = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"]; // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
                // properties.

                _forOwn = function forOwn(object, callback) {
                  var isFunction = getClass.call(object) == functionClass,
                      property,
                      length;
                  var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;

                  for (property in object) {
                    // Gecko <= 1.0 enumerates the `prototype` property of functions under
                    // certain conditions; IE does not.
                    if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                      callback(property);
                    }
                  } // Manually invoke the callback for each non-enumerable property.


                  for (length = dontEnums.length; property = dontEnums[--length];) {
                    if (hasProperty.call(object, property)) {
                      callback(property);
                    }
                  }
                };
              } else {
                // No bugs detected; use the standard `for...in` algorithm.
                _forOwn = function forOwn(object, callback) {
                  var isFunction = getClass.call(object) == functionClass,
                      property,
                      isConstructor;

                  for (property in object) {
                    if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                      callback(property);
                    }
                  } // Manually invoke the callback for the `constructor` property due to
                  // cross-environment inconsistencies.


                  if (isConstructor || isProperty.call(object, property = "constructor")) {
                    callback(property);
                  }
                };
              }

              return _forOwn(object, callback);
            }; // Public: Serializes a JavaScript `value` as a JSON string. The optional
            // `filter` argument may specify either a function that alters how object and
            // array members are serialized, or an array of strings and numbers that
            // indicates which properties should be serialized. The optional `width`
            // argument may be either a string or number that specifies the indentation
            // level of the output.


            if (!has("json-stringify") && !has("date-serialization")) {
              // Internal: A map of control characters and their escaped equivalents.
              var Escapes = {
                92: "\\\\",
                34: '\\"',
                8: "\\b",
                12: "\\f",
                10: "\\n",
                13: "\\r",
                9: "\\t"
              }; // Internal: Converts `value` into a zero-padded string such that its
              // length is at least equal to `width`. The `width` must be <= 6.

              var leadingZeroes = "000000";

              var toPaddedString = function toPaddedString(width, value) {
                // The `|| 0` expression is necessary to work around a bug in
                // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
                return (leadingZeroes + (value || 0)).slice(-width);
              }; // Internal: Serializes a date object.


              var _serializeDate = function serializeDate(value) {
                var getData, year, month, date, time, hours, minutes, seconds, milliseconds; // Define additional utility methods if the `Date` methods are buggy.

                if (!isExtended) {
                  var floor = Math.floor; // A mapping between the months of the year and the number of days between
                  // January 1st and the first of the respective month.

                  var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]; // Internal: Calculates the number of days between the Unix epoch and the
                  // first day of the given month.

                  var getDay = function getDay(year, month) {
                    return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
                  };

                  getData = function getData(value) {
                    // Manually compute the year, month, date, hours, minutes,
                    // seconds, and milliseconds if the `getUTC*` methods are
                    // buggy. Adapted from @Yaffle's `date-shim` project.
                    date = floor(value / 864e5);

                    for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++) {
                      ;
                    }

                    for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++) {
                      ;
                    }

                    date = 1 + date - getDay(year, month); // The `time` value specifies the time within the day (see ES
                    // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                    // to compute `A modulo B`, as the `%` operator does not
                    // correspond to the `modulo` operation for negative numbers.

                    time = (value % 864e5 + 864e5) % 864e5; // The hours, minutes, seconds, and milliseconds are obtained by
                    // decomposing the time within the day. See section 15.9.1.10.

                    hours = floor(time / 36e5) % 24;
                    minutes = floor(time / 6e4) % 60;
                    seconds = floor(time / 1e3) % 60;
                    milliseconds = time % 1e3;
                  };
                } else {
                  getData = function getData(value) {
                    year = value.getUTCFullYear();
                    month = value.getUTCMonth();
                    date = value.getUTCDate();
                    hours = value.getUTCHours();
                    minutes = value.getUTCMinutes();
                    seconds = value.getUTCSeconds();
                    milliseconds = value.getUTCMilliseconds();
                  };
                }

                _serializeDate = function serializeDate(value) {
                  if (value > -1 / 0 && value < 1 / 0) {
                    // Dates are serialized according to the `Date#toJSON` method
                    // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
                    // for the ISO 8601 date time string format.
                    getData(value); // Serialize extended years correctly.

                    value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) + // Months, dates, hours, minutes, and seconds should have two
                    // digits; milliseconds should have three.
                    "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) + // Milliseconds are optional in ES 5.0, but required in 5.1.
                    "." + toPaddedString(3, milliseconds) + "Z";
                    year = month = date = hours = minutes = seconds = milliseconds = null;
                  } else {
                    value = null;
                  }

                  return value;
                };

                return _serializeDate(value);
              }; // For environments with `JSON.stringify` but buggy date serialization,
              // we override the native `Date#toJSON` implementation with a
              // spec-compliant one.


              if (has("json-stringify") && !has("date-serialization")) {
                // Internal: the `Date#toJSON` implementation used to override the native one.
                var dateToJSON = function dateToJSON(key) {
                  return _serializeDate(this);
                }; // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.


                var nativeStringify = exports.stringify;

                exports.stringify = function (source, filter, width) {
                  var nativeToJSON = Date.prototype.toJSON;
                  Date.prototype.toJSON = dateToJSON;
                  var result = nativeStringify(source, filter, width);
                  Date.prototype.toJSON = nativeToJSON;
                  return result;
                };
              } else {
                // Internal: Double-quotes a string `value`, replacing all ASCII control
                // characters (characters with code unit values between 0 and 31) with
                // their escaped equivalents. This is an implementation of the
                // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
                var unicodePrefix = "\\u00";

                var escapeChar = function escapeChar(character) {
                  var charCode = character.charCodeAt(0),
                      escaped = Escapes[charCode];

                  if (escaped) {
                    return escaped;
                  }

                  return unicodePrefix + toPaddedString(2, charCode.toString(16));
                };

                var reEscape = /[\x00-\x1f\x22\x5c]/g;

                var quote = function quote(value) {
                  reEscape.lastIndex = 0;
                  return '"' + (reEscape.test(value) ? value.replace(reEscape, escapeChar) : value) + '"';
                }; // Internal: Recursively serializes an object. Implements the
                // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.


                var serialize = function serialize(property, object, callback, properties, whitespace, indentation, stack) {
                  var value, type, className, results, element, index, length, prefix, result;
                  attempt(function () {
                    // Necessary for host object support.
                    value = object[property];
                  });

                  if (typeof value == "object" && value) {
                    if (value.getUTCFullYear && getClass.call(value) == dateClass && value.toJSON === Date.prototype.toJSON) {
                      value = _serializeDate(value);
                    } else if (typeof value.toJSON == "function") {
                      value = value.toJSON(property);
                    }
                  }

                  if (callback) {
                    // If a replacement function was provided, call it to obtain the value
                    // for serialization.
                    value = callback.call(object, property, value);
                  } // Exit early if value is `undefined` or `null`.


                  if (value == undefined) {
                    return value === undefined ? value : "null";
                  }

                  type = typeof value; // Only call `getClass` if the value is an object.

                  if (type == "object") {
                    className = getClass.call(value);
                  }

                  switch (className || type) {
                    case "boolean":
                    case booleanClass:
                      // Booleans are represented literally.
                      return "" + value;

                    case "number":
                    case numberClass:
                      // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
                      // `"null"`.
                      return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";

                    case "string":
                    case stringClass:
                      // Strings are double-quoted and escaped.
                      return quote("" + value);
                  } // Recursively serialize objects and arrays.


                  if (typeof value == "object") {
                    // Check for cyclic structures. This is a linear search; performance
                    // is inversely proportional to the number of unique nested objects.
                    for (length = stack.length; length--;) {
                      if (stack[length] === value) {
                        // Cyclic structures cannot be serialized by `JSON.stringify`.
                        throw TypeError();
                      }
                    } // Add the object to the stack of traversed objects.


                    stack.push(value);
                    results = []; // Save the current indentation level and indent one additional level.

                    prefix = indentation;
                    indentation += whitespace;

                    if (className == arrayClass) {
                      // Recursively serialize array elements.
                      for (index = 0, length = value.length; index < length; index++) {
                        element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                        results.push(element === undefined ? "null" : element);
                      }

                      result = results.length ? whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : "[" + results.join(",") + "]" : "[]";
                    } else {
                      // Recursively serialize object members. Members are selected from
                      // either a user-specified list of property names, or the object
                      // itself.
                      _forOwn(properties || value, function (property) {
                        var element = serialize(property, value, callback, properties, whitespace, indentation, stack);

                        if (element !== undefined) {
                          // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                          // is not the empty string, let `member` {quote(property) + ":"}
                          // be the concatenation of `member` and the `space` character."
                          // The "`space` character" refers to the literal space
                          // character, not the `space` {width} argument provided to
                          // `JSON.stringify`.
                          results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                        }
                      });

                      result = results.length ? whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : "{" + results.join(",") + "}" : "{}";
                    } // Remove the object from the traversed object stack.


                    stack.pop();
                    return result;
                  }
                }; // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.


                exports.stringify = function (source, filter, width) {
                  var whitespace, callback, properties, className;

                  if (objectTypes[typeof filter] && filter) {
                    className = getClass.call(filter);

                    if (className == functionClass) {
                      callback = filter;
                    } else if (className == arrayClass) {
                      // Convert the property names array into a makeshift set.
                      properties = {};

                      for (var index = 0, length = filter.length, value; index < length;) {
                        value = filter[index++];
                        className = getClass.call(value);

                        if (className == "[object String]" || className == "[object Number]") {
                          properties[value] = 1;
                        }
                      }
                    }
                  }

                  if (width) {
                    className = getClass.call(width);

                    if (className == numberClass) {
                      // Convert the `width` to an integer and create a string containing
                      // `width` number of space characters.
                      if ((width -= width % 1) > 0) {
                        if (width > 10) {
                          width = 10;
                        }

                        for (whitespace = ""; whitespace.length < width;) {
                          whitespace += " ";
                        }
                      }
                    } else if (className == stringClass) {
                      whitespace = width.length <= 10 ? width : width.slice(0, 10);
                    }
                  } // Opera <= 7.54u2 discards the values associated with empty string keys
                  // (`""`) only if they are used directly within an object member list
                  // (e.g., `!("" in { "": 1})`).


                  return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
                };
              }
            } // Public: Parses a JSON source string.


            if (!has("json-parse")) {
              var fromCharCode = String.fromCharCode; // Internal: A map of escaped control characters and their unescaped
              // equivalents.

              var Unescapes = {
                92: "\\",
                34: '"',
                47: "/",
                98: "\b",
                116: "\t",
                110: "\n",
                102: "\f",
                114: "\r"
              }; // Internal: Stores the parser state.

              var Index, Source; // Internal: Resets the parser state and throws a `SyntaxError`.

              var abort = function abort() {
                Index = Source = null;
                throw SyntaxError();
              }; // Internal: Returns the next token, or `"$"` if the parser has reached
              // the end of the source string. A token may be a string, number, `null`
              // literal, or Boolean literal.


              var lex = function lex() {
                var source = Source,
                    length = source.length,
                    value,
                    begin,
                    position,
                    isSigned,
                    charCode;

                while (Index < length) {
                  charCode = source.charCodeAt(Index);

                  switch (charCode) {
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                      // Skip whitespace tokens, including tabs, carriage returns, line
                      // feeds, and space characters.
                      Index++;
                      break;

                    case 123:
                    case 125:
                    case 91:
                    case 93:
                    case 58:
                    case 44:
                      // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                      // the current position.
                      value = charIndexBuggy ? source.charAt(Index) : source[Index];
                      Index++;
                      return value;

                    case 34:
                      // `"` delimits a JSON string; advance to the next character and
                      // begin parsing the string. String tokens are prefixed with the
                      // sentinel `@` character to distinguish them from punctuators and
                      // end-of-string tokens.
                      for (value = "@", Index++; Index < length;) {
                        charCode = source.charCodeAt(Index);

                        if (charCode < 32) {
                          // Unescaped ASCII control characters (those with a code unit
                          // less than the space character) are not permitted.
                          abort();
                        } else if (charCode == 92) {
                          // A reverse solidus (`\`) marks the beginning of an escaped
                          // control character (including `"`, `\`, and `/`) or Unicode
                          // escape sequence.
                          charCode = source.charCodeAt(++Index);

                          switch (charCode) {
                            case 92:
                            case 34:
                            case 47:
                            case 98:
                            case 116:
                            case 110:
                            case 102:
                            case 114:
                              // Revive escaped control characters.
                              value += Unescapes[charCode];
                              Index++;
                              break;

                            case 117:
                              // `\u` marks the beginning of a Unicode escape sequence.
                              // Advance to the first character and validate the
                              // four-digit code point.
                              begin = ++Index;

                              for (position = Index + 4; Index < position; Index++) {
                                charCode = source.charCodeAt(Index); // A valid sequence comprises four hexdigits (case-
                                // insensitive) that form a single hexadecimal value.

                                if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                                  // Invalid Unicode escape sequence.
                                  abort();
                                }
                              } // Revive the escaped character.


                              value += fromCharCode("0x" + source.slice(begin, Index));
                              break;

                            default:
                              // Invalid escape sequence.
                              abort();
                          }
                        } else {
                          if (charCode == 34) {
                            // An unescaped double-quote character marks the end of the
                            // string.
                            break;
                          }

                          charCode = source.charCodeAt(Index);
                          begin = Index; // Optimize for the common case where a string is valid.

                          while (charCode >= 32 && charCode != 92 && charCode != 34) {
                            charCode = source.charCodeAt(++Index);
                          } // Append the string as-is.


                          value += source.slice(begin, Index);
                        }
                      }

                      if (source.charCodeAt(Index) == 34) {
                        // Advance to the next character and return the revived string.
                        Index++;
                        return value;
                      } // Unterminated string.


                      abort();

                    default:
                      // Parse numbers and literals.
                      begin = Index; // Advance past the negative sign, if one is specified.

                      if (charCode == 45) {
                        isSigned = true;
                        charCode = source.charCodeAt(++Index);
                      } // Parse an integer or floating-point value.


                      if (charCode >= 48 && charCode <= 57) {
                        // Leading zeroes are interpreted as octal literals.
                        if (charCode == 48 && (charCode = source.charCodeAt(Index + 1), charCode >= 48 && charCode <= 57)) {
                          // Illegal octal literal.
                          abort();
                        }

                        isSigned = false; // Parse the integer component.

                        for (; Index < length && (charCode = source.charCodeAt(Index), charCode >= 48 && charCode <= 57); Index++) {
                          ;
                        } // Floats cannot contain a leading decimal point; however, this
                        // case is already accounted for by the parser.


                        if (source.charCodeAt(Index) == 46) {
                          position = ++Index; // Parse the decimal component.

                          for (; position < length; position++) {
                            charCode = source.charCodeAt(position);

                            if (charCode < 48 || charCode > 57) {
                              break;
                            }
                          }

                          if (position == Index) {
                            // Illegal trailing decimal.
                            abort();
                          }

                          Index = position;
                        } // Parse exponents. The `e` denoting the exponent is
                        // case-insensitive.


                        charCode = source.charCodeAt(Index);

                        if (charCode == 101 || charCode == 69) {
                          charCode = source.charCodeAt(++Index); // Skip past the sign following the exponent, if one is
                          // specified.

                          if (charCode == 43 || charCode == 45) {
                            Index++;
                          } // Parse the exponential component.


                          for (position = Index; position < length; position++) {
                            charCode = source.charCodeAt(position);

                            if (charCode < 48 || charCode > 57) {
                              break;
                            }
                          }

                          if (position == Index) {
                            // Illegal empty exponent.
                            abort();
                          }

                          Index = position;
                        } // Coerce the parsed value to a JavaScript number.


                        return +source.slice(begin, Index);
                      } // A negative sign may only precede numbers.


                      if (isSigned) {
                        abort();
                      } // `true`, `false`, and `null` literals.


                      var temp = source.slice(Index, Index + 4);

                      if (temp == "true") {
                        Index += 4;
                        return true;
                      } else if (temp == "fals" && source.charCodeAt(Index + 4) == 101) {
                        Index += 5;
                        return false;
                      } else if (temp == "null") {
                        Index += 4;
                        return null;
                      } // Unrecognized token.


                      abort();
                  }
                } // Return the sentinel `$` character if the parser has reached the end
                // of the source string.


                return "$";
              }; // Internal: Parses a JSON `value` token.


              var get = function get(value) {
                var results, hasMembers;

                if (value == "$") {
                  // Unexpected end of input.
                  abort();
                }

                if (typeof value == "string") {
                  if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
                    // Remove the sentinel `@` character.
                    return value.slice(1);
                  } // Parse object and array literals.


                  if (value == "[") {
                    // Parses a JSON array, returning a new JavaScript array.
                    results = [];

                    for (;;) {
                      value = lex(); // A closing square bracket marks the end of the array literal.

                      if (value == "]") {
                        break;
                      } // If the array literal contains elements, the current token
                      // should be a comma separating the previous element from the
                      // next.


                      if (hasMembers) {
                        if (value == ",") {
                          value = lex();

                          if (value == "]") {
                            // Unexpected trailing `,` in array literal.
                            abort();
                          }
                        } else {
                          // A `,` must separate each array element.
                          abort();
                        }
                      } else {
                        hasMembers = true;
                      } // Elisions and leading commas are not permitted.


                      if (value == ",") {
                        abort();
                      }

                      results.push(get(value));
                    }

                    return results;
                  } else if (value == "{") {
                    // Parses a JSON object, returning a new JavaScript object.
                    results = {};

                    for (;;) {
                      value = lex(); // A closing curly brace marks the end of the object literal.

                      if (value == "}") {
                        break;
                      } // If the object literal contains members, the current token
                      // should be a comma separator.


                      if (hasMembers) {
                        if (value == ",") {
                          value = lex();

                          if (value == "}") {
                            // Unexpected trailing `,` in object literal.
                            abort();
                          }
                        } else {
                          // A `,` must separate each object member.
                          abort();
                        }
                      } else {
                        hasMembers = true;
                      } // Leading commas are not permitted, object property names must be
                      // double-quoted strings, and a `:` must separate each property
                      // name and value.


                      if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                        abort();
                      }

                      results[value.slice(1)] = get(lex());
                    }

                    return results;
                  } // Unexpected token encountered.


                  abort();
                }

                return value;
              }; // Internal: Updates a traversed object member.


              var update = function update(source, property, callback) {
                var element = walk(source, property, callback);

                if (element === undefined) {
                  delete source[property];
                } else {
                  source[property] = element;
                }
              }; // Internal: Recursively traverses a parsed JSON object, invoking the
              // `callback` function for each value. This is an implementation of the
              // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.


              var walk = function walk(source, property, callback) {
                var value = source[property],
                    length;

                if (typeof value == "object" && value) {
                  // `forOwn` can't be used to traverse an array in Opera <= 8.54
                  // because its `Object#hasOwnProperty` implementation returns `false`
                  // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
                  if (getClass.call(value) == arrayClass) {
                    for (length = value.length; length--;) {
                      update(getClass, _forOwn, value, length, callback);
                    }
                  } else {
                    _forOwn(value, function (property) {
                      update(value, property, callback);
                    });
                  }
                }

                return callback.call(source, property, value);
              }; // Public: `JSON.parse`. See ES 5.1 section 15.12.2.


              exports.parse = function (source, callback) {
                var result, value;
                Index = 0;
                Source = "" + source;
                result = get(lex()); // If a JSON string contains multiple tokens, it is invalid.

                if (lex() != "$") {
                  abort();
                } // Reset the parser state.


                Index = Source = null;
                return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
              };
            }
          }

          exports.runInContext = runInContext;
          return exports;
        }

        if (freeExports && !isLoader) {
          // Export for CommonJS environments.
          runInContext(root, freeExports);
        } else {
          // Export for web browsers and JavaScript engines.
          var nativeJSON = root.JSON,
              previousJSON = root.JSON3,
              isRestored = false;
          var JSON3 = runInContext(root, root.JSON3 = {
            // Public: Restores the original value of the global `JSON` object and
            // returns a reference to the `JSON3` object.
            "noConflict": function noConflict() {
              if (!isRestored) {
                isRestored = true;
                root.JSON = nativeJSON;
                root.JSON3 = previousJSON;
                nativeJSON = previousJSON = null;
              }

              return JSON3;
            }
          });
          root.JSON = {
            "parse": JSON3.parse,
            "stringify": JSON3.stringify
          };
        } // Export for asynchronous module loaders.


        if (isLoader) {
          !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return JSON3;
          }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }
      }).call(this);
      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(
    /*! ./../../webpack/buildin/module.js */
    "./node_modules/webpack/buildin/module.js")(module));
    /***/
  },

  /***/
  "./node_modules/ms/index.js":
  /*!**********************************!*\
    !*** ./node_modules/ms/index.js ***!
    \**********************************/

  /*! no static exports found */

  /***/
  function node_modulesMsIndexJs(module, exports) {
    /**
     * Helpers.
     */
    var s = 1000;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    /**
     * Parse or format the given `val`.
     *
     * Options:
     *
     *  - `long` verbose formatting [false]
     *
     * @param {String|Number} val
     * @param {Object} [options]
     * @throws {Error} throw an error if val is not a non-empty string or a number
     * @return {String|Number}
     * @api public
     */

    module.exports = function (val, options) {
      options = options || {};
      var type = typeof val;

      if (type === 'string' && val.length > 0) {
        return parse(val);
      } else if (type === 'number' && isFinite(val)) {
        return options["long"] ? fmtLong(val) : fmtShort(val);
      }

      throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
    };
    /**
     * Parse the given `str` and return milliseconds.
     *
     * @param {String} str
     * @return {Number}
     * @api private
     */


    function parse(str) {
      str = String(str);

      if (str.length > 100) {
        return;
      }

      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

      if (!match) {
        return;
      }

      var n = parseFloat(match[1]);
      var type = (match[2] || 'ms').toLowerCase();

      switch (type) {
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
          return n * y;

        case 'weeks':
        case 'week':
        case 'w':
          return n * w;

        case 'days':
        case 'day':
        case 'd':
          return n * d;

        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
          return n * h;

        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
          return n * m;

        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
          return n * s;

        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
          return n;

        default:
          return undefined;
      }
    }
    /**
     * Short format for `ms`.
     *
     * @param {Number} ms
     * @return {String}
     * @api private
     */


    function fmtShort(ms) {
      var msAbs = Math.abs(ms);

      if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
      }

      if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
      }

      if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
      }

      if (msAbs >= s) {
        return Math.round(ms / s) + 's';
      }

      return ms + 'ms';
    }
    /**
     * Long format for `ms`.
     *
     * @param {Number} ms
     * @return {String}
     * @api private
     */


    function fmtLong(ms) {
      var msAbs = Math.abs(ms);

      if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
      }

      if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
      }

      if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
      }

      if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
      }

      return ms + ' ms';
    }
    /**
     * Pluralization helper.
     */


    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
    }
    /***/

  },

  /***/
  "./node_modules/querystringify/index.js":
  /*!**********************************************!*\
    !*** ./node_modules/querystringify/index.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesQuerystringifyIndexJs(module, exports, __webpack_require__) {
    "use strict";

    var has = Object.prototype.hasOwnProperty,
        undef;
    /**
     * Decode a URI encoded string.
     *
     * @param {String} input The URI encoded string.
     * @returns {String|Null} The decoded string.
     * @api private
     */

    function decode(input) {
      try {
        return decodeURIComponent(input.replace(/\+/g, ' '));
      } catch (e) {
        return null;
      }
    }
    /**
     * Attempts to encode a given input.
     *
     * @param {String} input The string that needs to be encoded.
     * @returns {String|Null} The encoded string.
     * @api private
     */


    function encode(input) {
      try {
        return encodeURIComponent(input);
      } catch (e) {
        return null;
      }
    }
    /**
     * Simple query string parser.
     *
     * @param {String} query The query string that needs to be parsed.
     * @returns {Object}
     * @api public
     */


    function querystring(query) {
      var parser = /([^=?#&]+)=?([^&]*)/g,
          result = {},
          part;

      while (part = parser.exec(query)) {
        var key = decode(part[1]),
            value = decode(part[2]); //
        // Prevent overriding of existing properties. This ensures that build-in
        // methods like `toString` or __proto__ are not overriden by malicious
        // querystrings.
        //
        // In the case if failed decoding, we want to omit the key/value pairs
        // from the result.
        //

        if (key === null || value === null || key in result) continue;
        result[key] = value;
      }

      return result;
    }
    /**
     * Transform a query string to an object.
     *
     * @param {Object} obj Object that should be transformed.
     * @param {String} prefix Optional prefix.
     * @returns {String}
     * @api public
     */


    function querystringify(obj, prefix) {
      prefix = prefix || '';
      var pairs = [],
          value,
          key; //
      // Optionally prefix with a '?' if needed
      //

      if ('string' !== typeof prefix) prefix = '?';

      for (key in obj) {
        if (has.call(obj, key)) {
          value = obj[key]; //
          // Edge cases where we actually want to encode the value to an empty
          // string instead of the stringified value.
          //

          if (!value && (value === null || value === undef || isNaN(value))) {
            value = '';
          }

          key = encode(key);
          value = encode(value); //
          // If we failed to encode the strings, we should bail out as we don't
          // want to add invalid strings to the query.
          //

          if (key === null || value === null) continue;
          pairs.push(key + '=' + value);
        }
      }

      return pairs.length ? prefix + pairs.join('&') : '';
    } //
    // Expose the module.
    //


    exports.stringify = querystringify;
    exports.parse = querystring;
    /***/
  },

  /***/
  "./node_modules/requires-port/index.js":
  /*!*********************************************!*\
    !*** ./node_modules/requires-port/index.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesRequiresPortIndexJs(module, exports, __webpack_require__) {
    "use strict";
    /**
     * Check if we're required to add a port number.
     *
     * @see https://url.spec.whatwg.org/#default-port
     * @param {Number|String} port Port number we need to check
     * @param {String} protocol Protocol we need to check against.
     * @returns {Boolean} Is it a default port for the given protocol
     * @api private
     */

    module.exports = function required(port, protocol) {
      protocol = protocol.split(':')[0];
      port = +port;
      if (!port) return false;

      switch (protocol) {
        case 'http':
        case 'ws':
          return port !== 80;

        case 'https':
        case 'wss':
          return port !== 443;

        case 'ftp':
          return port !== 21;

        case 'gopher':
          return port !== 70;

        case 'file':
          return false;
      }

      return port !== 0;
    };
    /***/

  },

  /***/
  "./node_modules/sockjs-client/lib/entry.js":
  /*!*************************************************!*\
    !*** ./node_modules/sockjs-client/lib/entry.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibEntryJs(module, exports, __webpack_require__) {
    "use strict";

    var transportList = __webpack_require__(
    /*! ./transport-list */
    "./node_modules/sockjs-client/lib/transport-list.js");

    module.exports = __webpack_require__(
    /*! ./main */
    "./node_modules/sockjs-client/lib/main.js")(transportList); // TODO can't get rid of this until all servers do

    if ('_sockjs_onload' in global) {
      setTimeout(global._sockjs_onload, 1);
    }
    /***/

  },

  /***/
  "./node_modules/sockjs-client/lib/event/close.js":
  /*!*******************************************************!*\
    !*** ./node_modules/sockjs-client/lib/event/close.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibEventCloseJs(module, exports, __webpack_require__) {
    "use strict";

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        Event = __webpack_require__(
    /*! ./event */
    "./node_modules/sockjs-client/lib/event/event.js");

    function CloseEvent() {
      Event.call(this);
      this.initEvent('close', false, false);
      this.wasClean = false;
      this.code = 0;
      this.reason = '';
    }

    inherits(CloseEvent, Event);
    module.exports = CloseEvent;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/event/emitter.js":
  /*!*********************************************************!*\
    !*** ./node_modules/sockjs-client/lib/event/emitter.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibEventEmitterJs(module, exports, __webpack_require__) {
    "use strict";

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        EventTarget = __webpack_require__(
    /*! ./eventtarget */
    "./node_modules/sockjs-client/lib/event/eventtarget.js");

    function EventEmitter() {
      EventTarget.call(this);
    }

    inherits(EventEmitter, EventTarget);

    EventEmitter.prototype.removeAllListeners = function (type) {
      if (type) {
        delete this._listeners[type];
      } else {
        this._listeners = {};
      }
    };

    EventEmitter.prototype.once = function (type, listener) {
      var self = this,
          fired = false;

      function g() {
        self.removeListener(type, g);

        if (!fired) {
          fired = true;
          listener.apply(this, arguments);
        }
      }

      this.on(type, g);
    };

    EventEmitter.prototype.emit = function () {
      var type = arguments[0];
      var listeners = this._listeners[type];

      if (!listeners) {
        return;
      } // equivalent of Array.prototype.slice.call(arguments, 1);


      var l = arguments.length;
      var args = new Array(l - 1);

      for (var ai = 1; ai < l; ai++) {
        args[ai - 1] = arguments[ai];
      }

      for (var i = 0; i < listeners.length; i++) {
        listeners[i].apply(this, args);
      }
    };

    EventEmitter.prototype.on = EventEmitter.prototype.addListener = EventTarget.prototype.addEventListener;
    EventEmitter.prototype.removeListener = EventTarget.prototype.removeEventListener;
    module.exports.EventEmitter = EventEmitter;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/event/event.js":
  /*!*******************************************************!*\
    !*** ./node_modules/sockjs-client/lib/event/event.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibEventEventJs(module, exports, __webpack_require__) {
    "use strict";

    function Event(eventType) {
      this.type = eventType;
    }

    Event.prototype.initEvent = function (eventType, canBubble, cancelable) {
      this.type = eventType;
      this.bubbles = canBubble;
      this.cancelable = cancelable;
      this.timeStamp = +new Date();
      return this;
    };

    Event.prototype.stopPropagation = function () {};

    Event.prototype.preventDefault = function () {};

    Event.CAPTURING_PHASE = 1;
    Event.AT_TARGET = 2;
    Event.BUBBLING_PHASE = 3;
    module.exports = Event;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/event/eventtarget.js":
  /*!*************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/event/eventtarget.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibEventEventtargetJs(module, exports, __webpack_require__) {
    "use strict";
    /* Simplified implementation of DOM2 EventTarget.
     *   http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget
     */

    function EventTarget() {
      this._listeners = {};
    }

    EventTarget.prototype.addEventListener = function (eventType, listener) {
      if (!(eventType in this._listeners)) {
        this._listeners[eventType] = [];
      }

      var arr = this._listeners[eventType]; // #4

      if (arr.indexOf(listener) === -1) {
        // Make a copy so as not to interfere with a current dispatchEvent.
        arr = arr.concat([listener]);
      }

      this._listeners[eventType] = arr;
    };

    EventTarget.prototype.removeEventListener = function (eventType, listener) {
      var arr = this._listeners[eventType];

      if (!arr) {
        return;
      }

      var idx = arr.indexOf(listener);

      if (idx !== -1) {
        if (arr.length > 1) {
          // Make a copy so as not to interfere with a current dispatchEvent.
          this._listeners[eventType] = arr.slice(0, idx).concat(arr.slice(idx + 1));
        } else {
          delete this._listeners[eventType];
        }

        return;
      }
    };

    EventTarget.prototype.dispatchEvent = function () {
      var event = arguments[0];
      var t = event.type; // equivalent of Array.prototype.slice.call(arguments, 0);

      var args = arguments.length === 1 ? [event] : Array.apply(null, arguments); // TODO: This doesn't match the real behavior; per spec, onfoo get
      // their place in line from the /first/ time they're set from
      // non-null. Although WebKit bumps it to the end every time it's
      // set.

      if (this['on' + t]) {
        this['on' + t].apply(this, args);
      }

      if (t in this._listeners) {
        // Grab a reference to the listeners list. removeEventListener may alter the list.
        var listeners = this._listeners[t];

        for (var i = 0; i < listeners.length; i++) {
          listeners[i].apply(this, args);
        }
      }
    };

    module.exports = EventTarget;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/event/trans-message.js":
  /*!***************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/event/trans-message.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibEventTransMessageJs(module, exports, __webpack_require__) {
    "use strict";

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        Event = __webpack_require__(
    /*! ./event */
    "./node_modules/sockjs-client/lib/event/event.js");

    function TransportMessageEvent(data) {
      Event.call(this);
      this.initEvent('message', false, false);
      this.data = data;
    }

    inherits(TransportMessageEvent, Event);
    module.exports = TransportMessageEvent;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/facade.js":
  /*!**************************************************!*\
    !*** ./node_modules/sockjs-client/lib/facade.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibFacadeJs(module, exports, __webpack_require__) {
    "use strict";

    var JSON3 = __webpack_require__(
    /*! json3 */
    "./node_modules/json3/lib/json3.js"),
        iframeUtils = __webpack_require__(
    /*! ./utils/iframe */
    "./node_modules/sockjs-client/lib/utils/iframe.js");

    function FacadeJS(transport) {
      this._transport = transport;
      transport.on('message', this._transportMessage.bind(this));
      transport.on('close', this._transportClose.bind(this));
    }

    FacadeJS.prototype._transportClose = function (code, reason) {
      iframeUtils.postMessage('c', JSON3.stringify([code, reason]));
    };

    FacadeJS.prototype._transportMessage = function (frame) {
      iframeUtils.postMessage('t', frame);
    };

    FacadeJS.prototype._send = function (data) {
      this._transport.send(data);
    };

    FacadeJS.prototype._close = function () {
      this._transport.close();

      this._transport.removeAllListeners();
    };

    module.exports = FacadeJS;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/iframe-bootstrap.js":
  /*!************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/iframe-bootstrap.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibIframeBootstrapJs(module, exports, __webpack_require__) {
    "use strict";

    var urlUtils = __webpack_require__(
    /*! ./utils/url */
    "./node_modules/sockjs-client/lib/utils/url.js"),
        eventUtils = __webpack_require__(
    /*! ./utils/event */
    "./node_modules/sockjs-client/lib/utils/event.js"),
        JSON3 = __webpack_require__(
    /*! json3 */
    "./node_modules/json3/lib/json3.js"),
        FacadeJS = __webpack_require__(
    /*! ./facade */
    "./node_modules/sockjs-client/lib/facade.js"),
        InfoIframeReceiver = __webpack_require__(
    /*! ./info-iframe-receiver */
    "./node_modules/sockjs-client/lib/info-iframe-receiver.js"),
        iframeUtils = __webpack_require__(
    /*! ./utils/iframe */
    "./node_modules/sockjs-client/lib/utils/iframe.js"),
        loc = __webpack_require__(
    /*! ./location */
    "./node_modules/sockjs-client/lib/location.js");

    var debug = function debug() {};

    if (true) {
      debug = __webpack_require__(
      /*! debug */
      "./node_modules/sockjs-client/node_modules/debug/src/browser.js")('sockjs-client:iframe-bootstrap');
    }

    module.exports = function (SockJS, availableTransports) {
      var transportMap = {};
      availableTransports.forEach(function (at) {
        if (at.facadeTransport) {
          transportMap[at.facadeTransport.transportName] = at.facadeTransport;
        }
      }); // hard-coded for the info iframe
      // TODO see if we can make this more dynamic

      transportMap[InfoIframeReceiver.transportName] = InfoIframeReceiver;
      var parentOrigin;
      /* eslint-disable camelcase */

      SockJS.bootstrap_iframe = function () {
        /* eslint-enable camelcase */
        var facade;
        iframeUtils.currentWindowId = loc.hash.slice(1);

        var onMessage = function onMessage(e) {
          if (e.source !== parent) {
            return;
          }

          if (typeof parentOrigin === 'undefined') {
            parentOrigin = e.origin;
          }

          if (e.origin !== parentOrigin) {
            return;
          }

          var iframeMessage;

          try {
            iframeMessage = JSON3.parse(e.data);
          } catch (ignored) {
            debug('bad json', e.data);
            return;
          }

          if (iframeMessage.windowId !== iframeUtils.currentWindowId) {
            return;
          }

          switch (iframeMessage.type) {
            case 's':
              var p;

              try {
                p = JSON3.parse(iframeMessage.data);
              } catch (ignored) {
                debug('bad json', iframeMessage.data);
                break;
              }

              var version = p[0];
              var transport = p[1];
              var transUrl = p[2];
              var baseUrl = p[3];
              debug(version, transport, transUrl, baseUrl); // change this to semver logic

              if (version !== SockJS.version) {
                throw new Error('Incompatible SockJS! Main site uses:' + ' "' + version + '", the iframe:' + ' "' + SockJS.version + '".');
              }

              if (!urlUtils.isOriginEqual(transUrl, loc.href) || !urlUtils.isOriginEqual(baseUrl, loc.href)) {
                throw new Error('Can\'t connect to different domain from within an ' + 'iframe. (' + loc.href + ', ' + transUrl + ', ' + baseUrl + ')');
              }

              facade = new FacadeJS(new transportMap[transport](transUrl, baseUrl));
              break;

            case 'm':
              facade._send(iframeMessage.data);

              break;

            case 'c':
              if (facade) {
                facade._close();
              }

              facade = null;
              break;
          }
        };

        eventUtils.attachEvent('message', onMessage); // Start

        iframeUtils.postMessage('s');
      };
    };
    /***/

  },

  /***/
  "./node_modules/sockjs-client/lib/info-ajax.js":
  /*!*****************************************************!*\
    !*** ./node_modules/sockjs-client/lib/info-ajax.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibInfoAjaxJs(module, exports, __webpack_require__) {
    "use strict";

    var EventEmitter = __webpack_require__(
    /*! events */
    "./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter,
        inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        JSON3 = __webpack_require__(
    /*! json3 */
    "./node_modules/json3/lib/json3.js"),
        objectUtils = __webpack_require__(
    /*! ./utils/object */
    "./node_modules/sockjs-client/lib/utils/object.js");

    var debug = function debug() {};

    if (true) {
      debug = __webpack_require__(
      /*! debug */
      "./node_modules/sockjs-client/node_modules/debug/src/browser.js")('sockjs-client:info-ajax');
    }

    function InfoAjax(url, AjaxObject) {
      EventEmitter.call(this);
      var self = this;
      var t0 = +new Date();
      this.xo = new AjaxObject('GET', url);
      this.xo.once('finish', function (status, text) {
        var info, rtt;

        if (status === 200) {
          rtt = +new Date() - t0;

          if (text) {
            try {
              info = JSON3.parse(text);
            } catch (e) {
              debug('bad json', text);
            }
          }

          if (!objectUtils.isObject(info)) {
            info = {};
          }
        }

        self.emit('finish', info, rtt);
        self.removeAllListeners();
      });
    }

    inherits(InfoAjax, EventEmitter);

    InfoAjax.prototype.close = function () {
      this.removeAllListeners();
      this.xo.close();
    };

    module.exports = InfoAjax;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/info-iframe-receiver.js":
  /*!****************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/info-iframe-receiver.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibInfoIframeReceiverJs(module, exports, __webpack_require__) {
    "use strict";

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        EventEmitter = __webpack_require__(
    /*! events */
    "./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter,
        JSON3 = __webpack_require__(
    /*! json3 */
    "./node_modules/json3/lib/json3.js"),
        XHRLocalObject = __webpack_require__(
    /*! ./transport/sender/xhr-local */
    "./node_modules/sockjs-client/lib/transport/sender/xhr-local.js"),
        InfoAjax = __webpack_require__(
    /*! ./info-ajax */
    "./node_modules/sockjs-client/lib/info-ajax.js");

    function InfoReceiverIframe(transUrl) {
      var self = this;
      EventEmitter.call(this);
      this.ir = new InfoAjax(transUrl, XHRLocalObject);
      this.ir.once('finish', function (info, rtt) {
        self.ir = null;
        self.emit('message', JSON3.stringify([info, rtt]));
      });
    }

    inherits(InfoReceiverIframe, EventEmitter);
    InfoReceiverIframe.transportName = 'iframe-info-receiver';

    InfoReceiverIframe.prototype.close = function () {
      if (this.ir) {
        this.ir.close();
        this.ir = null;
      }

      this.removeAllListeners();
    };

    module.exports = InfoReceiverIframe;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/info-iframe.js":
  /*!*******************************************************!*\
    !*** ./node_modules/sockjs-client/lib/info-iframe.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibInfoIframeJs(module, exports, __webpack_require__) {
    "use strict";

    var EventEmitter = __webpack_require__(
    /*! events */
    "./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter,
        inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        JSON3 = __webpack_require__(
    /*! json3 */
    "./node_modules/json3/lib/json3.js"),
        utils = __webpack_require__(
    /*! ./utils/event */
    "./node_modules/sockjs-client/lib/utils/event.js"),
        IframeTransport = __webpack_require__(
    /*! ./transport/iframe */
    "./node_modules/sockjs-client/lib/transport/iframe.js"),
        InfoReceiverIframe = __webpack_require__(
    /*! ./info-iframe-receiver */
    "./node_modules/sockjs-client/lib/info-iframe-receiver.js");

    var debug = function debug() {};

    if (true) {
      debug = __webpack_require__(
      /*! debug */
      "./node_modules/sockjs-client/node_modules/debug/src/browser.js")('sockjs-client:info-iframe');
    }

    function InfoIframe(baseUrl, url) {
      var self = this;
      EventEmitter.call(this);

      var go = function go() {
        var ifr = self.ifr = new IframeTransport(InfoReceiverIframe.transportName, url, baseUrl);
        ifr.once('message', function (msg) {
          if (msg) {
            var d;

            try {
              d = JSON3.parse(msg);
            } catch (e) {
              debug('bad json', msg);
              self.emit('finish');
              self.close();
              return;
            }

            var info = d[0],
                rtt = d[1];
            self.emit('finish', info, rtt);
          }

          self.close();
        });
        ifr.once('close', function () {
          self.emit('finish');
          self.close();
        });
      }; // TODO this seems the same as the 'needBody' from transports


      if (!global.document.body) {
        utils.attachEvent('load', go);
      } else {
        go();
      }
    }

    inherits(InfoIframe, EventEmitter);

    InfoIframe.enabled = function () {
      return IframeTransport.enabled();
    };

    InfoIframe.prototype.close = function () {
      if (this.ifr) {
        this.ifr.close();
      }

      this.removeAllListeners();
      this.ifr = null;
    };

    module.exports = InfoIframe;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/info-receiver.js":
  /*!*********************************************************!*\
    !*** ./node_modules/sockjs-client/lib/info-receiver.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibInfoReceiverJs(module, exports, __webpack_require__) {
    "use strict";

    var EventEmitter = __webpack_require__(
    /*! events */
    "./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter,
        inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        urlUtils = __webpack_require__(
    /*! ./utils/url */
    "./node_modules/sockjs-client/lib/utils/url.js"),
        XDR = __webpack_require__(
    /*! ./transport/sender/xdr */
    "./node_modules/sockjs-client/lib/transport/sender/xdr.js"),
        XHRCors = __webpack_require__(
    /*! ./transport/sender/xhr-cors */
    "./node_modules/sockjs-client/lib/transport/sender/xhr-cors.js"),
        XHRLocal = __webpack_require__(
    /*! ./transport/sender/xhr-local */
    "./node_modules/sockjs-client/lib/transport/sender/xhr-local.js"),
        XHRFake = __webpack_require__(
    /*! ./transport/sender/xhr-fake */
    "./node_modules/sockjs-client/lib/transport/sender/xhr-fake.js"),
        InfoIframe = __webpack_require__(
    /*! ./info-iframe */
    "./node_modules/sockjs-client/lib/info-iframe.js"),
        InfoAjax = __webpack_require__(
    /*! ./info-ajax */
    "./node_modules/sockjs-client/lib/info-ajax.js");

    var debug = function debug() {};

    if (true) {
      debug = __webpack_require__(
      /*! debug */
      "./node_modules/sockjs-client/node_modules/debug/src/browser.js")('sockjs-client:info-receiver');
    }

    function InfoReceiver(baseUrl, urlInfo) {
      debug(baseUrl);
      var self = this;
      EventEmitter.call(this);
      setTimeout(function () {
        self.doXhr(baseUrl, urlInfo);
      }, 0);
    }

    inherits(InfoReceiver, EventEmitter); // TODO this is currently ignoring the list of available transports and the whitelist

    InfoReceiver._getReceiver = function (baseUrl, url, urlInfo) {
      // determine method of CORS support (if needed)
      if (urlInfo.sameOrigin) {
        return new InfoAjax(url, XHRLocal);
      }

      if (XHRCors.enabled) {
        return new InfoAjax(url, XHRCors);
      }

      if (XDR.enabled && urlInfo.sameScheme) {
        return new InfoAjax(url, XDR);
      }

      if (InfoIframe.enabled()) {
        return new InfoIframe(baseUrl, url);
      }

      return new InfoAjax(url, XHRFake);
    };

    InfoReceiver.prototype.doXhr = function (baseUrl, urlInfo) {
      var self = this,
          url = urlUtils.addPath(baseUrl, '/info');
      debug('doXhr', url);
      this.xo = InfoReceiver._getReceiver(baseUrl, url, urlInfo);
      this.timeoutRef = setTimeout(function () {
        debug('timeout');

        self._cleanup(false);

        self.emit('finish');
      }, InfoReceiver.timeout);
      this.xo.once('finish', function (info, rtt) {
        debug('finish', info, rtt);

        self._cleanup(true);

        self.emit('finish', info, rtt);
      });
    };

    InfoReceiver.prototype._cleanup = function (wasClean) {
      debug('_cleanup');
      clearTimeout(this.timeoutRef);
      this.timeoutRef = null;

      if (!wasClean && this.xo) {
        this.xo.close();
      }

      this.xo = null;
    };

    InfoReceiver.prototype.close = function () {
      debug('close');
      this.removeAllListeners();

      this._cleanup(false);
    };

    InfoReceiver.timeout = 8000;
    module.exports = InfoReceiver;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/location.js":
  /*!****************************************************!*\
    !*** ./node_modules/sockjs-client/lib/location.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibLocationJs(module, exports, __webpack_require__) {
    "use strict";

    module.exports = global.location || {
      origin: 'http://localhost:80',
      protocol: 'http:',
      host: 'localhost',
      port: 80,
      href: 'http://localhost/',
      hash: ''
    };
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/main.js":
  /*!************************************************!*\
    !*** ./node_modules/sockjs-client/lib/main.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibMainJs(module, exports, __webpack_require__) {
    "use strict";

    __webpack_require__(
    /*! ./shims */
    "./node_modules/sockjs-client/lib/shims.js");

    var URL = __webpack_require__(
    /*! url-parse */
    "./node_modules/sockjs-client/node_modules/url-parse/index.js"),
        inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        JSON3 = __webpack_require__(
    /*! json3 */
    "./node_modules/json3/lib/json3.js"),
        random = __webpack_require__(
    /*! ./utils/random */
    "./node_modules/sockjs-client/lib/utils/random.js"),
        escape = __webpack_require__(
    /*! ./utils/escape */
    "./node_modules/sockjs-client/lib/utils/escape.js"),
        urlUtils = __webpack_require__(
    /*! ./utils/url */
    "./node_modules/sockjs-client/lib/utils/url.js"),
        eventUtils = __webpack_require__(
    /*! ./utils/event */
    "./node_modules/sockjs-client/lib/utils/event.js"),
        transport = __webpack_require__(
    /*! ./utils/transport */
    "./node_modules/sockjs-client/lib/utils/transport.js"),
        objectUtils = __webpack_require__(
    /*! ./utils/object */
    "./node_modules/sockjs-client/lib/utils/object.js"),
        browser = __webpack_require__(
    /*! ./utils/browser */
    "./node_modules/sockjs-client/lib/utils/browser.js"),
        log = __webpack_require__(
    /*! ./utils/log */
    "./node_modules/sockjs-client/lib/utils/log.js"),
        Event = __webpack_require__(
    /*! ./event/event */
    "./node_modules/sockjs-client/lib/event/event.js"),
        EventTarget = __webpack_require__(
    /*! ./event/eventtarget */
    "./node_modules/sockjs-client/lib/event/eventtarget.js"),
        loc = __webpack_require__(
    /*! ./location */
    "./node_modules/sockjs-client/lib/location.js"),
        CloseEvent = __webpack_require__(
    /*! ./event/close */
    "./node_modules/sockjs-client/lib/event/close.js"),
        TransportMessageEvent = __webpack_require__(
    /*! ./event/trans-message */
    "./node_modules/sockjs-client/lib/event/trans-message.js"),
        InfoReceiver = __webpack_require__(
    /*! ./info-receiver */
    "./node_modules/sockjs-client/lib/info-receiver.js");

    var debug = function debug() {};

    if (true) {
      debug = __webpack_require__(
      /*! debug */
      "./node_modules/sockjs-client/node_modules/debug/src/browser.js")('sockjs-client:main');
    }

    var transports; // follow constructor steps defined at http://dev.w3.org/html5/websockets/#the-websocket-interface

    function SockJS(url, protocols, options) {
      if (!(this instanceof SockJS)) {
        return new SockJS(url, protocols, options);
      }

      if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
      }

      EventTarget.call(this);
      this.readyState = SockJS.CONNECTING;
      this.extensions = '';
      this.protocol = ''; // non-standard extension

      options = options || {};

      if (options.protocols_whitelist) {
        log.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead.");
      }

      this._transportsWhitelist = options.transports;
      this._transportOptions = options.transportOptions || {};
      this._timeout = options.timeout || 0;
      var sessionId = options.sessionId || 8;

      if (typeof sessionId === 'function') {
        this._generateSessionId = sessionId;
      } else if (typeof sessionId === 'number') {
        this._generateSessionId = function () {
          return random.string(sessionId);
        };
      } else {
        throw new TypeError('If sessionId is used in the options, it needs to be a number or a function.');
      }

      this._server = options.server || random.numberString(1000); // Step 1 of WS spec - parse and validate the url. Issue #8

      var parsedUrl = new URL(url);

      if (!parsedUrl.host || !parsedUrl.protocol) {
        throw new SyntaxError("The URL '" + url + "' is invalid");
      } else if (parsedUrl.hash) {
        throw new SyntaxError('The URL must not contain a fragment');
      } else if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
        throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + parsedUrl.protocol + "' is not allowed.");
      }

      var secure = parsedUrl.protocol === 'https:'; // Step 2 - don't allow secure origin with an insecure protocol

      if (loc.protocol === 'https:' && !secure) {
        // exception is 127.0.0.0/8 and ::1 urls
        if (!urlUtils.isLoopbackAddr(parsedUrl.hostname)) {
          throw new Error('SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS');
        }
      } // Step 3 - check port access - no need here
      // Step 4 - parse protocols argument


      if (!protocols) {
        protocols = [];
      } else if (!Array.isArray(protocols)) {
        protocols = [protocols];
      } // Step 5 - check protocols argument


      var sortedProtocols = protocols.sort();
      sortedProtocols.forEach(function (proto, i) {
        if (!proto) {
          throw new SyntaxError("The protocols entry '" + proto + "' is invalid.");
        }

        if (i < sortedProtocols.length - 1 && proto === sortedProtocols[i + 1]) {
          throw new SyntaxError("The protocols entry '" + proto + "' is duplicated.");
        }
      }); // Step 6 - convert origin

      var o = urlUtils.getOrigin(loc.href);
      this._origin = o ? o.toLowerCase() : null; // remove the trailing slash

      parsedUrl.set('pathname', parsedUrl.pathname.replace(/\/+$/, '')); // store the sanitized url

      this.url = parsedUrl.href;
      debug('using url', this.url); // Step 7 - start connection in background
      // obtain server info
      // http://sockjs.github.io/sockjs-protocol/sockjs-protocol-0.3.3.html#section-26

      this._urlInfo = {
        nullOrigin: !browser.hasDomain(),
        sameOrigin: urlUtils.isOriginEqual(this.url, loc.href),
        sameScheme: urlUtils.isSchemeEqual(this.url, loc.href)
      };
      this._ir = new InfoReceiver(this.url, this._urlInfo);

      this._ir.once('finish', this._receiveInfo.bind(this));
    }

    inherits(SockJS, EventTarget);

    function userSetCode(code) {
      return code === 1000 || code >= 3000 && code <= 4999;
    }

    SockJS.prototype.close = function (code, reason) {
      // Step 1
      if (code && !userSetCode(code)) {
        throw new Error('InvalidAccessError: Invalid code');
      } // Step 2.4 states the max is 123 bytes, but we are just checking length


      if (reason && reason.length > 123) {
        throw new SyntaxError('reason argument has an invalid length');
      } // Step 3.1


      if (this.readyState === SockJS.CLOSING || this.readyState === SockJS.CLOSED) {
        return;
      } // TODO look at docs to determine how to set this


      var wasClean = true;

      this._close(code || 1000, reason || 'Normal closure', wasClean);
    };

    SockJS.prototype.send = function (data) {
      // #13 - convert anything non-string to string
      // TODO this currently turns objects into [object Object]
      if (typeof data !== 'string') {
        data = '' + data;
      }

      if (this.readyState === SockJS.CONNECTING) {
        throw new Error('InvalidStateError: The connection has not been established yet');
      }

      if (this.readyState !== SockJS.OPEN) {
        return;
      }

      this._transport.send(escape.quote(data));
    };

    SockJS.version = __webpack_require__(
    /*! ./version */
    "./node_modules/sockjs-client/lib/version.js");
    SockJS.CONNECTING = 0;
    SockJS.OPEN = 1;
    SockJS.CLOSING = 2;
    SockJS.CLOSED = 3;

    SockJS.prototype._receiveInfo = function (info, rtt) {
      debug('_receiveInfo', rtt);
      this._ir = null;

      if (!info) {
        this._close(1002, 'Cannot connect to server');

        return;
      } // establish a round-trip timeout (RTO) based on the
      // round-trip time (RTT)


      this._rto = this.countRTO(rtt); // allow server to override url used for the actual transport

      this._transUrl = info.base_url ? info.base_url : this.url;
      info = objectUtils.extend(info, this._urlInfo);
      debug('info', info); // determine list of desired and supported transports

      var enabledTransports = transports.filterToEnabled(this._transportsWhitelist, info);
      this._transports = enabledTransports.main;
      debug(this._transports.length + ' enabled transports');

      this._connect();
    };

    SockJS.prototype._connect = function () {
      for (var Transport = this._transports.shift(); Transport; Transport = this._transports.shift()) {
        debug('attempt', Transport.transportName);

        if (Transport.needBody) {
          if (!global.document.body || typeof global.document.readyState !== 'undefined' && global.document.readyState !== 'complete' && global.document.readyState !== 'interactive') {
            debug('waiting for body');

            this._transports.unshift(Transport);

            eventUtils.attachEvent('load', this._connect.bind(this));
            return;
          }
        } // calculate timeout based on RTO and round trips. Default to 5s


        var timeoutMs = Math.max(this._timeout, this._rto * Transport.roundTrips || 5000);
        this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), timeoutMs);
        debug('using timeout', timeoutMs);
        var transportUrl = urlUtils.addPath(this._transUrl, '/' + this._server + '/' + this._generateSessionId());
        var options = this._transportOptions[Transport.transportName];
        debug('transport url', transportUrl);
        var transportObj = new Transport(transportUrl, this._transUrl, options);
        transportObj.on('message', this._transportMessage.bind(this));
        transportObj.once('close', this._transportClose.bind(this));
        transportObj.transportName = Transport.transportName;
        this._transport = transportObj;
        return;
      }

      this._close(2000, 'All transports failed', false);
    };

    SockJS.prototype._transportTimeout = function () {
      debug('_transportTimeout');

      if (this.readyState === SockJS.CONNECTING) {
        if (this._transport) {
          this._transport.close();
        }

        this._transportClose(2007, 'Transport timed out');
      }
    };

    SockJS.prototype._transportMessage = function (msg) {
      debug('_transportMessage', msg);
      var self = this,
          type = msg.slice(0, 1),
          content = msg.slice(1),
          payload; // first check for messages that don't need a payload

      switch (type) {
        case 'o':
          this._open();

          return;

        case 'h':
          this.dispatchEvent(new Event('heartbeat'));
          debug('heartbeat', this.transport);
          return;
      }

      if (content) {
        try {
          payload = JSON3.parse(content);
        } catch (e) {
          debug('bad json', content);
        }
      }

      if (typeof payload === 'undefined') {
        debug('empty payload', content);
        return;
      }

      switch (type) {
        case 'a':
          if (Array.isArray(payload)) {
            payload.forEach(function (p) {
              debug('message', self.transport, p);
              self.dispatchEvent(new TransportMessageEvent(p));
            });
          }

          break;

        case 'm':
          debug('message', this.transport, payload);
          this.dispatchEvent(new TransportMessageEvent(payload));
          break;

        case 'c':
          if (Array.isArray(payload) && payload.length === 2) {
            this._close(payload[0], payload[1], true);
          }

          break;
      }
    };

    SockJS.prototype._transportClose = function (code, reason) {
      debug('_transportClose', this.transport, code, reason);

      if (this._transport) {
        this._transport.removeAllListeners();

        this._transport = null;
        this.transport = null;
      }

      if (!userSetCode(code) && code !== 2000 && this.readyState === SockJS.CONNECTING) {
        this._connect();

        return;
      }

      this._close(code, reason);
    };

    SockJS.prototype._open = function () {
      debug('_open', this._transport && this._transport.transportName, this.readyState);

      if (this.readyState === SockJS.CONNECTING) {
        if (this._transportTimeoutId) {
          clearTimeout(this._transportTimeoutId);
          this._transportTimeoutId = null;
        }

        this.readyState = SockJS.OPEN;
        this.transport = this._transport.transportName;
        this.dispatchEvent(new Event('open'));
        debug('connected', this.transport);
      } else {
        // The server might have been restarted, and lost track of our
        // connection.
        this._close(1006, 'Server lost session');
      }
    };

    SockJS.prototype._close = function (code, reason, wasClean) {
      debug('_close', this.transport, code, reason, wasClean, this.readyState);
      var forceFail = false;

      if (this._ir) {
        forceFail = true;

        this._ir.close();

        this._ir = null;
      }

      if (this._transport) {
        this._transport.close();

        this._transport = null;
        this.transport = null;
      }

      if (this.readyState === SockJS.CLOSED) {
        throw new Error('InvalidStateError: SockJS has already been closed');
      }

      this.readyState = SockJS.CLOSING;
      setTimeout(function () {
        this.readyState = SockJS.CLOSED;

        if (forceFail) {
          this.dispatchEvent(new Event('error'));
        }

        var e = new CloseEvent('close');
        e.wasClean = wasClean || false;
        e.code = code || 1000;
        e.reason = reason;
        this.dispatchEvent(e);
        this.onmessage = this.onclose = this.onerror = null;
        debug('disconnected');
      }.bind(this), 0);
    }; // See: http://www.erg.abdn.ac.uk/~gerrit/dccp/notes/ccid2/rto_estimator/
    // and RFC 2988.


    SockJS.prototype.countRTO = function (rtt) {
      // In a local environment, when using IE8/9 and the `jsonp-polling`
      // transport the time needed to establish a connection (the time that pass
      // from the opening of the transport to the call of `_dispatchOpen`) is
      // around 200msec (the lower bound used in the article above) and this
      // causes spurious timeouts. For this reason we calculate a value slightly
      // larger than that used in the article.
      if (rtt > 100) {
        return 4 * rtt; // rto > 400msec
      }

      return 300 + rtt; // 300msec < rto <= 400msec
    };

    module.exports = function (availableTransports) {
      transports = transport(availableTransports);

      __webpack_require__(
      /*! ./iframe-bootstrap */
      "./node_modules/sockjs-client/lib/iframe-bootstrap.js")(SockJS, availableTransports);

      return SockJS;
    };
    /***/

  },

  /***/
  "./node_modules/sockjs-client/lib/shims.js":
  /*!*************************************************!*\
    !*** ./node_modules/sockjs-client/lib/shims.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibShimsJs(module, exports, __webpack_require__) {
    "use strict";
    /* eslint-disable */

    /* jscs: disable */
    // pulled specific shims from https://github.com/es-shims/es5-shim

    var ArrayPrototype = Array.prototype;
    var ObjectPrototype = Object.prototype;
    var FunctionPrototype = Function.prototype;
    var StringPrototype = String.prototype;
    var array_slice = ArrayPrototype.slice;
    var _toString = ObjectPrototype.toString;

    var isFunction = function isFunction(val) {
      return ObjectPrototype.toString.call(val) === '[object Function]';
    };

    var isArray = function isArray(obj) {
      return _toString.call(obj) === '[object Array]';
    };

    var isString = function isString(obj) {
      return _toString.call(obj) === '[object String]';
    };

    var supportsDescriptors = Object.defineProperty && function () {
      try {
        Object.defineProperty({}, 'x', {});
        return true;
      } catch (e) {
        /* this is ES3 */
        return false;
      }
    }(); // Define configurable, writable and non-enumerable props
    // if they don't exist.


    var defineProperty;

    if (supportsDescriptors) {
      defineProperty = function defineProperty(object, name, method, forceAssign) {
        if (!forceAssign && name in object) {
          return;
        }

        Object.defineProperty(object, name, {
          configurable: true,
          enumerable: false,
          writable: true,
          value: method
        });
      };
    } else {
      defineProperty = function defineProperty(object, name, method, forceAssign) {
        if (!forceAssign && name in object) {
          return;
        }

        object[name] = method;
      };
    }

    var defineProperties = function defineProperties(object, map, forceAssign) {
      for (var name in map) {
        if (ObjectPrototype.hasOwnProperty.call(map, name)) {
          defineProperty(object, name, map[name], forceAssign);
        }
      }
    };

    var toObject = function toObject(o) {
      if (o == null) {
        // this matches both null and undefined
        throw new TypeError("can't convert " + o + ' to object');
      }

      return Object(o);
    }; //
    // Util
    // ======
    //
    // ES5 9.4
    // http://es5.github.com/#x9.4
    // http://jsperf.com/to-integer


    function toInteger(num) {
      var n = +num;

      if (n !== n) {
        // isNaN
        n = 0;
      } else if (n !== 0 && n !== 1 / 0 && n !== -(1 / 0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }

      return n;
    }

    function ToUint32(x) {
      return x >>> 0;
    } //
    // Function
    // ========
    //
    // ES-5 15.3.4.5
    // http://es5.github.com/#x15.3.4.5


    function Empty() {}

    defineProperties(FunctionPrototype, {
      bind: function bind(that) {
        // .length is 1
        // 1. Let Target be the this value.
        var target = this; // 2. If IsCallable(Target) is false, throw a TypeError exception.

        if (!isFunction(target)) {
          throw new TypeError('Function.prototype.bind called on incompatible ' + target);
        } // 3. Let A be a new (possibly empty) internal list of all of the
        //   argument values provided after thisArg (arg1, arg2 etc), in order.
        // XXX slicedArgs will stand in for "A" if used


        var args = array_slice.call(arguments, 1); // for normal call
        // 4. Let F be a new native ECMAScript object.
        // 11. Set the [[Prototype]] internal property of F to the standard
        //   built-in Function prototype object as specified in 15.3.3.1.
        // 12. Set the [[Call]] internal property of F as described in
        //   15.3.4.5.1.
        // 13. Set the [[Construct]] internal property of F as described in
        //   15.3.4.5.2.
        // 14. Set the [[HasInstance]] internal property of F as described in
        //   15.3.4.5.3.

        var binder = function binder() {
          if (this instanceof bound) {
            // 15.3.4.5.2 [[Construct]]
            // When the [[Construct]] internal method of a function object,
            // F that was created using the bind function is called with a
            // list of arguments ExtraArgs, the following steps are taken:
            // 1. Let target be the value of F's [[TargetFunction]]
            //   internal property.
            // 2. If target has no [[Construct]] internal method, a
            //   TypeError exception is thrown.
            // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
            //   property.
            // 4. Let args be a new list containing the same values as the
            //   list boundArgs in the same order followed by the same
            //   values as the list ExtraArgs in the same order.
            // 5. Return the result of calling the [[Construct]] internal
            //   method of target providing args as the arguments.
            var result = target.apply(this, args.concat(array_slice.call(arguments)));

            if (Object(result) === result) {
              return result;
            }

            return this;
          } else {
            // 15.3.4.5.1 [[Call]]
            // When the [[Call]] internal method of a function object, F,
            // which was created using the bind function is called with a
            // this value and a list of arguments ExtraArgs, the following
            // steps are taken:
            // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
            //   property.
            // 2. Let boundThis be the value of F's [[BoundThis]] internal
            //   property.
            // 3. Let target be the value of F's [[TargetFunction]] internal
            //   property.
            // 4. Let args be a new list containing the same values as the
            //   list boundArgs in the same order followed by the same
            //   values as the list ExtraArgs in the same order.
            // 5. Return the result of calling the [[Call]] internal method
            //   of target providing boundThis as the this value and
            //   providing args as the arguments.
            // equiv: target.call(this, ...boundArgs, ...args)
            return target.apply(that, args.concat(array_slice.call(arguments)));
          }
        }; // 15. If the [[Class]] internal property of Target is "Function", then
        //     a. Let L be the length property of Target minus the length of A.
        //     b. Set the length own property of F to either 0 or L, whichever is
        //       larger.
        // 16. Else set the length own property of F to 0.


        var boundLength = Math.max(0, target.length - args.length); // 17. Set the attributes of the length own property of F to the values
        //   specified in 15.3.5.1.

        var boundArgs = [];

        for (var i = 0; i < boundLength; i++) {
          boundArgs.push('$' + i);
        } // XXX Build a dynamic function with desired amount of arguments is the only
        // way to set the length property of a function.
        // In environments where Content Security Policies enabled (Chrome extensions,
        // for ex.) all use of eval or Function costructor throws an exception.
        // However in all of these environments Function.prototype.bind exists
        // and so this code will never be executed.


        var bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

        if (target.prototype) {
          Empty.prototype = target.prototype;
          bound.prototype = new Empty(); // Clean up dangling references.

          Empty.prototype = null;
        } // TODO
        // 18. Set the [[Extensible]] internal property of F to true.
        // TODO
        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
        // 20. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
        //   false.
        // 21. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
        //   and false.
        // TODO
        // NOTE Function objects created using Function.prototype.bind do not
        // have a prototype property or the [[Code]], [[FormalParameters]], and
        // [[Scope]] internal properties.
        // XXX can't delete prototype in pure-js.
        // 22. Return F.


        return bound;
      }
    }); //
    // Array
    // =====
    //
    // ES5 15.4.3.2
    // http://es5.github.com/#x15.4.3.2
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray

    defineProperties(Array, {
      isArray: isArray
    });
    var boxedString = Object('a');
    var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

    var properlyBoxesContext = function properlyBoxed(method) {
      // Check node 0.6.21 bug where third parameter is not boxed
      var properlyBoxesNonStrict = true;
      var properlyBoxesStrict = true;

      if (method) {
        method.call('foo', function (_, __, context) {
          if (typeof context !== 'object') {
            properlyBoxesNonStrict = false;
          }
        });
        method.call([1], function () {
          'use strict';

          properlyBoxesStrict = typeof this === 'string';
        }, 'x');
      }

      return !!method && properlyBoxesNonStrict && properlyBoxesStrict;
    };

    defineProperties(ArrayPrototype, {
      forEach: function forEach(fun
      /*, thisp*/
      ) {
        var object = toObject(this),
            self = splitString && isString(this) ? this.split('') : object,
            thisp = arguments[1],
            i = -1,
            length = self.length >>> 0; // If no callback function or if callback is not a callable function

        if (!isFunction(fun)) {
          throw new TypeError(); // TODO message
        }

        while (++i < length) {
          if (i in self) {
            // Invoke the callback function with call, passing arguments:
            // context, property value, property key, thisArg object
            // context
            fun.call(thisp, self[i], i, object);
          }
        }
      }
    }, !properlyBoxesContext(ArrayPrototype.forEach)); // ES5 15.4.4.14
    // http://es5.github.com/#x15.4.4.14
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf

    var hasFirefox2IndexOfBug = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
    defineProperties(ArrayPrototype, {
      indexOf: function indexOf(sought
      /*, fromIndex */
      ) {
        var self = splitString && isString(this) ? this.split('') : toObject(this),
            length = self.length >>> 0;

        if (!length) {
          return -1;
        }

        var i = 0;

        if (arguments.length > 1) {
          i = toInteger(arguments[1]);
        } // handle negative indices


        i = i >= 0 ? i : Math.max(0, length + i);

        for (; i < length; i++) {
          if (i in self && self[i] === sought) {
            return i;
          }
        }

        return -1;
      }
    }, hasFirefox2IndexOfBug); //
    // String
    // ======
    //
    // ES5 15.5.4.14
    // http://es5.github.com/#x15.5.4.14
    // [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
    // Many browsers do not split properly with regular expressions or they
    // do not perform the split correctly under obscure conditions.
    // See http://blog.stevenlevithan.com/archives/cross-browser-split
    // I've tested in many browsers and this seems to cover the deviant ones:
    //    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
    //    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
    //    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
    //       [undefined, "t", undefined, "e", ...]
    //    ''.split(/.?/) should be [], not [""]
    //    '.'.split(/()()/) should be ["."], not ["", "", "."]

    var string_split = StringPrototype.split;

    if ('ab'.split(/(?:ab)*/).length !== 2 || '.'.split(/(.?)(.?)/).length !== 4 || 'tesst'.split(/(s)*/)[1] === 't' || 'test'.split(/(?:)/, -1).length !== 4 || ''.split(/.?/).length || '.'.split(/()()/).length > 1) {
      (function () {
        var compliantExecNpcg = /()??/.exec('')[1] === void 0; // NPCG: nonparticipating capturing group

        StringPrototype.split = function (separator, limit) {
          var string = this;

          if (separator === void 0 && limit === 0) {
            return [];
          } // If `separator` is not a regex, use native split


          if (_toString.call(separator) !== '[object RegExp]') {
            return string_split.call(this, separator, limit);
          }

          var output = [],
              flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.extended ? 'x' : '') + ( // Proposed for ES6
          separator.sticky ? 'y' : ''),
              // Firefox 3+
          lastLastIndex = 0,
              // Make `global` and avoid `lastIndex` issues by working with a copy
          separator2,
              match,
              lastIndex,
              lastLength;
          separator = new RegExp(separator.source, flags + 'g');
          string += ''; // Type-convert

          if (!compliantExecNpcg) {
            // Doesn't need flags gy, but they don't hurt
            separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags);
          }
          /* Values for `limit`, per the spec:
           * If undefined: 4294967295 // Math.pow(2, 32) - 1
           * If 0, Infinity, or NaN: 0
           * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
           * If negative number: 4294967296 - Math.floor(Math.abs(limit))
           * If other: Type-convert, then use the above rules
           */


          limit = limit === void 0 ? -1 >>> 0 : // Math.pow(2, 32) - 1
          ToUint32(limit);

          while (match = separator.exec(string)) {
            // `separator.lastIndex` is not reliable cross-browser
            lastIndex = match.index + match[0].length;

            if (lastIndex > lastLastIndex) {
              output.push(string.slice(lastLastIndex, match.index)); // Fix browsers whose `exec` methods don't consistently return `undefined` for
              // nonparticipating capturing groups

              if (!compliantExecNpcg && match.length > 1) {
                match[0].replace(separator2, function () {
                  for (var i = 1; i < arguments.length - 2; i++) {
                    if (arguments[i] === void 0) {
                      match[i] = void 0;
                    }
                  }
                });
              }

              if (match.length > 1 && match.index < string.length) {
                ArrayPrototype.push.apply(output, match.slice(1));
              }

              lastLength = match[0].length;
              lastLastIndex = lastIndex;

              if (output.length >= limit) {
                break;
              }
            }

            if (separator.lastIndex === match.index) {
              separator.lastIndex++; // Avoid an infinite loop
            }
          }

          if (lastLastIndex === string.length) {
            if (lastLength || !separator.test('')) {
              output.push('');
            }
          } else {
            output.push(string.slice(lastLastIndex));
          }

          return output.length > limit ? output.slice(0, limit) : output;
        };
      })(); // [bugfix, chrome]
      // If separator is undefined, then the result array contains just one String,
      // which is the this value (converted to a String). If limit is not undefined,
      // then the output array is truncated so that it contains no more than limit
      // elements.
      // "0".split(undefined, 0) -> []

    } else if ('0'.split(void 0, 0).length) {
      StringPrototype.split = function split(separator, limit) {
        if (separator === void 0 && limit === 0) {
          return [];
        }

        return string_split.call(this, separator, limit);
      };
    } // ECMA-262, 3rd B.2.3
    // Not an ECMAScript standard, although ECMAScript 3rd Edition has a
    // non-normative section suggesting uniform semantics and it should be
    // normalized across all browsers
    // [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE


    var string_substr = StringPrototype.substr;
    var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
    defineProperties(StringPrototype, {
      substr: function substr(start, length) {
        return string_substr.call(this, start < 0 ? (start = this.length + start) < 0 ? 0 : start : start, length);
      }
    }, hasNegativeSubstrBug);
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport-list.js":
  /*!**********************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport-list.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportListJs(module, exports, __webpack_require__) {
    "use strict";

    module.exports = [// streaming transports
    __webpack_require__(
    /*! ./transport/websocket */
    "./node_modules/sockjs-client/lib/transport/websocket.js"), __webpack_require__(
    /*! ./transport/xhr-streaming */
    "./node_modules/sockjs-client/lib/transport/xhr-streaming.js"), __webpack_require__(
    /*! ./transport/xdr-streaming */
    "./node_modules/sockjs-client/lib/transport/xdr-streaming.js"), __webpack_require__(
    /*! ./transport/eventsource */
    "./node_modules/sockjs-client/lib/transport/eventsource.js"), __webpack_require__(
    /*! ./transport/lib/iframe-wrap */
    "./node_modules/sockjs-client/lib/transport/lib/iframe-wrap.js")(__webpack_require__(
    /*! ./transport/eventsource */
    "./node_modules/sockjs-client/lib/transport/eventsource.js")) // polling transports
    , __webpack_require__(
    /*! ./transport/htmlfile */
    "./node_modules/sockjs-client/lib/transport/htmlfile.js"), __webpack_require__(
    /*! ./transport/lib/iframe-wrap */
    "./node_modules/sockjs-client/lib/transport/lib/iframe-wrap.js")(__webpack_require__(
    /*! ./transport/htmlfile */
    "./node_modules/sockjs-client/lib/transport/htmlfile.js")), __webpack_require__(
    /*! ./transport/xhr-polling */
    "./node_modules/sockjs-client/lib/transport/xhr-polling.js"), __webpack_require__(
    /*! ./transport/xdr-polling */
    "./node_modules/sockjs-client/lib/transport/xdr-polling.js"), __webpack_require__(
    /*! ./transport/lib/iframe-wrap */
    "./node_modules/sockjs-client/lib/transport/lib/iframe-wrap.js")(__webpack_require__(
    /*! ./transport/xhr-polling */
    "./node_modules/sockjs-client/lib/transport/xhr-polling.js")), __webpack_require__(
    /*! ./transport/jsonp-polling */
    "./node_modules/sockjs-client/lib/transport/jsonp-polling.js")];
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/browser/abstract-xhr.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/browser/abstract-xhr.js ***!
    \**************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportBrowserAbstractXhrJs(module, exports, __webpack_require__) {
    "use strict";

    var EventEmitter = __webpack_require__(
    /*! events */
    "./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter,
        inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        utils = __webpack_require__(
    /*! ../../utils/event */
    "./node_modules/sockjs-client/lib/utils/event.js"),
        urlUtils = __webpack_require__(
    /*! ../../utils/url */
    "./node_modules/sockjs-client/lib/utils/url.js"),
        XHR = global.XMLHttpRequest;

    var debug = function debug() {};

    if (true) {
      debug = __webpack_require__(
      /*! debug */
      "./node_modules/sockjs-client/node_modules/debug/src/browser.js")('sockjs-client:browser:xhr');
    }

    function AbstractXHRObject(method, url, payload, opts) {
      debug(method, url);
      var self = this;
      EventEmitter.call(this);
      setTimeout(function () {
        self._start(method, url, payload, opts);
      }, 0);
    }

    inherits(AbstractXHRObject, EventEmitter);

    AbstractXHRObject.prototype._start = function (method, url, payload, opts) {
      var self = this;

      try {
        this.xhr = new XHR();
      } catch (x) {// intentionally empty
      }

      if (!this.xhr) {
        debug('no xhr');
        this.emit('finish', 0, 'no xhr support');

        this._cleanup();

        return;
      } // several browsers cache POSTs


      url = urlUtils.addQuery(url, 't=' + +new Date()); // Explorer tends to keep connection open, even after the
      // tab gets closed: http://bugs.jquery.com/ticket/5280

      this.unloadRef = utils.unloadAdd(function () {
        debug('unload cleanup');

        self._cleanup(true);
      });

      try {
        this.xhr.open(method, url, true);

        if (this.timeout && 'timeout' in this.xhr) {
          this.xhr.timeout = this.timeout;

          this.xhr.ontimeout = function () {
            debug('xhr timeout');
            self.emit('finish', 0, '');

            self._cleanup(false);
          };
        }
      } catch (e) {
        debug('exception', e); // IE raises an exception on wrong port.

        this.emit('finish', 0, '');

        this._cleanup(false);

        return;
      }

      if ((!opts || !opts.noCredentials) && AbstractXHRObject.supportsCORS) {
        debug('withCredentials'); // Mozilla docs says https://developer.mozilla.org/en/XMLHttpRequest :
        // "This never affects same-site requests."

        this.xhr.withCredentials = true;
      }

      if (opts && opts.headers) {
        for (var key in opts.headers) {
          this.xhr.setRequestHeader(key, opts.headers[key]);
        }
      }

      this.xhr.onreadystatechange = function () {
        if (self.xhr) {
          var x = self.xhr;
          var text, status;
          debug('readyState', x.readyState);

          switch (x.readyState) {
            case 3:
              // IE doesn't like peeking into responseText or status
              // on Microsoft.XMLHTTP and readystate=3
              try {
                status = x.status;
                text = x.responseText;
              } catch (e) {// intentionally empty
              }

              debug('status', status); // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450

              if (status === 1223) {
                status = 204;
              } // IE does return readystate == 3 for 404 answers.


              if (status === 200 && text && text.length > 0) {
                debug('chunk');
                self.emit('chunk', status, text);
              }

              break;

            case 4:
              status = x.status;
              debug('status', status); // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450

              if (status === 1223) {
                status = 204;
              } // IE returns this for a bad port
              // http://msdn.microsoft.com/en-us/library/windows/desktop/aa383770(v=vs.85).aspx


              if (status === 12005 || status === 12029) {
                status = 0;
              }

              debug('finish', status, x.responseText);
              self.emit('finish', status, x.responseText);

              self._cleanup(false);

              break;
          }
        }
      };

      try {
        self.xhr.send(payload);
      } catch (e) {
        self.emit('finish', 0, '');

        self._cleanup(false);
      }
    };

    AbstractXHRObject.prototype._cleanup = function (abort) {
      debug('cleanup');

      if (!this.xhr) {
        return;
      }

      this.removeAllListeners();
      utils.unloadDel(this.unloadRef); // IE needs this field to be a function

      this.xhr.onreadystatechange = function () {};

      if (this.xhr.ontimeout) {
        this.xhr.ontimeout = null;
      }

      if (abort) {
        try {
          this.xhr.abort();
        } catch (x) {// intentionally empty
        }
      }

      this.unloadRef = this.xhr = null;
    };

    AbstractXHRObject.prototype.close = function () {
      debug('close');

      this._cleanup(true);
    };

    AbstractXHRObject.enabled = !!XHR; // override XMLHttpRequest for IE6/7
    // obfuscate to avoid firewalls

    var axo = ['Active'].concat('Object').join('X');

    if (!AbstractXHRObject.enabled && axo in global) {
      debug('overriding xmlhttprequest');

      XHR = function XHR() {
        try {
          return new global[axo]('Microsoft.XMLHTTP');
        } catch (e) {
          return null;
        }
      };

      AbstractXHRObject.enabled = !!new XHR();
    }

    var cors = false;

    try {
      cors = 'withCredentials' in new XHR();
    } catch (ignored) {// intentionally empty
    }

    AbstractXHRObject.supportsCORS = cors;
    module.exports = AbstractXHRObject;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/browser/eventsource.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/browser/eventsource.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportBrowserEventsourceJs(module, exports) {
    module.exports = global.EventSource;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/browser/websocket.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/browser/websocket.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportBrowserWebsocketJs(module, exports, __webpack_require__) {
    "use strict";

    var Driver = global.WebSocket || global.MozWebSocket;

    if (Driver) {
      module.exports = function WebSocketBrowserDriver(url) {
        return new Driver(url);
      };
    } else {
      module.exports = undefined;
    }
    /***/

  },

  /***/
  "./node_modules/sockjs-client/lib/transport/eventsource.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/eventsource.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportEventsourceJs(module, exports, __webpack_require__) {
    "use strict";

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        AjaxBasedTransport = __webpack_require__(
    /*! ./lib/ajax-based */
    "./node_modules/sockjs-client/lib/transport/lib/ajax-based.js"),
        EventSourceReceiver = __webpack_require__(
    /*! ./receiver/eventsource */
    "./node_modules/sockjs-client/lib/transport/receiver/eventsource.js"),
        XHRCorsObject = __webpack_require__(
    /*! ./sender/xhr-cors */
    "./node_modules/sockjs-client/lib/transport/sender/xhr-cors.js"),
        EventSourceDriver = __webpack_require__(
    /*! eventsource */
    "./node_modules/sockjs-client/lib/transport/browser/eventsource.js");

    function EventSourceTransport(transUrl) {
      if (!EventSourceTransport.enabled()) {
        throw new Error('Transport created when disabled');
      }

      AjaxBasedTransport.call(this, transUrl, '/eventsource', EventSourceReceiver, XHRCorsObject);
    }

    inherits(EventSourceTransport, AjaxBasedTransport);

    EventSourceTransport.enabled = function () {
      return !!EventSourceDriver;
    };

    EventSourceTransport.transportName = 'eventsource';
    EventSourceTransport.roundTrips = 2;
    module.exports = EventSourceTransport;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/htmlfile.js":
  /*!**************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/htmlfile.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportHtmlfileJs(module, exports, __webpack_require__) {
    "use strict";

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        HtmlfileReceiver = __webpack_require__(
    /*! ./receiver/htmlfile */
    "./node_modules/sockjs-client/lib/transport/receiver/htmlfile.js"),
        XHRLocalObject = __webpack_require__(
    /*! ./sender/xhr-local */
    "./node_modules/sockjs-client/lib/transport/sender/xhr-local.js"),
        AjaxBasedTransport = __webpack_require__(
    /*! ./lib/ajax-based */
    "./node_modules/sockjs-client/lib/transport/lib/ajax-based.js");

    function HtmlFileTransport(transUrl) {
      if (!HtmlfileReceiver.enabled) {
        throw new Error('Transport created when disabled');
      }

      AjaxBasedTransport.call(this, transUrl, '/htmlfile', HtmlfileReceiver, XHRLocalObject);
    }

    inherits(HtmlFileTransport, AjaxBasedTransport);

    HtmlFileTransport.enabled = function (info) {
      return HtmlfileReceiver.enabled && info.sameOrigin;
    };

    HtmlFileTransport.transportName = 'htmlfile';
    HtmlFileTransport.roundTrips = 2;
    module.exports = HtmlFileTransport;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/iframe.js":
  /*!************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/iframe.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportIframeJs(module, exports, __webpack_require__) {
    "use strict"; // Few cool transports do work only for same-origin. In order to make
    // them work cross-domain we shall use iframe, served from the
    // remote domain. New browsers have capabilities to communicate with
    // cross domain iframe using postMessage(). In IE it was implemented
    // from IE 8+, but of course, IE got some details wrong:
    //    http://msdn.microsoft.com/en-us/library/cc197015(v=VS.85).aspx
    //    http://stevesouders.com/misc/test-postmessage.php

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        JSON3 = __webpack_require__(
    /*! json3 */
    "./node_modules/json3/lib/json3.js"),
        EventEmitter = __webpack_require__(
    /*! events */
    "./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter,
        version = __webpack_require__(
    /*! ../version */
    "./node_modules/sockjs-client/lib/version.js"),
        urlUtils = __webpack_require__(
    /*! ../utils/url */
    "./node_modules/sockjs-client/lib/utils/url.js"),
        iframeUtils = __webpack_require__(
    /*! ../utils/iframe */
    "./node_modules/sockjs-client/lib/utils/iframe.js"),
        eventUtils = __webpack_require__(
    /*! ../utils/event */
    "./node_modules/sockjs-client/lib/utils/event.js"),
        random = __webpack_require__(
    /*! ../utils/random */
    "./node_modules/sockjs-client/lib/utils/random.js");

    var debug = function debug() {};

    if (true) {
      debug = __webpack_require__(
      /*! debug */
      "./node_modules/sockjs-client/node_modules/debug/src/browser.js")('sockjs-client:transport:iframe');
    }

    function IframeTransport(transport, transUrl, baseUrl) {
      if (!IframeTransport.enabled()) {
        throw new Error('Transport created when disabled');
      }

      EventEmitter.call(this);
      var self = this;
      this.origin = urlUtils.getOrigin(baseUrl);
      this.baseUrl = baseUrl;
      this.transUrl = transUrl;
      this.transport = transport;
      this.windowId = random.string(8);
      var iframeUrl = urlUtils.addPath(baseUrl, '/iframe.html') + '#' + this.windowId;
      debug(transport, transUrl, iframeUrl);
      this.iframeObj = iframeUtils.createIframe(iframeUrl, function (r) {
        debug('err callback');
        self.emit('close', 1006, 'Unable to load an iframe (' + r + ')');
        self.close();
      });
      this.onmessageCallback = this._message.bind(this);
      eventUtils.attachEvent('message', this.onmessageCallback);
    }

    inherits(IframeTransport, EventEmitter);

    IframeTransport.prototype.close = function () {
      debug('close');
      this.removeAllListeners();

      if (this.iframeObj) {
        eventUtils.detachEvent('message', this.onmessageCallback);

        try {
          // When the iframe is not loaded, IE raises an exception
          // on 'contentWindow'.
          this.postMessage('c');
        } catch (x) {// intentionally empty
        }

        this.iframeObj.cleanup();
        this.iframeObj = null;
        this.onmessageCallback = this.iframeObj = null;
      }
    };

    IframeTransport.prototype._message = function (e) {
      debug('message', e.data);

      if (!urlUtils.isOriginEqual(e.origin, this.origin)) {
        debug('not same origin', e.origin, this.origin);
        return;
      }

      var iframeMessage;

      try {
        iframeMessage = JSON3.parse(e.data);
      } catch (ignored) {
        debug('bad json', e.data);
        return;
      }

      if (iframeMessage.windowId !== this.windowId) {
        debug('mismatched window id', iframeMessage.windowId, this.windowId);
        return;
      }

      switch (iframeMessage.type) {
        case 's':
          this.iframeObj.loaded(); // window global dependency

          this.postMessage('s', JSON3.stringify([version, this.transport, this.transUrl, this.baseUrl]));
          break;

        case 't':
          this.emit('message', iframeMessage.data);
          break;

        case 'c':
          var cdata;

          try {
            cdata = JSON3.parse(iframeMessage.data);
          } catch (ignored) {
            debug('bad json', iframeMessage.data);
            return;
          }

          this.emit('close', cdata[0], cdata[1]);
          this.close();
          break;
      }
    };

    IframeTransport.prototype.postMessage = function (type, data) {
      debug('postMessage', type, data);
      this.iframeObj.post(JSON3.stringify({
        windowId: this.windowId,
        type: type,
        data: data || ''
      }), this.origin);
    };

    IframeTransport.prototype.send = function (message) {
      debug('send', message);
      this.postMessage('m', message);
    };

    IframeTransport.enabled = function () {
      return iframeUtils.iframeEnabled;
    };

    IframeTransport.transportName = 'iframe';
    IframeTransport.roundTrips = 2;
    module.exports = IframeTransport;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/jsonp-polling.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/jsonp-polling.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportJsonpPollingJs(module, exports, __webpack_require__) {
    "use strict"; // The simplest and most robust transport, using the well-know cross
    // domain hack - JSONP. This transport is quite inefficient - one
    // message could use up to one http request. But at least it works almost
    // everywhere.
    // Known limitations:
    //   o you will get a spinning cursor
    //   o for Konqueror a dumb timer is needed to detect errors

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        SenderReceiver = __webpack_require__(
    /*! ./lib/sender-receiver */
    "./node_modules/sockjs-client/lib/transport/lib/sender-receiver.js"),
        JsonpReceiver = __webpack_require__(
    /*! ./receiver/jsonp */
    "./node_modules/sockjs-client/lib/transport/receiver/jsonp.js"),
        jsonpSender = __webpack_require__(
    /*! ./sender/jsonp */
    "./node_modules/sockjs-client/lib/transport/sender/jsonp.js");

    function JsonPTransport(transUrl) {
      if (!JsonPTransport.enabled()) {
        throw new Error('Transport created when disabled');
      }

      SenderReceiver.call(this, transUrl, '/jsonp', jsonpSender, JsonpReceiver);
    }

    inherits(JsonPTransport, SenderReceiver);

    JsonPTransport.enabled = function () {
      return !!global.document;
    };

    JsonPTransport.transportName = 'jsonp-polling';
    JsonPTransport.roundTrips = 1;
    JsonPTransport.needBody = true;
    module.exports = JsonPTransport;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/lib/ajax-based.js":
  /*!********************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/lib/ajax-based.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportLibAjaxBasedJs(module, exports, __webpack_require__) {
    "use strict";

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        urlUtils = __webpack_require__(
    /*! ../../utils/url */
    "./node_modules/sockjs-client/lib/utils/url.js"),
        SenderReceiver = __webpack_require__(
    /*! ./sender-receiver */
    "./node_modules/sockjs-client/lib/transport/lib/sender-receiver.js");

    var debug = function debug() {};

    if (true) {
      debug = __webpack_require__(
      /*! debug */
      "./node_modules/sockjs-client/node_modules/debug/src/browser.js")('sockjs-client:ajax-based');
    }

    function createAjaxSender(AjaxObject) {
      return function (url, payload, callback) {
        debug('create ajax sender', url, payload);
        var opt = {};

        if (typeof payload === 'string') {
          opt.headers = {
            'Content-type': 'text/plain'
          };
        }

        var ajaxUrl = urlUtils.addPath(url, '/xhr_send');
        var xo = new AjaxObject('POST', ajaxUrl, payload, opt);
        xo.once('finish', function (status) {
          debug('finish', status);
          xo = null;

          if (status !== 200 && status !== 204) {
            return callback(new Error('http status ' + status));
          }

          callback();
        });
        return function () {
          debug('abort');
          xo.close();
          xo = null;
          var err = new Error('Aborted');
          err.code = 1000;
          callback(err);
        };
      };
    }

    function AjaxBasedTransport(transUrl, urlSuffix, Receiver, AjaxObject) {
      SenderReceiver.call(this, transUrl, urlSuffix, createAjaxSender(AjaxObject), Receiver, AjaxObject);
    }

    inherits(AjaxBasedTransport, SenderReceiver);
    module.exports = AjaxBasedTransport;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/lib/buffered-sender.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/lib/buffered-sender.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportLibBufferedSenderJs(module, exports, __webpack_require__) {
    "use strict";

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        EventEmitter = __webpack_require__(
    /*! events */
    "./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter;

    var debug = function debug() {};

    if (true) {
      debug = __webpack_require__(
      /*! debug */
      "./node_modules/sockjs-client/node_modules/debug/src/browser.js")('sockjs-client:buffered-sender');
    }

    function BufferedSender(url, sender) {
      debug(url);
      EventEmitter.call(this);
      this.sendBuffer = [];
      this.sender = sender;
      this.url = url;
    }

    inherits(BufferedSender, EventEmitter);

    BufferedSender.prototype.send = function (message) {
      debug('send', message);
      this.sendBuffer.push(message);

      if (!this.sendStop) {
        this.sendSchedule();
      }
    }; // For polling transports in a situation when in the message callback,
    // new message is being send. If the sending connection was started
    // before receiving one, it is possible to saturate the network and
    // timeout due to the lack of receiving socket. To avoid that we delay
    // sending messages by some small time, in order to let receiving
    // connection be started beforehand. This is only a halfmeasure and
    // does not fix the big problem, but it does make the tests go more
    // stable on slow networks.


    BufferedSender.prototype.sendScheduleWait = function () {
      debug('sendScheduleWait');
      var self = this;
      var tref;

      this.sendStop = function () {
        debug('sendStop');
        self.sendStop = null;
        clearTimeout(tref);
      };

      tref = setTimeout(function () {
        debug('timeout');
        self.sendStop = null;
        self.sendSchedule();
      }, 25);
    };

    BufferedSender.prototype.sendSchedule = function () {
      debug('sendSchedule', this.sendBuffer.length);
      var self = this;

      if (this.sendBuffer.length > 0) {
        var payload = '[' + this.sendBuffer.join(',') + ']';
        this.sendStop = this.sender(this.url, payload, function (err) {
          self.sendStop = null;

          if (err) {
            debug('error', err);
            self.emit('close', err.code || 1006, 'Sending error: ' + err);
            self.close();
          } else {
            self.sendScheduleWait();
          }
        });
        this.sendBuffer = [];
      }
    };

    BufferedSender.prototype._cleanup = function () {
      debug('_cleanup');
      this.removeAllListeners();
    };

    BufferedSender.prototype.close = function () {
      debug('close');

      this._cleanup();

      if (this.sendStop) {
        this.sendStop();
        this.sendStop = null;
      }
    };

    module.exports = BufferedSender;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/lib/iframe-wrap.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/lib/iframe-wrap.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportLibIframeWrapJs(module, exports, __webpack_require__) {
    "use strict";

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        IframeTransport = __webpack_require__(
    /*! ../iframe */
    "./node_modules/sockjs-client/lib/transport/iframe.js"),
        objectUtils = __webpack_require__(
    /*! ../../utils/object */
    "./node_modules/sockjs-client/lib/utils/object.js");

    module.exports = function (transport) {
      function IframeWrapTransport(transUrl, baseUrl) {
        IframeTransport.call(this, transport.transportName, transUrl, baseUrl);
      }

      inherits(IframeWrapTransport, IframeTransport);

      IframeWrapTransport.enabled = function (url, info) {
        if (!global.document) {
          return false;
        }

        var iframeInfo = objectUtils.extend({}, info);
        iframeInfo.sameOrigin = true;
        return transport.enabled(iframeInfo) && IframeTransport.enabled();
      };

      IframeWrapTransport.transportName = 'iframe-' + transport.transportName;
      IframeWrapTransport.needBody = true;
      IframeWrapTransport.roundTrips = IframeTransport.roundTrips + transport.roundTrips - 1; // html, javascript (2) + transport - no CORS (1)

      IframeWrapTransport.facadeTransport = transport;
      return IframeWrapTransport;
    };
    /***/

  },

  /***/
  "./node_modules/sockjs-client/lib/transport/lib/polling.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/lib/polling.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportLibPollingJs(module, exports, __webpack_require__) {
    "use strict";

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        EventEmitter = __webpack_require__(
    /*! events */
    "./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter;

    var debug = function debug() {};

    if (true) {
      debug = __webpack_require__(
      /*! debug */
      "./node_modules/sockjs-client/node_modules/debug/src/browser.js")('sockjs-client:polling');
    }

    function Polling(Receiver, receiveUrl, AjaxObject) {
      debug(receiveUrl);
      EventEmitter.call(this);
      this.Receiver = Receiver;
      this.receiveUrl = receiveUrl;
      this.AjaxObject = AjaxObject;

      this._scheduleReceiver();
    }

    inherits(Polling, EventEmitter);

    Polling.prototype._scheduleReceiver = function () {
      debug('_scheduleReceiver');
      var self = this;
      var poll = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);
      poll.on('message', function (msg) {
        debug('message', msg);
        self.emit('message', msg);
      });
      poll.once('close', function (code, reason) {
        debug('close', code, reason, self.pollIsClosing);
        self.poll = poll = null;

        if (!self.pollIsClosing) {
          if (reason === 'network') {
            self._scheduleReceiver();
          } else {
            self.emit('close', code || 1006, reason);
            self.removeAllListeners();
          }
        }
      });
    };

    Polling.prototype.abort = function () {
      debug('abort');
      this.removeAllListeners();
      this.pollIsClosing = true;

      if (this.poll) {
        this.poll.abort();
      }
    };

    module.exports = Polling;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/lib/sender-receiver.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/lib/sender-receiver.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportLibSenderReceiverJs(module, exports, __webpack_require__) {
    "use strict";

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        urlUtils = __webpack_require__(
    /*! ../../utils/url */
    "./node_modules/sockjs-client/lib/utils/url.js"),
        BufferedSender = __webpack_require__(
    /*! ./buffered-sender */
    "./node_modules/sockjs-client/lib/transport/lib/buffered-sender.js"),
        Polling = __webpack_require__(
    /*! ./polling */
    "./node_modules/sockjs-client/lib/transport/lib/polling.js");

    var debug = function debug() {};

    if (true) {
      debug = __webpack_require__(
      /*! debug */
      "./node_modules/sockjs-client/node_modules/debug/src/browser.js")('sockjs-client:sender-receiver');
    }

    function SenderReceiver(transUrl, urlSuffix, senderFunc, Receiver, AjaxObject) {
      var pollUrl = urlUtils.addPath(transUrl, urlSuffix);
      debug(pollUrl);
      var self = this;
      BufferedSender.call(this, transUrl, senderFunc);
      this.poll = new Polling(Receiver, pollUrl, AjaxObject);
      this.poll.on('message', function (msg) {
        debug('poll message', msg);
        self.emit('message', msg);
      });
      this.poll.once('close', function (code, reason) {
        debug('poll close', code, reason);
        self.poll = null;
        self.emit('close', code, reason);
        self.close();
      });
    }

    inherits(SenderReceiver, BufferedSender);

    SenderReceiver.prototype.close = function () {
      BufferedSender.prototype.close.call(this);
      debug('close');
      this.removeAllListeners();

      if (this.poll) {
        this.poll.abort();
        this.poll = null;
      }
    };

    module.exports = SenderReceiver;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/receiver/eventsource.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/receiver/eventsource.js ***!
    \**************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportReceiverEventsourceJs(module, exports, __webpack_require__) {
    "use strict";

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        EventEmitter = __webpack_require__(
    /*! events */
    "./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter,
        EventSourceDriver = __webpack_require__(
    /*! eventsource */
    "./node_modules/sockjs-client/lib/transport/browser/eventsource.js");

    var debug = function debug() {};

    if (true) {
      debug = __webpack_require__(
      /*! debug */
      "./node_modules/sockjs-client/node_modules/debug/src/browser.js")('sockjs-client:receiver:eventsource');
    }

    function EventSourceReceiver(url) {
      debug(url);
      EventEmitter.call(this);
      var self = this;
      var es = this.es = new EventSourceDriver(url);

      es.onmessage = function (e) {
        debug('message', e.data);
        self.emit('message', decodeURI(e.data));
      };

      es.onerror = function (e) {
        debug('error', es.readyState, e); // ES on reconnection has readyState = 0 or 1.
        // on network error it's CLOSED = 2

        var reason = es.readyState !== 2 ? 'network' : 'permanent';

        self._cleanup();

        self._close(reason);
      };
    }

    inherits(EventSourceReceiver, EventEmitter);

    EventSourceReceiver.prototype.abort = function () {
      debug('abort');

      this._cleanup();

      this._close('user');
    };

    EventSourceReceiver.prototype._cleanup = function () {
      debug('cleanup');
      var es = this.es;

      if (es) {
        es.onmessage = es.onerror = null;
        es.close();
        this.es = null;
      }
    };

    EventSourceReceiver.prototype._close = function (reason) {
      debug('close', reason);
      var self = this; // Safari and chrome < 15 crash if we close window before
      // waiting for ES cleanup. See:
      // https://code.google.com/p/chromium/issues/detail?id=89155

      setTimeout(function () {
        self.emit('close', null, reason);
        self.removeAllListeners();
      }, 200);
    };

    module.exports = EventSourceReceiver;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/receiver/htmlfile.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/receiver/htmlfile.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportReceiverHtmlfileJs(module, exports, __webpack_require__) {
    "use strict";

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        iframeUtils = __webpack_require__(
    /*! ../../utils/iframe */
    "./node_modules/sockjs-client/lib/utils/iframe.js"),
        urlUtils = __webpack_require__(
    /*! ../../utils/url */
    "./node_modules/sockjs-client/lib/utils/url.js"),
        EventEmitter = __webpack_require__(
    /*! events */
    "./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter,
        random = __webpack_require__(
    /*! ../../utils/random */
    "./node_modules/sockjs-client/lib/utils/random.js");

    var debug = function debug() {};

    if (true) {
      debug = __webpack_require__(
      /*! debug */
      "./node_modules/sockjs-client/node_modules/debug/src/browser.js")('sockjs-client:receiver:htmlfile');
    }

    function HtmlfileReceiver(url) {
      debug(url);
      EventEmitter.call(this);
      var self = this;
      iframeUtils.polluteGlobalNamespace();
      this.id = 'a' + random.string(6);
      url = urlUtils.addQuery(url, 'c=' + decodeURIComponent(iframeUtils.WPrefix + '.' + this.id));
      debug('using htmlfile', HtmlfileReceiver.htmlfileEnabled);
      var constructFunc = HtmlfileReceiver.htmlfileEnabled ? iframeUtils.createHtmlfile : iframeUtils.createIframe;
      global[iframeUtils.WPrefix][this.id] = {
        start: function start() {
          debug('start');
          self.iframeObj.loaded();
        },
        message: function message(data) {
          debug('message', data);
          self.emit('message', data);
        },
        stop: function stop() {
          debug('stop');

          self._cleanup();

          self._close('network');
        }
      };
      this.iframeObj = constructFunc(url, function () {
        debug('callback');

        self._cleanup();

        self._close('permanent');
      });
    }

    inherits(HtmlfileReceiver, EventEmitter);

    HtmlfileReceiver.prototype.abort = function () {
      debug('abort');

      this._cleanup();

      this._close('user');
    };

    HtmlfileReceiver.prototype._cleanup = function () {
      debug('_cleanup');

      if (this.iframeObj) {
        this.iframeObj.cleanup();
        this.iframeObj = null;
      }

      delete global[iframeUtils.WPrefix][this.id];
    };

    HtmlfileReceiver.prototype._close = function (reason) {
      debug('_close', reason);
      this.emit('close', null, reason);
      this.removeAllListeners();
    };

    HtmlfileReceiver.htmlfileEnabled = false; // obfuscate to avoid firewalls

    var axo = ['Active'].concat('Object').join('X');

    if (axo in global) {
      try {
        HtmlfileReceiver.htmlfileEnabled = !!new global[axo]('htmlfile');
      } catch (x) {// intentionally empty
      }
    }

    HtmlfileReceiver.enabled = HtmlfileReceiver.htmlfileEnabled || iframeUtils.iframeEnabled;
    module.exports = HtmlfileReceiver;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/receiver/jsonp.js":
  /*!********************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/receiver/jsonp.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportReceiverJsonpJs(module, exports, __webpack_require__) {
    "use strict";

    var utils = __webpack_require__(
    /*! ../../utils/iframe */
    "./node_modules/sockjs-client/lib/utils/iframe.js"),
        random = __webpack_require__(
    /*! ../../utils/random */
    "./node_modules/sockjs-client/lib/utils/random.js"),
        browser = __webpack_require__(
    /*! ../../utils/browser */
    "./node_modules/sockjs-client/lib/utils/browser.js"),
        urlUtils = __webpack_require__(
    /*! ../../utils/url */
    "./node_modules/sockjs-client/lib/utils/url.js"),
        inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        EventEmitter = __webpack_require__(
    /*! events */
    "./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter;

    var debug = function debug() {};

    if (true) {
      debug = __webpack_require__(
      /*! debug */
      "./node_modules/sockjs-client/node_modules/debug/src/browser.js")('sockjs-client:receiver:jsonp');
    }

    function JsonpReceiver(url) {
      debug(url);
      var self = this;
      EventEmitter.call(this);
      utils.polluteGlobalNamespace();
      this.id = 'a' + random.string(6);
      var urlWithId = urlUtils.addQuery(url, 'c=' + encodeURIComponent(utils.WPrefix + '.' + this.id));
      global[utils.WPrefix][this.id] = this._callback.bind(this);

      this._createScript(urlWithId); // Fallback mostly for Konqueror - stupid timer, 35 seconds shall be plenty.


      this.timeoutId = setTimeout(function () {
        debug('timeout');

        self._abort(new Error('JSONP script loaded abnormally (timeout)'));
      }, JsonpReceiver.timeout);
    }

    inherits(JsonpReceiver, EventEmitter);

    JsonpReceiver.prototype.abort = function () {
      debug('abort');

      if (global[utils.WPrefix][this.id]) {
        var err = new Error('JSONP user aborted read');
        err.code = 1000;

        this._abort(err);
      }
    };

    JsonpReceiver.timeout = 35000;
    JsonpReceiver.scriptErrorTimeout = 1000;

    JsonpReceiver.prototype._callback = function (data) {
      debug('_callback', data);

      this._cleanup();

      if (this.aborting) {
        return;
      }

      if (data) {
        debug('message', data);
        this.emit('message', data);
      }

      this.emit('close', null, 'network');
      this.removeAllListeners();
    };

    JsonpReceiver.prototype._abort = function (err) {
      debug('_abort', err);

      this._cleanup();

      this.aborting = true;
      this.emit('close', err.code, err.message);
      this.removeAllListeners();
    };

    JsonpReceiver.prototype._cleanup = function () {
      debug('_cleanup');
      clearTimeout(this.timeoutId);

      if (this.script2) {
        this.script2.parentNode.removeChild(this.script2);
        this.script2 = null;
      }

      if (this.script) {
        var script = this.script; // Unfortunately, you can't really abort script loading of
        // the script.

        script.parentNode.removeChild(script);
        script.onreadystatechange = script.onerror = script.onload = script.onclick = null;
        this.script = null;
      }

      delete global[utils.WPrefix][this.id];
    };

    JsonpReceiver.prototype._scriptError = function () {
      debug('_scriptError');
      var self = this;

      if (this.errorTimer) {
        return;
      }

      this.errorTimer = setTimeout(function () {
        if (!self.loadedOkay) {
          self._abort(new Error('JSONP script loaded abnormally (onerror)'));
        }
      }, JsonpReceiver.scriptErrorTimeout);
    };

    JsonpReceiver.prototype._createScript = function (url) {
      debug('_createScript', url);
      var self = this;
      var script = this.script = global.document.createElement('script');
      var script2; // Opera synchronous load trick.

      script.id = 'a' + random.string(8);
      script.src = url;
      script.type = 'text/javascript';
      script.charset = 'UTF-8';
      script.onerror = this._scriptError.bind(this);

      script.onload = function () {
        debug('onload');

        self._abort(new Error('JSONP script loaded abnormally (onload)'));
      }; // IE9 fires 'error' event after onreadystatechange or before, in random order.
      // Use loadedOkay to determine if actually errored


      script.onreadystatechange = function () {
        debug('onreadystatechange', script.readyState);

        if (/loaded|closed/.test(script.readyState)) {
          if (script && script.htmlFor && script.onclick) {
            self.loadedOkay = true;

            try {
              // In IE, actually execute the script.
              script.onclick();
            } catch (x) {// intentionally empty
            }
          }

          if (script) {
            self._abort(new Error('JSONP script loaded abnormally (onreadystatechange)'));
          }
        }
      }; // IE: event/htmlFor/onclick trick.
      // One can't rely on proper order for onreadystatechange. In order to
      // make sure, set a 'htmlFor' and 'event' properties, so that
      // script code will be installed as 'onclick' handler for the
      // script object. Later, onreadystatechange, manually execute this
      // code. FF and Chrome doesn't work with 'event' and 'htmlFor'
      // set. For reference see:
      //   http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
      // Also, read on that about script ordering:
      //   http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order


      if (typeof script.async === 'undefined' && global.document.attachEvent) {
        // According to mozilla docs, in recent browsers script.async defaults
        // to 'true', so we may use it to detect a good browser:
        // https://developer.mozilla.org/en/HTML/Element/script
        if (!browser.isOpera()) {
          // Naively assume we're in IE
          try {
            script.htmlFor = script.id;
            script.event = 'onclick';
          } catch (x) {// intentionally empty
          }

          script.async = true;
        } else {
          // Opera, second sync script hack
          script2 = this.script2 = global.document.createElement('script');
          script2.text = "try{var a = document.getElementById('" + script.id + "'); if(a)a.onerror();}catch(x){};";
          script.async = script2.async = false;
        }
      }

      if (typeof script.async !== 'undefined') {
        script.async = true;
      }

      var head = global.document.getElementsByTagName('head')[0];
      head.insertBefore(script, head.firstChild);

      if (script2) {
        head.insertBefore(script2, head.firstChild);
      }
    };

    module.exports = JsonpReceiver;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/receiver/xhr.js":
  /*!******************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/receiver/xhr.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportReceiverXhrJs(module, exports, __webpack_require__) {
    "use strict";

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        EventEmitter = __webpack_require__(
    /*! events */
    "./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter;

    var debug = function debug() {};

    if (true) {
      debug = __webpack_require__(
      /*! debug */
      "./node_modules/sockjs-client/node_modules/debug/src/browser.js")('sockjs-client:receiver:xhr');
    }

    function XhrReceiver(url, AjaxObject) {
      debug(url);
      EventEmitter.call(this);
      var self = this;
      this.bufferPosition = 0;
      this.xo = new AjaxObject('POST', url, null);
      this.xo.on('chunk', this._chunkHandler.bind(this));
      this.xo.once('finish', function (status, text) {
        debug('finish', status, text);

        self._chunkHandler(status, text);

        self.xo = null;
        var reason = status === 200 ? 'network' : 'permanent';
        debug('close', reason);
        self.emit('close', null, reason);

        self._cleanup();
      });
    }

    inherits(XhrReceiver, EventEmitter);

    XhrReceiver.prototype._chunkHandler = function (status, text) {
      debug('_chunkHandler', status);

      if (status !== 200 || !text) {
        return;
      }

      for (var idx = -1;; this.bufferPosition += idx + 1) {
        var buf = text.slice(this.bufferPosition);
        idx = buf.indexOf('\n');

        if (idx === -1) {
          break;
        }

        var msg = buf.slice(0, idx);

        if (msg) {
          debug('message', msg);
          this.emit('message', msg);
        }
      }
    };

    XhrReceiver.prototype._cleanup = function () {
      debug('_cleanup');
      this.removeAllListeners();
    };

    XhrReceiver.prototype.abort = function () {
      debug('abort');

      if (this.xo) {
        this.xo.close();
        debug('close');
        this.emit('close', null, 'user');
        this.xo = null;
      }

      this._cleanup();
    };

    module.exports = XhrReceiver;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/sender/jsonp.js":
  /*!******************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/sender/jsonp.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportSenderJsonpJs(module, exports, __webpack_require__) {
    "use strict";

    var random = __webpack_require__(
    /*! ../../utils/random */
    "./node_modules/sockjs-client/lib/utils/random.js"),
        urlUtils = __webpack_require__(
    /*! ../../utils/url */
    "./node_modules/sockjs-client/lib/utils/url.js");

    var debug = function debug() {};

    if (true) {
      debug = __webpack_require__(
      /*! debug */
      "./node_modules/sockjs-client/node_modules/debug/src/browser.js")('sockjs-client:sender:jsonp');
    }

    var form, area;

    function createIframe(id) {
      debug('createIframe', id);

      try {
        // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
        return global.document.createElement('<iframe name="' + id + '">');
      } catch (x) {
        var iframe = global.document.createElement('iframe');
        iframe.name = id;
        return iframe;
      }
    }

    function createForm() {
      debug('createForm');
      form = global.document.createElement('form');
      form.style.display = 'none';
      form.style.position = 'absolute';
      form.method = 'POST';
      form.enctype = 'application/x-www-form-urlencoded';
      form.acceptCharset = 'UTF-8';
      area = global.document.createElement('textarea');
      area.name = 'd';
      form.appendChild(area);
      global.document.body.appendChild(form);
    }

    module.exports = function (url, payload, callback) {
      debug(url, payload);

      if (!form) {
        createForm();
      }

      var id = 'a' + random.string(8);
      form.target = id;
      form.action = urlUtils.addQuery(urlUtils.addPath(url, '/jsonp_send'), 'i=' + id);
      var iframe = createIframe(id);
      iframe.id = id;
      iframe.style.display = 'none';
      form.appendChild(iframe);

      try {
        area.value = payload;
      } catch (e) {// seriously broken browsers get here
      }

      form.submit();

      var completed = function completed(err) {
        debug('completed', id, err);

        if (!iframe.onerror) {
          return;
        }

        iframe.onreadystatechange = iframe.onerror = iframe.onload = null; // Opera mini doesn't like if we GC iframe
        // immediately, thus this timeout.

        setTimeout(function () {
          debug('cleaning up', id);
          iframe.parentNode.removeChild(iframe);
          iframe = null;
        }, 500);
        area.value = ''; // It is not possible to detect if the iframe succeeded or
        // failed to submit our form.

        callback(err);
      };

      iframe.onerror = function () {
        debug('onerror', id);
        completed();
      };

      iframe.onload = function () {
        debug('onload', id);
        completed();
      };

      iframe.onreadystatechange = function (e) {
        debug('onreadystatechange', id, iframe.readyState, e);

        if (iframe.readyState === 'complete') {
          completed();
        }
      };

      return function () {
        debug('aborted', id);
        completed(new Error('Aborted'));
      };
    };
    /***/

  },

  /***/
  "./node_modules/sockjs-client/lib/transport/sender/xdr.js":
  /*!****************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/sender/xdr.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportSenderXdrJs(module, exports, __webpack_require__) {
    "use strict";

    var EventEmitter = __webpack_require__(
    /*! events */
    "./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter,
        inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        eventUtils = __webpack_require__(
    /*! ../../utils/event */
    "./node_modules/sockjs-client/lib/utils/event.js"),
        browser = __webpack_require__(
    /*! ../../utils/browser */
    "./node_modules/sockjs-client/lib/utils/browser.js"),
        urlUtils = __webpack_require__(
    /*! ../../utils/url */
    "./node_modules/sockjs-client/lib/utils/url.js");

    var debug = function debug() {};

    if (true) {
      debug = __webpack_require__(
      /*! debug */
      "./node_modules/sockjs-client/node_modules/debug/src/browser.js")('sockjs-client:sender:xdr');
    } // References:
    //   http://ajaxian.com/archives/100-line-ajax-wrapper
    //   http://msdn.microsoft.com/en-us/library/cc288060(v=VS.85).aspx


    function XDRObject(method, url, payload) {
      debug(method, url);
      var self = this;
      EventEmitter.call(this);
      setTimeout(function () {
        self._start(method, url, payload);
      }, 0);
    }

    inherits(XDRObject, EventEmitter);

    XDRObject.prototype._start = function (method, url, payload) {
      debug('_start');
      var self = this;
      var xdr = new global.XDomainRequest(); // IE caches even POSTs

      url = urlUtils.addQuery(url, 't=' + +new Date());

      xdr.onerror = function () {
        debug('onerror');

        self._error();
      };

      xdr.ontimeout = function () {
        debug('ontimeout');

        self._error();
      };

      xdr.onprogress = function () {
        debug('progress', xdr.responseText);
        self.emit('chunk', 200, xdr.responseText);
      };

      xdr.onload = function () {
        debug('load');
        self.emit('finish', 200, xdr.responseText);

        self._cleanup(false);
      };

      this.xdr = xdr;
      this.unloadRef = eventUtils.unloadAdd(function () {
        self._cleanup(true);
      });

      try {
        // Fails with AccessDenied if port number is bogus
        this.xdr.open(method, url);

        if (this.timeout) {
          this.xdr.timeout = this.timeout;
        }

        this.xdr.send(payload);
      } catch (x) {
        this._error();
      }
    };

    XDRObject.prototype._error = function () {
      this.emit('finish', 0, '');

      this._cleanup(false);
    };

    XDRObject.prototype._cleanup = function (abort) {
      debug('cleanup', abort);

      if (!this.xdr) {
        return;
      }

      this.removeAllListeners();
      eventUtils.unloadDel(this.unloadRef);
      this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null;

      if (abort) {
        try {
          this.xdr.abort();
        } catch (x) {// intentionally empty
        }
      }

      this.unloadRef = this.xdr = null;
    };

    XDRObject.prototype.close = function () {
      debug('close');

      this._cleanup(true);
    }; // IE 8/9 if the request target uses the same scheme - #79


    XDRObject.enabled = !!(global.XDomainRequest && browser.hasDomain());
    module.exports = XDRObject;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/sender/xhr-cors.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/sender/xhr-cors.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportSenderXhrCorsJs(module, exports, __webpack_require__) {
    "use strict";

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        XhrDriver = __webpack_require__(
    /*! ../driver/xhr */
    "./node_modules/sockjs-client/lib/transport/browser/abstract-xhr.js");

    function XHRCorsObject(method, url, payload, opts) {
      XhrDriver.call(this, method, url, payload, opts);
    }

    inherits(XHRCorsObject, XhrDriver);
    XHRCorsObject.enabled = XhrDriver.enabled && XhrDriver.supportsCORS;
    module.exports = XHRCorsObject;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/sender/xhr-fake.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/sender/xhr-fake.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportSenderXhrFakeJs(module, exports, __webpack_require__) {
    "use strict";

    var EventEmitter = __webpack_require__(
    /*! events */
    "./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter,
        inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js");

    function XHRFake()
    /* method, url, payload, opts */
    {
      var self = this;
      EventEmitter.call(this);
      this.to = setTimeout(function () {
        self.emit('finish', 200, '{}');
      }, XHRFake.timeout);
    }

    inherits(XHRFake, EventEmitter);

    XHRFake.prototype.close = function () {
      clearTimeout(this.to);
    };

    XHRFake.timeout = 2000;
    module.exports = XHRFake;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/sender/xhr-local.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/sender/xhr-local.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportSenderXhrLocalJs(module, exports, __webpack_require__) {
    "use strict";

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        XhrDriver = __webpack_require__(
    /*! ../driver/xhr */
    "./node_modules/sockjs-client/lib/transport/browser/abstract-xhr.js");

    function XHRLocalObject(method, url, payload
    /*, opts */
    ) {
      XhrDriver.call(this, method, url, payload, {
        noCredentials: true
      });
    }

    inherits(XHRLocalObject, XhrDriver);
    XHRLocalObject.enabled = XhrDriver.enabled;
    module.exports = XHRLocalObject;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/websocket.js":
  /*!***************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/websocket.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportWebsocketJs(module, exports, __webpack_require__) {
    "use strict";

    var utils = __webpack_require__(
    /*! ../utils/event */
    "./node_modules/sockjs-client/lib/utils/event.js"),
        urlUtils = __webpack_require__(
    /*! ../utils/url */
    "./node_modules/sockjs-client/lib/utils/url.js"),
        inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        EventEmitter = __webpack_require__(
    /*! events */
    "./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter,
        WebsocketDriver = __webpack_require__(
    /*! ./driver/websocket */
    "./node_modules/sockjs-client/lib/transport/browser/websocket.js");

    var debug = function debug() {};

    if (true) {
      debug = __webpack_require__(
      /*! debug */
      "./node_modules/sockjs-client/node_modules/debug/src/browser.js")('sockjs-client:websocket');
    }

    function WebSocketTransport(transUrl, ignore, options) {
      if (!WebSocketTransport.enabled()) {
        throw new Error('Transport created when disabled');
      }

      EventEmitter.call(this);
      debug('constructor', transUrl);
      var self = this;
      var url = urlUtils.addPath(transUrl, '/websocket');

      if (url.slice(0, 5) === 'https') {
        url = 'wss' + url.slice(5);
      } else {
        url = 'ws' + url.slice(4);
      }

      this.url = url;
      this.ws = new WebsocketDriver(this.url, [], options);

      this.ws.onmessage = function (e) {
        debug('message event', e.data);
        self.emit('message', e.data);
      }; // Firefox has an interesting bug. If a websocket connection is
      // created after onunload, it stays alive even when user
      // navigates away from the page. In such situation let's lie -
      // let's not open the ws connection at all. See:
      // https://github.com/sockjs/sockjs-client/issues/28
      // https://bugzilla.mozilla.org/show_bug.cgi?id=696085


      this.unloadRef = utils.unloadAdd(function () {
        debug('unload');
        self.ws.close();
      });

      this.ws.onclose = function (e) {
        debug('close event', e.code, e.reason);
        self.emit('close', e.code, e.reason);

        self._cleanup();
      };

      this.ws.onerror = function (e) {
        debug('error event', e);
        self.emit('close', 1006, 'WebSocket connection broken');

        self._cleanup();
      };
    }

    inherits(WebSocketTransport, EventEmitter);

    WebSocketTransport.prototype.send = function (data) {
      var msg = '[' + data + ']';
      debug('send', msg);
      this.ws.send(msg);
    };

    WebSocketTransport.prototype.close = function () {
      debug('close');
      var ws = this.ws;

      this._cleanup();

      if (ws) {
        ws.close();
      }
    };

    WebSocketTransport.prototype._cleanup = function () {
      debug('_cleanup');
      var ws = this.ws;

      if (ws) {
        ws.onmessage = ws.onclose = ws.onerror = null;
      }

      utils.unloadDel(this.unloadRef);
      this.unloadRef = this.ws = null;
      this.removeAllListeners();
    };

    WebSocketTransport.enabled = function () {
      debug('enabled');
      return !!WebsocketDriver;
    };

    WebSocketTransport.transportName = 'websocket'; // In theory, ws should require 1 round trip. But in chrome, this is
    // not very stable over SSL. Most likely a ws connection requires a
    // separate SSL connection, in which case 2 round trips are an
    // absolute minumum.

    WebSocketTransport.roundTrips = 2;
    module.exports = WebSocketTransport;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/xdr-polling.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/xdr-polling.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportXdrPollingJs(module, exports, __webpack_require__) {
    "use strict";

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        AjaxBasedTransport = __webpack_require__(
    /*! ./lib/ajax-based */
    "./node_modules/sockjs-client/lib/transport/lib/ajax-based.js"),
        XdrStreamingTransport = __webpack_require__(
    /*! ./xdr-streaming */
    "./node_modules/sockjs-client/lib/transport/xdr-streaming.js"),
        XhrReceiver = __webpack_require__(
    /*! ./receiver/xhr */
    "./node_modules/sockjs-client/lib/transport/receiver/xhr.js"),
        XDRObject = __webpack_require__(
    /*! ./sender/xdr */
    "./node_modules/sockjs-client/lib/transport/sender/xdr.js");

    function XdrPollingTransport(transUrl) {
      if (!XDRObject.enabled) {
        throw new Error('Transport created when disabled');
      }

      AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XDRObject);
    }

    inherits(XdrPollingTransport, AjaxBasedTransport);
    XdrPollingTransport.enabled = XdrStreamingTransport.enabled;
    XdrPollingTransport.transportName = 'xdr-polling';
    XdrPollingTransport.roundTrips = 2; // preflight, ajax

    module.exports = XdrPollingTransport;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/xdr-streaming.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/xdr-streaming.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportXdrStreamingJs(module, exports, __webpack_require__) {
    "use strict";

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        AjaxBasedTransport = __webpack_require__(
    /*! ./lib/ajax-based */
    "./node_modules/sockjs-client/lib/transport/lib/ajax-based.js"),
        XhrReceiver = __webpack_require__(
    /*! ./receiver/xhr */
    "./node_modules/sockjs-client/lib/transport/receiver/xhr.js"),
        XDRObject = __webpack_require__(
    /*! ./sender/xdr */
    "./node_modules/sockjs-client/lib/transport/sender/xdr.js"); // According to:
    //   http://stackoverflow.com/questions/1641507/detect-browser-support-for-cross-domain-xmlhttprequests
    //   http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/


    function XdrStreamingTransport(transUrl) {
      if (!XDRObject.enabled) {
        throw new Error('Transport created when disabled');
      }

      AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XDRObject);
    }

    inherits(XdrStreamingTransport, AjaxBasedTransport);

    XdrStreamingTransport.enabled = function (info) {
      if (info.cookie_needed || info.nullOrigin) {
        return false;
      }

      return XDRObject.enabled && info.sameScheme;
    };

    XdrStreamingTransport.transportName = 'xdr-streaming';
    XdrStreamingTransport.roundTrips = 2; // preflight, ajax

    module.exports = XdrStreamingTransport;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/xhr-polling.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/xhr-polling.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportXhrPollingJs(module, exports, __webpack_require__) {
    "use strict";

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        AjaxBasedTransport = __webpack_require__(
    /*! ./lib/ajax-based */
    "./node_modules/sockjs-client/lib/transport/lib/ajax-based.js"),
        XhrReceiver = __webpack_require__(
    /*! ./receiver/xhr */
    "./node_modules/sockjs-client/lib/transport/receiver/xhr.js"),
        XHRCorsObject = __webpack_require__(
    /*! ./sender/xhr-cors */
    "./node_modules/sockjs-client/lib/transport/sender/xhr-cors.js"),
        XHRLocalObject = __webpack_require__(
    /*! ./sender/xhr-local */
    "./node_modules/sockjs-client/lib/transport/sender/xhr-local.js");

    function XhrPollingTransport(transUrl) {
      if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
        throw new Error('Transport created when disabled');
      }

      AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XHRCorsObject);
    }

    inherits(XhrPollingTransport, AjaxBasedTransport);

    XhrPollingTransport.enabled = function (info) {
      if (info.nullOrigin) {
        return false;
      }

      if (XHRLocalObject.enabled && info.sameOrigin) {
        return true;
      }

      return XHRCorsObject.enabled;
    };

    XhrPollingTransport.transportName = 'xhr-polling';
    XhrPollingTransport.roundTrips = 2; // preflight, ajax

    module.exports = XhrPollingTransport;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/transport/xhr-streaming.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/transport/xhr-streaming.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibTransportXhrStreamingJs(module, exports, __webpack_require__) {
    "use strict";

    var inherits = __webpack_require__(
    /*! inherits */
    "./node_modules/inherits/inherits_browser.js"),
        AjaxBasedTransport = __webpack_require__(
    /*! ./lib/ajax-based */
    "./node_modules/sockjs-client/lib/transport/lib/ajax-based.js"),
        XhrReceiver = __webpack_require__(
    /*! ./receiver/xhr */
    "./node_modules/sockjs-client/lib/transport/receiver/xhr.js"),
        XHRCorsObject = __webpack_require__(
    /*! ./sender/xhr-cors */
    "./node_modules/sockjs-client/lib/transport/sender/xhr-cors.js"),
        XHRLocalObject = __webpack_require__(
    /*! ./sender/xhr-local */
    "./node_modules/sockjs-client/lib/transport/sender/xhr-local.js"),
        browser = __webpack_require__(
    /*! ../utils/browser */
    "./node_modules/sockjs-client/lib/utils/browser.js");

    function XhrStreamingTransport(transUrl) {
      if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
        throw new Error('Transport created when disabled');
      }

      AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XHRCorsObject);
    }

    inherits(XhrStreamingTransport, AjaxBasedTransport);

    XhrStreamingTransport.enabled = function (info) {
      if (info.nullOrigin) {
        return false;
      } // Opera doesn't support xhr-streaming #60
      // But it might be able to #92


      if (browser.isOpera()) {
        return false;
      }

      return XHRCorsObject.enabled;
    };

    XhrStreamingTransport.transportName = 'xhr-streaming';
    XhrStreamingTransport.roundTrips = 2; // preflight, ajax
    // Safari gets confused when a streaming ajax request is started
    // before onload. This causes the load indicator to spin indefinetely.
    // Only require body when used in a browser

    XhrStreamingTransport.needBody = !!global.document;
    module.exports = XhrStreamingTransport;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/utils/browser-crypto.js":
  /*!****************************************************************!*\
    !*** ./node_modules/sockjs-client/lib/utils/browser-crypto.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibUtilsBrowserCryptoJs(module, exports, __webpack_require__) {
    "use strict";

    if (global.crypto && global.crypto.getRandomValues) {
      module.exports.randomBytes = function (length) {
        var bytes = new Uint8Array(length);
        global.crypto.getRandomValues(bytes);
        return bytes;
      };
    } else {
      module.exports.randomBytes = function (length) {
        var bytes = new Array(length);

        for (var i = 0; i < length; i++) {
          bytes[i] = Math.floor(Math.random() * 256);
        }

        return bytes;
      };
    }
    /***/

  },

  /***/
  "./node_modules/sockjs-client/lib/utils/browser.js":
  /*!*********************************************************!*\
    !*** ./node_modules/sockjs-client/lib/utils/browser.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibUtilsBrowserJs(module, exports, __webpack_require__) {
    "use strict";

    module.exports = {
      isOpera: function isOpera() {
        return global.navigator && /opera/i.test(global.navigator.userAgent);
      },
      isKonqueror: function isKonqueror() {
        return global.navigator && /konqueror/i.test(global.navigator.userAgent);
      } // #187 wrap document.domain in try/catch because of WP8 from file:///
      ,
      hasDomain: function hasDomain() {
        // non-browser client always has a domain
        if (!global.document) {
          return true;
        }

        try {
          return !!global.document.domain;
        } catch (e) {
          return false;
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/utils/escape.js":
  /*!********************************************************!*\
    !*** ./node_modules/sockjs-client/lib/utils/escape.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibUtilsEscapeJs(module, exports, __webpack_require__) {
    "use strict";

    var JSON3 = __webpack_require__(
    /*! json3 */
    "./node_modules/json3/lib/json3.js"); // Some extra characters that Chrome gets wrong, and substitutes with
    // something else on the wire.
    // eslint-disable-next-line no-control-regex, no-misleading-character-class


    var extraEscapable = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
        extraLookup; // This may be quite slow, so let's delay until user actually uses bad
    // characters.

    var unrollLookup = function unrollLookup(escapable) {
      var i;
      var unrolled = {};
      var c = [];

      for (i = 0; i < 65536; i++) {
        c.push(String.fromCharCode(i));
      }

      escapable.lastIndex = 0;
      c.join('').replace(escapable, function (a) {
        unrolled[a] = "\\u" + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        return '';
      });
      escapable.lastIndex = 0;
      return unrolled;
    }; // Quote string, also taking care of unicode characters that browsers
    // often break. Especially, take care of unicode surrogates:
    // http://en.wikipedia.org/wiki/Mapping_of_Unicode_characters#Surrogates


    module.exports = {
      quote: function quote(string) {
        var quoted = JSON3.stringify(string); // In most cases this should be very fast and good enough.

        extraEscapable.lastIndex = 0;

        if (!extraEscapable.test(quoted)) {
          return quoted;
        }

        if (!extraLookup) {
          extraLookup = unrollLookup(extraEscapable);
        }

        return quoted.replace(extraEscapable, function (a) {
          return extraLookup[a];
        });
      }
    };
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/utils/event.js":
  /*!*******************************************************!*\
    !*** ./node_modules/sockjs-client/lib/utils/event.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibUtilsEventJs(module, exports, __webpack_require__) {
    "use strict";

    var random = __webpack_require__(
    /*! ./random */
    "./node_modules/sockjs-client/lib/utils/random.js");

    var onUnload = {},
        afterUnload = false // detect google chrome packaged apps because they don't allow the 'unload' event
    ,
        isChromePackagedApp = global.chrome && global.chrome.app && global.chrome.app.runtime;
    module.exports = {
      attachEvent: function attachEvent(event, listener) {
        if (typeof global.addEventListener !== 'undefined') {
          global.addEventListener(event, listener, false);
        } else if (global.document && global.attachEvent) {
          // IE quirks.
          // According to: http://stevesouders.com/misc/test-postmessage.php
          // the message gets delivered only to 'document', not 'window'.
          global.document.attachEvent('on' + event, listener); // I get 'window' for ie8.

          global.attachEvent('on' + event, listener);
        }
      },
      detachEvent: function detachEvent(event, listener) {
        if (typeof global.addEventListener !== 'undefined') {
          global.removeEventListener(event, listener, false);
        } else if (global.document && global.detachEvent) {
          global.document.detachEvent('on' + event, listener);
          global.detachEvent('on' + event, listener);
        }
      },
      unloadAdd: function unloadAdd(listener) {
        if (isChromePackagedApp) {
          return null;
        }

        var ref = random.string(8);
        onUnload[ref] = listener;

        if (afterUnload) {
          setTimeout(this.triggerUnloadCallbacks, 0);
        }

        return ref;
      },
      unloadDel: function unloadDel(ref) {
        if (ref in onUnload) {
          delete onUnload[ref];
        }
      },
      triggerUnloadCallbacks: function triggerUnloadCallbacks() {
        for (var ref in onUnload) {
          onUnload[ref]();
          delete onUnload[ref];
        }
      }
    };

    var unloadTriggered = function unloadTriggered() {
      if (afterUnload) {
        return;
      }

      afterUnload = true;
      module.exports.triggerUnloadCallbacks();
    }; // 'unload' alone is not reliable in opera within an iframe, but we
    // can't use `beforeunload` as IE fires it on javascript: links.


    if (!isChromePackagedApp) {
      module.exports.attachEvent('unload', unloadTriggered);
    }
    /***/

  },

  /***/
  "./node_modules/sockjs-client/lib/utils/iframe.js":
  /*!********************************************************!*\
    !*** ./node_modules/sockjs-client/lib/utils/iframe.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibUtilsIframeJs(module, exports, __webpack_require__) {
    "use strict";

    var eventUtils = __webpack_require__(
    /*! ./event */
    "./node_modules/sockjs-client/lib/utils/event.js"),
        JSON3 = __webpack_require__(
    /*! json3 */
    "./node_modules/json3/lib/json3.js"),
        browser = __webpack_require__(
    /*! ./browser */
    "./node_modules/sockjs-client/lib/utils/browser.js");

    var debug = function debug() {};

    if (true) {
      debug = __webpack_require__(
      /*! debug */
      "./node_modules/sockjs-client/node_modules/debug/src/browser.js")('sockjs-client:utils:iframe');
    }

    module.exports = {
      WPrefix: '_jp',
      currentWindowId: null,
      polluteGlobalNamespace: function polluteGlobalNamespace() {
        if (!(module.exports.WPrefix in global)) {
          global[module.exports.WPrefix] = {};
        }
      },
      postMessage: function postMessage(type, data) {
        if (global.parent !== global) {
          global.parent.postMessage(JSON3.stringify({
            windowId: module.exports.currentWindowId,
            type: type,
            data: data || ''
          }), '*');
        } else {
          debug('Cannot postMessage, no parent window.', type, data);
        }
      },
      createIframe: function createIframe(iframeUrl, errorCallback) {
        var iframe = global.document.createElement('iframe');
        var tref, unloadRef;

        var unattach = function unattach() {
          debug('unattach');
          clearTimeout(tref); // Explorer had problems with that.

          try {
            iframe.onload = null;
          } catch (x) {// intentionally empty
          }

          iframe.onerror = null;
        };

        var cleanup = function cleanup() {
          debug('cleanup');

          if (iframe) {
            unattach(); // This timeout makes chrome fire onbeforeunload event
            // within iframe. Without the timeout it goes straight to
            // onunload.

            setTimeout(function () {
              if (iframe) {
                iframe.parentNode.removeChild(iframe);
              }

              iframe = null;
            }, 0);
            eventUtils.unloadDel(unloadRef);
          }
        };

        var onerror = function onerror(err) {
          debug('onerror', err);

          if (iframe) {
            cleanup();
            errorCallback(err);
          }
        };

        var post = function post(msg, origin) {
          debug('post', msg, origin);
          setTimeout(function () {
            try {
              // When the iframe is not loaded, IE raises an exception
              // on 'contentWindow'.
              if (iframe && iframe.contentWindow) {
                iframe.contentWindow.postMessage(msg, origin);
              }
            } catch (x) {// intentionally empty
            }
          }, 0);
        };

        iframe.src = iframeUrl;
        iframe.style.display = 'none';
        iframe.style.position = 'absolute';

        iframe.onerror = function () {
          onerror('onerror');
        };

        iframe.onload = function () {
          debug('onload'); // `onload` is triggered before scripts on the iframe are
          // executed. Give it few seconds to actually load stuff.

          clearTimeout(tref);
          tref = setTimeout(function () {
            onerror('onload timeout');
          }, 2000);
        };

        global.document.body.appendChild(iframe);
        tref = setTimeout(function () {
          onerror('timeout');
        }, 15000);
        unloadRef = eventUtils.unloadAdd(cleanup);
        return {
          post: post,
          cleanup: cleanup,
          loaded: unattach
        };
      }
      /* eslint no-undef: "off", new-cap: "off" */
      ,
      createHtmlfile: function createHtmlfile(iframeUrl, errorCallback) {
        var axo = ['Active'].concat('Object').join('X');
        var doc = new global[axo]('htmlfile');
        var tref, unloadRef;
        var iframe;

        var unattach = function unattach() {
          clearTimeout(tref);
          iframe.onerror = null;
        };

        var cleanup = function cleanup() {
          if (doc) {
            unattach();
            eventUtils.unloadDel(unloadRef);
            iframe.parentNode.removeChild(iframe);
            iframe = doc = null;
            CollectGarbage();
          }
        };

        var onerror = function onerror(r) {
          debug('onerror', r);

          if (doc) {
            cleanup();
            errorCallback(r);
          }
        };

        var post = function post(msg, origin) {
          try {
            // When the iframe is not loaded, IE raises an exception
            // on 'contentWindow'.
            setTimeout(function () {
              if (iframe && iframe.contentWindow) {
                iframe.contentWindow.postMessage(msg, origin);
              }
            }, 0);
          } catch (x) {// intentionally empty
          }
        };

        doc.open();
        doc.write('<html><s' + 'cript>' + 'document.domain="' + global.document.domain + '";' + '</s' + 'cript></html>');
        doc.close();
        doc.parentWindow[module.exports.WPrefix] = global[module.exports.WPrefix];
        var c = doc.createElement('div');
        doc.body.appendChild(c);
        iframe = doc.createElement('iframe');
        c.appendChild(iframe);
        iframe.src = iframeUrl;

        iframe.onerror = function () {
          onerror('onerror');
        };

        tref = setTimeout(function () {
          onerror('timeout');
        }, 15000);
        unloadRef = eventUtils.unloadAdd(cleanup);
        return {
          post: post,
          cleanup: cleanup,
          loaded: unattach
        };
      }
    };
    module.exports.iframeEnabled = false;

    if (global.document) {
      // postMessage misbehaves in konqueror 4.6.5 - the messages are delivered with
      // huge delay, or not at all.
      module.exports.iframeEnabled = (typeof global.postMessage === 'function' || typeof global.postMessage === 'object') && !browser.isKonqueror();
    }
    /***/

  },

  /***/
  "./node_modules/sockjs-client/lib/utils/log.js":
  /*!*****************************************************!*\
    !*** ./node_modules/sockjs-client/lib/utils/log.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibUtilsLogJs(module, exports, __webpack_require__) {
    "use strict";

    var logObject = {};
    ['log', 'debug', 'warn'].forEach(function (level) {
      var levelExists;

      try {
        levelExists = global.console && global.console[level] && global.console[level].apply;
      } catch (e) {// do nothing
      }

      logObject[level] = levelExists ? function () {
        return global.console[level].apply(global.console, arguments);
      } : level === 'log' ? function () {} : logObject.log;
    });
    module.exports = logObject;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/utils/object.js":
  /*!********************************************************!*\
    !*** ./node_modules/sockjs-client/lib/utils/object.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibUtilsObjectJs(module, exports, __webpack_require__) {
    "use strict";

    module.exports = {
      isObject: function isObject(obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
      },
      extend: function extend(obj) {
        if (!this.isObject(obj)) {
          return obj;
        }

        var source, prop;

        for (var i = 1, length = arguments.length; i < length; i++) {
          source = arguments[i];

          for (prop in source) {
            if (Object.prototype.hasOwnProperty.call(source, prop)) {
              obj[prop] = source[prop];
            }
          }
        }

        return obj;
      }
    };
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/utils/random.js":
  /*!********************************************************!*\
    !*** ./node_modules/sockjs-client/lib/utils/random.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibUtilsRandomJs(module, exports, __webpack_require__) {
    "use strict";

    var crypto = __webpack_require__(
    /*! crypto */
    "./node_modules/sockjs-client/lib/utils/browser-crypto.js"); // This string has length 32, a power of 2, so the modulus doesn't introduce a
    // bias.


    var _randomStringChars = 'abcdefghijklmnopqrstuvwxyz012345';
    module.exports = {
      string: function string(length) {
        var max = _randomStringChars.length;
        var bytes = crypto.randomBytes(length);
        var ret = [];

        for (var i = 0; i < length; i++) {
          ret.push(_randomStringChars.substr(bytes[i] % max, 1));
        }

        return ret.join('');
      },
      number: function number(max) {
        return Math.floor(Math.random() * max);
      },
      numberString: function numberString(max) {
        var t = ('' + (max - 1)).length;
        var p = new Array(t + 1).join('0');
        return (p + this.number(max)).slice(-t);
      }
    };
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/utils/transport.js":
  /*!***********************************************************!*\
    !*** ./node_modules/sockjs-client/lib/utils/transport.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibUtilsTransportJs(module, exports, __webpack_require__) {
    "use strict";

    var debug = function debug() {};

    if (true) {
      debug = __webpack_require__(
      /*! debug */
      "./node_modules/sockjs-client/node_modules/debug/src/browser.js")('sockjs-client:utils:transport');
    }

    module.exports = function (availableTransports) {
      return {
        filterToEnabled: function filterToEnabled(transportsWhitelist, info) {
          var transports = {
            main: [],
            facade: []
          };

          if (!transportsWhitelist) {
            transportsWhitelist = [];
          } else if (typeof transportsWhitelist === 'string') {
            transportsWhitelist = [transportsWhitelist];
          }

          availableTransports.forEach(function (trans) {
            if (!trans) {
              return;
            }

            if (trans.transportName === 'websocket' && info.websocket === false) {
              debug('disabled from server', 'websocket');
              return;
            }

            if (transportsWhitelist.length && transportsWhitelist.indexOf(trans.transportName) === -1) {
              debug('not in whitelist', trans.transportName);
              return;
            }

            if (trans.enabled(info)) {
              debug('enabled', trans.transportName);
              transports.main.push(trans);

              if (trans.facadeTransport) {
                transports.facade.push(trans.facadeTransport);
              }
            } else {
              debug('disabled', trans.transportName);
            }
          });
          return transports;
        }
      };
    };
    /***/

  },

  /***/
  "./node_modules/sockjs-client/lib/utils/url.js":
  /*!*****************************************************!*\
    !*** ./node_modules/sockjs-client/lib/utils/url.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibUtilsUrlJs(module, exports, __webpack_require__) {
    "use strict";

    var URL = __webpack_require__(
    /*! url-parse */
    "./node_modules/sockjs-client/node_modules/url-parse/index.js");

    var debug = function debug() {};

    if (true) {
      debug = __webpack_require__(
      /*! debug */
      "./node_modules/sockjs-client/node_modules/debug/src/browser.js")('sockjs-client:utils:url');
    }

    module.exports = {
      getOrigin: function getOrigin(url) {
        if (!url) {
          return null;
        }

        var p = new URL(url);

        if (p.protocol === 'file:') {
          return null;
        }

        var port = p.port;

        if (!port) {
          port = p.protocol === 'https:' ? '443' : '80';
        }

        return p.protocol + '//' + p.hostname + ':' + port;
      },
      isOriginEqual: function isOriginEqual(a, b) {
        var res = this.getOrigin(a) === this.getOrigin(b);
        debug('same', a, b, res);
        return res;
      },
      isSchemeEqual: function isSchemeEqual(a, b) {
        return a.split(':')[0] === b.split(':')[0];
      },
      addPath: function addPath(url, path) {
        var qs = url.split('?');
        return qs[0] + path + (qs[1] ? '?' + qs[1] : '');
      },
      addQuery: function addQuery(url, q) {
        return url + (url.indexOf('?') === -1 ? '?' + q : '&' + q);
      },
      isLoopbackAddr: function isLoopbackAddr(addr) {
        return /^127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) || /^\[::1\]$/.test(addr);
      }
    };
    /***/
  },

  /***/
  "./node_modules/sockjs-client/lib/version.js":
  /*!***************************************************!*\
    !*** ./node_modules/sockjs-client/lib/version.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientLibVersionJs(module, exports) {
    module.exports = '1.5.2';
    /***/
  },

  /***/
  "./node_modules/sockjs-client/node_modules/debug/src/browser.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/sockjs-client/node_modules/debug/src/browser.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientNode_modulesDebugSrcBrowserJs(module, exports, __webpack_require__) {
    "use strict";

    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
          return typeof obj;
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }
    /* eslint-env browser */

    /**
     * This is the web browser implementation of `debug()`.
     */


    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    /**
     * Colors.
     */

    exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
    /**
     * Currently only WebKit-based Web Inspectors, Firefox >= v31,
     * and the Firebug extension (any Firefox version) are known
     * to support "%c" CSS customizations.
     *
     * TODO: add a `localStorage` variable to explicitly enable/disable colors
     */
    // eslint-disable-next-line complexity

    function useColors() {
      // NB: In an Electron preload script, document will be defined but not fully
      // initialized. Since we know we're in Chrome, we'll just detect this case
      // explicitly
      if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
        return true;
      } // Internet Explorer and Edge do not support colors.


      if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      } // Is webkit? http://stackoverflow.com/a/16459606/376773
      // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


      return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    /**
     * Colorize log arguments if enabled.
     *
     * @api public
     */


    function formatArgs(args) {
      args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

      if (!this.useColors) {
        return;
      }

      var c = 'color: ' + this.color;
      args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
      // arguments passed either before or after the %c, so we need to
      // figure out the correct index to insert the CSS into

      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function (match) {
        if (match === '%%') {
          return;
        }

        index++;

        if (match === '%c') {
          // We only are interested in the *last* %c
          // (the user may have provided their own)
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    /**
     * Invokes `console.log()` when available.
     * No-op when `console.log` is not a "function".
     *
     * @api public
     */


    function log() {
      var _console; // This hackery is required for IE8/9, where
      // the `console.log` function doesn't have 'apply'


      return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
    }
    /**
     * Save `namespaces`.
     *
     * @param {String} namespaces
     * @api private
     */


    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem('debug', namespaces);
        } else {
          exports.storage.removeItem('debug');
        }
      } catch (error) {// Swallow
        // XXX (@Qix-) should we be logging these?
      }
    }
    /**
     * Load `namespaces`.
     *
     * @return {String} returns the previously persisted debug modes
     * @api private
     */


    function load() {
      var r;

      try {
        r = exports.storage.getItem('debug');
      } catch (error) {} // Swallow
      // XXX (@Qix-) should we be logging these?
      // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


      if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
      }

      return r;
    }
    /**
     * Localstorage attempts to return the localstorage.
     *
     * This is necessary because safari throws
     * when a user disables cookies/localstorage
     * and you attempt to access it.
     *
     * @return {LocalStorage}
     * @api private
     */


    function localstorage() {
      try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
      } catch (error) {// Swallow
        // XXX (@Qix-) should we be logging these?
      }
    }

    module.exports = __webpack_require__(
    /*! ./common */
    "./node_modules/sockjs-client/node_modules/debug/src/common.js")(exports);
    var formatters = module.exports.formatters;
    /**
     * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
     */

    formatters.j = function (v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
      }
    };
    /***/

  },

  /***/
  "./node_modules/sockjs-client/node_modules/debug/src/common.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/sockjs-client/node_modules/debug/src/common.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientNode_modulesDebugSrcCommonJs(module, exports, __webpack_require__) {
    "use strict";
    /**
     * This is the common logic for both the Node.js and web browser
     * implementations of `debug()`.
     */

    function setup(env) {
      createDebug.debug = createDebug;
      createDebug["default"] = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = __webpack_require__(
      /*! ms */
      "./node_modules/ms/index.js");
      Object.keys(env).forEach(function (key) {
        createDebug[key] = env[key];
      });
      /**
      * Active `debug` instances.
      */

      createDebug.instances = [];
      /**
      * The currently active debug mode names, and names to skip.
      */

      createDebug.names = [];
      createDebug.skips = [];
      /**
      * Map of special "%n" handling functions, for the debug "format" argument.
      *
      * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
      */

      createDebug.formatters = {};
      /**
      * Selects a color for a debug namespace
      * @param {String} namespace The namespace string for the for the debug instance to be colored
      * @return {Number|String} An ANSI color code for the given namespace
      * @api private
      */

      function selectColor(namespace) {
        var hash = 0;

        for (var i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0; // Convert to 32bit integer
        }

        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }

      createDebug.selectColor = selectColor;
      /**
      * Create a debugger with the given `namespace`.
      *
      * @param {String} namespace
      * @return {Function}
      * @api public
      */

      function createDebug(namespace) {
        var prevTime;

        function debug() {
          // Disabled?
          if (!debug.enabled) {
            return;
          }

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var self = debug; // Set `diff` timestamp

          var curr = Number(new Date());
          var ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);

          if (typeof args[0] !== 'string') {
            // Anything else let's inspect with %O
            args.unshift('%O');
          } // Apply any `formatters` transformations


          var index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
            // If we encounter an escaped % then don't increase the array index
            if (match === '%%') {
              return match;
            }

            index++;
            var formatter = createDebug.formatters[format];

            if (typeof formatter === 'function') {
              var val = args[index];
              match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

              args.splice(index, 1);
              index--;
            }

            return match;
          }); // Apply env-specific formatting (colors, etc.)

          createDebug.formatArgs.call(self, args);
          var logFn = self.log || createDebug.log;
          logFn.apply(self, args);
        }

        debug.namespace = namespace;
        debug.enabled = createDebug.enabled(namespace);
        debug.useColors = createDebug.useColors();
        debug.color = selectColor(namespace);
        debug.destroy = destroy;
        debug.extend = extend; // Debug.formatArgs = formatArgs;
        // debug.rawLog = rawLog;
        // env-specific initialization logic for debug instances

        if (typeof createDebug.init === 'function') {
          createDebug.init(debug);
        }

        createDebug.instances.push(debug);
        return debug;
      }

      function destroy() {
        var index = createDebug.instances.indexOf(this);

        if (index !== -1) {
          createDebug.instances.splice(index, 1);
          return true;
        }

        return false;
      }

      function extend(namespace, delimiter) {
        return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
      }
      /**
      * Enables a debug mode by namespaces. This can include modes
      * separated by a colon and wildcards.
      *
      * @param {String} namespaces
      * @api public
      */


      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.names = [];
        createDebug.skips = [];
        var i;
        var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
        var len = split.length;

        for (i = 0; i < len; i++) {
          if (!split[i]) {
            // ignore empty strings
            continue;
          }

          namespaces = split[i].replace(/\*/g, '.*?');

          if (namespaces[0] === '-') {
            createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
          } else {
            createDebug.names.push(new RegExp('^' + namespaces + '$'));
          }
        }

        for (i = 0; i < createDebug.instances.length; i++) {
          var instance = createDebug.instances[i];
          instance.enabled = createDebug.enabled(instance.namespace);
        }
      }
      /**
      * Disable debug output.
      *
      * @api public
      */


      function disable() {
        createDebug.enable('');
      }
      /**
      * Returns true if the given mode name is enabled, false otherwise.
      *
      * @param {String} name
      * @return {Boolean}
      * @api public
      */


      function enabled(name) {
        if (name[name.length - 1] === '*') {
          return true;
        }

        var i;
        var len;

        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }

        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }

        return false;
      }
      /**
      * Coerce `val`.
      *
      * @param {Mixed} val
      * @return {Mixed}
      * @api private
      */


      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }

        return val;
      }

      createDebug.enable(createDebug.load());
      return createDebug;
    }

    module.exports = setup;
    /***/
  },

  /***/
  "./node_modules/sockjs-client/node_modules/url-parse/index.js":
  /*!********************************************************************!*\
    !*** ./node_modules/sockjs-client/node_modules/url-parse/index.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSockjsClientNode_modulesUrlParseIndexJs(module, exports, __webpack_require__) {
    "use strict";

    var required = __webpack_require__(
    /*! requires-port */
    "./node_modules/requires-port/index.js"),
        qs = __webpack_require__(
    /*! querystringify */
    "./node_modules/querystringify/index.js"),
        slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
        protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
        windowsDriveLetter = /^[a-zA-Z]:/,
        whitespace = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
        left = new RegExp('^' + whitespace + '+');
    /**
     * Trim a given string.
     *
     * @param {String} str String to trim.
     * @public
     */


    function trimLeft(str) {
      return (str ? str : '').toString().replace(left, '');
    }
    /**
     * These are the parse rules for the URL parser, it informs the parser
     * about:
     *
     * 0. The char it Needs to parse, if it's a string it should be done using
     *    indexOf, RegExp using exec and NaN means set as current value.
     * 1. The property we should set when parsing this value.
     * 2. Indication if it's backwards or forward parsing, when set as number it's
     *    the value of extra chars that should be split off.
     * 3. Inherit from location if non existing in the parser.
     * 4. `toLowerCase` the resulting value.
     */


    var rules = [['#', 'hash'], // Extract from the back.
    ['?', 'query'], // Extract from the back.
    function sanitize(address, url) {
      // Sanitize what is left of the address
      return isSpecial(url.protocol) ? address.replace(/\\/g, '/') : address;
    }, ['/', 'pathname'], // Extract from the back.
    ['@', 'auth', 1], // Extract from the front.
    [NaN, 'host', undefined, 1, 1], // Set left over value.
    [/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
    [NaN, 'hostname', undefined, 1, 1] // Set left over.
    ];
    /**
     * These properties should not be copied or inherited from. This is only needed
     * for all non blob URL's as a blob URL does not include a hash, only the
     * origin.
     *
     * @type {Object}
     * @private
     */

    var ignore = {
      hash: 1,
      query: 1
    };
    /**
     * The location object differs when your code is loaded through a normal page,
     * Worker or through a worker using a blob. And with the blobble begins the
     * trouble as the location object will contain the URL of the blob, not the
     * location of the page where our code is loaded in. The actual origin is
     * encoded in the `pathname` so we can thankfully generate a good "default"
     * location from it so we can generate proper relative URL's again.
     *
     * @param {Object|String} loc Optional default location object.
     * @returns {Object} lolcation object.
     * @public
     */

    function lolcation(loc) {
      var globalVar;
      if (typeof window !== 'undefined') globalVar = window;else if (typeof global !== 'undefined') globalVar = global;else if (typeof self !== 'undefined') globalVar = self;else globalVar = {};
      var location = globalVar.location || {};
      loc = loc || location;
      var finaldestination = {},
          type = typeof loc,
          key;

      if ('blob:' === loc.protocol) {
        finaldestination = new Url(unescape(loc.pathname), {});
      } else if ('string' === type) {
        finaldestination = new Url(loc, {});

        for (key in ignore) {
          delete finaldestination[key];
        }
      } else if ('object' === type) {
        for (key in loc) {
          if (key in ignore) continue;
          finaldestination[key] = loc[key];
        }

        if (finaldestination.slashes === undefined) {
          finaldestination.slashes = slashes.test(loc.href);
        }
      }

      return finaldestination;
    }
    /**
     * Check whether a protocol scheme is special.
     *
     * @param {String} The protocol scheme of the URL
     * @return {Boolean} `true` if the protocol scheme is special, else `false`
     * @private
     */


    function isSpecial(scheme) {
      return scheme === 'file:' || scheme === 'ftp:' || scheme === 'http:' || scheme === 'https:' || scheme === 'ws:' || scheme === 'wss:';
    }
    /**
     * @typedef ProtocolExtract
     * @type Object
     * @property {String} protocol Protocol matched in the URL, in lowercase.
     * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
     * @property {String} rest Rest of the URL that is not part of the protocol.
     */

    /**
     * Extract protocol information from a URL with/without double slash ("//").
     *
     * @param {String} address URL we want to extract from.
     * @param {Object} location
     * @return {ProtocolExtract} Extracted information.
     * @private
     */


    function extractProtocol(address, location) {
      address = trimLeft(address);
      location = location || {};
      var match = protocolre.exec(address);
      var protocol = match[1] ? match[1].toLowerCase() : '';
      var forwardSlashes = !!match[2];
      var otherSlashes = !!match[3];
      var slashesCount = 0;
      var rest;

      if (forwardSlashes) {
        if (otherSlashes) {
          rest = match[2] + match[3] + match[4];
          slashesCount = match[2].length + match[3].length;
        } else {
          rest = match[2] + match[4];
          slashesCount = match[2].length;
        }
      } else {
        if (otherSlashes) {
          rest = match[3] + match[4];
          slashesCount = match[3].length;
        } else {
          rest = match[4];
        }
      }

      if (protocol === 'file:') {
        if (slashesCount >= 2) {
          rest = rest.slice(2);
        }
      } else if (isSpecial(protocol)) {
        rest = match[4];
      } else if (protocol) {
        if (forwardSlashes) {
          rest = rest.slice(2);
        }
      } else if (slashesCount >= 2 && isSpecial(location.protocol)) {
        rest = match[4];
      }

      return {
        protocol: protocol,
        slashes: forwardSlashes || isSpecial(protocol),
        slashesCount: slashesCount,
        rest: rest
      };
    }
    /**
     * Resolve a relative URL pathname against a base URL pathname.
     *
     * @param {String} relative Pathname of the relative URL.
     * @param {String} base Pathname of the base URL.
     * @return {String} Resolved pathname.
     * @private
     */


    function resolve(relative, base) {
      if (relative === '') return base;
      var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
          i = path.length,
          last = path[i - 1],
          unshift = false,
          up = 0;

      while (i--) {
        if (path[i] === '.') {
          path.splice(i, 1);
        } else if (path[i] === '..') {
          path.splice(i, 1);
          up++;
        } else if (up) {
          if (i === 0) unshift = true;
          path.splice(i, 1);
          up--;
        }
      }

      if (unshift) path.unshift('');
      if (last === '.' || last === '..') path.push('');
      return path.join('/');
    }
    /**
     * The actual URL instance. Instead of returning an object we've opted-in to
     * create an actual constructor as it's much more memory efficient and
     * faster and it pleases my OCD.
     *
     * It is worth noting that we should not use `URL` as class name to prevent
     * clashes with the global URL instance that got introduced in browsers.
     *
     * @constructor
     * @param {String} address URL we want to parse.
     * @param {Object|String} [location] Location defaults for relative paths.
     * @param {Boolean|Function} [parser] Parser for the query string.
     * @private
     */


    function Url(address, location, parser) {
      address = trimLeft(address);

      if (!(this instanceof Url)) {
        return new Url(address, location, parser);
      }

      var relative,
          extracted,
          parse,
          instruction,
          index,
          key,
          instructions = rules.slice(),
          type = typeof location,
          url = this,
          i = 0; //
      // The following if statements allows this module two have compatibility with
      // 2 different API:
      //
      // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
      //    where the boolean indicates that the query string should also be parsed.
      //
      // 2. The `URL` interface of the browser which accepts a URL, object as
      //    arguments. The supplied object will be used as default values / fall-back
      //    for relative paths.
      //

      if ('object' !== type && 'string' !== type) {
        parser = location;
        location = null;
      }

      if (parser && 'function' !== typeof parser) parser = qs.parse;
      location = lolcation(location); //
      // Extract protocol information before running the instructions.
      //

      extracted = extractProtocol(address || '', location);
      relative = !extracted.protocol && !extracted.slashes;
      url.slashes = extracted.slashes || relative && location.slashes;
      url.protocol = extracted.protocol || location.protocol || '';
      address = extracted.rest; //
      // When the authority component is absent the URL starts with a path
      // component.
      //

      if (extracted.protocol === 'file:' && (extracted.slashesCount !== 2 || windowsDriveLetter.test(address)) || !extracted.slashes && (extracted.protocol || extracted.slashesCount < 2 || !isSpecial(url.protocol))) {
        instructions[3] = [/(.*)/, 'pathname'];
      }

      for (; i < instructions.length; i++) {
        instruction = instructions[i];

        if (typeof instruction === 'function') {
          address = instruction(address, url);
          continue;
        }

        parse = instruction[0];
        key = instruction[1];

        if (parse !== parse) {
          url[key] = address;
        } else if ('string' === typeof parse) {
          if (~(index = address.indexOf(parse))) {
            if ('number' === typeof instruction[2]) {
              url[key] = address.slice(0, index);
              address = address.slice(index + instruction[2]);
            } else {
              url[key] = address.slice(index);
              address = address.slice(0, index);
            }
          }
        } else if (index = parse.exec(address)) {
          url[key] = index[1];
          address = address.slice(0, index.index);
        }

        url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : ''); //
        // Hostname, host and protocol should be lowercased so they can be used to
        // create a proper `origin`.
        //

        if (instruction[4]) url[key] = url[key].toLowerCase();
      } //
      // Also parse the supplied query string in to an object. If we're supplied
      // with a custom parser as function use that instead of the default build-in
      // parser.
      //


      if (parser) url.query = parser(url.query); //
      // If the URL is relative, resolve the pathname against the base URL.
      //

      if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
        url.pathname = resolve(url.pathname, location.pathname);
      } //
      // Default to a / for pathname if none exists. This normalizes the URL
      // to always have a /
      //


      if (url.pathname.charAt(0) !== '/' && isSpecial(url.protocol)) {
        url.pathname = '/' + url.pathname;
      } //
      // We should not add port numbers if they are already the default port number
      // for a given protocol. As the host also contains the port number we're going
      // override it with the hostname which contains no port number.
      //


      if (!required(url.port, url.protocol)) {
        url.host = url.hostname;
        url.port = '';
      } //
      // Parse down the `auth` for the username and password.
      //


      url.username = url.password = '';

      if (url.auth) {
        instruction = url.auth.split(':');
        url.username = instruction[0] || '';
        url.password = instruction[1] || '';
      }

      url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host ? url.protocol + '//' + url.host : 'null'; //
      // The href is just the compiled result.
      //

      url.href = url.toString();
    }
    /**
     * This is convenience method for changing properties in the URL instance to
     * insure that they all propagate correctly.
     *
     * @param {String} part          Property we need to adjust.
     * @param {Mixed} value          The newly assigned value.
     * @param {Boolean|Function} fn  When setting the query, it will be the function
     *                               used to parse the query.
     *                               When setting the protocol, double slash will be
     *                               removed from the final url if it is true.
     * @returns {URL} URL instance for chaining.
     * @public
     */


    function set(part, value, fn) {
      var url = this;

      switch (part) {
        case 'query':
          if ('string' === typeof value && value.length) {
            value = (fn || qs.parse)(value);
          }

          url[part] = value;
          break;

        case 'port':
          url[part] = value;

          if (!required(value, url.protocol)) {
            url.host = url.hostname;
            url[part] = '';
          } else if (value) {
            url.host = url.hostname + ':' + value;
          }

          break;

        case 'hostname':
          url[part] = value;
          if (url.port) value += ':' + url.port;
          url.host = value;
          break;

        case 'host':
          url[part] = value;

          if (/:\d+$/.test(value)) {
            value = value.split(':');
            url.port = value.pop();
            url.hostname = value.join(':');
          } else {
            url.hostname = value;
            url.port = '';
          }

          break;

        case 'protocol':
          url.protocol = value.toLowerCase();
          url.slashes = !fn;
          break;

        case 'pathname':
        case 'hash':
          if (value) {
            var _char = part === 'pathname' ? '/' : '#';

            url[part] = value.charAt(0) !== _char ? _char + value : value;
          } else {
            url[part] = value;
          }

          break;

        default:
          url[part] = value;
      }

      for (var i = 0; i < rules.length; i++) {
        var ins = rules[i];
        if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
      }

      url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host ? url.protocol + '//' + url.host : 'null';
      url.href = url.toString();
      return url;
    }
    /**
     * Transform the properties back in to a valid and full URL string.
     *
     * @param {Function} stringify Optional query stringify function.
     * @returns {String} Compiled version of the URL.
     * @public
     */


    function toString(stringify) {
      if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;
      var query,
          url = this,
          protocol = url.protocol;
      if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';
      var result = protocol + (url.slashes || isSpecial(url.protocol) ? '//' : '');

      if (url.username) {
        result += url.username;
        if (url.password) result += ':' + url.password;
        result += '@';
      }

      result += url.host + url.pathname;
      query = 'object' === typeof url.query ? stringify(url.query) : url.query;
      if (query) result += '?' !== query.charAt(0) ? '?' + query : query;
      if (url.hash) result += url.hash;
      return result;
    }

    Url.prototype = {
      set: set,
      toString: toString
    }; //
    // Expose the URL parser and some additional properties that might be useful for
    // others or testing.
    //

    Url.extractProtocol = extractProtocol;
    Url.location = lolcation;
    Url.trimLeft = trimLeft;
    Url.qs = qs;
    module.exports = Url;
    /***/
  },

  /***/
  "./node_modules/webpack/buildin/amd-options.js":
  /*!****************************************!*\
    !*** (webpack)/buildin/amd-options.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinAmdOptionsJs(module, exports) {
    /* WEBPACK VAR INJECTION */
    (function (__webpack_amd_options__) {
      /* globals __webpack_amd_options__ */
      module.exports = __webpack_amd_options__;
      /* WEBPACK VAR INJECTION */
    }).call(this, {});
    /***/
  },

  /***/
  "./src/app/main/component/comments/comments.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/main/component/comments/comments.module.ts ***!
    \************************************************************/

  /*! exports provided: CommentsModule */

  /***/
  function srcAppMainComponentCommentsCommentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsModule", function () {
      return CommentsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_shared_main_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/shared-main.module */
    "./src/app/main/component/shared/shared-main.module.ts");
    /* harmony import */


    var _components_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/add-comment/add-comment.component */
    "./src/app/main/component/comments/components/add-comment/add-comment.component.ts");
    /* harmony import */


    var _components_view_replies_view_replies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/view-replies/view-replies.component */
    "./src/app/main/component/comments/components/view-replies/view-replies.component.ts");
    /* harmony import */


    var _components_delete_comment_delete_comment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/delete-comment/delete-comment.component */
    "./src/app/main/component/comments/components/delete-comment/delete-comment.component.ts");
    /* harmony import */


    var _components_edit_comment_edit_comment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/edit-comment/edit-comment.component */
    "./src/app/main/component/comments/components/edit-comment/edit-comment.component.ts");
    /* harmony import */


    var _components_like_comment_like_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/like-comment/like-comment.component */
    "./src/app/main/component/comments/components/like-comment/like-comment.component.ts");
    /* harmony import */


    var _components_reply_comment_reply_comment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/reply-comment/reply-comment.component */
    "./src/app/main/component/comments/components/reply-comment/reply-comment.component.ts");
    /* harmony import */


    var _components_comment_pagination_comment_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/comment-pagination/comment-pagination.component */
    "./src/app/main/component/comments/components/comment-pagination/comment-pagination.component.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _components_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/comments-list/comments-list.component */
    "./src/app/main/component/comments/components/comments-list/comments-list.component.ts");
    /* harmony import */


    var _components_comments_container_comments_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/comments-container/comments-container.component */
    "./src/app/main/component/comments/components/comments-container/comments-container.component.ts");
    /* harmony import */


    var _services_comments_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/comments.service */
    "./src/app/main/component/comments/services/comments.service.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _shared_components_edit_photo_pop_up_edit_photo_pop_up_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../shared/components/edit-photo-pop-up/edit-photo-pop-up.component */
    "./src/app/main/component/shared/components/edit-photo-pop-up/edit-photo-pop-up.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_components_photo_upload_photo_upload_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../shared/components/photo-upload/photo-upload.component */
    "./src/app/main/component/shared/components/photo-upload/photo-upload.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _eco_news_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ../eco-news/directives/drag-and-drop.directive */
    "./src/app/main/component/eco-news/directives/drag-and-drop.directive.ts");
    /* harmony import */


    var _shared_components_drag_and_drop_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ../shared/components/drag-and-drop/drag-and-drop.component */
    "./src/app/main/component/shared/components/drag-and-drop/drag-and-drop.component.ts");
    /* harmony import */


    var _shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ../shared/components/no-data/no-data.component */
    "./src/app/main/component/shared/components/no-data/no-data.component.ts");
    /* harmony import */


    var _shared_components_tag_filter_tag_filter_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ../shared/components/tag-filter/tag-filter.component */
    "./src/app/main/component/shared/components/tag-filter/tag-filter.component.ts");
    /* harmony import */


    var _user_components_shared_components_habits_gallery_view_habits_gallery_view_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ../user/components/shared/components/habits-gallery-view/habits-gallery-view.component */
    "./src/app/main/component/user/components/shared/components/habits-gallery-view/habits-gallery-view.component.ts");
    /* harmony import */


    var _user_components_shared_components_user_profile_image_user_profile_image_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ../user/components/shared/components/user-profile-image/user-profile-image.component */
    "./src/app/main/component/user/components/shared/components/user-profile-image/user-profile-image.component.ts");
    /* harmony import */


    var _shared_components_warning_pop_up_warning_pop_up_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ../shared/components/warning-pop-up/warning-pop-up.component */
    "./src/app/main/component/shared/components/warning-pop-up/warning-pop-up.component.ts");
    /* harmony import */


    var _shared_components_form_base_form_base_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ../shared/components/form-base/form-base.component */
    "./src/app/main/component/shared/components/form-base/form-base.component.ts");
    /* harmony import */


    var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ../../../shared/spinner/spinner.component */
    "./src/app/shared/spinner/spinner.component.ts");
    /* harmony import */


    var _shared_spinner_ubs_spinner_ubs_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ../../../shared/spinner-ubs/spinner-ubs.component */
    "./src/app/shared/spinner-ubs/spinner-ubs.component.ts");
    /* harmony import */


    var _shared_drag_and_drop_dragDrop_directive__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ../../../shared/drag-and-drop/dragDrop.directive */
    "./src/app/shared/drag-and-drop/dragDrop.directive.ts");
    /* harmony import */


    var _shared_directives_close_dropdown_directive__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ../../../shared/directives/close-dropdown.directive */
    "./src/app/shared/directives/close-dropdown.directive.ts");
    /* harmony import */


    var _shared_ubs_base_sidebar_ubs_base_sidebar_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ../../../shared/ubs-base-sidebar/ubs-base-sidebar.component */
    "./src/app/shared/ubs-base-sidebar/ubs-base-sidebar.component.ts");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ../../../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _shared_search_popup_search_popup_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ../../../shared/search-popup/search-popup.component */
    "./src/app/shared/search-popup/search-popup.component.ts");
    /* harmony import */


    var _shared_search_all_results_search_all_results_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ../../../shared/search-all-results/search-all-results.component */
    "./src/app/shared/search-all-results/search-all-results.component.ts");
    /* harmony import */


    var _shared_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ../../../shared/search-item/search-item.component */
    "./src/app/shared/search-item/search-item.component.ts");
    /* harmony import */


    var _shared_search_not_found_search_not_found_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ../../../shared/search-not-found/search-not-found.component */
    "./src/app/shared/search-not-found/search-not-found.component.ts");
    /* harmony import */


    var _shared_ubs_footer_ubs_footer_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ../../../shared/ubs-footer/ubs-footer.component */
    "./src/app/shared/ubs-footer/ubs-footer.component.ts");
    /* harmony import */


    var _pipe_date_localisation_pipe_date_localisation_pipe__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @pipe/date-localisation-pipe/date-localisation.pipe */
    "./src/app/main/pipe/date-localisation-pipe/date-localisation.pipe.ts");
    /* harmony import */


    var _shared_localized_currency_pipe_localized_currency_pipe__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ../../../shared/localized-currency-pipe/localized-currency.pipe */
    "./src/app/shared/localized-currency-pipe/localized-currency.pipe.ts");
    /* harmony import */


    var _shared_volume_pipe_volume_pipe__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ../../../shared/volume-pipe/volume.pipe */
    "./src/app/shared/volume-pipe/volume.pipe.ts");
    /* harmony import */


    var _shared_phone_number_treat_phone_number_treat_pipe__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ../../../shared/phone-number-treat/phone-number-treat.pipe */
    "./src/app/shared/phone-number-treat/phone-number-treat.pipe.ts");
    /* harmony import */


    var _shared_translate_pipe_translate_pipe_pipe__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ../../../shared/translate-pipe/translate-pipe.pipe */
    "./src/app/shared/translate-pipe/translate-pipe.pipe.ts");
    /* harmony import */


    var _shared_sort_list_by_lang_filter_list_by_lang_pipe__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ../../../shared/sort-list-by-lang/filter-list-by-lang.pipe */
    "./src/app/shared/sort-list-by-lang/filter-list-by-lang.pipe.ts");

    var CommentsModule = function CommentsModule() {
      _classCallCheck(this, CommentsModule);
    };

    CommentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CommentsModule
    });
    CommentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CommentsModule_Factory(t) {
        return new (t || CommentsModule)();
      },
      providers: [_services_comments_service__WEBPACK_IMPORTED_MODULE_13__["CommentsService"]],
      imports: [[_shared_shared_main_module__WEBPACK_IMPORTED_MODULE_2__["SharedMainModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommentsModule, {
        declarations: [_components_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_3__["AddCommentComponent"], _components_view_replies_view_replies_component__WEBPACK_IMPORTED_MODULE_4__["ViewRepliesComponent"], _components_delete_comment_delete_comment_component__WEBPACK_IMPORTED_MODULE_5__["DeleteCommentComponent"], _components_edit_comment_edit_comment_component__WEBPACK_IMPORTED_MODULE_6__["EditCommentComponent"], _components_like_comment_like_comment_component__WEBPACK_IMPORTED_MODULE_7__["LikeCommentComponent"], _components_reply_comment_reply_comment_component__WEBPACK_IMPORTED_MODULE_8__["ReplyCommentComponent"], _components_edit_comment_edit_comment_component__WEBPACK_IMPORTED_MODULE_6__["EditCommentComponent"], _components_comment_pagination_comment_pagination_component__WEBPACK_IMPORTED_MODULE_9__["CommentPaginationComponent"], _components_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_11__["CommentsListComponent"], _components_comments_container_comments_container_component__WEBPACK_IMPORTED_MODULE_12__["CommentsContainerComponent"]],
        imports: [_shared_shared_main_module__WEBPACK_IMPORTED_MODULE_2__["SharedMainModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"]],
        exports: [_components_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_3__["AddCommentComponent"], _components_view_replies_view_replies_component__WEBPACK_IMPORTED_MODULE_4__["ViewRepliesComponent"], _components_delete_comment_delete_comment_component__WEBPACK_IMPORTED_MODULE_5__["DeleteCommentComponent"], _components_edit_comment_edit_comment_component__WEBPACK_IMPORTED_MODULE_6__["EditCommentComponent"], _components_like_comment_like_comment_component__WEBPACK_IMPORTED_MODULE_7__["LikeCommentComponent"], _components_reply_comment_reply_comment_component__WEBPACK_IMPORTED_MODULE_8__["ReplyCommentComponent"], _components_edit_comment_edit_comment_component__WEBPACK_IMPORTED_MODULE_6__["EditCommentComponent"], _components_comment_pagination_comment_pagination_component__WEBPACK_IMPORTED_MODULE_9__["CommentPaginationComponent"], _components_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_11__["CommentsListComponent"], _components_comments_container_comments_container_component__WEBPACK_IMPORTED_MODULE_12__["CommentsContainerComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_3__["AddCommentComponent"], _components_view_replies_view_replies_component__WEBPACK_IMPORTED_MODULE_4__["ViewRepliesComponent"], _components_delete_comment_delete_comment_component__WEBPACK_IMPORTED_MODULE_5__["DeleteCommentComponent"], _components_edit_comment_edit_comment_component__WEBPACK_IMPORTED_MODULE_6__["EditCommentComponent"], _components_like_comment_like_comment_component__WEBPACK_IMPORTED_MODULE_7__["LikeCommentComponent"], _components_reply_comment_reply_comment_component__WEBPACK_IMPORTED_MODULE_8__["ReplyCommentComponent"], _components_edit_comment_edit_comment_component__WEBPACK_IMPORTED_MODULE_6__["EditCommentComponent"], _components_comment_pagination_comment_pagination_component__WEBPACK_IMPORTED_MODULE_9__["CommentPaginationComponent"], _components_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_11__["CommentsListComponent"], _components_comments_container_comments_container_component__WEBPACK_IMPORTED_MODULE_12__["CommentsContainerComponent"]],
          imports: [_shared_shared_main_module__WEBPACK_IMPORTED_MODULE_2__["SharedMainModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"]],
          exports: [_components_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_3__["AddCommentComponent"], _components_view_replies_view_replies_component__WEBPACK_IMPORTED_MODULE_4__["ViewRepliesComponent"], _components_delete_comment_delete_comment_component__WEBPACK_IMPORTED_MODULE_5__["DeleteCommentComponent"], _components_edit_comment_edit_comment_component__WEBPACK_IMPORTED_MODULE_6__["EditCommentComponent"], _components_like_comment_like_comment_component__WEBPACK_IMPORTED_MODULE_7__["LikeCommentComponent"], _components_reply_comment_reply_comment_component__WEBPACK_IMPORTED_MODULE_8__["ReplyCommentComponent"], _components_edit_comment_edit_comment_component__WEBPACK_IMPORTED_MODULE_6__["EditCommentComponent"], _components_comment_pagination_comment_pagination_component__WEBPACK_IMPORTED_MODULE_9__["CommentPaginationComponent"], _components_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_11__["CommentsListComponent"], _components_comments_container_comments_container_component__WEBPACK_IMPORTED_MODULE_12__["CommentsContainerComponent"]],
          providers: [_services_comments_service__WEBPACK_IMPORTED_MODULE_13__["CommentsService"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_components_comments_container_comments_container_component__WEBPACK_IMPORTED_MODULE_12__["CommentsContainerComponent"], [_shared_components_edit_photo_pop_up_edit_photo_pop_up_component__WEBPACK_IMPORTED_MODULE_16__["EditPhotoPopUpComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateDirective"], _shared_components_photo_upload_photo_upload_component__WEBPACK_IMPORTED_MODULE_18__["PhotoUploadComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormArrayName"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["ButtonCheckboxDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["ButtonRadioDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["FixedButtonCaptionDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MdbCardBodyComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MdbCardImageComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MdbCardTextComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MdbCardTitleComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MdbCardFooterComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MdbCardHeaderComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MdbInput"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MdbInputDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["EqualValidatorDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["NavbarComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["LinksComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["LogoComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["NavlinksComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["BsDropdownMenuDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["BsDropdownToggleDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["BsDropdownDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["SlideComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["CarouselComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["BaseChartDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["CollapseComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["ModalBackdropComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["ModalDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["TooltipDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["PopoverDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["FabDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["FarDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["FasDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["FalDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["ɵg"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["CheckboxComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MdbTablePaginationComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MdbTableRowDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MdbTableScrollDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MdbTableSortDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MdbTableDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MDBBadgeComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MdbBreadcrumbComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MdbBreadcrumbItemComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MdbErrorDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MdbSuccessDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MdbValidateDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["StickyHeaderDirective"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_21__["FileDropDirective"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_21__["FileSelectDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardAvatar"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_23__["Dir"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogActions"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxRequiredValidator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinner"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarContainer"], _eco_news_directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_27__["DragAndDropDirective"], _shared_components_drag_and_drop_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_28__["DragAndDropComponent"], _shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_29__["NoDataComponent"], _shared_components_tag_filter_tag_filter_component__WEBPACK_IMPORTED_MODULE_30__["TagFilterComponent"], _user_components_shared_components_habits_gallery_view_habits_gallery_view_component__WEBPACK_IMPORTED_MODULE_31__["HabitsGalleryViewComponent"], _user_components_shared_components_user_profile_image_user_profile_image_component__WEBPACK_IMPORTED_MODULE_32__["UserProfileImageComponent"], _shared_components_warning_pop_up_warning_pop_up_component__WEBPACK_IMPORTED_MODULE_33__["WarningPopUpComponent"], _shared_components_form_base_form_base_component__WEBPACK_IMPORTED_MODULE_34__["FormBaseComponent"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_35__["SpinnerComponent"], _shared_spinner_ubs_spinner_ubs_component__WEBPACK_IMPORTED_MODULE_36__["SpinnerUbsComponent"], _shared_drag_and_drop_dragDrop_directive__WEBPACK_IMPORTED_MODULE_37__["DragDirective"], _shared_directives_close_dropdown_directive__WEBPACK_IMPORTED_MODULE_38__["CloseDropdownDirective"], _shared_ubs_base_sidebar_ubs_base_sidebar_component__WEBPACK_IMPORTED_MODULE_39__["UbsBaseSidebarComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_40__["HeaderComponent"], _shared_search_popup_search_popup_component__WEBPACK_IMPORTED_MODULE_41__["SearchPopupComponent"], _shared_search_all_results_search_all_results_component__WEBPACK_IMPORTED_MODULE_42__["SearchAllResultsComponent"], _shared_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_43__["SearchItemComponent"], _shared_search_not_found_search_not_found_component__WEBPACK_IMPORTED_MODULE_44__["SearchNotFoundComponent"], _shared_ubs_footer_ubs_footer_component__WEBPACK_IMPORTED_MODULE_45__["UbsFooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPluralCase"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationControlsComponent"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationControlsDirective"], _components_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_3__["AddCommentComponent"], _components_view_replies_view_replies_component__WEBPACK_IMPORTED_MODULE_4__["ViewRepliesComponent"], _components_delete_comment_delete_comment_component__WEBPACK_IMPORTED_MODULE_5__["DeleteCommentComponent"], _components_edit_comment_edit_comment_component__WEBPACK_IMPORTED_MODULE_6__["EditCommentComponent"], _components_like_comment_like_comment_component__WEBPACK_IMPORTED_MODULE_7__["LikeCommentComponent"], _components_reply_comment_reply_comment_component__WEBPACK_IMPORTED_MODULE_8__["ReplyCommentComponent"], _components_comment_pagination_comment_pagination_component__WEBPACK_IMPORTED_MODULE_9__["CommentPaginationComponent"], _components_comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_11__["CommentsListComponent"], _components_comments_container_comments_container_component__WEBPACK_IMPORTED_MODULE_12__["CommentsContainerComponent"]], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"], _pipe_date_localisation_pipe_date_localisation_pipe__WEBPACK_IMPORTED_MODULE_46__["DateLocalisationPipe"], _shared_localized_currency_pipe_localized_currency_pipe__WEBPACK_IMPORTED_MODULE_47__["LocalizedCurrencyPipe"], _shared_volume_pipe_volume_pipe__WEBPACK_IMPORTED_MODULE_48__["VolumePipe"], _shared_phone_number_treat_phone_number_treat_pipe__WEBPACK_IMPORTED_MODULE_49__["PhoneNumberTreatPipe"], _shared_translate_pipe_translate_pipe_pipe__WEBPACK_IMPORTED_MODULE_50__["ServerTranslatePipe"], _shared_sort_list_by_lang_filter_list_by_lang_pipe__WEBPACK_IMPORTED_MODULE_51__["FilterListByLangPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginatePipe"]]);
    /***/

  },

  /***/
  "./src/app/main/component/comments/components/add-comment/add-comment.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/main/component/comments/components/add-comment/add-comment.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: AddCommentComponent */

  /***/
  function srcAppMainComponentCommentsComponentsAddCommentAddCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCommentComponent", function () {
      return AddCommentComponent;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_comments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/comments.service */
    "./src/app/main/component/comments/services/comments.service.ts");
    /* harmony import */


    var _global_user_components_profile_profile_service_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @global-user/components/profile/profile-service/profile.service */
    "./src/app/main/component/user/components/profile/profile-service/profile.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _user_components_shared_components_user_profile_image_user_profile_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../user/components/shared/components/user-profile-image/user-profile-image.component */
    "./src/app/main/component/user/components/shared/components/user-profile-image/user-profile-image.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function AddCommentComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "textarea", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "homepage.eco-news.comment.placeholder.add-a-comment"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.addCommentForm.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, "homepage.eco-news.comment.comment"), " ");
      }
    }

    function AddCommentComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "textarea", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, "homepage.eco-news.comment.placeholder.add-a-reply"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("maxlength", ctx_r2.replyMaxLength);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r2.addCommentForm.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, "homepage.eco-news.comment.reply"), " ");
      }
    }

    var AddCommentComponent = /*#__PURE__*/function () {
      function AddCommentComponent(commentsService, fb, profileService) {
        _classCallCheck(this, AddCommentComponent);

        this.commentsService = commentsService;
        this.fb = fb;
        this.profileService = profileService;
        this.updateList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addCommentForm = this.fb.group({
          content: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8000)]]
        });
        this.replyMaxLength = 8000;
      }

      _createClass(AddCommentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserInfo();
        }
      }, {
        key: "getUserInfo",
        value: function getUserInfo() {
          var _this10 = this;

          this.profileService.getUserInfo().subscribe(function (item) {
            _this10.firstName = item.name;
            _this10.avatarImage = item.profilePicturePath;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this11 = this;

          this.commentsService.addComment(this.addCommentForm, this.commentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1)).subscribe(function () {
            _this11.updateList.emit();

            _this11.addCommentForm.reset();
          });
        }
      }]);

      return AddCommentComponent;
    }();

    AddCommentComponent.ɵfac = function AddCommentComponent_Factory(t) {
      return new (t || AddCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_comments_service__WEBPACK_IMPORTED_MODULE_3__["CommentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_global_user_components_profile_profile_service_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]));
    };

    AddCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AddCommentComponent,
      selectors: [["app-add-comment"]],
      inputs: {
        commentId: "commentId"
      },
      outputs: {
        updateList: "updateList"
      },
      decls: 5,
      vars: 7,
      consts: [[1, "main-wrapper", 3, "formGroup", "ngClass", "ngSubmit"], [3, "imgPath", "firstName", "additionalImgClass"], ["class", "input-submit", 4, "ngIf", "ngIfElse"], ["reply", ""], [1, "input-submit"], ["formControlName", "content", 1, "comment-width", 3, "placeholder"], [1, "primary-global-button", 3, "disabled"], ["formControlName", "content", 1, "reply-width", 3, "placeholder", "maxlength"]],
      template: function AddCommentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddCommentComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-user-profile-image", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddCommentComponent_div_2_Template, 6, 7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddCommentComponent_ng_template_3_Template, 6, 8, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addCommentForm)("ngClass", !ctx.commentId ? "wrapper-comment" : "wrapper-reply");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imgPath", ctx.avatarImage)("firstName", ctx.firstName)("additionalImgClass", "comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.commentId)("ngIfElse", _r1);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _user_components_shared_components_user_profile_image_user_profile_image_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileImageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
      styles: [".main-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  justify-content: space-between;\n}\n.main-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50px;\n  margin-right: 24px;\n}\n.main-wrapper[_ngcontent-%COMP%]   #comment-user-image[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50px;\n  margin-right: 24px;\n}\n.main-wrapper[_ngcontent-%COMP%]   .input-submit[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.main-wrapper[_ngcontent-%COMP%]   .input-submit[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 72px;\n  overflow: hidden;\n  resize: none;\n  padding: 10px 0 0 20px;\n  border-radius: 5px;\n}\n.main-wrapper[_ngcontent-%COMP%]   .input-submit[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: var(--secondary-grey);\n}\n.main-wrapper[_ngcontent-%COMP%]   .input-submit[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--secondary-grey);\n}\n.main-wrapper[_ngcontent-%COMP%]   .input-submit[_ngcontent-%COMP%]   .comment-width[_ngcontent-%COMP%] {\n  width: 505px;\n}\n.main-wrapper[_ngcontent-%COMP%]   .input-submit[_ngcontent-%COMP%]   .reply-width[_ngcontent-%COMP%] {\n  width: 467px;\n}\n.main-wrapper[_ngcontent-%COMP%]   .input-submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 157px;\n  height: 48px;\n  margin-left: 16px;\n  border-radius: 5px;\n}\n.wrapper-comment[_ngcontent-%COMP%] {\n  width: 66%;\n}\n.wrapper-reply[_ngcontent-%COMP%] {\n  margin: 32px 0 32px 70px;\n}\n@media screen and (max-width: 768px) {\n  .wrapper-comment[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .wrapper-comment[_ngcontent-%COMP%]   .input-submit[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .wrapper-reply[_ngcontent-%COMP%]   .input-submit[_ngcontent-%COMP%], .wrapper-comment[_ngcontent-%COMP%]   .input-submit[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n    flex-wrap: wrap;\n  }\n  .wrapper-reply[_ngcontent-%COMP%]   .input-submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .wrapper-comment[_ngcontent-%COMP%]   .input-submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .wrapper-reply[_ngcontent-%COMP%]   .input-submit[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .wrapper-comment[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .wrapper-comment[_ngcontent-%COMP%]   .input-submit[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .wrapper-comment[_ngcontent-%COMP%]   .input-submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvY29tbWVudHMvY29tcG9uZW50cy9hZGQtY29tbWVudC9EOlxcU29mdFNlcnZlX0FjYWRlbXlcXEdyZWVuQ2l0eVxcZ2gtcGFnZXNcXEdyZWVuQ2l0eUNsaWVudC9zcmNcXGFwcFxcbWFpblxcY29tcG9uZW50XFxjb21tZW50c1xcY29tcG9uZW50c1xcYWRkLWNvbW1lbnRcXGFkZC1jb21tZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbXBvbmVudC9jb21tZW50cy9jb21wb25lbnRzL2FkZC1jb21tZW50L2FkZC1jb21tZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURHRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDREo7QURHSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0ROO0FER007RUFDRSw0QkFBQTtBQ0RSO0FEQU07RUFDRSw0QkFBQTtBQ0RSO0FES0k7RUFDRSxZQUFBO0FDSE47QURNSTtFQUNFLFlBQUE7QUNKTjtBRE9JO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTE47QURVQTtFQUNFLFVBQUE7QUNQRjtBRFVBO0VBQ0Usd0JBQUE7QUNQRjtBRFVBO0VBQ0U7SUFDRSxXQUFBO0VDUEY7RURVSTtJQUNFLG1CQUFBO0VDUk47QUFDRjtBRGFBO0VBR0k7O0lBQ0UseUJBQUE7SUFDQSxlQUFBO0VDWko7RURjSTs7SUFDRSxTQUFBO0VDWE47O0VEa0JJO0lBQ0UsbUJBQUE7RUNmTjtBQUNGO0FEb0JBO0VBRUk7SUFDRSxhQUFBO0VDbkJKO0VEdUJJO0lBQ0UsV0FBQTtFQ3JCTjtFRHdCSTtJQUNFLFdBQUE7RUN0Qk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29tcG9uZW50L2NvbW1lbnRzL2NvbXBvbmVudHMvYWRkLWNvbW1lbnQvYWRkLWNvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAjY29tbWVudC11c2VyLWltYWdlIHtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjRweDtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1zdWJtaXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNzJweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDAgMCAyMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmV5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb21tZW50LXdpZHRoIHtcclxuICAgICAgd2lkdGg6IDUwNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXBseS13aWR0aCB7XHJcbiAgICAgIHdpZHRoOiA0NjdweDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICB3aWR0aDogMTU3cHg7XHJcbiAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi53cmFwcGVyLWNvbW1lbnQge1xyXG4gIHdpZHRoOiA2NiU7XHJcbn1cclxuXHJcbi53cmFwcGVyLXJlcGx5IHtcclxuICBtYXJnaW46IDMycHggMCAzMnB4IDcwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLndyYXBwZXItY29tbWVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAuaW5wdXQtc3VibWl0IHtcclxuICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLndyYXBwZXItcmVwbHksXHJcbiAgLndyYXBwZXItY29tbWVudCB7XHJcbiAgICAuaW5wdXQtc3VibWl0IHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC53cmFwcGVyLXJlcGx5IHtcclxuICAgIC5pbnB1dC1zdWJtaXQge1xyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAud3JhcHBlci1jb21tZW50IHtcclxuICAgIGltZyB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0LXN1Ym1pdCB7XHJcbiAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubWFpbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubWFpbi13cmFwcGVyIGltZyB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbn1cbi5tYWluLXdyYXBwZXIgI2NvbW1lbnQtdXNlci1pbWFnZSB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbn1cbi5tYWluLXdyYXBwZXIgLmlucHV0LXN1Ym1pdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW4td3JhcHBlciAuaW5wdXQtc3VibWl0IHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcmVzaXplOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDAgMCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubWFpbi13cmFwcGVyIC5pbnB1dC1zdWJtaXQgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmV5KTtcbn1cbi5tYWluLXdyYXBwZXIgLmlucHV0LXN1Ym1pdCAuY29tbWVudC13aWR0aCB7XG4gIHdpZHRoOiA1MDVweDtcbn1cbi5tYWluLXdyYXBwZXIgLmlucHV0LXN1Ym1pdCAucmVwbHktd2lkdGgge1xuICB3aWR0aDogNDY3cHg7XG59XG4ubWFpbi13cmFwcGVyIC5pbnB1dC1zdWJtaXQgYnV0dG9uIHtcbiAgd2lkdGg6IDE1N3B4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi53cmFwcGVyLWNvbW1lbnQge1xuICB3aWR0aDogNjYlO1xufVxuXG4ud3JhcHBlci1yZXBseSB7XG4gIG1hcmdpbjogMzJweCAwIDMycHggNzBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLndyYXBwZXItY29tbWVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLndyYXBwZXItY29tbWVudCAuaW5wdXQtc3VibWl0IHRleHRhcmVhIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAud3JhcHBlci1yZXBseSAuaW5wdXQtc3VibWl0LFxuLndyYXBwZXItY29tbWVudCAuaW5wdXQtc3VibWl0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICAud3JhcHBlci1yZXBseSAuaW5wdXQtc3VibWl0IGJ1dHRvbixcbi53cmFwcGVyLWNvbW1lbnQgLmlucHV0LXN1Ym1pdCBidXR0b24ge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC53cmFwcGVyLXJlcGx5IC5pbnB1dC1zdWJtaXQgdGV4dGFyZWEge1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC53cmFwcGVyLWNvbW1lbnQgaW1nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC53cmFwcGVyLWNvbW1lbnQgLmlucHV0LXN1Ym1pdCB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLndyYXBwZXItY29tbWVudCAuaW5wdXQtc3VibWl0IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddCommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-add-comment',
          templateUrl: './add-comment.component.html',
          styleUrls: ['./add-comment.component.scss']
        }]
      }], function () {
        return [{
          type: _services_comments_service__WEBPACK_IMPORTED_MODULE_3__["CommentsService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _global_user_components_profile_profile_service_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
        }];
      }, {
        updateList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        commentId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/component/comments/components/comment-pagination/comment-pagination.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/main/component/comments/components/comment-pagination/comment-pagination.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: CommentPaginationComponent */

  /***/
  function srcAppMainComponentCommentsComponentsCommentPaginationCommentPaginationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentPaginationComponent", function () {
      return CommentPaginationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CommentPaginationComponent_div_3_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentPaginationComponent_div_3_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r0.previous();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CommentPaginationComponent_div_3_div_3_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CommentPaginationComponent_div_3_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentPaginationComponent_div_3_div_3_a_1_Template, 2, 0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isFirstPage());
      }
    }

    function CommentPaginationComponent_div_3_div_4_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentPaginationComponent_div_3_div_4_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r0.setCurrent(page_r10.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r10.label, " ");
      }
    }

    function CommentPaginationComponent_div_3_div_4_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r10.label, " ");
      }
    }

    function CommentPaginationComponent_div_3_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentPaginationComponent_div_3_div_4_a_1_Template, 2, 1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommentPaginationComponent_div_3_div_4_a_2_Template, 2, 1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current", _r0.getCurrent() === page_r10.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.getCurrent() !== page_r10.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.getCurrent() === page_r10.value);
      }
    }

    function CommentPaginationComponent_div_3_a_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentPaginationComponent_div_3_a_6_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r0.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CommentPaginationComponent_div_3_div_7_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CommentPaginationComponent_div_3_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentPaginationComponent_div_3_div_7_a_1_Template, 2, 0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isLastPage());
      }
    }

    function CommentPaginationComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommentPaginationComponent_div_3_a_2_Template, 2, 0, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CommentPaginationComponent_div_3_div_3_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CommentPaginationComponent_div_3_div_4_Template, 3, 4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CommentPaginationComponent_div_3_a_6_Template, 2, 0, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CommentPaginationComponent_div_3_div_7_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.isFirstPage());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.pages.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.isLastPage());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.pages.length > 0);
      }
    }

    var CommentPaginationComponent = /*#__PURE__*/function () {
      function CommentPaginationComponent(cdr) {
        _classCallCheck(this, CommentPaginationComponent);

        this.cdr = cdr;
        this.setPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.maxSize = 5;
        this.maxCommentsOnPage = 10;
        this.bigTotalSize = null;
      }

      _createClass(CommentPaginationComponent, [{
        key: "onPageChange",
        value: function onPageChange(event) {
          this.config.currentPage = event;
          this.setPage.emit(event);
        }
      }, {
        key: "calcPaginationSize",
        value: function calcPaginationSize(totalPages, currentPages) {
          if (currentPages <= 2 || currentPages >= totalPages - 1) {
            this.bigTotalSize = 5;
          } else if (currentPages === 3 || currentPages === totalPages - 2) {
            this.bigTotalSize = 6;
          } else {
            this.bigTotalSize = 7;
          }

          this.maxSize = totalPages <= 5 ? 5 : this.bigTotalSize;
          return this.maxSize;
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.cdr.detectChanges();
        }
      }]);

      return CommentPaginationComponent;
    }();

    CommentPaginationComponent.ɵfac = function CommentPaginationComponent_Factory(t) {
      return new (t || CommentPaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    CommentPaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommentPaginationComponent,
      selectors: [["app-comment-pagination"]],
      inputs: {
        config: "config"
      },
      outputs: {
        setPage: "setPage"
      },
      decls: 4,
      vars: 3,
      consts: [[1, "pagination"], [3, "id", "maxSize", "pageChange"], ["p", "paginationApi"], ["class", "custom-pagination", 4, "ngIf"], [1, "custom-pagination"], [1, "pagination-previous"], [3, "click", 4, "ngIf"], [4, "ngIf"], ["class", "page-number", 3, "current", 4, "ngFor", "ngForOf"], [1, "pagination-next"], [3, "click"], [1, "previous-btn"], [1, "previous-btn-disabled"], [1, "page-number"], [1, "next-btn"], [1, "next-btn-disabled"]],
      template: function CommentPaginationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pagination-template", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function CommentPaginationComponent_Template_pagination_template_pageChange_1_listener($event) {
            return ctx.onPageChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CommentPaginationComponent_div_3_Template, 8, 5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.config.id)("maxSize", ctx.calcPaginationSize(_r0.getLastPage(), _r0.getCurrent()));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.getTotalItems() > ctx.maxCommentsOnPage);
        }
      },
      directives: [ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationControlsDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  height: 28px;\n}\n.pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%] {\n  margin: 0 40px 0 0;\n}\n.pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .page-number.current[_ngcontent-%COMP%] {\n  height: 28px;\n  min-width: 32px;\n  background: var(--primary-green) !important;\n  border-radius: 4px;\n}\n.pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  height: 28px;\n  font-family: var(--primary-font);\n  font-size: 21px;\n  line-height: 28px;\n  color: var(--primary-dark-grey);\n  cursor: pointer;\n}\n.pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .page-number.current[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0 9px 0 9px;\n  color: #fff;\n}\n.pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary-green);\n}\n.pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  color: var(--secondary-dark-green);\n}\n.pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .page-number.current[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-previous[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-next[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: bold;\n  cursor: pointer;\n}\n.pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-previous[_ngcontent-%COMP%]   .previous-btn[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-previous[_ngcontent-%COMP%]   .previous-btn-disabled[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-previous[_ngcontent-%COMP%]   .next-btn[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-previous[_ngcontent-%COMP%]   .next-btn-disabled[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-next[_ngcontent-%COMP%]   .previous-btn[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-next[_ngcontent-%COMP%]   .previous-btn-disabled[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-next[_ngcontent-%COMP%]   .next-btn[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-next[_ngcontent-%COMP%]   .next-btn-disabled[_ngcontent-%COMP%] {\n  margin-right: 40px;\n  width: 8px;\n  height: 12px;\n}\n.pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-previous[_ngcontent-%COMP%]   .next-btn[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-previous[_ngcontent-%COMP%]   .next-btn-disabled[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-next[_ngcontent-%COMP%]   .next-btn[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-next[_ngcontent-%COMP%]   .next-btn-disabled[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-previous[_ngcontent-%COMP%]   .previous-btn[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-next[_ngcontent-%COMP%]   .previous-btn[_ngcontent-%COMP%] {\n  background: url('/GreenCityClient/assets/img/comments/arrow-previous.svg') no-repeat center;\n}\n.pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-previous[_ngcontent-%COMP%]   .previous-btn-disabled[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-next[_ngcontent-%COMP%]   .previous-btn-disabled[_ngcontent-%COMP%] {\n  background: url('/GreenCityClient/assets/img/comments/arrow-previous-disable.svg') no-repeat center;\n}\n.pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-previous[_ngcontent-%COMP%]   .next-btn-disabled[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-next[_ngcontent-%COMP%]   .next-btn-disabled[_ngcontent-%COMP%] {\n  background: url('/GreenCityClient/assets/img/comments/arrow-next-disable.svg') no-repeat center;\n}\n.pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-previous[_ngcontent-%COMP%]   .next-btn[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   .custom-pagination[_ngcontent-%COMP%]   .pagination-next[_ngcontent-%COMP%]   .next-btn[_ngcontent-%COMP%] {\n  background: url('/GreenCityClient/assets/img/comments/arrow-next.svg') no-repeat center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvY29tbWVudHMvY29tcG9uZW50cy9jb21tZW50LXBhZ2luYXRpb24vRDpcXFNvZnRTZXJ2ZV9BY2FkZW15XFxHcmVlbkNpdHlcXGdoLXBhZ2VzXFxHcmVlbkNpdHlDbGllbnQvc3JjXFxhcHBcXG1haW5cXGNvbXBvbmVudFxcY29tbWVudHNcXGNvbXBvbmVudHNcXGNvbW1lbnQtcGFnaW5hdGlvblxcY29tbWVudC1wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbXBvbmVudC9jb21tZW50cy9jb21wb25lbnRzL2NvbW1lbnQtcGFnaW5hdGlvbi9jb21tZW50LXBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDRSxrQkFBQTtBQ0NOO0FERUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUNBTjtBREdJO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQ0ROO0FESUk7RUFDRSxvQkFBQTtFQUNBLFdBQUE7QUNGTjtBREtJO0VBQ0UsMkJBQUE7QUNITjtBRE1JO0VBQ0Usa0NBQUE7QUNKTjtBRE9JO0VBQ0UsV0FBQTtBQ0xOO0FEUUk7O0VBRUUscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNOTjtBRFFNOzs7Ozs7OztFQUlFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNGUjtBREtNOzs7O0VBRUUsZUFBQTtBQ0RSO0FESU07O0VBQ0UsMkZBQUE7QUNEUjtBRElNOztFQUNFLG1HQUFBO0FDRFI7QURJTTs7RUFDRSwrRkFBQTtBQ0RSO0FESU07O0VBQ0UsdUZBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29tcG9uZW50L2NvbW1lbnRzL2NvbXBvbmVudHMvY29tbWVudC1wYWdpbmF0aW9uL2NvbW1lbnQtcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdpbmF0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDI4cHg7XHJcblxyXG4gIC5jdXN0b20tcGFnaW5hdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAucGFnZS1udW1iZXIge1xyXG4gICAgICBtYXJnaW46IDAgNDBweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2UtbnVtYmVyLmN1cnJlbnQge1xyXG4gICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgIG1pbi13aWR0aDogMzJweDtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmVlbikgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlLW51bWJlciBhIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmstZ3JleSk7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGFnZS1udW1iZXIuY3VycmVudCBhIHtcclxuICAgICAgcGFkZGluZzogMCA5cHggMCA5cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlLW51bWJlciBhOmhvdmVyIHtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlLW51bWJlciBhOmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGFyay1ncmVlbik7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2UtbnVtYmVyLmN1cnJlbnQgYTpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdpbmF0aW9uLXByZXZpb3VzLFxyXG4gICAgLnBhZ2luYXRpb24tbmV4dCB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgIC5wcmV2aW91cy1idG4sXHJcbiAgICAgIC5wcmV2aW91cy1idG4tZGlzYWJsZWQsXHJcbiAgICAgIC5uZXh0LWJ0bixcclxuICAgICAgLm5leHQtYnRuLWRpc2FibGVkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uZXh0LWJ0bixcclxuICAgICAgLm5leHQtYnRuLWRpc2FibGVkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wcmV2aW91cy1idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnfi9hc3NldHMvaW1nL2NvbW1lbnRzL2Fycm93LXByZXZpb3VzLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wcmV2aW91cy1idG4tZGlzYWJsZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnfi9hc3NldHMvaW1nL2NvbW1lbnRzL2Fycm93LXByZXZpb3VzLWRpc2FibGUuc3ZnJykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5leHQtYnRuLWRpc2FibGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ34vYXNzZXRzL2ltZy9jb21tZW50cy9hcnJvdy1uZXh0LWRpc2FibGUuc3ZnJykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5leHQtYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ34vYXNzZXRzL2ltZy9jb21tZW50cy9hcnJvdy1uZXh0LnN2ZycpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDI4cHg7XG59XG4ucGFnaW5hdGlvbiAuY3VzdG9tLXBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYWdpbmF0aW9uIC5jdXN0b20tcGFnaW5hdGlvbiAucGFnZS1udW1iZXIge1xuICBtYXJnaW46IDAgNDBweCAwIDA7XG59XG4ucGFnaW5hdGlvbiAuY3VzdG9tLXBhZ2luYXRpb24gLnBhZ2UtbnVtYmVyLmN1cnJlbnQge1xuICBoZWlnaHQ6IDI4cHg7XG4gIG1pbi13aWR0aDogMzJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmVlbikgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnBhZ2luYXRpb24gLmN1c3RvbS1wYWdpbmF0aW9uIC5wYWdlLW51bWJlciBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMjhweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmstZ3JleSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wYWdpbmF0aW9uIC5jdXN0b20tcGFnaW5hdGlvbiAucGFnZS1udW1iZXIuY3VycmVudCBhIHtcbiAgcGFkZGluZzogMCA5cHggMCA5cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhZ2luYXRpb24gLmN1c3RvbS1wYWdpbmF0aW9uIC5wYWdlLW51bWJlciBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xufVxuLnBhZ2luYXRpb24gLmN1c3RvbS1wYWdpbmF0aW9uIC5wYWdlLW51bWJlciBhOmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGFyay1ncmVlbik7XG59XG4ucGFnaW5hdGlvbiAuY3VzdG9tLXBhZ2luYXRpb24gLnBhZ2UtbnVtYmVyLmN1cnJlbnQgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhZ2luYXRpb24gLmN1c3RvbS1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzLFxuLnBhZ2luYXRpb24gLmN1c3RvbS1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGFnaW5hdGlvbiAuY3VzdG9tLXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMgLnByZXZpb3VzLWJ0bixcbi5wYWdpbmF0aW9uIC5jdXN0b20tcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cyAucHJldmlvdXMtYnRuLWRpc2FibGVkLFxuLnBhZ2luYXRpb24gLmN1c3RvbS1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzIC5uZXh0LWJ0bixcbi5wYWdpbmF0aW9uIC5jdXN0b20tcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cyAubmV4dC1idG4tZGlzYWJsZWQsXG4ucGFnaW5hdGlvbiAuY3VzdG9tLXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dCAucHJldmlvdXMtYnRuLFxuLnBhZ2luYXRpb24gLmN1c3RvbS1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQgLnByZXZpb3VzLWJ0bi1kaXNhYmxlZCxcbi5wYWdpbmF0aW9uIC5jdXN0b20tcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0IC5uZXh0LWJ0bixcbi5wYWdpbmF0aW9uIC5jdXN0b20tcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0IC5uZXh0LWJ0bi1kaXNhYmxlZCB7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiAxMnB4O1xufVxuLnBhZ2luYXRpb24gLmN1c3RvbS1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzIC5uZXh0LWJ0bixcbi5wYWdpbmF0aW9uIC5jdXN0b20tcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cyAubmV4dC1idG4tZGlzYWJsZWQsXG4ucGFnaW5hdGlvbiAuY3VzdG9tLXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dCAubmV4dC1idG4sXG4ucGFnaW5hdGlvbiAuY3VzdG9tLXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dCAubmV4dC1idG4tZGlzYWJsZWQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4ucGFnaW5hdGlvbiAuY3VzdG9tLXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMgLnByZXZpb3VzLWJ0bixcbi5wYWdpbmF0aW9uIC5jdXN0b20tcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0IC5wcmV2aW91cy1idG4ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJ+L2Fzc2V0cy9pbWcvY29tbWVudHMvYXJyb3ctcHJldmlvdXMuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG59XG4ucGFnaW5hdGlvbiAuY3VzdG9tLXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMgLnByZXZpb3VzLWJ0bi1kaXNhYmxlZCxcbi5wYWdpbmF0aW9uIC5jdXN0b20tcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0IC5wcmV2aW91cy1idG4tZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJ+L2Fzc2V0cy9pbWcvY29tbWVudHMvYXJyb3ctcHJldmlvdXMtZGlzYWJsZS5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbn1cbi5wYWdpbmF0aW9uIC5jdXN0b20tcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cyAubmV4dC1idG4tZGlzYWJsZWQsXG4ucGFnaW5hdGlvbiAuY3VzdG9tLXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dCAubmV4dC1idG4tZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJ+L2Fzc2V0cy9pbWcvY29tbWVudHMvYXJyb3ctbmV4dC1kaXNhYmxlLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xufVxuLnBhZ2luYXRpb24gLmN1c3RvbS1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzIC5uZXh0LWJ0bixcbi5wYWdpbmF0aW9uIC5jdXN0b20tcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0IC5uZXh0LWJ0biB7XG4gIGJhY2tncm91bmQ6IHVybChcIn4vYXNzZXRzL2ltZy9jb21tZW50cy9hcnJvdy1uZXh0LnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentPaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-comment-pagination',
          templateUrl: './comment-pagination.component.html',
          styleUrls: ['./comment-pagination.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        setPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/component/comments/components/comments-container/comments-container.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/main/component/comments/components/comments-container/comments-container.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: CommentsContainerComponent */

  /***/
  function srcAppMainComponentCommentsComponentsCommentsContainerCommentsContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsContainerComponent", function () {
      return CommentsContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_comments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/comments.service */
    "./src/app/main/component/comments/services/comments.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_service_user_own_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @auth-service/user-own-auth.service */
    "./src/app/main/service/auth/user-own-auth.service.ts");

    function CommentsContainerComponent_ng_container_0_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "homepage.eco-news.comment.comments.zero-comment"), " ");
      }
    }

    function CommentsContainerComponent_ng_container_0_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "homepage.eco-news.comment.comments.one-comment"), " ");
      }
    }

    function CommentsContainerComponent_ng_container_0_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "homepage.eco-news.comment.comments.more-then-two-comments"), " ");
      }
    }

    function CommentsContainerComponent_ng_container_0_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "homepage.eco-news.comment.comments.more-then-four-comments"), " ");
      }
    }

    function CommentsContainerComponent_ng_container_0_app_add_comment_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-add-comment", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateList", function CommentsContainerComponent_ng_container_0_app_add_comment_14_Template_app_add_comment_updateList_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.updateElementsList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CommentsContainerComponent_ng_container_0_mat_spinner_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 11);
      }
    }

    function CommentsContainerComponent_ng_container_0_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-comments-list", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changedList", function CommentsContainerComponent_ng_container_0_ng_template_16_Template_app_comments_list_changedList_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.updateElementsList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-comment-pagination", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setPage", function CommentsContainerComponent_ng_container_0_ng_template_16_Template_app_comment_pagination_setPage_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.addCommentByPagination($event - 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("elementsList", ctx_r10.elementsList)("config", ctx_r10.config)("isLoggedIn", ctx_r10.isLoggedIn)("userId", ctx_r10.userId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r10.config);
      }
    }

    var _c0 = function _c0() {
      return [2, 3, 4];
    };

    function CommentsContainerComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CommentsContainerComponent_ng_container_0_span_9_Template, 3, 3, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CommentsContainerComponent_ng_container_0_span_10_Template, 3, 3, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CommentsContainerComponent_ng_container_0_span_11_Template, 3, 3, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CommentsContainerComponent_ng_container_0_span_12_Template, 3, 3, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CommentsContainerComponent_ng_container_0_app_add_comment_14_Template, 1, 0, "app-add-comment", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CommentsContainerComponent_ng_container_0_mat_spinner_15_Template, 1, 0, "mat-spinner", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CommentsContainerComponent_ng_container_0_ng_template_16_Template, 2, 5, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, "user.map.comments"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.totalElements, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.totalElements);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0).includes(ctx_r0.totalElements) ? ctx_r0.totalElements : !ctx_r0.totalElements);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLoggedIn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.elementsList.length < 1 && ctx_r0.elementsArePresent)("ngIfElse", _r9);
      }
    }

    function CommentsContainerComponent_ng_template_1_app_add_comment_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-add-comment", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateList", function CommentsContainerComponent_ng_template_1_app_add_comment_0_Template_app_add_comment_updateList_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.updateElementsList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("commentId", ctx_r16.comment.id);
      }
    }

    function CommentsContainerComponent_ng_template_1_div_1_mat_spinner_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 11);
      }
    }

    function CommentsContainerComponent_ng_template_1_div_1_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-comments-list", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changedList", function CommentsContainerComponent_ng_template_1_div_1_ng_template_2_Template_app_comments_list_changedList_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r23.updateElementsList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-comment-pagination", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setPage", function CommentsContainerComponent_ng_template_1_div_1_ng_template_2_Template_app_comment_pagination_setPage_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r25.addCommentByPagination($event - 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("elementsList", ctx_r22.elementsList)("commentId", ctx_r22.comment.id)("config", ctx_r22.config)("isLoggedIn", ctx_r22.isLoggedIn)("userId", ctx_r22.userId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r22.config);
      }
    }

    function CommentsContainerComponent_ng_template_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentsContainerComponent_ng_template_1_div_1_mat_spinner_1_Template, 1, 0, "mat-spinner", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommentsContainerComponent_ng_template_1_div_1_ng_template_2_Template, 2, 6, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.elementsList.length < 1 && ctx_r17.elementsArePresent)("ngIfElse", _r21);
      }
    }

    function CommentsContainerComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CommentsContainerComponent_ng_template_1_app_add_comment_0_Template, 1, 1, "app-add-comment", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentsContainerComponent_ng_template_1_div_1_Template, 4, 2, "div", 15);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.comment.showRelyButton && ctx_r2.isLoggedIn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.comment.showAllRelies);
      }
    }

    var CommentsContainerComponent = /*#__PURE__*/function () {
      function CommentsContainerComponent(commentsService, route, userOwnAuthService) {
        _classCallCheck(this, CommentsContainerComponent);

        this.commentsService = commentsService;
        this.route = route;
        this.userOwnAuthService = userOwnAuthService;
        this.dataType = 'comment';
        this.config = {
          id: 'comment',
          itemsPerPage: 10,
          currentPage: 0,
          totalItems: 0
        };
        this.repliesCounter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.elementsList = [];
        this.elementsArePresent = true;
      }

      _createClass(CommentsContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkUserSingIn();
          this.userOwnAuthService.getDataFromLocalStorage();
          this.newsId = this.route.snapshot.params.id;
          this.addEcoNewsId();
          this.addCommentByPagination();
          this.getActiveComments();
          this.getCommentsTotalElements();

          if (this.dataType === 'reply') {
            this.config.id = this.comment.id.toString();
          }
        }
      }, {
        key: "addEcoNewsId",
        value: function addEcoNewsId() {
          var _this12 = this;

          this.route.url.subscribe(function (url) {
            return _this12.commentsService.ecoNewsId = url[0].path;
          });
        }
      }, {
        key: "addCommentByPagination",
        value: function addCommentByPagination() {
          var _this13 = this;

          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          if (this.dataType === 'comment') {
            this.commentsSubscription = this.commentsService.getActiveCommentsByPage(page, this.config.itemsPerPage).subscribe(function (list) {
              return _this13.setCommentsList(list);
            });
          } else {
            this.commentsSubscription = this.commentsService.getActiveRepliesByPage(this.comment.id, page, this.config.itemsPerPage).subscribe(function (list) {
              return _this13.setCommentsList(list);
            });
          }
        }
      }, {
        key: "setCommentsList",
        value: function setCommentsList(data) {
          this.elementsList = _toConsumableArray(data.page);
          this.elementsArePresent = this.elementsList.length > 0;
        }
      }, {
        key: "updateElementsList",
        value: function updateElementsList() {
          this.addCommentByPagination();
          this.getCommentsTotalElements();
          this.getActiveComments();
        }
      }, {
        key: "getCommentsTotalElements",
        value: function getCommentsTotalElements() {
          var _this14 = this;

          this.dataType === 'comment' ? this.commentsService.getCommentsCount(this.newsId).subscribe(function (data) {
            return _this14.totalElements = data;
          }) : this.commentsService.getRepliesAmount(this.comment.id).subscribe(function (data) {
            return _this14.repliesCounter.emit(data);
          });
        }
      }, {
        key: "getActiveComments",
        value: function getActiveComments() {
          var _this15 = this;

          this.dataType === 'comment' ? this.commentsService.getActiveCommentsByPage(0, this.config.itemsPerPage).subscribe(function (el) {
            _this15.setData(el.currentPage, el.totalElements);
          }) : this.commentsService.getActiveRepliesByPage(this.comment.id, 0, this.config.itemsPerPage).subscribe(function (el) {
            _this15.setData(el.currentPage, el.totalElements);
          });
        }
      }, {
        key: "setData",
        value: function setData(currentPage, totalElements) {
          this.config.currentPage = currentPage;
          this.config.totalItems = totalElements;
        }
      }, {
        key: "checkUserSingIn",
        value: function checkUserSingIn() {
          var _this16 = this;

          this.userOwnAuthService.credentialDataSubject.subscribe(function (data) {
            _this16.isLoggedIn = data && data.userId;
            _this16.userId = data.userId;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.commentsSubscription.unsubscribe();
        }
      }]);

      return CommentsContainerComponent;
    }();

    CommentsContainerComponent.ɵfac = function CommentsContainerComponent_Factory(t) {
      return new (t || CommentsContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_comments_service__WEBPACK_IMPORTED_MODULE_1__["CommentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service_user_own_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserOwnAuthService"]));
    };

    CommentsContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommentsContainerComponent,
      selectors: [["app-comments-container"]],
      inputs: {
        dataType: "dataType",
        comment: "comment",
        config: "config"
      },
      outputs: {
        repliesCounter: "repliesCounter"
      },
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["replyConteiner", ""], [1, "counter"], [1, "wrapper"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "updateList", 4, "ngIf"], ["class", "spinner", 4, "ngIf", "ngIfElse"], ["comments", ""], [3, "updateList"], [1, "spinner"], ["dataType", "comment", 3, "elementsList", "config", "isLoggedIn", "userId", "changedList"], [3, "config", "setPage"], [3, "commentId", "updateList", 4, "ngIf"], [4, "ngIf"], [3, "commentId", "updateList"], ["reply", ""], ["dataType", "reply", 1, "list", 3, "elementsList", "commentId", "config", "isLoggedIn", "userId", "changedList"]],
      template: function CommentsContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CommentsContainerComponent_ng_container_0_Template, 18, 12, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentsContainerComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataType === "comment")("ngIfElse", _r1);
        }
      },
      styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  margin: 40px auto 0;\n}\n\n.spinner[_ngcontent-%COMP%]  circle {\n  stroke: var(--secondary-dark-green);\n}\n\n.list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.counter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: var(--secondary-font);\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 35px;\n  color: var(--secondary-dark-grey);\n  margin-bottom: 18px;\n}\n\n.counter[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  background: #e6e6e6;\n  margin-top: 0;\n  margin-bottom: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvY29tbWVudHMvY29tcG9uZW50cy9jb21tZW50cy1jb250YWluZXIvRDpcXFNvZnRTZXJ2ZV9BY2FkZW15XFxHcmVlbkNpdHlcXGdoLXBhZ2VzXFxHcmVlbkNpdHlDbGllbnQvc3JjXFxhcHBcXG1haW5cXGNvbXBvbmVudFxcY29tbWVudHNcXGNvbXBvbmVudHNcXGNvbW1lbnRzLWNvbnRhaW5lclxcY29tbWVudHMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbXBvbmVudC9jb21tZW50cy9jb21wb25lbnRzL2NvbW1lbnRzLWNvbnRhaW5lci9jb21tZW50cy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxtQ0FBQTtBQ0NKOztBREdBO0VBQ0UsV0FBQTtBQ0FGOztBRElFO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbXBvbmVudC9jb21tZW50cy9jb21wb25lbnRzL2NvbW1lbnRzLWNvbnRhaW5lci9jb21tZW50cy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICBtYXJnaW46IDQwcHggYXV0byAwO1xyXG5cclxuICAmOjpuZy1kZWVwIGNpcmNsZSB7XHJcbiAgICBzdHJva2U6IHZhcigtLXNlY29uZGFyeS1kYXJrLWdyZWVuKTtcclxuICB9XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvdW50ZXIge1xyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeS1mb250KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGFyay1ncmV5KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG5cclxuICBociB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgfVxyXG59XHJcbiIsIi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc3Bpbm5lciB7XG4gIG1hcmdpbjogNDBweCBhdXRvIDA7XG59XG4uc3Bpbm5lcjo6bmctZGVlcCBjaXJjbGUge1xuICBzdHJva2U6IHZhcigtLXNlY29uZGFyeS1kYXJrLWdyZWVuKTtcbn1cblxuLmxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvdW50ZXIgcCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGFyay1ncmV5KTtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cbi5jb3VudGVyIGhyIHtcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-comments-container',
          templateUrl: './comments-container.component.html',
          styleUrls: ['./comments-container.component.scss']
        }]
      }], function () {
        return [{
          type: _services_comments_service__WEBPACK_IMPORTED_MODULE_1__["CommentsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _auth_service_user_own_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserOwnAuthService"]
        }];
      }, {
        dataType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        comment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        repliesCounter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/component/comments/components/comments-list/comments-list.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/main/component/comments/components/comments-list/comments-list.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: CommentsListComponent */

  /***/
  function srcAppMainComponentCommentsComponentsCommentsListCommentsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsListComponent", function () {
      return CommentsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _models_comments_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/comments-model */
    "./src/app/main/component/comments/models/comments-model.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_comments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/comments.service */
    "./src/app/main/component/comments/services/comments.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _user_components_shared_components_user_profile_image_user_profile_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../user/components/shared/components/user-profile-image/user-profile-image.component */
    "./src/app/main/component/user/components/shared/components/user-profile-image/user-profile-image.component.ts");
    /* harmony import */


    var _edit_comment_edit_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../edit-comment/edit-comment.component */
    "./src/app/main/component/comments/components/edit-comment/edit-comment.component.ts");
    /* harmony import */


    var _delete_comment_delete_comment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../delete-comment/delete-comment.component */
    "./src/app/main/component/comments/components/delete-comment/delete-comment.component.ts");
    /* harmony import */


    var _like_comment_like_comment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../like-comment/like-comment.component */
    "./src/app/main/component/comments/components/like-comment/like-comment.component.ts");
    /* harmony import */


    var _reply_comment_reply_comment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../reply-comment/reply-comment.component */
    "./src/app/main/component/comments/components/reply-comment/reply-comment.component.ts");
    /* harmony import */


    var _view_replies_view_replies_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../view-replies/view-replies.component */
    "./src/app/main/component/comments/components/view-replies/view-replies.component.ts");
    /* harmony import */


    var _comments_container_comments_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../comments-container/comments-container.component */
    "./src/app/main/component/comments/components/comments-container/comments-container.component.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _pipe_date_localisation_pipe_date_localisation_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @pipe/date-localisation-pipe/date-localisation.pipe */
    "./src/app/main/pipe/date-localisation-pipe/date-localisation.pipe.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function CommentsListComponent_div_0_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "homepage.eco-news.comment.btn.edited"), " ");
      }
    }

    function CommentsListComponent_div_0_p_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.text);
      }
    }

    function CommentsListComponent_div_0_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", comment_r1.text)("formControl", ctx_r4.content);
      }
    }

    function CommentsListComponent_div_0_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-edit-comment", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isEditing", function CommentsListComponent_div_0_div_22_Template_app_edit_comment_isEditing_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.showElements(comment_r1.id, "isEdit");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-delete-comment", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("elementsList", function CommentsListComponent_div_0_div_22_Template_app_delete_comment_elementsList_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.deleteComment();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("element", comment_r1)("dataType", ctx_r5.dataType);
      }
    }

    function CommentsListComponent_div_0_ng_template_23_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsListComponent_div_0_ng_template_23_div_0_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.saveEditedComment(comment_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsListComponent_div_0_ng_template_23_div_0_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.cancelEditedComment(comment_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r19.content.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r19.editIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "homepage.eco-news.comment.btn.save"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r19.cancelIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, "homepage.eco-news.comment.btn.cancel"), " ");
      }
    }

    function CommentsListComponent_div_0_ng_template_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CommentsListComponent_div_0_ng_template_23_div_0_Template, 14, 9, "div", 32);
      }

      if (rf & 2) {
        var comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.isLoggedIn && ctx_r7.checkCommentAuthor(comment_r1.author.id));
      }
    }

    function CommentsListComponent_div_0_app_like_comment_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-like-comment", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("likesCounter", function CommentsListComponent_div_0_app_like_comment_25_Template_app_like_comment_likesCounter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.changeCounter($event, comment_r1.id, "likes");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comment", comment_r1);
      }
    }

    function CommentsListComponent_div_0_app_reply_comment_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-reply-comment", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsListComponent_div_0_app_reply_comment_26_Template_app_reply_comment_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.showElements(comment_r1.id, "showRelyButton");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CommentsListComponent_div_0_div_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-view-replies", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsListComponent_div_0_div_27_Template_app_view_replies_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.showElements(comment_r1.id, "showAllRelies");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isShowReplies", ctx_r10.isShowReplies(comment_r1.id))("repliesCounter", comment_r1.replies);
      }
    }

    function CommentsListComponent_div_0_app_comments_container_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-comments-container", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("repliesCounter", function CommentsListComponent_div_0_app_comments_container_28_Template_app_comments_container_repliesCounter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.changeCounter($event, comment_r1.id, "replies");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comment", comment_r1);
      }
    }

    function CommentsListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-user-profile-image", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "dateLocalisation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CommentsListComponent_div_0_span_12_Template, 3, 3, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CommentsListComponent_div_0_p_19_Template, 2, 1, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CommentsListComponent_div_0_div_20_Template, 3, 2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CommentsListComponent_div_0_div_22_Template, 3, 2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CommentsListComponent_div_0_ng_template_23_Template, 1, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CommentsListComponent_div_0_app_like_comment_25_Template, 1, 1, "app-like-comment", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CommentsListComponent_div_0_app_reply_comment_26_Template, 1, 0, "app-reply-comment", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CommentsListComponent_div_0_div_27_Template, 2, 2, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CommentsListComponent_div_0_app_comments_container_28_Template, 1, 1, "app-comments-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r1 = ctx.$implicit;

        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.dataType === ctx_r0.types.commentType ? ctx_r0.types.wrapperCommentType : ctx_r0.types.wrapperReplyType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgPath", comment_r1.author.userProfilePicturePath)("firstName", comment_r1.author.name)("additionalImgClass", "comments-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r1.author.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 17, comment_r1.modifiedDate), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isCommentEdited(comment_r1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.likeImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.likes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !comment_r1.isEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r1.isEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLoggedIn && ctx_r0.checkCommentAuthor(comment_r1.author.id) && !comment_r1.isEdit)("ngIfElse", _r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLoggedIn && !ctx_r0.checkCommentAuthor(comment_r1.author.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLoggedIn && !comment_r1.isEdit && ctx_r0.dataType === ctx_r0.types.commentType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.dataType === ctx_r0.types.commentType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.dataType === ctx_r0.types.commentType);
      }
    }

    var CommentsListComponent = /*#__PURE__*/function () {
      function CommentsListComponent(commentsService) {
        _classCallCheck(this, CommentsListComponent);

        this.commentsService = commentsService;
        this.elementsList = [];
        this.changedList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.types = _models_comments_model__WEBPACK_IMPORTED_MODULE_2__["dataTypes"];
        this.content = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8000)]);
        this.editIcon = 'assets/img/comments/edit.png';
        this.cancelIcon = 'assets/img/comments/cancel-comment-edit.png';
        this.likeImg = 'assets/img/comments/like.png';
      }

      _createClass(CommentsListComponent, [{
        key: "deleteComment",
        value: function deleteComment() {
          this.changedList.emit();
        }
      }, {
        key: "isCommentEdited",
        value: function isCommentEdited(element) {
          return element.status === 'EDITED';
        }
      }, {
        key: "saveEditedComment",
        value: function saveEditedComment(element) {
          var _this17 = this;

          this.commentsService.editComment(element.id, this.content).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function () {
            return _this17.content.reset();
          });
          element.isEdit = false;
          element.text = this.content.value;
          element.status = 'EDITED';
          element.modifiedDate = String(Date.now());
        }
      }, {
        key: "cancelEditedComment",
        value: function cancelEditedComment(element) {
          element.isEdit = false;
        }
      }, {
        key: "changeCounter",
        value: function changeCounter(counter, id, key) {
          this.elementsList = this.elementsList.map(function (item) {
            if (item.id === id) {
              item[key] = counter;
            }

            return item;
          });
        }
      }, {
        key: "showElements",
        value: function showElements(id, key) {
          this.elementsList = this.elementsList.map(function (item) {
            item[key] = item.id === id && !item[key];
            return item;
          });
        }
      }, {
        key: "isShowReplies",
        value: function isShowReplies(id) {
          var _iterator2 = _createForOfIteratorHelper(this.elementsList),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var item = _step2.value;

              if (item.id === id && item.showAllRelies) {
                return item.showAllRelies;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return false;
        }
      }, {
        key: "checkCommentAuthor",
        value: function checkCommentAuthor(commentAuthorId) {
          return commentAuthorId === Number(this.userId);
        }
      }]);

      return CommentsListComponent;
    }();

    CommentsListComponent.ɵfac = function CommentsListComponent_Factory(t) {
      return new (t || CommentsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_comments_service__WEBPACK_IMPORTED_MODULE_4__["CommentsService"]));
    };

    CommentsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommentsListComponent,
      selectors: [["app-comments-list"]],
      inputs: {
        elementsList: "elementsList",
        dataType: "dataType",
        commentId: "commentId",
        config: "config",
        isLoggedIn: "isLoggedIn",
        userId: "userId"
      },
      outputs: {
        changedList: "changedList"
      },
      decls: 2,
      vars: 4,
      consts: [["class", "comment-body-wrapper", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "comment-body-wrapper", 3, "ngClass"], [1, "comment-avatar"], [3, "imgPath", "firstName", "additionalImgClass"], [1, "comment-details"], [1, "author-name"], [1, "comment-date-likes"], [1, "comment-date"], [1, "comment-dot"], [1, "comment-date-month"], ["class", "edited", 4, "ngIf"], [1, "comment-dot", "last-dot"], [1, "comment-likes"], ["alt", "like", "aria-hidden", "true", 3, "src"], [1, "like-amount"], [1, "comment-main-text"], ["class", "comment-text", 4, "ngIf"], ["class", "comment-edit-text", 4, "ngIf"], [1, "comments-elements"], ["class", "btn-wrapper", 4, "ngIf", "ngIfElse"], ["editComment", ""], [3, "comment", "likesCounter", 4, "ngIf"], [3, "click", 4, "ngIf"], ["class", "btn-replies", 4, "ngIf"], ["dataType", "reply", 3, "comment", "repliesCounter", 4, "ngIf"], [1, "edited"], [1, "comment-text"], [1, "comment-edit-text"], ["type", "text", "maxlength", "8000", 1, "edit-text-input", 3, "value", "formControl"], [1, "btn-wrapper"], [3, "isEditing"], [3, "element", "dataType", "elementsList"], ["class", "save-cancel-wrapper", 4, "ngIf"], [1, "save-cancel-wrapper"], [1, "d-flex"], [1, "main-wrapper"], [1, "cta-btn", "save-edit", 3, "disabled", "click"], ["alt", "edit icon", 3, "src"], [1, "d-none", "d-sm-block", "btn-text"], [1, "cta-btn", "cancel-edit", 3, "click"], ["alt", "cancel icon", 1, "btn-img", 3, "src"], [3, "comment", "likesCounter"], [3, "click"], [1, "btn-replies"], [3, "isShowReplies", "repliesCounter", "click"], ["dataType", "reply", 3, "comment", "repliesCounter"]],
      template: function CommentsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CommentsListComponent_div_0_Template, 29, 19, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "paginate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, ctx.elementsList, ctx.config));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _user_components_shared_components_user_profile_image_user_profile_image_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileImageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _edit_comment_edit_comment_component__WEBPACK_IMPORTED_MODULE_7__["EditCommentComponent"], _delete_comment_delete_comment_component__WEBPACK_IMPORTED_MODULE_8__["DeleteCommentComponent"], _like_comment_like_comment_component__WEBPACK_IMPORTED_MODULE_9__["LikeCommentComponent"], _reply_comment_reply_comment_component__WEBPACK_IMPORTED_MODULE_10__["ReplyCommentComponent"], _view_replies_view_replies_component__WEBPACK_IMPORTED_MODULE_11__["ViewRepliesComponent"], _comments_container_comments_container_component__WEBPACK_IMPORTED_MODULE_12__["CommentsContainerComponent"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginatePipe"], _pipe_date_localisation_pipe_date_localisation_pipe__WEBPACK_IMPORTED_MODULE_14__["DateLocalisationPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]],
      styles: [".comment-body-wrapper[_ngcontent-%COMP%] {\n  margin: auto;\n  border-bottom: 1px solid #e6e6e6;\n}\n.comment-body-wrapper[_ngcontent-%COMP%]   .comment-avatar[_ngcontent-%COMP%] {\n  position: relative;\n}\n.wrapper-comment[_ngcontent-%COMP%] {\n  width: 65.79%;\n}\n.wrapper-reply[_ngcontent-%COMP%] {\n  width: 90%;\n  padding-left: 70px;\n}\n.author-name[_ngcontent-%COMP%] {\n  font-family: var(--secondary-font);\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 28px;\n  color: var(--secondary-dark-grey);\n  white-space: nowrap;\n}\n.comment-date[_ngcontent-%COMP%] {\n  color: var(--secondary-grey);\n  font-family: var(--primary-font);\n  font-size: 12px;\n  line-height: 16px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-top: 3px;\n}\n.comment-date[_ngcontent-%COMP%]   .comment-dot[_ngcontent-%COMP%] {\n  margin: 0 8px;\n  display: inline-block;\n  width: 4px;\n  height: 4px;\n  background: var(--secondary-grey);\n  border-radius: 100%;\n}\n.comment-date[_ngcontent-%COMP%]   .comment-date-month[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.comment-date[_ngcontent-%COMP%]   .comment-date-month[_ngcontent-%COMP%]   .edited[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 4px;\n}\n.comment-date[_ngcontent-%COMP%]   .last-dot[_ngcontent-%COMP%] {\n  display: none;\n}\n.comment-details[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 32px 0 8px 63px;\n}\n.comment-details[_ngcontent-%COMP%]   .comment-date-likes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.comment-main-text[_ngcontent-%COMP%] {\n  margin-left: 62px;\n  font-family: var(--primary-font);\n  font-size: 16px;\n  line-height: 24px;\n  margin-bottom: -10px;\n  display: flex;\n  flex-direction: column;\n}\n.comment-main-text[_ngcontent-%COMP%]   .comment-text[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n.comment-main-text[_ngcontent-%COMP%]   .edit-text-button[_ngcontent-%COMP%] {\n  width: 157px;\n  height: 48px;\n}\n.comments-elements[_ngcontent-%COMP%] {\n  display: flex;\n  padding-left: 55px;\n  justify-content: space-between;\n}\n.comments-elements[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.comment-edit-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.comment-edit-text[_ngcontent-%COMP%]   .edit-text-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 72px;\n  overflow: hidden;\n  resize: none;\n  padding: 10px 0 0 20px;\n}\n.comment-edit-text[_ngcontent-%COMP%]   .edit-text-input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: var(--secondary-grey);\n}\n.comment-edit-text[_ngcontent-%COMP%]   .edit-text-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--secondary-grey);\n}\n.btn-replies[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.save-edit[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 40px;\n  margin-right: 25px;\n  cursor: pointer;\n}\n.save-edit[_ngcontent-%COMP%]:disabled {\n  pointer-events: none;\n}\n.cancel-edit[_ngcontent-%COMP%] {\n  height: 40px;\n  margin-right: 8px;\n  cursor: pointer;\n}\n.cancel-edit[_ngcontent-%COMP%]   .btn-img[_ngcontent-%COMP%] {\n  min-width: 12px;\n  max-height: 12px;\n}\n.cta-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border: none;\n  background-color: #fff;\n  outline: none;\n}\n.btn-text[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 5px;\n  font-family: var(--primary-font);\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--secondary-grey);\n  mix-blend-mode: normal;\n  white-space: nowrap;\n}\n.comment-likes[_ngcontent-%COMP%]   .like-amount[_ngcontent-%COMP%] {\n  font-family: var(--primary-font);\n  font-size: 12px;\n  line-height: 16px;\n  color: var(--secondary-grey);\n  margin-left: 5px;\n}\n.comment-likes[_ngcontent-%COMP%]   .commnet-dot[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 992px) {\n  .btn-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .comment-body-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 575px) {\n  .comments-elements[_ngcontent-%COMP%] {\n    padding-left: 25px;\n  }\n\n  .comment-date[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n\n  .comment-details[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .comment-details[_ngcontent-%COMP%]   .comment-date-likes[_ngcontent-%COMP%] {\n    justify-content: left;\n  }\n\n  .main-wrapper[_ngcontent-%COMP%] {\n    margin-left: 35px;\n  }\n  .main-wrapper[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n\n  .main-wrapper[_ngcontent-%COMP%]:last-child {\n    margin-left: 0;\n  }\n}\n@media screen and (max-width: 320px) {\n  .comment-details[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .comment-details[_ngcontent-%COMP%]   .comment-date-likes[_ngcontent-%COMP%] {\n    justify-content: left;\n  }\n\n  .comment-date[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .comment-date[_ngcontent-%COMP%]   .comment-date-month[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .comment-date[_ngcontent-%COMP%]   .comment-dot[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .comment-date[_ngcontent-%COMP%]   .last-dot[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin: 0 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvY29tbWVudHMvY29tcG9uZW50cy9jb21tZW50cy1saXN0L0Q6XFxTb2Z0U2VydmVfQWNhZGVteVxcR3JlZW5DaXR5XFxnaC1wYWdlc1xcR3JlZW5DaXR5Q2xpZW50L3NyY1xcYXBwXFxtYWluXFxjb21wb25lbnRcXGNvbW1lbnRzXFxjb21wb25lbnRzXFxjb21tZW50cy1saXN0XFxjb21tZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbXBvbmVudC9jb21tZW50cy9jb21wb25lbnRzL2NvbW1lbnRzLWxpc3QvY29tbWVudHMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQ0FBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtBQ0NKO0FER0E7RUFDRSxhQUFBO0FDQUY7QURHQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQ0FGO0FER0E7RUFDRSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FDQUY7QURHQTtFQUNFLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQUY7QURFRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBQ0FKO0FER0U7RUFDRSxxQkFBQTtBQ0RKO0FER0k7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FDRE47QURLRTtFQUNFLGFBQUE7QUNISjtBRE9BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDSkY7QURNRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUNKSjtBRFFBO0VBQ0UsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDTEY7QURPRTtFQUNFLHFCQUFBO0FDTEo7QURRRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDTko7QURVQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDUEY7QURTRTtFQUNFLGFBQUE7QUNQSjtBRFdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ1JGO0FEVUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDUko7QURVSTtFQUNFLDRCQUFBO0FDUk47QURPSTtFQUNFLDRCQUFBO0FDUk47QURhQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDVkY7QURhQTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNWRjtBRGFBO0VBQ0Usb0JBQUE7QUNWRjtBRGFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ1ZGO0FEWUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNWSjtBRGNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNYRjtBRGNBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDWEY7QURlRTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ1pKO0FEZUU7RUFDRSxhQUFBO0FDYko7QURpQkE7RUFDRTtJQUNFLGVBQUE7RUNkRjtBQUNGO0FEaUJBO0VBQ0U7SUFDRSxXQUFBO0VDZkY7QUFDRjtBRGtCQTtFQUNFO0lBQ0Usa0JBQUE7RUNoQkY7O0VEbUJBO0lBQ0UsMkJBQUE7RUNoQkY7O0VEbUJBO0lBQ0Usc0JBQUE7RUNoQkY7RURrQkU7SUFDRSxxQkFBQTtFQ2hCSjs7RURvQkE7SUFDRSxpQkFBQTtFQ2pCRjtFRG1CRTtJQUNFLFdBQUE7RUNqQko7O0VEcUJBO0lBQ0UsY0FBQTtFQ2xCRjtBQUNGO0FEcUJBO0VBQ0U7SUFDRSxzQkFBQTtFQ25CRjtFRHFCRTtJQUNFLHFCQUFBO0VDbkJKOztFRHVCQTtJQUNFLG1CQUFBO0VDcEJGO0VEc0JFO0lBQ0UsU0FBQTtFQ3BCSjtFRHVCRTtJQUNFLGFBQUE7RUNyQko7RUR3QkU7SUFDRSxxQkFBQTtJQUNBLGFBQUE7RUN0Qko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29tcG9uZW50L2NvbW1lbnRzL2NvbXBvbmVudHMvY29tbWVudHMtbGlzdC9jb21tZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnQtYm9keS13cmFwcGVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmU2ZTY7XHJcblxyXG4gIC5jb21tZW50LWF2YXRhciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG4ud3JhcHBlci1jb21tZW50IHtcclxuICB3aWR0aDogNjUuNzklO1xyXG59XHJcblxyXG4ud3JhcHBlci1yZXBseSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbn1cclxuXHJcbi5hdXRob3ItbmFtZSB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeS1mb250KTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1kYXJrLWdyZXkpO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5jb21tZW50LWRhdGUge1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JleSk7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAzcHg7XHJcblxyXG4gIC5jb21tZW50LWRvdCB7XHJcbiAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDRweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWdyZXkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb21tZW50LWRhdGUtbW9udGgge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgIC5lZGl0ZWQge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGFzdC1kb3Qge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5jb21tZW50LWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAzMnB4IDAgOHB4IDYzcHg7XHJcblxyXG4gIC5jb21tZW50LWRhdGUtbGlrZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbW1lbnQtbWFpbi10ZXh0IHtcclxuICBtYXJnaW4tbGVmdDogNjJweDtcclxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAuY29tbWVudC10ZXh0IHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB9XHJcblxyXG4gIC5lZGl0LXRleHQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxNTdweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5jb21tZW50cy1lbGVtZW50cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAuYnRuLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbn1cclxuXHJcbi5jb21tZW50LWVkaXQtdGV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAuZWRpdC10ZXh0LWlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAwIDIwcHg7XHJcblxyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyZXkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1yZXBsaWVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnNhdmUtZWRpdCB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2F2ZS1lZGl0OmRpc2FibGVkIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmNhbmNlbC1lZGl0IHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAuYnRuLWltZyB7XHJcbiAgICBtaW4td2lkdGg6IDEycHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmN0YS1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmJ0bi10ZXh0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmV5KTtcclxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5jb21tZW50LWxpa2VzIHtcclxuICAubGlrZS1hbW91bnQge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JleSk7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbW1uZXQtZG90IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5idG4tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb21tZW50LWJvZHktd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLmNvbW1lbnRzLWVsZW1lbnRzIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICB9XHJcblxyXG4gIC5jb21tZW50LWRhdGUge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIH1cclxuXHJcbiAgLmNvbW1lbnQtZGV0YWlscyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC5jb21tZW50LWRhdGUtbGlrZXMge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFpbi13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG5cclxuICAgIC5lZGl0IHtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFpbi13cmFwcGVyOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gIC5jb21tZW50LWRldGFpbHMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAuY29tbWVudC1kYXRlLWxpa2VzIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbW1lbnQtZGF0ZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgIC5jb21tZW50LWRhdGUtbW9udGgge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbW1lbnQtZG90IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubGFzdC1kb3Qge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5jb21tZW50LWJvZHktd3JhcHBlciB7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmU2ZTY7XG59XG4uY29tbWVudC1ib2R5LXdyYXBwZXIgLmNvbW1lbnQtYXZhdGFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ud3JhcHBlci1jb21tZW50IHtcbiAgd2lkdGg6IDY1Ljc5JTtcbn1cblxuLndyYXBwZXItcmVwbHkge1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG59XG5cbi5hdXRob3ItbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1kYXJrLWdyZXkpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY29tbWVudC1kYXRlIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmV5KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG4uY29tbWVudC1kYXRlIC5jb21tZW50LWRvdCB7XG4gIG1hcmdpbjogMCA4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1ncmV5KTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbi5jb21tZW50LWRhdGUgLmNvbW1lbnQtZGF0ZS1tb250aCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jb21tZW50LWRhdGUgLmNvbW1lbnQtZGF0ZS1tb250aCAuZWRpdGVkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLmNvbW1lbnQtZGF0ZSAubGFzdC1kb3Qge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY29tbWVudC1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAzMnB4IDAgOHB4IDYzcHg7XG59XG4uY29tbWVudC1kZXRhaWxzIC5jb21tZW50LWRhdGUtbGlrZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29tbWVudC1tYWluLXRleHQge1xuICBtYXJnaW4tbGVmdDogNjJweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbW1lbnQtbWFpbi10ZXh0IC5jb21tZW50LXRleHQge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4uY29tbWVudC1tYWluLXRleHQgLmVkaXQtdGV4dC1idXR0b24ge1xuICB3aWR0aDogMTU3cHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmNvbW1lbnRzLWVsZW1lbnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1sZWZ0OiA1NXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY29tbWVudHMtZWxlbWVudHMgLmJ0bi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNvbW1lbnQtZWRpdC10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNvbW1lbnQtZWRpdC10ZXh0IC5lZGl0LXRleHQtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICByZXNpemU6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMCAwIDIwcHg7XG59XG4uY29tbWVudC1lZGl0LXRleHQgLmVkaXQtdGV4dC1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyZXkpO1xufVxuXG4uYnRuLXJlcGxpZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5zYXZlLWVkaXQge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zYXZlLWVkaXQ6ZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNhbmNlbC1lZGl0IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhbmNlbC1lZGl0IC5idG4taW1nIHtcbiAgbWluLXdpZHRoOiAxMnB4O1xuICBtYXgtaGVpZ2h0OiAxMnB4O1xufVxuXG4uY3RhLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ0bi10ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmV5KTtcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNvbW1lbnQtbGlrZXMgLmxpa2UtYW1vdW50IHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JleSk7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY29tbWVudC1saWtlcyAuY29tbW5ldC1kb3Qge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuYnRuLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbW1lbnQtYm9keS13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmNvbW1lbnRzLWVsZW1lbnRzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIH1cblxuICAuY29tbWVudC1kYXRlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIH1cblxuICAuY29tbWVudC1kZXRhaWxzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb21tZW50LWRldGFpbHMgLmNvbW1lbnQtZGF0ZS1saWtlcyB7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICB9XG5cbiAgLm1haW4td3JhcHBlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gIH1cbiAgLm1haW4td3JhcHBlciAuZWRpdCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cblxuICAubWFpbi13cmFwcGVyOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAuY29tbWVudC1kZXRhaWxzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb21tZW50LWRldGFpbHMgLmNvbW1lbnQtZGF0ZS1saWtlcyB7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICB9XG5cbiAgLmNvbW1lbnQtZGF0ZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuY29tbWVudC1kYXRlIC5jb21tZW50LWRhdGUtbW9udGgge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuY29tbWVudC1kYXRlIC5jb21tZW50LWRvdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY29tbWVudC1kYXRlIC5sYXN0LWRvdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMCA4cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-comments-list',
          templateUrl: './comments-list.component.html',
          styleUrls: ['./comments-list.component.scss']
        }]
      }], function () {
        return [{
          type: _services_comments_service__WEBPACK_IMPORTED_MODULE_4__["CommentsService"]
        }];
      }, {
        elementsList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dataType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        commentId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isLoggedIn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        userId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        changedList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/component/comments/components/delete-comment/delete-comment.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/main/component/comments/components/delete-comment/delete-comment.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: DeleteCommentComponent */

  /***/
  function srcAppMainComponentCommentsComponentsDeleteCommentDeleteCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteCommentComponent", function () {
      return DeleteCommentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_components_warning_pop_up_warning_pop_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/components/warning-pop-up/warning-pop-up.component */
    "./src/app/main/component/shared/components/warning-pop-up/warning-pop-up.component.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_comments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/comments.service */
    "./src/app/main/component/comments/services/comments.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var DeleteCommentComponent = /*#__PURE__*/function () {
      function DeleteCommentComponent(commentsService, dialog) {
        _classCallCheck(this, DeleteCommentComponent);

        this.commentsService = commentsService;
        this.dialog = dialog;
        this.elementsList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteIcon = 'assets/img/comments/delete.png';
      }

      _createClass(DeleteCommentComponent, [{
        key: "openPopup",
        value: function openPopup() {
          var _this18 = this;

          var dialogRef = this.dialog.open(_shared_components_warning_pop_up_warning_pop_up_component__WEBPACK_IMPORTED_MODULE_1__["WarningPopUpComponent"], {
            hasBackdrop: true,
            closeOnNavigation: true,
            disableClose: true,
            panelClass: 'popup-dialog-container',
            data: {
              popupTitle: "homepage.eco-news.comment.".concat(this.dataType, "-popup.title"),
              popupConfirm: "homepage.eco-news.comment.".concat(this.dataType, "-popup.confirm"),
              popupCancel: "homepage.eco-news.comment.".concat(this.dataType, "-popup.cancel")
            }
          });
          dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (confirm) {
            if (confirm) {
              _this18.commentsService.deleteComments(_this18.element.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (response) {
                if (response.status === 200) {
                  _this18.elementsList.emit();
                }
              });
            }
          });
        }
      }]);

      return DeleteCommentComponent;
    }();

    DeleteCommentComponent.ɵfac = function DeleteCommentComponent_Factory(t) {
      return new (t || DeleteCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_comments_service__WEBPACK_IMPORTED_MODULE_3__["CommentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    DeleteCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeleteCommentComponent,
      selectors: [["app-delete-comment"]],
      inputs: {
        element: "element",
        dataType: "dataType"
      },
      outputs: {
        elementsList: "elementsList"
      },
      decls: 6,
      vars: 4,
      consts: [[1, "d-flex"], [1, "cta-btn", "delete", 3, "click"], ["aria-hidden", "true", "alt", "edit icon", 1, "btn-img", 3, "src"], [1, "d-none", "d-sm-block", "btn-text"]],
      template: function DeleteCommentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteCommentComponent_Template_button_click_1_listener() {
            return ctx.openPopup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.deleteIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "homepage.eco-news.comment.btn.delete"), " ");
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
      styles: [".delete[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 40px;\n}\n\n.cta-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border: none;\n  background-color: #fff;\n  outline: none;\n}\n\n.btn-img[_ngcontent-%COMP%] {\n  min-width: 12px;\n  max-height: 14px;\n}\n\n.btn-text[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-family: var(--primary-font);\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--secondary-grey);\n  mix-blend-mode: normal;\n}\n\n@media screen and (max-width: 992px) {\n  .btn-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n\n@media screen and (max-width: 575px) {\n  .delete[_ngcontent-%COMP%] {\n    margin-right: 15px;\n  }\n}\n\n@media screen and (max-width: 380px) {\n  .cta-btn[_ngcontent-%COMP%] {\n    width: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvY29tbWVudHMvY29tcG9uZW50cy9kZWxldGUtY29tbWVudC9EOlxcU29mdFNlcnZlX0FjYWRlbXlcXEdyZWVuQ2l0eVxcZ2gtcGFnZXNcXEdyZWVuQ2l0eUNsaWVudC9zcmNcXGFwcFxcbWFpblxcY29tcG9uZW50XFxjb21tZW50c1xcY29tcG9uZW50c1xcZGVsZXRlLWNvbW1lbnRcXGRlbGV0ZS1jb21tZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbXBvbmVudC9jb21tZW50cy9jb21wb25lbnRzL2RlbGV0ZS1jb21tZW50L2RlbGV0ZS1jb21tZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsZUFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLGtCQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFO0lBQ0UsV0FBQTtFQ0RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbXBvbmVudC9jb21tZW50cy9jb21wb25lbnRzL2RlbGV0ZS1jb21tZW50L2RlbGV0ZS1jb21tZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbGV0ZSB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmN0YS1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1pbWcge1xyXG4gIG1pbi13aWR0aDogMTJweDtcclxuICBtYXgtaGVpZ2h0OiAxNHB4O1xyXG59XHJcblxyXG4uYnRuLXRleHQge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JleSk7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuYnRuLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAuZGVsZXRlIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcbiAgLmN0YS1idG4ge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgfVxyXG59XHJcbiIsIi5kZWxldGUge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmN0YS1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idG4taW1nIHtcbiAgbWluLXdpZHRoOiAxMnB4O1xuICBtYXgtaGVpZ2h0OiAxNHB4O1xufVxuXG4uYnRuLXRleHQge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmV5KTtcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmJ0bi10ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5kZWxldGUge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgLmN0YS1idG4ge1xuICAgIHdpZHRoOiAyNHB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteCommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-delete-comment',
          templateUrl: './delete-comment.component.html',
          styleUrls: ['./delete-comment.component.scss']
        }]
      }], function () {
        return [{
          type: _services_comments_service__WEBPACK_IMPORTED_MODULE_3__["CommentsService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, {
        element: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dataType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        elementsList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/component/comments/components/edit-comment/edit-comment.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/main/component/comments/components/edit-comment/edit-comment.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: EditCommentComponent */

  /***/
  function srcAppMainComponentCommentsComponentsEditCommentEditCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCommentComponent", function () {
      return EditCommentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var EditCommentComponent = /*#__PURE__*/function () {
      function EditCommentComponent() {
        _classCallCheck(this, EditCommentComponent);

        this.editIcon = 'assets/img/comments/edit.png';
        this.isEditing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(EditCommentComponent, [{
        key: "editComments",
        value: function editComments() {
          this.isEditing.emit();
        }
      }]);

      return EditCommentComponent;
    }();

    EditCommentComponent.ɵfac = function EditCommentComponent_Factory(t) {
      return new (t || EditCommentComponent)();
    };

    EditCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditCommentComponent,
      selectors: [["app-edit-comment"]],
      outputs: {
        isEditing: "isEditing"
      },
      decls: 6,
      vars: 4,
      consts: [[1, "d-flex", "main-wrapper"], [1, "cta-btn", "edit", 3, "click"], ["aria-hidden", "true", "alt", "edit icon", 1, "btn-img", 3, "src"], [1, "d-none", "d-sm-block", "btn-text"]],
      template: function EditCommentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCommentComponent_Template_button_click_1_listener() {
            return ctx.editComments();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.editIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "homepage.eco-news.comment.btn.edit"), " ");
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: [".edit[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 40px;\n}\n\n.cta-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border: none;\n  background-color: #fff;\n  outline: none;\n}\n\n.btn-img[_ngcontent-%COMP%] {\n  min-width: 16px;\n  max-height: 16px;\n}\n\n.btn-text[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-family: var(--primary-font);\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--secondary-grey);\n  mix-blend-mode: normal;\n}\n\n@media screen and (max-width: 992px) {\n  .btn-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n\n@media screen and (max-width: 575px) {\n  .main-wrapper[_ngcontent-%COMP%] {\n    margin-left: 35px;\n    margin-right: 15px;\n  }\n\n  .edit[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n}\n\n@media screen and (max-width: 380px) {\n  .cta-btn[_ngcontent-%COMP%] {\n    width: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvY29tbWVudHMvY29tcG9uZW50cy9lZGl0LWNvbW1lbnQvRDpcXFNvZnRTZXJ2ZV9BY2FkZW15XFxHcmVlbkNpdHlcXGdoLXBhZ2VzXFxHcmVlbkNpdHlDbGllbnQvc3JjXFxhcHBcXG1haW5cXGNvbXBvbmVudFxcY29tbWVudHNcXGNvbXBvbmVudHNcXGVkaXQtY29tbWVudFxcZWRpdC1jb21tZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbXBvbmVudC9jb21tZW50cy9jb21wb25lbnRzL2VkaXQtY29tbWVudC9lZGl0LWNvbW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxlQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFQ0FGOztFREdBO0lBQ0UsV0FBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRTtJQUNFLFdBQUE7RUNERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnQvY29tbWVudHMvY29tcG9uZW50cy9lZGl0LWNvbW1lbnQvZWRpdC1jb21tZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5jdGEtYnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4taW1nIHtcclxuICBtaW4td2lkdGg6IDE2cHg7XHJcbiAgbWF4LWhlaWdodDogMTZweDtcclxufVxyXG5cclxuLmJ0bi10ZXh0IHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyZXkpO1xyXG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLmJ0bi10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLm1haW4td3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICB9XHJcblxyXG4gIC5lZGl0IHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcclxuICAuY3RhLWJ0biB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICB9XHJcbn1cclxuIiwiLmVkaXQge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmN0YS1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idG4taW1nIHtcbiAgbWluLXdpZHRoOiAxNnB4O1xuICBtYXgtaGVpZ2h0OiAxNnB4O1xufVxuXG4uYnRuLXRleHQge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmV5KTtcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmJ0bi10ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5tYWluLXdyYXBwZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuXG4gIC5lZGl0IHtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgLmN0YS1idG4ge1xuICAgIHdpZHRoOiAyNHB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditCommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-comment',
          templateUrl: './edit-comment.component.html',
          styleUrls: ['./edit-comment.component.scss']
        }]
      }], null, {
        isEditing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/component/comments/components/like-comment/like-comment.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/main/component/comments/components/like-comment/like-comment.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: LikeCommentComponent */

  /***/
  function srcAppMainComponentCommentsComponentsLikeCommentLikeCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LikeCommentComponent", function () {
      return LikeCommentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_comments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/comments.service */
    "./src/app/main/component/comments/services/comments.service.ts");
    /* harmony import */


    var _service_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../service/socket/socket.service */
    "./src/app/main/service/socket/socket.service.ts");
    /* harmony import */


    var _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @global-service/localstorage/local-storage.service */
    "./src/app/main/service/localstorage/local-storage.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = ["like"];

    function LikeCommentComponent_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "homepage.eco-news.comment.btn.like"), " ");
      }
    }

    function LikeCommentComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "homepage.eco-news.comment.btn.liked"), " ");
      }
    }

    var LikeCommentComponent = /*#__PURE__*/function () {
      function LikeCommentComponent(commentsService, socketService, localStorageService) {
        _classCallCheck(this, LikeCommentComponent);

        this.commentsService = commentsService;
        this.socketService = socketService;
        this.localStorageService = localStorageService;
        this.likesCounter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.error = false;
        this.commentsImages = {
          like: 'assets/img/comments/like.png',
          liked: 'assets/img/comments/liked.png'
        };
      }

      _createClass(LikeCommentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.likeState = this.comment.currentUserLiked;
          this.setStartingElements(this.likeState);
          this.onConnectedtoSocket();
        }
      }, {
        key: "onConnectedtoSocket",
        value: function onConnectedtoSocket() {
          var _this19 = this;

          this.socketService.onMessage("/topic/".concat(this.comment.id, "/comment")).subscribe(function (msg) {
            _this19.changeLkeBtn(msg);

            _this19.likesCounter.emit(msg.amountLikes);
          });
        }
      }, {
        key: "setStartingElements",
        value: function setStartingElements(state) {
          var imgName = state ? 'liked' : 'like';
          this.like.nativeElement.srcset = this.commentsImages[imgName];
        }
      }, {
        key: "getUserId",
        value: function getUserId() {
          var _this20 = this;

          this.localStorageService.userIdBehaviourSubject.subscribe(function (id) {
            return _this20.userId = id;
          });
        }
      }, {
        key: "pressLike",
        value: function pressLike() {
          var _this21 = this;

          this.commentsService.postLike(this.comment.id).subscribe(function () {
            _this21.getUserId();

            _this21.socketService.send('/app/likeAndCount', {
              id: _this21.comment.id,
              amountLikes: _this21.likeState ? 0 : 1,
              userId: _this21.userId
            });
          });
        }
      }, {
        key: "changeLkeBtn",
        value: function changeLkeBtn(msg) {
          if (msg.liked) {
            this.likeState = true;
            this.like.nativeElement.srcset = this.commentsImages.liked;
          } else {
            this.likeState = false;
            this.like.nativeElement.srcset = this.commentsImages.like;
          }
        }
      }]);

      return LikeCommentComponent;
    }();

    LikeCommentComponent.ɵfac = function LikeCommentComponent_Factory(t) {
      return new (t || LikeCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_comments_service__WEBPACK_IMPORTED_MODULE_1__["CommentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]));
    };

    LikeCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LikeCommentComponent,
      selectors: [["app-like-comment"]],
      viewQuery: function LikeCommentComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.like = _t.first);
        }
      },
      inputs: {
        comment: "comment"
      },
      outputs: {
        likesCounter: "likesCounter"
      },
      decls: 7,
      vars: 3,
      consts: [[1, "d-flex", "main-wrapper"], [1, "cta-btn", "like", 3, "click"], ["alt", "like", "aria-hidden", "true", 1, "btn-img", 3, "src"], ["like", ""], ["class", "d-none d-sm-block btn-text", 4, "ngIf", "ngIfElse"], ["liked", ""], [1, "d-none", "d-sm-block", "btn-text"]],
      template: function LikeCommentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LikeCommentComponent_Template_button_click_1_listener() {
            return ctx.pressLike();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LikeCommentComponent_span_4_Template, 3, 3, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LikeCommentComponent_ng_template_5_Template, 3, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.commentsImages.like, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.likeState && !ctx.error)("ngIfElse", _r2);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
      styles: [".like[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 40px;\n  margin-right: 8px;\n}\n\n.visible[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.cta-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border: none;\n  background-color: #fff;\n  outline: none;\n}\n\n.btn-img[_ngcontent-%COMP%] {\n  min-width: 16px;\n  max-height: 16px;\n}\n\n.btn-text[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-family: var(--primary-font);\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--secondary-grey);\n  mix-blend-mode: normal;\n}\n\n@media screen and (max-width: 992px) {\n  .btn-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n\n@media screen and (max-width: 575px) {\n  .main-wrapper[_ngcontent-%COMP%] {\n    padding-left: 30px;\n  }\n}\n\n@media screen and (max-width: 380px) {\n  .cta-btn[_ngcontent-%COMP%] {\n    width: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvY29tbWVudHMvY29tcG9uZW50cy9saWtlLWNvbW1lbnQvRDpcXFNvZnRTZXJ2ZV9BY2FkZW15XFxHcmVlbkNpdHlcXGdoLXBhZ2VzXFxHcmVlbkNpdHlDbGllbnQvc3JjXFxhcHBcXG1haW5cXGNvbXBvbmVudFxcY29tbWVudHNcXGNvbXBvbmVudHNcXGxpa2UtY29tbWVudFxcbGlrZS1jb21tZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbXBvbmVudC9jb21tZW50cy9jb21wb25lbnRzL2xpa2UtY29tbWVudC9saWtlLWNvbW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsZUFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLGtCQUFBO0VDQUY7QUFDRjs7QURHQTtFQUNFO0lBQ0UsV0FBQTtFQ0RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbXBvbmVudC9jb21tZW50cy9jb21wb25lbnRzL2xpa2UtY29tbWVudC9saWtlLWNvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlrZSB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLnZpc2libGUge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmN0YS1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1pbWcge1xyXG4gIG1pbi13aWR0aDogMTZweDtcclxuICBtYXgtaGVpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4uYnRuLXRleHQge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JleSk7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuYnRuLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAubWFpbi13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcbiAgLmN0YS1idG4ge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgfVxyXG59XHJcbiIsIi5saWtlIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4udmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5jdGEtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYnRuLWltZyB7XG4gIG1pbi13aWR0aDogMTZweDtcbiAgbWF4LWhlaWdodDogMTZweDtcbn1cblxuLmJ0bi10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JleSk7XG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5idG4tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAubWFpbi13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XG4gIC5jdGEtYnRuIHtcbiAgICB3aWR0aDogMjRweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LikeCommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-like-comment',
          templateUrl: './like-comment.component.html',
          styleUrls: ['./like-comment.component.scss']
        }]
      }], function () {
        return [{
          type: _services_comments_service__WEBPACK_IMPORTED_MODULE_1__["CommentsService"]
        }, {
          type: _service_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]
        }, {
          type: _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
        }];
      }, {
        comment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        likesCounter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        like: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['like', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/component/comments/components/reply-comment/reply-comment.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/main/component/comments/components/reply-comment/reply-comment.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ReplyCommentComponent */

  /***/
  function srcAppMainComponentCommentsComponentsReplyCommentReplyCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReplyCommentComponent", function () {
      return ReplyCommentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var ReplyCommentComponent = function ReplyCommentComponent() {
      _classCallCheck(this, ReplyCommentComponent);

      this.replyImages = 'assets/img/comments/reply.png';
    };

    ReplyCommentComponent.ɵfac = function ReplyCommentComponent_Factory(t) {
      return new (t || ReplyCommentComponent)();
    };

    ReplyCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReplyCommentComponent,
      selectors: [["app-reply-comment"]],
      decls: 6,
      vars: 4,
      consts: [[1, "d-flex", "main-wrapper"], [1, "cta-btn", "reply"], ["aria-hidden", "true", "alt", "reply", 1, "btn-img", 3, "src"], [1, "d-none", "d-sm-block", "btn-text"]],
      template: function ReplyCommentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.replyImages, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "homepage.eco-news.comment.btn.reply"), " ");
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: [".reply[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 40px;\n}\n\n.cta-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border: none;\n  background-color: #fff;\n  outline: none;\n}\n\n.btn-img[_ngcontent-%COMP%] {\n  min-width: 16px;\n  max-height: 16px;\n}\n\n.btn-text[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-family: var(--primary-font);\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--secondary-grey);\n  mix-blend-mode: normal;\n}\n\n@media screen and (max-width: 992px) {\n  .btn-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n\n@media screen and (max-width: 575px) {\n  .main-wrapper[_ngcontent-%COMP%] {\n    margin-left: 5px;\n  }\n\n  .reply[_ngcontent-%COMP%] {\n    width: 15px;\n  }\n}\n\n@media screen and (max-width: 380px) {\n  .cta-btn[_ngcontent-%COMP%] {\n    width: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvY29tbWVudHMvY29tcG9uZW50cy9yZXBseS1jb21tZW50L0Q6XFxTb2Z0U2VydmVfQWNhZGVteVxcR3JlZW5DaXR5XFxnaC1wYWdlc1xcR3JlZW5DaXR5Q2xpZW50L3NyY1xcYXBwXFxtYWluXFxjb21wb25lbnRcXGNvbW1lbnRzXFxjb21wb25lbnRzXFxyZXBseS1jb21tZW50XFxyZXBseS1jb21tZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbXBvbmVudC9jb21tZW50cy9jb21wb25lbnRzL3JlcGx5LWNvbW1lbnQvcmVwbHktY29tbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGVBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0U7SUFDRSxnQkFBQTtFQ0FGOztFREdBO0lBQ0UsV0FBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRTtJQUNFLFdBQUE7RUNERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnQvY29tbWVudHMvY29tcG9uZW50cy9yZXBseS1jb21tZW50L3JlcGx5LWNvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwbHkge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5jdGEtYnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4taW1nIHtcclxuICBtaW4td2lkdGg6IDE2cHg7XHJcbiAgbWF4LWhlaWdodDogMTZweDtcclxufVxyXG5cclxuLmJ0bi10ZXh0IHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyZXkpO1xyXG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLmJ0bi10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLm1haW4td3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIH1cclxuXHJcbiAgLnJlcGx5IHtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcclxuICAuY3RhLWJ0biB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICB9XHJcbn1cclxuIiwiLnJlcGx5IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5jdGEtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYnRuLWltZyB7XG4gIG1pbi13aWR0aDogMTZweDtcbiAgbWF4LWhlaWdodDogMTZweDtcbn1cblxuLmJ0bi10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JleSk7XG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5idG4tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAubWFpbi13cmFwcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG5cbiAgLnJlcGx5IHtcbiAgICB3aWR0aDogMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgLmN0YS1idG4ge1xuICAgIHdpZHRoOiAyNHB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReplyCommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reply-comment',
          templateUrl: './reply-comment.component.html',
          styleUrls: ['./reply-comment.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/component/comments/components/view-replies/view-replies.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/main/component/comments/components/view-replies/view-replies.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ViewRepliesComponent */

  /***/
  function srcAppMainComponentCommentsComponentsViewRepliesViewRepliesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewRepliesComponent", function () {
      return ViewRepliesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function ViewRepliesComponent_button_0_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "homepage.eco-news.comment.replies.one-reply"));
      }
    }

    function ViewRepliesComponent_button_0_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "homepage.eco-news.comment.replies.more-then-two-replies"));
      }
    }

    function ViewRepliesComponent_button_0_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "homepage.eco-news.comment.replies.more-then-four-replies"));
      }
    }

    var _c0 = function _c0() {
      return [2, 3, 4];
    };

    function ViewRepliesComponent_button_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewRepliesComponent_button_0_span_7_Template, 3, 3, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewRepliesComponent_button_0_span_8_Template, 3, 3, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ViewRepliesComponent_button_0_span_9_Template, 3, 3, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx_r0.isShowReplies ? "homepage.eco-news.comment.hide" : "homepage.eco-news.comment.view"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.repliesCounter, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.repliesCounter);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0).includes(ctx_r0.repliesCounter) ? ctx_r0.repliesCounter : !ctx_r0.repliesCounter);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.isShowReplies ? ctx_r0.arrowUp : ctx_r0.arrowDown, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ViewRepliesComponent = function ViewRepliesComponent() {
      _classCallCheck(this, ViewRepliesComponent);

      this.arrowDown = 'assets/img/comments/arrow_down.png';
      this.arrowUp = 'assets/img/comments/arrow_up.png';
    };

    ViewRepliesComponent.ɵfac = function ViewRepliesComponent_Factory(t) {
      return new (t || ViewRepliesComponent)();
    };

    ViewRepliesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewRepliesComponent,
      selectors: [["app-view-replies"]],
      inputs: {
        repliesCounter: "repliesCounter",
        isShowReplies: "isShowReplies"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "cta-btn view", 4, "ngIf"], [1, "cta-btn", "view"], [1, "btn-text"], [1, "d-none", "d-sm-inline"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["alt", "arrow", 3, "src"]],
      template: function ViewRepliesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewRepliesComponent_button_0_Template, 11, 9, "button", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.repliesCounter >= 1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: [".cta-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  text-align: right;\n  border: none;\n  background-color: #fff;\n  padding: 0;\n  outline: none;\n}\n.cta-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  font-family: var(--primary-font);\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--secondary-grey);\n  mix-blend-mode: normal;\n  white-space: nowrap;\n}\n.view[_ngcontent-%COMP%] {\n  height: 40px;\n}\n@media screen and (max-width: 992px) {\n  .cta-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvY29tbWVudHMvY29tcG9uZW50cy92aWV3LXJlcGxpZXMvRDpcXFNvZnRTZXJ2ZV9BY2FkZW15XFxHcmVlbkNpdHlcXGdoLXBhZ2VzXFxHcmVlbkNpdHlDbGllbnQvc3JjXFxhcHBcXG1haW5cXGNvbXBvbmVudFxcY29tbWVudHNcXGNvbXBvbmVudHNcXHZpZXctcmVwbGllc1xcdmlldy1yZXBsaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbXBvbmVudC9jb21tZW50cy9jb21wb25lbnRzL3ZpZXctcmVwbGllcy92aWV3LXJlcGxpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FER0E7RUFDRSxZQUFBO0FDQUY7QURHQTtFQUVJO0lBQ0UsZUFBQTtFQ0RKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbXBvbmVudC9jb21tZW50cy9jb21wb25lbnRzL3ZpZXctcmVwbGllcy92aWV3LXJlcGxpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3RhLWJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAuYnRuLXRleHQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmV5KTtcclxuICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxufVxyXG5cclxuLnZpZXcge1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuY3RhLWJ0biB7XHJcbiAgICAuYnRuLXRleHQge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5jdGEtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5jdGEtYnRuIC5idG4tdGV4dCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmV5KTtcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnZpZXcge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jdGEtYnRuIC5idG4tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewRepliesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-view-replies',
          templateUrl: './view-replies.component.html',
          styleUrls: ['./view-replies.component.scss']
        }]
      }], null, {
        repliesCounter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isShowReplies: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/component/comments/models/comments-model.ts":
  /*!******************************************************************!*\
    !*** ./src/app/main/component/comments/models/comments-model.ts ***!
    \******************************************************************/

  /*! exports provided: dataTypes */

  /***/
  function srcAppMainComponentCommentsModelsCommentsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dataTypes", function () {
      return dataTypes;
    });

    var dataTypes;

    (function (dataTypes) {
      dataTypes["commentType"] = "comment";
      dataTypes["wrapperCommentType"] = "wrapper-comment";
      dataTypes["wrapperReplyType"] = "wrapper-reply";
    })(dataTypes || (dataTypes = {}));
    /***/

  },

  /***/
  "./src/app/main/component/comments/services/comments.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/main/component/comments/services/comments.service.ts ***!
    \**********************************************************************/

  /*! exports provided: CommentsService */

  /***/
  function srcAppMainComponentCommentsServicesCommentsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsService", function () {
      return CommentsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environment_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environment/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CommentsService = /*#__PURE__*/function () {
      function CommentsService(http) {
        _classCallCheck(this, CommentsService);

        this.http = http;
        this.backEnd = _environment_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendLink;
      }

      _createClass(CommentsService, [{
        key: "addComment",
        value: function addComment(form) {
          var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var body = {
            parentCommentId: id,
            text: form.value.content
          };
          return this.http.post("".concat(this.backEnd, "econews/comments/").concat(this.ecoNewsId), body);
        }
      }, {
        key: "getActiveCommentsByPage",
        value: function getActiveCommentsByPage(page, size) {
          return this.http.get("".concat(this.backEnd, "econews/comments/active?ecoNewsId=").concat(this.ecoNewsId, "&page=").concat(page, "&size=").concat(size));
        }
      }, {
        key: "getCommentsCount",
        value: function getCommentsCount(id) {
          return this.http.get("".concat(this.backEnd, "econews/comments/count/comments/").concat(id));
        }
      }, {
        key: "getActiveRepliesByPage",
        value: function getActiveRepliesByPage(id, page, size) {
          return this.http.get("".concat(this.backEnd, "econews/comments/replies/active/").concat(id, "?page=").concat(page, "&size=").concat(size));
        }
      }, {
        key: "deleteComments",
        value: function deleteComments(id) {
          return this.http["delete"]("".concat(this.backEnd, "econews/comments?id=").concat(id), {
            observe: 'response'
          });
        }
      }, {
        key: "getCommentLikes",
        value: function getCommentLikes(id) {
          return this.http.get("".concat(this.backEnd, "econews/comments/count/likes?id=").concat(id));
        }
      }, {
        key: "getRepliesAmount",
        value: function getRepliesAmount(id) {
          return this.http.get("".concat(this.backEnd, "econews/comments/count/replies/").concat(id));
        }
      }, {
        key: "postLike",
        value: function postLike(id) {
          return this.http.post("".concat(this.backEnd, "econews/comments/like?id=").concat(id), {});
        }
      }, {
        key: "editComment",
        value: function editComment(id, form) {
          var body = {
            parentCommentId: id,
            text: form.value
          };
          return this.http.patch("".concat(this.backEnd, "econews/comments?id=").concat(id, "&text=").concat(form.value), body);
        }
      }]);

      return CommentsService;
    }();

    CommentsService.ɵfac = function CommentsService_Factory(t) {
      return new (t || CommentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    CommentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CommentsService,
      factory: CommentsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/component/eco-news/components/create-edit-news/action.constants.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/main/component/eco-news/components/create-edit-news/action.constants.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ACTION_TOKEN, ACTION_CONFIG, TEXT_AREAS_HEIGHT */

  /***/
  function srcAppMainComponentEcoNewsComponentsCreateEditNewsActionConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACTION_TOKEN", function () {
      return ACTION_TOKEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACTION_CONFIG", function () {
      return ACTION_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TEXT_AREAS_HEIGHT", function () {
      return TEXT_AREAS_HEIGHT;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ACTION_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('action.config');
    var ACTION_CONFIG = {
      create: {
        title: 'create-news.title',
        btnCaption: 'create-news.publish-button'
      },
      edit: {
        title: 'create-news.edit-title',
        btnCaption: 'create-news.edit-button'
      }
    };
    var TEXT_AREAS_HEIGHT = {
      minTextAreaScrollHeight: 50,
      maxTextAreaScrollHeight: 128,
      minTextAreaHeight: '48px',
      maxTextAreaHeight: '128px'
    };
    /***/
  },

  /***/
  "./src/app/main/component/eco-news/components/create-edit-news/create-edit-news-form-builder.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/main/component/eco-news/components/create-edit-news/create-edit-news-form-builder.ts ***!
    \******************************************************************************************************/

  /*! exports provided: CreateEditNewsFormBuilder */

  /***/
  function srcAppMainComponentEcoNewsComponentsCreateEditNewsCreateEditNewsFormBuilderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateEditNewsFormBuilder", function () {
      return CreateEditNewsFormBuilder;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var CreateEditNewsFormBuilder = /*#__PURE__*/function () {
      function CreateEditNewsFormBuilder(fb) {
        _classCallCheck(this, CreateEditNewsFormBuilder);

        this.fb = fb;
      }

      _createClass(CreateEditNewsFormBuilder, [{
        key: "getSetupForm",
        value: function getSetupForm() {
          return this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(170), this.noWhitespaceValidator]],
            source: [''],
            content: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(63206)]],
            tags: this.fb.array([]),
            image: ['']
          });
        }
      }, {
        key: "getEditForm",
        value: function getEditForm(data) {
          return this.fb.group({
            title: [data.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(170), this.noWhitespaceValidator]],
            source: [data.source],
            content: [data.text || data.content, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(63206)]],
            tags: this.fb.array(data.tags),
            image: [data.imagePath]
          });
        }
      }, {
        key: "noWhitespaceValidator",
        value: function noWhitespaceValidator(control) {
          var isWhiteSpace = (control.value || '').trim().length === 0;
          var isValid = !isWhiteSpace;
          return isValid ? null : {
            whitespace: true
          };
        }
      }]);

      return CreateEditNewsFormBuilder;
    }();

    CreateEditNewsFormBuilder.ɵfac = function CreateEditNewsFormBuilder_Factory(t) {
      return new (t || CreateEditNewsFormBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    CreateEditNewsFormBuilder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CreateEditNewsFormBuilder,
      factory: CreateEditNewsFormBuilder.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateEditNewsFormBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/component/eco-news/components/create-edit-news/create-edit-news.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/main/component/eco-news/components/create-edit-news/create-edit-news.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: CreateEditNewsComponent */

  /***/
  function srcAppMainComponentEcoNewsComponentsCreateEditNewsCreateEditNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateEditNewsComponent", function () {
      return CreateEditNewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_eco_news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/eco-news.service */
    "./src/app/main/component/eco-news/services/eco-news.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _eco_news_service_create_eco_news_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @eco-news-service/create-eco-news.service */
    "./src/app/main/component/eco-news/services/create-eco-news.service.ts");
    /* harmony import */


    var _create_edit_news_form_builder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./create-edit-news-form-builder */
    "./src/app/main/component/eco-news/components/create-edit-news/create-edit-news-form-builder.ts");
    /* harmony import */


    var _action_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./action.constants */
    "./src/app/main/component/eco-news/components/create-edit-news/action.constants.ts");
    /* harmony import */


    var _global_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @global-errors/mat-snack-bar/mat-snack-bar.component */
    "./src/app/main/component/errors/mat-snack-bar/mat-snack-bar.component.ts");
    /* harmony import */


    var _shared_components_form_base_form_base_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @shared/components/form-base/form-base.component */
    "./src/app/main/component/shared/components/form-base/form-base.component.ts");
    /* harmony import */


    var _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @global-service/localstorage/local-storage.service */
    "./src/app/main/service/localstorage/local-storage.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _post_news_loader_post_news_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../post-news-loader/post-news-loader.component */
    "./src/app/main/component/eco-news/components/post-news-loader/post-news-loader.component.ts");
    /* harmony import */


    var _shared_components_drag_and_drop_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../shared/components/drag-and-drop/drag-and-drop.component */
    "./src/app/main/component/shared/components/drag-and-drop/drag-and-drop.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function CreateEditNewsComponent_app_post_news_loader_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-news-loader");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "filters-color": a0
      };
    };

    function CreateEditNewsComponent_div_2_div_8_button_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEditNewsComponent_div_2_div_8_button_18_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var filter_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r5.addFilters(filter_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var filter_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, filter_r4.isActive));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", filter_r4.name, " ");
      }
    }

    var _c1 = function _c1(a0) {
      return {
        warning: a0
      };
    };

    var _c2 = function _c2(a0) {
      return {
        "field-warning": a0
      };
    };

    var _c3 = function _c3(a0) {
      return [a0];
    };

    function CreateEditNewsComponent_div_2_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateEditNewsComponent_div_2_div_8_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CreateEditNewsComponent_div_2_div_8_Template_textarea_keyup_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.autoResize(false, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CreateEditNewsComponent_div_2_div_8_button_18_Template, 2, 4, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-drag-and-drop", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "textarea", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CreateEditNewsComponent_div_2_div_8_Template_textarea_keyup_42_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.autoResize(true, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEditNewsComponent_div_2_div_8_Template_button_click_63_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.cancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEditNewsComponent_div_2_div_8_Template_button_click_66_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.goToPreview();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 30, "create-news.news-title"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 32, "create-news.title-placeholder"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 34, "create-news.title-tooltip"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 36, "create-news.tags-title"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.filters);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](70, _c1, ctx_r2.isFilterValidation));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 38, "create-news.tags-tooltip"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 40, "create-news.source-title"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 42, "create-news.source-placeholder"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](72, _c2, !ctx_r2.isLinkOrEmpty));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](74, _c1, !ctx_r2.isLinkOrEmpty));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 44, "create-news.source-tooltip-1"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 46, "create-news.source-tooltip-2"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 48, "create-news.picture-title"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formData", ctx_r2.formData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 50, "create-news.content-title"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 52, "create-news.content-placeholder"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 54, "create-news.content-tooltip"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 56, "create-news.date"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", ctx_r2.day, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 58, "date.months." + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](76, _c3, ctx_r2.month)), " ", ctx_r2.year, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 60, "date.year"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 62, "create-news.author"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.author);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 64, "create-news.cancel-button"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 66, "create-news.preview-button"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.isFormInvalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 68, ctx_r2.attributes.btnCaption));
      }
    }

    function CreateEditNewsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateEditNewsComponent_div_2_div_8_Template, 72, 78, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx_r1.attributes.title));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "create-news.form-description"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form);
      }
    }

    var CreateEditNewsComponent = /*#__PURE__*/function (_shared_components_fo) {
      _inherits(CreateEditNewsComponent, _shared_components_fo);

      var _super2 = _createSuper(CreateEditNewsComponent);

      function CreateEditNewsComponent(router, dialog, injector, config) {
        var _this22;

        _classCallCheck(this, CreateEditNewsComponent);

        _this22 = _super2.call(this, router, dialog);
        _this22.router = router;
        _this22.dialog = dialog;
        _this22.injector = injector;
        _this22.config = config;
        _this22.isPosting = false;
        _this22.isArrayEmpty = true;
        _this22.isLinkOrEmpty = true;
        _this22.isFilterValidation = false;
        _this22.year = new Date().getFullYear();
        _this22.day = new Date().getDate();
        _this22.month = new Date().getMonth();
        _this22.author = localStorage.getItem('name');
        _this22.filters = [];
        _this22.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
        _this22.previousPath = '/news';
        _this22.popupConfig = {
          hasBackdrop: true,
          closeOnNavigation: true,
          disableClose: true,
          panelClass: 'popup-dialog-container',
          data: {
            popupTitle: 'homepage.eco-news.news-popup.title',
            popupSubtitle: 'homepage.eco-news.news-popup.subtitle',
            popupConfirm: 'homepage.eco-news.news-popup.confirm',
            popupCancel: 'homepage.eco-news.news-popup.cancel'
          }
        };
        _this22.createEditNewsFormBuilder = injector.get(_create_edit_news_form_builder__WEBPACK_IMPORTED_MODULE_7__["CreateEditNewsFormBuilder"]);
        _this22.createEcoNewsService = injector.get(_eco_news_service_create_eco_news_service__WEBPACK_IMPORTED_MODULE_6__["CreateEcoNewsService"]);
        _this22.ecoNewsService = injector.get(_services_eco_news_service__WEBPACK_IMPORTED_MODULE_4__["EcoNewsService"]);
        _this22.route = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]);
        _this22.localStorageService = injector.get(_global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_11__["LocalStorageService"]);
        _this22.snackBar = injector.get(_global_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarComponent"]);
        return _this22;
      }

      _createClass(CreateEditNewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getNewsIdFromQueryParams();
          this.initPageforCreateOrEdit();
          this.onSourceChange();
          this.setLocalizedTags();
        }
      }, {
        key: "filterArr",
        value: function filterArr(item, index) {
          return [].concat(_toConsumableArray(this.filters.slice(0, index)), [item], _toConsumableArray(this.filters.slice(index + 1)));
        }
      }, {
        key: "setInitialValues",
        value: function setInitialValues() {
          if (!this.createEcoNewsService.isBackToEditing) {
            this.initialValues = this.getFormValues();
          }

          this.isFormInvalid = !!!this.newsId;
          this.onValueChanges();
        }
      }, {
        key: "allowUserEscape",
        value: function allowUserEscape() {
          this.areChangesSaved = true;
        }
      }, {
        key: "getFormValues",
        value: function getFormValues() {
          return this.form.value;
        }
      }, {
        key: "onValueChanges",
        value: function onValueChanges() {
          var _this23 = this;

          this.formChangeSub = this.form.valueChanges.subscribe(function () {
            _this23.isFormInvalid = !_this23.form.valid || _this23.isArrayEmpty || !_this23.isLinkOrEmpty || _this23.isImageValid();
          });
        }
      }, {
        key: "setLocalizedTags",
        value: function setLocalizedTags() {
          var _this24 = this;

          this.localStorageService.languageBehaviourSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(function () {
            return _this24.getAllTags();
          });
        }
      }, {
        key: "getAllTags",
        value: function getAllTags() {
          var _this25 = this;

          var tags = this.localStorageService.getTagsOfNews('newsTags');

          if (tags) {
            this.filters = tags;
            return;
          }

          this.ecoNewsService.getAllPresentTags().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (tagsArray) {
            _this25.filters = tagsArray.map(function (tag) {
              return {
                name: tag.name,
                isActive: false
              };
            });
          });
        }
      }, {
        key: "initPageforCreateOrEdit",
        value: function initPageforCreateOrEdit() {
          this.textAreasHeight = _action_constants__WEBPACK_IMPORTED_MODULE_8__["TEXT_AREAS_HEIGHT"];

          if (this.createEcoNewsService.isBackToEditing) {
            if (this.createEcoNewsService.getNewsId()) {
              this.setDataForEdit();
            } else {
              this.setDataForCreate();
            }

            this.formData = this.createEcoNewsService.getFormData();
            this.newsId = this.createEcoNewsService.getNewsId();

            if (this.formData) {
              this.form = this.createEditNewsFormBuilder.getEditForm(this.formData.value);
              this.setActiveFilters(this.formData.value);
            }

            this.setInitialValues();
          } else {
            if (this.newsId) {
              this.fetchNewsItemToEdit();
              this.setDataForEdit();
            } else {
              this.form = this.createEditNewsFormBuilder.getSetupForm();
              this.setDataForCreate();
              this.setInitialValues();
            }
          }
        }
      }, {
        key: "setDataForEdit",
        value: function setDataForEdit() {
          this.attributes = this.config.edit;
          this.onSubmit = this.editNews;
        }
      }, {
        key: "setDataForCreate",
        value: function setDataForCreate() {
          this.attributes = this.config.create;
          this.onSubmit = this.createNews;
        }
      }, {
        key: "getNewsIdFromQueryParams",
        value: function getNewsIdFromQueryParams() {
          var _this26 = this;

          this.route.queryParams.subscribe(function (queryParams) {
            _this26.newsId = queryParams.id;
          });
        }
      }, {
        key: "autoResize",
        value: function autoResize(textarea, e) {
          var DEFAULT_SIZE_INPUT_TITTLE = '48px';
          var DEFAULT_SIZE_INPUT_CONTENT = '131px';
          e.target.style.height = textarea ? DEFAULT_SIZE_INPUT_CONTENT : DEFAULT_SIZE_INPUT_TITTLE;
          e.target.style.height = e.target.scrollHeight + 'px';
        }
      }, {
        key: "onSourceChange",
        value: function onSourceChange() {
          var _this27 = this;

          if (this.form) {
            this.form.get('source').valueChanges.subscribe(function (source) {
              _this27.isLinkOrEmpty = /^$|^https?:\/\//.test(source);
            });
          }
        }
      }, {
        key: "createNews",
        value: function createNews() {
          var _this28 = this;

          this.isPosting = true;
          this.createEcoNewsService.sendFormData(this.form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            _this28.snackBar.openSnackBar('Oops, something went wrong. Please reload page or try again later.');

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
          })).subscribe(function () {
            return _this28.escapeFromCreatePage();
          });
          this.localStorageService.removeTagsOfNews('newsTags');
        }
      }, {
        key: "escapeFromCreatePage",
        value: function escapeFromCreatePage() {
          this.isPosting = false;
          this.allowUserEscape();
          this.router.navigate(['/news']);
        }
      }, {
        key: "editNews",
        value: function editNews() {
          var _this29 = this;

          var dataToEdit = Object.assign(Object.assign({}, this.form.value), {
            id: this.newsId
          });
          this.createEcoNewsService.editNews(dataToEdit).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this29.snackBar.openSnackBar('Something went wrong. Please reload page or try again later.');

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
          })).subscribe(function () {
            return _this29.escapeFromCreatePage();
          });
        }
      }, {
        key: "fetchNewsItemToEdit",
        value: function fetchNewsItemToEdit() {
          var _this30 = this;

          this.newsItemSubscription = this.ecoNewsService.getEcoNewsById(this.newsId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(function (item) {
            _this30.form = _this30.createEditNewsFormBuilder.getEditForm(item);

            _this30.setActiveFilters(item);

            _this30.onSourceChange();

            _this30.setInitialValues();
          });
        }
      }, {
        key: "setActiveFilters",
        value: function setActiveFilters(itemToUpdate) {
          var _this31 = this;

          if (itemToUpdate.tags.length) {
            this.isArrayEmpty = false;
            itemToUpdate.tags.forEach(function (tag) {
              var index = _this31.filters.findIndex(function (filterObj) {
                return filterObj.name === "".concat(tag);
              });

              _this31.filters = _this31.filterArr({
                name: "".concat(tag),
                isActive: true
              }, index);
            });
          }
        }
      }, {
        key: "tags",
        value: function tags() {
          return this.form.controls.tags;
        }
      }, {
        key: "addFilters",
        value: function addFilters(filterObj) {
          if (!filterObj.isActive) {
            this.toggleIsActive(filterObj, true);
            this.isArrayEmpty = false;
            this.tags().push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](filterObj.name));
            this.filtersValidation(filterObj);
          } else {
            this.removeFilters(filterObj);
          }
        }
      }, {
        key: "removeFilters",
        value: function removeFilters(filterObj) {
          var tagsArray = this.form.value.tags;

          if (filterObj.isActive && tagsArray.length === 1) {
            this.isArrayEmpty = true;
          }

          var index = tagsArray.findIndex(function (tag) {
            return tag === filterObj.name;
          });
          this.tags().removeAt(index);
          this.toggleIsActive(filterObj, false);
        }
      }, {
        key: "filtersValidation",
        value: function filtersValidation(filterObj) {
          var _this32 = this;

          if (this.form.value.tags.length > 3) {
            this.isFilterValidation = true;
            setTimeout(function () {
              return _this32.isFilterValidation = false;
            }, 3000);
            this.tags().removeAt(3);
            this.toggleIsActive(filterObj, false);
          }
        }
      }, {
        key: "toggleIsActive",
        value: function toggleIsActive(filterObj, newValue) {
          var index = this.filters.findIndex(function (item) {
            return item.name === filterObj.name;
          });
          var changedtags = this.filterArr({
            name: filterObj.name,
            isActive: newValue
          }, index);
          this.filters = changedtags;
          this.localStorageService.setTagsOfNews('newsTags', changedtags);
        }
      }, {
        key: "goToPreview",
        value: function goToPreview() {
          this.allowUserEscape();
          this.createEcoNewsService.setForm(this.form);
          this.createEcoNewsService.setNewsId(this.newsId);
          this.router.navigate(['news', 'preview']);
        }
      }, {
        key: "isImageValid",
        value: function isImageValid() {
          return this.createEcoNewsService.isImageValid;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyed$.next(true);
          this.destroyed$.complete();

          if (this.formChangeSub) {
            this.formChangeSub.unsubscribe();
          }
        }
      }]);

      return CreateEditNewsComponent;
    }(_shared_components_form_base_form_base_component__WEBPACK_IMPORTED_MODULE_10__["FormBaseComponent"]);

    CreateEditNewsComponent.ɵfac = function CreateEditNewsComponent_Factory(t) {
      return new (t || CreateEditNewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_action_constants__WEBPACK_IMPORTED_MODULE_8__["ACTION_TOKEN"]));
    };

    CreateEditNewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateEditNewsComponent,
      selectors: [["app-create-edit-news"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf"], ["role", "main", "id", "main-content"], ["class", "box", 4, "ngIf"], [1, "box"], [1, "title"], ["class", "form-container", 4, "ngIf"], [1, "form-container"], ["enctype", "multipart/form-data", 3, "formGroup", "ngSubmit"], [1, "wrapper"], [1, "left-form-column"], [1, "item-block"], ["maxlength", "170", "formControlName", "title", 3, "placeholder", "keyup"], ["formArrayName", "tags", 1, "tags", "item-block"], ["type", "button", "class", "tag-news", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["type", "text", "formControlName", "source", 3, "placeholder", "ngClass"], [1, "right-form-column"], [3, "formData"], [1, "textarea-wrapper"], [1, "textarea-title"], ["minlength", "20", "name", "main-area", "formControlName", "content", 3, "placeholder", "keyup"], [1, "textarea-description"], [1, "date"], [1, "submit-buttons"], ["type", "button", 1, "cancel", 3, "click"], ["type", "button", 1, "preview", 3, "click"], ["type", "submit", 1, "submit", 3, "disabled"], ["type", "button", 1, "tag-news", 3, "ngClass", "click"]],
      template: function CreateEditNewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CreateEditNewsComponent_app_post_news_loader_0_Template, 1, 0, "app-post-news-loader", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateEditNewsComponent_div_2_Template, 9, 7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPosting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isPosting);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _post_news_loader_post_news_loader_component__WEBPACK_IMPORTED_MODULE_14__["PostNewsLoaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _shared_components_drag_and_drop_drag_and_drop_component__WEBPACK_IMPORTED_MODULE_15__["DragAndDropComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"]],
      styles: ["@charset \"UTF-8\";\n.box[_ngcontent-%COMP%] {\n  width: 1140px;\n  margin: 115px auto 0 auto;\n  padding: 0;\n}\n.textarea-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 14px;\n}\n.form-description[_ngcontent-%COMP%] {\n  margin-top: -30px;\n  margin-bottom: 50px;\n}\nh3[_ngcontent-%COMP%], p[_ngcontent-%COMP%], span[_ngcontent-%COMP%], b[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  color: var(--primary-dark-grey);\n  font-family: var(--primary-font);\n}\n.title[_ngcontent-%COMP%] {\n  margin-bottom: 51px;\n  width: 100%;\n}\n.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: var(--secondary-font);\n  font-weight: 500;\n  font-size: 48px;\n  line-height: 48px;\n  margin-bottom: 28px;\n}\n.form-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 652px;\n  color: var(--secondary-grey);\n}\n.left-form-column[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .textarea-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid red !important;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.left-form-column[_ngcontent-%COMP%] {\n  width: 652px;\n  display: flex;\n  flex-direction: column;\n  min-height: 380px;\n}\n.left-form-column[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .left-form-column[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 48px;\n  border-radius: 5px;\n  border: 1px solid var(--secondary-grey);\n  padding: 12px 16px;\n  resize: none;\n  overflow: hidden;\n}\n.left-form-column[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .left-form-column[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  display: block;\n  color: var(--secondary-grey);\n}\n.item-block[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.textarea-description[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--secondary-grey);\n}\n.tags[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: -4px;\n}\n.right-form-column[_ngcontent-%COMP%] {\n  width: 456px;\n  margin-left: 32px;\n}\n.right-form-column[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  border: 1px solid var(--secondary-grey);\n  background-color: #fff;\n  border-radius: 50px;\n  padding: 5px 15px 5px 15px;\n  outline: none;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  border: 1px solid var(--primary-green);\n  color: var(--primary-green);\n}\n.tags[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 8px 8px 0;\n  font-size: 14px;\n  color: var(--tertiary-grey);\n}\nform[_ngcontent-%COMP%]   .textarea-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 131px;\n  border-radius: 5px;\n  border: 1px solid var(--secondary-grey);\n  width: 100%;\n  padding: 12px 16px 28px 16px;\n  overflow: hidden;\n}\n.textarea-wrapper[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.date[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 500px;\n  margin-top: 32px;\n}\n.date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-left: 32px;\n}\n.date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 18px;\n}\n.date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--secondary-grey);\n  font-size: 16px;\n}\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], textarea.ng-invalid.ng-dirty[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\n  color: red;\n}\n.submit-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 26px;\n}\n.submit-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  border: 1px solid var(--primary-green);\n  border-radius: 3px;\n  background-color: #fff;\n  width: 154px;\n  height: 48px;\n  color: var(--primary-green);\n  font-weight: bold;\n}\n.submit-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  background-color: var(--primary-green);\n  color: #fff;\n  font-weight: bold;\n}\n.submit-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child:disabled {\n  background-color: var(--primary-grey);\n  border: 1px solid var(--primary-grey);\n}\n.tags[_ngcontent-%COMP%]   .filters-color[_ngcontent-%COMP%] {\n  background-color: var(--primary-green);\n  color: #fff;\n  border: none;\n}\n.filters-color[_ngcontent-%COMP%]::after {\n  content: \"  \u2716\";\n  font-size: 12px;\n}\n.filters-color[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  border: none;\n}\n.warning[_ngcontent-%COMP%] {\n  color: red !important;\n}\n.left-form-column[_ngcontent-%COMP%]   .field-warning[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n@media screen and (max-width: 1439px) {\n  .box[_ngcontent-%COMP%] {\n    width: 960px;\n  }\n\n  .left-form-column[_ngcontent-%COMP%] {\n    width: 547px;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .box[_ngcontent-%COMP%] {\n    width: 740px;\n  }\n\n  .wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .left-form-column[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .right-form-column[_ngcontent-%COMP%] {\n    margin: 32px 0 0 0;\n    width: 100%;\n  }\n}\n@media screen and (max-width: 767px) {\n  .box[_ngcontent-%COMP%] {\n    width: 548px;\n  }\n\n  .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 32px;\n  }\n}\n@media screen and (max-width: 575px) {\n  .box[_ngcontent-%COMP%] {\n    width: 288px;\n  }\n\n  .item-block[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .date[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n    margin: 0;\n  }\n\n  .submit-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-top: 43px;\n  }\n  .submit-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 0 0 24px 0;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvZWNvLW5ld3MvY29tcG9uZW50cy9jcmVhdGUtZWRpdC1uZXdzL2NyZWF0ZS1lZGl0LW5ld3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vY29tcG9uZW50L2Vjby1uZXdzL2NvbXBvbmVudHMvY3JlYXRlLWVkaXQtbmV3cy9EOlxcU29mdFNlcnZlX0FjYWRlbXlcXEdyZWVuQ2l0eVxcZ2gtcGFnZXNcXEdyZWVuQ2l0eUNsaWVudC9zcmNcXGFwcFxcbWFpblxcY29tcG9uZW50XFxlY28tbmV3c1xcY29tcG9uZW50c1xcY3JlYXRlLWVkaXQtbmV3c1xcY3JlYXRlLWVkaXQtbmV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FERUY7QUNDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBREVGO0FDQ0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FERUY7QUNDQTs7Ozs7O0VBTUUsK0JBQUE7RUFDQSxnQ0FBQTtBREVGO0FDQ0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QURFRjtBQ0FFO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FERUo7QUNFQTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7QURDRjtBQ0VBOztFQUVFLGVBQUE7QURDRjtBQ0VBOztFQUVFLGdDQUFBO0FEQ0Y7QUNFQTtFQUNFLGVBQUE7QURDRjtBQ0VBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBRENGO0FDRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QURDRjtBQ0VBOztFQUVFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QURDRjtBQ0VBOztFQUVFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QURDRjtBQ0VBO0VBQ0UsbUJBQUE7QURDRjtBQ0VBO0VBQ0UsU0FBQTtFQUNBLDRCQUFBO0FEQ0Y7QUNFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRENGO0FDRUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QURDRjtBQ0VBO0VBQ0UsZUFBQTtBRENGO0FDRUE7RUFDRSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtBRENGO0FDRUE7RUFDRSxzQ0FBQTtFQUNBLDJCQUFBO0FEQ0Y7QUNFQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FEQ0Y7QUNFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QURDRjtBQ0VBO0VBQ0UsZ0JBQUE7QURDRjtBQ0VBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEQ0Y7QUNFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBRENGO0FDRUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRENGO0FDRUE7RUFDRSxpQkFBQTtBRENGO0FDRUE7RUFDRSxlQUFBO0FEQ0Y7QUNFQTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtBRENGO0FDRUE7O0VBRUUsVUFBQTtBRENGO0FDRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBRENGO0FDRUE7RUFDRSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBRENGO0FDRUE7RUFDRSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBRENGO0FDRUE7RUFDRSxxQ0FBQTtFQUNBLHFDQUFBO0FEQ0Y7QUNFQTtFQUNFLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURDRjtBQ0VBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QURDRjtBQ0VBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QURDRjtBQ0VBO0VBQ0UscUJBQUE7QURDRjtBQ0VBO0VBQ0UscUJBQUE7QURDRjtBQ0VBO0VBQ0U7SUFDRSxZQUFBO0VEQ0Y7O0VDRUE7SUFDRSxZQUFBO0VEQ0Y7QUFDRjtBQ0VBO0VBQ0U7SUFDRSxZQUFBO0VEQUY7O0VDR0E7SUFDRSxzQkFBQTtFREFGOztFQ0dBO0lBQ0UsV0FBQTtFREFGOztFQ0dBO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0VEQUY7QUFDRjtBQ0dBO0VBQ0U7SUFDRSxZQUFBO0VEREY7O0VDS0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RURGSjtBQUNGO0FDTUE7RUFDRTtJQUNFLFlBQUE7RURKRjs7RUNPQTtJQUNFLGVBQUE7RURKRjs7RUNPQTtJQUNFLHNCQUFBO0VESkY7RUNNRTtJQUNFLFNBQUE7RURKSjs7RUNRQTtJQUNFLHNCQUFBO0lBQ0EsZ0JBQUE7RURMRjtFQ09FO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0VETEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29tcG9uZW50L2Vjby1uZXdzL2NvbXBvbmVudHMvY3JlYXRlLWVkaXQtbmV3cy9jcmVhdGUtZWRpdC1uZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmJveCB7XG4gIHdpZHRoOiAxMTQwcHg7XG4gIG1hcmdpbjogMTE1cHggYXV0byAwIGF1dG87XG4gIHBhZGRpbmc6IDA7XG59XG5cbi50ZXh0YXJlYS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5mb3JtLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbmgzLFxucCxcbnNwYW4sXG5iLFxuaDIsXG5idXR0b24ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrLWdyZXkpO1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogNTFweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGl0bGUgaDIge1xuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuXG4uZm9ybS1kZXNjcmlwdGlvbiBwIHtcbiAgbWF4LXdpZHRoOiA2NTJweDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmV5KTtcbn1cblxuLmxlZnQtZm9ybS1jb2x1bW4gc3Bhbixcbi50ZXh0YXJlYS1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLFxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ubGVmdC1mb3JtLWNvbHVtbiB7XG4gIHdpZHRoOiA2NTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMzgwcHg7XG59XG5cbi5sZWZ0LWZvcm0tY29sdW1uIGlucHV0LFxuLmxlZnQtZm9ybS1jb2x1bW4gdGV4dGFyZWEge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWdyZXkpO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHJlc2l6ZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxlZnQtZm9ybS1jb2x1bW4gcCxcbi5sZWZ0LWZvcm0tY29sdW1uIHNwYW4ge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyZXkpO1xufVxuXG4uaXRlbS1ibG9jayB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG5cbi50ZXh0YXJlYS1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmV5KTtcbn1cblxuLnRhZ3MgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogLTRweDtcbn1cblxuLnJpZ2h0LWZvcm0tY29sdW1uIHtcbiAgd2lkdGg6IDQ1NnB4O1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cblxuLnJpZ2h0LWZvcm0tY29sdW1uIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWdyZXkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiA1cHggMTVweCA1cHggMTVweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmVlbik7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcbn1cblxuLnRhZ3MgYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDhweCA4cHggMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tdGVydGlhcnktZ3JleSk7XG59XG5cbmZvcm0gLnRleHRhcmVhLXdyYXBwZXIgdGV4dGFyZWEge1xuICBoZWlnaHQ6IDEzMXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1ncmV5KTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMTZweCAyOHB4IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50ZXh0YXJlYS13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuZm9ybSBsYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5kYXRlIHA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG4uZGF0ZSBwIHNwYW46Zmlyc3QtY2hpbGQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5kYXRlIHAgc3BhbjpsYXN0LWNoaWxkIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmV5KTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQgKyBzcGFuLFxudGV4dGFyZWEubmctaW52YWxpZC5uZy1kaXJ0eSArIHAge1xuICBjb2xvcjogcmVkO1xufVxuXG4uc3VibWl0LWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiAyNnB4O1xufVxuXG4uc3VibWl0LWJ1dHRvbnMgYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxNTRweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3VibWl0LWJ1dHRvbnMgYnV0dG9uOmxhc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3VibWl0LWJ1dHRvbnMgYnV0dG9uOmxhc3QtY2hpbGQ6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZXkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZXkpO1xufVxuXG4udGFncyAuZmlsdGVycy1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZmlsdGVycy1jb2xvcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiAg4pyWXCI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZpbHRlcnMtY29sb3I6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ud2FybmluZyB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuLmxlZnQtZm9ybS1jb2x1bW4gLmZpZWxkLXdhcm5pbmcge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MzlweCkge1xuICAuYm94IHtcbiAgICB3aWR0aDogOTYwcHg7XG4gIH1cblxuICAubGVmdC1mb3JtLWNvbHVtbiB7XG4gICAgd2lkdGg6IDU0N3B4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLmJveCB7XG4gICAgd2lkdGg6IDc0MHB4O1xuICB9XG5cbiAgLndyYXBwZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAubGVmdC1mb3JtLWNvbHVtbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucmlnaHQtZm9ybS1jb2x1bW4ge1xuICAgIG1hcmdpbjogMzJweCAwIDAgMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmJveCB7XG4gICAgd2lkdGg6IDU0OHB4O1xuICB9XG5cbiAgLnRpdGxlIGgyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5ib3gge1xuICAgIHdpZHRoOiAyODhweDtcbiAgfVxuXG4gIC5pdGVtLWJsb2NrIHRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAuZGF0ZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuZGF0ZSBwOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5zdWJtaXQtYnV0dG9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiA0M3B4O1xuICB9XG4gIC5zdWJtaXQtYnV0dG9ucyBidXR0b24ge1xuICAgIG1hcmdpbjogMCAwIDI0cHggMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSIsIi5ib3gge1xyXG4gIHdpZHRoOiAxMTQwcHg7XHJcbiAgbWFyZ2luOiAxMTVweCBhdXRvIDAgYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udGV4dGFyZWEtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMTRweDtcclxufVxyXG5cclxuLmZvcm0tZGVzY3JpcHRpb24ge1xyXG4gIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbmgzLFxyXG5wLFxyXG5zcGFuLFxyXG5iLFxyXG5oMixcclxuYnV0dG9uIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrLWdyZXkpO1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDUxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZGVzY3JpcHRpb24gcCB7XHJcbiAgbWF4LXdpZHRoOiA2NTJweDtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyZXkpO1xyXG59XHJcblxyXG4ubGVmdC1mb3JtLWNvbHVtbiBzcGFuLFxyXG4udGV4dGFyZWEtZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLFxyXG50ZXh0YXJlYS5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5sZWZ0LWZvcm0tY29sdW1uIHtcclxuICB3aWR0aDogNjUycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6IDM4MHB4O1xyXG59XHJcblxyXG4ubGVmdC1mb3JtLWNvbHVtbiBpbnB1dCxcclxuLmxlZnQtZm9ybS1jb2x1bW4gdGV4dGFyZWEge1xyXG4gIGhlaWdodDogNDhweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWdyZXkpO1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmxlZnQtZm9ybS1jb2x1bW4gcCxcclxuLmxlZnQtZm9ybS1jb2x1bW4gc3BhbiB7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JleSk7XHJcbn1cclxuXHJcbi5pdGVtLWJsb2NrIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG59XHJcblxyXG4udGV4dGFyZWEtZGVzY3JpcHRpb24ge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyZXkpO1xyXG59XHJcblxyXG4udGFncyBwIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogLTRweDtcclxufVxyXG5cclxuLnJpZ2h0LWZvcm0tY29sdW1uIHtcclxuICB3aWR0aDogNDU2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbn1cclxuXHJcbi5yaWdodC1mb3JtLWNvbHVtbiBzcGFuIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1ncmV5KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4IDE1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XHJcbn1cclxuXHJcbi50YWdzIGJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwIDhweCA4cHggMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5LWdyZXkpO1xyXG59XHJcblxyXG5mb3JtIC50ZXh0YXJlYS13cmFwcGVyIHRleHRhcmVhIHtcclxuICBoZWlnaHQ6IDEzMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktZ3JleSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4IDI4cHggMTZweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGV4dGFyZWEtd3JhcHBlciB7XHJcbiAgbWFyZ2luLXRvcDogMzJweDtcclxufVxyXG5cclxuZm9ybSBsYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzJweDtcclxufVxyXG5cclxuLmRhdGUgcDpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tbGVmdDogMzJweDtcclxufVxyXG5cclxuLmRhdGUgcCBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5kYXRlIHAgc3BhbjpsYXN0LWNoaWxkIHtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyZXkpO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkICsgc3BhbixcclxudGV4dGFyZWEubmctaW52YWxpZC5uZy1kaXJ0eSArIHAge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi10b3A6IDI2cHg7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9ucyBidXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAxNTRweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvbnMgYnV0dG9uOmxhc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvbnMgYnV0dG9uOmxhc3QtY2hpbGQ6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZ3JleSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmV5KTtcclxufVxyXG5cclxuLnRhZ3MgLmZpbHRlcnMtY29sb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmZpbHRlcnMtY29sb3I6OmFmdGVyIHtcclxuICBjb250ZW50OiAnICBcXDI3MTYnO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmZpbHRlcnMtY29sb3I6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLndhcm5pbmcge1xyXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxlZnQtZm9ybS1jb2x1bW4gLmZpZWxkLXdhcm5pbmcge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQzOXB4KSB7XHJcbiAgLmJveCB7XHJcbiAgICB3aWR0aDogOTYwcHg7XHJcbiAgfVxyXG5cclxuICAubGVmdC1mb3JtLWNvbHVtbiB7XHJcbiAgICB3aWR0aDogNTQ3cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcclxuICAuYm94IHtcclxuICAgIHdpZHRoOiA3NDBweDtcclxuICB9XHJcblxyXG4gIC53cmFwcGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAubGVmdC1mb3JtLWNvbHVtbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5yaWdodC1mb3JtLWNvbHVtbiB7XHJcbiAgICBtYXJnaW46IDMycHggMCAwIDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmJveCB7XHJcbiAgICB3aWR0aDogNTQ4cHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAuYm94IHtcclxuICAgIHdpZHRoOiAyODhweDtcclxuICB9XHJcblxyXG4gIC5pdGVtLWJsb2NrIHRleHRhcmVhIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC5kYXRlIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgcDpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN1Ym1pdC1idXR0b25zIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tdG9wOiA0M3B4O1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDI0cHggMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateEditNewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create-edit-news',
          templateUrl: './create-edit-news.component.html',
          styleUrls: ['./create-edit-news.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_action_constants__WEBPACK_IMPORTED_MODULE_8__["ACTION_TOKEN"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/component/eco-news/components/eco-news-detail/eco-news-detail.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/main/component/eco-news/components/eco-news-detail/eco-news-detail.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: EcoNewsDetailComponent */

  /***/
  function srcAppMainComponentEcoNewsComponentsEcoNewsDetailEcoNewsDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EcoNewsDetailComponent", function () {
      return EcoNewsDetailComponent;
    });
    /* harmony import */


    var _image_pathes_single_news_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../../image-pathes/single-news-images */
    "./src/app/main/image-pathes/single-news-images.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _eco_news_service_eco_news_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @eco-news-service/eco-news.service */
    "./src/app/main/component/eco-news/services/eco-news.service.ts");
    /* harmony import */


    var _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @global-service/localstorage/local-storage.service */
    "./src/app/main/service/localstorage/local-storage.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _eco_news_widget_eco_news_widget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./eco-news-widget/eco-news-widget.component */
    "./src/app/main/component/eco-news/components/eco-news-detail/eco-news-widget/eco-news-widget.component.ts");
    /* harmony import */


    var _comments_components_comments_container_comments_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../comments/components/comments-container/comments-container.component */
    "./src/app/main/component/comments/components/comments-container/comments-container.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _pipe_date_localisation_pipe_date_localisation_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @pipe/date-localisation-pipe/date-localisation.pipe */
    "./src/app/main/pipe/date-localisation-pipe/date-localisation.pipe.ts");

    function EcoNewsDetailComponent_div_1_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "eco-news-single-view.edit-news-button"), " ");
      }
    }

    function EcoNewsDetailComponent_div_1_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tag_r6, " ");
      }
    }

    function EcoNewsDetailComponent_div_1_img_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 38);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.likesType.like, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function EcoNewsDetailComponent_div_1_img_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EcoNewsDetailComponent_div_1_img_29_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r7.onLikeNews();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r4.isLiked ? ctx_r4.likesType.liked : ctx_r4.likesType.like, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function EcoNewsDetailComponent_div_1_div_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "eco-news-single-view.news-source"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r5.newsItem == null ? null : ctx_r5.newsItem.source, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.newsItem == null ? null : ctx_r5.newsItem.source, " ");
      }
    }

    var _c0 = function _c0() {
      return ["/news"];
    };

    var _c1 = function _c1() {
      return ["/news/create-news"];
    };

    var _c2 = function _c2(a0) {
      return {
        id: a0
      };
    };

    function EcoNewsDetailComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, EcoNewsDetailComponent_div_1_div_11_Template, 3, 3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, EcoNewsDetailComponent_div_1_div_13_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "dateLocalisation");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, EcoNewsDetailComponent_div_1_img_28_Template, 1, 1, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, EcoNewsDetailComponent_div_1_img_29_Template, 1, 1, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EcoNewsDetailComponent_div_1_Template_a_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r9.onSocialShareLinkClick("twitter");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EcoNewsDetailComponent_div_1_Template_a_click_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r11.onSocialShareLinkClick("linkedin");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EcoNewsDetailComponent_div_1_Template_a_click_39_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r12.onSocialShareLinkClick("fb");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, EcoNewsDetailComponent_div_1_div_44_Template, 6, 5, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "app-eco-news-widget");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "app-comments-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.images.arrowLeft, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 21, "eco-news-single-view.back-button"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](29, _c2, ctx_r0.newsItem.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.newsItem.author.id === ctx_r0.userId);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.newsItem.tags);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.newsItem.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 23, ctx_r0.newsItem.creationDate));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.images.ellipse, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 25, "eco-news-single-view.author"), " ", ctx_r0.newsItem.author.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.userId);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.userId);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.newsItem.likes);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.checkNewsImage(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.images.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.images.linkedIn, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.images.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.newsItem.text, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.newsItem == null ? null : ctx_r0.newsItem.text);
      }
    }

    var EcoNewsDetailComponent = /*#__PURE__*/function () {
      function EcoNewsDetailComponent(route, ecoNewsService, localStorageService) {
        _classCallCheck(this, EcoNewsDetailComponent);

        this.route = route;
        this.ecoNewsService = ecoNewsService;
        this.localStorageService = localStorageService;
        this.images = _image_pathes_single_news_images__WEBPACK_IMPORTED_MODULE_0__["singleNewsImages"];
        this.likesType = {
          like: 'assets/img/comments/like.png',
          liked: 'assets/img/comments/liked.png'
        };
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(EcoNewsDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.canUserEditNews();
          this.setNewsId();
          this.setNewsIdSubscription();
          this.getIsLiked();
        }
      }, {
        key: "setNewsItem",
        value: function setNewsItem(item) {
          var nestedNewsItem = {
            authorId: item.author.id,
            authorName: item.author.name
          };
          this.newsItem = Object.assign(Object.assign({}, item), nestedNewsItem);
        }
      }, {
        key: "checkNewsImage",
        value: function checkNewsImage() {
          this.newsImage = this.newsItem.imagePath && this.newsItem.imagePath !== ' ' ? this.newsItem.imagePath : this.images.largeImage;
          return this.newsImage;
        }
      }, {
        key: "canUserEditNews",
        value: function canUserEditNews() {
          var _this33 = this;

          this.localStorageService.userIdBehaviourSubject.subscribe(function (id) {
            return _this33.userId = id;
          });
        }
      }, {
        key: "onSocialShareLinkClick",
        value: function onSocialShareLinkClick(type) {
          var data = this.shareLinks();
          window.open(data[type](), '_blank');
        }
      }, {
        key: "onLikeNews",
        value: function onLikeNews() {
          if (this.isLiked) {
            this.isLiked = false;
            this.newsItem.likes = this.newsItem.likes - 1;
            this.postToggleLike();
          } else {
            this.isLiked = true;
            this.newsItem.likes = this.newsItem.likes + 1;
            this.postToggleLike();
          }
        }
      }, {
        key: "postToggleLike",
        value: function postToggleLike() {
          this.ecoNewsService.postToggleLike(this.newsId);
        }
      }, {
        key: "shareLinks",
        value: function shareLinks() {
          var _this34 = this;

          var currentPage = window.location.href;
          return {
            fb: function fb() {
              return "https://www.facebook.com/sharer/sharer.php?u=".concat(currentPage);
            },
            linkedin: function linkedin() {
              return "https://www.linkedin.com/sharing/share-offsite/?url=".concat(currentPage);
            },
            twitter: function twitter() {
              return "https://twitter.com/share?url=".concat(currentPage, "&text=").concat(_this34.newsItem.title, "&hashtags=").concat(_this34.newsItem.tags.join(','));
            }
          };
        }
      }, {
        key: "setNewsId",
        value: function setNewsId() {
          this.newsId = this.route.snapshot.params.id;
        }
      }, {
        key: "setNewsIdSubscription",
        value: function setNewsIdSubscription() {
          var _this35 = this;

          this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy)).subscribe(function (params) {
            _this35.newsId = +params.get('id');

            _this35.fetchNewsItem();
          });
        }
      }, {
        key: "fetchNewsItem",
        value: function fetchNewsItem() {
          var _this36 = this;

          var id = this.newsId.toString();
          this.ecoNewsService.getEcoNewsById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy)).subscribe(function (item) {
            return _this36.setNewsItem(item);
          });
        }
      }, {
        key: "getIsLiked",
        value: function getIsLiked() {
          var _this37 = this;

          this.ecoNewsService.getIsLikedByUser(this.newsId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (val) {
            _this37.isLiked = val;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy.next();
          this.destroy.unsubscribe();
        }
      }]);

      return EcoNewsDetailComponent;
    }();

    EcoNewsDetailComponent.ɵfac = function EcoNewsDetailComponent_Factory(t) {
      return new (t || EcoNewsDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_eco_news_service_eco_news_service__WEBPACK_IMPORTED_MODULE_5__["EcoNewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]));
    };

    EcoNewsDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EcoNewsDetailComponent,
      selectors: [["app-eco-news-detail"]],
      decls: 2,
      vars: 1,
      consts: [["role", "main", "id", "main-content"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "top-elements"], [1, "back-button"], [1, "button-link", 3, "routerLink"], [1, "button-content"], [1, "button-arrow"], ["aria-hidden", "true", "alt", "arrow", 1, "button-arrow-img", 3, "src"], [1, "button-text"], [3, "routerLink", "queryParams"], ["class", "edit-news", 4, "ngIf"], [1, "tags"], ["class", "tags-item", 4, "ngFor", "ngForOf"], [1, "news-content"], [1, "news-title-container"], [1, "news-title", "word-wrap"], [1, "news-info"], [1, "news-info-date"], [1, "news-info-dot"], ["alt", "dot", 3, "src"], [1, "news-info-author"], [1, "like_wr"], ["class", "news_like disable", "alt", "like", 3, "src", 4, "ngIf"], ["class", "news_like", "alt", "like", 3, "src", "click", 4, "ngIf"], [1, "numerosity_likes"], ["alt", "news-image", 1, "news-image-img", 3, "src"], [1, "news-text-container"], [1, "news-links-images"], [3, "click"], ["alt", "twitter", 1, "news-links-img", 3, "src"], ["alt", "linkedin", 1, "news-links-img", 3, "src"], ["alt", "facebook", 1, "news-links-img", "last-img", 3, "src"], [1, "news-text"], [1, "news-text-content", "word-wrap"], ["class", "source-field", 4, "ngIf"], [1, "edit-news"], [1, "tags-item"], ["alt", "like", 1, "news_like", "disable", 3, "src"], ["alt", "like", 1, "news_like", 3, "src", "click"], [1, "source-field"], [1, "source-title"], [1, "source-text", "word-wrap", 3, "href"]],
      template: function EcoNewsDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EcoNewsDetailComponent_div_1_Template, 47, 31, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.newsItem);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _eco_news_widget_eco_news_widget_component__WEBPACK_IMPORTED_MODULE_8__["EcoNewsWidgetComponent"], _comments_components_comments_container_comments_container_component__WEBPACK_IMPORTED_MODULE_9__["CommentsContainerComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _pipe_date_localisation_pipe_date_localisation_pipe__WEBPACK_IMPORTED_MODULE_11__["DateLocalisationPipe"]],
      styles: [".word-wrap[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.top-elements[_ngcontent-%COMP%], .button-content[_ngcontent-%COMP%], .news-info[_ngcontent-%COMP%], .news-links-images[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.news-info[_ngcontent-%COMP%], .news-text[_ngcontent-%COMP%], .edit-news[_ngcontent-%COMP%], .tags-item[_ngcontent-%COMP%], .back-button[_ngcontent-%COMP%] {\n  font-family: var(--primary-font);\n}\n\n.top-elements[_ngcontent-%COMP%] {\n  margin-top: 54px;\n  justify-content: space-between;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 19px;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n\n.button-link[_ngcontent-%COMP%] {\n  color: var(--primary-dark-grey);\n}\n\n.button-arrow[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n\n.edit-news[_ngcontent-%COMP%] {\n  padding: 15px 32px;\n  color: var(--primary-green);\n  font-size: 1rem;\n  line-height: 16px;\n  font-weight: 700;\n  border: 1px solid var(--primary-green);\n  border-radius: 3px;\n  text-align: center;\n}\n\n.edit-news[_ngcontent-%COMP%]:hover {\n  border-color: var(--secondary-dark-green);\n  color: var(--secondary-dark-green);\n}\n\n.tags[_ngcontent-%COMP%], .news-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.tags[_ngcontent-%COMP%] {\n  padding: 48px 0 24px 0;\n  display: flex;\n  justify-content: center;\n}\n\n.tags-item[_ngcontent-%COMP%] {\n  color: var(--tertiary-grey);\n  text-transform: capitalize;\n  font-size: 14px;\n  line-height: 16px;\n  margin: 0 8px 0;\n  padding: 8px 16px;\n  border: 1px solid var(--secondary-grey);\n  border-radius: 25px;\n}\n\n.news-content[_ngcontent-%COMP%] {\n  margin: 0 7.5%;\n}\n\n.news-title-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.news-title[_ngcontent-%COMP%] {\n  margin: 0 6.8% 24px;\n  color: var(--primary-dark-grey);\n  font-weight: 500;\n  width: 100%;\n  font-size: calc(24px + (40 - 24) * ((100vw - 320px) / (1440 - 320)));\n  line-height: calc(32px + (48 - 32) * ((100vw - 320px) / (1440 - 320)));\n  font-family: var(--secondary-font);\n}\n\n.news-info[_ngcontent-%COMP%] {\n  padding: 24px 0;\n  display: flex;\n  justify-content: center;\n}\n\n.news-info-date[_ngcontent-%COMP%], .news-info-author[_ngcontent-%COMP%] {\n  color: var(--primary-dark-grey);\n  font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1440 - 320)));\n  line-height: calc(16px + (40 - 16) * ((100vw - 320px) / (1440 - 320)));\n}\n\n.news-info-dot[_ngcontent-%COMP%] {\n  padding: 0 32px 0;\n}\n\n.news-image-img[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.news-links-images[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.news-links-img[_ngcontent-%COMP%] {\n  margin: 9px 0;\n}\n\n.news-text-container[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 69px 0 0;\n  margin-top: 37px;\n}\n\n.news-text[_ngcontent-%COMP%] {\n  margin-left: 3rem;\n  color: #000;\n  text-align: left;\n  width: 100%;\n}\n\n.news-text-content[_ngcontent-%COMP%] {\n  width: 90%;\n  font-size: 18px;\n  line-height: 32px;\n  white-space: pre-wrap;\n}\n\n.source-field[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  display: flex;\n}\n\n.source-title[_ngcontent-%COMP%] {\n  font-family: var(--primary-font);\n  font-size: 1.2rem;\n  line-height: 40px;\n  color: var(--primary-dark-grey);\n  mix-blend-mode: normal;\n  margin-right: 8px;\n}\n\n.source-text[_ngcontent-%COMP%] {\n  font-family: var(--primary-font);\n  max-width: 631px;\n  font-size: 18px;\n  line-height: 32px;\n  margin-top: 6px;\n}\n\n.like_wr[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  display: flex;\n  align-items: center;\n}\n\n.like_wr[_ngcontent-%COMP%]   .news_like[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n}\n\n.like_wr[_ngcontent-%COMP%]   .numerosity_likes[_ngcontent-%COMP%] {\n  font-family: var(--primary-font);\n  font-size: 16px;\n  color: var(--secondary-grey);\n  opacity: 0.6;\n  margin-left: 10px;\n}\n\n.like_wr[_ngcontent-%COMP%]   .disable[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n@media (min-width: 576px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n\n@media screen and (max-width: 1024px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin: 0 3%;\n  }\n\n  .news-title[_ngcontent-%COMP%] {\n    margin: 0 8% 24px;\n  }\n\n  .news-content[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin: 0 1.8%;\n  }\n\n  .news-title[_ngcontent-%COMP%] {\n    margin: 0 0 24px;\n  }\n\n  .news-links-img[_ngcontent-%COMP%] {\n    margin: 0 32px 0 0;\n  }\n\n  .news-text-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    padding: 0;\n  }\n\n  .news-links-images[_ngcontent-%COMP%] {\n    flex-direction: row;\n    margin: 51px auto;\n    width: 136px;\n  }\n\n  .last-img[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .news-text[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  .news-text-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .source-text[_ngcontent-%COMP%] {\n    max-width: 647px;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin: 0 2.4%;\n  }\n\n  .wrap[_ngcontent-%COMP%] {\n    width: 100vw;\n    margin-left: calc(-50vw + 50% - 8px);\n    position: relative;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .news-text-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-top: 0;\n  }\n  .news-text-container[_ngcontent-%COMP%]   .news-links-images[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: center;\n  }\n  .news-text-container[_ngcontent-%COMP%]   .news-text[_ngcontent-%COMP%] {\n    padding: 0;\n    margin-left: 0;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin: 0 5%;\n  }\n\n  .news-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 32px;\n  }\n\n  .back-button[_ngcontent-%COMP%] {\n    margin-bottom: 36px;\n    display: flex;\n    justify-content: center;\n  }\n\n  .submit-form[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 48px;\n  }\n\n  .edit-news[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 11px 32px;\n    font-weight: 600;\n  }\n\n  .top-elements[_ngcontent-%COMP%], .news-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .create-news-text[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 32px;\n    margin-top: 64px;\n  }\n\n  .news-info-date[_ngcontent-%COMP%], .news-info-author[_ngcontent-%COMP%], .news-text-content[_ngcontent-%COMP%], .source-text[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 24px;\n  }\n\n  .source-text[_ngcontent-%COMP%] {\n    margin-top: 8px;\n  }\n\n  .source-field[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .source-field[_ngcontent-%COMP%]   .source-text[_ngcontent-%COMP%] {\n    max-width: 288px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .news-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvZWNvLW5ld3MvY29tcG9uZW50cy9lY28tbmV3cy1kZXRhaWwvRDpcXFNvZnRTZXJ2ZV9BY2FkZW15XFxHcmVlbkNpdHlcXGdoLXBhZ2VzXFxHcmVlbkNpdHlDbGllbnQvc3JjXFxhcHBcXG1haW5cXGNvbXBvbmVudFxcZWNvLW5ld3NcXGNvbXBvbmVudHNcXGVjby1uZXdzLWRldGFpbFxcZWNvLW5ld3MtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbXBvbmVudC9lY28tbmV3cy9jb21wb25lbnRzL2Vjby1uZXdzLWRldGFpbC9lY28tbmV3cy1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxzQkFBQTtBQ0xGOztBRFFBOzs7O0VBSUUsYUFBQTtFQUNBLG1CQUFBO0FDTEY7O0FEUUE7Ozs7O0VBS0UsZ0NBQUE7QUNMRjs7QURRQTtFQUNFLGdCQUFBO0VBQ0EsOEJBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7QUNMRjs7QURRQTtFQUNFLCtCQUFBO0FDTEY7O0FEUUE7RUFDRSxpQkFBQTtBQ0xGOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSx5Q0FBQTtFQUNBLGtDQUFBO0FDTEY7O0FEUUE7O0VBRUUsa0JBQUE7QUNMRjs7QURRQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDTEY7O0FEUUE7RUFDRSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtBQ0xGOztBRFFBO0VBQ0UsY0FBQTtBQ0xGOztBRFFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDTEY7O0FEUUE7RUFDRSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0VBQUE7RUFDQSxzRUFBQTtFQUNBLGtDQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDTEY7O0FEUUE7O0VBRUUsK0JBQUE7RUFDQSxvRUFBQTtFQUNBLHNFQUFBO0FDTEY7O0FEUUE7RUFDRSxpQkFBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNMRjs7QURRQTtFQUNFLHNCQUFBO0FDTEY7O0FEUUE7RUFDRSxhQUFBO0FDTEY7O0FEUUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRFFBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNMRjs7QURRQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ0xGOztBRFFBO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDTEY7O0FEUUE7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0xGOztBRFFBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNMRjs7QURPRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0xKOztBRFFFO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURTRTtFQUNFLGVBQUE7QUNQSjs7QURXQTtFQUNFO0lBQ0UsVUFBQTtFQ1JGO0FBQ0Y7O0FEV0E7RUFDRTtJQUNFLFlBQUE7RUNURjs7RURZQTtJQUNFLGlCQUFBO0VDVEY7O0VEWUE7SUFDRSxTQUFBO0VDVEY7QUFDRjs7QURZQTtFQUNFO0lBQ0UsY0FBQTtFQ1ZGOztFRGFBO0lBQ0UsZ0JBQUE7RUNWRjs7RURhQTtJQUNFLGtCQUFBO0VDVkY7O0VEYUE7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsVUFBQTtFQ1ZGOztFRGFBO0lBQ0UsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7RUNWRjs7RURhQTtJQUNFLFNBQUE7RUNWRjs7RURhQTtJQUNFLGNBQUE7RUNWRjs7RURhQTtJQUNFLFdBQUE7RUNWRjs7RURhQTtJQUNFLGdCQUFBO0VDVkY7QUFDRjs7QURhQTtFQUNFO0lBQ0UsY0FBQTtFQ1hGOztFRGNBO0lBQ0UsWUFBQTtJQUNBLG9DQUFBO0lBQ0Esa0JBQUE7RUNYRjtBQUNGOztBRGNBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLGFBQUE7RUNaRjtFRGNFO0lBQ0UsbUJBQUE7SUFDQSx1QkFBQTtFQ1pKO0VEZUU7SUFDRSxVQUFBO0lBQ0EsY0FBQTtFQ2JKO0FBQ0Y7O0FEaUJBO0VBQ0U7SUFDRSxZQUFBO0VDZkY7O0VEa0JBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VDZkY7O0VEa0JBO0lBQ0UsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7RUNmRjs7RURrQkE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQ2ZGOztFRGtCQTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VDZkY7O0VEa0JBOztJQUVFLHNCQUFBO0VDZkY7O0VEa0JBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUNmRjs7RURrQkE7Ozs7SUFJRSxlQUFBO0lBQ0EsaUJBQUE7RUNmRjs7RURrQkE7SUFDRSxlQUFBO0VDZkY7O0VEa0JBO0lBQ0Usc0JBQUE7RUNmRjtFRGlCRTtJQUNFLGdCQUFBO0VDZko7QUFDRjs7QURtQkE7RUFDRTtJQUNFLHNCQUFBO0VDakJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbXBvbmVudC9lY28tbmV3cy9jb21wb25lbnRzL2Vjby1uZXdzLWRldGFpbC9lY28tbmV3cy1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnAtc21hbGxlc3Q6IDMyMHB4O1xyXG4kYnAtcGhvbmU6IDU3NnB4O1xyXG4kYnAtdGFibGV0OiA3NjhweDtcclxuJGJwLWRlc2t0b3A6IDEwMjRweDtcclxuJGJwLWxhcmdlc3Q6IDE0NDBweDtcclxuXHJcbi53b3JkLXdyYXAge1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi50b3AtZWxlbWVudHMsXHJcbi5idXR0b24tY29udGVudCxcclxuLm5ld3MtaW5mbyxcclxuLm5ld3MtbGlua3MtaW1hZ2VzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uZXdzLWluZm8sXHJcbi5uZXdzLXRleHQsXHJcbi5lZGl0LW5ld3MsXHJcbi50YWdzLWl0ZW0sXHJcbi5iYWNrLWJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbn1cclxuXHJcbi50b3AtZWxlbWVudHMge1xyXG4gIG1hcmdpbi10b3A6IDU0cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uYmFjay1idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYnV0dG9uLWxpbmsge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmstZ3JleSk7XHJcbn1cclxuXHJcbi5idXR0b24tYXJyb3cge1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG4uZWRpdC1uZXdzIHtcclxuICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lZGl0LW5ld3M6aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRhcmstZ3JlZW4pO1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGFyay1ncmVlbik7XHJcbn1cclxuXHJcbi50YWdzLFxyXG4ubmV3cy1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YWdzIHtcclxuICBwYWRkaW5nOiA0OHB4IDAgMjRweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YWdzLWl0ZW0ge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1ncmV5KTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgbWFyZ2luOiAwIDhweCAwO1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1ncmV5KTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4ubmV3cy1jb250ZW50IHtcclxuICBtYXJnaW46IDAgNy41JTtcclxufVxyXG5cclxuLm5ld3MtdGl0bGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubmV3cy10aXRsZSB7XHJcbiAgbWFyZ2luOiAwIDYuOCUgMjRweDtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrLWdyZXkpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiBjYWxjKDI0cHggKyAoNDAgLSAyNCkgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gKDE0NDAgLSAzMjApKSk7XHJcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMzJweCArICg0OCAtIDMyKSAqICgoMTAwdncgLSAzMjBweCkgLyAoMTQ0MCAtIDMyMCkpKTtcclxuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xyXG59XHJcblxyXG4ubmV3cy1pbmZvIHtcclxuICBwYWRkaW5nOiAyNHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm5ld3MtaW5mby1kYXRlLFxyXG4ubmV3cy1pbmZvLWF1dGhvciB7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyay1ncmV5KTtcclxuICBmb250LXNpemU6IGNhbGMoMTZweCArICgyNCAtIDE2KSAqICgoMTAwdncgLSAzMjBweCkgLyAoMTQ0MCAtIDMyMCkpKTtcclxuICBsaW5lLWhlaWdodDogY2FsYygxNnB4ICsgKDQwIC0gMTYpICogKCgxMDB2dyAtIDMyMHB4KSAvICgxNDQwIC0gMzIwKSkpO1xyXG59XHJcblxyXG4ubmV3cy1pbmZvLWRvdCB7XHJcbiAgcGFkZGluZzogMCAzMnB4IDA7XHJcbn1cclxuXHJcbi5uZXdzLWltYWdlLWltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLm5ld3MtbGlua3MtaW1hZ2VzIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubmV3cy1saW5rcy1pbWcge1xyXG4gIG1hcmdpbjogOXB4IDA7XHJcbn1cclxuXHJcbi5uZXdzLXRleHQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDY5cHggMCAwO1xyXG4gIG1hcmdpbi10b3A6IDM3cHg7XHJcbn1cclxuXHJcbi5uZXdzLXRleHQge1xyXG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uZXdzLXRleHQtY29udGVudCB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcblxyXG4uc291cmNlLWZpZWxkIHtcclxuICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zb3VyY2UtdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmstZ3JleSk7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLnNvdXJjZS10ZXh0IHtcclxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcclxuICBtYXgtd2lkdGg6IDYzMXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbi5saWtlX3dyIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5uZXdzX2xpa2Uge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubnVtZXJvc2l0eV9saWtlcyB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JleSk7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcblxyXG4gIC5kaXNhYmxlIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIG1hcmdpbjogMCAzJTtcclxuICB9XHJcblxyXG4gIC5uZXdzLXRpdGxlIHtcclxuICAgIG1hcmdpbjogMCA4JSAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLm5ld3MtY29udGVudCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIG1hcmdpbjogMCAxLjglO1xyXG4gIH1cclxuXHJcbiAgLm5ld3MtdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwIDAgMjRweDtcclxuICB9XHJcblxyXG4gIC5uZXdzLWxpbmtzLWltZyB7XHJcbiAgICBtYXJnaW46IDAgMzJweCAwIDA7XHJcbiAgfVxyXG5cclxuICAubmV3cy10ZXh0LWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLm5ld3MtbGlua3MtaW1hZ2VzIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW46IDUxcHggYXV0bztcclxuICAgIHdpZHRoOiAxMzZweDtcclxuICB9XHJcblxyXG4gIC5sYXN0LWltZyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAubmV3cy10ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgLm5ld3MtdGV4dC1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnNvdXJjZS10ZXh0IHtcclxuICAgIG1heC13aWR0aDogNjQ3cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIG1hcmdpbjogMCAyLjQlO1xyXG4gIH1cclxuXHJcbiAgLndyYXAge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoLTUwdncgKyA1MCUgLSA4cHgpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtdGFibGV0KSB7XHJcbiAgLm5ld3MtdGV4dC1jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcblxyXG4gICAgLm5ld3MtbGlua3MtaW1hZ2VzIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLm5ld3MtdGV4dCB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDAgNSU7XHJcbiAgfVxyXG5cclxuICAubmV3cy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICB9XHJcblxyXG4gIC5iYWNrLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnN1Ym1pdC1mb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gIH1cclxuXHJcbiAgLmVkaXQtbmV3cyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDExcHggMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAudG9wLWVsZW1lbnRzLFxyXG4gIC5uZXdzLWluZm8ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5jcmVhdGUtbmV3cy10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNjRweDtcclxuICB9XHJcblxyXG4gIC5uZXdzLWluZm8tZGF0ZSxcclxuICAubmV3cy1pbmZvLWF1dGhvcixcclxuICAubmV3cy10ZXh0LWNvbnRlbnQsXHJcbiAgLnNvdXJjZS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLnNvdXJjZS10ZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICB9XHJcblxyXG4gIC5zb3VyY2UtZmllbGQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAuc291cmNlLXRleHQge1xyXG4gICAgICBtYXgtd2lkdGg6IDI4OHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnAtc21hbGxlc3QpIHtcclxuICAubmV3cy1pbmZvIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG59XHJcbiIsIi53b3JkLXdyYXAge1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4udG9wLWVsZW1lbnRzLFxuLmJ1dHRvbi1jb250ZW50LFxuLm5ld3MtaW5mbyxcbi5uZXdzLWxpbmtzLWltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uZXdzLWluZm8sXG4ubmV3cy10ZXh0LFxuLmVkaXQtbmV3cyxcbi50YWdzLWl0ZW0sXG4uYmFjay1idXR0b24ge1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbn1cblxuLnRvcC1lbGVtZW50cyB7XG4gIG1hcmdpbi10b3A6IDU0cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbn1cblxuLmJ1dHRvbi1saW5rIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyay1ncmV5KTtcbn1cblxuLmJ1dHRvbi1hcnJvdyB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4uZWRpdC1uZXdzIHtcbiAgcGFkZGluZzogMTVweCAzMnB4O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVkaXQtbmV3czpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRhcmstZ3JlZW4pO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRhcmstZ3JlZW4pO1xufVxuXG4udGFncyxcbi5uZXdzLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWdzIHtcbiAgcGFkZGluZzogNDhweCAwIDI0cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50YWdzLWl0ZW0ge1xuICBjb2xvcjogdmFyKC0tdGVydGlhcnktZ3JleSk7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDAgOHB4IDA7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktZ3JleSk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5uZXdzLWNvbnRlbnQge1xuICBtYXJnaW46IDAgNy41JTtcbn1cblxuLm5ld3MtdGl0bGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5uZXdzLXRpdGxlIHtcbiAgbWFyZ2luOiAwIDYuOCUgMjRweDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyay1ncmV5KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogY2FsYygyNHB4ICsgKDQwIC0gMjQpICogKCgxMDB2dyAtIDMyMHB4KSAvICgxNDQwIC0gMzIwKSkpO1xuICBsaW5lLWhlaWdodDogY2FsYygzMnB4ICsgKDQ4IC0gMzIpICogKCgxMDB2dyAtIDMyMHB4KSAvICgxNDQwIC0gMzIwKSkpO1xuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xufVxuXG4ubmV3cy1pbmZvIHtcbiAgcGFkZGluZzogMjRweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5ld3MtaW5mby1kYXRlLFxuLm5ld3MtaW5mby1hdXRob3Ige1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrLWdyZXkpO1xuICBmb250LXNpemU6IGNhbGMoMTZweCArICgyNCAtIDE2KSAqICgoMTAwdncgLSAzMjBweCkgLyAoMTQ0MCAtIDMyMCkpKTtcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMTZweCArICg0MCAtIDE2KSAqICgoMTAwdncgLSAzMjBweCkgLyAoMTQ0MCAtIDMyMCkpKTtcbn1cblxuLm5ld3MtaW5mby1kb3Qge1xuICBwYWRkaW5nOiAwIDMycHggMDtcbn1cblxuLm5ld3MtaW1hZ2UtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5uZXdzLWxpbmtzLWltYWdlcyB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5uZXdzLWxpbmtzLWltZyB7XG4gIG1hcmdpbjogOXB4IDA7XG59XG5cbi5uZXdzLXRleHQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogNjlweCAwIDA7XG4gIG1hcmdpbi10b3A6IDM3cHg7XG59XG5cbi5uZXdzLXRleHQge1xuICBtYXJnaW4tbGVmdDogM3JlbTtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmV3cy10ZXh0LWNvbnRlbnQge1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi5zb3VyY2UtZmllbGQge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc291cmNlLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyay1ncmV5KTtcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5zb3VyY2UtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICBtYXgtd2lkdGg6IDYzMXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5saWtlX3dyIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubGlrZV93ciAubmV3c19saWtlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLmxpa2Vfd3IgLm51bWVyb3NpdHlfbGlrZXMge1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyZXkpO1xuICBvcGFjaXR5OiAwLjY7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmxpa2Vfd3IgLmRpc2FibGUge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXIge1xuICAgIG1hcmdpbjogMCAzJTtcbiAgfVxuXG4gIC5uZXdzLXRpdGxlIHtcbiAgICBtYXJnaW46IDAgOCUgMjRweDtcbiAgfVxuXG4gIC5uZXdzLWNvbnRlbnQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLndyYXBwZXIge1xuICAgIG1hcmdpbjogMCAxLjglO1xuICB9XG5cbiAgLm5ld3MtdGl0bGUge1xuICAgIG1hcmdpbjogMCAwIDI0cHg7XG4gIH1cblxuICAubmV3cy1saW5rcy1pbWcge1xuICAgIG1hcmdpbjogMCAzMnB4IDAgMDtcbiAgfVxuXG4gIC5uZXdzLXRleHQtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAubmV3cy1saW5rcy1pbWFnZXMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luOiA1MXB4IGF1dG87XG4gICAgd2lkdGg6IDEzNnB4O1xuICB9XG5cbiAgLmxhc3QtaW1nIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAubmV3cy10ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gIC5uZXdzLXRleHQtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc291cmNlLXRleHQge1xuICAgIG1heC13aWR0aDogNjQ3cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBtYXJnaW46IDAgMi40JTtcbiAgfVxuXG4gIC53cmFwIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoLTUwdncgKyA1MCUgLSA4cHgpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmV3cy10ZXh0LWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIC5uZXdzLXRleHQtY29udGFpbmVyIC5uZXdzLWxpbmtzLWltYWdlcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAubmV3cy10ZXh0LWNvbnRhaW5lciAubmV3cy10ZXh0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAud3JhcHBlciB7XG4gICAgbWFyZ2luOiAwIDUlO1xuICB9XG5cbiAgLm5ld3MtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgfVxuXG4gIC5iYWNrLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnN1Ym1pdC1mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gIH1cblxuICAuZWRpdC1uZXdzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMXB4IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIC50b3AtZWxlbWVudHMsXG4ubmV3cy1pbmZvIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmNyZWF0ZS1uZXdzLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICBtYXJnaW4tdG9wOiA2NHB4O1xuICB9XG5cbiAgLm5ld3MtaW5mby1kYXRlLFxuLm5ld3MtaW5mby1hdXRob3IsXG4ubmV3cy10ZXh0LWNvbnRlbnQsXG4uc291cmNlLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxuXG4gIC5zb3VyY2UtdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG5cbiAgLnNvdXJjZS1maWVsZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuc291cmNlLWZpZWxkIC5zb3VyY2UtdGV4dCB7XG4gICAgbWF4LXdpZHRoOiAyODhweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAubmV3cy1pbmZvIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EcoNewsDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-eco-news-detail',
          templateUrl: './eco-news-detail.component.html',
          styleUrls: ['./eco-news-detail.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _eco_news_service_eco_news_service__WEBPACK_IMPORTED_MODULE_5__["EcoNewsService"]
        }, {
          type: _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/component/eco-news/components/eco-news-detail/eco-news-widget/eco-news-widget.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/main/component/eco-news/components/eco-news-detail/eco-news-widget/eco-news-widget.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: EcoNewsWidgetComponent */

  /***/
  function srcAppMainComponentEcoNewsComponentsEcoNewsDetailEcoNewsWidgetEcoNewsWidgetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EcoNewsWidgetComponent", function () {
      return EcoNewsWidgetComponent;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _eco_news_service_eco_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @eco-news-service/eco-news.service */
    "./src/app/main/component/eco-news/services/eco-news.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _news_list_news_list_gallery_view_news_list_gallery_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../news-list/news-list-gallery-view/news-list-gallery-view.component */
    "./src/app/main/component/eco-news/components/news-list/news-list-gallery-view/news-list-gallery-view.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = function _c0(a1) {
      return ["/news", a1];
    };

    function EcoNewsWidgetComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-news-list-gallery-view", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("last-item", i_r2 === 2)("recommended-item", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ecoNewsModel", data_r1)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, data_r1.id));
      }
    }

    var EcoNewsWidgetComponent = /*#__PURE__*/function () {
      function EcoNewsWidgetComponent(ecoNewsService, route) {
        _classCallCheck(this, EcoNewsWidgetComponent);

        this.ecoNewsService = ecoNewsService;
        this.route = route;
      }

      _createClass(EcoNewsWidgetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.newsIdSubscription();
        }
      }, {
        key: "newsIdSubscription",
        value: function newsIdSubscription() {
          var _this38 = this;

          this.recommendedNewsSubscription = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (params) {
            var id = +params.get('id');
            return _this38.ecoNewsService.getRecommendedNews(id);
          })).subscribe(function (element) {
            return _this38.recommendedNews = element;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.recommendedNewsSubscription.unsubscribe();
        }
      }]);

      return EcoNewsWidgetComponent;
    }();

    EcoNewsWidgetComponent.ɵfac = function EcoNewsWidgetComponent_Factory(t) {
      return new (t || EcoNewsWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_eco_news_service_eco_news_service__WEBPACK_IMPORTED_MODULE_2__["EcoNewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    EcoNewsWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EcoNewsWidgetComponent,
      selectors: [["app-eco-news-widget"]],
      decls: 8,
      vars: 4,
      consts: [[1, "wrapper"], [1, "m-0", "p-0", "container-fluid", "d-flex", "justify-content-center", "align-items-center"], [1, "row", "m-0", "justify-content-center", "w-100"], ["class", "col-lg-6 col-sm-12 col-xl-4 col-md-6 p-0 pb-3 d-flex justify-content-center align-items-center", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-sm-12", "col-xl-4", "col-md-6", "p-0", "pb-3", "d-flex", "justify-content-center", "align-items-center"], [3, "ecoNewsModel", "routerLink"]],
      template: function EcoNewsWidgetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EcoNewsWidgetComponent_div_7_Template, 2, 8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "eco-news-single-view.eco-news-widget.paragraph"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.recommendedNews);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _news_list_news_list_gallery_view_news_list_gallery_view_component__WEBPACK_IMPORTED_MODULE_5__["NewsListGalleryViewComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
      styles: [".gallery-view-active[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  align-content: center;\n  width: 100%;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  font-family: var(--secondary-font);\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 35px;\n  color: var(--secondary-dark-grey);\n}\n\nhr[_ngcontent-%COMP%] {\n  background: #e6e6e6;\n  margin: 20px 0 20px 0;\n}\n\n.list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n}\n\n@media screen and (max-width: 1024px) {\n  .gallery-view-active[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 27.8%);\n    grid-gap: 6.6%;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .last-item[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .gallery-view-active[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    color: var(--secondary-dark-grey);\n  }\n\n  .gallery-view-active[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvZWNvLW5ld3MvY29tcG9uZW50cy9lY28tbmV3cy1kZXRhaWwvZWNvLW5ld3Mtd2lkZ2V0L0Q6XFxTb2Z0U2VydmVfQWNhZGVteVxcR3JlZW5DaXR5XFxnaC1wYWdlc1xcR3JlZW5DaXR5Q2xpZW50L3NyY1xcYXBwXFxtYWluXFxjb21wb25lbnRcXGVjby1uZXdzXFxjb21wb25lbnRzXFxlY28tbmV3cy1kZXRhaWxcXGVjby1uZXdzLXdpZGdldFxcZWNvLW5ld3Mtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbXBvbmVudC9lY28tbmV3cy9jb21wb25lbnRzL2Vjby1uZXdzLWRldGFpbC9lY28tbmV3cy13aWRnZXQvZWNvLW5ld3Mtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FDTEY7O0FEUUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FDTEY7O0FEUUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNMRjs7QURRQTtFQUNFO0lBQ0UsdUNBQUE7SUFDQSxjQUFBO0VDTEY7QUFDRjs7QURRQTtFQUNFO0lBQ0UsYUFBQTtFQ05GOztFRFNBO0lBQ0UsYUFBQTtFQ05GO0FBQ0Y7O0FEU0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQ0FBQTtFQ1BGOztFRFVBO0lBQ0UsYUFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7RUNQRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnQvZWNvLW5ld3MvY29tcG9uZW50cy9lY28tbmV3cy1kZXRhaWwvZWNvLW5ld3Mtd2lkZ2V0L2Vjby1uZXdzLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRicC1zbWFsbGVzdDogMzIwcHg7XHJcbiRicC1waG9uZTogNTc2cHg7XHJcbiRicC10YWJsZXQ6IDc2OHB4O1xyXG4kYnAtZGVza3RvcDogMTAyNHB4O1xyXG4kYnAtbGFyZ2VzdDogMTQ0MHB4O1xyXG5cclxuLmdhbGxlcnktdmlldy1hY3RpdmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGFyay1ncmV5KTtcclxufVxyXG5cclxuaHIge1xyXG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XHJcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5nYWxsZXJ5LXZpZXctYWN0aXZlIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDI3LjglKTtcclxuICAgIGdyaWQtZ2FwOiA2LjYlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubGFzdC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZ2FsbGVyeS12aWV3LWFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGFyay1ncmV5KTtcclxuICB9XHJcblxyXG4gIC5nYWxsZXJ5LXZpZXctYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG59XHJcbiIsIi5nYWxsZXJ5LXZpZXctYWN0aXZlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5wIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeS1mb250KTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRhcmstZ3JleSk7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xufVxuXG4ubGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5nYWxsZXJ5LXZpZXctYWN0aXZlIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAyNy44JSk7XG4gICAgZ3JpZC1nYXA6IDYuNiU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sYXN0LWl0ZW0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuZ2FsbGVyeS12aWV3LWFjdGl2ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGFyay1ncmV5KTtcbiAgfVxuXG4gIC5nYWxsZXJ5LXZpZXctYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EcoNewsWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-eco-news-widget',
          templateUrl: './eco-news-widget.component.html',
          styleUrls: ['./eco-news-widget.component.scss']
        }]
      }], function () {
        return [{
          type: _eco_news_service_eco_news_service__WEBPACK_IMPORTED_MODULE_2__["EcoNewsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/component/eco-news/components/index.ts":
  /*!*************************************************************!*\
    !*** ./src/app/main/component/eco-news/components/index.ts ***!
    \*************************************************************/

  /*! exports provided: CreateEditNewsComponent, EcoNewsDetailComponent, EcoNewsWidgetComponent, NewsListComponent, ChangeViewButtonComponent, NewsListGalleryViewComponent, NewsListListViewComponent, NewsPreviewPageComponent, PostNewsLoaderComponent, RemainingCountComponent */

  /***/
  function srcAppMainComponentEcoNewsComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _create_edit_news_create_edit_news_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./create-edit-news/create-edit-news.component */
    "./src/app/main/component/eco-news/components/create-edit-news/create-edit-news.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CreateEditNewsComponent", function () {
      return _create_edit_news_create_edit_news_component__WEBPACK_IMPORTED_MODULE_0__["CreateEditNewsComponent"];
    });
    /* harmony import */


    var _eco_news_detail_eco_news_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./eco-news-detail/eco-news-detail.component */
    "./src/app/main/component/eco-news/components/eco-news-detail/eco-news-detail.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EcoNewsDetailComponent", function () {
      return _eco_news_detail_eco_news_detail_component__WEBPACK_IMPORTED_MODULE_1__["EcoNewsDetailComponent"];
    });
    /* harmony import */


    var _eco_news_detail_eco_news_widget_eco_news_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./eco-news-detail/eco-news-widget/eco-news-widget.component */
    "./src/app/main/component/eco-news/components/eco-news-detail/eco-news-widget/eco-news-widget.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EcoNewsWidgetComponent", function () {
      return _eco_news_detail_eco_news_widget_eco_news_widget_component__WEBPACK_IMPORTED_MODULE_2__["EcoNewsWidgetComponent"];
    });
    /* harmony import */


    var _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./news-list/news-list.component */
    "./src/app/main/component/eco-news/components/news-list/news-list.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NewsListComponent", function () {
      return _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_3__["NewsListComponent"];
    });
    /* harmony import */


    var _news_list_change_view_button_change_view_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./news-list/change-view-button/change-view-button.component */
    "./src/app/main/component/eco-news/components/news-list/change-view-button/change-view-button.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ChangeViewButtonComponent", function () {
      return _news_list_change_view_button_change_view_button_component__WEBPACK_IMPORTED_MODULE_4__["ChangeViewButtonComponent"];
    });
    /* harmony import */


    var _news_list_news_list_gallery_view_news_list_gallery_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./news-list/news-list-gallery-view/news-list-gallery-view.component */
    "./src/app/main/component/eco-news/components/news-list/news-list-gallery-view/news-list-gallery-view.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NewsListGalleryViewComponent", function () {
      return _news_list_news_list_gallery_view_news_list_gallery_view_component__WEBPACK_IMPORTED_MODULE_5__["NewsListGalleryViewComponent"];
    });
    /* harmony import */


    var _news_list_news_list_list_view_news_list_list_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./news-list/news-list-list-view/news-list-list-view.component */
    "./src/app/main/component/eco-news/components/news-list/news-list-list-view/news-list-list-view.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NewsListListViewComponent", function () {
      return _news_list_news_list_list_view_news_list_list_view_component__WEBPACK_IMPORTED_MODULE_6__["NewsListListViewComponent"];
    });
    /* harmony import */


    var _news_preview_page_news_preview_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./news-preview-page/news-preview-page.component */
    "./src/app/main/component/eco-news/components/news-preview-page/news-preview-page.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NewsPreviewPageComponent", function () {
      return _news_preview_page_news_preview_page_component__WEBPACK_IMPORTED_MODULE_7__["NewsPreviewPageComponent"];
    });
    /* harmony import */


    var _post_news_loader_post_news_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./post-news-loader/post-news-loader.component */
    "./src/app/main/component/eco-news/components/post-news-loader/post-news-loader.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PostNewsLoaderComponent", function () {
      return _post_news_loader_post_news_loader_component__WEBPACK_IMPORTED_MODULE_8__["PostNewsLoaderComponent"];
    });
    /* harmony import */


    var _remaining_count_remaining_count_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./remaining-count/remaining-count.component */
    "./src/app/main/component/eco-news/components/remaining-count/remaining-count.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RemainingCountComponent", function () {
      return _remaining_count_remaining_count_component__WEBPACK_IMPORTED_MODULE_9__["RemainingCountComponent"];
    });
    /***/

  },

  /***/
  "./src/app/main/component/eco-news/components/news-list/change-view-button/change-view-button.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/main/component/eco-news/components/news-list/change-view-button/change-view-button.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: ChangeViewButtonComponent */

  /***/
  function srcAppMainComponentEcoNewsComponentsNewsListChangeViewButtonChangeViewButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangeViewButtonComponent", function () {
      return ChangeViewButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "btn-tiles-active": a0
      };
    };

    var _c1 = function _c1(a0) {
      return {
        "btn-bars-active": a0
      };
    };

    var ChangeViewButtonComponent = /*#__PURE__*/function () {
      function ChangeViewButtonComponent() {
        _classCallCheck(this, ChangeViewButtonComponent);

        this.view = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gallery = true;
      }

      _createClass(ChangeViewButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSessionStorageView();
          this.changeGalleryViewEmit(this.gallery);
        }
      }, {
        key: "changeGalleryView",
        value: function changeGalleryView() {
          this.gallery = true;
          this.view.emit(this.gallery);
          this.setSessionStorageView();
        }
      }, {
        key: "changeListView",
        value: function changeListView() {
          this.gallery = false;
          this.view.emit(this.gallery);
          this.setSessionStorageView();
        }
      }, {
        key: "changeGalleryViewEmit",
        value: function changeGalleryViewEmit(gallery) {
          this.view.emit(gallery);
        }
      }, {
        key: "setSessionStorageView",
        value: function setSessionStorageView() {
          sessionStorage.setItem('viewGallery', JSON.stringify(this.gallery));
        }
      }, {
        key: "getSessionStorageView",
        value: function getSessionStorageView() {
          var view = sessionStorage.getItem('viewGallery');

          if (view !== null) {
            this.gallery = JSON.parse(view);
            this.view.emit(this.gallery);
          }
        }
      }]);

      return ChangeViewButtonComponent;
    }();

    ChangeViewButtonComponent.ɵfac = function ChangeViewButtonComponent_Factory(t) {
      return new (t || ChangeViewButtonComponent)();
    };

    ChangeViewButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChangeViewButtonComponent,
      selectors: [["app-change-view-button"]],
      inputs: {
        gallery: "gallery"
      },
      outputs: {
        view: "view"
      },
      decls: 5,
      vars: 6,
      consts: [[1, "wrapper"], [1, "btn-tiles", 3, "ngClass", "click"], [1, "fa", "fa-th-large"], [1, "btn-bars", 3, "ngClass", "click"], [1, "fa", "fa-bars"]],
      template: function ChangeViewButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeViewButtonComponent_Template_span_click_1_listener() {
            return ctx.changeGalleryView();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "em", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeViewButtonComponent_Template_span_click_3_listener() {
            return ctx.changeListView();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "em", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.gallery));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, !ctx.gallery));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".wrapper[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (min-width: 576px) {\n  .wrapper[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) {\n    margin-right: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvZWNvLW5ld3MvY29tcG9uZW50cy9uZXdzLWxpc3QvY2hhbmdlLXZpZXctYnV0dG9uL0Q6XFxTb2Z0U2VydmVfQWNhZGVteVxcR3JlZW5DaXR5XFxnaC1wYWdlc1xcR3JlZW5DaXR5Q2xpZW50L3NyY1xcYXBwXFxtYWluXFxjb21wb25lbnRcXGVjby1uZXdzXFxjb21wb25lbnRzXFxuZXdzLWxpc3RcXGNoYW5nZS12aWV3LWJ1dHRvblxcY2hhbmdlLXZpZXctYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbXBvbmVudC9lY28tbmV3cy9jb21wb25lbnRzL25ld3MtbGlzdC9jaGFuZ2Utdmlldy1idXR0b24vY2hhbmdlLXZpZXctYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxjQUFBO0VDQ0Y7RURDRTtJQUNFLGlCQUFBO0VDQ0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29tcG9uZW50L2Vjby1uZXdzL2NvbXBvbmVudHMvbmV3cy1saXN0L2NoYW5nZS12aWV3LWJ1dHRvbi9jaGFuZ2Utdmlldy1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIud3JhcHBlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAud3JhcHBlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLndyYXBwZXIgOm50aC1jaGlsZCgxKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangeViewButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-change-view-button',
          templateUrl: './change-view-button.component.html',
          styleUrls: ['./change-view-button.component.scss']
        }]
      }], null, {
        view: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        gallery: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/component/eco-news/components/news-list/news-list-gallery-view/news-list-gallery-view.component.ts":
  /*!*************************************************************************************************************************!*\
    !*** ./src/app/main/component/eco-news/components/news-list/news-list-gallery-view/news-list-gallery-view.component.ts ***!
    \*************************************************************************************************************************/

  /*! exports provided: NewsListGalleryViewComponent */

  /***/
  function srcAppMainComponentEcoNewsComponentsNewsListNewsListGalleryViewNewsListGalleryViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsListGalleryViewComponent", function () {
      return NewsListGalleryViewComponent;
    });
    /* harmony import */


    var _image_pathes_profile_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../../../image-pathes/profile-icons */
    "./src/app/main/image-pathes/profile-icons.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function NewsListGalleryViewComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "lowercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "homepage.eco-news.tags." + tag_r1)), " ");
      }
    }

    var NewsListGalleryViewComponent = /*#__PURE__*/function () {
      function NewsListGalleryViewComponent(translate) {
        _classCallCheck(this, NewsListGalleryViewComponent);

        this.translate = translate;
        this.profileIcons = _image_pathes_profile_icons__WEBPACK_IMPORTED_MODULE_0__["ecoNewsIcons"];
        this.likeImg = 'assets/img/comments/like.png';
      }

      _createClass(NewsListGalleryViewComponent, [{
        key: "checkNewsImage",
        value: function checkNewsImage() {
          this.newsImage = this.ecoNewsModel.imagePath && this.ecoNewsModel.imagePath !== ' ' ? this.ecoNewsModel.imagePath : this.profileIcons.newsDefaultPictureList;
          return this.newsImage;
        }
      }]);

      return NewsListGalleryViewComponent;
    }();

    NewsListGalleryViewComponent.ɵfac = function NewsListGalleryViewComponent_Factory(t) {
      return new (t || NewsListGalleryViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]));
    };

    NewsListGalleryViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NewsListGalleryViewComponent,
      selectors: [["app-news-list-gallery-view"]],
      inputs: {
        ecoNewsModel: "ecoNewsModel"
      },
      decls: 29,
      vars: 16,
      consts: [["role", "link", 1, "list-gallery"], ["alt", "user added image", 1, "list-image-content", 3, "src"], [1, "list-gallery-content"], [1, "filter-tag"], ["class", "ul-eco-buttons", 4, "ngFor", "ngForOf"], [1, "added-data"], [1, "title-list", "word-wrap"], [1, "list-text", "word-wrap"], [1, "user-data-added-news"], [1, "user-data-text-date"], ["alt", "calendar icon", 1, "icon", 3, "src"], [1, "user-data-text-date", "user"], ["alt", "user icon", 1, "icon", 3, "src"], [1, "user-data-like"], [1, "numerosity"], ["alt", "like", 1, "icon", 3, "src"], [1, "ul-eco-buttons"]],
      template: function NewsListGalleryViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NewsListGalleryViewComponent_div_4_Template, 4, 5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "chat_bubble_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.checkNewsImage(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ecoNewsModel.tags);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.ecoNewsModel.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.ecoNewsModel.text, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.profileIcons.calendarIcon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](16, 11, ctx.ecoNewsModel.creationDate, undefined, undefined, ctx.translate.defaultLang), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.profileIcons.userIcon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.ecoNewsModel.author.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.ecoNewsModel.countComments);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.likeImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.ecoNewsModel.likes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LowerCasePipe"]],
      styles: ["p[_ngcontent-%COMP%], div[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.list-gallery[_ngcontent-%COMP%] {\n  width: 359px;\n  min-height: 528px;\n  box-shadow: 1px 1px 12px rgba(27, 51, 38, 0.15);\n  background: #fff;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n}\n\n.list-gallery[_ngcontent-%COMP%]   .list-image-content[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 206px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.list-gallery[_ngcontent-%COMP%]   .list-gallery-content[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 8px 24px 24px 24px;\n  flex-grow: 1;\n}\n\n.list-gallery[_ngcontent-%COMP%]   .list-gallery-content[_ngcontent-%COMP%]   .filter-tag[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  height: 24px;\n  margin-bottom: 8px;\n}\n\n.list-gallery[_ngcontent-%COMP%]   .list-gallery-content[_ngcontent-%COMP%]   .filter-tag[_ngcontent-%COMP%]   .ul-eco-buttons[_ngcontent-%COMP%] {\n  font-family: var(--primary-font);\n  font-size: 14px;\n  line-height: 16px;\n  color: var(--primary-green);\n  margin-right: 16px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n.list-gallery[_ngcontent-%COMP%]   .list-gallery-content[_ngcontent-%COMP%]   .added-data[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow: hidden;\n  position: relative;\n}\n\n.list-gallery[_ngcontent-%COMP%]   .list-gallery-content[_ngcontent-%COMP%]   .added-data[_ngcontent-%COMP%]   .title-list[_ngcontent-%COMP%] {\n  max-height: 110px;\n}\n\n.list-gallery[_ngcontent-%COMP%]   .list-gallery-content[_ngcontent-%COMP%]   .added-data[_ngcontent-%COMP%]   .title-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--secondary-font);\n  font-style: normal;\n  font-weight: 500;\n  font-size: 21px;\n  line-height: 26px;\n  color: var(--secondary-dark-grey);\n}\n\n.list-gallery[_ngcontent-%COMP%]   .list-gallery-content[_ngcontent-%COMP%]   .added-data[_ngcontent-%COMP%]   .list-text[_ngcontent-%COMP%] {\n  max-height: 150px;\n  overflow: hidden;\n  margin: 10px 0 0 0;\n  font-family: var(--primary-font);\n  font-size: 14px;\n  line-height: 21px;\n  color: var(--secondary-dark-grey);\n}\n\n.list-gallery[_ngcontent-%COMP%]   .list-gallery-content[_ngcontent-%COMP%]   .word-wrap[_ngcontent-%COMP%] {\n  word-break: break-word;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.list-gallery[_ngcontent-%COMP%]   .list-gallery-content[_ngcontent-%COMP%]   .user-data-added-news[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: nowrap;\n}\n\n.list-gallery[_ngcontent-%COMP%]   .list-gallery-content[_ngcontent-%COMP%]   .user-data-text-date[_ngcontent-%COMP%] {\n  font-family: var(--primary-font);\n  font-size: 14px;\n  line-height: 21px;\n  color: var(--secondary-grey);\n  mix-blend-mode: normal;\n  opacity: 0.6;\n  flex-basis: 50%;\n}\n\n.list-gallery[_ngcontent-%COMP%]   .list-gallery-content[_ngcontent-%COMP%]   .user-data-text-date[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-right: 4px;\n}\n\n.list-gallery[_ngcontent-%COMP%]   .list-gallery-content[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n\n.list-gallery[_ngcontent-%COMP%]   .list-gallery-content[_ngcontent-%COMP%]   .user-data-text-date[_ngcontent-%COMP%]:nth-child(2) {\n  max-height: 26px;\n  display: block;\n  white-space: nowrap;\n  max-width: 110px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.list-gallery[_ngcontent-%COMP%]   .list-gallery-content[_ngcontent-%COMP%]   .user-data-like[_ngcontent-%COMP%] {\n  font-family: var(--primary-font);\n  font-size: 14px;\n  color: var(--secondary-grey);\n  opacity: 0.6;\n  flex-basis: 33%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.list-gallery[_ngcontent-%COMP%]   .list-gallery-content[_ngcontent-%COMP%]   .user-data-like[_ngcontent-%COMP%]   .numerosity[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.list-gallery[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  box-shadow: 0 4px 32px #e6ebea;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 1179px) {\n  .list-gallery[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .list-gallery[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (min-width: 1179px) and (max-width: 1199px) {\n  .list-gallery[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvZWNvLW5ld3MvY29tcG9uZW50cy9uZXdzLWxpc3QvbmV3cy1saXN0LWdhbGxlcnktdmlldy9EOlxcU29mdFNlcnZlX0FjYWRlbXlcXEdyZWVuQ2l0eVxcZ2gtcGFnZXNcXEdyZWVuQ2l0eUNsaWVudC9zcmNcXGFwcFxcbWFpblxcY29tcG9uZW50XFxlY28tbmV3c1xcY29tcG9uZW50c1xcbmV3cy1saXN0XFxuZXdzLWxpc3QtZ2FsbGVyeS12aWV3XFxuZXdzLWxpc3QtZ2FsbGVyeS12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbXBvbmVudC9lY28tbmV3cy9jb21wb25lbnRzL25ld3MtbGlzdC9uZXdzLWxpc3QtZ2FsbGVyeS12aWV3L25ld3MtbGlzdC1nYWxsZXJ5LXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7O0VBRUUsU0FBQTtFQUNBLFVBQUE7QUNKRjs7QURPQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0pGOztBRE1FO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ0pKOztBRE9FO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUNMSjs7QURPSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNMTjs7QURPTTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNMUjs7QURTSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1BOOztBRFNNO0VBQ0UsaUJBQUE7QUNQUjs7QURTUTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FDUFY7O0FEV007RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FDVFI7O0FEYUk7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FDWE47O0FEY0k7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1pOOztBRGVJO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNiTjs7QURlTTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNiUjs7QURpQkk7RUFDRSxrQkFBQTtBQ2ZOOztBRGtCSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDaEJOOztBRG1CSTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ2pCTjs7QURtQk07RUFDRSxpQkFBQTtBQ2pCUjs7QUR1QkE7RUFDRSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDcEJGOztBRHVCQTtFQUNFO0lBQ0UsWUFBQTtFQ3BCRjtBQUNGOztBRHVCQTtFQUNFO0lBQ0UsV0FBQTtFQ3JCRjtBQUNGOztBRHdCQTtFQUNFO0lBQ0UsWUFBQTtFQ3RCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnQvZWNvLW5ld3MvY29tcG9uZW50cy9uZXdzLWxpc3QvbmV3cy1saXN0LWdhbGxlcnktdmlldy9uZXdzLWxpc3QtZ2FsbGVyeS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJwLXNtYWxsZXN0OiA1NzVweDtcclxuJGJwLXBob25lOiA3NjdweDtcclxuJGJwLXRhYmxldDogMTE3OXB4O1xyXG4kYnAtZGVza3RvcDogMTQzOXB4O1xyXG5cclxucCxcclxuZGl2IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmxpc3QtZ2FsbGVyeSB7XHJcbiAgd2lkdGg6IDM1OXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDUyOHB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTJweCByZ2JhKDI3LCA1MSwgMzgsIDAuMTUpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgLmxpc3QtaW1hZ2UtY29udGVudCB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDZweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG5cclxuICAubGlzdC1nYWxsZXJ5LWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiA4cHggMjRweCAyNHB4IDI0cHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcblxyXG4gICAgLmZpbHRlci10YWcge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuICAgICAgLnVsLWVjby1idXR0b25zIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWRkZWQtZGF0YSB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAudGl0bGUtbGlzdCB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTEwcHg7XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRhcmstZ3JleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubGlzdC10ZXh0IHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1kYXJrLWdyZXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLndvcmQtd3JhcCB7XHJcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XHJcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItZGF0YS1hZGRlZC1uZXdzIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgfVxyXG5cclxuICAgIC51c2VyLWRhdGEtdGV4dC1kYXRlIHtcclxuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JleSk7XHJcbiAgICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgZmxleC1iYXNpczogNTAlO1xyXG5cclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudXNlciB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAudXNlci1kYXRhLXRleHQtZGF0ZTpudGgtY2hpbGQoMikge1xyXG4gICAgICBtYXgtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgbWF4LXdpZHRoOiAxMTBweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItZGF0YS1saWtlIHtcclxuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmV5KTtcclxuICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICBmbGV4LWJhc2lzOiAzMyU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAubnVtZXJvc2l0eSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5saXN0LWdhbGxlcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMzJweCAjZTZlYmVhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC10YWJsZXQpIHtcclxuICAubGlzdC1nYWxsZXJ5IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicC1waG9uZSkge1xyXG4gIC5saXN0LWdhbGxlcnkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTE3OXB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgLmxpc3QtZ2FsbGVyeSB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG59XHJcbiIsInAsXG5kaXYge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5saXN0LWdhbGxlcnkge1xuICB3aWR0aDogMzU5cHg7XG4gIG1pbi1oZWlnaHQ6IDUyOHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggcmdiYSgyNywgNTEsIDM4LCAwLjE1KTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmxpc3QtZ2FsbGVyeSAubGlzdC1pbWFnZS1jb250ZW50IHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwNnB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG59XG4ubGlzdC1nYWxsZXJ5IC5saXN0LWdhbGxlcnktY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA4cHggMjRweCAyNHB4IDI0cHg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5saXN0LWdhbGxlcnkgLmxpc3QtZ2FsbGVyeS1jb250ZW50IC5maWx0ZXItdGFnIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5saXN0LWdhbGxlcnkgLmxpc3QtZ2FsbGVyeS1jb250ZW50IC5maWx0ZXItdGFnIC51bC1lY28tYnV0dG9ucyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5saXN0LWdhbGxlcnkgLmxpc3QtZ2FsbGVyeS1jb250ZW50IC5hZGRlZC1kYXRhIHtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5saXN0LWdhbGxlcnkgLmxpc3QtZ2FsbGVyeS1jb250ZW50IC5hZGRlZC1kYXRhIC50aXRsZS1saXN0IHtcbiAgbWF4LWhlaWdodDogMTEwcHg7XG59XG4ubGlzdC1nYWxsZXJ5IC5saXN0LWdhbGxlcnktY29udGVudCAuYWRkZWQtZGF0YSAudGl0bGUtbGlzdCBoMyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1kYXJrLWdyZXkpO1xufVxuLmxpc3QtZ2FsbGVyeSAubGlzdC1nYWxsZXJ5LWNvbnRlbnQgLmFkZGVkLWRhdGEgLmxpc3QtdGV4dCB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRhcmstZ3JleSk7XG59XG4ubGlzdC1nYWxsZXJ5IC5saXN0LWdhbGxlcnktY29udGVudCAud29yZC13cmFwIHtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogNDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5saXN0LWdhbGxlcnkgLmxpc3QtZ2FsbGVyeS1jb250ZW50IC51c2VyLWRhdGEtYWRkZWQtbmV3cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi5saXN0LWdhbGxlcnkgLmxpc3QtZ2FsbGVyeS1jb250ZW50IC51c2VyLWRhdGEtdGV4dC1kYXRlIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JleSk7XG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XG4gIG9wYWNpdHk6IDAuNjtcbiAgZmxleC1iYXNpczogNTAlO1xufVxuLmxpc3QtZ2FsbGVyeSAubGlzdC1nYWxsZXJ5LWNvbnRlbnQgLnVzZXItZGF0YS10ZXh0LWRhdGUgLmljb24ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5saXN0LWdhbGxlcnkgLmxpc3QtZ2FsbGVyeS1jb250ZW50IC51c2VyIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLmxpc3QtZ2FsbGVyeSAubGlzdC1nYWxsZXJ5LWNvbnRlbnQgLnVzZXItZGF0YS10ZXh0LWRhdGU6bnRoLWNoaWxkKDIpIHtcbiAgbWF4LWhlaWdodDogMjZweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1heC13aWR0aDogMTEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmxpc3QtZ2FsbGVyeSAubGlzdC1nYWxsZXJ5LWNvbnRlbnQgLnVzZXItZGF0YS1saWtlIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmV5KTtcbiAgb3BhY2l0eTogMC42O1xuICBmbGV4LWJhc2lzOiAzMyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubGlzdC1nYWxsZXJ5IC5saXN0LWdhbGxlcnktY29udGVudCAudXNlci1kYXRhLWxpa2UgLm51bWVyb3NpdHkge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmxpc3QtZ2FsbGVyeTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDMycHggI2U2ZWJlYTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNzlweCkge1xuICAubGlzdC1nYWxsZXJ5IHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5saXN0LWdhbGxlcnkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTE3OXB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC5saXN0LWdhbGxlcnkge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxufSJdfQ== */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewsListGalleryViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-news-list-gallery-view',
          templateUrl: './news-list-gallery-view.component.html',
          styleUrls: ['./news-list-gallery-view.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      }, {
        ecoNewsModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/component/eco-news/components/news-list/news-list-list-view/breakpoints.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/main/component/eco-news/components/news-list/news-list-list-view/breakpoints.ts ***!
    \*************************************************************************************************/

  /*! exports provided: possibleDescHeight, possibleTitleHeight */

  /***/
  function srcAppMainComponentEcoNewsComponentsNewsListNewsListListViewBreakpointsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "possibleDescHeight", function () {
      return possibleDescHeight;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "possibleTitleHeight", function () {
      return possibleTitleHeight;
    });

    var possibleDescHeight = {
      smallHeight: {
        26: 'one-row',
        52: 'd-none',
        72: 'd-none',
        78: 'one-row',
        96: 'd-none',
        100: 'one-row',
        104: 'd-none'
      },
      bigHeight: {
        24: 'tree-row',
        26: 'tree-row',
        48: 'two-row',
        52: 'two-row',
        72: 'one-row',
        78: 'one-row',
        96: 'one-row',
        100: 'one-row'
      }
    };
    var possibleTitleHeight = {
      smallHeight: {
        26: 'one-row',
        52: 'two-row',
        78: 'tree-row',
        104: 'two-row'
      },
      bigHeight: {
        24: 'one-row',
        26: 'one-row',
        48: 'two-row',
        52: 'two-row',
        72: 'tree-row',
        78: 'tree-row',
        96: 'tree-row',
        100: 'tree-row',
        104: 'tree-row'
      }
    };
    /***/
  },

  /***/
  "./src/app/main/component/eco-news/components/news-list/news-list-list-view/news-list-list-view.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/main/component/eco-news/components/news-list/news-list-list-view/news-list-list-view.component.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: NewsListListViewComponent */

  /***/
  function srcAppMainComponentEcoNewsComponentsNewsListNewsListListViewNewsListListViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsListListViewComponent", function () {
      return NewsListListViewComponent;
    });
    /* harmony import */


    var _image_pathes_profile_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../../../image-pathes/profile-icons */
    "./src/app/main/image-pathes/profile-icons.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./breakpoints */
    "./src/app/main/component/eco-news/components/news-list/news-list-list-view/breakpoints.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["titleHeight"];
    var _c1 = ["textHeight"];

    function NewsListListViewComponent_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "lowercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "homepage.eco-news.tags." + tag_r3)), " ");
      }
    }

    var NewsListListViewComponent = /*#__PURE__*/function () {
      function NewsListListViewComponent(renderer, translate) {
        _classCallCheck(this, NewsListListViewComponent);

        this.renderer = renderer;
        this.translate = translate;
        this.smallHeight = 'smallHeight';
        this.bigHeight = 'bigHeight'; // breakpoints for different line height and font size

        this.profileIcons = _image_pathes_profile_icons__WEBPACK_IMPORTED_MODULE_0__["ecoNewsIcons"];
      }

      _createClass(NewsListListViewComponent, [{
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.checkHeightOfTittle();
        } // the idea is to get the height of the header and based on it visualize the Description and Header by adding specific class names
        // another problem is that the line height and container height are different for different devices

      }, {
        key: "checkHeightOfTittle",
        value: function checkHeightOfTittle() {
          var titleHeightOfElement = this.titleHeight.nativeElement.offsetHeight;
          var descCalss = this.getHeightOfDesc(titleHeightOfElement);
          var titleCalss = this.getHeightOfTitle(titleHeightOfElement);
          this.renderer.addClass(this.textHeight.nativeElement, descCalss);
          this.renderer.addClass(this.titleHeight.nativeElement, titleCalss);
        }
      }, {
        key: "checkNewsImage",
        value: function checkNewsImage() {
          this.newsImage = this.ecoNewsModel.imagePath && this.ecoNewsModel.imagePath !== ' ' ? this.ecoNewsModel.imagePath : this.profileIcons.newsDefaultPictureList;
          return this.newsImage;
        }
      }, {
        key: "getDomWidth",
        value: function getDomWidth() {
          return window.innerWidth <= 768 ? this.smallHeight : this.bigHeight;
        }
      }, {
        key: "getHeightOfDesc",
        value: function getHeightOfDesc(titleHeight) {
          var result = _breakpoints__WEBPACK_IMPORTED_MODULE_2__["possibleDescHeight"][this.getDomWidth()][titleHeight];

          var smallTitleHeight = titleHeight > 26 ? 'two-row' : 'tree-row';
          var midTitleHeught = titleHeight > 52 ? 'one-row' : smallTitleHeight;
          return result ? result : midTitleHeught;
        }
      }, {
        key: "getHeightOfTitle",
        value: function getHeightOfTitle(titleHeight) {
          var result = _breakpoints__WEBPACK_IMPORTED_MODULE_2__["possibleTitleHeight"][this.getDomWidth()][titleHeight];

          var smallTitleHeight = titleHeight > 26 ? 'two-row' : 'one-row';
          var midTitleHeught = titleHeight > 52 ? 'tree-row' : smallTitleHeight;
          return result ? result : midTitleHeught;
        }
      }]);

      return NewsListListViewComponent;
    }();

    NewsListListViewComponent.ɵfac = function NewsListListViewComponent_Factory(t) {
      return new (t || NewsListListViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]));
    };

    NewsListListViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NewsListListViewComponent,
      selectors: [["app-news-list-list-view"]],
      viewQuery: function NewsListListViewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.titleHeight = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.textHeight = _t.first);
        }
      },
      inputs: {
        ecoNewsModel: "ecoNewsModel"
      },
      decls: 22,
      vars: 13,
      consts: [[1, "eco-news_list-view-wrp"], ["alt", "Eco news image", 1, "eco-news_list-img", 3, "src"], [1, "eco-news_list-content"], [1, "filter-tag"], ["class", "eco-news_list-tag d-inline-block", 4, "ngFor", "ngForOf"], [1, "eco-news_list-content-title"], ["titleHeight", ""], [1, "eco-news_list-content-text"], ["textHeight", ""], [1, "eco-news_list-autors"], [1, "eco-news_data-text-date"], ["alt", "calendar icon", 1, "icon", 3, "src"], [1, "eco-news_person"], ["alt", "user icon", 1, "icon", 3, "src"], [1, "eco-news_list-tag", "d-inline-block"]],
      template: function NewsListListViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NewsListListViewComponent_p_4_Template, 4, 5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.checkNewsImage(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ecoNewsModel.tags);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.ecoNewsModel.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.ecoNewsModel.text, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.profileIcons.calendarIcon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](18, 8, ctx.ecoNewsModel.creationDate, undefined, undefined, ctx.translate.defaultLang), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.profileIcons.userIcon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.ecoNewsModel.author.name, " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LowerCasePipe"]],
      styles: ["p[_ngcontent-%COMP%], div[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.eco-news_list-view-wrp[_ngcontent-%COMP%] {\n  width: 540px;\n  height: 192px;\n  box-shadow: 1px 1px 12px rgba(27, 51, 38, 0.15);\n  border-radius: 4px;\n  background: #fff;\n}\n\n.eco-news_list-img[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.eco-news_list-tag[_ngcontent-%COMP%] {\n  font-family: var(--primary-font);\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: -0.25px;\n  text-transform: uppercase;\n  color: var(--primary-green);\n  margin-right: 5px;\n}\n\n.eco-news_list-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: grid;\n  grid-template-rows: 20px auto 20px;\n  row-gap: 8px;\n  height: 100%;\n}\n\n.eco-news_list-content-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  height: 28px;\n}\n\n.eco-news_list-content-title[_ngcontent-%COMP%] {\n  font-family: var(--secondary-font);\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  color: var(--quaternary-dark-grey);\n  line-height: 24px;\n  margin-bottom: 5px;\n  overflow: hidden;\n  word-break: break-all;\n}\n\n.eco-news_list-autors[_ngcontent-%COMP%] {\n  display: flex;\n  font-family: var(--primary-font);\n  font-size: 13.9px;\n  line-height: 21px;\n  color: var(--tertiary-grey);\n  mix-blend-mode: normal;\n  opacity: 0.6;\n}\n\n.eco-news_list-autors[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.eco-news_list-autors[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.eco-news_data-text-date[_ngcontent-%COMP%] {\n  min-width: 95px;\n  margin-right: 20px;\n}\n\n.eco-news_data-text-date[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 11px;\n}\n\n.eco-news_person[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 11px;\n  height: 10.5px;\n}\n\n.eco-news_list-content-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 21px;\n  font-family: var(--primary-font);\n}\n\n@media (min-width: 768px) {\n  .eco-news_list-img[_ngcontent-%COMP%] {\n    display: block;\n    object-fit: cover;\n    -o-object-fit: cover;\n    height: 100%;\n    width: 100%;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n    overflow: hidden;\n  }\n\n  .eco-news_list-view-wrp[_ngcontent-%COMP%] {\n    height: 204px;\n    width: 720px;\n    display: grid;\n    grid-template-columns: 204px auto;\n  }\n}\n\n@media (min-width: 1024px) {\n  .eco-news_list-view-wrp[_ngcontent-%COMP%] {\n    height: 204px;\n    width: 960px;\n    grid-template-columns: 359px auto;\n  }\n}\n\n@media (min-width: 1440px) {\n  .eco-news_list-view-wrp[_ngcontent-%COMP%] {\n    width: 1140px;\n  }\n\n  .eco-news_list-content[_ngcontent-%COMP%] {\n    height: 204px;\n    grid-template-rows: 20px 96px 20px;\n    word-break: break-all;\n  }\n\n  .eco-news_list-img[_ngcontent-%COMP%] {\n    display: block;\n    object-fit: cover;\n    -o-object-fit: cover;\n    height: 100%;\n    width: 100%;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n    overflow: hidden;\n  }\n}\n\n.four-row[_ngcontent-%COMP%] {\n  -webkit-line-clamp: 4;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  word-break: break-all;\n}\n\n.tree-row[_ngcontent-%COMP%] {\n  -webkit-line-clamp: 3;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  word-break: break-all;\n}\n\n.two-row[_ngcontent-%COMP%] {\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  word-break: break-all;\n}\n\n.one-row[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  word-break: break-all;\n  -webkit-line-clamp: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvZWNvLW5ld3MvY29tcG9uZW50cy9uZXdzLWxpc3QvbmV3cy1saXN0LWxpc3Qtdmlldy9EOlxcU29mdFNlcnZlX0FjYWRlbXlcXEdyZWVuQ2l0eVxcZ2gtcGFnZXNcXEdyZWVuQ2l0eUNsaWVudC9zcmNcXGFwcFxcbWFpblxcY29tcG9uZW50XFxlY28tbmV3c1xcY29tcG9uZW50c1xcbmV3cy1saXN0XFxuZXdzLWxpc3QtbGlzdC12aWV3XFxuZXdzLWxpc3QtbGlzdC12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbXBvbmVudC9lY28tbmV3cy9jb21wb25lbnRzL25ld3MtbGlzdC9uZXdzLWxpc3QtbGlzdC12aWV3L25ld3MtbGlzdC1saXN0LXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7O0VBRUUsU0FBQTtFQUNBLFVBQUE7QUNORjs7QURTQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBRUEsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTkY7O0FEU0E7RUFDRSxhQUFBO0FDTkY7O0FEU0E7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDTkY7O0FEU0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNORjs7QURTQTtFQUNFLFlBQUE7QUNORjs7QURTQTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDTkY7O0FEU0E7RUFHRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNORjs7QURRRTtFQUNFLGlCQUFBO0FDTko7O0FEU0U7RUFHRSxhQUFBO0VBR0EsbUJBQUE7QUNQSjs7QURXQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ1JGOztBRFVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNSSjs7QURZQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDVEY7O0FEWUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQ1RGOztBRFlBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsMkJBQUE7SUFDQSw4QkFBQTtJQUNBLGdCQUFBO0VDVEY7O0VEWUE7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUVBLGFBQUE7SUFFQSxpQ0FBQTtFQ1RGO0FBQ0Y7O0FEWUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBRUEsaUNBQUE7RUNWRjtBQUNGOztBRGFBO0VBQ0U7SUFDRSxhQUFBO0VDWEY7O0VEY0E7SUFDRSxhQUFBO0lBQ0Esa0NBQUE7SUFDQSxxQkFBQTtFQ1hGOztFRGNBO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLDJCQUFBO0lBQ0EsOEJBQUE7SUFDQSxnQkFBQTtFQ1hGO0FBQ0Y7O0FEY0E7RUFDRSxxQkFBQTtFQWhLQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ3FKRjs7QURhQTtFQUNFLHFCQUFBO0VBdEtBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDNkpGOztBRFdBO0VBQ0UscUJBQUE7RUE1S0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNxS0Y7O0FEU0E7RUFqTEUsb0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFpTEEscUJBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29tcG9uZW50L2Vjby1uZXdzL2NvbXBvbmVudHMvbmV3cy1saXN0L25ld3MtbGlzdC1saXN0LXZpZXcvbmV3cy1saXN0LWxpc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiByb3dTdHlsZXMge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbnAsXHJcbmRpdiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5lY28tbmV3c19saXN0LXZpZXctd3JwIHtcclxuICB3aWR0aDogNTQwcHg7XHJcbiAgaGVpZ2h0OiAxOTJweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMTJweCByZ2JhKDI3LCA1MSwgMzgsIDAuMTUpO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTJweCByZ2JhKDI3LCA1MSwgMzgsIDAuMTUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uZWNvLW5ld3NfbGlzdC1pbWcge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5lY28tbmV3c19saXN0LXRhZyB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uZWNvLW5ld3NfbGlzdC1jb250ZW50IHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHB4IGF1dG8gMjBweDtcclxuICByb3ctZ2FwOiA4cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZWNvLW5ld3NfbGlzdC1jb250ZW50LXRpdGxlIHAge1xyXG4gIGhlaWdodDogMjhweDtcclxufVxyXG5cclxuLmVjby1uZXdzX2xpc3QtY29udGVudC10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeS1mb250KTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHZhcigtLXF1YXRlcm5hcnktZGFyay1ncmV5KTtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbi5lY28tbmV3c19saXN0LWF1dG9ycyB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcclxuICBmb250LXNpemU6IDEzLjlweDtcclxuICBsaW5lLWhlaWdodDogMjFweDtcclxuICBjb2xvcjogdmFyKC0tdGVydGlhcnktZ3JleSk7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICBvcGFjaXR5OiAwLjY7XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZWNvLW5ld3NfZGF0YS10ZXh0LWRhdGUge1xyXG4gIG1pbi13aWR0aDogOTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTFweDtcclxuICB9XHJcbn1cclxuXHJcbi5lY28tbmV3c19wZXJzb24gaW1nIHtcclxuICB3aWR0aDogMTFweDtcclxuICBoZWlnaHQ6IDEwLjVweDtcclxufVxyXG5cclxuLmVjby1uZXdzX2xpc3QtY29udGVudC10ZXh0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5lY28tbmV3c19saXN0LWltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuZWNvLW5ld3NfbGlzdC12aWV3LXdycCB7XHJcbiAgICBoZWlnaHQ6IDIwNHB4O1xyXG4gICAgd2lkdGg6IDcyMHB4O1xyXG4gICAgZGlzcGxheTogLW1zLWdyaWQ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgLW1zLWdyaWQtY29sdW1uczogMjA0cHggYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjA0cHggYXV0bztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAuZWNvLW5ld3NfbGlzdC12aWV3LXdycCB7XHJcbiAgICBoZWlnaHQ6IDIwNHB4O1xyXG4gICAgd2lkdGg6IDk2MHB4O1xyXG4gICAgLW1zLWdyaWQtY29sdW1uczogMzU5cHggYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzU5cHggYXV0bztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAuZWNvLW5ld3NfbGlzdC12aWV3LXdycCB7XHJcbiAgICB3aWR0aDogMTE0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmVjby1uZXdzX2xpc3QtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDIwNHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHB4IDk2cHggMjBweDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB9XHJcblxyXG4gIC5lY28tbmV3c19saXN0LWltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG4uZm91ci1yb3cge1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogNDtcclxuXHJcbiAgQGluY2x1ZGUgcm93U3R5bGVzO1xyXG59XHJcblxyXG4udHJlZS1yb3cge1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuXHJcbiAgQGluY2x1ZGUgcm93U3R5bGVzO1xyXG59XHJcblxyXG4udHdvLXJvdyB7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG5cclxuICBAaW5jbHVkZSByb3dTdHlsZXM7XHJcbn1cclxuXHJcbi5vbmUtcm93IHtcclxuICBAaW5jbHVkZSByb3dTdHlsZXM7XHJcblxyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxufVxyXG4iLCJwLFxuZGl2IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZWNvLW5ld3NfbGlzdC12aWV3LXdycCB7XG4gIHdpZHRoOiA1NDBweDtcbiAgaGVpZ2h0OiAxOTJweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDEycHggcmdiYSgyNywgNTEsIDM4LCAwLjE1KTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IHJnYmEoMjcsIDUxLCAzOCwgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmVjby1uZXdzX2xpc3QtaW1nIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmVjby1uZXdzX2xpc3QtdGFnIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uZWNvLW5ld3NfbGlzdC1jb250ZW50IHtcbiAgcGFkZGluZzogMjRweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHB4IGF1dG8gMjBweDtcbiAgcm93LWdhcDogOHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5lY28tbmV3c19saXN0LWNvbnRlbnQtdGl0bGUgcCB7XG4gIGhlaWdodDogMjhweDtcbn1cblxuLmVjby1uZXdzX2xpc3QtY29udGVudC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tcXVhdGVybmFyeS1kYXJrLWdyZXkpO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5lY28tbmV3c19saXN0LWF1dG9ycyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIGZvbnQtc2l6ZTogMTMuOXB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5LWdyZXkpO1xuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xuICBvcGFjaXR5OiAwLjY7XG59XG4uZWNvLW5ld3NfbGlzdC1hdXRvcnMgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uZWNvLW5ld3NfbGlzdC1hdXRvcnMgcCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVjby1uZXdzX2RhdGEtdGV4dC1kYXRlIHtcbiAgbWluLXdpZHRoOiA5NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uZWNvLW5ld3NfZGF0YS10ZXh0LWRhdGUgaW1nIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTFweDtcbn1cblxuLmVjby1uZXdzX3BlcnNvbiBpbWcge1xuICB3aWR0aDogMTFweDtcbiAgaGVpZ2h0OiAxMC41cHg7XG59XG5cbi5lY28tbmV3c19saXN0LWNvbnRlbnQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmVjby1uZXdzX2xpc3QtaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmVjby1uZXdzX2xpc3Qtdmlldy13cnAge1xuICAgIGhlaWdodDogMjA0cHg7XG4gICAgd2lkdGg6IDcyMHB4O1xuICAgIGRpc3BsYXk6IC1tcy1ncmlkO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLW1zLWdyaWQtY29sdW1uczogMjA0cHggYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwNHB4IGF1dG87XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmVjby1uZXdzX2xpc3Qtdmlldy13cnAge1xuICAgIGhlaWdodDogMjA0cHg7XG4gICAgd2lkdGg6IDk2MHB4O1xuICAgIC1tcy1ncmlkLWNvbHVtbnM6IDM1OXB4IGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNTlweCBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gIC5lY28tbmV3c19saXN0LXZpZXctd3JwIHtcbiAgICB3aWR0aDogMTE0MHB4O1xuICB9XG5cbiAgLmVjby1uZXdzX2xpc3QtY29udGVudCB7XG4gICAgaGVpZ2h0OiAyMDRweDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcHggOTZweCAyMHB4O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgfVxuXG4gIC5lY28tbmV3c19saXN0LWltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxufVxuLmZvdXItcm93IHtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiA0O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4udHJlZS1yb3cge1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi50d28tcm93IHtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4ub25lLXJvdyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbn0iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewsListListViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-news-list-list-view',
          templateUrl: './news-list-list-view.component.html',
          styleUrls: ['./news-list-list-view.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }];
      }, {
        ecoNewsModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        titleHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['titleHeight', {
            "static": true
          }]
        }],
        textHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['textHeight', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/component/eco-news/components/news-list/news-list.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/main/component/eco-news/components/news-list/news-list.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: NewsListComponent */

  /***/
  function srcAppMainComponentEcoNewsComponentsNewsListNewsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsListComponent", function () {
      return NewsListComponent;
    });
    /* harmony import */


    var _config_breakpoints_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../../config/breakpoints.constants */
    "./src/app/main/config/breakpoints.constants.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _eco_news_service_eco_news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @eco-news-service/eco-news.service */
    "./src/app/main/component/eco-news/services/eco-news.service.ts");
    /* harmony import */


    var _auth_service_user_own_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @auth-service/user-own-auth.service */
    "./src/app/main/service/auth/user-own-auth.service.ts");
    /* harmony import */


    var _global_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @global-errors/mat-snack-bar/mat-snack-bar.component */
    "./src/app/main/component/errors/mat-snack-bar/mat-snack-bar.component.ts");
    /* harmony import */


    var _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @global-service/localstorage/local-storage.service */
    "./src/app/main/service/localstorage/local-storage.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_tag_filter_tag_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/components/tag-filter/tag-filter.component */
    "./src/app/main/component/shared/components/tag-filter/tag-filter.component.ts");
    /* harmony import */


    var _remaining_count_remaining_count_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../remaining-count/remaining-count.component */
    "./src/app/main/component/eco-news/components/remaining-count/remaining-count.component.ts");
    /* harmony import */


    var _change_view_button_change_view_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./change-view-button/change-view-button.component */
    "./src/app/main/component/eco-news/components/news-list/change-view-button/change-view-button.component.ts");
    /* harmony import */


    var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-infinite-scroll */
    "./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _news_list_gallery_view_news_list_gallery_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./news-list-gallery-view/news-list-gallery-view.component */
    "./src/app/main/component/eco-news/components/news-list/news-list-gallery-view/news-list-gallery-view.component.ts");
    /* harmony import */


    var _news_list_list_view_news_list_list_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./news-list-list-view/news-list-list-view.component */
    "./src/app/main/component/eco-news/components/news-list/news-list-list-view/news-list-list-view.component.ts");
    /* harmony import */


    var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../../shared/spinner/spinner.component */
    "./src/app/shared/spinner/spinner.component.ts");
    /* harmony import */


    var _shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../shared/components/no-data/no-data.component */
    "./src/app/main/component/shared/components/no-data/no-data.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = function _c0() {
      return ["create-news"];
    };

    function NewsListComponent_a_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "homepage.eco-news.create"));
      }
    }

    function NewsListComponent_ul_16_li_1_app_news_list_gallery_view_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-news-list-gallery-view", 23);
      }

      if (rf & 2) {
        var data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ecoNewsModel", data_r5);
      }
    }

    function NewsListComponent_ul_16_li_1_app_news_list_list_view_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-news-list-list-view", 23);
      }

      if (rf & 2) {
        var data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ecoNewsModel", data_r5);
      }
    }

    var _c1 = function _c1(a0, a1) {
      return {
        "gallery-view-li-active": a0,
        "list-view-li-active": a1
      };
    };

    var _c2 = function _c2(a1) {
      return ["/news", a1];
    };

    function NewsListComponent_ul_16_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NewsListComponent_ul_16_li_1_app_news_list_gallery_view_1_Template, 1, 1, "app-news-list-gallery-view", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NewsListComponent_ul_16_li_1_app_news_list_list_view_2_Template, 1, 1, "app-news-list-list-view", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r5 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx_r4.view, !ctx_r4.view))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c2, data_r5.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.view);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.view);
      }
    }

    var _c3 = function _c3(a0) {
      return {
        "gallery-view-active": a0
      };
    };

    function NewsListComponent_ul_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NewsListComponent_ul_16_li_1_Template, 3, 9, "li", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c3, ctx_r1.view));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.elements);
      }
    }

    function NewsListComponent_app_spinner_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-spinner");
      }
    }

    function NewsListComponent_app_no_data_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-no-data", 24);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", "homepage.eco-news.empty-state.no-news-advice")("title", "homepage.eco-news.empty-state.no-news");
      }
    }

    var NewsListComponent = /*#__PURE__*/function () {
      function NewsListComponent(ecoNewsService, userOwnAuthService, snackBar, localStorageService) {
        _classCallCheck(this, NewsListComponent);

        this.ecoNewsService = ecoNewsService;
        this.userOwnAuthService = userOwnAuthService;
        this.snackBar = snackBar;
        this.localStorageService = localStorageService;
        this.remaining = 0;
        this.elementsArePresent = true;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
      }

      _createClass(NewsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.onResize();
          this.setDefaultNumberOfNews(12);
          this.setNullList();
          this.checkUserSingIn();
          this.userOwnAuthService.getDataFromLocalStorage();
          this.scroll = false;
          this.setLocalizedTags();
        }
      }, {
        key: "setLocalizedTags",
        value: function setLocalizedTags() {
          var _this39 = this;

          this.localStorageService.languageBehaviourSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(function () {
            return _this39.getAllTags();
          });
        }
      }, {
        key: "getAllTags",
        value: function getAllTags() {
          var _this40 = this;

          this.ecoNewsService.getAllPresentTags().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (tagsArray) {
            return _this40.tagList = tagsArray.map(function (tag) {
              return tag.name;
            });
          });
        }
      }, {
        key: "onResize",
        value: function onResize() {
          this.getSessionStorageView();
          this.windowSize = window.innerWidth;
          var isGalleryView = !!this.gallery;
          this.view = this.windowSize > _config_breakpoints_constants__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].tabletLow ? true : isGalleryView;
        }
      }, {
        key: "getSessionStorageView",
        value: function getSessionStorageView() {
          var view = sessionStorage.getItem('viewGallery');

          if (view) {
            this.gallery = JSON.parse(view);
          }
        }
      }, {
        key: "onScroll",
        value: function onScroll() {
          this.scroll = true;
          this.addElemsToCurrentList();
        }
      }, {
        key: "changeView",
        value: function changeView(event) {
          this.view = event;
        }
      }, {
        key: "getFilterData",
        value: function getFilterData(value) {
          if (this.tagsList !== value) {
            this.setNullList();
            this.tagsList = value;
          }

          this.addElemsToCurrentList();
        }
      }, {
        key: "checkUserSingIn",
        value: function checkUserSingIn() {
          var _this41 = this;

          this.userOwnAuthService.credentialDataSubject.subscribe(function (data) {
            return _this41.isLoggedIn = data && data.userId;
          });
        }
      }, {
        key: "addElemsToCurrentList",
        value: function addElemsToCurrentList() {
          var _this42 = this;

          if (this.tagsList) {
            this.ecoNewsService.getNewsListByTags(this.currentPage, this.numberOfNews, this.tagsList).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              _this42.snackBar.openSnackBar('error');

              return error;
            })).subscribe(function (list) {
              return _this42.setList(list);
            });
          } else {
            this.ecoNewsService.getEcoNewsListByPage(this.currentPage, this.numberOfNews).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              _this42.snackBar.openSnackBar('error');

              return err;
            })).subscribe(function (list) {
              return _this42.setList(list);
            });
          }

          this.changeCurrentPage();
        }
      }, {
        key: "setList",
        value: function setList(data) {
          this.remaining = data.totalElements;
          this.elements = this.scroll ? [].concat(_toConsumableArray(this.elements), _toConsumableArray(data.page)) : _toConsumableArray(data.page);
          this.elementsArePresent = this.elements.length < data.totalElements;
        }
      }, {
        key: "setNullList",
        value: function setNullList() {
          this.currentPage = 0;
          this.elements = [];
          this.elementsArePresent = true;
        }
      }, {
        key: "setDefaultNumberOfNews",
        value: function setDefaultNumberOfNews(quantity) {
          this.numberOfNews = quantity;
        }
      }, {
        key: "changeCurrentPage",
        value: function changeCurrentPage() {
          this.currentPage += 1;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyed$.next(true);
          this.destroyed$.complete();
        }
      }]);

      return NewsListComponent;
    }();

    NewsListComponent.ɵfac = function NewsListComponent_Factory(t) {
      return new (t || NewsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_eco_news_service_eco_news_service__WEBPACK_IMPORTED_MODULE_4__["EcoNewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service_user_own_auth_service__WEBPACK_IMPORTED_MODULE_5__["UserOwnAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_global_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]));
    };

    NewsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NewsListComponent,
      selectors: [["app-news-list"]],
      decls: 20,
      vars: 14,
      consts: [["role", "main", "id", "main-content"], [1, "container"], [3, "resize"], [1, "cont"], [1, "main-header"], [3, "routerLink", 4, "ngIf"], [1, "flex-container"], [3, "header", "storageKey", "tagsListData", "tagsList"], [1, "main-wrapper"], [3, "remainingCount"], [3, "gallery", "view"], [1, "list-wrapper"], ["class", "list", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [3, "text", "title", 4, "ngIf"], ["infiniteScroll", "", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrolled"], [3, "routerLink"], ["id", "create-button", 1, "secondary-global-button"], ["id", "create-button-text"], [1, "list", 3, "ngClass"], [3, "ngClass", "routerLink", 4, "ngFor", "ngForOf"], [3, "ngClass", "routerLink"], [3, "ecoNewsModel", 4, "ngIf"], [3, "ecoNewsModel"], [3, "text", "title"]],
      template: function NewsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function NewsListComponent_Template_div_resize_2_listener() {
            return ctx.onResize();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NewsListComponent_a_7_Template, 5, 5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "app-tag-filter", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tagsList", function NewsListComponent_Template_app_tag_filter_tagsList_10_listener($event) {
            return ctx.getFilterData($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-remaining-count", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "app-change-view-button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("view", function NewsListComponent_Template_app_change_view_button_view_14_listener($event) {
            return ctx.changeView($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, NewsListComponent_ul_16_Template, 2, 4, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NewsListComponent_app_spinner_17_Template, 1, 0, "app-spinner", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, NewsListComponent_app_no_data_18_Template, 1, 2, "app-no-data", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scrolled", function NewsListComponent_Template_div_scrolled_19_listener() {
            return ctx.onScroll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 12, "homepage.eco-news.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", "homepage.eco-news.filter")("storageKey", "EcoNews-filter")("tagsListData", ctx.tagList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("remainingCount", ctx.remaining);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("gallery", ctx.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.remaining);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.elementsArePresent);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.elementsArePresent && ctx.remaining === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("infiniteScrollDistance", 0)("infiniteScrollThrottle", 500);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_components_tag_filter_tag_filter_component__WEBPACK_IMPORTED_MODULE_9__["TagFilterComponent"], _remaining_count_remaining_count_component__WEBPACK_IMPORTED_MODULE_10__["RemainingCountComponent"], _change_view_button_change_view_button_component__WEBPACK_IMPORTED_MODULE_11__["ChangeViewButtonComponent"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__["InfiniteScrollDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLink"], _news_list_gallery_view_news_list_gallery_view_component__WEBPACK_IMPORTED_MODULE_14__["NewsListGalleryViewComponent"], _news_list_list_view_news_list_list_view_component__WEBPACK_IMPORTED_MODULE_15__["NewsListListViewComponent"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__["SpinnerComponent"], _shared_components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_17__["NoDataComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslatePipe"]],
      styles: [".cont[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\ndiv[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 4px 0 18px 0;\n}\n\n.main-header[_ngcontent-%COMP%] {\n  font-family: var(--secondary-font);\n  font-size: 55px;\n  line-height: 48px;\n  width: 256px;\n  white-space: nowrap;\n  font-weight: 500;\n  margin: 0 0 34px -3px;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.app-create-news[_ngcontent-%COMP%] {\n  top: -10px;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 42px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.list-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.list-wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n}\n\n.gallery-view-active[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 359px);\n  grid-gap: 32px;\n}\n\n.list-view-li-active[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n\nli[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n#create-button[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  line-height: 16px;\n  width: 183px;\n  min-height: 40px;\n  padding: 8px 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#create-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 16px;\n  white-space: nowrap;\n}\n\n@media screen and (max-width: 1199px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin: 0 3%;\n  }\n\n  .gallery-view-active[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 299px);\n  }\n}\n\n@media screen and (max-width: 991px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin: 0 2.43%;\n  }\n\n  .gallery-view-active[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 353px);\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin: 0 1.95%;\n  }\n\n  .gallery-view-active[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 258px);\n  }\n}\n\n@media screen and (max-width: 575px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin: 0 2.4%;\n  }\n\n  .main-header[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 32px;\n  }\n\n  .gallery-view-active[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, 288px);\n    grid-gap: 24px;\n  }\n\n  #create-button[_ngcontent-%COMP%] {\n    width: 122px;\n    min-height: 32px;\n    padding: 0;\n  }\n  #create-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 12px;\n  }\n}\n\n@media (min-width: 576px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0;\n    max-width: 96%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvZWNvLW5ld3MvY29tcG9uZW50cy9uZXdzLWxpc3QvRDpcXFNvZnRTZXJ2ZV9BY2FkZW15XFxHcmVlbkNpdHlcXGdoLXBhZ2VzXFxHcmVlbkNpdHlDbGllbnQvc3JjXFxhcHBcXG1haW5cXGNvbXBvbmVudFxcZWNvLW5ld3NcXGNvbXBvbmVudHNcXG5ld3MtbGlzdFxcbmV3cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbXBvbmVudC9lY28tbmV3cy9jb21wb25lbnRzL25ld3MtbGlzdC9uZXdzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FER0E7RUFDRSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFO0lBQ0UsWUFBQTtFQ0FGOztFREdBO0lBQ0UsdUNBQUE7RUNBRjtBQUNGOztBREdBO0VBQ0U7SUFDRSxlQUFBO0VDREY7O0VESUE7SUFDRSx1Q0FBQTtFQ0RGO0FBQ0Y7O0FESUE7RUFDRTtJQUNFLGVBQUE7RUNGRjs7RURLQTtJQUNFLHVDQUFBO0VDRkY7QUFDRjs7QURLQTtFQUNFO0lBQ0UsY0FBQTtFQ0hGOztFRE1BO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VDSEY7O0VETUE7SUFDRSx1Q0FBQTtJQUNBLGNBQUE7RUNIRjs7RURNQTtJQUNFLFlBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7RUNIRjtFREtFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VDSEo7QUFDRjs7QURPQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGNBQUE7RUNMRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnQvZWNvLW5ld3MvY29tcG9uZW50cy9uZXdzLWxpc3QvbmV3cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5kaXYgaHIge1xyXG4gIG1hcmdpbjogNHB4IDAgMThweCAwO1xyXG59XHJcblxyXG4ubWFpbi1oZWFkZXIge1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XHJcbiAgZm9udC1zaXplOiA1NXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gIHdpZHRoOiAyNTZweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwIDAgMzRweCAtM3B4O1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uYXBwLWNyZWF0ZS1uZXdzIHtcclxuICB0b3A6IC0xMHB4O1xyXG59XHJcblxyXG4ubWFpbi13cmFwcGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiA0MnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubGlzdC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5saXN0IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uZ2FsbGVyeS12aWV3LWFjdGl2ZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzNTlweCk7XHJcbiAgZ3JpZC1nYXA6IDMycHg7XHJcbn1cclxuXHJcbi5saXN0LXZpZXctbGktYWN0aXZlIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG59XHJcblxyXG5saTpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI2NyZWF0ZS1idXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICB3aWR0aDogMTgzcHg7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICBwYWRkaW5nOiA4cHggNDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjcmVhdGUtYnV0dG9uIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTZweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDAgMyU7XHJcbiAgfVxyXG5cclxuICAuZ2FsbGVyeS12aWV3LWFjdGl2ZSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAyOTlweCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC53cmFwcGVyIHtcclxuICAgIG1hcmdpbjogMCAyLjQzJTtcclxuICB9XHJcblxyXG4gIC5nYWxsZXJ5LXZpZXctYWN0aXZlIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDM1M3B4KTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAwIDEuOTUlO1xyXG4gIH1cclxuXHJcbiAgLmdhbGxlcnktdmlldy1hY3RpdmUge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMjU4cHgpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDAgMi40JTtcclxuICB9XHJcblxyXG4gIC5tYWluLWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICB9XHJcblxyXG4gIC5nYWxsZXJ5LXZpZXctYWN0aXZlIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDI4OHB4KTtcclxuICAgIGdyaWQtZ2FwOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgI2NyZWF0ZS1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEyMnB4O1xyXG4gICAgbWluLWhlaWdodDogMzJweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXgtd2lkdGg6IDk2JTtcclxuICB9XHJcbn1cclxuIiwiLmNvbnQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5kaXYgaHIge1xuICBtYXJnaW46IDRweCAwIDE4cHggMDtcbn1cblxuLm1haW4taGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXNlY29uZGFyeS1mb250KTtcbiAgZm9udC1zaXplOiA1NXB4O1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgd2lkdGg6IDI1NnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDAgMCAzNHB4IC0zcHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmFwcC1jcmVhdGUtbmV3cyB7XG4gIHRvcDogLTEwcHg7XG59XG5cbi5tYWluLXdyYXBwZXIge1xuICBtYXJnaW4tYm90dG9tOiA0MnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5saXN0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5saXN0LXdyYXBwZXIgLmxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5nYWxsZXJ5LXZpZXctYWN0aXZlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzU5cHgpO1xuICBncmlkLWdhcDogMzJweDtcbn1cblxuLmxpc3Qtdmlldy1saS1hY3RpdmUge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuXG5saTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiNjcmVhdGUtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE4M3B4O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiA4cHggNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNjcmVhdGUtYnV0dG9uIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgLndyYXBwZXIge1xuICAgIG1hcmdpbjogMCAzJTtcbiAgfVxuXG4gIC5nYWxsZXJ5LXZpZXctYWN0aXZlIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAyOTlweCk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBtYXJnaW46IDAgMi40MyU7XG4gIH1cblxuICAuZ2FsbGVyeS12aWV3LWFjdGl2ZSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMzUzcHgpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAud3JhcHBlciB7XG4gICAgbWFyZ2luOiAwIDEuOTUlO1xuICB9XG5cbiAgLmdhbGxlcnktdmlldy1hY3RpdmUge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDI1OHB4KTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLndyYXBwZXIge1xuICAgIG1hcmdpbjogMCAyLjQlO1xuICB9XG5cbiAgLm1haW4taGVhZGVyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIH1cblxuICAuZ2FsbGVyeS12aWV3LWFjdGl2ZSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMjg4cHgpO1xuICAgIGdyaWQtZ2FwOiAyNHB4O1xuICB9XG5cbiAgI2NyZWF0ZS1idXR0b24ge1xuICAgIHdpZHRoOiAxMjJweDtcbiAgICBtaW4taGVpZ2h0OiAzMnB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgI2NyZWF0ZS1idXR0b24gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXgtd2lkdGg6IDk2JTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-news-list',
          templateUrl: './news-list.component.html',
          styleUrls: ['./news-list.component.scss']
        }]
      }], function () {
        return [{
          type: _eco_news_service_eco_news_service__WEBPACK_IMPORTED_MODULE_4__["EcoNewsService"]
        }, {
          type: _auth_service_user_own_auth_service__WEBPACK_IMPORTED_MODULE_5__["UserOwnAuthService"]
        }, {
          type: _global_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarComponent"]
        }, {
          type: _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/component/eco-news/components/news-preview-page/news-preview-page.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/main/component/eco-news/components/news-preview-page/news-preview-page.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: NewsPreviewPageComponent */

  /***/
  function srcAppMainComponentEcoNewsComponentsNewsPreviewPageNewsPreviewPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsPreviewPageComponent", function () {
      return NewsPreviewPageComponent;
    });
    /* harmony import */


    var _image_pathes_single_news_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../../image-pathes/single-news-images */
    "./src/app/main/image-pathes/single-news-images.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _create_edit_news_action_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../create-edit-news/action.constants */
    "./src/app/main/component/eco-news/components/create-edit-news/action.constants.ts");
    /* harmony import */


    var _eco_news_service_create_eco_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @eco-news-service/create-eco-news.service */
    "./src/app/main/component/eco-news/services/create-eco-news.service.ts");
    /* harmony import */


    var _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @global-service/localstorage/local-storage.service */
    "./src/app/main/service/localstorage/local-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _post_news_loader_post_news_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../post-news-loader/post-news-loader.component */
    "./src/app/main/component/eco-news/components/post-news-loader/post-news-loader.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function NewsPreviewPageComponent_app_post_news_loader_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-post-news-loader");
      }
    }

    function NewsPreviewPageComponent_div_1_button_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r2.attributes.btnCaption), " ");
      }
    }

    function NewsPreviewPageComponent_div_1_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "eco-news-preview.tags." + tag_r5.toLowerCase()), " ");
      }
    }

    function NewsPreviewPageComponent_div_1_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "eco-news-preview.news-source"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.previewItem.value.source, " ");
      }
    }

    var _c0 = function _c0() {
      return ["/news", "create-news"];
    };

    function NewsPreviewPageComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewsPreviewPageComponent_div_1_Template_div_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r6.isBackToEdit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NewsPreviewPageComponent_div_1_Template_form_ngSubmit_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r8.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NewsPreviewPageComponent_div_1_button_11_Template, 3, 3, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, NewsPreviewPageComponent_div_1_div_16_Template, 3, 3, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, NewsPreviewPageComponent_div_1_div_39_Template, 6, 4, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.images.arrowLeft, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 17, "eco-news-preview.back-button"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.previewItem.valid && ctx_r1.previewItem.value.tags.length !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 19, ctx_r1.attributes.title));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.previewItem.value.tags);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.previewItem.value.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](24, 21, ctx_r1.actualDate, "mediumDate"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.images.ellipse, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 24, "eco-news-preview.author"), " ", ctx_r1.userName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.getImagePath(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.images.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.images.linkedIn, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.images.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.previewItem.value.content, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.previewItem.value.source);
      }
    }

    var NewsPreviewPageComponent = /*#__PURE__*/function () {
      function NewsPreviewPageComponent(createEcoNewsService, localStorageService, router, config) {
        _classCallCheck(this, NewsPreviewPageComponent);

        this.createEcoNewsService = createEcoNewsService;
        this.localStorageService = localStorageService;
        this.router = router;
        this.config = config;
        this.images = _image_pathes_single_news_images__WEBPACK_IMPORTED_MODULE_0__["singleNewsImages"];
        this.actualDate = new Date();
        this.isPosting = false;
      }

      _createClass(NewsPreviewPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPreviewData();
          this.bindUserName();

          if (this.createEcoNewsService.getNewsId()) {
            this.newsId = this.createEcoNewsService.getNewsId();
            this.attributes = this.config.edit;
            this.onSubmit = this.editNews;
          } else {
            this.attributes = this.config.create;
            this.onSubmit = this.postNewsItem;
          }
        }
      }, {
        key: "isBackToEdit",
        value: function isBackToEdit() {
          var _this43 = this;

          this.createEcoNewsService.isBackToEditing = true;
          setTimeout(function () {
            _this43.createEcoNewsService.isBackToEditing = false;
          }, 1000);
        }
      }, {
        key: "bindUserName",
        value: function bindUserName() {
          var _this44 = this;

          this.userNameSub = this.localStorageService.firstNameBehaviourSubject.subscribe(function (name) {
            _this44.userName = name;
          });
        }
      }, {
        key: "getPreviewData",
        value: function getPreviewData() {
          this.previewItem = this.createEcoNewsService.getFormData();
        }
      }, {
        key: "postNewsItem",
        value: function postNewsItem() {
          var _this45 = this;

          this.isPosting = true;
          this.createEcoNewsService.sendFormData(this.previewItem).subscribe(function () {
            _this45.isPosting = false;

            _this45.router.navigate(['/news']);
          });
        }
      }, {
        key: "editNews",
        value: function editNews() {
          var _this46 = this;

          var dataToEdit = Object.assign(Object.assign({}, this.previewItem.value), {
            id: this.newsId
          });
          this.createEcoNewsService.editNews(dataToEdit).subscribe(function () {
            _this46.isPosting = false;

            _this46.router.navigate(['/news']);
          });
        }
      }, {
        key: "getImagePath",
        value: function getImagePath() {
          if (this.previewItem.value.image) {
            return this.previewItem.value.image;
          }

          return this.images.largeImage;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userNameSub.unsubscribe();
        }
      }]);

      return NewsPreviewPageComponent;
    }();

    NewsPreviewPageComponent.ɵfac = function NewsPreviewPageComponent_Factory(t) {
      return new (t || NewsPreviewPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_eco_news_service_create_eco_news_service__WEBPACK_IMPORTED_MODULE_3__["CreateEcoNewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_create_edit_news_action_constants__WEBPACK_IMPORTED_MODULE_2__["ACTION_TOKEN"]));
    };

    NewsPreviewPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NewsPreviewPageComponent,
      selectors: [["app-news-preview-page"]],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], ["class", "wrapper", 4, "ngIf"], [1, "wrapper"], [1, "top-elements"], [1, "back-button"], [1, "button-link", 3, "routerLink"], [1, "button-content"], [1, "button-arrow"], ["alt", "arrow", 1, "button-arrow-img", 3, "src"], [1, "button-text", 3, "click"], [1, "submit-form", 3, "ngSubmit"], ["type", "submit", "class", "primary-global-button", 4, "ngIf"], [1, "create-news-text"], [1, "tags"], ["class", "tags-item", 4, "ngFor", "ngForOf"], [1, "news-content"], [1, "news-title-container"], [1, "news-title", "word-wrap"], [1, "news-info"], [1, "news-info-date"], [1, "news-info-dot"], ["alt", "dot", 3, "src"], [1, "news-info-author"], ["alt", "news-image", 1, "news-image-img", 3, "src"], [1, "news-text-container"], [1, "news-links-images"], ["alt", "twitter", 1, "news-links-img", 3, "src"], ["alt", "linkedin", 1, "news-links-img", 3, "src"], ["alt", "facebook", 1, "news-links-img", 3, "src"], [1, "news-text"], [1, "news-text-content", "word-wrap"], ["class", "source-field", 4, "ngIf"], ["type", "submit", 1, "primary-global-button"], [1, "tags-item"], [1, "source-field"], [1, "source-title"], [1, "source-text", "word-wrap"]],
      template: function NewsPreviewPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NewsPreviewPageComponent_app_post_news_loader_0_Template, 1, 0, "app-post-news-loader", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NewsPreviewPageComponent_div_1_Template, 40, 27, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPosting);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isPosting);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _post_news_loader_post_news_loader_component__WEBPACK_IMPORTED_MODULE_7__["PostNewsLoaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
      styles: [".wrapper[_ngcontent-%COMP%] {\n  margin: 0 10%;\n}\n\n.word-wrap[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.top-elements[_ngcontent-%COMP%], .button-content[_ngcontent-%COMP%], .news-info[_ngcontent-%COMP%], .news-links-images[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.news-info[_ngcontent-%COMP%], .news-text[_ngcontent-%COMP%], .publish[_ngcontent-%COMP%], .back-button[_ngcontent-%COMP%], .tags-item[_ngcontent-%COMP%] {\n  font-family: var(--primary-font);\n}\n\n.top-elements[_ngcontent-%COMP%] {\n  margin-top: 54px;\n  justify-content: space-between;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 19px;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n\n.button-link[_ngcontent-%COMP%] {\n  color: var(--primary-dark-grey);\n}\n\n.button-arrow[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n\n.primary-global-button[_ngcontent-%COMP%] {\n  padding: 16px 40px;\n  border: 1px solid var(--primary-green);\n  border-radius: 3px;\n  outline: none;\n}\n\n.create-news-text[_ngcontent-%COMP%] {\n  font-family: var(--secondary-font);\n  font-weight: 500;\n  font-size: 3rem;\n  line-height: 48px;\n  color: var(--secondary-dark-grey);\n}\n\n.tags[_ngcontent-%COMP%], .news-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.tags[_ngcontent-%COMP%] {\n  padding: 48px 0 24px 0;\n  display: flex;\n  justify-content: center;\n}\n\n.tags-item[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 16px;\n  color: var(--tertiary-grey);\n  text-transform: capitalize;\n  margin: 0 8px 0;\n  padding: 8px 16px;\n  border: 1px solid var(--secondary-grey);\n  border-radius: 25px;\n}\n\n.news-content[_ngcontent-%COMP%] {\n  margin: 0 7.5%;\n}\n\n.news-title-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.news-title[_ngcontent-%COMP%] {\n  margin: 0 6.8% 24px;\n  color: var(--secondary-dark-grey);\n  font-weight: 500;\n  font-size: 3rem;\n  line-height: 60px;\n  font-family: var(--secondary-font);\n}\n\n.news-info[_ngcontent-%COMP%] {\n  padding: 0 0 30px 0;\n  justify-content: center;\n}\n\n.news-info-date[_ngcontent-%COMP%], .news-info-author[_ngcontent-%COMP%] {\n  color: var(--primary-dark-grey);\n}\n\n.news-info-dot[_ngcontent-%COMP%] {\n  padding: 0 32px 0;\n}\n\n.news-links-images[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.news-links-img[_ngcontent-%COMP%] {\n  margin: 9px 0;\n}\n\n.news-image-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.news-text-container[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 69px 0 0;\n}\n\n.news-text[_ngcontent-%COMP%] {\n  margin-left: 74px;\n  color: #000;\n  text-align: left;\n  width: 100%;\n}\n\n.news-text-content[_ngcontent-%COMP%] {\n  width: 90%;\n  font-size: 18px;\n  line-height: 32px;\n  white-space: pre-wrap;\n}\n\n.source-field[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  display: flex;\n}\n\n.source-title[_ngcontent-%COMP%] {\n  font-family: var(--primary-font);\n  font-size: 24px;\n  line-height: 40px;\n  color: var(--primary-dark-grey);\n  mix-blend-mode: normal;\n  margin-right: 8px;\n}\n\n.source-text[_ngcontent-%COMP%] {\n  font-family: var(--primary-font);\n  font-size: 18px;\n  line-height: 32px;\n  color: #000;\n  margin-top: 6px;\n}\n\n@media screen and (max-width: 1024px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin: 0 3%;\n  }\n\n  .news-title[_ngcontent-%COMP%] {\n    margin: 0 8% 24px;\n  }\n\n  .news-content[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin: 0 1.8%;\n  }\n\n  .news-title[_ngcontent-%COMP%] {\n    margin: 0 0 24px;\n  }\n\n  .news-links-img[_ngcontent-%COMP%] {\n    margin: 0 32px 0 0;\n  }\n\n  .news-text-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    padding: 0;\n  }\n\n  .news-links-images[_ngcontent-%COMP%] {\n    flex-direction: row;\n    margin: 51px auto;\n    width: 136px;\n  }\n\n  .news-text[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  .news-text-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin: 0 2.4%;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin: 0 5%;\n  }\n\n  .back-button[_ngcontent-%COMP%] {\n    margin-bottom: 36px;\n    display: flex;\n    justify-content: center;\n  }\n\n  .submit-form[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 48px;\n  }\n\n  .primary-global-button[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 48px;\n  }\n\n  .top-elements[_ngcontent-%COMP%], .news-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .create-news-text[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 32px;\n    margin-top: 64px;\n  }\n\n  .source-field[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .news-info[_ngcontent-%COMP%], .news-text-content[_ngcontent-%COMP%], .source-text[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 24px;\n  }\n\n  .source-text[_ngcontent-%COMP%] {\n    margin-top: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvZWNvLW5ld3MvY29tcG9uZW50cy9uZXdzLXByZXZpZXctcGFnZS9EOlxcU29mdFNlcnZlX0FjYWRlbXlcXEdyZWVuQ2l0eVxcZ2gtcGFnZXNcXEdyZWVuQ2l0eUNsaWVudC9zcmNcXGFwcFxcbWFpblxcY29tcG9uZW50XFxlY28tbmV3c1xcY29tcG9uZW50c1xcbmV3cy1wcmV2aWV3LXBhZ2VcXG5ld3MtcHJldmlldy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbXBvbmVudC9lY28tbmV3cy9jb21wb25lbnRzL25ld3MtcHJldmlldy1wYWdlL25ld3MtcHJldmlldy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTs7OztFQUlFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBOzs7OztFQUtFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtBQ0NGOztBREVBOztFQUVFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTs7RUFFRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLFlBQUE7RUNDRjs7RURFQTtJQUNFLGlCQUFBO0VDQ0Y7O0VERUE7SUFDRSxTQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFO0lBQ0UsY0FBQTtFQ0FGOztFREdBO0lBQ0UsZ0JBQUE7RUNBRjs7RURHQTtJQUNFLGtCQUFBO0VDQUY7O0VER0E7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsVUFBQTtFQ0FGOztFREdBO0lBQ0UsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7RUNBRjs7RURHQTtJQUNFLGNBQUE7RUNBRjs7RURHQTtJQUNFLFdBQUE7RUNBRjtBQUNGOztBREdBO0VBQ0U7SUFDRSxjQUFBO0VDREY7QUFDRjs7QURJQTtFQUNFO0lBQ0UsWUFBQTtFQ0ZGOztFREtBO0lBQ0UsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7RUNGRjs7RURLQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDRkY7O0VES0E7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQ0ZGOztFREtBOztJQUVFLHNCQUFBO0VDRkY7O0VES0E7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQ0ZGOztFREtBO0lBQ0Usc0JBQUE7RUNGRjs7RURLQTs7O0lBR0UsZUFBQTtJQUNBLGlCQUFBO0VDRkY7O0VES0E7SUFDRSxlQUFBO0VDRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29tcG9uZW50L2Vjby1uZXdzL2NvbXBvbmVudHMvbmV3cy1wcmV2aWV3LXBhZ2UvbmV3cy1wcmV2aWV3LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgbWFyZ2luOiAwIDEwJTtcclxufVxyXG5cclxuLndvcmQtd3JhcCB7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG5cclxuLnRvcC1lbGVtZW50cyxcclxuLmJ1dHRvbi1jb250ZW50LFxyXG4ubmV3cy1pbmZvLFxyXG4ubmV3cy1saW5rcy1pbWFnZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5ld3MtaW5mbyxcclxuLm5ld3MtdGV4dCxcclxuLnB1Ymxpc2gsXHJcbi5iYWNrLWJ1dHRvbixcclxuLnRhZ3MtaXRlbSB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbn1cclxuXHJcbi50b3AtZWxlbWVudHMge1xyXG4gIG1hcmdpbi10b3A6IDU0cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uYmFjay1idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYnV0dG9uLWxpbmsge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmstZ3JleSk7XHJcbn1cclxuXHJcbi5idXR0b24tYXJyb3cge1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG4ucHJpbWFyeS1nbG9iYWwtYnV0dG9uIHtcclxuICBwYWRkaW5nOiAxNnB4IDQwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmVlbik7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5jcmVhdGUtbmV3cy10ZXh0IHtcclxuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGFyay1ncmV5KTtcclxufVxyXG5cclxuLnRhZ3MsXHJcbi5uZXdzLWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRhZ3Mge1xyXG4gIHBhZGRpbmc6IDQ4cHggMCAyNHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRhZ3MtaXRlbSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1ncmV5KTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBtYXJnaW46IDAgOHB4IDA7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWdyZXkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi5uZXdzLWNvbnRlbnQge1xyXG4gIG1hcmdpbjogMCA3LjUlO1xyXG59XHJcblxyXG4ubmV3cy10aXRsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uZXdzLXRpdGxlIHtcclxuICBtYXJnaW46IDAgNi44JSAyNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGFyay1ncmV5KTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xyXG59XHJcblxyXG4ubmV3cy1pbmZvIHtcclxuICBwYWRkaW5nOiAwIDAgMzBweCAwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubmV3cy1pbmZvLWRhdGUsXHJcbi5uZXdzLWluZm8tYXV0aG9yIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrLWdyZXkpO1xyXG59XHJcblxyXG4ubmV3cy1pbmZvLWRvdCB7XHJcbiAgcGFkZGluZzogMCAzMnB4IDA7XHJcbn1cclxuXHJcbi5uZXdzLWxpbmtzLWltYWdlcyB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm5ld3MtbGlua3MtaW1nIHtcclxuICBtYXJnaW46IDlweCAwO1xyXG59XHJcblxyXG4ubmV3cy1pbWFnZS1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmV3cy10ZXh0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiA2OXB4IDAgMDtcclxufVxyXG5cclxuLm5ld3MtdGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDc0cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5ld3MtdGV4dC1jb250ZW50IHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuXHJcbi5zb3VyY2UtZmllbGQge1xyXG4gIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNvdXJjZS10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmstZ3JleSk7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLnNvdXJjZS10ZXh0IHtcclxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDAgMyU7XHJcbiAgfVxyXG5cclxuICAubmV3cy10aXRsZSB7XHJcbiAgICBtYXJnaW46IDAgOCUgMjRweDtcclxuICB9XHJcblxyXG4gIC5uZXdzLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDAgMS44JTtcclxuICB9XHJcblxyXG4gIC5uZXdzLXRpdGxlIHtcclxuICAgIG1hcmdpbjogMCAwIDI0cHg7XHJcbiAgfVxyXG5cclxuICAubmV3cy1saW5rcy1pbWcge1xyXG4gICAgbWFyZ2luOiAwIDMycHggMCAwO1xyXG4gIH1cclxuXHJcbiAgLm5ld3MtdGV4dC1jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC5uZXdzLWxpbmtzLWltYWdlcyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luOiA1MXB4IGF1dG87XHJcbiAgICB3aWR0aDogMTM2cHg7XHJcbiAgfVxyXG5cclxuICAubmV3cy10ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgLm5ld3MtdGV4dC1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDAgMi40JTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAwIDUlO1xyXG4gIH1cclxuXHJcbiAgLmJhY2stYnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc3VibWl0LWZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgfVxyXG5cclxuICAucHJpbWFyeS1nbG9iYWwtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gIH1cclxuXHJcbiAgLnRvcC1lbGVtZW50cyxcclxuICAubmV3cy1pbmZvIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAuY3JlYXRlLW5ld3MtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIG1hcmdpbi10b3A6IDY0cHg7XHJcbiAgfVxyXG5cclxuICAuc291cmNlLWZpZWxkIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAubmV3cy1pbmZvLFxyXG4gIC5uZXdzLXRleHQtY29udGVudCxcclxuICAuc291cmNlLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAuc291cmNlLXRleHQge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIH1cclxufVxyXG4iLCIud3JhcHBlciB7XG4gIG1hcmdpbjogMCAxMCU7XG59XG5cbi53b3JkLXdyYXAge1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4udG9wLWVsZW1lbnRzLFxuLmJ1dHRvbi1jb250ZW50LFxuLm5ld3MtaW5mbyxcbi5uZXdzLWxpbmtzLWltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uZXdzLWluZm8sXG4ubmV3cy10ZXh0LFxuLnB1Ymxpc2gsXG4uYmFjay1idXR0b24sXG4udGFncy1pdGVtIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG59XG5cbi50b3AtZWxlbWVudHMge1xuICBtYXJnaW4tdG9wOiA1NHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG59XG5cbi5idXR0b24tbGluayB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmstZ3JleSk7XG59XG5cbi5idXR0b24tYXJyb3cge1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuLnByaW1hcnktZ2xvYmFsLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDE2cHggNDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmVlbik7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNyZWF0ZS1uZXdzLXRleHQge1xuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDNyZW07XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRhcmstZ3JleSk7XG59XG5cbi50YWdzLFxuLm5ld3MtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhZ3Mge1xuICBwYWRkaW5nOiA0OHB4IDAgMjRweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRhZ3MtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1ncmV5KTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbjogMCA4cHggMDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1ncmV5KTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLm5ld3MtY29udGVudCB7XG4gIG1hcmdpbjogMCA3LjUlO1xufVxuXG4ubmV3cy10aXRsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5ld3MtdGl0bGUge1xuICBtYXJnaW46IDAgNi44JSAyNHB4O1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRhcmstZ3JleSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XG59XG5cbi5uZXdzLWluZm8ge1xuICBwYWRkaW5nOiAwIDAgMzBweCAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5ld3MtaW5mby1kYXRlLFxuLm5ld3MtaW5mby1hdXRob3Ige1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrLWdyZXkpO1xufVxuXG4ubmV3cy1pbmZvLWRvdCB7XG4gIHBhZGRpbmc6IDAgMzJweCAwO1xufVxuXG4ubmV3cy1saW5rcy1pbWFnZXMge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubmV3cy1saW5rcy1pbWcge1xuICBtYXJnaW46IDlweCAwO1xufVxuXG4ubmV3cy1pbWFnZS1pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5ld3MtdGV4dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA2OXB4IDAgMDtcbn1cblxuLm5ld3MtdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiA3NHB4O1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uZXdzLXRleHQtY29udGVudCB7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuLnNvdXJjZS1maWVsZCB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zb3VyY2UtdGl0bGUge1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyay1ncmV5KTtcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5zb3VyY2UtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXIge1xuICAgIG1hcmdpbjogMCAzJTtcbiAgfVxuXG4gIC5uZXdzLXRpdGxlIHtcbiAgICBtYXJnaW46IDAgOCUgMjRweDtcbiAgfVxuXG4gIC5uZXdzLWNvbnRlbnQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLndyYXBwZXIge1xuICAgIG1hcmdpbjogMCAxLjglO1xuICB9XG5cbiAgLm5ld3MtdGl0bGUge1xuICAgIG1hcmdpbjogMCAwIDI0cHg7XG4gIH1cblxuICAubmV3cy1saW5rcy1pbWcge1xuICAgIG1hcmdpbjogMCAzMnB4IDAgMDtcbiAgfVxuXG4gIC5uZXdzLXRleHQtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAubmV3cy1saW5rcy1pbWFnZXMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luOiA1MXB4IGF1dG87XG4gICAgd2lkdGg6IDEzNnB4O1xuICB9XG5cbiAgLm5ld3MtdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAubmV3cy10ZXh0LWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAud3JhcHBlciB7XG4gICAgbWFyZ2luOiAwIDIuNCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBtYXJnaW46IDAgNSU7XG4gIH1cblxuICAuYmFjay1idXR0b24ge1xuICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5zdWJtaXQtZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICB9XG5cbiAgLnByaW1hcnktZ2xvYmFsLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICB9XG5cbiAgLnRvcC1lbGVtZW50cyxcbi5uZXdzLWluZm8ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuY3JlYXRlLW5ld3MtdGV4dCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIG1hcmdpbi10b3A6IDY0cHg7XG4gIH1cblxuICAuc291cmNlLWZpZWxkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLm5ld3MtaW5mbyxcbi5uZXdzLXRleHQtY29udGVudCxcbi5zb3VyY2UtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB9XG5cbiAgLnNvdXJjZS10ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewsPreviewPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-news-preview-page',
          templateUrl: './news-preview-page.component.html',
          styleUrls: ['./news-preview-page.component.scss']
        }]
      }], function () {
        return [{
          type: _eco_news_service_create_eco_news_service__WEBPACK_IMPORTED_MODULE_3__["CreateEcoNewsService"]
        }, {
          type: _global_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_create_edit_news_action_constants__WEBPACK_IMPORTED_MODULE_2__["ACTION_TOKEN"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/component/eco-news/components/post-news-loader/post-news-loader.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/main/component/eco-news/components/post-news-loader/post-news-loader.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: PostNewsLoaderComponent */

  /***/
  function srcAppMainComponentEcoNewsComponentsPostNewsLoaderPostNewsLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostNewsLoaderComponent", function () {
      return PostNewsLoaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var PostNewsLoaderComponent = /*#__PURE__*/function () {
      function PostNewsLoaderComponent(titleService) {
        _classCallCheck(this, PostNewsLoaderComponent);

        this.titleService = titleService;
        this.actualYear = new Date().getFullYear();
      }

      _createClass(PostNewsLoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.titleService.setTitle('About');
        }
      }]);

      return PostNewsLoaderComponent;
    }();

    PostNewsLoaderComponent.ɵfac = function PostNewsLoaderComponent_Factory(t) {
      return new (t || PostNewsLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]));
    };

    PostNewsLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostNewsLoaderComponent,
      selectors: [["app-post-news-loader"]],
      decls: 8,
      vars: 6,
      consts: [[1, "container"], [1, "people-img"], [1, "header"], [1, "description"]],
      template: function PostNewsLoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "post-news-loader.text-1"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "post-news-loader.text-2"));
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: [".copyright[_ngcontent-%COMP%] {\n  background-color: rgba(131, 156, 148, 0.05);\n  color: var(--primary-grey);\n  font-family: var(--primary-font);\n  font-stretch: normal;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  height: 40px;\n  line-height: normal;\n  letter-spacing: normal;\n  padding-top: 11px;\n  text-align: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 100%;\n}\n\n.people-img[_ngcontent-%COMP%] {\n  background: url('/GreenCityClient/assets/img/illustration-people.png');\n  background-repeat: no-repeat;\n  background-size: 450px, 450px;\n  background-position: center;\n  align-self: center;\n  width: 100%;\n  height: 450px;\n}\n\n.header[_ngcontent-%COMP%] {\n  width: 435px;\n  height: 48px;\n  font-family: var(--secondary-font);\n  font-style: normal;\n  font-weight: 600;\n  font-size: 32px;\n  line-height: 48px;\n  text-align: center;\n  color: var(--secondary-dark-grey);\n  margin-bottom: 0;\n}\n\n.description[_ngcontent-%COMP%] {\n  height: 32px;\n  font-family: var(--primary-font);\n  font-size: 18px;\n  line-height: 32px;\n  text-align: center;\n  color: var(--secondary-dark-grey);\n  margin-bottom: 0;\n}\n\n@media screen and (max-width: 575px) {\n  .container[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0;\n  }\n\n  .header[_ngcontent-%COMP%] {\n    width: 288px;\n    height: 56px;\n    margin-bottom: 16px;\n    font-size: 24px;\n    line-height: 28px;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    width: 288px;\n    height: 36px;\n    font-size: 14px;\n    line-height: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvZWNvLW5ld3MvY29tcG9uZW50cy9wb3N0LW5ld3MtbG9hZGVyL0Q6XFxTb2Z0U2VydmVfQWNhZGVteVxcR3JlZW5DaXR5XFxnaC1wYWdlc1xcR3JlZW5DaXR5Q2xpZW50L3NyY1xcYXBwXFxtYWluXFxjb21wb25lbnRcXGVjby1uZXdzXFxjb21wb25lbnRzXFxwb3N0LW5ld3MtbG9hZGVyXFxwb3N0LW5ld3MtbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbXBvbmVudC9lY28tbmV3cy9jb21wb25lbnRzL3Bvc3QtbmV3cy1sb2FkZXIvcG9zdC1uZXdzLWxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJDQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxzRUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VDQ0Y7O0VERUE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VDQ0Y7O0VERUE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbXBvbmVudC9lY28tbmV3cy9jb21wb25lbnRzL3Bvc3QtbmV3cy1sb2FkZXIvcG9zdC1uZXdzLWxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3B5cmlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMxLCAxNTYsIDE0OCwgMC4wNSk7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JleSk7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgcGFkZGluZy10b3A6IDExcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wZW9wbGUtaW1nIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJ34vYXNzZXRzL2ltZy9pbGx1c3RyYXRpb24tcGVvcGxlLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA0NTBweCwgNDUwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICB3aWR0aDogNDM1cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRhcmstZ3JleSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRhcmstZ3JleSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIHdpZHRoOiAyODhweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICB3aWR0aDogMjg4cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICB9XHJcbn1cclxuIiwiLmNvcHlyaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMxLCAxNTYsIDE0OCwgMC4wNSk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZXkpO1xuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ucGVvcGxlLWltZyB7XG4gIGJhY2tncm91bmQ6IHVybChcIn4vYXNzZXRzL2ltZy9pbGx1c3RyYXRpb24tcGVvcGxlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiA0NTBweCwgNDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NTBweDtcbn1cblxuLmhlYWRlciB7XG4gIHdpZHRoOiA0MzVweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1kYXJrLWdyZXkpO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBoZWlnaHQ6IDMycHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGFyay1ncmV5KTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICB3aWR0aDogMjg4cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICB9XG5cbiAgLmRlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogMjg4cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostNewsLoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post-news-loader',
          templateUrl: './post-news-loader.component.html',
          styleUrls: ['./post-news-loader.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/component/eco-news/components/remaining-count/remaining-count.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/main/component/eco-news/components/remaining-count/remaining-count.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: RemainingCountComponent */

  /***/
  function srcAppMainComponentEcoNewsComponentsRemainingCountRemainingCountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemainingCountComponent", function () {
      return RemainingCountComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _global_service_word_declension_word_declension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @global-service/word-declension/word-declension.service */
    "./src/app/main/service/word-declension/word-declension.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RemainingCountComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.remainingCount, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r0.remainingCount === 1 ? "homepage.eco-news.items-found.item-at-1" : "homepage.eco-news.items-found.item-at-all"), " ");
      }
    }

    function RemainingCountComponent_ng_template_1_h2_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r3.remainingCount, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "homepage.eco-news.items-found.item-at-1"), "");
      }
    }

    function RemainingCountComponent_ng_template_1_h2_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r4.remainingCount, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "homepage.eco-news.items-found.item-at-2-3-4"), "");
      }
    }

    function RemainingCountComponent_ng_template_1_h2_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r5.remainingCount, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "homepage.eco-news.items-found.item-at-all"), "");
      }
    }

    function RemainingCountComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RemainingCountComponent_ng_template_1_h2_1_Template, 3, 4, "h2", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RemainingCountComponent_ng_template_1_h2_2_Template, 3, 4, "h2", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RemainingCountComponent_ng_template_1_h2_3_Template, 3, 4, "h2", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r2.setWordDeclension(ctx_r2.remainingCount + ""));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "b");
      }
    }

    var RemainingCountComponent = /*#__PURE__*/function () {
      function RemainingCountComponent(translate, wordDeclensionService) {
        _classCallCheck(this, RemainingCountComponent);

        this.translate = translate;
        this.wordDeclensionService = wordDeclensionService;
        this.remainingCount = 0;
      }

      _createClass(RemainingCountComponent, [{
        key: "setWordDeclension",
        value: function setWordDeclension(count) {
          return this.wordDeclensionService.setWordDeclension(count);
        }
      }]);

      return RemainingCountComponent;
    }();

    RemainingCountComponent.ɵfac = function RemainingCountComponent_Factory(t) {
      return new (t || RemainingCountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_global_service_word_declension_word_declension_service__WEBPACK_IMPORTED_MODULE_2__["WordDeclensionService"]));
    };

    RemainingCountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RemainingCountComponent,
      selectors: [["app-remaining-count"]],
      inputs: {
        remainingCount: "remainingCount"
      },
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["otherLanguages", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"]],
      template: function RemainingCountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RemainingCountComponent_div_0_Template, 4, 4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RemainingCountComponent_ng_template_1_Template, 4, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.translate.defaultLang === "en")("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: ["h2[_ngcontent-%COMP%] {\n  font-family: var(--primary-font);\n  font-size: 16px;\n  line-height: 24px;\n  color: #000;\n  margin: 0;\n}\n\n@media screen and (max-width: 575px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvZWNvLW5ld3MvY29tcG9uZW50cy9yZW1haW5pbmctY291bnQvRDpcXFNvZnRTZXJ2ZV9BY2FkZW15XFxHcmVlbkNpdHlcXGdoLXBhZ2VzXFxHcmVlbkNpdHlDbGllbnQvc3JjXFxhcHBcXG1haW5cXGNvbXBvbmVudFxcZWNvLW5ld3NcXGNvbXBvbmVudHNcXHJlbWFpbmluZy1jb3VudFxccmVtYWluaW5nLWNvdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbXBvbmVudC9lY28tbmV3cy9jb21wb25lbnRzL3JlbWFpbmluZy1jb3VudC9yZW1haW5pbmctY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGVBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnQvZWNvLW5ld3MvY29tcG9uZW50cy9yZW1haW5pbmctY291bnQvcmVtYWluaW5nLWNvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG4iLCJoMiB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1wcmltYXJ5LWZvbnQpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICBoMiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RemainingCountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-remaining-count',
          templateUrl: './remaining-count.component.html',
          styleUrls: ['./remaining-count.component.scss']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }, {
          type: _global_service_word_declension_word_declension_service__WEBPACK_IMPORTED_MODULE_2__["WordDeclensionService"]
        }];
      }, {
        remainingCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/main/component/eco-news/eco-news-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/main/component/eco-news/eco-news-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: EcoNewsRoutingModule */

  /***/
  function srcAppMainComponentEcoNewsEcoNewsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EcoNewsRoutingModule", function () {
      return EcoNewsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _eco_news_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./eco-news.component */
    "./src/app/main/component/eco-news/eco-news.component.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components */
    "./src/app/main/component/eco-news/components/index.ts");
    /* harmony import */


    var _global_service_pending_changes_guard_pending_changes_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @global-service/pending-changes-guard/pending-changes.guard */
    "./src/app/main/service/pending-changes-guard/pending-changes.guard.ts");

    var ecoNewsRoutes = [{
      path: '',
      component: _eco_news_component__WEBPACK_IMPORTED_MODULE_2__["EcoNewsComponent"],
      children: [{
        path: 'preview',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["NewsPreviewPageComponent"]
      }, {
        path: 'create-news',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["CreateEditNewsComponent"],
        canDeactivate: [_global_service_pending_changes_guard_pending_changes_guard__WEBPACK_IMPORTED_MODULE_4__["PendingChangesGuard"]]
      }, {
        path: 'post-news-loader',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["PostNewsLoaderComponent"]
      }, {
        path: ':id',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["EcoNewsDetailComponent"]
      }, {
        path: '',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["NewsListComponent"]
      }, {
        path: '',
        redirectTo: 'news',
        pathMatch: 'full'
      }]
    }];

    var EcoNewsRoutingModule = function EcoNewsRoutingModule() {
      _classCallCheck(this, EcoNewsRoutingModule);
    };

    EcoNewsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EcoNewsRoutingModule
    });
    EcoNewsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EcoNewsRoutingModule_Factory(t) {
        return new (t || EcoNewsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ecoNewsRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EcoNewsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcoNewsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ecoNewsRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/component/eco-news/eco-news.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/main/component/eco-news/eco-news.component.ts ***!
    \***************************************************************/

  /*! exports provided: EcoNewsComponent */

  /***/
  function srcAppMainComponentEcoNewsEcoNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EcoNewsComponent", function () {
      return EcoNewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../service/localstorage/local-storage.service */
    "./src/app/main/service/localstorage/local-storage.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var EcoNewsComponent = /*#__PURE__*/function () {
      function EcoNewsComponent(localStorageService, translate) {
        _classCallCheck(this, EcoNewsComponent);

        this.localStorageService = localStorageService;
        this.translate = translate;
      }

      _createClass(EcoNewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribeToLangChange();
          this.bindLang(this.localStorageService.getCurrentLanguage());
        }
      }, {
        key: "bindLang",
        value: function bindLang(lang) {
          this.translate.setDefaultLang(lang);
        }
      }, {
        key: "subscribeToLangChange",
        value: function subscribeToLangChange() {
          this.langChangeSub = this.localStorageService.languageSubject.subscribe(this.bindLang.bind(this));
        }
      }]);

      return EcoNewsComponent;
    }();

    EcoNewsComponent.ɵfac = function EcoNewsComponent_Factory(t) {
      return new (t || EcoNewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]));
    };

    EcoNewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EcoNewsComponent,
      selectors: [["app-eco-news"]],
      decls: 2,
      vars: 0,
      consts: [[1, "wrapper"]],
      template: function EcoNewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: [".list-news[_ngcontent-%COMP%] {\n  margin-left: 150px;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  background-color: rgba(131, 156, 148, 0.05);\n  color: var(--primary-grey);\n  font-family: var(--primary-font);\n  font-stretch: normal;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  height: 40px;\n  line-height: normal;\n  letter-spacing: normal;\n  padding-top: 11px;\n  text-align: center;\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnQvZWNvLW5ld3MvRDpcXFNvZnRTZXJ2ZV9BY2FkZW15XFxHcmVlbkNpdHlcXGdoLXBhZ2VzXFxHcmVlbkNpdHlDbGllbnQvc3JjXFxhcHBcXG1haW5cXGNvbXBvbmVudFxcZWNvLW5ld3NcXGVjby1uZXdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2NvbXBvbmVudC9lY28tbmV3cy9lY28tbmV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbXBvbmVudC9lY28tbmV3cy9lY28tbmV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LW5ld3Mge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxufVxyXG5cclxuLmNvcHlyaWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzEsIDE1NiwgMTQ4LCAwLjA1KTtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmV5KTtcclxuICBmb250LWZhbWlseTogdmFyKC0tcHJpbWFyeS1mb250KTtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICBwYWRkaW5nLXRvcDogMTFweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcbiIsIi5saXN0LW5ld3Mge1xuICBtYXJnaW4tbGVmdDogMTUwcHg7XG59XG5cbi5jb3B5cmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMSwgMTU2LCAxNDgsIDAuMDUpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmV5KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXByaW1hcnktZm9udCk7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBwYWRkaW5nLXRvcDogMTFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcoNewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-eco-news',
          templateUrl: './eco-news.component.html',
          styleUrls: ['./eco-news.component.scss']
        }]
      }], function () {
        return [{
          type: _service_localstorage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/component/eco-news/eco-news.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/main/component/eco-news/eco-news.module.ts ***!
    \************************************************************/

  /*! exports provided: EcoNewsModule, createTranslateLoader */

  /***/
  function srcAppMainComponentEcoNewsEcoNewsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EcoNewsModule", function () {
      return EcoNewsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-infinite-scroll */
    "./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js");
    /* harmony import */


    var _eco_news_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./eco-news-routing.module */
    "./src/app/main/component/eco-news/eco-news-routing.module.ts");
    /* harmony import */


    var _shared_shared_main_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @shared/shared-main.module */
    "./src/app/main/component/shared/shared-main.module.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components */
    "./src/app/main/component/eco-news/components/index.ts");
    /* harmony import */


    var _comments_comments_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../comments/comments.module */
    "./src/app/main/component/comments/comments.module.ts");
    /* harmony import */


    var _errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../errors/mat-snack-bar/mat-snack-bar.component */
    "./src/app/main/component/errors/mat-snack-bar/mat-snack-bar.component.ts");
    /* harmony import */


    var _eco_news_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./eco-news.component */
    "./src/app/main/component/eco-news/eco-news.component.ts");
    /* harmony import */


    var _components_create_edit_news_action_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/create-edit-news/action.constants */
    "./src/app/main/component/eco-news/components/create-edit-news/action.constants.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var EcoNewsModule = function EcoNewsModule() {
      _classCallCheck(this, EcoNewsModule);
    };

    EcoNewsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EcoNewsModule
    });
    EcoNewsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EcoNewsModule_Factory(t) {
        return new (t || EcoNewsModule)();
      },
      providers: [_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarComponent"], {
        provide: _components_create_edit_news_action_constants__WEBPACK_IMPORTED_MODULE_15__["ACTION_TOKEN"],
        useValue: _components_create_edit_news_action_constants__WEBPACK_IMPORTED_MODULE_15__["ACTION_CONFIG"]
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _comments_comments_module__WEBPACK_IMPORTED_MODULE_12__["CommentsModule"], _shared_shared_main_module__WEBPACK_IMPORTED_MODULE_10__["SharedMainModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__["InfiniteScrollModule"], _eco_news_routing_module__WEBPACK_IMPORTED_MODULE_9__["EcoNewsRoutingModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__["ImageCropperModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _comments_comments_module__WEBPACK_IMPORTED_MODULE_12__["CommentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
        },
        isolate: true
      })], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EcoNewsModule, {
        declarations: [_eco_news_component__WEBPACK_IMPORTED_MODULE_14__["EcoNewsComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["ChangeViewButtonComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["NewsListGalleryViewComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["NewsListListViewComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["NewsListComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["RemainingCountComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["EcoNewsWidgetComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["EcoNewsDetailComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["NewsPreviewPageComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["PostNewsLoaderComponent"], _errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["CreateEditNewsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _comments_comments_module__WEBPACK_IMPORTED_MODULE_12__["CommentsModule"], _shared_shared_main_module__WEBPACK_IMPORTED_MODULE_10__["SharedMainModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__["InfiniteScrollModule"], _eco_news_routing_module__WEBPACK_IMPORTED_MODULE_9__["EcoNewsRoutingModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__["ImageCropperModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _comments_comments_module__WEBPACK_IMPORTED_MODULE_12__["CommentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcoNewsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_eco_news_component__WEBPACK_IMPORTED_MODULE_14__["EcoNewsComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["ChangeViewButtonComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["NewsListGalleryViewComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["NewsListListViewComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["NewsListComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["RemainingCountComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["EcoNewsWidgetComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["EcoNewsDetailComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["NewsPreviewPageComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["PostNewsLoaderComponent"], _errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarComponent"], _components__WEBPACK_IMPORTED_MODULE_11__["CreateEditNewsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _comments_comments_module__WEBPACK_IMPORTED_MODULE_12__["CommentsModule"], _shared_shared_main_module__WEBPACK_IMPORTED_MODULE_10__["SharedMainModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__["InfiniteScrollModule"], _eco_news_routing_module__WEBPACK_IMPORTED_MODULE_9__["EcoNewsRoutingModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_5__["ImageCropperModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _comments_comments_module__WEBPACK_IMPORTED_MODULE_12__["CommentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
              useFactory: createTranslateLoader,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
            },
            isolate: true
          })],
          exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]],
          entryComponents: [],
          providers: [_errors_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarComponent"], {
            provide: _components_create_edit_news_action_constants__WEBPACK_IMPORTED_MODULE_15__["ACTION_TOKEN"],
            useValue: _components_create_edit_news_action_constants__WEBPACK_IMPORTED_MODULE_15__["ACTION_CONFIG"]
          }]
        }]
      }], null, null);
    })();

    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }
    /***/

  },

  /***/
  "./src/app/main/config/breakpoints.constants.ts":
  /*!******************************************************!*\
    !*** ./src/app/main/config/breakpoints.constants.ts ***!
    \******************************************************/

  /*! exports provided: Breakpoints */

  /***/
  function srcAppMainConfigBreakpointsConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Breakpoints", function () {
      return Breakpoints;
    });

    var Breakpoints = {
      mobile: 320,
      tabletLow: 576,
      tabletMidle: 768,
      tabletBig: 992,
      pcLow: 1200,
      pcBig: 1440
    };
    /***/
  },

  /***/
  "./src/app/main/service/socket/socket-state.enum.ts":
  /*!**********************************************************!*\
    !*** ./src/app/main/service/socket/socket-state.enum.ts ***!
    \**********************************************************/

  /*! exports provided: SocketClientState */

  /***/
  function srcAppMainServiceSocketSocketStateEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketClientState", function () {
      return SocketClientState;
    });

    var SocketClientState;

    (function (SocketClientState) {
      SocketClientState[SocketClientState["ATTEMPTING"] = 0] = "ATTEMPTING";
      SocketClientState[SocketClientState["CONNECTED"] = 1] = "CONNECTED";
    })(SocketClientState || (SocketClientState = {}));
    /***/

  },

  /***/
  "./src/app/main/service/socket/socket.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/main/service/socket/socket.service.ts ***!
    \*******************************************************/

  /*! exports provided: SocketService */

  /***/
  function srcAppMainServiceSocketSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketService", function () {
      return SocketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var sockjs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sockjs-client */
    "./node_modules/sockjs-client/lib/entry.js");
    /* harmony import */


    var sockjs_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @stomp/stompjs */
    "./node_modules/@stomp/stompjs/esm6/index.js");
    /* harmony import */


    var _socket_state_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./socket-state.enum */
    "./src/app/main/service/socket/socket-state.enum.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var SocketService = /*#__PURE__*/function () {
      function SocketService() {
        var _this47 = this;

        _classCallCheck(this, SocketService);

        this.state = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_socket_state_enum__WEBPACK_IMPORTED_MODULE_5__["SocketClientState"].ATTEMPTING);
        this.webSocket = _stomp_stompjs__WEBPACK_IMPORTED_MODULE_4__["Stomp"].over(function () {
          return new sockjs_client__WEBPACK_IMPORTED_MODULE_3__(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].socket);
        });
        this.webSocket.connect({}, function () {
          _this47.state.next(_socket_state_enum__WEBPACK_IMPORTED_MODULE_5__["SocketClientState"].CONNECTED);
        });
      }

      _createClass(SocketService, [{
        key: "connect",
        value: function connect() {
          var _this48 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this48.state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (state) {
              return state === _socket_state_enum__WEBPACK_IMPORTED_MODULE_5__["SocketClientState"].CONNECTED;
            })).subscribe(function () {
              observer.next(_this48.webSocket);
            });
          });
        }
      }, {
        key: "onMessage",
        value: function onMessage(topic) {
          return this.connect().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (client) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              var subscription = client.subscribe(topic, function (message) {
                observer.next(JSON.parse(message.body));
              });
              return function () {
                return client.unsubscribe(subscription.id);
              };
            });
          }));
        }
      }, {
        key: "send",
        value: function send(topic, payload) {
          this.connect().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (client) {
            return client.send(topic, {}, JSON.stringify(payload));
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.connect().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (client) {
            return client.disconnect(null);
          });
        }
      }]);

      return SocketService;
    }();

    SocketService.ɵfac = function SocketService_Factory(t) {
      return new (t || SocketService)();
    };

    SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SocketService,
      factory: SocketService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=main-component-eco-news-eco-news-module-es5.js.map