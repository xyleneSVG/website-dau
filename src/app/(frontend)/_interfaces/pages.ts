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
  | ImageWithCarouselSection
  | QuadGridSection
  | ImageGridCarouselSection
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
  | LayeredTextOnImageSection
  | TextAlignCenterSection
  | GridImageSection
  | IconListWithSideImagesSection

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

// Image With Carousel
export interface ImageWithCarouselSection {
  id: string
  blockName?: string
  blockType: 'imageWithCarouselSection'
  sectionTitle: string
  sectionDescription: string
  sectionIllustration: ImageItem
  backgroundColor: string
  carouselImage: ImageCarousel[]
}

export interface ImageCarousel {
  id: string
  itemImage: ImageItem
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

// Image Grid Carousel
export interface ImageGridCarouselSection {
  id: string
  blockType: 'imageGridCarouselSection'
  sectionTitle: string
  gridLists: GridCarouselLists[]
}

export interface GridCarouselLists {
  id: string
  itemImage: ImageItem
}

// Contact
export interface ContactSection {
  id: string
  blockType: 'contactSection'
  sectionIllustration: ImageItem
  sectionLabel: string
  sectionHeadline: string
  sectionDescription: string
  fieldsForm: FieldForm[]
}

export interface FieldForm {
  id: string
  fieldLayout: "single" | "double"
  fieldId: string
  fieldLabel: string
  fieldTypeSingle: "text" | "number" | "email" | "textarea" | "radio"
  fieldPlaceholder: string
  fieldTypeDouble: "text" | "number" | "email"
  fieldRequired: boolean
  fieldRadioOptions: OptionRadio[]
  subFields: SubFields[]
}

export interface OptionRadio {
  id: string
  optionRadioValue: string
  optionRadioLabel: string
}

export interface SubFields {
  id: string
  subFieldId: string
  subFieldLabel: string
  subFieldPlaceholder: string
  subFieldType: "text" | "number" | "email"
  subFieldRequired: boolean
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

// Layered Text On Image
export interface LayeredTextOnImageSection {
  id: string
  blockType: 'layeredTextOnImageSection'
  sectionTitle: string
  sectionSubtitle: string
  sectionBackground: ImageItem
}

// Text Align Center
export interface TextAlignCenterSection {
  id: string
  blockType: 'textAlignCenterSection'
  sectionTitle: string
  sectionDescription: string
}

// Grid Image
export interface GridImageSection {
  id: string,
  blockType: 'gridImageSection',
  sectionTitle: RichTextContent,
  gridImage: GridImageLists[]
}

export interface GridImageLists {
  id: string,
  image: ImageItem
  imageDescription: string
}

// Icon List With Side Images
export interface IconListWithSideImagesSection {
  id: string
  sectionTitle: string
  sectionIllustrationArray: IllustrationArray[]
  sectionContent: IconListWithSideImagesContentArray[]
}

export interface IllustrationArray {
  id: string
  sectionIllustration: ImageItem
}

export interface IconListWithSideImagesContentArray {
  id: string
  itemImage: ImageItem
  itemTitle: string
  itemDescription: string
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
