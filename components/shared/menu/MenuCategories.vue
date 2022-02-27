<template lang="html">
    <ul class="menu--dropdown mr-lg-5 mr-md-5">
        <template v-for="item in menuCategories">
            <menu-dropdown v-if="item.subMenu" :menu-data="item" />
            <menu-mega v-else-if="item.mega" :menu-data="item" />
            <li v-else :key="item.text">
                <nuxt-link :to="`/category/product/${item.slug}`">
                    {{ item.text }}
                </nuxt-link>
            </li>
        </template>
    </ul>
</template>

<script>
import MenuDefault from '~/components/shared/menu/MenuDefault';
import MenuDropdown from '~/components/shared/menu/MenuDropdown';
import MenuMega from '~/components/shared/menu/MenuMega';
import { mapState } from 'vuex';

export default {
    name: 'MenuCategories',
    components: { MenuMega, MenuDropdown, MenuDefault },
    computed: {
        ...mapState({
            menuCategories: state => state.collection.menuCategories
        })
    },
    data() {
        return {
                };
    },

    async fetch() {
    }
};
</script>

<style scoped>
.menu--dropdown{
    border-right: 1px solid lightgray;
}
</style>
