import React from "react";

export class Usuario {
  id?: number;
  username!: string;
  password!: string;
  tasks?: Tarea[];
}

export class Tarea {
  id?: number;
  description!: string;
  status?: boolean;
  usuarioId?: number;
}

export interface IUsuarioService {
  listUsers: () => { users: Usuario[] };
  showUser: () => { user: Usuario };
  createUser: (user: Usuario) => {};
  deleteUser: () => {};
  createTask: (tarea: Tarea) => {};
  updateTask: (tarea: Tarea) => {};
  deleteTask: () => {};
}
