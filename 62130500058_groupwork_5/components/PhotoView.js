app.component('photo-view', {
    props: {
        'expand-img-path1': String,
        'expand': Boolean,
    },
    template:
        /*html*/
        `
        <div class="bg-black rounded-lg mb-5  max-h-full " v-show="expand">
            <div class="flex justify-end text-white">
                <div class="mt-2 mx-2">
                    <span class="material-icons text-4xl" @click="closeExpand"> highlight_off </span>
                 </div>
            </div>
            <div class="flex justify-center mx-10 max-h-80 ">
                <img v-bind:src="expandImgPath1" class="w-full  bg-center  mb-10">
            </div>
        </div>
        `,
    data() {
        return {

        }
    },
    methods: {
        closeExpand() {
            this.$emit('close-expand')
        },

    },
    computed: {



    }
})