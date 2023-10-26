import siteProducts from '@/components/siteProducts/siteProducts.vue'
import siteNav from '@/components/siteNav/siteNav.vue'

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'home-view',
  components: { siteNav, siteProducts },
  setup() {
    return {
      siteNav,
      siteProducts
    }
  }
})
