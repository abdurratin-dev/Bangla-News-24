export interface INavLinksDataType {
  slug: string
  title: string
  topicId: string | null
  url: string
  scrapable: boolean
}


export interface IHeadlinesDataType {
  id: string
  title: string
  description: string
  link: string
  imageUrl: string
  imageAlt: string
  category: string
  type: string
  isLive: boolean
  firstPublished: string
  lastPublished: string
  source: string
}

export interface IHomePageDataType {
  id: string
  title: string
  description: string
  link: string
  imageUrl: string
  imageAlt: string
  category: string
  type: string
  isLive: boolean
  firstPublished: string
  lastPublished: string
  source: string
}

export interface IHomePageSectionDataType {
  title: string
  curationId: string
  curationType: string
  link: string | null
  count: number
  articles: IHomePageDataType[];
}

export interface IMostReadDataType {
  id: string
  title: string
  description: string | null
  link: string
  imageUrl: string | null
  imageAlt: string | null
  category: string
  type: string
  isLive: boolean
  firstPublished: string
  lastPublished: string | null
  source: string
  rank: number
}
