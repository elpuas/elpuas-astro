/**
 * Query to fetch the what-i-do page content.
 */
export const WHAT_QUERY = `
    query WhatPage {
        page(filter: {slug: {eq: "what-i-do"}}) {
            id
            title
            content {
            ... on BlockGalleryRecord {
                galleryStyle
                _modelApiKey
                images {
                responsiveImage {
                    alt
                    src
                    height
                    width
                }
                }
            }
            ... on BlockImageRecord {
                image {
                    responsiveImage {
                        alt
                        height
                        width
                    }
                }
                _modelApiKey
                alignment
            }
            ... on BlockSelectedArticlesHeroRecord {
                callout {
                    content {
                        value
                    }
                    heading {
                        value
                    }
                    link {
                        ... on PageRecord {
                        slug
                        }
                    }
                }
                articles {
                    title
                    slug
                    featuredImage {
                        responsiveImage {
                        src
                        width
                        height
                        }
                    }
                    categories {
                        title
                    }
                }
                _modelApiKey
            }
            ... on BlockParagraphRecord {
                id
                content {
                value
                }
            }
            ... on BlockTextAndImageRecord {
                content {
                value
                }
                image {
                responsiveImage {
                    alt
                    src
                    height
                    width
                }
                }
                _modelApiKey
            }
            ... on ExternalUrlRecord {
                id
                _modelApiKey
                link
            }
            ... on BlockVideoHeroRecord {
                id
                _modelApiKey
                videoUrl
                callout {
                heading {
                    value
                }
                content {
                    value
                }
                }
            }
            ... on BlockHeroContentRecord {
                id
                eyebrow
                heading {
                value
                }
                _modelApiKey
            }
            }
            _seoMetaTags {
            content
            attributes
            }
        }
    }
`;