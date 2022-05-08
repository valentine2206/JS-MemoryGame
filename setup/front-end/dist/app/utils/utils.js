"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseUrl = parseUrl;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.array.map.js");

function parseUrl() {
  var url = window.location;
  var query = url.href.split("?")[1] || "";
  var delimiter = "&";
  var result = {};
  var parts = query.split(delimiter);
  return parts.map(function (items) {
    return items.split("=");
  }).reduce(function (result, kv) {
    result[kv[0]] = kv[1];
    return result;
  }, {});
}