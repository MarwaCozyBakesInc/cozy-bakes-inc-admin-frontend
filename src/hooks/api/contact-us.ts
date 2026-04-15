import { contactDetailsAPI } from "@/services/queries";
import { useCustomQuery } from "..";

export function useContactDetails() {
  return useCustomQuery(["contactDetails"], contactDetailsAPI);
}
