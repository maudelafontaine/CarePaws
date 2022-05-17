import React from "react";
// import usePersistedState from "./hooks/use-persistedState";

export const AppContext = React.createContext(null);

export const AppProvider = ({ children }) => {
  // to save the currentUser in local storage
  // const [user, setUser] = usePersistedState("user", currentUser);

  // States :

  // SignUp component
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [postalCode, setPostalCode] = React.useState("");
  const [password, setPassword] = React.useState();
  const [isSignedUp, setIsSignedUp] = React.useState(false);

  // LogIn component
  const [userId, setUserId] = React.useState(""); // the email would be used as the userId
  const [pw, setPw] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState("");
  const [isLogedIn, setIsLogedIn] = React.useState(false);

  // Loading
  const [loading, setLoading] = React.useState(true);

  // Comments section
  const [comment, setComment] = React.useState("");
  const [comments, setComments] = React.useState([]);

  // Pets
  const [cats, setCats] = React.useState([]);
  const [dogs, setDogs] = React.useState([]);

  // Fetching all pets from Pet Finder
  const [pets, setPets] = React.useState([]);
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
        isLogedIn,
        setIsLogedIn,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
