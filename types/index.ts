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
