'use strict';

(function() {
angular.module('actionsDemo')
.controller('ActionsController', ['$scope', '$log', 'ActionService', ActionsController])

.directive('actionButton', function ActionButtonDirective() {
  return {
    restrict: 'E',
    templateUrl: 'action_button.html',
    scope: { action: '=' },
    controller:  ['$scope', '$element', '$timeout', ActionButtonController]
  }
});

/**
  * ActionsController
  *
  * *$scope*
  * * actions - Array of actions to display
  */
function ActionsController($scope, $log, ActionService) {
	$scope.actions = [];

	ActionService.then(function(actions) {
		$scope.actions = actions.allActions();
	});
}

/**
  * ActionButtonController
  *
  * Adjusts the page_id on the signup form to send the user to the next page
  */
function ActionButtonController($scope, $element, $timeout) {
	setDestinationPage($scope.action);
 
	// Sets the destination page for this action. Only sets it if
	// action is present
	function setDestinationPage(action) {
		// Timeout to give the DOM a chance to render so the
		// input element can be found
		$timeout(function() {
			// Find the page id from the slug
			var pageID = config.page_map[action['Page Slug']];
		
			// Find the hidden form element, update it’s value
			$element.find("input[name='page_id']").attr('value', pageID);
		}, 0);
	}
}

})();
