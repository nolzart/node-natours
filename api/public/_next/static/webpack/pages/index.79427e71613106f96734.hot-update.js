webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/catchAsyncError.js":
/*!**********************************!*\
  !*** ./utils/catchAsyncError.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _store_types_alertTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/types/alertTypes */ "./store/types/alertTypes.js");


const catchAsyncError = (cb, dispatch) => cb().catch(err => {
  const message = err.response ? err.response.data.message : 'Something was wrong :(!';
  dispatch({
    type: _store_types_alertTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_ALERT"],
    payload: {
      status: 'error',
      message
    }
  });
});

/* harmony default export */ __webpack_exports__["default"] = (catchAsyncError);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvY2F0Y2hBc3luY0Vycm9yLmpzIl0sIm5hbWVzIjpbImNhdGNoQXN5bmNFcnJvciIsImNiIiwiZGlzcGF0Y2giLCJjYXRjaCIsImVyciIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsImRhdGEiLCJ0eXBlIiwiVVBEQVRFX0FMRVJUIiwicGF5bG9hZCIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTs7QUFDQSxNQUFNQSxlQUFlLEdBQUcsQ0FBQ0MsRUFBRCxFQUFLQyxRQUFMLEtBQ3BCRCxFQUFFLEdBQUdFLEtBQUwsQ0FBV0MsR0FBRyxJQUFJO0FBQ2QsUUFBTUMsT0FBTyxHQUFHRCxHQUFHLENBQUNFLFFBQUosR0FDVkYsR0FBRyxDQUFDRSxRQUFKLENBQWFDLElBQWIsQ0FBa0JGLE9BRFIsR0FFVix5QkFGTjtBQUdBSCxVQUFRLENBQUM7QUFDTE0sUUFBSSxFQUFFQyxvRUFERDtBQUVMQyxXQUFPLEVBQUU7QUFDTEMsWUFBTSxFQUFFLE9BREg7QUFFTE47QUFGSztBQUZKLEdBQUQsQ0FBUjtBQU9ILENBWEQsQ0FESjs7QUFjZUwsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzk0MjdlNzE2MTMxMDZmOTY3MzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVQREFURV9BTEVSVCB9IGZyb20gJy4uL3N0b3JlL3R5cGVzL2FsZXJ0VHlwZXMnXHJcbmNvbnN0IGNhdGNoQXN5bmNFcnJvciA9IChjYiwgZGlzcGF0Y2gpID0+XHJcbiAgICBjYigpLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVyci5yZXNwb25zZVxyXG4gICAgICAgICAgICA/IGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2VcclxuICAgICAgICAgICAgOiAnU29tZXRoaW5nIHdhcyB3cm9uZyA6KCEnXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBVUERBVEVfQUxFUlQsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXRjaEFzeW5jRXJyb3JcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==