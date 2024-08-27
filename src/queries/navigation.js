// Define your GraphQL queries as constants
export const NAVIGATION_QUERY = `
    query Navigation {
        navigation {
            menu {
                ... on PageRecord {
                    slug
                    title
                }
                ... on FrontPageRecord {
                    title
                    slug
                }
            } 
        }
    }
`;