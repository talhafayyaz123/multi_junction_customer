<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-section--shopping ps-whishlist">
            <div class="container">
                <div v-if="$auth.loggedIn" class="unveriftyAlert">
                <email-verfication :alert="!isVerifiedEmail" />
                </div>
                <div class="ps-section__content">
                    <div class="mb-5">
                        <h3>Add To Cart</h3>
                    </div>
                    <div class="row">
                        <div
                            class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 "
                        >

                        
                            
                            <v-card class="productImageCard mt-5" 
                            v-if='productList.products!="undefined"  && productList.products.length>0' v-for='(item, index) in productList.products'
                            :key="index"
                            >
                                <div class="row">
                                    <div class="col-xl-12">
                                        <div class="row">
                                            <div
                                                class="col-xl-3 col-lg-3 col-md-3 col-4"
                                            >
                                                <div
                                                    class="imagesborder aspect-ratio-box"
                                                >
                                                    <img v-if='item.images[0]'
                                                       :src="item.images[0].url"
                                                        class="aspect-ratio"
                                                        alt="martfury"
                                                    />
                                                     <img v-else
                                                       src=""
                                                        class="aspect-ratio"
                                                        alt="martfury"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                class="col-xl-9 col-lg-9 col-md-9 col-8"
                                            >
                                                <div
                                                    class="d-lg-flex d-md-flex justify-content-lg-between justify-content-md-between"
                                                >
                                                    <div class="productInfo">
                                                        <p>
                                                          {{item.title}}
                                                        </p>
                                                        <p>
                                                            <b>In Stock</b>
                                                            <span
                                                                ><v-chip
                                                                    >CPT</v-chip
                                                                ></span
                                                            >
                                                            <span
                                                                ><v-chip
                                                                    >JHB</v-chip
                                                                ></span
                                                            >
                                                        </p>
                                                        <p> 
                                                            Market  Price : <del> 
                                                          {{ currency }}  {{ item.price }}</del><br>
                                                         Selling Price :{{ currency }} {{ item.selling_price }}

                                                            
                                                        </p>
                                                    </div>
                                                    <div class="priceQuantity">
                                                        <h4>Total: R {{ item.selling_price * item.local_qty}}</h4>
                                                        <label>Quantity</label>
                                                        <v-select v-if='item.is_dropdown'
                                                        :ref='item.product_vendor_id'
                                                            :items="item.qty_arr"
                                                            item-value="item.qty_arr"
                                                            label="Choose Quantity"
                                                            solo
                                                            class="mt-2"
                                                            dense 
                                                            @change="handleChangeQuantity(getCartItems(item.product_vendor_id),$event,item.local_qty)"
                                                        ></v-select>
                                                        
                                                           <div>
                                                          <input style='border-style: double;' :id='`update_item_qty_text_${item.product_vendor_id}`' :value='item.local_qty' @input="changeUI(item.product_vendor_id,$event)" v-if='item.is_quantity_box'   :max='item.qty' :ref='`add_qty_${item.product_vendor_id}`' type="number" placeholder='Add Quantity' />
                                                           <v-btn v-if='item.is_quantity_btn'  color="primary" @click='updateQuantity(getCartItems(item.product_vendor_id),item.local_qty,`add_qty_${item.product_vendor_id}`,`${item.qty}`)' depressed >Update</v-btn>
                                                             </div>
                                                           <br><br><br>
                                                        
                                                           
                                                        <div
                                                            class="productIcons"
                                                        >
                                                            <span  @click.prevent="removeCartItem(getCartItems(item.product_vendor_id))"
                                                                ><i
                                                                    class="icon-trash"
                                                                ></i>
                                                                Remove
                                                            </span>
                                                            <span>
                                                                <i
                                                                    class="ml-lg-2 ml-md-2 icon-heart"
                                                                ></i>
                                                                Add to Wishlist
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </v-card>
                        </div>
                        <div
                            class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 "
                        >
                            <div
                                class="ps-block--shopping-total proceedCheckout"
                            >
                                <div class="ps-block__header">
                                    <p>Subtotal (2 items) <span>R {{getSubTotalOrderPrice}}</span></p>
                                </div>
                                <div class="ps-block__header">
                                    <p>Total Shipping <span>R 30</span></p>
                                </div>
                                <div class="ps-block__header">
                                    <p>
                                        Secure Check out <br />Many ways to Pay
                                    </p>
                                    <p>
                                        <b>Delivery</b><br />Fast, Reliable
                                        Delivery
                                    </p>
                                </div>
                                <div class="ps-block__content">
                                    <h3>Total <span>R {{getSubTotalOrderPrice+30}}</span></h3>
                                </div>
                            </div>
                            <button @click.prevent='submit' class="ps-btn ps-btn--fullwidth">
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import ProductShoppingCart from '~/components/elements/product/ProductShoppingCart';
import EmailVerfication from '~/components/shared/alerts/EmailVerfication';

import { mapState } from 'vuex';

