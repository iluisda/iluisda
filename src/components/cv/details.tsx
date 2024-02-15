import { format } from "date-fns";
import React from "react";
import Text from "@/components/common/text";

interface Details {
  from: string;
  to: string;
  what?: string;
  where?: string;
  location?: string;
}

const Details = ({ from, to, what, where, location }: Details) => {
  return (
    <>
      <Text variant="light">
        {`${format(new Date(from), "MMM yyyy")}${
          from !== to ? ` - ${format(new Date(to), "MMM yyyy")}` : ""
        }`}
      </Text>
      <Text>{what}</Text>
      {!!where && (
        <Text fontSize="16px" italic>
          {where}
        </Text>
      )}
      {!!location && (
        <Text fontSize="14px" variant="light">
          📍 {location}
        </Text>
      )}
    </>
  );
};

export default Details;
