import NavBar from "../components/NavBar.jsx"
import imagenEjemplo from '../assets/imagenEjemplo.jpg'
import categoryPaint from '../assets/categoryPaint.jpg'
import categoryWash from '../assets/categoryWash.jpg'
import categoryPigments from '../assets/categoryPigments.jpg'



function LandingPage() {
    return (
        <div className="flex flex-col">
            <NavBar />
            <div className="flex flex-col gap-4">
                <div>
                    <img src={imagenEjemplo} alt="Imagen carousel" className="w-full h-[400px] object-cover" />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 h-[200px] justify-between *:w-full">
                        <div className="relative bg-black hover:scale-102 duration-300">
                            <img src={categoryPaint} alt="Imagen de categoria pinturas" className="w-full h-full object-cover opacity-65 hover:opacity-75"/>
                            <h2 className="absolute top-1/2 right-1/2 translate-x-1/2 text-white font-bold text-6xl -translate-y-1/2 text-shadow-lg">Pinturas</h2>
                        </div>
                        <div className="relative bg-black hover:scale-102 duration-300">
                            <img src={categoryWash} alt="Imagen de categoria lavado" className="w-full h-full object-cover opacity-65 hover:opacity-75"/>
                            <h2 className="absolute top-1/2 right-1/2 translate-x-1/2 text-white font-bold text-6xl -translate-y-1/2 text-shadow-lg">Lavado</h2>
                        </div>
                        <div className="relative bg-black hover:scale-102 duration-300">
                            <img src={categoryPigments} alt="Imagen de categoria pigmentos" className="w-full h-full object-cover opacity-65 hover:opacity-75"/>
                            <h2 className="absolute top-1/2 right-1/2 translate-x-1/2 text-white font-bold text-6xl -translate-y-1/2 text-shadow-lg">Pigmentos</h2>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <input type="radio" name="carousel-categories"/>
                        <input type="radio" name="carousel-categories"/>
                        <input type="radio" name="carousel-categories"/>
                        <input type="radio" name="carousel-categories"/>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
} 

export default LandingPage;