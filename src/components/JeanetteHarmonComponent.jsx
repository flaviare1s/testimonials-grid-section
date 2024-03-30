import Jeanette from '../assets/image-jeanette.jpg'

export const JeanetteHarmonComponent = () => {
  return (
    <div className='bg-white rounded-lg p-8'>
        <div className='flex justify-start items-center gap-[17px] mb-[18px]'>
            <img className='w-[28px] h-[28px] rounded-full' src={ Jeanette } alt="Jeanette's photo" />
            <div>
              <h1 className='text-very_dark_grayish_blue font-medium text-[13px] leading-[13px]'>Jeanette Harmon</h1>
              <h2 className='text-very_dark_grayish_blue opacity-50 font-medium text-[11px] leading-[11px]'>Verified Graduate</h2>
            </div>
        </div>
        <div>
            <p className='text-very_dark_grayish_blue text-xl font-semibold pb-4 lg:pb-6'>
              An overall wonderful and rewarding experience
            </p>
        </div>
        <div>
            <p className='text-very_dark_grayish_blue text-opacity-70 text-[13px] font-medium leading-[18px]'>
              “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
            </p>
        </div>
    </div>
  )
}

