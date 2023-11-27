import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectedSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ sortOrder, onSelectedSortOrder }: Props) => {
  const sortOrders = [
    {
      value: "",
      label: "Relevance",
    },
    {
      value: "-added",
      label: "Date Added",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-released",
      label: "Released Date",
    },
    {
      value: "-metacritic",
      label: "Popularity",
    },
    {
      value: "-rating",
      label: "Average rating",
    },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  const { error } = usePlatforms();
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By : {currentSortOrder?.label || "Relavence"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            key={sortOrder.value}
            value={sortOrder.value}
            onClick={() => onSelectedSortOrder(sortOrder.value)}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
