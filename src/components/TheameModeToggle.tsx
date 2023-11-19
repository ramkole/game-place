import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const TheameModeToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>Switch Theme</Text>
    </HStack>
  );
};

export default TheameModeToggle;
