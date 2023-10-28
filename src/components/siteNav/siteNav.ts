import { defineComponent, ref } from 'vue'
import logo from '../../assets/logo.svg'
export default defineComponent({
  name: 'site-nav',
  setup() {
    const showMenu = ref(false)
    return {
      showMenu,
      logo
    }
  }
})
