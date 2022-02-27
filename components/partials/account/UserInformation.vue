<template lang="html">
    <section class="ps-my-account ps-page--account">
        <div class="container">
            <div v-if="$auth.loggedIn" class="unveriftyAlert">
                <email-verfication :alert="!isVerifiedEmail" />
            </div>
            
            <div class="row">
                <div class="col-lg-4">
                    <div class="ps-section__left">
                        <aside class="ps-widget--account-dashboard">
                            <div class="ps-widget__header">
                                <!-- <img src="/img/users/3.jpg" /> -->
                               <!-- <div v-if="$auth.loggedIn && $auth.user"> -->
                                    <img :src="$auth.user.avatar" />
                                    <!-- <i  v-else class="icon-user"></i> -->
                                <figure>
                                        <figcaption> 
                                            {{ $auth.user.fullName }}
                                        </figcaption>
                                    <p>
                                            {{ $auth.user.email }}
                                    </p>
                                </figure>
                            <!-- </div> -->
                            </div>
                            <div class="ps-widget__content">
                                <AccountLinks :links="accountLinks" />
                            </div>
                        </aside>
                    </div>
                </div>
                <div class="col-lg-8">
                    <section class="ps-section--account-setting">
                        <div class="ps-section__content">
                            <p>No product here.</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AccountLinks from './modules/AccountLinks';
import EmailVerfication from '~/components/shared/alerts/EmailVerfication';

export default {
    name: 'UserInformation',
    components: { AccountLinks, EmailVerfication },
    computed: {
        isVerifiedEmail() {
            if(this.$auth.$state.user) {
                return this.$auth.$state.user.verifyKey
            }
            return false;
        }
    },
    data() {
        return {
            accountLinks: [
                {
                    text: 'Account Information',
                    url: '/account/user-information',
                    icon: 'icon-user'
                },
                {
                    text: 'Notifications',
                    url: '/account/notifications',
                    icon: 'icon-alarm-ringing'
                },
                {
                    text: 'Invoices',
                    url: '/account/invoices',
                    icon: 'icon-papers'
                },
                {
                    text: 'Address',
                    url: '/account/addresses',
                    icon: 'icon-map-marker'
                },
                {
                    text: 'Recent Viewed Product',
                    url: '/account/recent-viewed-product',
                    icon: 'icon-store',
                    active: true
                },
                {
                    text: 'Wishlist',
                    url: '/account/wishlist',
                    icon: 'icon-heart'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
