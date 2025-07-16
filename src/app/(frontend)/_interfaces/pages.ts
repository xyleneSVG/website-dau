export interface Page {
  id: number | string;
  pageName: string;
  pageDefault: boolean;
  pageKey: string;
  pageSection: PageSection[];
  updatedAt: string;
  createdAt: string;
}

export type PageSection = HeroSection | ServiceSection | TechnologySection | ProductSection | ClientSection | ContactSection | AwardSection | AboutSection | VisionSection | LeaderSection | TwoColumnSection | TechnologySection2; 

// Hero
export interface HeroSection {
  id: string;
  blockName?: string;
  blockType: 'heroSection';
  greetingIllustrationLeft: ImageItem;
  greetingIllustrationRight: ImageItem;
  greetings: Greeting[];
}

export interface Greeting {
  id: string;
  hasIncludeImage: boolean;
  imageGreeting: ImageItem;
  textGreeting: string;
}

// Service
export interface ServiceSection {
  id: string;
  blockName?: string;
  blockType: 'serviceSection';
  sectionServiceTitle: string;
  sectionServiceSubtitle: string;
  serviceLists: ServiceLists[];
}

export interface ServiceLists {
    id: string,
    serviceListTitle: string,
    serviceListDescription: string,
    serviceListIcon: ImageItem
}

// Technology
export interface TechnologySection {
  id: string,
  blockType: 'technologySection';
  sectionTechnologyTitle: string,
  sectionTechnologySubtitle: string,
  sectionTechnologyIllustration: ImageItem,
  technologyLists: TechnologyLists[]
}

export interface TechnologyLists {
  id: string,
  technologyName: string,
  technologyIcon: ImageItem,
}

// Product
export interface ProductSection {
  id: string,
  blockType: 'productSection';
  sectionProductTitle: string,
  sectionProductSubtitle: string,
  productLists: ProductLists[]
}

export interface ProductLists {
  id: string,
  productTitle: string,
  productDisplay: ImageItem,
}

// Client
export interface ClientSection {
  id: string,
  blockType: 'clientSection';
  sectionClientTitle: string,
  clientLists: ClientLists[]
}

export interface ClientLists {
  id: string,
  clientName: string,
  clientLogo: ImageItem,
}

// Contact
export interface ContactSection {
  id: string,
  blockType: 'contactSection';
  sectionContactIllustration: ImageItem
  sectionContactLabel: string,
  sectionContactHeadline: string,
  sectionContactDescription: string,
  fieldContactLists: FieldContactLists[]
}

export interface FieldContactLists {
  id: string,
  fieldLabel: string,
  fieldName: string,
  fieldPlaceholder: string,
  fieldType: string
  selectOptions: SelectOptions[]
  styling: boolean,
  parallelFieldLabel: string,
  parallelFieldName: string,
  parallelFieldPlaceholder: string,
  parallelFieldType: string,
  required: boolean
}

export interface SelectOptions {
  id: string,
  optionLabel: string,
  optionValue: string
}

// Award
export interface AwardSection {
  id: string,
  blockType: 'awardSection',
  sectionAwardTitle: string,
  sectionAwardDescription: string,
  AwardLists: AwardLists[],
}

export interface AwardLists {
  id: string,
  awardImage: ImageItem,
  awardNomination: string,
  awardTitle: string,
}

// About
export interface AboutSection {
  id: string,
  blockType: 'aboutSection',
  sectionAboutLogo: ImageItem,
  sectionAboutTitle: string,
  sectionAboutContent: RichTextContent,
}

// Vision
export interface VisionSection {
  id: string,
  blockType: 'visionSection',
  sectionVisionBanner: ImageItem,
  sectionVisionTitle: string,
  sectionVisionSubtitle: string,
  visionCardLists: VisionCardLists[]
}

export interface VisionCardLists {
  id: string,
  visionCardTitle: string,
  visionCardDescription: string
}

// Leader
export interface LeaderSection {
  id: string,
  blockType: 'leaderSection'
  sectionLeaderTitle: string,
  leaderProfileLists: LeaderProfileLists[]
}

export interface LeaderProfileLists {
  id: string,
  leaderPhotoProfile: ImageItem,
  leaderName: string,
  leaderPosition: string
}

// Two Column Layout
export interface TwoColumnSection {
  id: string,
  blockType: 'twoColumnSection';
  twoColumnLayoutTitle: string,
  twoColumnLayoutSubtitle: string,
  twoColumnLayoutDescription: RichTextContent,
  hasButton: boolean,
  buttonText: string,
  buttonIcon: string,
  buttonLink: ButtonLink,
  buttonColor: string,
  contentAlign: string,
  hasBackground: boolean,
  backgroundColor: string,
  imageLists: TwoColumnLayoutImageLists[]
}

export interface ButtonLink {
  id: string,
  pageKey: string
}

export interface TwoColumnLayoutImageLists {
  id: string,
  twoColumnLayoutImage: ImageItem
}

// Technology 2
export interface TechnologySection2 {
  id: string,
  blockType: 'technologySection2';
  sectionTechnology2Title: string,
  technology2Lists: Technology2Lists[]
}

export interface Technology2Lists {
  id: string,
  technologyName: string,
  technologyIcon: ImageItem,
}

// Image
export interface ImageItem {
  id: string,
  filename: string,
}

// RichTextContent
export interface RichTextContent {
  root: {
    type: 'root',
    format: string,
    indent: number,
    version: number,
    direction: string,
    textFormat: number,
    children: RichTextNode[],
  },
}

export type RichTextNode =
  | ParagraphNode
  | LinebreakNode

export interface ParagraphNode {
  type: 'paragraph',
  format: string,
  indent: number,
  version: number,
  direction: string,
  textStyle: string,
  textFormat: number,
  children: RichTextTextNode[],
}

export interface LinebreakNode {
  type: 'linebreak',
  version: number,
}

export interface RichTextTextNode {
  type: 'text',
  version: number,
  mode: string,
  text: string,
  style: string,
  detail: number,
  format: number,
}
