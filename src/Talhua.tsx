import TalhuaContextProvider from './context/TalhuaContext'
import Main from './pages/Main'

function Talhua() {
    return (
        <TalhuaContextProvider>
            <Main />
        </TalhuaContextProvider>
    )
}

export default Talhua
