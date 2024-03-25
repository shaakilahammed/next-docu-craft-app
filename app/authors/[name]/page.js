import DisplayDocument from '@/components/DisplayDocument';
import { getDocuments } from '@/lib/doc';
import { getDocumentsByAuthor } from '@/utils/utils';

const AuthorPage = ({ params: { name } }) => {
    const docs = getDocuments();
    const filteredDocuments = getDocumentsByAuthor(docs, name);
    return <DisplayDocument id={filteredDocuments[0].id} />;
};

export default AuthorPage;
