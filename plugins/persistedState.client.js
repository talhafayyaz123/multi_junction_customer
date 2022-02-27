import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
    createPersistedState({
        key: 'abcdefghtijklmonopqrstuvwxyz0123456789',
        paths: ['auth','collection']
  })(store)
}