import { Box, Input } from "@chakra-ui/react";
import { SetStateAction, useEffect, useState } from "react";
import { FilterState } from "../pages";
import { Drivers } from "../types/queries-file";

interface Props extends FilterState {
  setFileredDrivers: (drivers: []) => void;
}

export default function Search({
  drivers,
  setFilteredDrivers,
}: {
  drivers: Drivers;
  setFilteredDrivers: any;
}) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilteredDrivers(
      drivers.drivers.filter((driver) => driver.car_number.includes(search))
    );
  }, [drivers, search]);

  return (
    <Box>
      <Input
        type="text"
        variant="outline"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </Box>
  );
}
