import Vue from "vue";
import template from './page.html'
import css from './page.css'

Vue.component('page-contact', {
    template: template,
    methods: {
        sendMail: function () {
            if (confirm('send email?')) {
                let args = $(this.$el).find('form').serialize();
                $.ajax({
                    url: 'http://africalibrary21.cafe24.com/api/ziaLeeMail.php',
                    type: 'POST',
                    data: args,
                    success: function (res: string) {
                        if (res === 'success') {
                            window.alert('email has been sent.');
                            window.location.reload();
                        }
                        else {
                            window.alert('fail');
                        }
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