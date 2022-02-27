<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-section--shopping ps-whishlist">
            <div class="container">
                <!-- <div class="ps-section__header">
                    <h1>Checkout</h1>
                </div> -->
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
                                <tr>
                                    <td>
                                        <img
                                            src="~/static/img/blog/detail/4.jpg"
                                            width="120px"
                                            height="120px"
                                            alt=""
                                        />
                                    </td>
                                    <td>Leather Laptop Bag</td>
                                    <td>R 348.09</td>
                                    <td>
                                        <figure>
                                            <div class="form-group--number">
                                                <button class="up">
                                                    <i class="fa fa-plus"></i>
                                                </button>
                                                <button class="down">
                                                    <i class="fa fa-minus"></i>
                                                </button>
                                                <input
                                                    class="form-control numberInput"
                                                    type="text"
                                                    placeholder="1"
                                                    disabled
                                                />
                                            </div>
                                        </figure>
                                    </td>
                                    <td>City Kabul,Afghanistan</td>
                                    <td>R 350.00</td>
                                    <td>
                                        <span><i class="icon-trash"></i></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img
                                            src="~/static/img/blog/detail/6.jpg"
                                            width="120px"
                                            height="120px"
                                            alt=""
                                        />
                                    </td>
                                    <td>Suplendid Watch</td>
                                    <td>R 212.09</td>
                                    <td>
                                        <figure>
                                            <div class="form-group--number">
                                                <button class="up">
                                                    <i class="fa fa-plus"></i>
                                                </button>
                                                <button class="down">
                                                    <i class="fa fa-minus"></i>
                                                </button>
                                                <input
                                                    class="form-control numberInput"
                                                    type="text"
                                                    placeholder="1"
                                                    disabled
                                                />
                                            </div>
                                        </figure>
                                    </td>
                                    <td>City Kabul,Afghanistan</td>
                                    <td>R 215.00</td>
                                    <td>
                                        <span><i class="icon-trash"></i></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img
                                            src="~/static/img/blog/detail/7.jpg"
                                            width="120px"
                                            height="120px"
                                            alt=""
                                        />
                                    </td>
                                    <td>Iphone 6s</td>
                                    <td>R 912.09</td>
                                    <td>
                                        <figure>
                                            <div class="form-group--number">
                                                <button class="up">
                                                    <i class="fa fa-plus"></i>
                                                </button>
                                                <button class="down">
                                                    <i class="fa fa-minus"></i>
                                                </button>
                                                <input
                                                    class="form-control numberInput"
                                                    type="text"
                                                    placeholder="1"
                                                    disabled
                                                />
                                            </div>
                                        </figure>
                                    </td>
                                    <td>City Kabul,Afghanistan</td>
                                    <td>R 912.00</td>
                                    <td>
                                        <span><i class="icon-trash"></i></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img
                                            src="~/static/img/blog/detail/8.jpg"
                                            width="120px"
                                            height="120px"
                                            alt=""
                                        />
                                    </td>
                                    <td>Luxury Shoes</td>
                                    <td>R 92.09</td>
                                    <td>
                                        <figure>
                                            <div class="form-group--number">
                                                <button class="up">
                                                    <i class="fa fa-plus"></i>
                                                </button>
                                                <button class="down">
                                                    <i class="fa fa-minus"></i>
                                                </button>
                                                <input
                                                    class="form-control numberInput"
                                                    type="text"
                                                    placeholder="1"
                                                    disabled
                                                />
                                            </div>
                                        </figure>
                                    </td>
                                    <td>City Kabul,Afghanistan</td>
                                    <td>R 92.00</td>
                                    <td>
                                        <span><i class="icon-trash"></i></span>
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
    text-align: center !important;
}
.ps-table--whishlist thead tr th {
    text-align: center !important;
}
.icon-trash{
    font-weight: bold;
    cursor: pointer;
}
.up:hover,.down:hover{
    color: #FCB800;
}
.form-group--number{
    width: 120px;
}
.numberInput{
    border-radius: 0px;
}
</style>
