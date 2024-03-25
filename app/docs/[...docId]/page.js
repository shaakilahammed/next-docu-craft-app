import DisplayDocument from '@/components/DisplayDocument';

const Document = ({ params: { docId } }) => {
    const id = docId[1] ?? docId[0];
    return <DisplayDocument id={id} />;
};

export default Document;
