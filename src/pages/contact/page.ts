import Vue from "vue";
import template from './page.html'
import css from './page.css'

Vue.component('page-contact', {
    template: template,
    methods: {
        sendMail: function () {
            alert('Coming Soon!');
            return;

            if (confirm('send email?')) {
                let args = $(this.$el).find('form').serialize();
                $.ajax({
                    url: './api/',
                    data: args,
                    success: function (res: string) {
                        if (res === '1')
                            window.alert('success');
                        else
                            window.alert('fail');
                    },
                    fail: function () {
                        window.alert('fail');
                    },
                    error: function () {
                        window.alert('error');
                    }
                })
            }
        }
    },
    mounted: function () {
        let style = document.createElement('style');
        style.appendChild(document.createTextNode(css));
        this.$el.prepend(style);
    }
});