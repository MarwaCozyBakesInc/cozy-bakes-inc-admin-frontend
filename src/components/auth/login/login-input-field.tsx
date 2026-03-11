import { inputClassName } from "@/components/auth/login/constants";
import InputErrorMessage from "@/components/ui/input-error-message";
import { type LucideIcon } from "lucide-react";
import { type InputHTMLAttributes, type ReactNode } from "react";

type LoginInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: LucideIcon;
  label: string;
  endAdornment?: ReactNode;
  error?: string;
};

export function LoginInputField({
  icon: Icon,
  label,
  endAdornment,
  error,
  ...props
}: LoginInputFieldProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={props.id}
        className="text-base leading-6 font-medium text-dark"
      >
        {label}
      </label>
      <div
        className={inputClassName}
        data-invalid={error ? "true" : undefined}
      >
        <Icon className="size-5 text-primary" strokeWidth={1.8} />
        <input
          className="w-full bg-transparent text-base leading-6 font-medium text-dark outline-none placeholder:text-gray"
          aria-invalid={Boolean(error)}
          {...props}
        />
        {endAdornment}
      </div>
      <InputErrorMessage msg={error} />
    </div>
  );
}
