'use strict';

angular.module('actionsDemo', ['times.tabletop'])

.config(function(TabletopProvider){
	// Get the address of the spreadsheet
	var spreadsheetUrl = config.actions_spreadsheet;

	// Configure tabletop with the address
	TabletopProvider.setTabletopOptions({
		key: spreadsheetUrl + '/pubhtml',
		simpleSheet: false
	});
})

.config(function($interpolateProvider){
	// Change the default angular escape code as this clashes with
	// NationBuilder's Liquid and causes all our inlines to disappear
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});