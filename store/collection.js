import Repository, {
    serializeQuery,
    baseUrl
} from '~/repositories/Repository.js';

export const state = () => ({
    collections: [],
    categories: null,
    queries: null,
    menuCategories: [],
    appearanceCategory: [],
    categoryProducts: {},
    headerMenus: {},
    footerContactInfo: {},
    footerWidgetOneLinks: {},
    footerWidgetTwoLinks: {},
    footerWidgetThreeLinks: {},
    footerSocialLinksWidget: {},
});

export const mutations = {
    setCollections(state, payload) {
        state.collections = payload;
    },

    setCategories(state, payload) {
        state.categories = payload;
    },
    setQueries(state, payload) {
        state.queries = payload;
    },
    setMenuCategories(state, payload) {
        state.menuCategories = payload;
    },
    setAppearanceCategory(state, payload) {
        state.appearanceCategory = payload;
    },
    setCategoryProducts(state, payload) {
        state.categoryProducts = payload;
    },
    setMegaMenuItems(state, payload) {
        state.headerMenus = payload;
    },
    setfooterContactInfo(state, payload) {
        state.footerContactInfo = payload;
    },
    setFooterWidgetOneLinks(state, payload) {
        state.footerWidgetOneLinks = payload;
    },
    setFooterWidgetTwoLinks(state, payload) {
        state.footerWidgetTwoLinks = payload;
    },
    setFooterWidgetThreeLinks(state, payload) {
        state.footerWidgetThreeLinks = payload;
    },
    footerSocialLinksWidget(state, payload) {
        state.footerSocialLinksWidget = payload;
    }


};

export const actions = {
    async getCollectionsBySlugs({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
        const reponse = await this.$axios.get(`collections?${query}`)
            .then(response => {
                commit('setCollections', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
    async getCategoriesBySlugs({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
        const reponse = await this.$axios.get(
            `product-categories?${query}`
        )
            .then(response => {
                commit('setCategories', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
    async getAppearanceCategory({ commit }) {
        const reponse = await this.$axios.get(
            `/apperance-category`
        )
            .then(response => {
                commit('setAppearanceCategory',  response.data.data.apperanceCategory);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
     async getMenuCategories({ commit }) {
        const reponse = await this.$axios.get(
            `customer-parent-categories`
        )
            .then(res => {
                const categories = res.data.data.categories
                commit('setCategories', categories)
                if (categories.length > 0) {
                    const list = categories.map(category => (
                        {
                            icon: 'icon-star',
                            text: category.name,
                            slug: category.slug,
                            url: '/shop'
                        }
                    ))
                    commit('setMenuCategories', list)
                }
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
     async getCategoryProducts({ commit }, slug) {
        const reponse = await this.$axios.get(
            `category-products/${slug}`
        )
            .then(response => {
                commit('setCategoryProducts', response.data.data.categoryProducts);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
      async getMegaMenuItems({ commit }) {
        const reponse = await this.$axios.get(
            `/customer/website/header`
        )
            .then(response => {
                  localStorage.setItem('url',`${this.$axios.defaults.baseURL}customer/website/header`);
                  localStorage.setItem('header_menu',response.data.data.settings.header_menu);
                commit('setMegaMenuItems',response.data.data.settings );
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
    async getfooterContactInfo({ commit }) {
        const reponse = await this.$axios.get(
            `customer/website/contact_info`
        )
            .then(response => {
                commit('setfooterContactInfo',response.data.data.settings );
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
    async getFooterWidgetOneLinks({ commit },module) {
        const reponse = await this.$axios.get(
            `customer/website/${module}`
        )
            .then(response => {
                if(module=='footer_link_widget_one'){
                    commit('setFooterWidgetOneLinks',response.data.data.settings );
                }

                if(module=='footer_link_widget_two'){
                    commit('setFooterWidgetTwoLinks',response.data.data.settings );
                }

                if(module=='footer_link_widget_three'){
                    commit('setFooterWidgetThreeLinks',response.data.data.settings );
                }

                if(module=='social_links_widget'){
                    commit('footerSocialLinksWidget',response.data.data.settings );
                }
                
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
};
