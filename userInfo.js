// userInfo.js

// Import the formatArrayStrings function from Task 2
const { formatArrayStrings } = require('./arrayManipulation');

// Function to create user profiles
function createUserProfiles(names, modifiedNames) {
    // Initialize an array to store user profiles
    const profiles = [];

    // Loop through the names and modified names arrays
    for (let i = 0; i < names.length; i++) {
        // Create a user profile object
        const userProfile = {
            originalName: names[i],
            modifiedName: modifiedNames[i],
            id: i + 1 // Auto-incremented id starting from 1
        };

        // Push the user profile object to the profiles array
        profiles.push(userProfile);
    }

    // Return the array of user profiles
    return profiles;
}

// Example usage (assuming names array is provided)
const names = ["Salman", "Hannan", "Ebenezer", "Daniel"];
const modifiedNames = formatArrayStrings(names, [1, 2, 3, 4]);
const userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);

