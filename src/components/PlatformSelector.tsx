import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatformId?: Number;
}

const PlatformSelector = ({
  selectedPlatformId,
  onSelectedPlatform,
}: Props) => {
  const { data: platform, error } = usePlatform();
  const selectedPlatform = platform?.results.find(
    (p) => p.id === selectedPlatformId
  );
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name ? selectedPlatform?.name : "Platform"}
      </MenuButton>
      <MenuList>
        {platform?.results.map((pltform) => (
          <MenuItem
            key={pltform.id}
            onClick={() => onSelectedPlatform(pltform)}
          >
            {pltform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
