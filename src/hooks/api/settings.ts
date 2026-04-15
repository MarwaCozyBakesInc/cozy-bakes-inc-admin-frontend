import { adminSettingsAPI } from "@/services/queries";
import { useCustomQuery } from "..";

export function useAdminSettings() {
  return useCustomQuery(["adminSettings"], adminSettingsAPI);
}
