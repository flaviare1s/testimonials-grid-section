import Patrick from '../assets/image-patrick.jpg'

export const PatrickAbramsComponent = () => {
  return (
    <div className='bg-very_dark_blackish_blue rounded-lg p-8'>
      <div className='flex justify-start items-center gap-[17px] mb-[18px]'>
            <img className='w-[28px] h-[28px] rounded-full border-2 border-moderate_violet' src={ Patrick } alt="Patrick's photo" />
            <div>
              <h1 className='text-white font-medium text-[13px] leading-[13px]'>Patrick Abrams</h1>
              <h2 className='text-white opacity-50 font-medium text-[11px] leading-[11px]'>Verified Graduate</h2>
            </div>
        </div>
        <div>
            <p className='text-white text-xl font-semibold pb-4 lg:pb-6'>
              Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.
            </p>
        </div>
        <div>
            <p className='text-white text-opacity-70 text-[13px] font-medium leading-[18px]'>
              “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”
            </p>
        </div>
    </div>
  )
}

