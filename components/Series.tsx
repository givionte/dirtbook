import { Button } from "@chakra-ui/react";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { Data_drivers, Data_series } from "../types/queries-file";

function Series({
  series,
  drivers,
  setFilteredDrivers,
}: {
  series: Data_series;
  drivers: Data_drivers[];
  setFilteredDrivers: Dispatch<SetStateAction<[] | Data_drivers[]>>;
}) {
  const handleClick = (e: FormEvent<EventTarget>): void => {
    let target = e.target as HTMLInputElement;
    setFilteredDrivers(
      drivers.filter((driver) => {
        return driver.series_drivers.some(
          (id) => id.series_id === parseInt(target.id)
        );
      })
    );
  };

  return (
    <Button
      id={series.id.toString()}
      onClick={handleClick}
      variant="outline"
      colorScheme="blackAlpha"
    >
      {series.series_name}
    </Button>
  );
}

export default Series;
