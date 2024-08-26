export const FRONTPAGE_QUERY = `
    query Homepage {
        frontPage {
            slug
            id
            content {
                ... on BlockHeroContentRecord {
                    id
                    eyebrow
                    heading {
                    value
                    }
                    heroAlign
                }
            }
        }
    }
`;