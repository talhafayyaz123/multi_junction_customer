import Vue from 'vue'

export default function ({ $axios, redirect, store }) {
    $axios.onError(error => {

         const code = parseInt(error.response && error.response.status)
            if (code === 401) {
                if (store.state.auth.user) {
                    this.$notify({
                        group: 'addCartSuccess',
                        title: 'Message',
                        text: 'Your Token is expire please login again!'
                    });
                    store.dispatch('logout')
                }
        }
        // console.log(error.response.data)
    
  })
}