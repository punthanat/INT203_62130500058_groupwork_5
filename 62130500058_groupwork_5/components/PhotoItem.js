app.component('photo-item', {
    props: {
        'input-searchfil':Array,

    },
    template:
        /*html*/
        `<div class="flex flex-row  max-w-full">
            <ul v-if="inputSearchfil.length !=0" class="w-full max-w-full" >
                <li v-for="(inputs,index) in inputSearchfil"  class="flex flex-row ">
  
                <img v-bind:src="inputs.img" @click="expandImg(inputs.img)" class="w-72 h-44 mr-5 mb-5">
                <button v-on:click="like(inputs.id)" class=" h-44 mx-2">{{inputs.Mname}} {{inputs.des}}, 
                {{inputs.country}}</button>
                    <div class="space-y-auto h-44  ">
                        <span class="material-icons text-red-600 my-20 " v-show="inputs.like">favorite</span>
                    </div>
                 </li>
            </ul>
            <ul v-else>
             No photos
             </ul>
        </div>`,
    data() {
        return {
            expand:false,
            imgPath:'',
        }
    },
    methods: {
        like(id) {
            this.$emit('like', id);
        },
        expandImg(imgPath) {
            this.$emit('expand-img',!this.expand);
            this.$emit('expand-img-path',imgPath);
        },
        // search(){
        //     this.$on('input-search')
            
        // },
        // cancel(){
        //     this.$on('input-search-cancel')
        // }

    },
    computed: {
        


    }
})