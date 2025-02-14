import CustomerComponent from "../../components/admin/customers/CustomerComponent.vue";
import CustomerListComponent from "../../components/admin/customers/CustomerListComponent.vue";
import CustomerShowComponent from "../../components/admin/customers/CustomerShowComponent.vue";
import CustomerOrderDetailsComponent from "../../components/admin/customers/CustomerOrderDetailsComponent.vue";


export default [
    {
        path: "/admin/customers",
        component: CustomerComponent,
        name: "admin.customers",
        redirect: {name: "admin.customers.list"},
        meta: {
            isFrontend: false,
            auth: true,
            permissionUrl: "customers",
            breadcrumb: "customers",
        },
        children: [
            {
                path: "",
                component: CustomerListComponent,
                name: "admin.customers.list",
                meta: {
                    isFrontend: false,
                    auth: true,
                    permissionUrl: "customers",
                    breadcrumb: "",
                }
            },
            {
                path: "show/:id",
                component: CustomerShowComponent,
                name: "admin.customers.show",
                meta: {
                    isFrontend: false,
                    auth: true,
                    permissionUrl: "customers",
                    breadcrumb: "view",
                }
            },
            {
                path: "show/:id/:orderId",
                component: CustomerOrderDetailsComponent,
                name: "admin.customers.order.details",
                meta: {
                    isFrontend: false,
                    auth: true,
                    permissionUrl: "customers",
                    breadcrumb: "order_details",
                }
            },
        ],
    },
];
