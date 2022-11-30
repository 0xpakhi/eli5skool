import Head from "next/head";
import { Flex, Text, Image, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Flex
        fontFamily={"Manrope, sans-serif"}
        color={"white"}
        flexDir={"column"}
      >
        <Flex
          className="blur"
          height={"88px"}
          background={"rgba(0, 0, 0, 0.1)"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Flex marginLeft={{ base: "38px", md: "58px" }} gap={"5px"}>
            <Image
              src="book-open.svg"
              marginTop={"32px"}
              width={"25px"}
              height={"25px"}
              alt="logo"
            />
            <Text
              fontWeight={"bold"}
              fontSize={{ base: "20px", md: "24px" }}
              marginTop={"26px"}
            >
              {" "}
              eli5skool{" "}
            </Text>
          </Flex>
          <a href="https://twitter.com/0xpakhi" target={"blank"}>
          <Text
              marginRight={{base:"38px",md:"58px"}}
            fontWeight={"bold"}
            marginTop={"26px"}
            fontSize={{ base: "20px", md: "24px" }}
          >
            twitter
          </Text>
          </a>
        </Flex>

        <Flex flexDir={"column"} marginTop={"180px"} align={"center"}>
          <Text
            textAlign={"center"}
            width={{ base: "315px", md: "715px" }}
            fontSize={{ base: "35px", md: "70px" }}
            fontWeight={"extrabold"}
          >
            so, what are we learning today?
          </Text>
          <a href={"./home"}>
            <Button
              background={"white"}
              color={"black"}
              width={{ base: "150px", md: "183px" }}
              height={{ base: "49px", md: "59px" }}
              marginTop={"45px"}
              align={"center"}
              fontSize={{ base: "20px", md: "24px" }}
              fontWeight={"semibold"}
              borderRadius={"100px"}
            >
              try out eli5
            </Button>
          </a>
        </Flex>

        <a href="https://buildspace.so" target={"blank"}>
          <Button
            display={{ base: "None", md: "flex" }}
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
