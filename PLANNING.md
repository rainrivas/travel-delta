# Travel Delta
## Markdown File to support planning the layout and requirements of this project.

### Input flow for User:
1. Enter starting information
	1. Enter Address fields for favorite locations with nicknames. (This should come last, should include +/- buttons to add/remove fields)
		1. Nickname
		2. Street Address
		3. City
		4. Zip
	2. Enter Current Address.
		1. Nickname (Home or Current)
		2. Street Address
		3. City
		4. Zip
	3. Enter Proposed new address.
		1. Nickname (New)
		2. Street Address
		3. City
		4. Zip
2. **Submit information.** 
	1. Expected Return:
		* **3d** - Nickname of new address
			* 1d[0] Favorite Location 1
				* Time Delta and/or Distance Delta
			* 1d[1] Favorite Location 2
				* Time Delta and/or Distance Delta
			* 1d[n] Favorite Location 3
				* Time Delta and/or Distance Delta

### Possible features:

1. User accounts - On Hold
2. Multiple proposed new addresses

## Features for current app:

1. Old Address
	- Possible to consider using geolocationAPI to determine current location as a suggestion.
2. New Address
3. Favoraite Locations
	- add/remove buttons
	- each bar should search google
		- "OK" button to lock in result
	- Maybe 2 fields? One for location/address, one for nick name
4. Map view
	- Something simiar to [batchgeo](https://batchgeo.com/) where we can have points plotted to map color coded.
5. Table View
	- Simple table for now displaying current travel time/distance to old location, new location, and delta.

Currently form does not have any functionality, once the form is completed, we can work on having working on having the backend set up to pass the information into the GoogleMapsAPI. After this, we can possibly utilize ReactJS to update the map/table or just everything.

Once we have a working single session app, we can consider looking at sharing options to draft emails or share as messages? Create a unique link for a saved map/data the user could send to a friends or family.

We can consider the possible implementation of user accounts and saved data as well.