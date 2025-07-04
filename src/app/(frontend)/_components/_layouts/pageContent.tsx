// app/(frontend)/_components/page-content.tsx
"use client"

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./navbar";
import Hero from "./hero";
import Service from "./service";
import Tech from "./tech";
import Product from "./product";
import Client from "./client";
import Message from "./message";

export default function PageContent({ page }: { page: any }) {
  const pageSections = page?.pageSection || [];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Navbar />
        {pageSections.map((section: any, index: number) => {
          switch (section.blockType) {
            // case "heroSection":
            //   return <Hero key={index} data={section} />;
            // case "serviceSection":
            //   return <Service key={index} data={section} />;
            // case "technologySection":
            //   return <Tech key={index} data={section} />;
            // case "productSection":
            //   return <Product key={index} data={section} />;
            // case "clientSection":
            //   return <Client key={index} data={section} />;
            // case "contactSection":
            //   return <Message key={index} data={section} />;
            // default:
            //   return null;
          }
        })}
      </motion.div>
    </AnimatePresence>
  );
}
