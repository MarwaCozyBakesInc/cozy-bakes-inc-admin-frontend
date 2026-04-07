"use server";

import { AuthResponse } from "@/types";
import { safeApi } from "..";
import { LoginSchemaValues } from "@/schemas";

export const loginAPI = async (payload: LoginSchemaValues) =>
  await safeApi<AuthResponse>("POST", "/login", payload);
