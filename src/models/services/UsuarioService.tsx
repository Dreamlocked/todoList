import axios from "axios";
import { Tarea, Usuario } from "../IEntitys";

export const AutenticationApi = async (userLogin: Usuario) => {
  const usersURL: string = "http://localhost:8080/api/usuarios";

  const dataUsers = await axios.get(usersURL);
  const ID: number[] = dataUsers.data.map((user: Usuario) => {
    if (
      user.username === userLogin.username &&
      user.password === userLogin.password
    ) {
      return user.id;
    } else {
      return 0;
    }
  });
  return Math.max(...ID);
};

export const UsuarioApi = async (id: number) => {
  const userURL: string = `http://localhost:8080/api/usuario/${id}`;

  const tasks: any = await axios.get(userURL);

  return tasks.data.listaTarea;
};

export const NewTaskApi = (id: number, tarea: Tarea) => {
  const userURL: string = `http://localhost:8080/api/usuario/${id}`;
  axios.post(userURL, tarea).then((response) => {
    console.log(response.data.mensaje);
  });
};

export const deleteTaskApi = (id: any, idTask: any) => {
  const userURL: string = `http://localhost:8080/api/usuario/${id}/${idTask}`;

  axios.delete(userURL).then((response) => {
    console.log(response.data.mensaje);
  });
};

export const updateTaskApi = (id: any, task: Tarea) => {
  const userURL: string = `http://localhost:8080/api/usuario/${id}/${task.id}`;

  task.status = !task.status;

  axios.put(userURL, task).then((response) => {
    console.log(response.data.mensaje);
  });
};
