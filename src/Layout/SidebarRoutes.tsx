import CustomLink from "./CustomLink"

const SidebarRoutes = () => {
    const routes = [
        {
            route: 'dashboard',
            label: 'Dashboard'
        },
        {
            route: 'orders',
            label: 'Orders'
        },
        {
            route: 'invoices',
            label: 'Invoices'
        },
        {
            route: 'users',
            label: 'Users'
        },
        {
            route: 'reports',
            label: 'Reports'
        },
        {
            route: 'settings',
            label: 'Settings'
        },

    ]
    return routes.map((r) => <CustomLink to={r.route} key={r.route}>{r.label}</CustomLink>)
}

export default SidebarRoutes