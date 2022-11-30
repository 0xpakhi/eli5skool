import Head from "next/head";
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
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Flex justify={"center"} overflowY={"hidden"}>
        <Flex
          flexDir={"column"}
          marginTop={{base:"25px",md:"45px"}}
          className={"blur"}
          height={{base:"80vh",md:"707px"}}
          width={{base:"90vw",md:"1086px"}}
          borderRadius={"20px"}
          background={"rgba(0,0 , 0, 0.3)"}
          border={"2px solid rgba(255, 255, 255, 0.3)"}
          align={"center"}
          marginBottom={{base:"40px",md:"0"}}
        >
          <ButtonGroup
            color={"rgba(255, 255, 255, 0.6)"}
            className={"blur"}
            marginTop={"34.68px"}
            width={{base:"300px",md:"465px"}}
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
                fontSize={{base:"19px",md:"24px"}}
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
            width={{base:"80vw",md:"800px"}}
            textAlign={"left"}
            fontSize={{base:"19px",md:"24px"}}
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
