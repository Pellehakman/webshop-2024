import { defineComponent, ref } from 'vue'
import siteItems from '../siteItems/siteItems.vue'
import meals from '../json/meals.json'
export default defineComponent({
  name: 'products-site',
  components: { siteItems },

  setup() {

    
    const db = meals.meals
    return {
      db,
      siteItems
    }
  }
})
