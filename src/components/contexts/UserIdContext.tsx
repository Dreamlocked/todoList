import React, { FC, useState } from "react";

interface IData {
  idUser: number;
  setIdUser: Function;
}

const UserIdContext = React.createContext<IData>({
  idUser: 0,
  setIdUser: () => {},
});

export const UserIdContextProvider: FC = ({ children }) => {
  const [idUser, setIdUser] = useState(0);

  return (
    <UserIdContext.Provider value={{ idUser, setIdUser }}>
      {children}
    </UserIdContext.Provider>
  );
};

export default UserIdContext;
