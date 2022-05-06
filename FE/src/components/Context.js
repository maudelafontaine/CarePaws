import React from "react";

export const AppContext = React.createContext(null);

export const AppProvider = ({ children }) => {
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

  const [loading, setLoading] = React.useState(true);

  //*** */ const [logout, setLogout]= React.useState(false);

  // Comments section
  const [comment, setComment] = React.useState("");
  const [comments, setComments] = React.useState([]);

  // Pets
  const [cats, setCats] = React.useState([]);
  const [dogs, setDogs] = React.useState([]);

  // get all pets
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
        // isLoading,
        // setIsLoading,
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
