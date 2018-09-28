import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Player from '@/components/Player'
import PlayerProfile from '@/components/Player/Profile'
import PlayerStats from '@/components/Player/Stats'
import SettingDetail from '@/components/setting/Detail'
import SettingHeader from '@/components/setting/Header'
import SettingSidebar from '@/components/setting/Sidebar'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            components: {
                myHeader: SettingHeader,
                mySidebar: SettingSidebar,
                myDetail: SettingDetail
            }
        },
        {
            path: '/player/:uid',
            name: 'Player',
            component: Player,
            children: [
                {
                    path: 'profile',
                    component: PlayerProfile
                },
                {
                    path: 'stats',
                    component: PlayerStats
                },
            ]
        },
        {
            path: '/about',
            name: 'About',
            component: About,
            alias: '/aboutme'
        },
        {
            path: '/curry',
            //redirect: '/player/1'
            //redirect: { name: 'About' }
            redirect: '/aboutme'
        }
    ]
})
