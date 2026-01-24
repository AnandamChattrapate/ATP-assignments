const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
};
//  1. Create a shallow copy of user
const userCopy={...user}

//     2. Change:
//           i. name in the copied object
userCopy.name="cench"
//           ii. preferences.theme in the copied object
userCopy.preferences.theme="light"
//           iii .Log both original and copied objects
onsole.log("Original User:", user);
console.log("Copied User:", userCopy);
//           iv. Observe what changes and what doesn’t

