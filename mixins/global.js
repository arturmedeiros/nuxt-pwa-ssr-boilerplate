import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    // Módulos Globais do Vuex (Store)
    ...mapState([
      'configs',
    ]),
    // Getters do Vuex (Store)
    ...mapGetters([
    ]),
    // Function to verify device
    isMobile(){
      return (this.$vuetify.breakpoint.name === 'xs' || this.$vuetify.breakpoint.name === 'sm')
    },
  },
  data(){
    return {
      logo: {},
    }
  },
  methods:{
    normalizeHelper(payload) {
      return JSON.parse(JSON.stringify(payload))
    },
    refresh() {
      window.location.reload()
    },
  },
}
