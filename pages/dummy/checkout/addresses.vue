<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-section--shopping ps-whishlist">
            <div class="container">
                <div class="ps-section__content">
                    <div class="mb-5">
                        <h3>Addresses</h3>
                    </div>
                    <div class="row">
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                        >
                            <div class="table-responsive">
                                <table class="table ps-table--whishlist">
                                    <thead>
                                        <tr>
                                            <th width="75%">
                                                Addresses
                                            </th>
                                            <th width="25%">ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="addressText">
                                                    <p>
                                                        Enterprise resource
                                                        planning (ERP) refers to
                                                        a type of software that
                                                        organizations use to
                                                        manage day-to-day
                                                        business activities such
                                                        as accounting,
                                                        procurement, project
                                                        management, risk
                                                        management and
                                                        compliance, and supply
                                                        chain operations.
                                                    </p>
                                                </div>    
                                            </td>
                                            <td class="freeTag">
                                                <nuxt-link
                                                    to="#"
                                                    class="ps-btn ps-btn--fullwidth"
                                                >
                                                    Deliver My Order
                                                </nuxt-link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="addressText">
                                                    <p>
                                                        Enterprise resource
                                                        planning (ERP) refers to
                                                        a type of software that
                                                        organizations use to
                                                        manage day-to-day
                                                        business activities such
                                                        as accounting,
                                                        procurement, project
                                                        management, risk
                                                        management and
                                                        compliance, and supply
                                                        chain operations.
                                                    </p>
                                                </div>    
                                            </td>
                                            <td class="freeTag">
                                                <nuxt-link
                                                    to="#"
                                                    class="ps-btn ps-btn--fullwidth"
                                                >
                                                    Deliver My Order
                                                </nuxt-link>
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
import ProductShoppingCart from '~/components/elements/product/ProductShoppingCart';
export default {
    name: 'Wishlist',
    components: {
        ProductShoppingCart,
        BreadCrumb
    },
    data: () => {
        return {
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
.addressText{
    width: 70%;
    margin: 0px auto;
    text-align: justify;
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
