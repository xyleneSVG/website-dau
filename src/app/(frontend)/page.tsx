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
import Client from "./_components/client"

// functions
import { getDataServices } from "./_functions/getDataServices"
import { getDataTechs } from "./_functions/getDataTechs"
import { getDataProducts } from "./_functions/getDataProducts"
import { getDataClients } from "./_functions/getDataClients"

export default function HomePage() {
  const [fetching, setFetching] = useState(false)
  const [services, setServices] = useState<any[]>([])
  const [techs, setTechs] = useState<any[]>([])
  const [products, setProducts] = useState<any[]>([])
  const [clients, setClients] = useState<any[]>([])

  const domainBlob = 'https://myrgdskjqrmc4clb.public.blob.vercel-storage.com/'

  useEffect(() => {
    const fetchDataServices = async () => {
      const result = await getDataServices()
      setServices(result)
    }
    
    const fetchDataTechs = async () => {
      const result = await getDataTechs()
      setTechs(result)
    }

    const fetchDataProducts = async () => {
      const result = await getDataProducts()
      setProducts(result)
    }

    const fetchDataClients = async () => {
      const result = await getDataClients()
      setClients(result)
    }
    
    const fetchAllData = async () => {
      setFetching(true);
      try {
        await Promise.all([
          fetchDataTechs(),
          fetchDataServices(),
          fetchDataProducts(),
          fetchDataClients()
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
          <Tech techs={techs} domainBlob={domainBlob} />
          <Product products={products} domainBlob={domainBlob} />
          <Client clients={clients} domainBlob={domainBlob} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}