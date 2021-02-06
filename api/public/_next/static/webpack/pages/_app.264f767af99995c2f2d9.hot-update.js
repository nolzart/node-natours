webpackHotUpdate_N_E("pages/_app",{

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
  console.log(err);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvY2F0Y2hBc3luY0Vycm9yLmpzIl0sIm5hbWVzIjpbImNhdGNoQXN5bmNFcnJvciIsImNiIiwiZGlzcGF0Y2giLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJkYXRhIiwidHlwZSIsIlVQREFURV9BTEVSVCIsInBheWxvYWQiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7O0FBQ0EsTUFBTUEsZUFBZSxHQUFHLENBQUNDLEVBQUQsRUFBS0MsUUFBTCxLQUNwQkQsRUFBRSxHQUFHRSxLQUFMLENBQVdDLEdBQUcsSUFBSTtBQUNkQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLFFBQU1HLE9BQU8sR0FBR0gsR0FBRyxDQUFDSSxRQUFKLEdBQ1ZKLEdBQUcsQ0FBQ0ksUUFBSixDQUFhQyxJQUFiLENBQWtCRixPQURSLEdBRVYseUJBRk47QUFHQUwsVUFBUSxDQUFDO0FBQ0xRLFFBQUksRUFBRUMsb0VBREQ7QUFFTEMsV0FBTyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxPQURIO0FBRUxOO0FBRks7QUFGSixHQUFELENBQVI7QUFPSCxDQVpELENBREo7O0FBZWVQLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjY0Zjc2N2FmOTk5OTVjMmYyZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVQREFURV9BTEVSVCB9IGZyb20gJy4uL3N0b3JlL3R5cGVzL2FsZXJ0VHlwZXMnXHJcbmNvbnN0IGNhdGNoQXN5bmNFcnJvciA9IChjYiwgZGlzcGF0Y2gpID0+XHJcbiAgICBjYigpLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnIucmVzcG9uc2VcclxuICAgICAgICAgICAgPyBlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgIDogJ1NvbWV0aGluZyB3YXMgd3JvbmcgOighJ1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVVBEQVRFX0FMRVJULFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0Y2hBc3luY0Vycm9yXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=