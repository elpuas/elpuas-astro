/**
 * Query to fetch the navigation menu.
 */
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