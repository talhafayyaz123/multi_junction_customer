<template lang="html">
    <ul :class="className">
  
        <template v-for="(menu, index) in getItems">
            <li :key="index">
                <nuxt-link :to="(menu.value)">
                    {{ menu.label }}
                </nuxt-link>
            </li>
        </template> 
    </ul>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'MenuDefault',
    components: {  },
    props: {
        className: {
            type: String,
            default: 'menu'
        }
    },
    data() {
        return {
        };
    },
    computed: {
       ...mapState({
            Menus: state => state.collection.headerMenus

    }),
    getItems(){
      
        if(typeof this.Menus.header_menu !=='undefined'  || this.Menus.header_menu !=null )
        return JSON.parse(this.Menus.header_menu)
    }

    }
};
</script>

<style lang="scss" scoped></style>
