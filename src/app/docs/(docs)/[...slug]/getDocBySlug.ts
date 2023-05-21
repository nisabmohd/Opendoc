import gettingStartedIntro from "../../../content/docs/getting-started/Introduction.mdx";
import codeBlocks from "../../../content/docs/documentation/code-blocks.mdx";
import components from "../../../content/docs/documentation/Components.mdx";
import docsIntro from "../../../content/docs/documentation/Introduction.mdx";
import styleGuide from "../../../content/docs/documentation/style-guide.mdx";

const mapper: any = {
  "getting-started": {
    introduction: gettingStartedIntro,
  },
  documentation: {
    introduction: docsIntro,
    components,
    "code-blocks": codeBlocks,
    "style-guide": styleGuide,
  },
};

export function getDocBySlug(slugs: string[]) {
  let document = mapper;
  slugs.forEach((slug) => {
    if (!document) return;
    document = document[slug];
  });
  return document;
}
