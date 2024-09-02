export const FRONTPAGE_QUERY = `
    query Homepage {
        frontPage {
            content {
                ... on BlockHeroContentRecord {
                    _modelApiKey
                    eyebrow
                    heading {
                        value
                    }
                    link {
                        ... on PageRecord {
                            slug
                        }
                    }
                    heroAlign
                }
                ... on BlockVideoHeroRecord {
                    id
                    callout {
                        content {
                            value
                        }
                        heading {
                            value
                        }
                    }
                    videoUrl
                    _modelApiKey
                }
                ... on BlockSelectedArticlesHeroRecord {
                    id
                    callout {
                        content {
                            value
                        }
                        heading {
                            value
                        }
                        link {
                            ... on PageRecord {
                            id
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
            }
        }
    }
`;