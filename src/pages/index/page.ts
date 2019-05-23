import Vue from "vue";
import template from './page.html'
import css from './page.css'

Vue.component('page-index', {
    template: template,
    data: function () {
        return {
            backImgUrl: './src/pages/main/img/main_1.jpg',
            backImages: ['main_1.jpg', 'main_2.jpg', 'main_3.jpg', 'main_4.jpg'],
        }
    },
    mounted: function () {
        let style = document.createElement('style');
        let t = this;
        let idx = 1;

        setInterval(function () {
            t.backImgUrl = './src/pages/main/img/' + t.backImages[idx];

            if (idx >= t.backImages.length - 1)
                idx = 0;
            else
                idx += 1;
        }, 3000);

        style.appendChild(document.createTextNode(css));
        this.$el.prepend(style);
    }
});