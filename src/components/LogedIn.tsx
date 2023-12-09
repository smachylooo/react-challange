import React from "react";
import { TodoWrapper } from "./TodoWrapper";

interface ILoggedInProps {
  user: string;
  email: string;  // Add email prop
  phoneNumber: string;  // Add phoneNumber prop
  handleSignOut: () => void;
}

const LogedIn: React.FC<ILoggedInProps> = ({ user, email, phoneNumber, handleSignOut }): JSX.Element => {
  return (
    <>
      <header>
        <span style={{alignItems:'center', display:'flex'}}><img style={{borderRadius:'15px',marginRight:'10px'}} src={phoneNumber} alt="" /> {user}</span>
        <span>{email}</span>
        <button onClick={handleSignOut}>Sign Out</button>
      </header>
      <TodoWrapper />
    </>
  );
};

export default LogedIn;
