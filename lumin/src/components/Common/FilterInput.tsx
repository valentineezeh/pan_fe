/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { FormControl, Select, MenuItem, TextField } from "@material-ui/core";
import { CommonStyles } from "./styles";
import { fetchProducts } from "../ProductSegment/ProductSlice";

interface Props {
  className?: string;
  filterParams?: string;
  setCurrency?: (value: string) => void;
  setSearchValue?: (value: string) => void;
  selectedCurrency?: string;
  currency?: string;
  searchValue?: string;
}

export const FilterInput = ({
  className,
  filterParams,
  setCurrency,
  setSearchValue,
  selectedCurrency,
  currency,
  searchValue,
}: Props) => {
  const classes = CommonStyles();
  const dispatch = useDispatch();

  console.log("node:14.17.0-alpine >>> ", currency);

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    const value = String(event.target.value);
    setCurrency?.(value);
    dispatch(fetchProducts(value));
  };

  return (
    <FormControl variant="outlined" className={className}>
      {filterParams !== "USD" ? (
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={(e) => setSearchValue?.(e.target.value)}
        />
      ) : (
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          onChange={handleChange}
          value={selectedCurrency || "USD"}
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
