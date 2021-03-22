import React from "react";
import { useDispatch } from "react-redux";
import { InputLabel, FormControl, Select } from "@material-ui/core";
import { CommonStyles } from "./styles";
import { fetchProductByCurrency } from "../ProductSegment/ProductSlice";

interface Props {
  className: string;
  filterParams: string;
}

export const FilterInput = ({ className, filterParams }: Props) => {
  const classes = CommonStyles();
  const [currency, setCurrency] = React.useState("USD");
  const dispatch = useDispatch();
  let mainValue = "";

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCurrency(event.target.value as string);
    mainValue = mainValue + event.target.value;
  };

  let currencyList: string[];
  currencyList = ["USD", "CAD", "NGN"];

  const onGetNewPrices = () => {
    dispatch(fetchProductByCurrency(mainValue));
  };

  return (
    <FormControl variant="outlined" className={className}>
      {filterParams !== "USD" ? (
        <>
          <InputLabel htmlFor="outlined-age-native-simple">
            {filterParams}
          </InputLabel>
          <Select native />
        </>
      ) : (
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          onChange={handleChange}
          value={currency}
          onClick={onGetNewPrices}
          defaultValue={"USD"}
        >
          {currencyList.map((item, index) => (
            <option value={item} key={index} className={classes.filterOption}>
              {item}
            </option>
          ))}
        </Select>
      )}
    </FormControl>
  );
};
