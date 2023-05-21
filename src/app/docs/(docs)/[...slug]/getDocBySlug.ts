import gettingStarted from "../../../content/docs/hello.mdx";

const mapper: any = {
  "getting-started": {
    introduction: gettingStarted,
  },
};

export function getDocBySlug(slugs: string[]) {
  let document = mapper;
  slugs.forEach((slug) => {
    document = document[slug];
  });
  return document;
}
