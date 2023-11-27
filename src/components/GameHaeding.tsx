import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHaeding = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const headingGenre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: platform } = usePlatform();
  const selectedPlatform = platform?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const heading = `${headingGenre?.name || ""} 
    ${selectedPlatform?.name || ""} 
    Games`;
  return (
    <Heading as="h1" fontSize="4xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHaeding;
