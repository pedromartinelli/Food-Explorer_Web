import tw from 'tailwind-styled-components'

export const Container = tw.div`
  pb-0
  m-0
  box-border
 
  bg-background_800
  sm:bg-background_900
 
  min-h-screen
  w-full

  flex 
  flex-col

  `
// max-w-screen
export const Section = tw.div`
  w-full
  
  flex
  flex-col  
  lg:flex-row
  
  gap-16

  mt-8
`

export const OrderList = tw.div`  
  text-white
  text-start
 
  flex
  flex-col
`

export const OrderCard = tw.div`  
  text-white
  text-start
 
  flex
  gap-4
  items-center

  mb-6

  `

export const Payment = tw.div`
  text-white
  
  flex
  flex-col
  gap-10
`

export const PaymentSession = tw.div`
  flex 
  flex-col 
  items-center 
  gap-14 
  pb-12 
  ml-14 
  border-b 
  border-x 
  border-[#152f3d] 
  first-letter:border-opacity-60 
`

export const PaymentMethod = tw.button`
  text-white
  text-base
  font-roboto
  font-normal

  flex 
  items-center
  justify-center
  gap-4

  w-[256px]
  py-8

  bg-background_800
  
  border
  border-y-2
  border-[#152f3d]
  border-opacity-60


`

export const Form = tw.form`
  w-[348px]
  flex
  flex-col

  font-roboto
  text-gray_200
`

export const Input = tw.input`
  w-full
  h-12

  text-white
  bg-transparent

  mt-2
  p-2
  pl-2
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
export const PaymentStatus = tw.div`
  w-full
  flex
  flex-col
  items-center
  gap-9

  font-roboto
  text-gray_300
  text-2xl
`





