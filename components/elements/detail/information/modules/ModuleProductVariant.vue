<template lang="html">
    <div>
        <div v-for="(attribute, index) in attributes" :key="index">
            <div v-if="attribute.title.toLowerCase() == 'colors'" class="p-2">
                <h4>{{ attribute.title }}</h4>
                <v-select
                    :items="attribute.tags"
                    :label="`Select ${attribute.title}`"
                    item-value="color"
                    item-text="color"
                    @input="attributeChange(attribute.title, $event)"
                >
                </v-select>
                <!-- <h6> {{ attribute.title }} </h6> -->
                <div class="row m-2">
                    <div
                        v-for="(tag, tagIndex) in attribute.tags"
                        :key="`image-${tagIndex}`"
                        class="col-xl-2 col-lg-2 col-md-2 col-sm-4"
                    >
                        <div class="detailImg">
                            <img
                                class="cursor"
                                :class="
                                    loader ? 'withopacity' : 'withoutopacity'
                                "
                                :src="tag.image"
                                width="100%"
                                alt="Image"
                                @click="
                                    attributeChange(attribute.title, tag.color)
                                "
                            />
                            <v-progress-circular
                                v-if="loader"
                                indeterminate
                                :size="35"
                                color="warning"
                                class="loader"
                            ></v-progress-circular>
                        </div>
                    </div>
                </div>
                <br />
            </div>
            <div v-if="attribute.title.toLowerCase() == 'size'">
                <h4>{{ attribute.title }}</h4>
                <div class="row ma-2">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <p>
                            Select a size : <strong>{{ activeSize }}</strong>
                        </p>

                        <button
                            v-for="(tag, tagIndex) in attribute.tags"
                            :key="`size-${tagIndex}`"
                            class="btn border-primary btn-lg m-1"
                            :ref="`size-btn${tagIndex}`"
                            @click="
                                sizeChange(
                                    `size-btn${tagIndex}`,
                                    attribute.title,
                                    tag
                                )
                            "
                        >
                            {{ tag }}
                        </button>
                        <!-- class="btn border-primary btn-primary btn-lg m-1" -->
                        <!-- <button class="btn border-primary btn-lg">UK 7</button> -->
                    </div>
                </div>
            </div>
            <div
                v-if="
                    attribute.title.toLowerCase() !== 'colors' &&
                        attribute.title.toLowerCase() !== 'size'
                "
                class="p-2"
            >
                <h4>{{ attribute.title }}</h4>
                <v-select
                    :items="attribute.tags"
                    :label="`Select ${attribute.title}`"
                    @input="attributeChange(attribute.title, $event)"
                >
                </v-select>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'ModuleProductShopping',
    props: {
        product: {
            type: Object,
            default: () => {}
        }
    },
    created() {
        this.variants = this.$store.state.product.productVariants;
    },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            attributes: state => state.product.productVariantAttributes
        })
    },
    data() {
        return {
            quantity: 1,
            activeSize: '',
            searchAttribute: new Map(),
            variants: [],
            isColored: false,
            loader: false
        };
    },
    methods: {
        attributeChange(key, val) {
            this.searchAttribute.set(key, val);
            let condition = [];
            for (const [key, value] of this.searchAttribute) {
                condition.push({ key, value });
                //    this.isColored = true
                console.log(key + ' = ' + val);
            }

            const payload = {
                plid: this.$route.params.id,
                condition
            };
            const isColored = condition.find(
                c => c.key.toLowerCase() == 'colors'
            );
            const isSized = condition.find(c => c.key.toLowerCase() == 'size');
            if (isColored && isSized) {
                this.loader = true;
                this.$store
                    .dispatch('product/getProductVariants', payload)
                    .then(response => {
                        this.loader = false;
                    })
                    .catch(() => {
                        this.loader = false;
                    });
            }
        },
        sizeChange(size, attributeKey, value) {
            this.activeSize = value;
            Object.keys(this.$refs).forEach(key => {
                if (key !== size && key.includes('size-btn')) {
                    this.$refs[key][0].classList.remove(['btn-primary']);
                }
            });
            if (this.$refs.hasOwnProperty(size)) {
                this.$refs[size][0].classList.toggle(['btn-primary']);
            }
            this.attributeChange(attributeKey, value);
        },
        handleIncreaseQuantity() {
            this.quantity++;
        },
        handleDescreaseQuantity() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        },

        handleAddToCart(isBuyNow) {
            const cartItemsOnCookie = this.$cookies.get('cart', {
                parseJSON: true
            });
            let existItem;
            if (cartItemsOnCookie) {
                existItem = cartItemsOnCookie.cartItems.find(
                    item => item.id === this.product.id
                );
            }

            let item = {
                id: this.product.id,
                quantity: this.quantity,
                price: this.product.price
            };
            if (existItem !== undefined) {
                if (this.quantity + existItem.quantity > 10) {
                    this.$notify({
                        group: 'addCartSuccess',
                        title: 'Waring!',
                        text: `Can't add more than 10 items`
                    });
                    if (isBuyNow && isBuyNow === true) {
                        setTimeout(
                            function() {
                                this.$router.push('/account/checkout');
                            }.bind(this),
                            500
                        );
                    }
                } else {
                    this.addItemToCart(item);
                }
            } else {
                this.addItemToCart(item);
            }
        },

        addItemToCart(payload) {
            this.$store.dispatch('cart/addProductToCart', payload);
            this.getCartProduct(this.cartItems);
            this.$notify({
                group: 'addCartSuccess',
                title: 'Success!',
                text: `${this.product.title} has been added to your cart!`
            });
        },

        async getCartProduct(products) {
            let listOfIds = [];
            products.forEach(item => {
                listOfIds.push(item.id);
            });
            await this.$store.dispatch('product/getCartProducts', listOfIds);
        },

        async loadCartProducts() {
            const cartItemsOnCookie = this.$cookies.get('cart', {
                parseJSON: true
            });
            let queries = [];
            cartItemsOnCookie.cartItems.forEach(item => {
                queries.push(item.id);
            });
            if (this.cartItems.length > 0) {
                await this.$store.dispatch('product/getCartProducts', queries);
            } else {
                this.$store.commit('product/setCartProducts', null);
            }
        }
    }
};
</script>

<style scoped>
.cursor {
    cursor: pointer;
}
.detailImg {
    position: relative;
}
.withopacity {
    opacity: 0.3;
}
.withoutopacity {
    opacity: 0.9;
}
.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