export default {
    name: 'Wishlist',
    components: {
        ProductShoppingCart,
        BreadCrumb,
        EmailVerfication,
    },
    data: () => {
        return {
            selected_item_qty: 0,
            is_update: false,
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
            auth: (state) => state.auth,
            currency: state => state.app.currency,

        }),
        getSubTotalOrderPrice() {
            if (
                this.productList.products !== 'undefined' ||
                this.productList.products != null
            ) {
                let products = this.productList.products;

                var total_price = 0;
                if (this.productList.products) {
                    products.forEach((item) => {
                        total_price += item.local_qty * item.selling_price;
                    });
                }

                return total_price;
            }
        },
        isVerifiedEmail() {
            if(this.$auth.$state.user) {
                return this.$auth.$state.user.verifyKey
            }
            return false;
        }
    },
    methods: {
        changeUI(id) {
            let payload = {
                productId: id,
                is_dropdown: 0,
                is_quantity_btn: 1,
                is_quantity_box: 1,
            };
            this.$store.dispatch('product/updateCheckoutProductUI', payload);
        },
        updateQuantity(item, local_qty, new_value, limit_qty) {
            var change_qty = this.$refs[new_value][0].value;
            if (parseInt(change_qty) <= parseInt(limit_qty)) {
                var final_increment = change_qty - local_qty;

                let payload = {
                    productId: item.id,
                    qty: 'up',
                    final_increment: final_increment,
                };

                item.final_increment = final_increment;

                this.$store.dispatch(
                    'cart/increaseCartCheckoutItemQuantity',
                    item
                );
                this.$store.dispatch('product/updateCheckoutProduct', payload);

                /////////////////////
                if (change_qty < 10) {
                    let data = {
                        productId: item.id,
                        is_dropdown: 1,
                        is_quantity_btn: 0,
                        is_quantity_box: 0,
                    };
                    this.$store.dispatch(
                        'product/updateCheckoutProductUI',
                        data
                    );
                } else {
                    let payloadUI = {
                        productId: item.id,
                        is_dropdown: 0,
                        is_quantity_btn: 0,
                        is_quantity_box: 1,
                    };
                    this.$store.dispatch(
                        'product/updateCheckoutProductUI',
                        payloadUI
                    );
                }

                //////////////////
            } else {
                let payloadUI = {
                    productId: item.id,
                    is_dropdown: 0,
                    is_quantity_btn: 0,
                    is_quantity_box: 1,
                };
                this.$store.dispatch(
                    'product/updateCheckoutProductUI',
                    payloadUI
                );
                this.$notify({
                group: 'addCartSuccess',
                title: 'Warning',
                text: `Quantity limit exceed from + ${{limit_qty}}`
            });
            }
        },

        handleChangeQuantity(item, change_qty, local_qty) {
            if (change_qty < 10) {
                if (change_qty > local_qty) {
                    var final_increment = change_qty - local_qty;

                    let payload = {
                        productId: item.id,
                        qty: 'up',
                        final_increment: final_increment,
                    };

                    item.final_increment = final_increment;

                    this.$store.dispatch(
                        'cart/increaseCartCheckoutItemQuantity',
                        item
                    );
                    this.$store.dispatch(
                        'product/updateCheckoutProduct',
                        payload
                    );
                }

                if (change_qty < local_qty) {
                    var final_decrement = local_qty - change_qty;
                    let payload = {
                        productId: item.id,
                        qty: 'down',
                        final_decrement: final_decrement,
                    };

                    if (local_qty > 0) {
                        this.$store.dispatch(
                            'product/updateCheckoutProduct',
                            payload
                        );
                        item.final_decrement = final_decrement;
                        this.$store.dispatch(
                            'cart/decreaseCartCheckoutItemQuantity',
                            item
                        );
                    }
                }
            } else {
                let payloadUI = {
                    productId: item.id,
                    is_dropdown: 0,
                    is_quantity_btn: 1,
                    is_quantity_box: 1,
                };
                this.$store.dispatch(
                    'product/updateCheckoutProductUI',
                    payloadUI
                );
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
        submit() {
            if ( this.$auth.loggedIn) {
                this.$store.dispatch('product/orderSave', this.productList);
            } else {
                this.$store.commit(
                    'common/setRedirectUrl',
                    this.$router.currentRoute.path
                );
                this.$router.push('/account/login');
            }
        },
    },
    mounted() {
        this.$nuxt.$on('my-custom-event', () => {
            this.productList.products.forEach((item) => {
                if (
                    this.$refs[item.product_vendor_id] !== 'undefined' &&
                    this.$refs[item.product_vendor_id] != null
                ) {
                    if (
                        this.$refs[item.product_vendor_id][0] !== 'undefined' &&
                        this.$refs[item.product_vendor_id][0] != null
                    ) {
                        this.$refs[item.product_vendor_id][0]['lazyValue'] = item.local_qty;
                    }
                }
            });
        });
    },
};
</script>

<style scoped>
.aspect-ratio-box {
    position: relative;
}
.aspect-ratio-box::after {
    display: block;
    content: '';
    /* 16:9 aspect ratio */
    padding-bottom: 100%;
}
.aspect-ratio {
    /* Image should match parent box size */
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.productImageCard {
    padding-top: 35px;
    padding-bottom: 35px;
    padding-left: 10px;
    padding-right: 10px;
}
@media (max-width: 766px) {
    .productInfo {
        margin-top: 20px;
    }
    .priceQuantity {
        position: relative;
    }
    .productIcons {
        position: absolute;
        top: 0px;
        right: 0px;
        display: flex;
        flex-direction: column-reverse;
    }
    .aspect-ratio {
        vertical-align: middle;
    }
}
@media (max-width: 768px) {
    .proceedCheckout {
        margin-top: 20px;
    }
}
</style>
