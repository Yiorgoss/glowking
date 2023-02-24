/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
    locales: ["en", "el", "pseudo"],
    sourceLocale: "en",
    pseudoLocale: "pseudo",
    fallbackLocales: {
        default: "en",
    },
    catalogs: [
        {
            path: "src/translations/locales/{locale}/messages",
            include: ["src/pages", "src/components/", "src/layouts"],
        },
    ],
    format: "po",
};
