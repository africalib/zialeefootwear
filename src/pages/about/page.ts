import Vue from "vue";
import template from './page.html'
import css from './page.css'

Vue.component('page-about', {
    template: template,
    mounted: function () {
        let style = document.createElement('style');
        style.appendChild(document.createTextNode(css));
        this.$el.prepend(style);
    }
});