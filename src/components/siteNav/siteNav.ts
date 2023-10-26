import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'site-nav',
  setup() {
    const showMenu = ref(false)
    return {
      showMenu
    }
  }
})
