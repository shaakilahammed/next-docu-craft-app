export const getDocumentsByCategory = (docs, category) => {
    return docs.filter((doc) => doc.category === category);
};

export const getDocumentsByAuthor = (docs, author) => {
    return docs.filter((doc) => encodeURI(doc.author) === author);
};

export const getDocumentsByTag = (docs, tag) => {
    return docs.filter((doc) => doc.tags.some((item) => item === tag));
};
