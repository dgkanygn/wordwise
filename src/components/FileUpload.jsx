import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { useCallback, useState, useContext } from "react";

// context
import Data from "../context/Data";

export const FileUpload = () => {
  const { wordList, setWordList } = useContext(Data);

  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [fileContent, setFileContent] = useState("");

  const parseTxtData = (text) => {
    const lines = text
      .replace(/\r/g, "")
      .split("\n")
      .filter((line) => line.trim() !== "");

    const tempList = [];

    for (let i = 0; i < lines.length; i += 2) {
      const word = lines[i];
      const meaning = lines[i + 1];
      tempList.push({ word, meaning });
    }

    setWordList(tempList);
  };

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0 && acceptedFiles[0].type === "text/plain") {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
        parseTxtData(e.target.result);
      };

      reader.readAsText(acceptedFiles[0]);
      setSelectedFile(acceptedFiles[0]);
    } else {
      setSelectedFile(null);
      console.log("sadece .txt uzantılı dosyalar yükleyebilirsiniz");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Flex
      flexDirection={"column"}
      align={"center"}
      justify={"center"}
      bg={"#090b20"}
      pt={100}
      h={"100vh"}
      gap={100}
    >
      <Flex flexDirection={"column"} align={"center"} gap={5}>
        <Heading
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
        >
          WordWise'a Hoş Geldin
        </Heading>
        <Text fontSize={20} color={"gray.400"}>
          Başlamak için bir kelime listesi yükle.
        </Text>
      </Flex>
      <Flex flexDirection={"column"} gap={10}>
        <Box
          bg={"#0B0D25"}
          p={10}
          cursor={"pointer"}
          border="4px dotted #141627"
          _hover={{
            bg: "#0F112F",
          }}
          {...getRootProps()}
        >
          <Input {...getInputProps()} />
          {isDragActive ? (
            <Text color={"gray.500"}>Dosyanızı buraya bırakın.</Text>
          ) : (
            <Text color={"gray.500"}>
              {selectedFile && !errorMessage
                ? `Seçilen Dosya: ${selectedFile.name}`
                : "Kelime listenizi içeren metin belgesi dosyanızı buraya sürükleyin"}
            </Text>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};
