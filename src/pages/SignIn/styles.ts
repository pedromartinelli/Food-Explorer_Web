import tw from 'tailwind-styled-components'

export const Container = tw.div`
  p-0
  m-0
  box-border
  bg-background_800
  sm:bg-background_900
  min-h-screen
  flex 
  items-center
  justify-center
`

export const FormDiv = tw.div`
  w-[380px]
  sm:w-[500px]
  lg:w-4/5
  bg-background_800 
  rounded-2xl 
  p-16
  flex
  flex-col
  items-center
`

export const Form = tw.form`
  w-full
  flex
  flex-col
  gap-8
  mt-14
`

export const InputContainer = tw.div`
  flex
  items-center
`

export const Input = tw.input`
  w-full
  relative

  text-white
  bg-transparent

  p-2
  pl-12
  rounded-lg
  border
  
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

export const Button = tw.button`
  text-white
  font-poppins
  bg-red_200
  
  rounded-lg
  py-3
  
  focus:outline-none
  focus:opacity-80
  focus:scale-105

  hover:opacity-80
  hover:scale-105

  focus:ring-2
  focus:ring-white
  focus:ring-inset
  focus:ring-offset-white

  ease-in-out duration-300
`