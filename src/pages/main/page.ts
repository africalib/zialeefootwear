import Vue from "vue";
import template from './page.html'
import css from './page.css'

Vue.component('page-main', {
    template: template,
    data: function () {
        return {
            idx: 0,
            backImgUrl: './src/pages/main/img/main_1.jpg',
            backImages: ['main_1.jpg', 'main_2.jpg', 'main_3.jpg', 'main_4.jpg'],
            lookbooks: ['ZARA x Z;A LEE', 'GIRL HOLDING GUN', 'YOHO! X Z;A LEE', 'CLUMZY DAYZ', 'RIPTIDE;PANIC ATTACK', 'MY SECOND SKIN'],
            portfolios: ['FITFOP X Z;A LEE', 'ZARA x Z;A LEE', 'GIRL HOLDING GUN', 'YOHO! X Z;A LEE'],
            screen: {
                width: 0,
                height: 0
            }
        }
    },
    methods: {
        backToTop: function () {
            $('html, body').scrollTop(0);
            this.$el.scrollTop = 0;
        }
    },
    mounted: function () {
        let style = document.createElement('style');
        let t = this;

        this.$set(this.screen, 'width', window.innerHeight);
        this.$set(this.screen, 'height', window.innerHeight * 0.85);

        setInterval(function () {
            if (t.idx >= t.backImages.length - 1)
                t.idx = 0;
            else
                t.idx += 1;

            t.backImgUrl = './src/pages/main/img/' + t.backImages[t.idx];
        }, 3000);

        style.appendChild(document.createTextNode(css));
        this.$el.prepend(style);
    }
});