import { Link } from 'react-router-dom'
import logo from '../assets/logoFuga.png'
import search from '../assets/magnifyingGlassIcon.svg'
import { ChevronRight } from 'lucide-react'

function NavBar() {
    return (
        <nav className="flex justify-between px-12 py-3 w-full h-20">
            <div className='flex items-center'>
                <img src={ logo } alt="Logo" className='h-full rounded-sm'/>
            </div>
            <div className='flex justify-around gap-3 *:m-auto '>
                <div class='dropdown'>
                    <button class='dropdown-btn'>
                        <span>Categorias</span>
                        <ChevronRight class='dropdown-icon' />
                    </button>
                    <div class='dropdown-content'>
                        <a href="">Pegamentos</a>
                        <a href="">Pigmentos</a>
                        <a href="">Lavados</a>
                        <a href="">Herramientas</a>
                        <a href="">Thinners</a>
                        <a href="">Lacas</a>
                        <a href="">Pinturas</a>
                        <a href="">Limpiador de plástico</a>
                        <a href="">Oxidante de orugas</a>
                    </div>
                </div>
                <a className='px-6 py-3'>Novedades</a>
                <a className='px-6 py-3'>Distribuidores</a>
                <a className='px-6 py-3'>Contacto</a>
            </div>
            <div className='p-5'>
                <img src={search} alt='Search icon' className='h-full'/>
            </div>
        </nav>
    )
} 

export default NavBar;