import { IconSource } from "react-native-paper/lib/typescript/components/Icon"

export type NavItem = {
    id:number,
    title: string,
    path: string,
    icon?: IconSource
}

export const drawerItem: NavItem[] = [

    {
        id: 0,
        title: "About",
        path: 'Home'
    },
    {
        id: 1,
        title: "Presenters",
        path: 'PresentersList'
    },
    {
        id: 2,
        title: "Register",
        path: 'Home'
    },
    {
        id: 3,
        title: "Donation",
        path: 'Donation'
    },
    {
        id: 4,
        title: "SendNotification",
        path: 'SendNotification'
    }
]