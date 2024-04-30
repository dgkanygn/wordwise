// import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
// import "./App.css";
// import { useDropzone } from "react-dropzone";
// import { useCallback, useState } from "react";

import { Box } from "@chakra-ui/react";
import { FileUpload } from "./components/FileUpload";

import { useContext } from "react";

// context
Data;
import { WordPractice } from "./components/WordPractice";
import Data from "./context/Data";

function App() {
  const { wordList, setWordList } = useContext(Data);

  // const [selectedFile, setSelectedFile] = useState(null);
  // const [errorMessage, setErrorMessage] = useState("");
  // const [fileContent, setFileContent] = useState("");
  // const [wordList, setWordList] = useState("");

  // const parseTxtData = (text) => {
  //   const lines = text
  //     .replace(/\r/g, "")
  //     .split("\n")
  //     .filter((line) => line.trim() !== "");

  //   const tempList = [];

  //   for (let i = 0; i < lines.length; i += 2) {
  //     const word = lines[i];
  //     const meaning = lines[i + 1];
  //     tempList.push({ word, meaning });
  //   }

  //   setWordList(tempList);
  // };

  // const onDrop = useCallback((acceptedFiles) => {
  //   if (acceptedFiles.length > 0 && acceptedFiles[0].type === "text/plain") {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setFileContent(e.target.result);
  //       parseTxtData(e.target.result);
  //     };

  //     reader.readAsText(acceptedFiles[0]);
  //     setSelectedFile(acceptedFiles[0]);
  //   } else {
  //     setSelectedFile(null);
  //     console.log("sadece .txt uzantılı dosyalar yükleyebilirsiniz");
  //   }
  // }, []);

  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    // <Flex
    //   flexDirection={"column"}
    //   align={"center"}
    //   justify={"center"}
    //   bg={"gray.500"}
    //   pt={100}
    //   h={"100vh"}
    //   gap={100}
    // >
    //   <Flex flexDirection={"column"} align={"center"} gap={5}>
    //     <Heading>WordWise'a Hoş Geldin</Heading>
    //     <Text fontSize={20}>Başlamak için bir kelime listesi yükle.</Text>
    //   </Flex>
    //   <Flex flexDirection={"column"} gap={10}>
    //     <Box
    //       bg={"gray"}
    //       p={10}
    //       cursor={"pointer"}
    //       _hover={{
    //         bg: "green.500",
    //       }}
    //       {...getRootProps()}
    //     >
    //       <Input {...getInputProps()} />
    //       {isDragActive ? (
    //         <Text>Dosyanızı buraya bırakın.</Text>
    //       ) : (
    //         <Text>
    //           {selectedFile && !errorMessage
    //             ? `Seçilen Dosya: ${selectedFile.name}`
    //             : "Kelime listenizi içeren metin belgesi dosyanızı buraya sürükleyin"}
    //         </Text>
    //       )}
    //     </Box>
    //     {/* <Button>Dosyanız yüklendi başlamak için tıklayın</Button> */}
    //     <Text whiteSpace={"pre-line"}>{fileContent}</Text>
    //   </Flex>
    // </Flex>
    <Box>{wordList.length > 0 ? <WordPractice /> : <FileUpload />}</Box>
  );
}

export default App;
