import {
  Box,
  Center,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect } from "react";
import { Data_drivers } from "../types/queries-file";
import SearchSVG from "./svglogos/search";

export default function Search({
  drivers,
  search,
  setSearch,
  setFilteredDrivers,
}: {
  drivers: Data_drivers[];
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setFilteredDrivers: Dispatch<SetStateAction<[] | Data_drivers[]>>;
}) {
  useEffect(() => {
    if (search) {
      setFilteredDrivers(
        drivers.filter(
          (driver) =>
            driver.car_number.includes(search) ||
            driver.last_name.toLowerCase().includes(search.toLowerCase()) ||
            driver.first_name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [drivers, search, setFilteredDrivers]);

  return (
    <Center>
      <Box w="55%" maxW="55%" margin="4">
        <InputGroup>
          <Input
            type="text"
            variant="outline"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <InputRightAddon>
            <SearchSVG />
          </InputRightAddon>
        </InputGroup>
      </Box>
    </Center>
  );
}
