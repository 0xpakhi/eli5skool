import React from "react";
import {
  Flex,
  Text,
  Image,
  Button,
  Input,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";

export default function home() {
  const [userInput, setUserInput] = useState("");
  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };

  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    // console.log("Calling OpenAI...");
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    // console.log("OpenAI replied...", output.text);

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };

  return (
    <div className="main">
      <Flex justify={"center"}>
        <Flex
          flexDir={"column"}
          marginTop={"45px"}
          className={"blur"}
          width={"1086px"}
          borderRadius={"20px"}
          height={"707px"}
          background={"rgba(0,0 , 0, 0.3)"}
          border={"2px solid rgba(255, 255, 255, 0.3)"}
          align={"center"}
        >
          <ButtonGroup
            color={"rgba(255, 255, 255, 0.6)"}
            className={"blur"}
            marginTop={"34.68px"}
            width={"465px"}
            borderRadius={"20px"}
            height={"72.52px"}
            background={"rgba(0,0 , 0, 0.3)"}
            border={"2px solid rgba(255, 255, 255, 0.3)"}
          >
            <Center
              width={"465px"}
              gap={"10px"}
              justifyContent={"space-between"}
            >
              <Input
                className="input"
                border={""}
                value={userInput}
                onChange={onUserChangedText}
                _placeholder={{ color: "rgba(255, 255, 255, 0.4)" }}
                fontWeight={"semibold"}
                fontSize={"24px"}
                background={"None"}
                placeholder={"Enter a topic"}
              />
              <Image
                onClick={callGenerateEndpoint}
                marginRight={"10px "}
                src="rightarrow.svg"
                alt=""
                height={"38px"}
                width={"38px"}
                cursor={"pointer"}
              />
            </Center>
          </ButtonGroup>

          <Text
            color={"rgba(255, 255, 255, 0.6)"}
            fontWeight={"500"}
            marginTop={"30px"}
            width={"800px"}
            textAlign={"left"}
            fontSize={"24px"}
            marginLeft={""}
            overflowY={"auto"}
            paddingBottom={"30px"}
          >
            {apiOutput}
           
          </Text>
        </Flex>
      </Flex>
    </div>
  );
}
