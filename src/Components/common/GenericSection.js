import * as React from "react";
import { GenericCard } from "./GenericCard";
import { GenericTitle } from "./GenericTitle";
import { Flex, Grid } from "@chakra-ui/react";
export const GenericSection = ({ title = "", data = [], endpoint = "#" }) => {
  const WINDOW_WIDTH = parseInt(window.innerWidth);
  const CARD_FIXED_SIZE = 320;
  const CARDS_PER_ROW = Math.floor(WINDOW_WIDTH / CARD_FIXED_SIZE);
  const ListItems = () =>
    data.map((datum) => (
      <GenericCard
        key={`card#${datum.id}`}
        endpoint={`/${endpoint + "/" + datum.id}`}
        {...datum}
      />
    ));
  const SectionList = () => (
    <Grid
      p="5"
      alignItems="center"
      justifyItems="center"
      rowGap={5}
      templateColumns={{
        base: "repeat(1, auto)",
        sm: "repeat(2, auto)",
        lg: "repeat(3, auto)",
        xl: "repeat(4, auto)",
        "2xl": `repeat(${CARDS_PER_ROW}, auto)`,
      }}
      w="100%"
      children={<ListItems />}
    />
  );
  return (
    <Flex w="100%" direction="column" justify="center">
      <GenericTitle text={title} />
      <SectionList />
    </Flex>
  );
};
