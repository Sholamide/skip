"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  id: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
}

const MessageInput: React.FC<MessageInputProps> = ({
  id,
  type,
  register,
  required,
  errors,
  placeholder,
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-lg focus:outline-none"
      />
    </div>
  );
};

export default MessageInput;
