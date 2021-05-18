var app = new Vue(
    {
        el:"#root",
        data: {
           images: [
               "https://www.consumatori.it/wp-content/uploads/2018/10/Cani-spiaggia.png",

               "https://static.wixstatic.com/media/c113eb_6de75f8ff1034428b395397710741f19~mv2.jpg/v1/fill/w_640,h_532,al_c,q_80,usm_0.66_1.00_0.01/c113eb_6de75f8ff1034428b395397710741f19~mv2.webp",

               "https://www.notizieanimali.com/wp-content/uploads/2020/02/pesci-mediterraneo.jpg",

               "https://i.ytimg.com/vi/NzyfFRungcI/maxresdefault.jpg",

               "https://best5.it/b5/wp-content/uploads/2016/09/Bradipo1-800x400.jpg"
           ],
           imagesindex : 0,   
        },
        methods: {   
            changeImageRight: function () {
                if (this.imagesindex == this.images.length -1) {
                    this.imagesindex = -1;
                }
                this.imagesindex++;
            },
            changeImageLeft: function () {
                if (this.imagesindex == 0) {
                    this.imagesindex = this.images.length ;
                }
                 this.imagesindex--;
             }
        }
    }
)