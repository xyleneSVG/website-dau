export interface Page {
  id: number | string
  pageName: string
  pageDefault: boolean
  pageKey: string
  pageSection: PageSection[]
  updatedAt: string
  createdAt: string
}

export type PageSection =
  | HeroSection
  | ZigZagListSection
  | IllustrationWithCarouselSection
  | QuadGridSection
  | GridCarouselSection
  | ContactSection
  | AwardSection
  | AboutSection
  | VisionSection
  | LeaderSection
  | TwoColumnSection
  | TechnologySection2
  | ListWithIconSection
  | ListWithIconDescSection
  | TwoListWithIllustration
  | FaqSection
  | CardWithImage
  | ListWithIconDesc2Section
  | ThreeDimensionCarouselSection

// Hero
export interface HeroSection {
  id: string
  blockName?: string
  blockType: 'heroSection'
  greetingIllustrationLeft: ImageItem
  greetingIllustrationRight: ImageItem
  greetings: Greeting[]
}

export interface Greeting {
  id: string
  hasIncludeImage: boolean
  imageGreeting: ImageItem
  textGreeting: string
}

// Zig Zag List
export interface ZigZagListSection {
  id: string
  blockName?: string
  blockType: 'zigZagListSection'
  sectionTitle: string
  sectionSubtitle: string
  contentLists: ContentLists[]
}

export interface ContentLists {
  id: string
  contentListTitle: string
  contentListDescription: string
  contentListIcon: ImageItem
}

// Illustration With Carousel
export interface IllustrationWithCarouselSection {
  id: string
  blockType: 'illustrationWithCarouselSection'
  sectionTitle: string
  sectionSubtitle: string
  sectionIllustration: ImageItem
  carouselLists: IllustrationWithCarouselLists[]
  backgroundColor: string
}

export interface IllustrationWithCarouselLists {
  id: string
  itemName: string
  itemIcon: ImageItem
}

// Quad Grid
export interface QuadGridSection {
  id: string
  blockType: 'quadGridSection'
  sectionTitle: string
  sectionSubtitle: string
  gridLists: GridCardLists[]
}

export interface GridCardLists {
  id: string
  itemTitle: string
  itemImage: ImageItem
}

// Grid Carousel
export interface GridCarouselSection {
  id: string
  blockType: 'gridCarouselSection'
  sectionTitle: string
  gridLists: GridCarouselLists[]
}

export interface GridCarouselLists {
  id: string
  itemName: string
  itemImage: ImageItem
}

// Contact
export interface ContactSection {
  id: string
  blockType: 'contactSection'
  sectionContactIllustration: ImageItem
  sectionContactLabel: string
  sectionContactHeadline: string
  sectionContactDescription: string
  fieldContactLists: FieldContactLists[]
}

export interface FieldContactLists {
  id: string
  fieldLabel: string
  fieldName: string
  fieldPlaceholder: string
  fieldType: string
  selectOptions: SelectOptions[]
  styling: boolean
  parallelFieldLabel: string
  parallelFieldName: string
  parallelFieldPlaceholder: string
  parallelFieldType: string
  required: boolean
}

export interface SelectOptions {
  id: string
  optionLabel: string
  optionValue: string
}

// Award
export interface AwardSection {
  id: string
  blockType: 'awardSection'
  sectionAwardTitle: string
  sectionAwardDescription: string
  AwardLists: AwardLists[]
}

export interface AwardLists {
  id: string
  awardImage: ImageItem
  awardNomination: string
  awardTitle: string
}

// About
export interface AboutSection {
  id: string
  blockType: 'aboutSection'
  sectionAboutLogo: ImageItem
  sectionAboutTitle: string
  sectionAboutContent: RichTextContent
}

// Vision
export interface VisionSection {
  id: string
  blockType: 'visionSection'
  sectionVisionBanner: ImageItem
  sectionVisionTitle: string
  sectionVisionSubtitle: string
  visionCardLists: VisionCardLists[]
}

export interface VisionCardLists {
  id: string
  visionCardTitle: string
  visionCardDescription: string
}

// Leader
export interface LeaderSection {
  id: string
  blockType: 'leaderSection'
  sectionLeaderTitle: string
  leaderProfileLists: LeaderProfileLists[]
}

export interface LeaderProfileLists {
  id: string
  leaderPhotoProfile: ImageItem
  leaderName: string
  leaderPosition: string
}

