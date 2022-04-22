import React from "react";

export const AppContext = React.createContext(null);

export const AppProvider = ({ children }) => {
  // States :
  // Sign in/ Log in form states
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [postalCode, setPostalCode] = React.useState("");
  const [password, setPassword] = React.useState();

  // Pets
  const [pets, setPets] = React.useState([]);
  const [cats, setCats] = React.useState([]);
  const [dogs, setDogs] = React.useState([]);

  return (
    <AppContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        country,
        setCountry,
        postalCode,
        setPostalCode,
        password,
        setPassword,
        pets,
        setPets,
        cats,
        setCats,
        dogs,
        setDogs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
