export const ABOUT_QUERY = `
    query AboutPage {
        page(filter: {slug: {eq: "about"}}) {
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
                id
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
                id
                callout {
                    heading {
                        value
                    }
                }
                articles {
                    articleAuthor
                    articleDisplayDate
                    featuredImage {
                        responsiveImage {
                        alt
                        height
                        width
                        src
                        }
                    }
                    title
                    slug
                    seo {
                        description
                        image {
                            url
                            video {
                                alt
                                blurUpThumb
                                blurhash
                                duration
                                framerate
                                mp4Url
                                thumbhash
                                title
                            }
                        }
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
                id
                content {
                value
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