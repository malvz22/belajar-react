/* eslint-disable react/prop-types */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Box, Button, Container, HStack, Image, Text } from "@chakra-ui/react";
import "./App.css";
import heroImg from "/heroImg.png";

function Navbar(props) {
  return (
    <>
      <Box
        background={"white"}
        position={"sticky"}
        top={0}
        left={0}
        maxWidth={"100%"}
      >
        <HStack
          margin={"0 auto"}
          padding={"20px"}
          width={"1140px"}
          justifyContent={"space-between"}
          gap={"24px"}
        >
          <Text fontSize={"30px"} color={"#555486"}>
            {props.company}
          </Text>
          <HStack gap={"30px"}>
            <Text fontSize={"18px"}>Concerts</Text>
            <Text fontSize={"18px"}>Attraction</Text>
            <Text fontSize={"18px"}>Trips</Text>
            <Text fontSize={"18px"}>Beauty</Text>
            <Text fontSize={"18px"}>Vehicles</Text>
          </HStack>
          <HStack>
            <Button
              background={"white"}
              border={"2px solid #555486"}
              w={"120px"}
              color={"#555486"}
            >
              Login
            </Button>
            <Button
              background={"#555486"}
              color={"white"}
              border={"2px solid white"}
              w={"120px"}
            >
              Sign Up
            </Button>
          </HStack>
        </HStack>
      </Box>
    </>
  );
}

function LandingPage() {
  return (
    <>
      <Box>
        <Image
          maxWidth={"1000px"}
          padding={"30px"}
          margin={"auto"}
          src={heroImg}
        ></Image>
      </Box>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar company="TICKETED" />
      <Container maxW={"1100px"}>
        <LandingPage />
      </Container>
    </>
  );
}

export default App;
