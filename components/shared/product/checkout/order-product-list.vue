<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-section--shopping ps-whishlist">
            <div class="container">
                <div class="ps-section__content">
                    <div class="mb-5">
                        <h3>Order Product List</h3>
                    </div>
                    <div class="table-responsive">
                        <table class="table ps-table--whishlist">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Product Title</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Shipping</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>    
                                
                                 <tr  v-if='productList.products!="undefined"  && productList.products.length>0' v-for='item in productList.products'>
                                    <td>
                                        <img
                                            :src="item.images[0].url"
                                            width="120px"
                                            height="120px"
                                            alt=""
                                        />
                                    </td>
                                    <template></template>
                                 
                                    <td>{{item.title}}</td>
                                    <td>{{ item.price}}</td>
                                    <td>
                                        <figure>
                                            <div class="form-group--number">
                                                <button class="up" @click.prevent='handleIncreaseQuantity(getCartItems(item.id))'>
                                                    <i class="fa fa-plus"></i>
                                                </button>
                                                <button class="down" @click.prevent='handleDescreaseQuantity(getCartItems(item.id),item.local_qty)'>
                                                    <i class="fa fa-minus"></i>
                                                </button>
                                                <input
                                                    class="form-control numberInput"
                                                    type="text"
                                                    :min='0'
                                                    :placeholder="`${item.local_qty}`"
                                                    
                                                />
                                            </div>
                                        </figure>
                                    </td>
                                    <td>City Kabul,Afghanistan</td>
                                    <td>R {{ item.price *item.local_qty }}</td>
                                    <td>
                                        <span @click.prevent="removeCartItem(getCartItems(item.id))"><i class="icon-trash"></i></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import ProductShoppingCart from '~/components/elements/product/ProductShoppingCart';
import { mapState } from 'vuex';

export default {
    name: 'Wishlist',
    components: {
        ProductShoppingCart,
        BreadCrumb,
    },
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/',
                },
                {
                    text: 'Wishlist',
                },
            ],
        };
    },
    computed: {
        ...mapState({
            productList: (state) => state.product.orderProductList,
            cartItems: (state) => state.cart.cartItems,
        }),
    },
    methods: {
        handleIncreaseQuantity(item) {
            let payload = {
                productId: item.id,
                qty: 'up',
            };
        
            this.$store.dispatch('cart/increaseCartItemQuantity', item);
            this.$store.dispatch('product/updateCheckoutProduct', payload);
        },
        handleDescreaseQuantity(item,quantity) {
            let payload = {
                productId: item.id,
                qty: 'down',
            };
           
             if(quantity>1){
            this.$store.dispatch('product/updateCheckoutProduct', payload);

            this.$store.dispatch('cart/decreaseCartItemQuantity', item);
             }
        },
        getCartItems(id) {
            const cartItemsOnCookie = this.$cookies.get('cart', {
                parseJSON: true,
            });

            const existItem = cartItemsOnCookie.cartItems.find(
                (item) => item.id === id
            );

            return existItem;
        },
        removeCartItem(product) {
            this.$store.dispatch('product/removeProductFromCart', product);
            this.$store.dispatch('cart/removeProductFromCart', product);
        },
    },
};
</script>

<style scoped>
.ps-table--whishlist tbody tr td {
    text-align: center !important;
}
.ps-table--whishlist thead tr th {
    text-align: center !important;
}
.icon-trash {
    font-weight: bold;
    cursor: pointer;
}
.up:hover,
.down:hover {
    color: #fcb800;
}
.form-group--number {
    width: 120px;
}
.numberInput {
    border-radius: 0px;
}
</style>