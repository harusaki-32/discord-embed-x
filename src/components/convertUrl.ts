const isPostUrl = (url: string) => {
  const targetUrls = [
    "https://twitter.com/",
    "https://x.com/",
  ]

  return targetUrls.some((targetUrl) => url.startsWith(targetUrl));
}

export const convertUrl = (content: string) => {
  if (!isPostUrl(content)) return;

  const domainName = content.split("/")[2];
  const newDomainName = "fxtwitter.com";
  const newContent = content.replace(domainName, newDomainName);

  return newContent;
}