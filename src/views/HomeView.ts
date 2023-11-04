import siteProducts from '@/components/siteProducts/siteProducts.vue'
import siteNav from '@/components/siteNav/siteNav.vue'



import { defineComponent } from 'vue'
import sortingNav from '@/components/sortingNav/sortingNav.vue'
export default defineComponent({
  name: 'home-view',
  components: { siteNav, siteProducts, sortingNav },
  setup() {
    return {
      siteNav,
      siteProducts,
      sortingNav
    }
  }
})
