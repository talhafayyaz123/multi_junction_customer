<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-section--shopping ps-whishlist">
            <div class="container">
                <div class="ps-section__content">
                    <div class="mb-5">
                        <h3>Payment Method</h3>
                    </div>
                    <div class="row">
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                        >
                            <div class="table-responsive">
                                <table class="table ps-table--whishlist">
                                    <thead>
                                        <tr>
                                            <th width="90%">
                                                HOW WOULD YOU LIKE TO PAY
                                            </th>
                                            <th width="10%">INFO</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="d-flex">
                                                    <div>
                                                        <v-radio-group
                                                            v-model="radios"
                                                        >
                                                            <v-radio
                                                                value="radio-1"
                                                            ></v-radio>
                                                        </v-radio-group>
                                                    </div>
                                                    <div class="ml-lg-6 ml-md-6">
                                                        <h5>EFT</h5>
                                                        <p>
                                                            Dummy Text for Bank
                                                            Payment Method
                                                        </p>
                                                        <div>
                                                            <nuxt-link
                                                                to="/page/blank"
                                                            >
                                                                <a>
                                                                    <img
                                                                        src="~/static/img/payment-method/1.jpg"
                                                                        alt="martfury"
                                                                    />
                                                                </a>
                                                            </nuxt-link>
                                                            <nuxt-link
                                                                to="/page/blank"
                                                            >
                                                                <a>
                                                                    <img
                                                                        src="~/static/img/payment-method/2.jpg"
                                                                        alt="martfury"
                                                                    />
                                                                </a>
                                                            </nuxt-link>
                                                            <nuxt-link
                                                                to="/page/blank"
                                                            >
                                                                <a>
                                                                    <img
                                                                        src="~/static/img/payment-method/3.jpg"
                                                                        alt="martfury"
                                                                    />
                                                                </a>
                                                            </nuxt-link>
                                                            <nuxt-link
                                                                to="/page/blank"
                                                            >
                                                                <a>
                                                                    <img
                                                                        src="~/static/img/payment-method/4.jpg"
                                                                        alt="martfury"
                                                                    />
                                                                </a>
                                                            </nuxt-link>
                                                            <nuxt-link
                                                                to="/page/blank"
                                                            >
                                                                <a>
                                                                    <img
                                                                        src="~/static/img/payment-method/5.jpg"
                                                                        alt="martfury"
                                                                    />
                                                                </a>
                                                            </nuxt-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>Info</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex">
                                                    <div>
                                                        <v-radio-group
                                                            v-model="radios"
                                                        >
                                                            <v-radio
                                                                value="radio-2"
                                                            ></v-radio>
                                                        </v-radio-group>
                                                    </div>
                                                    <div class="ml-lg-6 ml-md-6">
                                                        <h5>DEBIT</h5>
                                                        <p>
                                                            Dummy Text for Bank
                                                            Payment Method
                                                        </p>
                                                        <div>
                                                            <nuxt-link
                                                                to="/page/blank"
                                                            >
                                                                <a>
                                                                    <img
                                                                        src="~/static/img/payment-method/1.jpg"
                                                                        alt="martfury"
                                                                    />
                                                                </a>
                                                            </nuxt-link>
                                                            <nuxt-link
                                                                to="/page/blank"
                                                            >
                                                                <a>
                                                                    <img
                                                                        src="~/static/img/payment-method/2.jpg"
                                                                        alt="martfury"
                                                                    />
                                                                </a>
                                                            </nuxt-link>
                                                            <nuxt-link
                                                                to="/page/blank"
                                                            >
                                                                <a>
                                                                    <img
                                                                        src="~/static/img/payment-method/3.jpg"
                                                                        alt="martfury"
                                                                    />
                                                                </a>
                                                            </nuxt-link>
                                                            <nuxt-link
                                                                to="/page/blank"
                                                            >
                                                                <a>
                                                                    <img
                                                                        src="~/static/img/payment-method/4.jpg"
                                                                        alt="martfury"
                                                                    />
                                                                </a>
                                                            </nuxt-link>
                                                            <nuxt-link
                                                                to="/page/blank"
                                                            >
                                                                <a>
                                                                    <img
                                                                        src="~/static/img/payment-method/5.jpg"
                                                                        alt="martfury"
                                                                    />
                                                                </a>
                                                            </nuxt-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>Info</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex">
                                                    <div>
                                                        <v-radio-group
                                                            v-model="radios"
                                                        >
                                                            <v-radio
                                                                value="radio-3"
                                                            ></v-radio>
                                                        </v-radio-group>
                                                    </div>
                                                    <div class="ml-lg-6 ml-md-6">
                                                        <h5>MASTER</h5>
                                                        <p>
                                                            Dummy Text for Bank
                                                            Payment Method
                                                        </p>
                                                        <div>
                                                            <nuxt-link
                                                                to="/page/blank"
                                                            >
                                                                <a>
                                                                    <img
                                                                        src="~/static/img/payment-method/1.jpg"
                                                                        alt="martfury"
                                                                    />
                                                                </a>
                                                            </nuxt-link>
                                                            <nuxt-link
                                                                to="/page/blank"
                                                            >
                                                                <a>
                                                                    <img
                                                                        src="~/static/img/payment-method/2.jpg"
                                                                        alt="martfury"
                                                                    />
                                                                </a>
                                                            </nuxt-link>
                                                            <nuxt-link
                                                                to="/page/blank"
                                                            >
                                                                <a>
                                                                    <img
                                                                        src="~/static/img/payment-method/3.jpg"
                                                                        alt="martfury"
                                                                    />
                                                                </a>
                                                            </nuxt-link>
                                                            <nuxt-link
                                                                to="/page/blank"
                                                            >
                                                                <a>
                                                                    <img
                                                                        src="~/static/img/payment-method/4.jpg"
                                                                        alt="martfury"
                                                                    />
                                                                </a>
                                                            </nuxt-link>
                                                            <nuxt-link
                                                                to="/page/blank"
                                                            >
                                                                <a>
                                                                    <img
                                                                        src="~/static/img/payment-method/5.jpg"
                                                                        alt="martfury"
                                                                    />
                                                                </a>
                                                            </nuxt-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>Info</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex">
                                                    <div>
                                                        <v-radio-group
                                                            v-model="radios"
                                                        >
                                                            <v-radio
                                                                value="4"
                                                            ></v-radio>
                                                        </v-radio-group>
                                                    </div>
                                                    <div class="ml-lg-6 ml-md-6">
                                                        <h5>VISA</h5>
                                                        <p>
                                                            Dummy Text for Bank
                                                            Payment Method
                                                        </p>
                                                        <div>
                                                            <nuxt-link
                                                                to="/page/blank"
                                                            >
                                                                <a>
                                                                    <img
                                                                        src="~/static/img/payment-method/1.jpg"
                                                                        alt="martfury"
                                                                    />
                                                                </a>
                                                            </nuxt-link>
                                                            <nuxt-link
                                                                to="/page/blank"
                                                            >
                                                                <a>
                                                                    <img
                                                                        src="~/static/img/payment-method/2.jpg"
                                                                        alt="martfury"
                                                                    />
                                                                </a>
                                                            </nuxt-link>
                                                            <nuxt-link
                                                                to="/page/blank"
                                                            >
                                                                <a>
                                                                    <img
                                                                        src="~/static/img/payment-method/3.jpg"
                                                                        alt="martfury"
                                                                    />
                                                                </a>
                                                            </nuxt-link>
                                                            <nuxt-link
                                                                to="/page/blank"
                                                            >
                                                                <a>
                                                                    <img
                                                                        src="~/static/img/payment-method/4.jpg"
                                                                        alt="martfury"
                                                                    />
                                                                </a>
                                                            </nuxt-link>
                                                            <nuxt-link
                                                                to="/page/blank"
                                                            >
                                                                <a>
                                                                    <img
                                                                        src="~/static/img/payment-method/5.jpg"
                                                                        alt="martfury"
                                                                    />
                                                                </a>
                                                            </nuxt-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>Info</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
export default {
    components: {
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

@media (max-width: 991px) {
    .ps-table--whishlist tbody tr td:nth-child(2) {
        min-width: 10px !important;
    }
    .ps-table--whishlist thead tr th:nth-child(2) {
        min-width: 10px !important;
    }
}
</style>
