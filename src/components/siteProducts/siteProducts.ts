import { defineComponent, ref } from 'vue'
import siteItem from '../siteItem/siteItem.vue'
export default defineComponent({
  name: 'products-site',
  components: { siteItem },
  setup() {
    return {
      siteItem
    }
  }
})
