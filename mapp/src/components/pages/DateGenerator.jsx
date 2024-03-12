import { useState } from "react";

import { Button, Box } from "@mui/material";

import { useFetchDateGeneratorQuery } from "../../store";

function DateGenerator() {
  const [refreshKey, setRefreshKey] = useState(0);
  const {data, isLoading, refetch} = useFetchDateGeneratorQuery();

  const style = {
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    maxWidth: "80%",
  };

  const handleRefresh = () => {
    setRefreshKey(prevKey => prevKey + 1);
    refetch();
  };

  return (
    isLoading ? (
      <div className="flex items-center justify-center h-screen">Loading...</div>
      ) : (
      <div className="flex justify-center text-wrap	mt-12">
        <Box sx={style} className="flex flex-col gap-4 min-w-72">
          <h2 className="font-bold text-xl text-center">It's a date!</h2>
          <hr className="border-black"/>
          <ul className="flex flex-col gap-1">
            <li><strong>Attraction:</strong> {data.attraction.name}</li>
            <li><strong>Show:</strong> {data.show.name}</li>
            <li><strong>Restaurant:</strong> {data.restaurant.name}</li>
          </ul>
          <hr className="border-black"/>
          <Button variant="contained" color="primary" onClick={handleRefresh}>New date</Button>
        </Box>
      </div>
    )
  )
}

export default DateGenerator;