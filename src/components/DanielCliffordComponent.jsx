import Daniel from '../assets/image-daniel.jpg'
import pattern from '../assets/bg-pattern-quotation.svg'

export const DanielCliffordComponent = () => {
  return (
    <div className='relative bg-moderate_violet rounded-lg p-8'>
        <div className='absolute top-0 right-0 mr-8'>
          <img className='h-full w-full' src={ pattern } alt="Pattern" />
        </div>
        <div className='flex justify-start items-center gap-[17px] mb-[18px]'>
            <img className='w-[28px] h-[28px] rounded-full border-2 border-soft_violet' src={ Daniel } alt="Daniel's photo" />
            <div>
              <h1 className='text-white font-medium text-[13px] leading-[13px]'>Daniel Clifford</h1>
              <h2 className='text-white opacity-50 font-medium text-[11px] leading-[11px]'>Verified Graduate</h2>
            </div>
        </div>
        <div className='relative z-20'>
            <p className='text-white text-xl font-semibold pb-10 lg:pb-4'>
              I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.
            </p>
        </div>
        <div>
            “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
            transition and have heard some people who had an amazing experience here. I signed up
            for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
            The next 12 weeks was the best - and most grueling - time of my life. Since completing
            the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
        </div>
    </div>
  )
}

