import { Link } from 'react-router-dom'
import logo from '../assets/logoFuga.png'
import search from '../assets/magnifyingGlassIcon.svg'

function NavBar() {
    return (
        <nav className="flex justify-between px-12 py-3 w-full h-20">
            <div className='flex items-center'>
                <img src={ logo } alt="Logo" className='h-full rounded-sm'/>
            </div>
            <div className='flex justify-around gap-3 *:px-3 *:py-2.5 *:m-auto'>
                <Link>Productos</Link>
                <Link>Novedades</Link>
                <Link>Distribuidores</Link>
                <Link>Contacto</Link>
            </div>
            <div className='p-5'>
                <img src={search} alt='Search icon' className='h-full'/>
            </div>
        </nav>
    )
} 

export default NavBar;