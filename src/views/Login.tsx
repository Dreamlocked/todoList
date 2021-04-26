import React, { useContext, useState } from "react";
import logo from "../assets/login.svg";
import { AutenticationApi } from "../models/services/UsuarioService";
import { Usuario } from "../models/IEntitys";
import UserIdContext from "../components/contexts/UserIdContext";
import { useLocation } from "wouter";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useLocation();

  const { idUser, setIdUser } = useContext(UserIdContext);

  const user: Usuario = {
    username: username,
    password: password,
  };

  const UserAutentication = (event: any) => {
    event.preventDefault();
    AutenticationApi(user).then((id) => {
      if (id === 0) {
        return console.log("can´t resolve the promised");
      } else {
        setIdUser(id);
        return setLocation("/dashboard");
      }
    });
  };

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center h-[160px] pt-[20px] z-10">
        <p className="text-[20px] font-bold text-center text-purple-600 z-10">
          Let's do interesting things . . .
        </p>
        <p className="mt-[10px] text-[23px] font-bold text-purple-800 z-10">
          {" "}
          TO DO
        </p>
      </div>
      <div className="flex flex-row justify-center items-center h-[280px] z-[-1]">
        <img src={logo} alt="Login icon" />
      </div>
      <form
        className=" flex flex-col items-center bg-purple-200 "
        onSubmit={(event) => {
          console.log("submit");
          UserAutentication(event);
        }}
      >
        <div className="w-[80%] ml-[10%] mt-[10px] ">
          <p className="font-bold">Username</p>
          <input
            type="text"
            className="w-[90%] focus:outline-none focus:ring focus:border-blue-600 p-[5px] rounded-md"
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            value={username}
          />
        </div>
        <div className="w-[80%] ml-[10%] mt-[10px]">
          <p className="font-bold">Password</p>
          <input
            type="password"
            className="w-[90%] focus:outline-none focus:ring focus:border-blue-600 p-[5px] rounded-md"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-white h-[40px] w-[120px] rounded-xl my-[20px]"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
