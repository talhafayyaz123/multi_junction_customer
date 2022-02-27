<template lang="html">
    <div v-if="$auth.loggedIn" class="ps-block--user-account">
        <div class="ps-block__left">
            <v-avatar v-if="$auth.user && $auth.user.avatar">
            <img :src="$auth.user.avatar" />
            </v-avatar>
            <i  v-else class="icon-user"></i>
             <b>
                 {{ userName }}
             </b>
        </div>
        <div class="ps-block__content">
            <ul class="ps-list--arrow">
                <li v-for="link in accountLinks" :key="link.text">
                    <nuxt-link :to="link.url">
                        {{ link.text }}
                    </nuxt-link>
                </li>
                <li class="ps-block__footer">
                    <a href="#" @click.prevent="handleLogout">
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div v-else class="ps-block--user-header">
        <div class="ps-block__left">
            <i class="icon-user"></i>
        </div>
        <div class="ps-block__right">
            <nuxt-link to="/account/login">
                {{ $t('header.login') }}
            </nuxt-link>
            <nuxt-link to="/account/register">
                {{ $t('header.register') }}
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'HeaderUserArea',
    computed: {
        ...mapState({
            isLoggedIn: state => state.auth.isLoggedIn
        })
    },
    data() {
        return {
            accountLinks: [
                {
                    text: 'Account Information',
                    url: '/account/user-information'
                },
                {
                    text: 'Notifications',
                    url: '/account/notifications'
                },
                {
                    text: 'Invoices',
                    url: '/account/invoices'
                },
                {
                    text: 'Address',
                    url: '/account/addresses'
                },
                {
                    text: 'Recent Viewed Product',
                    url: '/account/recent-viewed-product'
                },
                {
                    text: 'Wishlist',
                    url: '/account/wishlist'
                }
            ]
        };
    },
    computed: {
        userName() {
            if (this.$auth.user) {
                const name = this.$auth.user.username;
                return name.split(' ')[0];
            }
            return '';
        }
    },
    methods: {
        handleLogout() {
            this.$store.dispatch('logout');
        }
    }
};
</script>

<style lang="scss" scoped></style>
