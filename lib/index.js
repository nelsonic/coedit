var V = (function () { // create a basic module ("IIFE")
    'use strict';
    var dummy = 0;
    // allow external access to private variables & methods by returning them:
    return {
        dummy : dummy
    };
}());

exports.V = V;