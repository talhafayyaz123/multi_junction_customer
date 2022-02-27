<template lang="html">
    <div class="ps-document" v-html="product.long_description">      
      
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'PartialDescription',
    
     computed: {
        ...mapState({
            product: state => state.product.product,
        })
    },
};
</script>

<style lang="scss" scoped></style>
