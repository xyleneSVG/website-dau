"use server";

import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function getDataFieldMessages() {
  const payload = await getPayload({ config: await configPromise });

  const result = await payload.find({
    collection: "messageFieldConfiguration",
    sort: "createdAt"
  });
  console.log(JSON.stringify(result.docs, null, 2));
  return result.docs || [];
}