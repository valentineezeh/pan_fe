import { InputLabel, FormControl, Select } from "@material-ui/core";

interface Props {
  className: string;
  filterParams: string;
}

export const FilterInput = ({ className, filterParams }: Props) => {
  return (
    <FormControl variant="outlined" className={className}>
      <InputLabel htmlFor="outlined-age-native-simple">
        {filterParams}
      </InputLabel>
      <Select native></Select>
    </FormControl>
  );
};
