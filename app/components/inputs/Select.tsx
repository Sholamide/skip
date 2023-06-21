"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import ReactSelect from "react-select";

interface SelectProps {
  label: string;
  options: Record<string, any>[];
  onChange: (value: Record<string, any>) => void;
  disabled?: boolean;
  value?: Record<string, any>;
}

const Select: React.FC<SelectProps> = ({
  label,
  onChange,
  value,
  options,
  disabled,
}) => {
  return (
    <div className="z-[100]">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <ReactSelect
          options={options}
          isMulti
          value={value}
          onChange={onChange}
          isDisabled={disabled}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          }}
          classNames={{
            control: () => "text-sm",
          }}
        />
      </div>
    </div>
  );
};

export default Select;
