import React, { createContext, ReactNode } from 'react'
import supabase from '../db/client'
import { Bracelet } from '../schemas'

type BraceletToShow = Pick<Bracelet, 'id' | 'name' | 'price'>

interface TalhuaContextProps {
    bracelets: BraceletToShow[]
    callApi: () => void
}

export const TalhuaContext = createContext<TalhuaContextProps>({
    bracelets: [],
    callApi: () => {},
})

interface TalhuaContextProviderProps {
    children: ReactNode
}

function TalhuaContextProvider({ children }: TalhuaContextProviderProps) {
    const [bracelets, setBracelets] = React.useState<BraceletToShow[]>([])

    const callApi = async () => {
        try {
            const { data, error } = await supabase.from('Brecelet').select()
            if (!error) {
                const cleanData = data.map((item: Bracelet) => ({
                    name: item.name,
                    price: item.price,
                    id: item.id,
                }))
                setBracelets(cleanData)
            }
        } catch (error) {
            console.error('Error en la llamada a la API:', error)
        }
    }

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <TalhuaContext.Provider value={{ bracelets, callApi }}>
            {children}
        </TalhuaContext.Provider>
    )
}

export default TalhuaContextProvider
