import tw from 'tailwind-styled-components'

export const Container = tw.button`
  flex
  items-center
  justify-center
  gap-4

  text-white
  font-poppins
  font-medium

  bg-red_200
  
  rounded-lg
  py-3
  px-9

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