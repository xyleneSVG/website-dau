export interface Page {
  id: number | string;
  pageName: string;
  pageDefault: boolean;
  pageKey: string;
  pageSection: PageSection[];
  updatedAt: string;
  createdAt: string;
}

export type PageSection = HeroSection | ServiceSection | TechnologySection; 

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
  awardTitle: string
}

// Image
export interface ImageItem {
  id: string;
  filename: string;
}