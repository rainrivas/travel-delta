YUI().use(
	'aui-form-validator',
	function(Y) {
		var rules = {
			locationName: {
				required: true
			},
			locationAddress: {
				required: true
			},
			locationCity: {
				required: true
			},
			locationZip: {
				minLength: 5,
				maxLength: 5,
				required: true
			}
		};

		var fieldStrings = {
			locationName: {
				required: 'Nickname for this location.'
			},
			locationAddress: {
				required: 'Address of this location.'
			},
			locationCity: {
				required: 'City for this location.'
			},
			locationZip: {
				required: 'Must be a valid zip code.'
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
