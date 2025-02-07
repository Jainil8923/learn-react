import { type RouteConfig, index, route, layout, prefix } from "@react-router/dev/routes";

export default [
    index("./api/fetch.tsx"),

    // layout("./l1.tsx",[
    //     route('about', "./information/about.tsx"),
    //     route('contact', "./information/contact.tsx")
    // ])

    ...prefix('learn', [
        index('./information/about.tsx'),
        route('contact/:id/:id', './information/contact.tsx'),
    ])

] satisfies RouteConfig;
