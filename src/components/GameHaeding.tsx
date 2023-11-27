import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHaeding = ({ gameQuery }: Props) => {
  const headingGenre = useGenre(gameQuery.genreId);

  const platform = usePlatform(gameQuery.platformId);

  const heading = `${headingGenre?.name || ""} 
    ${platform?.name || ""} 
    Games`;
  return (
    <Heading as="h1" fontSize="4xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHaeding;
