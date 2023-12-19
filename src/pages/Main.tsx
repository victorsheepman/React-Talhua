import { useContext, useEffect } from 'react'
import { TalhuaContext } from '../context/TalhuaContext'

export default function Main() {
    const { callApi } = useContext(TalhuaContext)
    useEffect(() => {
        callApi()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div>Main</div>
}
