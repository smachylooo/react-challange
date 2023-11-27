import React from "react";
import { TodoWrapper } from "./TodoWrapper";

interface ILoggedInProps {
    user: string;
    handleSignOut: () => void;
}

  const LogedIn: React.FC<ILoggedInProps> = ({ user, handleSignOut }):JSX.Element => {

    return(
        <>
            <header>
                <span>{user}</span>
                <button onClick={handleSignOut}>Sign Out</button>
            </header>
            <TodoWrapper/>
        </>
    )
}

export default LogedIn;