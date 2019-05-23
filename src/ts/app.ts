import Vue from "vue";
import Global from "./global";

let app = new Vue({
    el: "#app",
    data: {
        global: new Global(),
        menus: ['about', 'portfolio', 'lookbook', 'contact'],
        mode: 'index',
        id: 0
    },
    methods: {
        backToTop: function () {
            $('html, body').scrollTop(0);
            this.$el.scrollTop = 0;
        },
        watch: function () {
            let hash = this.global.lib.getHash();
            this.mode = hash.mode;
            this.id = hash.id;

            this.$nextTick(function () {
                this.setListeners();
                this.backToTop();
            });
        },
        setListeners: function () {
            let t = this;
            let app: any = document.getElementById('app');
            let directions = document.getElementsByClassName('direction') as HTMLCollectionOf<HTMLElement>;
            let topBtns = document.getElementsByClassName('back-to-top') as HTMLCollectionOf<HTMLElement>;
            let galleries = document.querySelectorAll('.gallery') as NodeListOf<HTMLElement>;

            if (galleries && galleries.length) {
                let interval: any = null;
                let li: any = galleries[0].querySelectorAll('li');

                if (li.length) {
                    let imgWidth = li[0].offsetWidth;

                    for (let i = 0; i < topBtns.length; i += 1) {
                        topBtns[i].addEventListener('click', function () {
                            interval = setInterval(function () {
                                if (app.scrollTop > 0)
                                    app.scrollTop -= 120;
                                else
                                    clearInterval(interval);
                            }, 10);
                        });
                    }

                    for (let i = 0; i < directions.length; i += 1) {
                        directions[i].addEventListener('click', function () {
                            let scollLeft = 0;
                            let gallery = galleries[0];
                            clearInterval(interval);

                            if (i > 1)
                                gallery = galleries[1];

                            if (this.classList.contains('right')) {
                                scollLeft = gallery.scrollLeft + imgWidth;
                                interval = setInterval(function () {
                                    if (gallery.scrollLeft < scollLeft && gallery.scrollWidth - gallery.clientWidth > gallery.scrollLeft)
                                        gallery.scrollLeft += 10;
                                    else
                                        clearInterval(interval);
                                }, 10);
                            }
                            else if (this.classList.contains('left')) {
                                scollLeft = gallery.scrollLeft - imgWidth;
                                interval = setInterval(function () {
                                    if (gallery.scrollLeft > scollLeft && gallery.scrollLeft > 0)
                                        gallery.scrollLeft -= 10;
                                    else
                                        clearInterval(interval);
                                }, 10);
                            }
                        });
                    }
                }
            }
        }
    },
    created: function () {
        let t = this;

        window.addEventListener('hashchange', function () {
            t.watch();
        });

        t.watch();
    },
    mounted: function () {
        let t = this;
        t.setListeners();

        $(t.$el).on('click', '.navbar-nav>li>a', function () {
            $(t.$el).find('.navbar-collapse').collapse('hide');
        });
    }
});