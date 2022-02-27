
export const state = () => ({
  redirectUrl: null,
  isEmailVerified: true
});

export const actions = {
     register(payload) {
        return new Promise((resolve, reject) => {
        this.$axios
          .post(`register`, payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })    
    },
    forgot(payload) {
        return new Promise((resolve, reject) => {
        this.$axios
          .post(`forgot-password`, payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })    
    },
   reset(payload) {
        return new Promise((resolve, reject) => {
        this.$axios
          .post(`reset-password`, payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })    
    },
    setAuthStatus(payload) {
        commit('setIsLoggedIn', payload)
  },
    logout({ commit }) {
        commit('setIsLoggedIn', false)
        Cookies.remove('auth')
        Cookies.remove('accessToken')
        Cookies.remove('refreshToken')
        Cookies.remove('userData')
    }
};
export const mutations = {

  setRedirectUrl(state, payload) {
    state.redirectUrl = payload;
  },
  setIsEmailVerified(state, payload) {
    state.isEmailVerified = payload;
  },
};
export const getters = {

}
