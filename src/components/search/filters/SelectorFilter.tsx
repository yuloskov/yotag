import * as React from "react";
import { FC } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

interface SelectorFilterProps {
  options: string[];
  selected?: string;
  label: string;
  placeholder: string;
  onChange?: (value: string) => void;
}

export const SelectorFilter: FC<SelectorFilterProps> = ({
  placeholder,
  label,
  options,
  selected,
  onChange,
}) => {
  return (
    <Select onValueChange={onChange} defaultValue={selected}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem value={option} key={option}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
