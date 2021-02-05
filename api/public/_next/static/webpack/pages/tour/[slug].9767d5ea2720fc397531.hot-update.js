webpackHotUpdate_N_E("pages/tour/[slug]",{

/***/ "./pages/tour/[slug].js":
/*!******************************!*\
  !*** ./pages/tour/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_modules_mapboxgl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/modules/mapboxgl */ "./components/modules/mapboxgl.js");
/* harmony import */ var _components_elements_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/elements/Loader */ "./components/elements/Loader.js");
/* harmony import */ var _utils_stripe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/stripe */ "./utils/stripe.js");
/* harmony import */ var _store_actions_tourActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/store/actions/tourActions */ "./store/actions/tourActions.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/store/store */ "./store/store.js");
/* harmony import */ var _components_modules_ReviewCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/modules/ReviewCard */ "./components/modules/ReviewCard.js");
/* harmony import */ var _components_modules_Hero__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/modules/Hero */ "./components/modules/Hero.js");
/* harmony import */ var _components_modules_GuideDetails__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/modules/GuideDetails */ "./components/modules/GuideDetails.js");



var _jsxFileName = "C:\\development\\udemy\\node-bootcamp\\node-natours\\app\\pages\\tour\\[slug].js",
    _s = $RefreshSig$();
















const DetailItem = ({
  icon,
  classContainer,
  classSvg,
  children
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: classContainer,
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    dangerouslySetInnerHTML: {
      __html: `<use xlink:href="/img/icons.svg#icon-${icon}" />`
    },
    className: classSvg
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, undefined), children]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 18,
  columnNumber: 5
}, undefined); // export const getStaticProps = wrapper.getStaticProps(async ({ store, params }) => {
//     return await store.dispatch(tourActions.getTour(params.slug))
// })


_c = DetailItem;

