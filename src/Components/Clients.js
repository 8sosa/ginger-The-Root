import './Clients.css';
import Stofel from './Images/logo1.png'
import Tinc from './Images/logo2.png'
import Mercury from './Images/logo3.png'
import Dangote from './Images/logo4.png'
import Google from './Images/logo5.png'
import Toosure from './Images/logo6.png'
import Nim from './Images/logo7.png'

function Clients() {
  return (
    <>
        <div className='clientsBar'>
          <img src={Stofel} alt='Stofel logo' className='clientIcon' />
          <img src={Tinc} alt='Tinc logo' className='clientIcon' />
          <img src={Mercury} alt='Mercury logo' className='clientIcon' />
          <img src={Dangote} alt='Dangote logo' className='clientIcon' />
          <img src={Google} alt='Google logo' className='clientIcon' />
          <img src={Toosure} alt='Toosure logo' className='clientIcon' />
          <img src={Nim} alt='Nim logo' className='clientIcon' />
        </div>
    </>
  )
}

export default Clients