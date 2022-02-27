<template lang="html">
<div class="ps-product__info">
    <!-- <module-product-info :product="product" /> -->

    <module-product-detail-desc :product="product" />

    <!-- ============================================================= -->
    <!---------------Custom Code For Select Products--------------------->
    <!-- ============================================================= -->

    <div>
        <h4>Color</h4>
        <v-select :items="items" label="Solo field" solo></v-select>
    </div>
    <div class="row">
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-4">
           <div class="detailImg">
               <img src="~/static/img/blog/detail/4.jpg" width="100%" alt="">
            </div> 
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-4">
           <div class="detailImg">
               <img src="~/static/img/blog/detail/4.jpg" width="100%" alt="">
            </div> 
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-4">
           <div class="detailImg">
               <img src="~/static/img/blog/detail/4.jpg" width="100%" alt="">
            </div> 
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-4">
           <div class="detailImg">
               <img src="~/static/img/blog/detail/4.jpg" width="100%" alt="">
            </div> 
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-4">
           <div class="detailImg">
               <img src="~/static/img/blog/detail/4.jpg" width="100%" alt="">
            </div> 
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-4">
           <div class="detailImg">
               <img src="~/static/img/blog/detail/4.jpg" width="100%" alt="">
            </div> 
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12">
            <p>Select a size : <strong>UK 7</strong></p>
            <button class="btn border-primary btn-primary btn-lg">UK 6</button>
            <button class="btn border-primary btn-lg">UK 7</button>
        </div>
    </div>

    <!-- ============================================================= -->

    <module-product-shopping-extended />

    <module-product-detail-specification />

    <module-product-detail-sharing />
</div>
</template>

<script>
import ModuleProductDetailSharing from '~/components/elements/detail/information/modules/ModuleProductDetailSharing';
import ModuleProductDetailSpecification from '~/components/elements/detail/information/modules/ModuleProductDetailSpecification';
import ModuleProductDetailDesc from '~/components/elements/detail/information/modules/ModuleProductDetailDesc';
import Rating from '~/components/elements/Rating';
import ModuleProductInfo from '~/components/elements/detail/information/modules/ModuleProductInfo';
import ModuleProductShoppingExtended from '~/components/elements/detail/information/modules/ModuleProductShoppingExtended';

export default {
    name: 'InformationExtended',
    components: {
        ModuleProductShoppingExtended,
        ModuleProductInfo,
        Rating,
        ModuleProductDetailDesc,
        ModuleProductDetailSpecification,
        ModuleProductDetailSharing
    },
    props: {
        product: {
            type: Object,
            default: {}
        }
    },
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
};
</script>

<style scoped>
.detailImg{
   border:1px solid lightgray;
   margin-bottom: 10px;
}
</style>
