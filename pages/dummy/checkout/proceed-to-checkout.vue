<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-section--shopping ps-whishlist">
            <div class="container">
                <div class="ps-section__content">
                    <div class="mb-5">
                        <h3>Proceed To Checkout</h3>
                    </div>
                    <div class="row">
                        <div
                            class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 "
                        >
                            <div class="table-responsive">
                                <table class="table ps-table--whishlist">
                                    <thead>
                                        <tr>
                                            <th width="97%">
                                                WHEN WOULD YOU LIKE TO DELIVER
                                                IT
                                            </th>
                                            <th width="3%">ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div
                                                    class="d-xl-flex d-lg-flex d-md-flex"
                                                >
                                                    <h3
                                                        class="ml-xl-5 ml-lg-5 ml-md-5"
                                                    >
                                                        Monday, 17 August 2021
                                                    </h3>
                                                    <span
                                                        class="ml-xl-5 ml-lg-5 ml-md-5"
                                                    >
                                                        <nuxt-link
                                                            to="#"
                                                            class="ps-btn ps-btn--fullwidth"
                                                        >
                                                            Why this wait?
                                                        </nuxt-link>
                                                    </span>
                                                </div>
                                                <div class="mt-5">
                                                    <v-radio-group
                                                        v-model="radios"
                                                    >
                                                        <v-radio
                                                            value="radio-1"
                                                            label="Standard Delivery (First Delivery Free)"
                                                        ></v-radio>
                                                    </v-radio-group>
                                                </div>
                                            </td>
                                            <td class="freeTag">
                                                <h3>Free</h3>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr />
                                <div>
                                    <p>
                                        Technlogy<br />B&O Play - Best Headphone
                                        For You<br />Apple AirPods Max. The best
                                        Apple headphones, money no object. ...
                                    </p>
                                </div>
                                <div
                                    class="ps-section__cart-actions backtoshop"
                                >
                                    <nuxt-link to="/shop" class="ps-btn">
                                        <i class="icon-arrow-left mr-2"></i>
                                        Back to Shop
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 "
                        >
                            <div class="ps-block--shopping-total">
                                <div class="ps-block__header">
                                    <p>Subtotal (2 items) <span>R 145</span></p>
                                </div>
                                <div class="ps-block__header">
                                    <p>Total Shipping <span>R 30.98</span></p>
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
                                    <h3>Total <span>R 175.98</span></h3>
                                </div>
                            </div>
                            <nuxt-link to="#" class="ps-btn ps-btn--fullwidth">
                                Proceed to checkout
                            </nuxt-link>
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
export default {
    name: 'Wishlist',
    components: {
        ProductShoppingCart,
        BreadCrumb
    },
    data: () => {
        return {
            radios: '',
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Wishlist'
                }
            ]
        };
    }
};
</script>

<style scoped>
.ps-table--whishlist tbody tr td {
    text-align: left !important;
}
.ps-table--whishlist thead tr th {
    text-align: left !important;
}
.freeTag {
    vertical-align: text-top !important;
}

@media (min-width: 769px) {
    .backtoshop {
        margin-top: 115px;
    }
}
@media (max-width: 768px) {
    .backtoshop {
        margin-bottom: 30px;
        width: 100% !important;
    }
    .ps-btn {
        display: block !important;
        width: 100% !important;
        text-align: center;
    }
}
@media (max-width: 991px) {
    .ps-table--whishlist tbody tr td:nth-child(2) {
        min-width: 10px !important;
    }
    .ps-table--whishlist thead tr th:nth-child(2) {
        min-width: 10px !important;
    }
}
</style>
