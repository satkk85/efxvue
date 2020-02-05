import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/event-list",
        name: "eventList",
        component: () =>
            import(/* webpackChunkName: "eventlist" */ "../views/EventList.vue")
    },
    {
        path:"/events",
        redirect: {name:'eventList'}
    },
    {
        path: "/create-event",
        name: "createEvent",
        component: () =>
            import(/* webpackChunkName: "createevent" */ "../views/CreateEvent.vue")
    },
    {
        path: "/event-show/:id",
        name: "eventShow",
        component: () =>
            import(/* webpackChunkName: "createevent" */ "../views/EventShow.vue"),
        props:true
    }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
