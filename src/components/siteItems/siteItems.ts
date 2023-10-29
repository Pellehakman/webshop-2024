import { defineComponent, ref } from 'vue'
import siteItem from '../siteItem/siteItem.vue'

export default defineComponent({
  name: 'siteItems-site',
  components: { siteItem },
  props: {
    id: Number,
    imageURL: String,
    rating: Number,
    title: String,
    description: String,
    price: Number,
    ingredients: Array
  },

  setup(props) {
    const rating = ref(4) // Assuming the rating is provided as a ref or reactive property
    const showItem = ref(false)
    const getStarClass = (index: any) => {
      return index <= rating.value ? 'text-yellow-500' : 'text-slate-400'
    }
    function clickProduct(id) {
      console.log(id)
      showItem.value = true
      document.body.style.overflow = 'hidden'
    }

    function closeProduct() {
      showItem.value = false
      document.body.style.overflow = 'auto'
    }

    return {
      clickProduct,
      getStarClass,
      closeProduct,
      siteItem,
      props,
      showItem
    }
  }
})
