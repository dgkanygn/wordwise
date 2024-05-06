import { useContext, useEffect, useState } from "react";
import Data from "../context/Data";
import { Button, Flex, Heading, Input } from "@chakra-ui/react";

import { IoIosSend } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

export const WordPractice = () => {
  const { wordList } = useContext(Data);

  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);

  const wordList2 = wordList.map((item) => item.word);

  let previousNumber = null;

  const generateRandomNumber = (min, max, exclude) => {
    let randomNumber;

    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (
      randomNumber === previousNumber ||
      randomNumber === max ||
      randomNumber === exclude
    );

    previousNumber = randomNumber;

    return randomNumber;
  };

  useEffect(() => {
    const num = generateRandomNumber(0, wordList.length);
    setIndex(num);
  }, []);

  const isMeaningCorrect = (word, meaning) => {
    const foundWord = wordList.find((item) => item.word === word);
    if (foundWord.meaning === meaning) {
      setInput("");
      toast.success("Doğru cevap!");
      setIndex(index + 1);
      let num = generateRandomNumber(0, wordList.length, previousNumber);
      setIndex(num);
    } else {
      {
        toast.error(`Doğru cevap ${foundWord.meaning} olmalıydı!`);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isMeaningCorrect(wordList2[index], input);
  };

  return (
    <>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "10px",
            color: "#713200",
          },
        }}
      />

      <Flex
        bg={"#090b20"}
        justify={"center"}
        align={"center"}
        h={"100vh"}
        p={10}
      >
        <Flex flexDirection={"column"} align={"center"} gap={10}>
          <Heading>Bu listede {wordList2.length} kelime var</Heading>

          <Heading
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
          >
            {wordList2[index]}
          </Heading>

          <form onSubmit={handleSubmit}>
            <Flex
              border="1px solid #141627"
              bg={"#0b0d25"}
              justify={"space-between"}
              align={"center"}
              p={1}
            >
              <Input
                border={"none"}
                outline={"none"}
                value={input}
                color={"gray.500"}
                onChange={(e) => setInput(e.target.value)}
                _focus={{
                  borderColor: "transparent",
                  boxShadow: "none",
                }}
                size={"lg"}
              />
              <Button
                color={"white"}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                type="submit"
                _hover={{
                  bgGradient: "linear(to-l, #9F5BD8, #FF47A6)",
                }}
              >
                <IoIosSend size={27} />
              </Button>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </>
  );
};
