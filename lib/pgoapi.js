'use strict';

const _ = require('lodash');

const defaultOptions = require('./default-options');

module.exports = class PGOAPI {
    constructor(options) {
        if(_.isString(options)) {
            this._token = options;
            options = {};
        }
        
        this._options = _.merge({}, defaultOptions, options);
    }
};