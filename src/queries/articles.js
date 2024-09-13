/**
 * Query to fetch all articles.
 */
export const ARTICLES_QUERY = `
    query AllArticles {
        allArticles {
            categories {
            title
            slug
            _modelApiKey
            }
            featuredImage {
            responsiveImage {
                src
                height
                width
            }
            title
            }
            content {
            ... on BlockCodeRecord {
                id
                _modelApiKey
                code {
                value
                }
            }
            ... on BlockParagraphRecord {
                id
                _modelApiKey
                content {
                value
                }
            }
            ... on BlockContentWithImageRecord {
                id
            }
            ... on BlockGalleryRecord {
                id
                images {
                responsiveImage {
                    src
                    width
                    height
                }
                }
                galleryStyle
                _modelApiKey
            }
            ... on BlockImageRecord {
                id
                alignment
                _modelApiKey
            }
            }
            articleAuthor
            articleDisplayDate
            _seoMetaTags {
            attributes
            content
            }
            slug
            title
        }
    }
`;