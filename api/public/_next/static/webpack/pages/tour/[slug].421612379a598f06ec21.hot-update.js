webpackHotUpdate_N_E("pages/tour/[slug]",{

/***/ "./store/reducers/tourReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/tourReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _types_tourTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/tourTypes */ "./store/types/tourTypes.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



const initialState = {
  tours: [],
  tour: {},
  myTours: []
};

const tourReducer = (state = initialState, action) => {
  switch (action.type) {
    // case HYDRATE:
    //     if (action.payload.app === 'init') delete action.payload.app
    //     if (action.payload.page === 'init') delete action.payload.page
    //     return { ...state, ...action.payload }
    // case 'APP':
    //     return { ...state, app: action.payload }
    // case 'PAGE':
    //     return { ...state, page: action.payload }
    case _types_tourTypes__WEBPACK_IMPORTED_MODULE_2__["GET_ALL_TOURS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        tours: action.payload
      });

    case _types_tourTypes__WEBPACK_IMPORTED_MODULE_2__["GET_TOUR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        tour: action.payload
      });

    case _types_tourTypes__WEBPACK_IMPORTED_MODULE_2__["GET_MY_TOURS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        myTours: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (tourReducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvdG91clJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidG91cnMiLCJ0b3VyIiwibXlUb3VycyIsInRvdXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiR0VUX0FMTF9UT1VSUyIsInBheWxvYWQiLCJHRVRfVE9VUiIsIkdFVF9NWV9UT1VSUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsWUFBWSxHQUFHO0FBQ2pCQyxPQUFLLEVBQUUsRUFEVTtBQUVqQkMsTUFBSSxFQUFFLEVBRlc7QUFHakJDLFNBQU8sRUFBRTtBQUhRLENBQXJCOztBQU1BLE1BQU1DLFdBQVcsR0FBRyxDQUFDQyxLQUFLLEdBQUdMLFlBQVQsRUFBdUJNLE1BQXZCLEtBQWtDO0FBQ2xELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFLQyw4REFBTDtBQUNJLDZDQUNPSCxLQURQO0FBRUlKLGFBQUssRUFBRUssTUFBTSxDQUFDRztBQUZsQjs7QUFJSixTQUFLQyx5REFBTDtBQUNJLDZDQUNPTCxLQURQO0FBRUlILFlBQUksRUFBRUksTUFBTSxDQUFDRztBQUZqQjs7QUFJSixTQUFLRSw2REFBTDtBQUNJLDZDQUNPTixLQURQO0FBRUlGLGVBQU8sRUFBRUcsTUFBTSxDQUFDRztBQUZwQjs7QUFJSjtBQUNJLGFBQU9KLEtBQVA7QUF6QlI7QUEyQkgsQ0E1QkQ7O0FBOEJlRCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90b3VyL1tzbHVnXS40MjE2MTIzNzlhNTk4ZjA2ZWMyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcbmltcG9ydCB7IEdFVF9BTExfVE9VUlMsIEdFVF9UT1VSLCBHRVRfTVlfVE9VUlMgfSBmcm9tICcuLi90eXBlcy90b3VyVHlwZXMnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICB0b3VyczogW10sXG4gICAgdG91cjoge30sXG4gICAgbXlUb3VyczogW10sXG59XG5cbmNvbnN0IHRvdXJSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIC8vIGNhc2UgSFlEUkFURTpcbiAgICAgICAgLy8gICAgIGlmIChhY3Rpb24ucGF5bG9hZC5hcHAgPT09ICdpbml0JykgZGVsZXRlIGFjdGlvbi5wYXlsb2FkLmFwcFxuICAgICAgICAvLyAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLnBhZ2UgPT09ICdpbml0JykgZGVsZXRlIGFjdGlvbi5wYXlsb2FkLnBhZ2VcbiAgICAgICAgLy8gICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9XG4gICAgICAgIC8vIGNhc2UgJ0FQUCc6XG4gICAgICAgIC8vICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXBwOiBhY3Rpb24ucGF5bG9hZCB9XG4gICAgICAgIC8vIGNhc2UgJ1BBR0UnOlxuICAgICAgICAvLyAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBhZ2U6IGFjdGlvbi5wYXlsb2FkIH1cbiAgICAgICAgY2FzZSBHRVRfQUxMX1RPVVJTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB0b3VyczogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgR0VUX1RPVVI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHRvdXI6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIEdFVF9NWV9UT1VSUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbXlUb3VyczogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvdXJSZWR1Y2VyXG4iXSwic291cmNlUm9vdCI6IiJ9