import DisplayDocument from '@/components/DisplayDocument';
import { getDocuments } from '@/lib/doc';
import { getDocumentsByTag } from '@/utils/utils';

const TagPage = ({ params: { name } }) => {
    const docs = getDocuments();
    const filteredDocuments = getDocumentsByTag(docs, name);
    return <DisplayDocument id={filteredDocuments[0].id} />;
};

export default TagPage;
