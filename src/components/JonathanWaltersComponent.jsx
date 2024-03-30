import Jonathan from '../assets/image-jonathan.jpg'

export const JonathanWaltersComponent = () => {
  return (
    <div className='bg-very_dark_grayish_blue rounded-lg p-8'>
        <div className='flex justify-start items-center gap-[17px] mb-[18px]'>
            <img className='w-[28px] h-[28px] rounded-full border-2 border-white border-opacity-50' src={ Jonathan } alt="Jonathan's photo" />
            <div>
              <h1 className='text-white font-medium text-[13px] leading-[13px]'>Jonathan Walters</h1>
              <h2 className='text-white opacity-50 font-medium text-[11px] leading-[11px]'>Verified Graduate</h2>
            </div>
        </div>
        <div>
            <p className='text-white text-xl font-semibold pb-4'>
              The team was very supportive and kept me motivated
            </p>
        </div>
        <div>
            “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”
        </div>
    </div>
  )
}
