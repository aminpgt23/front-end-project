import face from './pages/face.vue'
import listform from '@/pages/listform.vue'
import UpdateList from './pages/UpdateList.vue'

export default[
    {
        path:"/face",
        component:face,
    },
    {
        path:"/add",
        component:listform,
    },
    {
        path:"/updateList/:id",
        component:UpdateList

    }
]