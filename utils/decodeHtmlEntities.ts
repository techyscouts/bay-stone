export const decodeHtmlEntities = (encodedString?: string) => {
  if (!encodedString) return '';

  const entities: any = {
    '&#8220;': '“',
    '&#8221;': '”',
    '&#038;': '&',
    '&#8217;': '’',
    // '&nbsp;': '',
  };

  return encodedString.replace(/&#\d+;/g, (match) => entities[match] || match).replaceAll('&nbsp;', ' ');
};
