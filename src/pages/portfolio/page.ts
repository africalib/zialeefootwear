import Vue from "vue";
import template from './page.html'
import css from './page.css'
import Global from "../../ts/global";

Vue.component('page-portfolio', {
    template: template,
    data: function () {
        return {
            id: 0,
            limit: 0,
            global: new Global(),
            portfolios: ['HUGO BOSS', 'FITFOP X Z;A LEE', 'ZARA x Z;A LEE', 'GIRL HOLDING GUN', 'YOHO! X Z;A LEE']
        }
    },
    methods: {
        watch: function () {
            let hash = this.global.lib.getHash();
            this.id = hash.id;

            switch (this.id) {
                case 1:
                    this.limit = 26;
                    break;

                case 2:
                    this.limit = 16;
                    break;

                case 3:
                    this.limit = 25;
                    break;

                case 4:
                    this.limit = 13;
                    break;

                case 5:
                    this.limit = 16;
                    break;
            }
        }
    },
    created: function () {
        let t = this;

        window.onhashchange = function () {
            t.watch();
        }

        t.watch();
    },
    mounted: function () {
        let style = document.createElement('style');
        style.appendChild(document.createTextNode(css));
        this.$el.prepend(style);
    }
});