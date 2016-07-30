/**
 * Sample that shows how disable-all directive works.
 *
 * @author Umed Khudoiberdiev <info@zar.tj>
 */
(function() {
    'use strict';

    /**
     * @ngdoc module
     * @name disableAllSample
     */
    angular.module('disableAllSample', ['disableAll'])
	.controller('ctrl', function($timeout) {
        var _self = this;

        // some async init method
        $timeout(function() {
            _self.initialized = true;
        }, 10);
    });

})();