import siteNav from '@/components/siteNav/siteNav'

import { defineComponent } from 'vue'
export default defineComponent({
    name:"home-view",
    components: { siteNav },
    setup(){
        return{
            siteNav
        }
    }
})  