"use server";

import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function getDataProducts() {
  const payload = await getPayload({ config: await configPromise });

  const result = await payload.find({
    collection: "productsSection",
    sort: "-createdAt",
    limit: 4
  });
  // console.log(result)
  return result.docs || [];
}