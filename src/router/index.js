import { createRouter, createWebHistory } from 'vue-router';
// @는 src(루트 폴더 경로)를 의미
// 파일(HomeComponent) 내부에 export default가 있는 경우에는 {}가 필요없고, 그렇지 않은 경우에는 {}가 필요하다.
// 요소가 여러개 있을 때에도 {}를 붙인다

import { practiceRouter } from '@/router/practiceRouter';

const routes = [
    ...practiceRouter
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router