"use client"

// modules
import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// component
import Navbar from "./_components/navbar"
import Hero from "./_components/hero"
import Service from "./_components/service"
import Tech from "./_components/tech"
import Product from "./_components/product"

// functions
import { getDataServices } from "./_functions/getDataServices";
import { getDataTech } from "./_functions/getDataTech"
import { getDataProduct } from "./_functions/getDataProducts"

export default function HomePage() {
  const [fetching, setFetching] = useState(false)
  const [services, setServices] = useState<any[]>([])
  const [techs, setTechs] = useState<any[]>([])
  const [products, setProducts] = useState<any[]>([])
  const domainBlob = 'https://myrgdskjqrmc4clb.public.blob.vercel-storage.com/'

  useEffect(() => {
    const fetchDataServices = async () => {
      const result = await getDataServices()
      setServices(result)
    }
    
    const fetchDataTechs = async () => {
      const result = await getDataTech()
      setTechs(result)
    }

    const fetchDataProducts = async () => {
      const result = await getDataProduct()
      setProducts(result)
    }
    
    const fetchAllData = async () => {
      setFetching(true);
      try {
        await Promise.all([
          fetchDataTechs(),
          fetchDataServices(),
          fetchDataProducts()
        ]);
      } catch (error) {
        console.error("Error in fetching data:", error);
      } finally {
        setFetching(false);
      }
    };
    fetchAllData()
  }, []);

  return (
    <AnimatePresence mode="wait">
      {fetching ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex items-center justify-center min-h-screen bg-white"
        >
          <div className="w-16 h-16 border-4 border-[#00DB05] border-t-transparent rounded-full animate-spin"></div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Navbar />
          <Hero />
          <Service services={services} domainBlob={domainBlob} />
          <Tech techs={techs} domainBlob={domainBlob}/>
          <Product products={products} domainBlob={domainBlob}/>
        </motion.div>
      )}
    </AnimatePresence>
  )
}