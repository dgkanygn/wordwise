import { useContext } from "react";
import { Box } from "@chakra-ui/react";

// component
import { FileUpload } from "./components/FileUpload";
import { WordPractice } from "./components/WordPractice";
// context
import Data from "./context/Data";

function App() {
  const { wordList, setWordList } = useContext(Data);

  return <Box>{wordList.length > 0 ? <WordPractice /> : <FileUpload />}</Box>;
}

export default App;
