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

export interface Image {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: string;
  meta_data: object;
  is_private: boolean;
  is_external_url: boolean;
}
export interface Links {
  id: string;
  url: string;
  linktype: string;
  fieldtype: string;
  cached_url: string;
}

export interface HeroCarousel {
  _uid: string;
  header: string;
  component: string;
  subHeader: string;
  button_title: string;
  background_image: Image;
  button_link: Links;
  _editable: string;
}

export interface Home {}
