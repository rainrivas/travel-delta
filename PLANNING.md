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
1. User accounts
2. Multiple proposed new addresses