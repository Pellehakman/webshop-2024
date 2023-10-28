import { defineComponent, ref } from 'vue'
import siteItem from '../siteItem/siteItem.vue'

export default defineComponent({
  name: 'siteItems-site',
  components: {siteItem},
  props:{
    imageURL: String,
    rating: Number,
    title: String,
    description: String,
    price: Number,
    ingredients: Array, 
},

  setup(props) {
   
const rating = ref(4); // Assuming the rating is provided as a ref or reactive property


const getStarClass = (index:any) => {
  return index <= rating.value ? 'text-yellow-500' : 'text-slate-400';

};




    return {
      getStarClass,
      siteItem,
      props
    }
  }
})
