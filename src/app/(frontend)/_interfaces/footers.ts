export interface FooterData {
  id: number | string
  active?: boolean | null
  layoutFooter?: string | null
  footerLogo: ImageItem
  footerTitle: string
  footerDescription: string
  footerNavigation: FooterNavigationItem[]
  updatedAt: string
  createdAt: string
}

export interface FooterNavigationItem {
  navigationGroupTitle: string
  navigationGroupItem: NavigationGroupItem[]
}

export interface NavigationGroupItem {
  navigationPageName: string
  navigationPageReference: ReferenceItem
}

interface ReferenceItem {
  id: string
  pageKey: string
}

// Image
export interface ImageItem {
  id: string
  filename: string
}