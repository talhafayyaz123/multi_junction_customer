<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-section--shopping ps-whishlist">
            <div class="container">
                <v-card class="card p-5">
                    <ul class="menu--dropdown">
                        <li>
                            <nuxt-link to="/dummy/checkout/addresses">
                                Addresses
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/dummy/checkout/items-for-delivery">
                                Item For Delivery
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/dummy/checkout/payment-method">
                                Payment Method
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/dummy/checkout/proceed-to-checkout">
                                Proceed To Checkout
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/dummy/checkout/recipient-form">
                                Recipient Form
                            </nuxt-link>
                        </li>
                        <!-- <li>
                            <nuxt-link to="">
                                Home Banner
                            </nuxt-link>
                        </li> -->
                        <li>
                            <nuxt-link to="/dummy/apply-form">
                                Apply Form
                            </nuxt-link>
                        </li>
                    </ul>
                </v-card>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
