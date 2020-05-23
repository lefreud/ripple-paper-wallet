'use strict';
const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI();
console.log(api.generateXAddress());
