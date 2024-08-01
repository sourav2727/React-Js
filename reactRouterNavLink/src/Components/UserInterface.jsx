import React from "react";
import { Home } from "./Home";
import { Services } from "./Services";
import { Book } from "./Book";
import { NavLink } from "react-router-dom";
import { VisitMore } from "./VisitMore";

const UserInterface = () => {
  return (
    <div className="w-screen text-black">
      <nav className="ml-12">
        <ul className="text-black flex justify-end gap-5  pr-10 font-bold">
          <NavLink to="/" className={({isActive})=> isActive ? "text-fuchsia-500":""}>
            <li>Home</li>
          </NavLink>

          <NavLink to="/services" className={({isActive})=>isActive? "text-fuchsia-500":""}>
            <li>Services</li>
          </NavLink>

          <NavLink to="/book" className={({isActive})=>isActive? "text-fuchsia-500":""}>
            <li>Book</li>
          </NavLink>

          <NavLink to="/visitmore" className={({isActive})=>isActive? "text-fuchsia-500":""}>
            <li>Visit More</li>
          </NavLink>
        </ul>
      </nav>
    
    
    </div>
  );
};

export default UserInterface;
