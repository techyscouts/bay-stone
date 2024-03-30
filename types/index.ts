export interface navMenu {
  _uuid: string;
  name: string;
  links: {
    id: string;
    url: string;
    linkType: string;
    fieldType: string;
    cached_url: string;
  };
  subMenu: navMenu[];
}

export interface navItem extends navMenu {
  subMenu: navMenu[];
}

export interface multiAssets {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: string;
  meta_data: {
    alt: string;
    title: string;
    source: string;
    copyright: string;
  };
  is_private: boolean;
}