// Two Column Layout
export interface TwoColumnSection {
  id: string
  blockType: 'twoColumnSection'
  twoColumnLayoutTitle: string
  twoColumnLayoutSubtitle: string
  twoColumnLayoutDescription: RichTextContent
  hasButton: boolean
  buttonText: string
  buttonIcon: string
  buttonLink: ButtonLink
  buttonColor: string
  reverseContent: boolean
  hasBackground: boolean
  backgroundColor: string
  imageLists: TwoColumnLayoutImageLists[]
}

export interface TwoColumnLayoutImageLists {
  id: string
  twoColumnLayoutImage: ImageItem
}

// Technology 2
export interface TechnologySection2 {
  id: string
  blockType: 'technologySection2'
  sectionTechnology2Title: string
  technology2Lists: Technology2Lists[]
}

export interface Technology2Lists {
  id: string
  technologyName: string
  technologyIcon: ImageItem
}

// List With Icon
export interface ListWithIconSection {
  id: string
  blockType: 'listWithIconSection'
  sectionListIconTitle: string
  backgroundPageColor: string
  iconColor: string
  backgroundIconColor: string
  contentLists: ContentListsWithIcon[]
}

export interface ContentListsWithIcon {
  id: string
  contentIcon: string
  contentName: string
}

// List With Icon & Desc
export interface ListWithIconDescSection {
  id: string
  blockType: 'listWithIconDescSection'
  sectionListIconDescTitle: string
  backgroundPageColor: string
  iconColor: string
  backgroundIconColor: string
  contentLists: ContentListsWithIcon[]
}

export interface ContentListsWithIcon {
  id: string
  contentIcon: string
  contentName: string
  contentDesc: string
}

// Two List With Illustration
export interface TwoListWithIllustration {
  id: string
  blockType: 'twoListWithIllustrationSection'
  sectionTitle: string
  sectionDescription: string
  sectionIllustration: ImageItem
  leftSideListTitle: string
  leftSideListColor: string
  rightSideListTitle: string
  rigtSideListColor: string
  hasButton: boolean
  buttonText: string
  buttonIcon: string
  buttonLink: ButtonLink
  buttonColor: string
  leftSideListContentArray: LeftSideListContentArray[]
  rightSideListContentArray: RightSideListContentArray[]
}

export interface LeftSideListContentArray {
  id: string
  leftSideListContent: string
}

export interface RightSideListContentArray {
  id: string
  rightSideListContent: string
}

// FAQ
export interface FaqSection {
  id: string
  blockType: 'faqSection'
  sectionTitle: string
  sectionDescription: string
  backgroundColor: string
  sectionFaqArray: SectionFaqArray[]
}

export interface SectionFaqArray {
  id: string
  question: string
  answer: string
}

// Card With Image
export interface CardWithImage {
  id: string
  blockType: 'cardWithImageSection'
  sectionTitle: string
  backgroundColor: string
  sectionCardArray: SectionCardArray[]
}

export interface SectionCardArray {
  id: string
  cardThumbnail: ImageItem
  cardTitle: string
  cardDescription: string
}

// List With Icon & Desc 2
export interface ListWithIconDesc2Section {
  id: string
  blockType: 'listWithIconDesc2Section'
  sectionTitle: string
  sectionIllustration: ImageItem
  iconColor: string
  backgroundIconColor: string
  contentLists: ContentListsWithIcon[]
}

export interface ContentListsWithIcon {
  id: string
  contentIcon: string
  contentName: string
  contentDesc: string
}

// Three Dimension Carousel
export interface ThreeDimensionCarouselSection {
  id: string
  blockType: 'threeDimensionCarousel'
  sectionTitle: RichTextContent
  carouselItems: ThreeDimensionCarouselItems[]
}

export interface ThreeDimensionCarouselItems {
  id: string
  title: string
  description: string
  icon: ImageItem
}

// Hero 2
export interface Hero2Section {
  id: string
  blockType: 'hero2Section'
  sectionTextBold: string
  sectionTextLight: string
  sectionBackground: ImageItem
}

// Image
export interface ImageItem {
  id: string
  filename: string
}

// Button Link
export interface ButtonLink {
  id: string
  pageKey: string
}

// RichTextContent
export interface RichTextContent {
  root: {
    type: 'root'
    format: string
    indent: number
    version: number
    direction: string
    textFormat: number
    children: RichTextNode[]
  }
}

export type RichTextNode = ParagraphNode | LinebreakNode

export interface ParagraphNode {
  type: 'paragraph'
  format: string
  indent: number
  version: number
  direction: string
  textStyle: string
  textFormat: number
  children: RichTextTextNode[]
}

export interface LinebreakNode {
  type: 'linebreak'
  version: number
}

export interface RichTextTextNode {
  type: 'text'
  version: number
  mode: string
  text: string
  style: string
  detail: number
  format: number
}
