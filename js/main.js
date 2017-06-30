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

/*
// set count of location groups
let locationCount = getFavoriteLocations();

// function to count how many favorite location groups
function getFavoriteLocations() {
	var favLocGroup = $('#favoriteLocationGroup > .form-group');

	return favLocGroup.length;
}

// Need to add function to reassign attributes 'for' and inntertext 'favorite location locationCounts'
const reassignFav = () => {
	locationCount = 1;

	$('#favoriteLocationGroup label.control-label').each(
		function(index, element) {
			
			element.setAttribute('for', 'favoriteLocation' + locationCount);
			element.innerText = 'Favorite Location ' + locationCount + ':';
			
			locationCount++;
		}
	);
}

// sweet es6
const addFav = () => {
	// locationCount function should recount 
	locationCount = getFavoriteLocations() + 1; //countFavoriteLocations();

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

		reassignFav();
	}

	// put label and input inside wrapping div
	// append the new form-group to favLocationGroups
	newFormGroup.appendChild(newLabel);
	newControlsDiv.appendChild(newFavLocationInput);
	newControlsDiv.appendChild(newDeleteButton);
	newFormGroup.appendChild(newControlsDiv);
	favLocationGroups.appendChild(newFormGroup);
}
*/

console.log("Connected");
var newToDo;
var addToDo = $("#addToDo");
var toDoEntry = $("#toDoEntry");

/* ALTERNATIVE CHOICE */
// $(".fa-plus").on("click",function(){
//     toDoEntry.fadeToggle();
// });

addToDo.on("click", function() {
    toDoEntry.toggleClass("hidden");
    toDoEntry.val("");
});

// This could become a "create new to do function which is called upon keypress of +ToDo button"
toDoEntry.on("keypress", function(event) {
    if (event.which === 13) {
        console.log("You Pressed Enter; I should do something");
        newToDo = "<li>" + toDoEntry.val() + " <span><i class='glyphicon glyphicon-trash' aria-hidden='true'></i></span></li>";
        // $(newToDo).appendTo($("ul"));
        $("#favs").append(newToDo);
        toDoEntry.val("");
        toDoEntry.toggleClass("hidden")
            // once new list added and field cleared, we need to hide the to do list agian
    }
});

// parent gets the listener so that we can check for clicks on child elements
// $("#favs").on("click", "li", function() {
//     $(this).toggleClass("completed");
// });

$("#favs").on("click", "span", function(event) {
    $(this).parent().fadeOut(350, function() {
        $(this).remove();
    });
    event.stopPropogation(); // stops the span click from bubbling to li
});