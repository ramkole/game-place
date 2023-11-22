import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const TheameModeToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">Switch Theme</Text>
    </HStack>
  );
};

export default TheameModeToggle;
