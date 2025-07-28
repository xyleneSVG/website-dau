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
  | IllustrationWithTextAndCarouselSection
  | ImageHeaderParagraphSection
  | ImageHeaderThreeColumnSection
  | CircleImageGridSection
  | TextWithImageClusterSection
  | LoopingCarouselSection
  | ListWithIconSection
  | ListWithIconDescSection
  | TwoListWithIllustrationSection
  | TextGridSection
  | CardWithImageSection
  | IconTextListWithImageSection
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
  blockName?: string
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

// Illustration With Text And Carousel
export interface IllustrationWithTextAndCarouselSection {
  id: string
  blockType: 'illustrationWithTextAndCarouselSection'
  sectionTitle: string
  sectionDescription: string
  carouselLists: IllustrationWithTextAndCarouselLists[]
}

export interface IllustrationWithTextAndCarouselLists {
  id: string
  carouselImage: ImageItem
  carouselDescription: string
  carouselTitle: string
}

// Image Header With Paragraph
export interface ImageHeaderParagraphSection {
  id: string
  blockType: 'imageHeaderParagraphSection'
  sectionImage: ImageItem
  sectionTitle: string
  sectionParagraph: RichTextContent
}

// Image Header With Three Column
export interface ImageHeaderThreeColumnSection {
  id: string
  blockType: 'imageHeaderThreeColumnSection'
  sectionHeaderImage: ImageItem
  sectionTitle: string
  sectionSubtitle: string
  gridLists: GridImageHeaderThreeColumnLists[]
}

export interface GridImageHeaderThreeColumnLists {
  id: string
  itemTitle: string
  itemDescription: string
}

// Circle Image Grid
export interface CircleImageGridSection {
  id: string
  blockType: 'circleImageGridSection'
  sectionTitle: string
  gridLists: GridCircleImageLists[]
}

export interface GridCircleImageLists {
  id: string
  itemImage: ImageItem
  itemName: string
  itemDescription: string
}

// Text With Image Cluster
export interface TextWithImageClusterSection {
  id: string
  blockType: 'textWithImageClusterSection'
  sectionHeadline: string
  sectionTitle: string
  sectionDescription: RichTextContent
  hasButton: boolean
  buttonText: string
  buttonIcon: string
  buttonLink: ButtonLink
  buttonColor: string
  reverseContent: boolean
  hasBackground: boolean
  backgroundColor: string
  imageLists: TextWithImageClusterImageLists[]
}

export interface TextWithImageClusterImageLists {
  id: string
  itemImage: ImageItem
}

// Looping Carousel
export interface LoopingCarouselSection {
  id: string
  blockType: 'loopingCarouselSection'
  sectionTitle: string
  carouselLists: LoopingCarouselLists[]
}

export interface LoopingCarouselLists {
  id: string
  itemImage: ImageItem
}

// List With Icon
export interface ListWithIconSection {
  id: string
  blockType: 'listWithIconSection'
  sectionTitle: string
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
  sectionTitle: string
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
export interface TwoListWithIllustrationSection {
  id: string
  blockType: 'twoListWithIllustrationSection'
  sectionTitle: string
  sectionDescription: string
  sectionIllustration: ImageItem
  leftSideListTitle: string
  leftSideListTitleColor: string
  leftSideListColor: string
  rightSideListTitle: string
  rightSideListTitleColor: string
  rightSideListColor: string
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

// Text Grid
export interface TextGridSection {
  id: string
  blockType: 'textGridSection'
  sectionTitle: string
  sectionDescription: string
  headerColor: string
  gridArray: GridTextLists[]
}

export interface GridTextLists {
  id: string
  itemTitle: string
  itemDescription: string
}

// Card With Image
export interface CardWithImageSection {
  id: string
  blockType: 'cardWithImageSection'
  sectionTitle: string
  headerColor: string
  cardArray: SectionCardArray[]
}

export interface SectionCardArray {
  id: string
  itemThumbnail: ImageItem
  itemTitle: string
  itemDescription: string
}

// Icon Text List With Image
export interface IconTextListWithImageSection {
  id: string
  blockType: 'iconTextListWithImageSection'
  sectionTitle: string
  sectionIllustration: ImageItem
  iconColor: string
  backgroundIconColor: string
  contentLists: ContentIconTextLists[]
}

export interface ContentIconTextLists {
  id: string
  itemIcon: string
  itemTitle: string
  itemDescription: string
}

// Three Dimension Carousel
export interface ThreeDimensionCarouselSection {
  id: string
  blockType: 'threeDimensionCarouselSection'
  sectionTitle: RichTextContent
  carouselItems: ThreeDimensionCarouselItems[]
}

export interface ThreeDimensionCarouselItems {
  id: string
  itemTitle: string
  itemDescription: string
  itemIcon: ImageItem
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
