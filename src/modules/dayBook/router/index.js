export default{
   path:'/daybook',
    name:'daybook',
    component:() => import('@/modules/dayBook/layout/DaybookLayout'),
    children:[
     {path:'',name:'no-entry',component: () => import('@/modules/dayBook/views/NoEntrySelected')},
     {path:':id',name:'entry',component: () => import('@/modules/dayBook/views/EntryView')},
    ]
}