import ModelingComponent from '@/components/practice/ModelingComponent.vue';
import AxiosComponent from '@/components/practice/AxiosComponent.vue';

export const practiceRouter = [
    {
        path: '/practice/modeling',
        name: 'ModelingComponent',
        component: ModelingComponent
    }, 
    {
        path: '/practice/axios-test',
        name: 'AxiosComponent',
        component: AxiosComponent
    },
]
