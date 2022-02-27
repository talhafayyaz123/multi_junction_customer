<template lang="html">
<div class="ps-page--single">
    <img src="~/static/img/bg/about-us.jpg" alt="" />
    <div class="container banner-container">
        <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div class="banner">
                    <h1>Join SA's Best Online Marketplace Platform</h1>
                    <h4>Sell to over 2 million happy shoppers</h4>
                    <div class="form-group submit">
                        <button class="ps-btn">Apply to Sell</button>
                        <button class="ps-btn">See Pricing</button>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12"></div>
        </div>
    </div>
    <tools />
    <success />
</div>
</template>

<script>
import tools from '~/pages/dummy/tools';
import success from '~/pages/dummy/success';

export default {
    components: {
        success,
        tools,
    },
    transition: 'zoom',
};
</script>

<style scoped>
.ps-page--single{
    position: relative ;
}
.banner-container{
    position: absolute;
    top: 120px;
    left: 90px;
}
.banner{
    background-color: #E7ECEF;
    padding: 10px;
    opacity: 0.9;
}
@media screen and (max-width: 1032px) {
  .banner-container {
    position: static;
  }
}
</style>
