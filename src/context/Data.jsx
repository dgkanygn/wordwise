import { createContext, useState } from "react";

const Data = createContext();

export const DataProvider = ({ children }) => {
  const [wordList, setWordList] = useState("");

  const data = {
    wordList,
    setWordList,
  };

  return <Data.Provider value={data}>{children}</Data.Provider>;
};

export default Data;
