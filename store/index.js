export const actions = {
    async nuxtServerInit({ commit, dispatch }, context) {
        const cartItems = this.$cookies.get('cart', { parseJSON: true });
        const wishlistItems = this.$cookies.get('wishlist', {
            parseJSON: true
        });
        const compareItems = this.$cookies.get('compare', { parseJSON: true });
        // const auth = context.$auth.$storage.getUniversal('_token.local');
        const currency = this.$cookies.get('currency', { parseJSON: true });
        if (cartItems && cartItems.cartItems.length > 0) {
            commit('cart/initCart', {
                cartItems: cartItems.cartItems,
                total: cartItems.total,
                amount: cartItems.amount
            });
            let query = [];
            cartItems.cartItems.forEach(item => {
                query.push(item.id);
            });
            await dispatch('product/getCartProducts', query);
        }
        if (wishlistItems) {
            commit('wishlist/initWishlist', {
                items: wishlistItems.items,
                total: wishlistItems.total
            });
        }
        if (compareItems) {
            commit('compare/initCompare', {
                items: compareItems.items,
                total: compareItems.total
            });
        }
        // if (auth) {
        //     const user = context.$auth.$storage.getUniversal('user')
        //     context.$auth.setUser(user)
        //     context.$auth.$storage.setUniversal('user', user)
        // }
        if (currency) {
            commit('app/setCurrency', currency.data);
        }
    },
    submitSellerRequest({ commit }, payload) {
        const reponse = this.$axios.post(`store-seller-request`, payload)
            .then(response => {
                if (response.data.status) {
                    const message = response.data.message
                    alert(message)
                  //  commit('setProducts', response.data);              
               }
               return response.data;
           })
            .catch(error => {
                const err = error.response.data.errors
                if (err && err.seller_email) {
                    alert(err.seller_email[0])
                }
           });
           return reponse;
       
    },
    register({ commit },payload) {
        return new Promise((resolve, reject) => {
        this.$axios
          .post(`register`, payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })    
    },
    async login({ commit }, payload) {
         const response= await this.$auth.loginWith('local', { data: payload })
                    this.$auth.setUser(response.data.data.userData)
                    this.$auth.$storage.setUniversal('user', response.data.data.userData)
                const redirect = this.$store.state.common.redirectUrl;
                if(!redirect) {
                    this.$router.push('/')
                }else {
                    this.$router.push(redirect)
                }
    },
    forgot({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios
                .post(`forgot-password`, payload)
                .then(response => {
                    resolve(response)
                })
                .catch(error => reject(error))
        })
    },
    reset({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios
                .post(`reset-password`, payload)
                .then(response => {
                    resolve(response)
                })
                .catch(error => reject(error))
        })
    },
    resendVerificationEmail({ commit }) {
        return new Promise((resolve, reject) => {
            this.$axios
                .post('email/verification-notification', { baseDomain: 'customer' }).then(response => {
                    resolve(response)
                })
                .catch(error => reject(error))
        })
    },
    logout({ commit }) {
            this.$auth.$storage.removeUniversal('user')
            this.$auth.logout()       
    },
    updateEmailVerification({ commit }, status) {
        let user = this.$auth.$storage.getUniversal('user');
        user.verifyKey = status
        this.$auth.$storage.setUniversal('user', user)
    }
    

  
};