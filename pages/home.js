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
            Once upon a time in a distant galaxy, there lived a brave princess named Nakita. She was the daughter of a legendary space explorer called Arlon. Nakita dreamed of one day exploring the universe, just like her father had done. So, when her father offered to take her on a journey to explore a mysterious wormhole, she jumped at the chance. Little did Nakita know that the adventure she was about to embark on would end up saving the entire universe. The journey to the wormhole began. For what seemed like an eternity, they traveled through the galaxies, seeing sights that most people had never seen before. But when they arrived at their destination, they were stunned. The wormhole was enormous, so large that their tiny spaceship could have fit inside of it. They took the risk and entered the wormhole. Inside, they experienced something that they had never experienced before—time travel. By using the laws of physics, they were able to travel through time to different galaxies and explore them. As they traveled, Nakita and Arlon discovered that the wormhole was powerful enough to allow them to create a portal to different galaxies and times. With the new knowledge, Nakita and Arlon were able to save the universe from a deadly enemy—a powerful space monster known as the Dreaded. Using the wormhole, Nakita and Arlon were able to travel back in time and seal away the Dreaded, saving the universe from disaster. Now that the universe was saved, Nakita and Arlon returned home with all the knowledge they had gained. With their newfound skills, they could explore the universe to their hearts' content. Nakita and Arlon's epic adventure had come to an end, but their bravery and courage would never be forgotten, and the wormhole would be remembered as one


           
          </Text>
        </Flex>
      </Flex>
    </div>
  );
}
