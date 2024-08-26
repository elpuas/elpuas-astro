/**
 * Fetches data from a GraphQL API.
 * 
 * @param {string} query - The GraphQL query to be executed.
 * @param {Object} variables - The variables to be passed to the GraphQL query.
 * @returns {Promise<Object|null>} - A promise that resolves to the fetched data or null if an error occurs.
 */
export async function fetchGraphQL(query, variables = {}) {
    try {
        const response = await fetch('https://graphql.datocms.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.DATOCMS_API_KEY}`,
        },
        body: JSON.stringify({
            query,
            variables,
        }),
        });

        const result = await response.json();

        if (!response.ok) {
        throw new Error(`Error: ${result.errors ? result.errors[0].message : 'Failed to fetch data'}`);
        }

        return result.data;

    } catch (error) {
        console.error('Error fetching GraphQL data:', error);
        return null;
    }
}