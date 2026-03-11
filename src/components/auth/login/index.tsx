"use client";

import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { loginSchema, type LoginSchemaValues } from "@/schemas";
import { loginAPI } from "@/services/mutations/auth";
import { LoginHeader } from "./login-header";
import { LoginInputField } from "./login-input-field";
import { LoginOptions } from "./login-options";
import { LoginSubmitButton } from "./login-submit-button";
import toast from "react-hot-toast";
import { setToken } from "@/lib";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchemaValues) => {
    const result = await loginAPI(data);
    if (result?.ok) {
      toast.success(result?.message);
      const token = result.data?.data?.token;
      if (token) await setToken(token);
      router.replace("/");
      return;
    }
    toast.error(result?.message);
  };

  return (
    <div className="flex w-full flex-col items-start justify-center gap-8 py-2">
      <LoginHeader />

      <form
        className="flex w-full flex-col items-center gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-col gap-4">
          <LoginInputField
            id="email"
            type="email"
            label="Email"
            placeholder="Email"
            icon={Mail}
            error={errors.email?.message}
            {...register("email", {
              validate: (value) => {
                const result = loginSchema.shape.email.safeParse(value);
                return result.success || result.error.issues[0]?.message;
              },
            })}
          />

          <LoginInputField
            id="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            placeholder="Password"
            icon={LockKeyhole}
            error={errors.password?.message}
            {...register("password", {
              validate: (value) => {
                const result = loginSchema.shape.password.safeParse(value);
                return result.success || result.error.issues[0]?.message;
              },
            })}
            endAdornment={
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="cursor-pointer text-primary outline-none transition-opacity hover:opacity-80"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="size-5" strokeWidth={1.8} />
                ) : (
                  <Eye className="size-5" strokeWidth={1.8} />
                )}
              </button>
            }
          />
        </div>

        <LoginOptions />

        <LoginSubmitButton isPending={isSubmitting} />
      </form>
    </div>
  );
}
