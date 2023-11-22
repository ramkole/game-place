import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import TheameModeToggle from "./TheameModeToggle";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (serchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" borderRadius="25px" />
      <SearchInput onSearch={onSearch} />
      <TheameModeToggle />
    </HStack>
  );
};

export default NavBar;
