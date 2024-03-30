import './App.css'
import { DanielCliffordComponent } from './components/DanielCliffordComponent'
import { JonathanWaltersComponent } from './components/JonathanWaltersComponent'

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
      </div>
      <div>

        Jeanette Harmon
        Verified Graduate

        An overall wonderful and rewarding experience

        “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
        while doing something I love. ”

        Patrick Abrams
        Verified Graduate

        Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
        learning from their experiences was easy.

        “ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
        gave me the confidence necessary to be able to go out in the world and present myself as a capable 
        junior developer. The standard is above the rest. You will get the personal attention you need from 
        an incredible community of smart and amazing people. ”

        Kira Whittle
        Verified Graduate

        Such a life-changing experience. Highly recommended!

        “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
        professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
        student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
        did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
        project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
        could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
        experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
        100% recommend! ”
        
        <div>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/flaviare1s">Flávia Reis</a>.
        </div>
      </div>
    </div>
  )
}


