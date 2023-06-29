import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "User",
    email: "demo.user@gmail.com",
  },
});

export default UserContext;
