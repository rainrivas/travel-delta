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

// set count of location groups
let locationCount = countFavoriteLocations();

// function to count how many favorite location groups
function countFavoriteLocations() {
	var favLocGroup = $('#favoriteLocationGroup > .form-group');

	return favLocGroup.length;
}
// sweet es6
const addFav = () => {
	// locationCount function should recount 
	locationCount = countFavoriteLocations() + 1; //countFavoriteLocations();

	const favLocationGroups = document.getElementsByClassName('favorite-location-groups')[0];

	// make the wrapping div
	const newFormGroup = document.createElement('div');
	newFormGroup.className = 'form-group';

	// make new wrapper for input and delete buttons
	const newControlsDiv = document.createElement('div');
	newControlsDiv.className = 'controls';

	// make a new label
	const newLabel = document.createElement('label');
	newLabel.className = 'control-label';
	newLabel.setAttribute('for', 'favoriteLocation' + locationCount);
	newLabel.innerText = 'Favorite Location ' + locationCount + ':';

	// make a new input
	const newFavLocationInput = document.createElement('input');
	newFavLocationInput.className = 'form-control';
	newFavLocationInput.setAttribute('type', 'text');

	// make the delete button
	const newDeleteButton = document.createElement('span');
	newDeleteButton.className = 'glyphicon glyphicon-remove btn btn-danger';
	newDeleteButton.onclick = (e) => {
		var formGroup = document.getElementsByClassName('favorite-location-groups')[0];

		formGroup.removeChild(e.target.parentElement.parentElement);
	}

	// put label and input inside wrapping div
	// append the new form-group to favLocationGroups
	newFormGroup.appendChild(newLabel);
	newControlsDiv.appendChild(newFavLocationInput);
	newControlsDiv.appendChild(newDeleteButton);
	newFormGroup.appendChild(newControlsDiv);
	favLocationGroups.appendChild(newFormGroup);
}
