"use server";

import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function getDataTechs() {
  const payload = await getPayload({ config: await configPromise });

  const result = await payload.find({
    collection: "techsSection",
    sort: "createdAt"
  });
  // console.log(result)
  return result.docs || [];
}