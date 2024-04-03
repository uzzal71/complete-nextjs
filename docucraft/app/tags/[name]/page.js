import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc-util";

import ContentDisplay from "@/components/ContentDisplay";

const TagPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocs = getDocumentsByTag(docs, name);
  return <ContentDisplay id={matchedDocs[0].id} />;
};

export default TagPage;
