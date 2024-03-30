import './App.css'
import { DanielCliffordComponent } from './components/DanielCliffordComponent'
import { FooterComponent } from './components/FooterComponent'
import { JeanetteHarmonComponent } from './components/JeanetteHarmonComponent'
import { JonathanWaltersComponent } from './components/JonathanWaltersComponent'
import { KiraWhittleComponent } from './components/KiraWhittleComponent'
import { PatrickAbramsComponent } from './components/PatrickAbramsComponent'

export function App() {
 
  return (
    <div className='font-Barlow bg-blue-50 px-6 py-[71px] xl:px-[165px] flex flex-col justify-center items-center m-auto lg:h-screen'>
      <div className='w-full sm:w-[70%] md:w-1/2 lg:w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-6'>
          <div className='col-span-1 lg:col-span-2 lg:row-span-1'>
            <DanielCliffordComponent />
          </div>
          <div className='col-span-1 lg:col-span-1 lg:row-span-1'>
            <JonathanWaltersComponent />
          </div>
          <div className='col-span-1 lg:col-span-1 lg:row-span-2 order-last lg:order-none'>
            <KiraWhittleComponent />
          </div>
          <div className='col-span-1 lg:col-span-1 lg:row-span-1'>
            <JeanetteHarmonComponent />
          </div>
          <div className='col-span-1 lg:col-span-2 lg:row-span-1'>
            <PatrickAbramsComponent />
          </div>
        </div>
        <div>
          <FooterComponent />
        </div>
      </div>
    </div>
  )
}


