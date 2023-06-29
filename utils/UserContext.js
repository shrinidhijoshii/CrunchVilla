import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "User",
    email: "demo.user@gmail.com",
  },
});

// it will display UserContext.provider in react devtools
// it will be helpfull for debugging purpose if we have multiple contexts
// it for our use , it is nothing to do with functionality or performance
// for not defined context , it will show as Context.provider.
UserContext.displayName = "UserContext";

export default UserContext;
