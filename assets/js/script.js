// Datas In Data.js

// Start my-card Componenet
Vue.component("my-card", {
  template: "#my-card-template",
  props: {
    title: { require: true },
    image: { require: true },
    alt_image: { require: true },
    content: { require: true },
    cta: { require: true },
    cta_href: { require: true },
  },
});
// End my-card Componenet

// Start my-navbar-item Componenet
Vue.component("my-navbar-item", {
  template: "#my-navbar-item-template",
  props: {
    my_href: { require: true },
  },
});
// End my-navbar-item Componenet

// Start banner Component
Vue.component("my-banner", {
  template: "#my-banner-template",
  props: {
    title: { require: true },
    my_class: { require: true },
    my_content: {},
    my_id: {},
  },
});
// End banner Component

// Start my-footer-item Componenet
Vue.component("my-footer-item", {
  template: "#my-footer-item-template",
  props: {
    my_href: { require: true },
  },
});
// End my-footer-item Componenet

// Start my-footer-panel Componenet
Vue.component("my-footer-panel", {
  template: "#my-footer-panel-template",
  props: ["datas", "title"],
  // data() {
  //   return {
  //     datas: footer_data_item_list,
  //     title: navbar_data_title,
  //   };
  // },
});
// End my-footer-panel Componenet

var app = new Vue({
  el: "#app",
  data: {
    cards: card_data_list,
    about_us: about_us,
    about_us_title: about_us_title,
    copy_right_text: copy_right_text,
    navbar_items: navbar_data_item_list,
    banner_datas: banners,
    footer_items: footer_data_item_list,
    footer_title: navbar_data_title,
    lang: "fa",
    switch_lang_title: 'English',
  },
  methods: {
    chengeLanguage() {
      if (this.lang === "fa") {
        document.body.setAttribute("dir", "ltr");
        this.cards = card_data_list_en;
        this.about_us = about_us_en;
        this.about_us_title = about_us_title_en;
        this.copy_right_text = copy_right_text_en;
        this.navbar_items = navbar_data_item_list_en;
        this.banner_datas = banners_en;
        this.footer_items = footer_data_item_list_en;
        this.footer_title = navbar_data_title_en;
        this.lang = "en";
        this.switch_lang_title = 'فارسی';
      } else {
        document.body.setAttribute("dir", "rtl");
        this.cards = card_data_list;
        this.about_us = about_us;
        this.about_us_title = about_us_title;
        this.copy_right_text = copy_right_text;
        this.navbar_items = navbar_data_item_list;
        this.banner_datas = banners;
        this.footer_items = footer_data_item_list;
        this.footer_title = navbar_data_title;
        this.lang = "fa";
        this.switch_lang_title = 'English';
      }
    },
  },
});
