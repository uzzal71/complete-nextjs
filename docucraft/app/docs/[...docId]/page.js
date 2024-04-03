import ContentDisplay from "@/components/ContentDisplay";
import Link from "next/link";

export default function DocContentPage({ params: { docId } }) {
  const lastSegment = docId[docId.length - 1];
  const segments = docId.map((segment, index) => (
    <span key={segment}>
      <Link href={`/docs/${segment}`}>
        <span className="text-blue-500">{segment}</span>
      </Link>
      {index < docId.length - 1 && <span className="mx-1">/</span>}
    </span>
  ));

  return (
    <>
      <div>
        <Link href="/">
          <span className="text-blue-500">Home</span>
        </Link>
        <span className="mx-1">/</span>
        {segments}
      </div>

      <ContentDisplay id={lastSegment} />
    </>
  );
}
