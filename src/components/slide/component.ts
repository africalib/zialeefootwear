import Vue from "vue";
import template from "./component.html"
import css from "./component.css"
import Global from "../../ts/global";

Vue.component('component-slide', {
    template: template,
    data: function () {
        return {
            id: 0,
            swiper: {},
            slideHeight: '',
            mobile: false
        }
    },
    props: {
        limit: Number,
        category: String
    },
    created: function () {
        let g = new Global();
        let hash = g.lib.getHash();
        this.id = hash.id;
        this.slideHeight = document.body.clientHeight + 'px';
        this.mobile = window.innerWidth < 768;
    },
    mounted: function () {
        let style = document.createElement('style');
        this.swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar'
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });

        if (!this.mobile) {
            this.$nextTick(function () {

                $('html, body').animate({
                    scrollTop: $(this.$el).offset().top
                });
            });
        }

        style.appendChild(document.createTextNode(css));
        this.$el.prepend(style);
    }
});