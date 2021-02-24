const app = Vue.createApp({
    data() {
        return {
            maps: [
                { Mname: 'Consulate', des: 'Abidjan', country: 'Ivory coast', img: "./images/1.jpg", like: false, expand: false, id: 1 },
                { Mname: 'Clubhouse', des: 'Hanover', country: 'Germany', img: "./images/4.jpg", like: false, expand: false, id: 2 },
                { Mname: 'Bank', des: 'Los angeles', country: 'California', img: "./images/3.png", like: false, expand: false, id: 3 },
                { Mname: 'Border', des: 'Middle east', country: '-', img: "./images/2.jpg", like: false, expand: false, id: 4 },
            ],
            input: '',
            expandImgPath1: '',
            expand: false,


        }
    },
    methods: {
        inputSomething(inputFromSearch) {
            this.input = inputFromSearch;

        },

        searchCancel(inputFromSearch) {
            this.input = inputFromSearch;
        },

        like(id) {
            console.log("id: " + id)
            for (let i = 0; i < this.maps.length; i++) {
                if (this.maps[i].id == id) {
                    this.maps[i].like = !this.maps[i].like
                    break;
                }

            }
        },

        expandImg(booleanTrue) {
            this.expand = booleanTrue;
        },
        expandImgPath(imgPath) {
            this.expandImgPath1 = imgPath
        },
        closeExpand() {
            this.expandImgPath1 = '',
                this.expand = !this.expand
        }

        // expandImg2() {
        //     this.expand = !this.expand
        //     this.expandImgPath = '';
        // },



    },
    computed: {
        inputSearchfil() {
            return this.maps.filter((m) => {
                return m.Mname.toLowerCase().includes(this.input.toLowerCase())
            })
        },
        photoGallery() {
            return this.maps.filter(m => m).length
        },
        likeCount() {
            return this.maps.filter(m => m.like).length
        }

    }
})


