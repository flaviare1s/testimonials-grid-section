import Kira from '../assets/image-kira.jpg'

export const KiraWhittleComponent = () => {
  return (
    <div className='bg-white rounded-lg p-8'>
        <div className='flex justify-start items-center gap-[17px] mb-[18px]'>
            <img className='w-[28px] h-[28px] rounded-full' src={ Kira } alt="Kira's photo" />
            <div>
              <h1 className='text-very_dark_grayish_blue font-medium text-[13px] leading-[13px]'>Kira Wittle</h1>
              <h2 className='text-very_dark_grayish_blue opacity-50 font-medium text-[11px] leading-[11px]'>Verified Graduate</h2>
            </div>
        </div>
        <div>
            <p className='text-very_dark_grayish_blue text-xl font-semibold pb-4 lg:pb-6'>
              Such a life-changing experience. Highly recommended!
            </p>
        </div>
        <div>
            <p className='text-very_dark_grayish_blue text-opacity-70 text-[13px] font-medium leading-[18px]'>
              “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”
            </p>
        </div>
    </div>
  )
}

