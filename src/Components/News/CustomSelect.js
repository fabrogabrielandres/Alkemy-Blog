import * as React from "react";
import { Select } from "@chakra-ui/react";
export const CustomSelect = ({
  data,
  success,
  message,
  setError,
  placeholder,
  ...field
}) => {
  const Options = () => {
    return (
      data?.map((datum) => {
        return (
          <option
            key={`option#${datum.id}`}
            value={datum.id}
            children={datum.name}
          />
        );
      }) ?? []
    );
  };
  return <Select {...field} placeholder={placeholder} children={<Options />} />;
};
