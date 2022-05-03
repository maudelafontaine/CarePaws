import React from "react";

export const AppContext = React.createContext(null);

export const AppProvider = ({ children }) => {
  // States :
  // Sign in
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [postalCode, setPostalCode] = React.useState("");
  const [password, setPassword] = React.useState();

  // Log in
  const [userId, setUserId] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState("");

  const [isSignedUp, setIsSignedUp] = React.useState(false);

  // Pets
  // const [pets, setPets] = React.useState([]);
  const [cats, setCats] = React.useState([]);
  const [dogs, setDogs] = React.useState([]);

  // Comments section
  const [comment, setComment] = React.useState("");

  const [comments, setComments] = React.useState([]);

  const [pets, setPets] = React.useState([]);

  // get all pets
  React.useEffect(() => {
    const getPets = async () => {
      const res = await fetch("/pets");
      const data = await res.json();
      setPets(data.data);
    };
    getPets();
  }, []);

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
        // setPets,
        cats,
        setCats,
        dogs,
        setDogs,
        comment,
        setComment,
        comments,
        setComments,
        userId,
        setUserId,
        pw,
        setPw,
        currentUser,
        setCurrentUser,
        isSignedUp,
        setIsSignedUp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
