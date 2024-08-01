import { Outlet } from "react-router-dom";
import "./App.css";
import UserInterface from "./Components/UserInterface";
import { Home } from "./Components/Home";
import { Services } from "./Components/Services";
import { Book } from "./Components/Book";
import { VisitMore } from "./Components/VisitMore";
import { User } from "./Components/User";


function App() {
  return (
    <div className="p-6 text-black">
      <UserInterface  />  
      {/* remains same */}
      <Outlet /> 
       {/* all changes happens here */}
    </div>
  );
}

export default App;
