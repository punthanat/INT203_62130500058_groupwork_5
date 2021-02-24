app.component('photo-search', {
    props: {
        
    },
    template:
        /*html*/
        `
        <div class="flex w-full justify-end my-4">
      <button v-show="!search" v-on:click="clickSearch">
        <span class="material-icons text-3xl">search</span>
      </button>
      <input @input="inputSomething" type="text" class="border-2 border-black rounded-lg w-full p-1 mr-2 h-full" v-model="input" v-show="search" placeholder="Find maps" />
      <button v-show="search" v-on:click="clickcancel">Cancel
      </button>
    </div>
        `,
    data() {
        return {
            search: false,
            input:'',
        }
    },
    methods: {
        clickSearch() {
            this.search=!this.search
        },
        inputSomething(){
            this.$emit('input-something', this.input)
        },
        clickcancel() {
            this.search=!this.search
            this.$emit('search-cancel',this.input='');
        },

    },
    computed: {



    }
})