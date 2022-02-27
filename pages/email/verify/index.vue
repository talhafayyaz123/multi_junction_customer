<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-section--custom">
            <div class="container">
                <div class="ps-section__header">
                    <h1>Verify Email</h1>
                </div>
                <div class="ps-section__content">
                    <p
                     v-if="$auth.loggedIn "
                    >
                       <div class="form-group submit">
                        <v-btn
                           v-if="$auth.user && !$auth.user.verifyKey"
                            class="ps-btn ps-btn--fullwidth"
                            @click="resendVerificationEmail"
                            :loading="isDisabled"
                            color="warning"
                        >
                            Resend Email
                        </v-btn>
            </div>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';

export default {
    components: {
        BreadCrumb
    },
    transition: 'zoom',
    data: () => {
        return {
            isDisabled: false,
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Resend Email'
                }
            ]
        };
    },
    methods: {
        resendVerificationEmail() {
            this.isDisabled = true
            // eslint-disable-next-line no-unused-vars
           this.$axios.post('email/verification-notification').then(response => {
                this.isDisabled = false
                this.$notify({
                    group: 'addCartSuccess',
                    title: 'Message',
                    text: response.data.message
                });
      })
        .catch(() => {
          this.isDisabled = false
        })
        .then(() => {
          this.isDisabled = false
        })
    },
    },
};
</script>

<style lang="scss" scoped></style>
