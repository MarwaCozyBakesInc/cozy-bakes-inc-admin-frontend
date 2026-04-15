import { AdminSettingsResponse } from "@/interfaces";
import { baseAPI } from "..";

export const adminSettingsAPI = async () =>
  await baseAPI<AdminSettingsResponse>("GET", `/auth/me`);
