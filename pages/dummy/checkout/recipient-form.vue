<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-section--shopping ps-whishlist">
            <div class="container">
                <div class="ps-section__header">
                    <h1>Recipient Form</h1>
                </div>
                <div class="ps-section__content">
                    <div class="row">
                        <div
                            class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                        >
                            <form>
                                <div class="form-group">
                                    <label>Recipient Name<sup>*</sup></label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Recipient Name"
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Mobile Number<sup>*</sup></label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Mobile Number"
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Street Address<sup>*</sup></label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Street Address"
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Complex/Building<sup>*</sup></label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Complex/Building (optional)"
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Suburb<sup>*</sup></label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Suburb"
                                    />
                                </div>
                                <div class="form-group">
                                    <label>City/Town<sup>*</sup></label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="City/Town"
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Province<sup>*</sup></label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Province"
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Postal Code<sup>*</sup></label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Postal Code"
                                    />
                                </div>
                                <div class="form-group float-right">
                                    <button class="ps-btn cancelbtn">
                                        Cancel
                                    </button>
                                    <button class="ps-btn">
                                        Submit
                                    </button>
                                </div>
                            </form>
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
.cancelbtn{
    background-color: black !important;
    color: white;
}
.cancelbtn:hover{
    background-color: #FCB800 !important;
    color: black;
}
</style>
