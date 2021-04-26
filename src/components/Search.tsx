import React, { useContext } from "react";
import { Tarea, Usuario } from "../models/IEntitys";
import { NewTaskApi } from "../models/services/UsuarioService";
import DoContext from "./contexts/doContext";
import UserIdContext from "./contexts/UserIdContext";

function Search() {
  const { idUser, setIdUser } = useContext(UserIdContext);

  const { update, setUpdate } = useContext(DoContext);

  const ListTask: any = (event: any) => {
    if (event.key === "Enter") {
      const taskPost: Tarea = {
        description: event.target.value,
      };
      NewTaskApi(idUser, taskPost);
      event.target.value = "";
      setUpdate(!update);
      return console.log("Autenticado y tarea creado con exito");
    }
  };

  return (
    <div className="flex justify-center container mt-[-90px] ">
      <input
        type="text"
        placeholder="Create a new todo..."
        className="rounded-md h-[40px] w-[88%] p-[20px] border-2 hover:border-gray-400 outline-none z-10 text-gray-500 dark:bg-gray-800 dark:border-gray-800 dark:text-gray-300 dark:hover:border-gray-500"
        onKeyPress={ListTask}
      />
    </div>
  );
}

export default Search;
