/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
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
import LayeredTextOnImage from './_layouts/layeredTextOnImage'
import ZigZagList from './_layouts/zigZagList'
import IllustrationWithCarousel from './_layouts/illustrationWithCarousel'
import QuadGrid from './_layouts/quadGrid'
import GridCarousel from './_layouts/gridCarousel'
import Contact from './_layouts/contact'
import IllustrationWithTextAndCarousel from './_layouts/illustrationWithTextAndCarousel'
import ImageHeaderParagraph from './_layouts/imageHeaderParagraph'
import ImageHeaderThreeCard from './_layouts/Image-Header-With-Three-Column/imageHeaderThreeColumn'
import CircleImageGrid from './_layouts/circle-image-grid/circleImageGrid'
import TextWithImageCluster from './_layouts/textWithImageCluster'
import LoopingCarousel from './_layouts/loopingCarousel'
import ListWithIcon from './_layouts/list-with-icon/listWithIcon'
import ListWithIconAndDescription from './_layouts/list-with-icon-and-description/listWithIconAndDescription'
import TwoListWithIllustration from './_layouts/twoListWithIllustration'
import TextGrid from './_layouts/textGrid'
import CardWithImageSection from './_layouts/card-with-image/cardWithImageSection'
import IconTextListWithImage from './_layouts/iconTextListWithImage'
import ThreeDimensionCarousel from './_layouts/threeDimensionCarousel'
import TextAlignCenter from './_layouts/textAlignCenter'

// interfaces
import type { Page } from '../_interfaces/pages'
interface DynamicPageProps {
  slug: string
}

// functions
import { getDataPages } from '../_functions/getDataPages'

export default function DynamicPage({ slug }: DynamicPageProps) {
  const [loading, setLoading] = useState(true)
  const [fetchedPage, setFetchedPage] = useState<Page | null>(null)
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
          setFetchedPage(result[0] as unknown as Page)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [router, slug])

  const { data: livePreviewData } = useLivePreview<Page>({
    initialData: fetchedPage ?? ({} as Page),
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL ?? '',
    depth: 2,
  })

  const pageData = { ...fetchedPage, ...livePreviewData }

  const renderSection = (section: any, index: number) => {
    switch (section.blockType) {
      case 'heroSection':
        return <Hero key={index} heroSection={section} domainBlob={domainBlob} />
      case 'zigZagListSection':
        return <ZigZagList key={index} data={section} domainBlob={domainBlob} />
      case 'illustrationWithCarouselSection':
        return <IllustrationWithCarousel key={index} data={section} domainBlob={domainBlob} />
      case 'quadGridSection':
        return <QuadGrid key={index} data={section} domainBlob={domainBlob} />
      case 'gridCarouselSection':
        return <GridCarousel key={index} data={section} domainBlob={domainBlob} />
      case 'contactSection':
        return <Contact key={index} contactSection={section} domainBlob={domainBlob} />
      case 'illustrationWithTextAndCarouselSection':
        return (
          <IllustrationWithTextAndCarousel key={index} data={section} domainBlob={domainBlob} />
        )
      case 'imageHeaderParagraphSection':
        return <ImageHeaderParagraph key={index} data={section} domainBlob={domainBlob} />
      case 'imageHeaderThreeColumnSection':
        return <ImageHeaderThreeCard key={index} data={section} domainBlob={domainBlob} />
      case 'circleImageGridSection':
        return <CircleImageGrid key={index} data={section} domainBlob={domainBlob} />
      case 'textWithImageClusterSection':
        return (
          <TextWithImageCluster
            key={index}
            data={section}
            domainBlob={domainBlob}
            getLucideIcon={getLucideIcon}
          />
        )
      case 'loopingCarouselSection':
        return <LoopingCarousel key={index} data={section} domainBlob={domainBlob} />
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
      case 'textGridSection':
        return <TextGrid key={index} data={section} />
      case 'cardWithImageSection':
        return <CardWithImageSection key={index} data={section} domainBlob={domainBlob} />
      case 'iconTextListWithImageSection':
        return (
          <IconTextListWithImage
            key={index}
            data={section}
            domainBlob={domainBlob}
            getLucideIcon={getLucideIcon}
          />
        )
      case 'threeDimensionCarouselSection':
        return <ThreeDimensionCarousel key={index} data={section} domainBlob={domainBlob} />
      case 'layeredTextOnImageSection':
        return <LayeredTextOnImage key={index} data={section} domainBlob={domainBlob} />
      case 'textAlignCenterSection':
        return <TextAlignCenter key={index} data={section} />
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

  if (!pageData) return <NotFound />

  return (
    <div>
      <Navbar />
      {pageData.pageSection?.map((section, index) => renderSection(section, index))}
    </div>
  )
}
