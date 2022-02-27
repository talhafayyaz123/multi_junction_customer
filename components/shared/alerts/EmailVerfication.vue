<template>
  <div>
    <v-alert
      v-model="alert"
      dismissible
      color="error"
      border="left"
      elevation="2"
      colored-border
      :dense="true"
      @input="isVerified"
    >
      Your Email is not <strong>Verified</strong> 
      <v-btn
         :loading="isDisabled"
         x-small
         color="error"
        @click.prevent="resend"
      >
        Resend Email
      </v-btn>
    </v-alert>
    

    <!-- <div class="text-center">
      <v-btn
        v-if="!alert"
        dark
        @click="alert = true"
      >
        Reset Alert
      </v-btn>
    </div> -->
  </div>
</template>
<script>
export default {
    props: {
        alert: {
            type: Boolean,
            default: false,
        },
    },
    data() {
      return {
        isDisabled: false
      }
    },
    methods:{
      resend() {
        this.isDisabled = true
        this.$store.dispatch('resendVerificationEmail').then(response=> {
                    this.$notify({
                        group: 'addCartSuccess',
                        title: 'Success!',
                        text: response.data.message,
                    });
                        this.isDisabled = false
        }).catch(() => {
          this.isDisabled = false
        })
      },
      isVerified() {
        this.$axios.get('/customer/email-is-verified').then(response => {
          this.$store.dispatch('updateEmailVerification', response.data.data.isVerified)

        })
      }
    }
}
</script>