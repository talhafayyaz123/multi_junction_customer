<template lang="html">
    <header class="header header--mobile">
        <div class="header__top">
            <div class="header__left">
                <p>Welcome to Martfury Online Shopping Store !</p>
            </div>
            <div class="header__right">
                <ul class="navigation__extra">
                    <li>
                        <nuxt-link to="/dummy/apply-form">
                                Become a Vendor
                            </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/account/order-tracking">
                            Tract your order
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="navigation--mobile">
            <div class="navigation__left">
                <nuxt-link to="/" class="ps-logo">
                    <img v-bind:src="`${getLogo}`" alt="martfury" />
                </nuxt-link>
            </div>
            <mobile-header-actions />
        </div>
    </header>
</template>

<script>
import MobileHeaderActions from '~/components/shared/mobile/modules/MobileHeaderActions';
import { mapState } from 'vuex';

export default {
    name: 'HeaderMobile',
    components: { MobileHeaderActions },
     computed: {
      ...mapState({
            Menus: state => state.collection.headerMenus
    }),
    getLogo(){
        return (this.Menus.header_logo);
    }

    }
};
</script>

<style lang="scss" scoped></style>
