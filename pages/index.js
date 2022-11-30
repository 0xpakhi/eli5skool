import Head from "next/head";
import { Flex, Text, Image, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="main">
      <Flex
        fontFamily={"Manrope, sans-serif"}
        color={"white"}
        flexDir={"column"}
      >
        <Flex
          className="blur"
          height={"88px"}
          font
          background={"rgba(0, 0, 0, 0.1)"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Flex marginLeft={"58px"} gap={"5px"}>
            <Image
              src="book-open.svg"
              marginTop={"32px"}
              width={"25px"}
              height={"25px"}
              alt="logo"
            />
            <Text fontWeight={"bold"} fontSize={"24px"} marginTop={"26px"}>
              {" "}
              eli5skool{" "}
            </Text>
          </Flex>
          <Text
            marginRight={"58px"}
            fontWeight={"bold"}
            marginTop={"26px"}
            fontSize={"24px"}
          >
            {" "}
            memo{" "}
          </Text>
        </Flex>

        <Flex flexDir={"column"} marginTop={"180px"} align={"center"}>
          <Text
            textAlign={"center"}
            width={"715px"}
            fontSize={"70px"}
            fontWeight={"extrabold"}
          >
            so, what are we learning today?
          </Text>
          <a href={"./home"}>
          <Button
            background={"white"}
            color={"black"}
            width={"183px"}
            height={"59px"}
            marginTop={"45px"}
            align={"center"}
            fontSize={"24px"}
            fontWeight={"semibold"}
            borderRadius={"100px"}
          >
            try out eli5
          </Button>
          </a>
        </Flex>

          <a href="https://buildspace.so" target={"blank"}>

        <Button
          marginBottom={"36px"}
          marginLeft={"42px"}
          width={"184px"}
          height={"50px"}
          bottom={"0px"}
          position={"fixed"}
          background={"rgba(255, 255, 255, 0.0.5)"}
          border={"1px solid rgba(255, 255, 255, 0.3)"}
          borderRadius={"100px"}
          align={"center"}
          justify={"center"}
          _hover={{ background: "rgba(0, 0, 0, 0.3)" }}
        >
          <Text
            color={"rgba(255, 255, 255, 0.5)"}
            fontWeight={"semibold"}
            fontSize={"16px"}
          >
            built at buildspace
          </Text>
        </Button>
          </a>
      </Flex>
    </div>
  );
}
