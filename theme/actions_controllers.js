'use strict';

(function() {
angular.module('actionsDemo')
.controller('ActionsController', ['$log', 'Tabletop', ActionsController]);
	
/**
  * ActionsController
  */
function ActionsController($log, Tabletop) {
	Tabletop.then(function(TabletopSheets) {
		var allSheets = TabletopSheets[0];
		var actionSheet = TabletopSheets[0]["Actions"].all();

		// Iterate over the actions and log them
		for (var i=0; i<actionSheet.length; i++) {
		  $log.debug('Action: ' + actionSheet[i]['Name'] +  ', slug: ' + actionSheet[i]['Page Slug']);
		}
	});
}

})();
