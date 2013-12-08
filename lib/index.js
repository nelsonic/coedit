var V = (function () { // create a basic module ("IIFE")
    'use strict';
    function readFile() {
        return true;
    }
    // allow external access to private variables & methods by returning them:
    return {
        readFile: readFile
    };
}());

module.exports = V;