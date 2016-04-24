'user strict';

(function() {
	angular.module('actionsDemo')
	.factory('ActionService', ['$q', '$log', 'Tabletop', ActionService]);

	/**
	  * Factory for the Actions spreadsheet
	  * 
	  * *Methods*
	  * * allActions - Returns an array of all available actions
	  */
	function ActionService($q, $log, Tabletop) {
		var svc = init(),
			actionSheet = null,
			allSheets = null;
		
		return svc;

		/**
		  * Initialise tabletop and return a promise that resolves once the 
		  * spreadsheet has loaded
		  */
		function init() {
			// An object that holds all the methods the caller can access
			var service = {
				allActions: allActions
			}
			
			var deferred = $q.defer();			

			$log.debug('Actions are configured in: ' + config.actions_spreadsheet);

			// Load the spreadsheet
			Tabletop.then(function(TabletopSheets) {
				// Once the spreadsheet is loaded
				allSheets = TabletopSheets[0];
				actionSheet = TabletopSheets[0]["Actions"].all();
			
				deferred.resolve(service);
			});

			return deferred.promise;
		}
		
		/**
		  * Return all actions
		  */
		function allActions() {
			return actionSheet;
		}
	}
})();