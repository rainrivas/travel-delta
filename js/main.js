YUI().use(
	'aui-form-validator',
	function(Y) {
		var rules =
			{
				locationName:
					{
						required: true
					},
				locationAddress:
					{
						required: true
					},
				locationCity:
					{
						required: true
					},
				locationZip:
					{
						minLength: 5,
						maxLength: 5,
						required: true
					}
			};

		var fieldStrings =
			{
				locationName:
					{
						required: 'Nickname for this location.'
					},
				locationAddress:
					{
						required: 'Address of this location.'
					},
				locationCity:
					{
						required: 'City for this location.'
					},
				locationZip:
					{
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

// sweet es6
const addFav = () => {
	const favLocationGroups = document.getElementsByClassName('favorite-location-groups')[0];

	// make the wrapping div
	const newFormGroup = document.createElement('div');
	newFormGroup.className = 'form-group';

	// make a new label
	const newLabel = document.createElement('label');
	newLabel.className = 'control-label';
	newLabel.setAttribute('for', 'favoriteLocation')
	newLabel.innerText = 'Favorite Location:';

	// make a new input
	const newFavLocationInput = document.createElement('input');
	newFavLocationInput.className = 'form-control';
	newFavLocationInput.setAttribute('type', 'text');

	// put label and input inside wrapping div
	// append the new form-group to favLocationGroups
	newFormGroup.appendChild(newLabel);
	newFormGroup.appendChild(newFavLocationInput);
	favLocationGroups.appendChild(newFormGroup);
}
