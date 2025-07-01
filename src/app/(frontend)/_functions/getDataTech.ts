"use server";

import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function getDataTech() {
  const payload = await getPayload({ config: await configPromise });

  const result = await payload.find({
    collection: "techsSection",
    sort: "createdAt"
  });
  return result.docs || [];
}