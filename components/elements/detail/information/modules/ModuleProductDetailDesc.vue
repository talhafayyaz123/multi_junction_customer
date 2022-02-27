<template lang="html">
    <div class="ps-product__desc">
        <p>
            Sold By:
            <nuxt-link to="/shop">
                <!-- <strong> {{ product.vendor }}</strong> -->
                {{product.seller_company_name}}
            </nuxt-link>
        </p>
        <ul class="ps-list--dot">
           <div v-html="product.short_description">
        </div>
            
        </ul>
    </div>
</template>

<script>

export default {
    name: 'ModuleProductDetailDesc',
    props: {
        product: {
            type: Object,
            default: {}
        }
    }
};
</script>

<style lang="scss" scoped></style>
