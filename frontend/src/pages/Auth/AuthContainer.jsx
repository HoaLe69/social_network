import { useState } from "react";
import images from "../../assets/images";
import Login from "./Login";
import Register from "./Register";

const Authenticate = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="flex items-center justify-center h-[100%] gap-[190px]">
        <img src={images?.authBackground} alt=" about social app" />
        <div>
          {login ? (
            <Login handleSwitchAuth={setLogin} />
          ) : (
            <Register handleSwitchAuth={setLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Authenticate;
