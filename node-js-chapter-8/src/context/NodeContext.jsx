import { createContext, useContext, useState } from "react";

const NodeContext = createContext(null);
export const useNode = () => useContext(NodeContext);

const NodeContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const localforageKey = "glwh@lkfhl";

  return (
    <NodeContext.Provider value={{ token, setToken, localforageKey }}>
      {children}
    </NodeContext.Provider>
  );
};

export default NodeContextProvider;
