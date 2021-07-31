import { Box, Input } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Drivers, Drivers_drivers } from "../types/queries-file";

export default function Search({
  drivers,
  setFilteredDrivers,
}: {
  drivers: Drivers;
  setFilteredDrivers: Dispatch<SetStateAction<[] | Drivers_drivers[]>>;
}) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilteredDrivers(
      drivers.drivers.filter((driver) => driver.car_number.includes(search))
    );
  }, [drivers, search, setFilteredDrivers]);

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
