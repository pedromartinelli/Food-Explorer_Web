import tw from 'tailwind-styled-components'

export const Container = tw.div`
  bg-background_800
  flex
  items-center
  justify-center

  w-full
  gap-8
  py-7
  px-4
`

export const InputContainer = tw.div`
  flex
  items-center
`

export const Input = tw.input`
  w-96
  relative

  text-white
  bg-background_700

  p-2
  py-2
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