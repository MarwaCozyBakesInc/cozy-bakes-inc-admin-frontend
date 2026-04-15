import { ContactUsDetailsResponse } from "@/interfaces";
import { baseAPI } from "..";

export const contactDetailsAPI = async () =>
  await baseAPI<ContactUsDetailsResponse>(
    "GET",
    `/contact/details`,
  );
