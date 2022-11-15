/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FormControl, Select, MenuItem, TextField } from "@material-ui/core";
import { CommonStyles } from "./styles";
import { fetchProducts } from "../ProductSegment/ProductSlice";

interface Props {
  className: string;
  filterParams: string;
  currency?: string;
  setCurrency?: (value: string) => void;
}

export const FilterInput = ({
  className,
  filterParams,
  setCurrency,
  currency = "USD",
}: Props) => {
  const classes = CommonStyles();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const useDebouncedEffect = (
    effect: () => void,
    /* eslint-disable @typescript-eslint/no-explicit-any */
    deps: Array<any>,
    delay: number
  ) => {
    useEffect(() => {
      const handler = setTimeout(() => effect(), delay);

      return () => clearTimeout(handler);
    }, [...(deps || []), delay]);
  };

  useDebouncedEffect(
    () => {
      dispatch(fetchProducts({ currency: currency, searchValue }));
    },
    [searchValue],
    500
  );

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    const value = String(event.target.value);
    setCurrency?.(value);
    dispatch(fetchProducts({ currency: value, searchValue }));
  };

  return (
    <FormControl variant="outlined" className={className}>
      {filterParams !== "USD" ? (
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      ) : (
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          onChange={handleChange}
          value={currency || "USD"}
        >
          {["USD", "CAD", "NGN"].map((item, index) => (
            <MenuItem value={item} key={index} className={classes.filterOption}>
              {item}
            </MenuItem>
          ))}
        </Select>
      )}
    </FormControl>
  );
};
