import Sobre from './componentes/Sobre'
import Banner from './componentes/Banner'
import Prototipo from './componentes/Prototipo'
import Navbar from './componentes/Navbar'
import TituloPrototipo from './componentes/TituloPrototipo'
import Contato from './componentes/Contato'
import Aplicativo from './componentes/Aplicativo'
import Nutri from './componentes/Nutri'
import './App.css'


function App() {
  

  return (
    <>
 
     <Navbar></Navbar>
     <Banner></Banner>
     <Sobre/>
     <TituloPrototipo></TituloPrototipo>
     <Prototipo></Prototipo>
     <Nutri></Nutri>
     <Contato></Contato>
     <Aplicativo></Aplicativo>

    
    </>
  )
}

export default App
