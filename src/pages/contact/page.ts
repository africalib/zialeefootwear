import Vue from "vue";
import template from './page.html'
import css from './page.css'

Vue.component('page-contact', {
    template: template,
    methods: {
        sendMail: function () {
            let $form = $(this.$el).find('form');
            let $email = $form.find('input[name=email]');
            let $name = $form.find('input[name=name]');
            let $message = $form.find('textarea[name=message]');
            let emailValidate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     
            if(!$email.val()){
                alert('Please enter your email.');
                $email.focus();
                return;
            }
            else if(!emailValidate.test(String($email.val()).toLowerCase())){
                alert('Email address is invalid.');
                $email.focus();
                return;
            }
            else if(!$name.val()){
                alert('Please enter name.');
                $name.focus();
                return;
            }
            else if(!$message.val()){
                alert('Please enter message.');
                $message.focus();
                return;
            }

            if (confirm('Do you want to send an email?')) {
                let args = $form.serialize();
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