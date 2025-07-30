export interface NavbarData {
  id: number | string
  active?: boolean | null
  layoutNavbar?: string | null
  navbarLogo: ImageItem
  navbarItemArray: NavbarItem[]
  accentColor: string
  hasButtonContact: boolean
  buttonContactReference: ReferenceItem
  buttonContactColor: string
  updatedAt: string
  createdAt: string
}

export interface NavbarItem {
  id: string
  navbarItemName: string
  navbarItemReference: ReferenceItem
  hasDropdown: true
  navbarDropdown: NavbarDropdownItem[]
}

export interface NavbarDropdownItem {
  id: string
  itemDropdownIcon: string
  itemDropdownTitle: string
  itemDropdownReference: ReferenceItem
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