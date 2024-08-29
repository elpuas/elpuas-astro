import { StructuredText } from '@datocms/astro/StructuredText';

export function renderArticleContent(content) {
    return content.map((block) => {
        switch (block._modelApiKey) {
        case 'block_paragraph':
            return <StructuredText key={block.id} data={block.content.value} />;
        default:
            return null; // Return null if the block type is not recognized
        }
    });
}