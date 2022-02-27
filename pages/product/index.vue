<template lang="html">
    <section class="ps-page">
        <section class="ps-items-listing">
           
            <div class="ps-section__header">
                <order-product-list />
            </div>
        
            </div>
        </section>
    </section>
</template>

<script>
import OrderProductList from "~/components/shared/product/checkout/add-to-cart";

export default {
    components: { OrderProductList},
  async  created(){
         const cartItemsOnCookie = this.$cookies.get('cart', {
                parseJSON: true
            });
            
               let listOfIds = [];
               cartItemsOnCookie.cartItems.forEach(item => {
               listOfIds.push(item.id);
            });
            await this.$store.dispatch('product/getCheckoutProducts', listOfIds);
    }
};

</script>

<style lang="scss" scoped></style>
