
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import OrderOrderManager from "./components/listers/OrderOrderCards"
import OrderOrderDetail from "./components/listers/OrderOrderDetail"

import SearchProductView from "./components/SearchProductView"
import SearchProductViewDetail from "./components/SearchProductViewDetail"
import OrderHistoryView from "./components/OrderHistoryView"
import OrderHistoryViewDetail from "./components/OrderHistoryViewDetail"
import DeliveryDeliveryManager from "./components/listers/DeliveryDeliveryCards"
import DeliveryDeliveryDetail from "./components/listers/DeliveryDeliveryDetail"



export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/orders/orders',
                name: 'OrderOrderManager',
                component: OrderOrderManager
            },
            {
                path: '/orders/orders/:id',
                name: 'OrderOrderDetail',
                component: OrderOrderDetail
            },

            {
                path: '/orders/searchProducts',
                name: 'SearchProductView',
                component: SearchProductView
            },
            {
                path: '/orders/searchProducts/:id',
                name: 'SearchProductViewDetail',
                component: SearchProductViewDetail
            },
            {
                path: '/orders/orderHistories',
                name: 'OrderHistoryView',
                component: OrderHistoryView
            },
            {
                path: '/orders/orderHistories/:id',
                name: 'OrderHistoryViewDetail',
                component: OrderHistoryViewDetail
            },
            {
                path: '/deliveries/deliveries',
                name: 'DeliveryDeliveryManager',
                component: DeliveryDeliveryManager
            },
            {
                path: '/deliveries/deliveries/:id',
                name: 'DeliveryDeliveryDetail',
                component: DeliveryDeliveryDetail
            },




    ]
})
