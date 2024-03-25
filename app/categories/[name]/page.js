import DisplayDocument from '@/components/DisplayDocument';
import { getDocuments } from '@/lib/doc';
import { getDocumentsByCategory } from '@/utils/utils';

const CategoryPage = ({ params: { name } }) => {
    const docs = getDocuments();
    const filteredDocuments = getDocumentsByCategory(docs, name);
    return <DisplayDocument id={filteredDocuments[0].id} />;
};

export default CategoryPage;
