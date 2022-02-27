<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" />
            
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
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Verify Email'
                }
            ]
        };
    },
    async fetch() {
            const url = `/email/verify/${this.$route.params.id}/${this.$route.params.hash}?expires=${this.$route.query.expires}&signature=${this.$route.query.signature}`
        this.$axios
          .post(url)
          .then(response => {
           if (response.data.status) {
               //update email verification
               this.$store.dispatch('updateEmailVerification', true)

               this.$notify({
                        group: 'addCartSuccess',
                        title: 'Success!',
                        text: 'Email Verified Successfully!',
                    });
                // this.$router.push('/account/login');
           } else {
               this.$notify({
                        group: 'addCartSuccess',
                        title: 'Success!',
                        text: 'something going wrong please resend email!',
                    });
            //   this.$router.push('/email/verify');

           }
          })
          .catch(() => {
              this.$notify({
                    group: 'addCartSuccess',
                    title: 'Message',
                    text: 'something going wrong please resend email'
                });
          })
    }
};
</script>

<style lang="scss" scoped></style>
