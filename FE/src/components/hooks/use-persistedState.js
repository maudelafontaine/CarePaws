import React from "react";

// To-do :

// save currentUser
// export default function usePersistedState(name, defaultValue) {
//   // Function #1 is for numCookies
//   const [value, setValue] = React.useState(() => {
//     // same as [numCookies, setNumCookies]
//     const persistedValue =
//       typeof window !== "undefined" && window.localStorage.getItem(name);
//     // connverting json
//     return persistedValue !== null ? JSON.parse(persistedValue) : defaultValue; // string into number
//   });

//   // Function #2 is for purchasedItems (items)
//   React.useEffect(() => {
//     window.localStorage.setItem(name, JSON.stringify(value)); // keeps it as a string
//   }, [name, value]); // If we wanted everything to happen at the same time -> leave the arr empty
//   return [value, setValue];
// }
