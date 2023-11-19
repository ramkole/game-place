import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import TheameModeToggle from "./TheameModeToggle";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" borderRadius="25px" />
      <TheameModeToggle />
    </HStack>
  );
};

export default NavBar;
