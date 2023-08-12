export function extractUrl(url: string) {
  const domainPattern = /^(https?:\/\/[^\/]+)/;
  const matches = url.match(domainPattern);

  if (matches && matches.length >= 1) {
    return matches[1];
  } else {
    return url;
  }
}
