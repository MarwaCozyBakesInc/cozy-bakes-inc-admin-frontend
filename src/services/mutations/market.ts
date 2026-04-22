"use server";

import { safeApi } from "..";

export const createMarketAPI = async (payload: FormData) =>
  await safeApi("POST", "/market/create", payload, { isForm: true });

export const deleteMarketAPI = async (slug: string) =>
  await safeApi("DELETE", `/market/${slug}/destroy`);
