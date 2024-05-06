import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// chakra
import { ChakraProvider } from "@chakra-ui/react";

// context
import { DataProvider } from "./context/Data.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </ChakraProvider>
  </React.StrictMode>
);
