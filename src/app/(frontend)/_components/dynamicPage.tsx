/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone,
  ArrowRight,
  ChevronRight,
  LucideIcon,
  Server,
  FileCode2,
  CodeXml,
  Puzzle,
  BadgeCheck,
  Shuffle,
  LockKeyhole,
  File,
  Users,
  FileSearch,
  Database,
  ShieldCheck,
  Rocket,
  Waypoints,
  ChartPie,
  UserCog,
  FilePenLine,
  MonitorCog,
  AppWindow,
} from 'lucide-react'

// components
import NotFound from './NotFound'
import Navbar from './_layouts/navbar'
import Hero from './_layouts/hero'
import Service from './_layouts/service'
import Tech from './_layouts/tech'
import Product from './_layouts/product'
import Client from './_layouts/client'
import Contact from './_layouts/contact'
import Award from './_layouts/award'
import About from './_layouts/about'
import Vision from './_layouts/vision/vision'
import LeaderCarousel from './_layouts/leader/leader'
import TwoColumn from './_layouts/twoColumn'
import Tech2 from './_layouts/tech2'
import ListWithIcon from './_layouts/list-with-icon/listWithIcon'
import ListWithIconAndDescription from './_layouts/list-with-icon-and-description/listWithIconAndDescription'
import TwoListWithIllustration from './_layouts/twoListWithIllustration'
import FaqSection from './_layouts/faq'
import CardWithImageSection from './_layouts/card-with-image/cardWithImageSection'
import ListWithIconAndDescription2 from './_layouts/listWithIconAndDescription2'
import ThreeDimensionCarousel from './_layouts/ThreeDimensionCarousel'

// interfaces
import type { Page } from '../_interfaces/pages'
interface DynamicPageProps {
  slug: string
}

// functions
import { getDataPages } from '../_functions/getDataPages'

export default function DynamicPage({ slug }: DynamicPageProps) {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState<Page | null>(null)
  const iconMap: Record<string, LucideIcon> = {
    phone: Phone,
    arrowright: ArrowRight,
    chevronright: ChevronRight,
    server: Server,
    filecode2: FileCode2,
    codexml: CodeXml,
    puzzle: Puzzle,
    badgecheck: BadgeCheck,
    shuffle: Shuffle,
    lockkeyhole: LockKeyhole,
    file: File,
    users: Users,
    filesearch: FileSearch,
    database: Database,
    shieldcheck: ShieldCheck,
    rocket: Rocket,
    waypoints: Waypoints,
    chartpie: ChartPie,
    usercog: UserCog,
    filepenline: FilePenLine,
    monitorcog: MonitorCog,
    appwindow: AppWindow,
  }
  const router = useRouter()
  const domainBlob = 'https://myrgdskjqrmc4clb.public.blob.vercel-storage.com/'

  function getLucideIcon(name?: string): LucideIcon | null {
    if (!name) return null
    return iconMap[name.toLowerCase()] || null
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDataPages(slug)
        if (!result || result.length === 0) {
          router.replace('/not-found')
        } else {
          setPage(result[0] as unknown as Page)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [router, slug])

  const renderSection = (section: any, index: number) => {
    switch (section.blockType) {
      case 'heroSection':
        return <Hero key={index} heroSection={section} domainBlob={domainBlob} />
      case 'serviceSection':
        return <Service key={index} serviceSection={section} domainBlob={domainBlob} />
      case 'technologySection':
        return <Tech key={index} technologySection={section} domainBlob={domainBlob} />
      case 'productSection':
        return <Product key={index} productSection={section} domainBlob={domainBlob} />
      case 'clientSection':
        return <Client key={index} clientSection={section} domainBlob={domainBlob} />
      case 'contactSection':
        return <Contact key={index} contactSection={section} domainBlob={domainBlob} />
      case 'awardSection':
        return <Award key={index} awardSection={section} domainBlob={domainBlob} />
      case 'aboutSection':
        return <About key={index} aboutSection={section} domainBlob={domainBlob} />
      case 'visionSection':
        return <Vision key={index} visionSection={section} domainBlob={domainBlob} />
      case 'leaderSection':
        return <LeaderCarousel key={index} leaderSection={section} domainBlob={domainBlob} />
      case 'twoColumnLayoutSection':
        return (
          <TwoColumn
            key={index}
            twoColumnSection={section}
            domainBlob={domainBlob}
            getLucideIcon={getLucideIcon}
          />
        )
      case 'technologySection2':
        return <Tech2 key={index} technologySection2={section} domainBlob={domainBlob} />
      case 'listWithIconSection':
        return <ListWithIcon key={index} data={section} getLucideIcon={getLucideIcon} />
      case 'listWithIconDescSection':
        return (
          <ListWithIconAndDescription key={index} data={section} getLucideIcon={getLucideIcon} />
        )
      case 'twoListWithIllustrationSection':
        return (
          <TwoListWithIllustration
            key={index}
            data={section}
            domainBlob={domainBlob}
            getLucideIcon={getLucideIcon}
          />
        )
      case 'faqSection':
        return <FaqSection key={index} data={section} />
      case 'cardWithImageSection':
        return <CardWithImageSection key={index} data={section} domainBlob={domainBlob} />
      case 'listWithIconDesc2Section':
        return (
          <ListWithIconAndDescription2
            key={index}
            data={section}
            domainBlob={domainBlob}
            getLucideIcon={getLucideIcon}
          />
        )
      case 'threeDimensionCarouselSection':
        return <ThreeDimensionCarousel key={index} data={section} domainBlob={domainBlob} />
      default:
        return <NotFound />
    }
  }

  if (loading) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex items-center justify-center min-h-screen bg-white"
        >
          <div className="w-16 h-16 border-4 border-[#00DB05] border-t-transparent rounded-full animate-spin"></div>
        </motion.div>
      </AnimatePresence>
    )
  }

  if (!page) return <NotFound />

  return (
    <div>
      <Navbar />
      {page.pageSection?.map((section, index) => renderSection(section, index))}
    </div>
  )
}
