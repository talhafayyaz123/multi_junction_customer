<template lang="html">
    <div class="ps-home-banner ps-home-banner--1">
        <div class="ps-container">
            <div class="ps-section__left d-flex">
                <menu-categories />
                <div class="ps-carousel" v-swiper:mySwiper="swiperOption">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div
                                class="ps-banner"
                                :style="{
                                    backgroundImage: `url(/img/slider/home-1/slide-1.jpg)`
                                }"
                            ></div>
                        </div>
                        <div class="swiper-slide">
                            <div
                                class="ps-banner"
                                :style="{
                                    backgroundImage: `url(/img/slider/home-1/slide-2.jpg)`
                                }"
                            ></div>
                        </div>
                        <div class="swiper-slide">
                            <div
                                class="ps-banner"
                                :style="{
                                    backgroundImage: `url(/img/slider/home-1/slide-3.jpg)`
                                }"
                            ></div>
                        </div>
                    </div>
                    <!--Carousel controls-->
                    <div class="swiper-nav">
                        <span class="swiper-arrow swiper-prev"
                            ><i class="icon-chevron-left"></i
                        ></span>
                        <div class="swiper-arrow swiper-next">
                            <i class="icon-chevron-right"></i>
                        </div>
                    </div>
                    <div
                        class="swiper-pagination swiper-pagination-bullets"
                    ></div>
                </div>
            </div>
            <div class="ps-section__right">
                <nuxt-link to="/shop" class="ps-collection">
                    <img
                        src="/img/slider/home-1/promotion-1.jpg"
                        alt="martfury"
                    />
                </nuxt-link>
                <nuxt-link to="/shop" class="ps-collection">
                    <img
                        src="/img/slider/home-1/promotion-2.jpg"
                        alt="martfury"
                        class="rightsectionImage"
                    />
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import MenuCategories from '~/components/shared/menu/MenuCategories';
export default {
    name: 'HomeBanner',
    components: {
        MenuCategories,
    },
    data() {
        return {
            swiperOption: {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 1,
                navigation: {
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev'
                }
            }
        };
    }
};
</script>

<style lang="scss" scoped></style>
<style scoped>
.menu--dropdown{
    width: 30%;
    list-style: none;
    overflow: overlay;
    height: 425px;
}
.ps-carousel{
    width: 70%;
    padding-right: 0px !important;
}

/* ****************************************** */
/* ****************Scroll Style************** */
/* ***************************************** */
/* width */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #FCB800; 
}

/* ****************************************** */
/* ****************Media Quries************** */
/* ***************************************** */

@media screen and (max-width: 768px) {
  .menu--dropdown {
    display: none;
  }
  .ps-carousel{
      padding-bottom: 0px;
  }
}

@media screen and (min-width: 1180px) {
  .rightsectionImage{
    margin-top: 10px;
}
}
</style>