const TourDetails = () => {
  _s();

  const {
    tour
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.tour);
  const {
    isAuthenticated
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.auth);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const stripe = Object(_utils_stripe__WEBPACK_IMPORTED_MODULE_9__["getStripe"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const {
    slug
  } = router.query;
  const getTour = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(slug => dispatch(_store_actions_tourActions__WEBPACK_IMPORTED_MODULE_10__["getTour"](slug)), [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => getTour(slug), [slug, getTour]);
  return Object.entries(tour).length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_elements_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: `Tour | ${tour.name}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "section-header",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules_Hero__WEBPACK_IMPORTED_MODULE_13__["default"], {
        imageCover: tour.imageCover,
        name: tour.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "heading-box",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "heading-primary",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: tour.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "heading-box__group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailItem, {
            icon: "clock",
            classContainer: "heading-box__detail",
            classSvg: "heading-box__icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "heading-box__text",
              children: `${tour.duration} days`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailItem, {
            icon: "map-pin",
            classContainer: "heading-box__detail",
            classSvg: "heading-box__icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "heading-box__text",
              children: tour.startLocation.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "section-description",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "overview-box",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "overview-box__group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "heading-secondary ma-bt-lg",
              children: "Quick facts"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailItem, {
              icon: "calendar",
              classContainer: "overview-box__detail",
              classSvg: "overview-box__icon",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "overview-box__label",
                children: "Next date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "overview-box__text",
                children: new Date(tour.startDates[0]).toLocaleString('en-us', {
                  month: 'long',
                  year: 'numeric'
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailItem, {
              icon: "trending-up",
              classContainer: "overview-box__detail",
              classSvg: "overview-box__icon",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "overview-box__label",
                children: "Difficulty"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "overview-box__text",
                children: tour.difficulty
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailItem, {
              icon: "user",
              classContainer: "overview-box__detail",
              classSvg: "overview-box__icon",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "overview-box__label",
                children: "Participants"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "overview-box__text",
                children: `${tour.maxGroupSize} People`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailItem, {
              icon: "star",
              classContainer: "overview-box__detail",
              classSvg: "overview-box__icon",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "overview-box__label",
                children: "Rating"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "overview-box__text",
                children: `${tour.ratingsAverage} / 5`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "overview-box__group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "heading-secondary ma-bt-lg",
              children: "Your tour guides"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 29
            }, undefined), tour.guides && tour.guides.map(guide => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules_GuideDetails__WEBPACK_IMPORTED_MODULE_14__["default"], {
              guide: guide
            }, guide.id, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 37
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "description-box",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "heading-secondary ma-bt-lg",
          children: `About ${tour.name} tour`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }, undefined), tour.description.split(['\n']).map((p, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "description__text",
          children: p
        }, `paragraph-${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 25
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "section-pictures",
      children: tour.images && tour.images.map((img, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "picture-box",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: `/img/tours/${img}`,
          alt: `${tour.name} Tour ${i + 1}`,
          className: `picture-box__img picture-box__img--${i + 1}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 29
        }, undefined)
      }, `tour-image-${i}`, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 25
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "section-map",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules_mapboxgl__WEBPACK_IMPORTED_MODULE_7__["default"], {
        locations: tour.locations
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "section-reviews",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "reviews",
        children: tour.reviews && tour.reviews.map(review => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modules_ReviewCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
          review: review
        }, review.id, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 29
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "section-cta",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "cta",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "cta__img cta__img--logo",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
            src: "/img/logo-white.png",
            alt: "Natours logo",
            height: 100,
            width: 195 // unoptimized={true}
            ,
            priority: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: `/img/tours/${tour.images[1]}`,
          alt: `${tour.name} Picture`,
          className: "cta__img cta__img--1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: `/img/tours/${tour.images[2]}`,
          alt: `${tour.name} Picture`,
          className: "cta__img cta__img--2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "cta__content",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "heading__secondary",
            children: "WHAT ARE YOU WAITING FOR?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "cta__text",
            children: `${tour.duration} days. 1 adventure. Infinite memories. Make it yours today!`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 25
          }, undefined), isAuthenticated ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn btn--green span-all-rows",
            id: "book-tour",
            type: "button",
            onClick: () => Object(_utils_stripe__WEBPACK_IMPORTED_MODULE_9__["getCheckoutSession"])(tour.id, stripe),
            children: "Book tour now!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 29
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "Login",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "btn btn--green span-all-rows",
              children: "Log in to book a tour!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

_s(TourDetails, "qRRXqCeexuFht56Ns5ppD3RKrZI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c2 = TourDetails;

TourDetails.getInitialProps = async ({
  store,
  req
}) => {
  console.log(req.params.slug);
  await store.dispatch(_store_actions_tourActions__WEBPACK_IMPORTED_MODULE_10__["getTour"](req.params.slug));
};

/* harmony default export */ __webpack_exports__["default"] = (TourDetails);

var _c, _c2;

$RefreshReg$(_c, "DetailItem");
$RefreshReg$(_c2, "TourDetails");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG91ci9bc2x1Z10uanMiXSwibmFtZXMiOlsiRGV0YWlsSXRlbSIsImljb24iLCJjbGFzc0NvbnRhaW5lciIsImNsYXNzU3ZnIiwiY2hpbGRyZW4iLCJfX2h0bWwiLCJUb3VyRGV0YWlscyIsInRvdXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwiYXV0aCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJzdHJpcGUiLCJnZXRTdHJpcGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJnZXRUb3VyIiwidXNlQ2FsbGJhY2siLCJ0b3VyQWN0aW9ucyIsInVzZUVmZmVjdCIsIk9iamVjdCIsImVudHJpZXMiLCJsZW5ndGgiLCJuYW1lIiwiaW1hZ2VDb3ZlciIsImR1cmF0aW9uIiwic3RhcnRMb2NhdGlvbiIsImRlc2NyaXB0aW9uIiwiRGF0ZSIsInN0YXJ0RGF0ZXMiLCJ0b0xvY2FsZVN0cmluZyIsIm1vbnRoIiwieWVhciIsImRpZmZpY3VsdHkiLCJtYXhHcm91cFNpemUiLCJyYXRpbmdzQXZlcmFnZSIsImd1aWRlcyIsIm1hcCIsImd1aWRlIiwiaWQiLCJzcGxpdCIsInAiLCJpIiwiaW1hZ2VzIiwiaW1nIiwibG9jYXRpb25zIiwicmV2aWV3cyIsInJldmlldyIsImdldENoZWNrb3V0U2Vzc2lvbiIsImdldEluaXRpYWxQcm9wcyIsInN0b3JlIiwicmVxIiwiY29uc29sZSIsImxvZyIsInBhcmFtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxDQUFDO0FBQUVDLE1BQUY7QUFBUUMsZ0JBQVI7QUFBd0JDLFVBQXhCO0FBQWtDQztBQUFsQyxDQUFELGtCQUNmO0FBQUssV0FBUyxFQUFFRixjQUFoQjtBQUFBLDBCQUNJO0FBQ0ksMkJBQXVCLEVBQUU7QUFDckJHLFlBQU0sRUFBRyx3Q0FBdUNKLElBQUs7QUFEaEMsS0FEN0I7QUFJSSxhQUFTLEVBQUVFO0FBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBT0tDLFFBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosQyxDQVdBO0FBQ0E7QUFDQTs7O0tBYk1KLFU7O0FBZU4sTUFBTU0sV0FBVyxHQUFHLE1BQU07QUFBQTs7QUFDdEIsUUFBTTtBQUFFQztBQUFGLE1BQVdDLCtEQUFXLENBQUNDLEtBQUssSUFBSUEsS0FBSyxDQUFDRixJQUFoQixDQUE1QjtBQUNBLFFBQU07QUFBRUc7QUFBRixNQUFzQkYsK0RBQVcsQ0FBQ0MsS0FBSyxJQUFJQSxLQUFLLENBQUNFLElBQWhCLENBQXZDO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLFFBQU1DLE1BQU0sR0FBR0MsK0RBQVMsRUFBeEI7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVdGLE1BQU0sQ0FBQ0csS0FBeEI7QUFFQSxRQUFNQyxPQUFPLEdBQUdDLHlEQUFXLENBQUNILElBQUksSUFBSU4sUUFBUSxDQUFDVSxtRUFBQSxDQUFvQkosSUFBcEIsQ0FBRCxDQUFqQixFQUE4QyxDQUNyRU4sUUFEcUUsQ0FBOUMsQ0FBM0I7QUFJQVcseURBQVMsQ0FBQyxNQUFNSCxPQUFPLENBQUNGLElBQUQsQ0FBZCxFQUFzQixDQUFDQSxJQUFELEVBQU9FLE9BQVAsQ0FBdEIsQ0FBVDtBQUVBLFNBQU9JLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlbEIsSUFBZixFQUFxQm1CLE1BQXJCLEtBQWdDLENBQWhDLGdCQUNILHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERyxnQkFHSDtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0k7QUFBQSxrQkFBUyxVQUFTbkIsSUFBSSxDQUFDb0IsSUFBSztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUlJO0FBQVMsZUFBUyxFQUFDLGdCQUFuQjtBQUFBLDhCQUNJLHFFQUFDLGlFQUFEO0FBQU0sa0JBQVUsRUFBRXBCLElBQUksQ0FBQ3FCLFVBQXZCO0FBQW1DLFlBQUksRUFBRXJCLElBQUksQ0FBQ29CO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBLGdDQUNJO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBLGlDQUNJO0FBQUEsc0JBQU9wQixJQUFJLENBQUNvQjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBSUk7QUFBSyxtQkFBUyxFQUFDLG9CQUFmO0FBQUEsa0NBQ0kscUVBQUMsVUFBRDtBQUNJLGdCQUFJLEVBQUMsT0FEVDtBQUVJLDBCQUFjLEVBQUMscUJBRm5CO0FBR0ksb0JBQVEsRUFBQyxtQkFIYjtBQUFBLG1DQUtJO0FBQU0sdUJBQVMsRUFBQyxtQkFBaEI7QUFBQSx3QkFBc0MsR0FBRXBCLElBQUksQ0FBQ3NCLFFBQVM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFRSSxxRUFBQyxVQUFEO0FBQ0ksZ0JBQUksRUFBQyxTQURUO0FBRUksMEJBQWMsRUFBQyxxQkFGbkI7QUFHSSxvQkFBUSxFQUFDLG1CQUhiO0FBQUEsbUNBS0k7QUFBTSx1QkFBUyxFQUFDLG1CQUFoQjtBQUFBLHdCQUNLdEIsSUFBSSxDQUFDdUIsYUFBTCxDQUFtQkM7QUFEeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosZUE4Qkk7QUFBUyxlQUFTLEVBQUMscUJBQW5CO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSwrQkFDSTtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxxQkFBZjtBQUFBLG9DQUNJO0FBQUksdUJBQVMsRUFBQyw0QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUlJLHFFQUFDLFVBQUQ7QUFDSSxrQkFBSSxFQUFDLFVBRFQ7QUFFSSw0QkFBYyxFQUFDLHNCQUZuQjtBQUdJLHNCQUFRLEVBQUMsb0JBSGI7QUFBQSxzQ0FLSTtBQUFNLHlCQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUxKLGVBUUk7QUFBTSx5QkFBUyxFQUFDLG9CQUFoQjtBQUFBLDBCQUNLLElBQUlDLElBQUosQ0FDR3pCLElBQUksQ0FBQzBCLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FESCxFQUVDQyxjQUZELENBRWdCLE9BRmhCLEVBRXlCO0FBQ3RCQyx1QkFBSyxFQUFFLE1BRGU7QUFFdEJDLHNCQUFJLEVBQUU7QUFGZ0IsaUJBRnpCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkosZUFxQkkscUVBQUMsVUFBRDtBQUNJLGtCQUFJLEVBQUMsYUFEVDtBQUVJLDRCQUFjLEVBQUMsc0JBRm5CO0FBR0ksc0JBQVEsRUFBQyxvQkFIYjtBQUFBLHNDQUtJO0FBQU0seUJBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTEosZUFRSTtBQUFNLHlCQUFTLEVBQUMsb0JBQWhCO0FBQUEsMEJBQ0s3QixJQUFJLENBQUM4QjtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQXJCSixlQWlDSSxxRUFBQyxVQUFEO0FBQ0ksa0JBQUksRUFBQyxNQURUO0FBRUksNEJBQWMsRUFBQyxzQkFGbkI7QUFHSSxzQkFBUSxFQUFDLG9CQUhiO0FBQUEsc0NBS0k7QUFBTSx5QkFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFMSixlQVFJO0FBQU0seUJBQVMsRUFBQyxvQkFBaEI7QUFBQSwwQkFDTSxHQUFFOUIsSUFBSSxDQUFDK0IsWUFBYTtBQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFqQ0osZUE2Q0kscUVBQUMsVUFBRDtBQUNJLGtCQUFJLEVBQUMsTUFEVDtBQUVJLDRCQUFjLEVBQUMsc0JBRm5CO0FBR0ksc0JBQVEsRUFBQyxvQkFIYjtBQUFBLHNDQUtJO0FBQU0seUJBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTEosZUFRSTtBQUFNLHlCQUFTLEVBQUMsb0JBQWhCO0FBQUEsMEJBQ00sR0FBRS9CLElBQUksQ0FBQ2dDLGNBQWU7QUFENUI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBN0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQTJESTtBQUFLLHFCQUFTLEVBQUMscUJBQWY7QUFBQSxvQ0FDSTtBQUFJLHVCQUFTLEVBQUMsNEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosRUFJS2hDLElBQUksQ0FBQ2lDLE1BQUwsSUFDR2pDLElBQUksQ0FBQ2lDLE1BQUwsQ0FBWUMsR0FBWixDQUFnQkMsS0FBSyxpQkFDakIscUVBQUMseUVBQUQ7QUFFSSxtQkFBSyxFQUFFQTtBQUZYLGVBQ1NBLEtBQUssQ0FBQ0MsRUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLENBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQTNESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBMkVJO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLGdDQUNJO0FBQUksbUJBQVMsRUFBQyw0QkFBZDtBQUFBLG9CQUE2QyxTQUFRcEMsSUFBSSxDQUFDb0IsSUFBSztBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLEVBRUtwQixJQUFJLENBQUN3QixXQUFMLENBQWlCYSxLQUFqQixDQUF1QixDQUFDLElBQUQsQ0FBdkIsRUFBK0JILEdBQS9CLENBQW1DLENBQUNJLENBQUQsRUFBSUMsQ0FBSixrQkFDaEM7QUFBRyxtQkFBUyxFQUFDLG1CQUFiO0FBQUEsb0JBQ0tEO0FBREwsV0FBdUMsYUFBWUMsQ0FBRSxFQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURILENBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTNFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUJKLGVBa0hJO0FBQVMsZUFBUyxFQUFDLGtCQUFuQjtBQUFBLGdCQUNLdkMsSUFBSSxDQUFDd0MsTUFBTCxJQUNHeEMsSUFBSSxDQUFDd0MsTUFBTCxDQUFZTixHQUFaLENBQWdCLENBQUNPLEdBQUQsRUFBTUYsQ0FBTixrQkFDWjtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBLCtCQUNJO0FBQ0ksYUFBRyxFQUFHLGNBQWFFLEdBQUksRUFEM0I7QUFFSSxhQUFHLEVBQUcsR0FBRXpDLElBQUksQ0FBQ29CLElBQUssU0FBUW1CLENBQUMsR0FBRyxDQUFFLEVBRnBDO0FBR0ksbUJBQVMsRUFBRyxzQ0FDUkEsQ0FBQyxHQUFHLENBQ1A7QUFMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosU0FBbUMsY0FBYUEsQ0FBRSxFQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsSEosZUFnSUk7QUFBUyxlQUFTLEVBQUMsYUFBbkI7QUFBQSw2QkFDSSxxRUFBQyxvRUFBRDtBQUFVLGlCQUFTLEVBQUV2QyxJQUFJLENBQUMwQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoSUosZUFvSUk7QUFBUyxlQUFTLEVBQUMsaUJBQW5CO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxrQkFDSzFDLElBQUksQ0FBQzJDLE9BQUwsSUFDRzNDLElBQUksQ0FBQzJDLE9BQUwsQ0FBYVQsR0FBYixDQUFpQlUsTUFBTSxpQkFDbkIscUVBQUMsdUVBQUQ7QUFBNEIsZ0JBQU0sRUFBRUE7QUFBcEMsV0FBaUJBLE1BQU0sQ0FBQ1IsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBJSixlQTRJSTtBQUFTLGVBQVMsRUFBQyxhQUFuQjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLHlCQUFmO0FBQUEsaUNBQ0kscUVBQUMsaURBQUQ7QUFDSSxlQUFHLEVBQUMscUJBRFI7QUFFSSxlQUFHLEVBQUMsY0FGUjtBQUdJLGtCQUFNLEVBQUUsR0FIWjtBQUlJLGlCQUFLLEVBQUUsR0FKWCxDQUtJO0FBTEo7QUFNSSxvQkFBUTtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBV0k7QUFDSSxhQUFHLEVBQUcsY0FBYXBDLElBQUksQ0FBQ3dDLE1BQUwsQ0FBWSxDQUFaLENBQWUsRUFEdEM7QUFFSSxhQUFHLEVBQUcsR0FBRXhDLElBQUksQ0FBQ29CLElBQUssVUFGdEI7QUFHSSxtQkFBUyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFYSixlQWdCSTtBQUNJLGFBQUcsRUFBRyxjQUFhcEIsSUFBSSxDQUFDd0MsTUFBTCxDQUFZLENBQVosQ0FBZSxFQUR0QztBQUVJLGFBQUcsRUFBRyxHQUFFeEMsSUFBSSxDQUFDb0IsSUFBSyxVQUZ0QjtBQUdJLG1CQUFTLEVBQUM7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWhCSixlQXFCSTtBQUFLLG1CQUFTLEVBQUMsY0FBZjtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQyxvQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUlJO0FBQUcscUJBQVMsRUFBQyxXQUFiO0FBQUEsc0JBQTJCLEdBQUVwQixJQUFJLENBQUNzQixRQUFTO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkosRUFLS25CLGVBQWUsZ0JBQ1o7QUFDSSxxQkFBUyxFQUFDLDhCQURkO0FBRUksY0FBRSxFQUFDLFdBRlA7QUFHSSxnQkFBSSxFQUFDLFFBSFQ7QUFJSSxtQkFBTyxFQUFFLE1BQ0wwQyx3RUFBa0IsQ0FBQzdDLElBQUksQ0FBQ29DLEVBQU4sRUFBVTdCLE1BQVYsQ0FMMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFksZ0JBWVoscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFDLE9BQVg7QUFBQSxtQ0FDSTtBQUFHLHVCQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWpCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNUlKO0FBQUEsa0JBSEo7QUFpTUgsQ0EvTUQ7O0dBQU1SLFc7VUFDZUUsdUQsRUFDV0EsdUQsRUFDWEssdUQsRUFFRkkscUQ7OztNQUxiWCxXOztBQWlOTkEsV0FBVyxDQUFDK0MsZUFBWixHQUE4QixPQUFPO0FBQUVDLE9BQUY7QUFBU0M7QUFBVCxDQUFQLEtBQTBCO0FBQ3BEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxNQUFKLENBQVd4QyxJQUF2QjtBQUNBLFFBQU1vQyxLQUFLLENBQUMxQyxRQUFOLENBQWVVLG1FQUFBLENBQW9CaUMsR0FBRyxDQUFDRyxNQUFKLENBQVd4QyxJQUEvQixDQUFmLENBQU47QUFDSCxDQUhEOztBQUtlWiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90b3VyL1tzbHVnXS45NzY3ZDVlYTI3MjBmYzM5NzUzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgTWFwYm94R2wgZnJvbSAnQC9jb21wb25lbnRzL21vZHVsZXMvbWFwYm94Z2wnXG5pbXBvcnQgTG9hZGVyIGZyb20gJ0AvY29tcG9uZW50cy9lbGVtZW50cy9Mb2FkZXInXG5pbXBvcnQgeyBnZXRTdHJpcGUsIGdldENoZWNrb3V0U2Vzc2lvbiB9IGZyb20gJ0AvdXRpbHMvc3RyaXBlJ1xuaW1wb3J0ICogYXMgdG91ckFjdGlvbnMgZnJvbSAnQC9zdG9yZS9hY3Rpb25zL3RvdXJBY3Rpb25zJ1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJ0Avc3RvcmUvc3RvcmUnXG5pbXBvcnQgUmV2aWV3Q2FyZCBmcm9tICdAL2NvbXBvbmVudHMvbW9kdWxlcy9SZXZpZXdDYXJkJ1xuaW1wb3J0IEhlcm8gZnJvbSAnQC9jb21wb25lbnRzL21vZHVsZXMvSGVybydcbmltcG9ydCBHdWlkZURldGFpbHMgZnJvbSAnQC9jb21wb25lbnRzL21vZHVsZXMvR3VpZGVEZXRhaWxzJ1xuXG5jb25zdCBEZXRhaWxJdGVtID0gKHsgaWNvbiwgY2xhc3NDb250YWluZXIsIGNsYXNzU3ZnLCBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzQ29udGFpbmVyfT5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGA8dXNlIHhsaW5rOmhyZWY9XCIvaW1nL2ljb25zLnN2ZyNpY29uLSR7aWNvbn1cIiAvPmAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1N2Z31cbiAgICAgICAgLz5cbiAgICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuKVxuLy8gZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gd3JhcHBlci5nZXRTdGF0aWNQcm9wcyhhc3luYyAoeyBzdG9yZSwgcGFyYW1zIH0pID0+IHtcbi8vICAgICByZXR1cm4gYXdhaXQgc3RvcmUuZGlzcGF0Y2godG91ckFjdGlvbnMuZ2V0VG91cihwYXJhbXMuc2x1ZykpXG4vLyB9KVxuXG5jb25zdCBUb3VyRGV0YWlscyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRvdXIgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnRvdXIpXG4gICAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmF1dGgpXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gICAgY29uc3Qgc3RyaXBlID0gZ2V0U3RyaXBlKClcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5XG5cbiAgICBjb25zdCBnZXRUb3VyID0gdXNlQ2FsbGJhY2soc2x1ZyA9PiBkaXNwYXRjaCh0b3VyQWN0aW9ucy5nZXRUb3VyKHNsdWcpKSwgW1xuICAgICAgICBkaXNwYXRjaCxcbiAgICBdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IGdldFRvdXIoc2x1ZyksIFtzbHVnLCBnZXRUb3VyXSlcblxuICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0b3VyKS5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgIDxMb2FkZXIgLz5cbiAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPntgVG91ciB8ICR7dG91ci5uYW1lfWB9PC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPEhlcm8gaW1hZ2VDb3Zlcj17dG91ci5pbWFnZUNvdmVyfSBuYW1lPXt0b3VyLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZy1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dG91ci5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nLWJveF9fZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhaWxJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0NvbnRhaW5lcj1cImhlYWRpbmctYm94X19kZXRhaWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzU3ZnPVwiaGVhZGluZy1ib3hfX2ljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmctYm94X190ZXh0XCI+e2Ake3RvdXIuZHVyYXRpb259IGRheXNgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRGV0YWlsSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhaWxJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIm1hcC1waW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzQ29udGFpbmVyPVwiaGVhZGluZy1ib3hfX2RldGFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NTdmc9XCJoZWFkaW5nLWJveF9faWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZy1ib3hfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvdXIuc3RhcnRMb2NhdGlvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0RldGFpbEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcnZpZXctYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJ2aWV3LWJveF9fZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGluZy1zZWNvbmRhcnkgbWEtYnQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVpY2sgZmFjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhaWxJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjYWxlbmRhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzQ29udGFpbmVyPVwib3ZlcnZpZXctYm94X19kZXRhaWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc1N2Zz1cIm92ZXJ2aWV3LWJveF9faWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdmVydmlldy1ib3hfX2xhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXh0IGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdmVydmlldy1ib3hfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VyLnN0YXJ0RGF0ZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudG9Mb2NhbGVTdHJpbmcoJ2VuLXVzJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RldGFpbEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERldGFpbEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyZW5kaW5nLXVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NDb250YWluZXI9XCJvdmVydmlldy1ib3hfX2RldGFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzU3ZnPVwib3ZlcnZpZXctYm94X19pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm92ZXJ2aWV3LWJveF9fbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpZmZpY3VsdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdmVydmlldy1ib3hfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3VyLmRpZmZpY3VsdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RldGFpbEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERldGFpbEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0NvbnRhaW5lcj1cIm92ZXJ2aWV3LWJveF9fZGV0YWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NTdmc9XCJvdmVydmlldy1ib3hfX2ljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3ZlcnZpZXctYm94X19sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFydGljaXBhbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3ZlcnZpZXctYm94X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7dG91ci5tYXhHcm91cFNpemV9IFBlb3BsZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RldGFpbEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERldGFpbEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInN0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0NvbnRhaW5lcj1cIm92ZXJ2aWV3LWJveF9fZGV0YWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NTdmc9XCJvdmVydmlldy1ib3hfX2ljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3ZlcnZpZXctYm94X19sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmF0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3ZlcnZpZXctYm94X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7dG91ci5yYXRpbmdzQXZlcmFnZX0gLyA1YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGV0YWlsSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVydmlldy1ib3hfX2dyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRpbmctc2Vjb25kYXJ5IG1hLWJ0LWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgdG91ciBndWlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3VyLmd1aWRlcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VyLmd1aWRlcy5tYXAoZ3VpZGUgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEd1aWRlRGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Z3VpZGUuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3VpZGU9e2d1aWRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRpbmctc2Vjb25kYXJ5IG1hLWJ0LWxnXCI+e2BBYm91dCAke3RvdXIubmFtZX0gdG91cmB9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAge3RvdXIuZGVzY3JpcHRpb24uc3BsaXQoWydcXG4nXSkubWFwKChwLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbl9fdGV4dFwiIGtleT17YHBhcmFncmFwaC0ke2l9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3B9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1waWN0dXJlc1wiPlxuICAgICAgICAgICAgICAgIHt0b3VyLmltYWdlcyAmJlxuICAgICAgICAgICAgICAgICAgICB0b3VyLmltYWdlcy5tYXAoKGltZywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWN0dXJlLWJveFwiIGtleT17YHRvdXItaW1hZ2UtJHtpfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy90b3Vycy8ke2ltZ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake3RvdXIubmFtZX0gVG91ciAke2kgKyAxfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHBpY3R1cmUtYm94X19pbWcgcGljdHVyZS1ib3hfX2ltZy0tJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLW1hcFwiPlxuICAgICAgICAgICAgICAgIDxNYXBib3hHbCBsb2NhdGlvbnM9e3RvdXIubG9jYXRpb25zfSAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLXJldmlld3NcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld3NcIj5cbiAgICAgICAgICAgICAgICAgICAge3RvdXIucmV2aWV3cyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdG91ci5yZXZpZXdzLm1hcChyZXZpZXcgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZpZXdDYXJkIGtleT17cmV2aWV3LmlkfSByZXZpZXc9e3Jldmlld30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1jdGFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YV9faW1nIGN0YV9faW1nLS1sb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2xvZ28td2hpdGUucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJOYXRvdXJzIGxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxOTV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdW5vcHRpbWl6ZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1nL3RvdXJzLyR7dG91ci5pbWFnZXNbMV19YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YCR7dG91ci5uYW1lfSBQaWN0dXJlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN0YV9faW1nIGN0YV9faW1nLS0xXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy90b3Vycy8ke3RvdXIuaW1hZ2VzWzJdfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake3RvdXIubmFtZX0gUGljdHVyZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdGFfX2ltZyBjdGFfX2ltZy0tMlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3RhX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGluZ19fc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV0hBVCBBUkUgWU9VIFdBSVRJTkcgRk9SP1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImN0YV9fdGV4dFwiPntgJHt0b3VyLmR1cmF0aW9ufSBkYXlzLiAxIGFkdmVudHVyZS4gSW5maW5pdGUgbWVtb3JpZXMuIE1ha2UgaXQgeW91cnMgdG9kYXkhYH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNBdXRoZW50aWNhdGVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi0tZ3JlZW4gc3Bhbi1hbGwtcm93c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYm9vay10b3VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRDaGVja291dFNlc3Npb24odG91ci5pZCwgc3RyaXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29rIHRvdXIgbm93IVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiTG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi0tZ3JlZW4gc3Bhbi1hbGwtcm93c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nIGluIHRvIGJvb2sgYSB0b3VyIVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuVG91ckRldGFpbHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgc3RvcmUsIHJlcSB9KSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVxLnBhcmFtcy5zbHVnKVxuICAgIGF3YWl0IHN0b3JlLmRpc3BhdGNoKHRvdXJBY3Rpb25zLmdldFRvdXIocmVxLnBhcmFtcy5zbHVnKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG91ckRldGFpbHNcbiJdLCJzb3VyY2VSb290IjoiIn0=