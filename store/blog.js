import data from '~/static/data/blog-grid.json';

export const state = () => ({
    blog: data,
    categories: null,
    categoryBlogs:{}
});

export const getters = {
    getAllPosts: state => state.blog,
    getNewestPost: state => state.blog.slice(0, 5),
    getBlogs: (state) => state.categoryBlogs
};

export const mutations = {
    setCategories(state, payload) {
        state.categories = payload;
    },
    setCategoryBlogs(state, payload) {
        state.categoryBlogs = payload;
    },

};

export const actions = {

    async getCategoryBlogs({ commit }, payload) {
        const reponse = await this.$axios.get(`Customer/Cblogs/${payload}`)
            .then(response => {
               commit('setCategoryBlogs', response.data.data)
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

};
