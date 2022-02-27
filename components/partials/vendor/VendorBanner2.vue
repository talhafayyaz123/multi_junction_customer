<template lang="html">
    <div class="ps-vendor-banner bg--cover">
        <div class="container">
            <h2>
                Millions Of Shoppers Can’t Wait To See What You Have In Store
            </h2>
            <nuxt-link to="/vendor/store-list" class="ps-btn ps-btn--lg">
                View Price
            </nuxt-link>
            <nuxt-link to="/dummy/apply-form" class="ps-btn ps-btn--lg">
                Become a Vendor
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VendorBanner2'
};
</script>

<style lang="scss" scoped>
.ps-vendor-banner {
    background: url('/img/bg/vendor.jpg');
}
</style>
