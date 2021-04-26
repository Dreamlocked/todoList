import React, { useContext, useEffect, useState } from "react";
import { Tarea, Usuario } from "../models/IEntitys";
import {
  UsuarioApi,
  deleteTaskApi,
  updateTaskApi,
} from "../models/services/UsuarioService";
import DoContext from "./contexts/doContext";
import UserIdContext from "./contexts/UserIdContext";

function ListTask() {
  const [tasks, setTasks]: [Tarea[], any] = useState([]);

  const { idUser, setIdUser } = useContext(UserIdContext);

  const { update, setUpdate } = useContext(DoContext);

  useEffect(() => {
    UsuarioApi(idUser).then((response) => {
      console.log(response);
      setTasks(response);
    });
  }, [tasks.length, idUser, update]);

  function deleteTask(idUser: any, idTask: any) {
    deleteTaskApi(idUser, idTask);
    setTasks(
      tasks.filter((task) => {
        return task.id !== idTask;
      })
    );
  }

  function doTask(id: any, task: Tarea) {
    updateTaskApi(id, task);
    setUpdate(!update);
  }

  return (
    <div className="container  mt-[20px]">
      <ul className="flex flex-col items-center  ">
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              className="flex flex-row items-center w-[88%] h-[50px] bg-white border-gray-200 border-[1px] rounded-md z-10 p-[20px] relative shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              {task.status ? (
                <div
                  className="flex items-center justify-center rounded-xl bg-gradient-to-r to-blue-400 from-purple-400 h-[22px] w-[23px] cursor-pointer"
                  onClick={() => {
                    console.log("Haciendo Tarea");
                    doTask(task.usuarioId, task);
                  }}
                >
                  <p className="bg-icon-check cursor-pointer bg-cover h-[9px] w-[11px] "></p>
                </div>
              ) : (
                <div
                  className="flex items-center justify-center rounded-xl bg-white border-gray-300 border-[1px] h-[22px] w-[23px] cursor-pointer dark:bg-gray-800 dark:border-gray-600 "
                  onClick={() => {
                    console.log("Haciendo Tarea");
                    doTask(task.usuarioId, task);
                  }}
                >
                  <p className="bg-icon-check bg-cover h-[9px] w-[11px] dark:opacity-0"></p>
                </div>
              )}
              <span className="mt-[2px] ml-[16px] w-[85%] text-gray-500 text-[15px] dark:text-gray-400">
                {task.description}
              </span>
              <p
                className=" absolute bg-icon-cross bg-cover h-[11px] w-[11px] right-[6%] cursor-pointer"
                onClick={() => {
                  console.log("Presionado");
                  deleteTask(task.usuarioId, task.id);
                }}
              ></p>
            </li>
          );
        })}
        {
          <li className="flex flex-row items-center w-[88%] h-[50px] bg-white border-gray-200 border-[1px] rounded-md z-10 p-[20px] text-gray-400 text-[13px] relative shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
            <span className="">{tasks.length} items left</span>
            <span
              className="absolute right-[6%] cursor-pointer hover:text-blue-800"
              onClick={() => {
                tasks.map((task) => {
                  if (task.status) {
                    return deleteTask(task.usuarioId, task.id);
                  }
                  return "this task yet don't do";
                });
              }}
            >
              Clear Completed
            </span>
          </li>
        }
      </ul>
    </div>
  );
}

export default ListTask;
