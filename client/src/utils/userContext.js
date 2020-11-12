import React from "react";

const UserContext = React.createContext({
    id: "",
    username: "",
    handleFormSubmit: () => {},
});

export default UserContext;