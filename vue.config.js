module.exports = {
    pwa: {
        name: "Piped",
        themeColor: "#fa4b4b",
        msTileColor: "#000000",
        appleMobileWebAppCapable: "yes",
        appleMobileWebAppStatusBarStyle: "black",
        workboxPluginMode: "GenerateSW",
        workboxOptions: {
            navigateFallback: "index.html",
            skipWaiting: true,
            runtimeCaching: [
                {
                    urlPattern: /\.(?:png|svg|ico)$/,
                    handler: "CacheFirst",
                },
            ],
        },
    },
    pluginOptions: {
        i18n: {
            locale: "en",
            localeDir: "locales",
            fullInstall: true,
        },
    },
    css: {
        loaderOptions: {
            postcss: {
                postcssOptions: {
                    plugins: [
                        require("@fullhuman/postcss-purgecss")({
                            content: [`./public/**/*.html`, `./src/**/*.vue`],
                            defaultExtractor(content) {
                                const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, "");
                                return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
                            },
                            safelist: [
                                /-(leave|enter|appear)(|-(to|from|active))$/,
                                /^(?!(|.*?:)cursor-move).+-move$/,
                                /^router-link(|-exact)-active$/,
                                /data-v-.*/,
                            ],
                        }),
                    ],
                },
            },
        },
    },
};
