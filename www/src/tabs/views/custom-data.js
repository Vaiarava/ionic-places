$stateProvider

  // setup an abstract state for the tabs directive
    .state('parent', {
    	data: {
    		title: "fri",
    		header: "Mol",
    		url: 'custom-data/tab',
    		abstract: true,
    		templateUrl: 'src/templates/tabs/view/custom-data.html'
    	}
  })