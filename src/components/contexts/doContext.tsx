import React, { FC, useState } from "react";

interface IData {
  update: boolean;
  setUpdate: Function;
}

const DoContext = React.createContext<IData>({
  update: true,
  setUpdate: () => {},
});

export const DoContextProvider: FC = ({ children }) => {
  const [update, setUpdate] = useState(true);

  return (
    <DoContext.Provider value={{ update, setUpdate }}>
      {children}
    </DoContext.Provider>
  );
};

export default DoContext;
