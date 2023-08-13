import { createContext } from "react";

export const AppContext = createContext({})

export const AppProvier = ({children}) => {
    const hefPage = [
        {
            name:'Home',
            hef:'/',
        },
        {
            name:'Products',
            hef:'/Products',
        },
        {
            name:'Invoices',
            hef:'/Invoices',
        },
        {
            name:'Cart',
            hef:'/Cart',
        },
        {
            name:'Profile',
            hef:'/Profile',
        },
        {
            name:'About',
            hef:'/About',
        }
    ]
    return <AppContext.Provider value={{ hefPage }}>
                {children}
            </AppContext.Provider>
}