"use strict";
(self["webpackChunkyour_app"] = self["webpackChunkyour_app"] || []).push([
  ["src_index_js"],
  {
    "./src/index.js": function (module, exports, __webpack_require__) {
      // Your application code
      const App = __webpack_require__("./src/App.js");
      // More code...
      ReactDOM.render(<App />, document.getElementById("root"));
    },
    // Other modules...
  },
]);
