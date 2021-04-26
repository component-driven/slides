import theme from '@component-driven/mdx-deck-theme';

export default {
    ...theme,
    googleFont: "https://www.monolisa.dev/api/fonts/preview",
    styles: {
        ...theme.styles,
        root: {
            ...theme.styles.root,
            fontSize: '16px', // Change the base font size for the website
            fontFeatureSettings: '"ss02" on',
            "code": {
                fontFeatureSettings: '"ss02" off',
            }
        },
    },
};
