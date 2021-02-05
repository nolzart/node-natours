webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/tourReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/tourReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types_tourTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/tourTypes */ "./store/types/tourTypes.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import { HYDRATE } from 'next-redux-wrapper'

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
    case _types_tourTypes__WEBPACK_IMPORTED_MODULE_1__["GET_ALL_TOURS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        tours: action.payload
      });

    case _types_tourTypes__WEBPACK_IMPORTED_MODULE_1__["GET_TOUR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        tour: action.payload
      });

    case _types_tourTypes__WEBPACK_IMPORTED_MODULE_1__["GET_MY_TOURS"]:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvdG91clJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidG91cnMiLCJ0b3VyIiwibXlUb3VycyIsInRvdXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiR0VUX0FMTF9UT1VSUyIsInBheWxvYWQiLCJHRVRfVE9VUiIsIkdFVF9NWV9UT1VSUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxZQUFZLEdBQUc7QUFDakJDLE9BQUssRUFBRSxFQURVO0FBRWpCQyxNQUFJLEVBQUUsRUFGVztBQUdqQkMsU0FBTyxFQUFFO0FBSFEsQ0FBckI7O0FBTUEsTUFBTUMsV0FBVyxHQUFHLENBQUNDLEtBQUssR0FBR0wsWUFBVCxFQUF1Qk0sTUFBdkIsS0FBa0M7QUFDbEQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQUtDLDhEQUFMO0FBQ0ksNkNBQ09ILEtBRFA7QUFFSUosYUFBSyxFQUFFSyxNQUFNLENBQUNHO0FBRmxCOztBQUlKLFNBQUtDLHlEQUFMO0FBQ0ksNkNBQ09MLEtBRFA7QUFFSUgsWUFBSSxFQUFFSSxNQUFNLENBQUNHO0FBRmpCOztBQUlKLFNBQUtFLDZEQUFMO0FBQ0ksNkNBQ09OLEtBRFA7QUFFSUYsZUFBTyxFQUFFRyxNQUFNLENBQUNHO0FBRnBCOztBQUlKO0FBQ0ksYUFBT0osS0FBUDtBQXpCUjtBQTJCSCxDQTVCRDs7QUE4QmVELDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuY2RhMDVjMDI3OWJjMTdkOTk1N2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQgeyBHRVRfQUxMX1RPVVJTLCBHRVRfVE9VUiwgR0VUX01ZX1RPVVJTIH0gZnJvbSAnLi4vdHlwZXMvdG91clR5cGVzJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdG91cnM6IFtdLFxuICAgIHRvdXI6IHt9LFxuICAgIG15VG91cnM6IFtdLFxufVxuXG5jb25zdCB0b3VyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAvLyBjYXNlIEhZRFJBVEU6XG4gICAgICAgIC8vICAgICBpZiAoYWN0aW9uLnBheWxvYWQuYXBwID09PSAnaW5pdCcpIGRlbGV0ZSBhY3Rpb24ucGF5bG9hZC5hcHBcbiAgICAgICAgLy8gICAgIGlmIChhY3Rpb24ucGF5bG9hZC5wYWdlID09PSAnaW5pdCcpIGRlbGV0ZSBhY3Rpb24ucGF5bG9hZC5wYWdlXG4gICAgICAgIC8vICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfVxuICAgICAgICAvLyBjYXNlICdBUFAnOlxuICAgICAgICAvLyAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFwcDogYWN0aW9uLnBheWxvYWQgfVxuICAgICAgICAvLyBjYXNlICdQQUdFJzpcbiAgICAgICAgLy8gICAgIHJldHVybiB7IC4uLnN0YXRlLCBwYWdlOiBhY3Rpb24ucGF5bG9hZCB9XG4gICAgICAgIGNhc2UgR0VUX0FMTF9UT1VSUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdG91cnM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIEdFVF9UT1VSOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB0b3VyOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBHRVRfTVlfVE9VUlM6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG15VG91cnM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0b3VyUmVkdWNlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==