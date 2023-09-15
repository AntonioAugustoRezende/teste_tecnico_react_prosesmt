"use-client";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputDateProps {
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  label: string;
  register?: UseFormRegisterReturn;
  error?: string;
}

export default function InputDate({
  placeholder,
  disabled,
  value,
  defaultValue,
  onBlur,
  label,
  register,
  error,
}: InputDateProps) {
  return (
    <div className="flex flex-col gap-3 w-20 ">
      <label className="text-base font-bold text-grey-200 mb-2" htmlFor={label}>
        {label}
      </label>
      <input
        {...register}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onBlur={onBlur}
        defaultValue={defaultValue}
        className="h-12 px-4 text-zinc-800 border-1.5 rounded mb-6 placeholder:text-gray-600 hover:bg-grey-100 focus:outline-none"
      />
      {error && (
        <p className="flex  text-red-500 relative bottom-[20px] font-extralight text-sm">
          {error}
        </p>
      )}
    </div>
  );
}
