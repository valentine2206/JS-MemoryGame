"use strict";

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.parse-int.js");

require("core-js/modules/es.object.define-property.js");

var _utils = require("../../utils/utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// TODO Step 7 import { Component } from "../../utils/component";
// TODO Step 7 import template from "./score.component.html"
(function () {
  // TODO Step 6 remove this closure
  var ScoreComponent = /*#__PURE__*/function () {
    function ScoreComponent(id) {
      _classCallCheck(this, ScoreComponent);

      var params = (0, _utils.parseUrl)();
      this.name = params.name;
      this.size = parseInt(params.size);
      this.time = parseInt(params.time);
    }

    _createClass(ScoreComponent, [{
      key: "init",
      value: function init() {
        document.getElementById('name').innerText = this.name;
        document.getElementById('size').innerText = this.size;
        document.getElementById('time').innerText = this.time;
      } // TODO Step 7 implement getTemplate() {}

    }]);

    return ScoreComponent;
  }(); // put component in global scope, to be runnable right from the HTML.
  // TODO Step 7 export ScoreComponent


  window.ScoreComponent = ScoreComponent;
})();