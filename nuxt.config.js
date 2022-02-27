export default {
    head: {
        titleTemplate: 'Martfury - Multi-purpose Ecomerce template with vuejs',
        title: 'Martfury - Multi-purpose Ecomerce template with vuejs',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Martfury - Multipurpose Marketplace Vuejs Ecommerce Template'
            }
        ],
        link: [
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;amp;subset=latin-ext'
            }
        ]
    },

    css: [
        'swiper/dist/css/swiper.css',
        '~/static/fonts/Linearicons/Font/demo-files/demo.css',
        '~/static/fonts/font-awesome/css/font-awesome.css',
        '~/static/css/bootstrap.min.css',
        '~/assets/scss/style.scss'
    ],

    plugins: [
        { src: '~plugins/vueliate.js', ssr: false },
        { src: '~/plugins/swiper-plugin.js', ssr: false },
        { src: '~/plugins/vue-notification.js', ssr: false },
        { src: '~/plugins/axios.js', ssr: false },
        { src: '~/plugins/lazyLoad.js', ssr: false },
        { src: '~/plugins/after-each.js', ssr: false },
        { src: '~/plugins/persistedState.client.js' },
        { src: '~/plugins/persistedState.js' }
    ],
    styleResources: {
        scss: './assets/scss/env.scss'
    },
    buildModules: [
        '@nuxtjs/vuetify',
        '@nuxtjs/style-resources',
        'cookie-universal-nuxt',
        '@nuxtjs/auth-next'

    ],
    modules: ['@nuxtjs/axios', 'nuxt-i18n'],
    publicRuntimeConfig: {
    axios: {
            baseURL: 'http://localhost/multijun/laravel-api/api'
    }
    },

    i18n: {
        locales: [
            { code: 'en', file: 'en.json' },
            { code: 'fr', file: 'fr.json' }
        ],
        lazy: true,
        defaultLocale: 'en',
        langDir: 'lang/locales/'
    },

    router: {
        linkActiveClass: '',
        linkExactActiveClass: 'active',
        //  middleware: ['authentication']
    },

    server: {
        port: 1122,
        host: 'localhost'
    },
    auth: {
    strategies: {
        local: {
        token: {
            property: 'data.accessToken',
            required: true,
            maxAge: 43200,
            type: 'Bearer',
            name: 'Authorization'
        },
        user: {
            property: 'user',
            autoFetch: false
        },
        endpoints: {
            login: { url: '/login', method: 'post' },
            logout: { url: '/logout', method: 'post' },
            refresh: { url: '/refresh', method: 'post' },

            },
        localStorage: {
            prefix: 'auth.'
            }
        }
        },
}
};
