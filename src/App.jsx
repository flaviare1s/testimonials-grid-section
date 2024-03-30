import './App.css'
import { DanielCliffordComponent } from './components/DanielCliffordComponent'
import { FooterComponent } from './components/FooterComponent'
import { JeanetteHarmonComponent } from './components/JeanetteHarmonComponent'
import { JonathanWaltersComponent } from './components/JonathanWaltersComponent'
import { PatrickAbramsComponent } from './components/PatrickAbramsComponent'

export function App() {
 
  return (
    <div className='font-Barlow bg-blue-50 px-6 py-[71px] lg:px-[165px] flex flex-col justify-center items-center m-auto lg:h-screen'>
      <div className='grid col-span-1 lg:col-span-4'>
        <div>
          <DanielCliffordComponent />
        </div>
        <div>
          <JonathanWaltersComponent />
        </div>
        <div>
          <JeanetteHarmonComponent />
        </div>
        <div>
          <PatrickAbramsComponent />
        </div>
        <div>

        </div>
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  )
}


