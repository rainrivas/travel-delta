YUI().use(
	'aui-form-validator',
	function(Y) {
		var rules = {
			currentLocationName: {
				required: true
			},
			currentLocationAddress: {
				required: true
			},
			currentLocationZip: {
				minLength: 5,
				maxLength: 5,
				required: true
			},
			newLocationName: {
				required: true
			},
			newLocationAddress: {
				required: true
			},
			newLocationZip: {
				minLength: 5,
				maxLength: 5,
				required: true
			}
		};

		var fieldStrings = {
			currentLocationName: {
				required: 'Nickname for your current location.'
			},
			currentLocationAddress: {
				required: 'Address of your current location.'
			},
			currentLocationZip: {
				required: 'Current location zip code.'
			},
			newLocationName: {
				required: 'Nickname for your new location.'
			},
			newLocationAddress: {
				required: 'Address of your new location.'
			},
			newLocationZip: {
				required: 'Current location zip code.'
			}
		};

		new Y.FormValidator({
			boundingBox: '#locationGroups',
			fieldStrings: fieldStrings,
			rules: rules,
			showAllMessages: true
		});
	}
);
