"use server";

import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function getDataServices() {
  const payload = await getPayload({ config: await configPromise });

  const result = await payload.find({
    collection: "servicesSection",
    sort: "createdAt"
  });
  return result.docs || [];
}