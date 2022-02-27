/* eslint-disable consistent-return */
/* eslint-disable consistent-return */
<template lang="html">
  <div class="ps-footer__widgets">
    <aside class="widget widget_footer widget_contact-us">
      <h4 class="widget-title">
        {{ $t('footer.widgetHeading.contactUs') }}
      </h4>
      <div class="widget_content">

        <p>{{ footerContactInfo.support_time }}</p>
        <h3>{{ footerContactInfo.phone }}</h3>
        <p>
          {{ footerContactInfo.address }} <br>

          <a :href="`mailto:${footerContactInfo.email}`">{{ footerContactInfo.email }}</a>
        </p>

        <ul class="ps-list--social">
          <li>

            <nuxt-link v-if='footerSocialLinksWidget'
              class="facebook"
              :to="`${footerSocialLinksWidget.facebook_short}`"
            >
              <i class="fa fa-facebook" />
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-if='footerSocialLinksWidget'
              class="instagram"
              :to="`${footerSocialLinksWidget.instagram_short}`"
            >
              <i class="fa fa-instagram" />
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-if='footerSocialLinksWidget'
              class="twitter"
              :to="`${footerSocialLinksWidget.twitter_short}`"
            >
              <i class="fa fa-twitter" />
            </nuxt-link>
          </li>
          <li>

            <i
              class="fa fa-pinterest"
              aria-hidden="true"
            />

            <nuxt-link v-if='footerSocialLinksWidget'
              class="pinterest"
              :to="`${footerSocialLinksWidget.pinterest_short}`"
            >
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/svg/pinterest.svg"
                style="font-size: 91%;width: 6%;"
              >

            </nuxt-link>
          </li>

        </ul>
      </div>
    </aside>
    <aside class="widget widget_footer">
      <h4 class="widget-title">
        {{ footerWidgetOneLinks.footer_link_widget_one_title }}
      </h4>
      <ul class="ps-list--link">
        <li
          v-for="(link, linkIndex) in getFooterWidgetOneLinks"
          :key="linkIndex"
        >
          <nuxt-link :to="(link.value)">
            {{ link.label }}
          </nuxt-link>
        </li>

      </ul>
    </aside>
    <aside class="widget widget_footer">
      <h4 class="widget-title">

        {{ footerWidgetTwoLinks.footer_link_widget_two_title }}
      </h4>
      <ul class="ps-list--link">
        <li
          v-for="(link, linkIndex) in getFooterWidgetTwoLinks"
          :key="linkIndex"
        >
          <nuxt-link :to="(link.value)">
            {{ link.label }}
          </nuxt-link>
        </li>

      </ul>
    </aside>
    <aside class="widget widget_footer">
      <h4 class="widget-title">
        {{ footerWidgetThreeLinks.footer_link_widget_three_title }}
      </h4>
      <ul class="ps-list--link">
        <li
          v-for="(link, linkIndex) in getFooterWidgetThreeLinks"
          :key="linkIndex"
        >
          <nuxt-link :to="(link.value)">
            {{ link.label }}
          </nuxt-link>
        </li>

      </ul>
    </aside>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FooterWidgets',
  computed: {
    ...mapState({
      footerContactInfo: state => state.collection.footerContactInfo,
      footerWidgetOneLinks: state => state.collection.footerWidgetOneLinks,
      footerWidgetTwoLinks: state => state.collection.footerWidgetTwoLinks,
      footerWidgetThreeLinks: state => state.collection.footerWidgetThreeLinks,
      footerSocialLinksWidget: state => state.collection.footerSocialLinksWidget,
    }),

    getFooterWidgetOneLinks() {
      if (typeof this.footerWidgetOneLinks.footer_link_widget_one_links !== 'undefined' || this.footerWidgetOneLinks.footer_link_widget_one_links != null) {
        return JSON.parse(this.footerWidgetOneLinks.footer_link_widget_one_links)
      }
    },
    getFooterWidgetTwoLinks() {
      if (typeof this.footerWidgetTwoLinks.footer_link_widget_two_links !== 'undefined' || this.footerWidgetTwoLinks.footer_link_widget_two_links != null) {
        return JSON.parse(this.footerWidgetTwoLinks.footer_link_widget_two_links)
      }
    },
    getFooterWidgetThreeLinks() {
      if (typeof this.footerWidgetThreeLinks.footer_link_widget_three_links !== 'undefined' || this.footerWidgetThreeLinks.footer_link_widget_three_links != null) {
        return JSON.parse(this.footerWidgetThreeLinks.footer_link_widget_three_links)
      }
    },


  },
}
</script>

<style lang="scss" scoped></style>
