import tw from 'tailwind-styled-components'

export const Container = tw.div`
  bg-background_800
  
  sm:flex
  justify-center

  py-7
  px-4
  
`

export const Menu = tw.div`
  p-6 
  bg-background_700
  
  absolute 
  top-20 
  right-0 
  
  mx-4 
  my-2 
  
  min-w-[140px] 
  rounded-xl 
  
  menu

  `
  // sidebar

export const InputContainer = tw.div`
  flex
  items-center
`

export const Input = tw.input`
  text-white
  bg-background_700

  sm:w-96

  py-2
  pr-2
  pl-14
  rounded-lg

  placeholder:text-base
  placeholder:font-roboto
  placeholder:text-gray_300

  focus:outline-none
  focus:ring-2
  focus:ring-white
  focus:ring-inset
  focus:ring-offset-white

  ease-in-out duration-300
`