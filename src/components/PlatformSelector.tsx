import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({
  selectedPlatformId,
  onSelectedPlatform,
}: Props) => {
  const { data: platform, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
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
