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
  console.log(req);
  console.log(req === null || req === void 0 ? void 0 : req.params);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG91ci9bc2x1Z10uanMiXSwibmFtZXMiOlsiRGV0YWlsSXRlbSIsImljb24iLCJjbGFzc0NvbnRhaW5lciIsImNsYXNzU3ZnIiwiY2hpbGRyZW4iLCJfX2h0bWwiLCJUb3VyRGV0YWlscyIsInRvdXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwiYXV0aCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJzdHJpcGUiLCJnZXRTdHJpcGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJnZXRUb3VyIiwidXNlQ2FsbGJhY2siLCJ0b3VyQWN0aW9ucyIsInVzZUVmZmVjdCIsIk9iamVjdCIsImVudHJpZXMiLCJsZW5ndGgiLCJuYW1lIiwiaW1hZ2VDb3ZlciIsImR1cmF0aW9uIiwic3RhcnRMb2NhdGlvbiIsImRlc2NyaXB0aW9uIiwiRGF0ZSIsInN0YXJ0RGF0ZXMiLCJ0b0xvY2FsZVN0cmluZyIsIm1vbnRoIiwieWVhciIsImRpZmZpY3VsdHkiLCJtYXhHcm91cFNpemUiLCJyYXRpbmdzQXZlcmFnZSIsImd1aWRlcyIsIm1hcCIsImd1aWRlIiwiaWQiLCJzcGxpdCIsInAiLCJpIiwiaW1hZ2VzIiwiaW1nIiwibG9jYXRpb25zIiwicmV2aWV3cyIsInJldmlldyIsImdldENoZWNrb3V0U2Vzc2lvbiIsImdldEluaXRpYWxQcm9wcyIsInN0b3JlIiwicmVxIiwiY29uc29sZSIsImxvZyIsInBhcmFtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxDQUFDO0FBQUVDLE1BQUY7QUFBUUMsZ0JBQVI7QUFBd0JDLFVBQXhCO0FBQWtDQztBQUFsQyxDQUFELGtC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QUFvQmlDLEdBQUcsQ0FBQ0csTUFBSixDQUFXeEMsSUFBL0IsQ0FBZixDQUFOO0FBQ0gsQ0FKRDs7QUFNZVosMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdG91ci9bc2x1Z10uMDRmNGU3ZmY1MDU2YTkwOWIxOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IE1hcGJveEdsIGZyb20gJ0AvY29tcG9uZW50cy9tb2R1bGVzL21hcGJveGdsJ1xuaW1wb3J0IExvYWRlciBmcm9tICdAL2NvbXBvbmVudHMvZWxlbWVudHMvTG9hZGVyJ1xuaW1wb3J0IHsgZ2V0U3RyaXBlLCBnZXRDaGVja291dFNlc3Npb24gfSBmcm9tICdAL3V0aWxzL3N0cmlwZSdcbmltcG9ydCAqIGFzIHRvdXJBY3Rpb25zIGZyb20gJ0Avc3RvcmUvYWN0aW9ucy90b3VyQWN0aW9ucydcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICdAL3N0b3JlL3N0b3JlJ1xuaW1wb3J0IFJldmlld0NhcmQgZnJvbSAnQC9jb21wb25lbnRzL21vZHVsZXMvUmV2aWV3Q2FyZCdcbmltcG9ydCBIZXJvIGZyb20gJ0AvY29tcG9uZW50cy9tb2R1bGVzL0hlcm8nXG5pbXBvcnQgR3VpZGVEZXRhaWxzIGZyb20gJ0AvY29tcG9uZW50cy9tb2R1bGVzL0d1aWRlRGV0YWlscydcblxuY29uc3QgRGV0YWlsSXRlbSA9ICh7IGljb24sIGNsYXNzQ29udGFpbmVyLCBjbGFzc1N2ZywgY2hpbGRyZW4gfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc0NvbnRhaW5lcn0+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgPHVzZSB4bGluazpocmVmPVwiL2ltZy9pY29ucy5zdmcjaWNvbi0ke2ljb259XCIgLz5gLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTdmd9XG4gICAgICAgIC8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbilcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IHdyYXBwZXIuZ2V0U3RhdGljUHJvcHMoYXN5bmMgKHsgc3RvcmUsIHBhcmFtcyB9KSA9PiB7XG4vLyAgICAgcmV0dXJuIGF3YWl0IHN0b3JlLmRpc3BhdGNoKHRvdXJBY3Rpb25zLmdldFRvdXIocGFyYW1zLnNsdWcpKVxuLy8gfSlcblxuY29uc3QgVG91ckRldGFpbHMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0b3VyIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS50b3VyKVxuICAgIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hdXRoKVxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICAgIGNvbnN0IHN0cmlwZSA9IGdldFN0cmlwZSgpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeVxuXG4gICAgY29uc3QgZ2V0VG91ciA9IHVzZUNhbGxiYWNrKHNsdWcgPT4gZGlzcGF0Y2godG91ckFjdGlvbnMuZ2V0VG91cihzbHVnKSksIFtcbiAgICAgICAgZGlzcGF0Y2gsXG4gICAgXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiBnZXRUb3VyKHNsdWcpLCBbc2x1ZywgZ2V0VG91cl0pXG5cbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModG91cikubGVuZ3RoID09PSAwID8gKFxuICAgICAgICA8TG9hZGVyIC8+XG4gICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT57YFRvdXIgfCAke3RvdXIubmFtZX1gfTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxIZXJvIGltYWdlQ292ZXI9e3RvdXIuaW1hZ2VDb3Zlcn0gbmFtZT17dG91ci5uYW1lfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZy1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmctcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RvdXIubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZy1ib3hfX2dyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGV0YWlsSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjbG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NDb250YWluZXI9XCJoZWFkaW5nLWJveF9fZGV0YWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc1N2Zz1cImhlYWRpbmctYm94X19pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLWJveF9fdGV4dFwiPntgJHt0b3VyLmR1cmF0aW9ufSBkYXlzYH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0RldGFpbEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGV0YWlsSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJtYXAtcGluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0NvbnRhaW5lcj1cImhlYWRpbmctYm94X19kZXRhaWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzU3ZnPVwiaGVhZGluZy1ib3hfX2ljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmctYm94X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3VyLnN0YXJ0TG9jYXRpb24uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EZXRhaWxJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24tZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJ2aWV3LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVydmlldy1ib3hfX2dyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRpbmctc2Vjb25kYXJ5IG1hLWJ0LWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1aWNrIGZhY3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGV0YWlsSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiY2FsZW5kYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0NvbnRhaW5lcj1cIm92ZXJ2aWV3LWJveF9fZGV0YWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NTdmc9XCJvdmVydmlldy1ib3hfX2ljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3ZlcnZpZXctYm94X19sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV4dCBkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3ZlcnZpZXctYm94X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91ci5zdGFydERhdGVzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnRvTG9jYWxlU3RyaW5nKCdlbi11cycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EZXRhaWxJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhaWxJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ0cmVuZGluZy11cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzQ29udGFpbmVyPVwib3ZlcnZpZXctYm94X19kZXRhaWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc1N2Zz1cIm92ZXJ2aWV3LWJveF9faWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdmVydmlldy1ib3hfX2xhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaWZmaWN1bHR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3ZlcnZpZXctYm94X190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG91ci5kaWZmaWN1bHR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EZXRhaWxJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhaWxJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ1c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NDb250YWluZXI9XCJvdmVydmlldy1ib3hfX2RldGFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzU3ZnPVwib3ZlcnZpZXctYm94X19pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm92ZXJ2aWV3LWJveF9fbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcnRpY2lwYW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm92ZXJ2aWV3LWJveF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake3RvdXIubWF4R3JvdXBTaXplfSBQZW9wbGVgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EZXRhaWxJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhaWxJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJzdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NDb250YWluZXI9XCJvdmVydmlldy1ib3hfX2RldGFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzU3ZnPVwib3ZlcnZpZXctYm94X19pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm92ZXJ2aWV3LWJveF9fbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJhdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm92ZXJ2aWV3LWJveF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake3RvdXIucmF0aW5nc0F2ZXJhZ2V9IC8gNWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RldGFpbEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcnZpZXctYm94X19ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkaW5nLXNlY29uZGFyeSBtYS1idC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIHRvdXIgZ3VpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG91ci5ndWlkZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91ci5ndWlkZXMubWFwKGd1aWRlID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHdWlkZURldGFpbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2d1aWRlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1aWRlPXtndWlkZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkaW5nLXNlY29uZGFyeSBtYS1idC1sZ1wiPntgQWJvdXQgJHt0b3VyLm5hbWV9IHRvdXJgfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIHt0b3VyLmRlc2NyaXB0aW9uLnNwbGl0KFsnXFxuJ10pLm1hcCgocCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25fX3RleHRcIiBrZXk9e2BwYXJhZ3JhcGgtJHtpfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24tcGljdHVyZXNcIj5cbiAgICAgICAgICAgICAgICB7dG91ci5pbWFnZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgdG91ci5pbWFnZXMubWFwKChpbWcsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljdHVyZS1ib3hcIiBrZXk9e2B0b3VyLWltYWdlLSR7aX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvdG91cnMvJHtpbWd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHt0b3VyLm5hbWV9IFRvdXIgJHtpICsgMX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwaWN0dXJlLWJveF9faW1nIHBpY3R1cmUtYm94X19pbWctLSR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1tYXBcIj5cbiAgICAgICAgICAgICAgICA8TWFwYm94R2wgbG9jYXRpb25zPXt0b3VyLmxvY2F0aW9uc30gLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1yZXZpZXdzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdzXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0b3VyLnJldmlld3MgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdXIucmV2aWV3cy5tYXAocmV2aWV3ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV2aWV3Q2FyZCBrZXk9e3Jldmlldy5pZH0gcmV2aWV3PXtyZXZpZXd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24tY3RhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGFfX2ltZyBjdGFfX2ltZy0tbG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9sb2dvLXdoaXRlLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTmF0b3VycyBsb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTk1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVub3B0aW1pemVkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltZy90b3Vycy8ke3RvdXIuaW1hZ2VzWzFdfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake3RvdXIubmFtZX0gUGljdHVyZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdGFfX2ltZyBjdGFfX2ltZy0tMVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvdG91cnMvJHt0b3VyLmltYWdlc1syXX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHt0b3VyLm5hbWV9IFBpY3R1cmVgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3RhX19pbWcgY3RhX19pbWctLTJcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YV9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRpbmdfX3NlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdIQVQgQVJFIFlPVSBXQUlUSU5HIEZPUj9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjdGFfX3RleHRcIj57YCR7dG91ci5kdXJhdGlvbn0gZGF5cy4gMSBhZHZlbnR1cmUuIEluZmluaXRlIG1lbW9yaWVzLiBNYWtlIGl0IHlvdXJzIHRvZGF5IWB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzQXV0aGVudGljYXRlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tLWdyZWVuIHNwYW4tYWxsLXJvd3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJvb2stdG91clwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q2hlY2tvdXRTZXNzaW9uKHRvdXIuaWQsIHN0cmlwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vayB0b3VyIG5vdyFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIkxvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tLWdyZWVuIHNwYW4tYWxsLXJvd3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZyBpbiB0byBib29rIGEgdG91ciFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cblRvdXJEZXRhaWxzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHN0b3JlLCByZXEgfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlcSlcbiAgICBjb25zb2xlLmxvZyhyZXE/LnBhcmFtcylcbiAgICBhd2FpdCBzdG9yZS5kaXNwYXRjaCh0b3VyQWN0aW9ucy5nZXRUb3VyKHJlcS5wYXJhbXMuc2x1ZykpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvdXJEZXRhaWxzXG4iXSwic291cmNlUm9vdCI6IiJ9