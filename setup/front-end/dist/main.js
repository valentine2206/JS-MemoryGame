"use strict";

var _utils = require("./app/utils/utils");

var parameters = (0, _utils.parseUrl)();
document.querySelector("body").appendChild(document.createTextNode(JSON.stringify(parameters)));