import tw from 'tailwind-styled-components'

export const Container = tw.div`
  pb-0
  m-0
  box-border
 
  bg-background_900
 
  min-h-screen
  w-full

  flex 
  flex-col

  `
// max-w-screen
export const Section = tw.div`
  sm:w-full
  
  flex
  flex-col  
  lg:flex-row

  xl:ml-0
  mt-8
  lg:px-10

  sm:gap-[150px]
  `
// gap-20
// xl:gap-10

export const OrderList = tw.div`  
  w-full
  lg:w-[400px]
  xl:w-[550px]
  
  text-white
  text-start
  
  flex
  flex-col
  items-center
  lg:items-start
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
  w-[340px]  
  sm:w-[530px]

text-white
  
  flex
  flex-col
  items-center
  lg:items-start

  mt-14
  sm:mt-0

`

export const PaymentSession = tw.div`
  flex
  flex-col
  items-center
  
  gap-10
  pb-12

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

  w-[140px]
  lg:w-[200px]
  xl:w-[256px]

  py-8

  bg-background_800
  
  border
  border-y-2
  border-[#152f3d]
  border-opacity-60
`


export const Form = tw.form`
  sm:w-[348px]
  flex
  flex-col
  
  font-roboto
  text-gray_200
`

export const Input = tw.input`
  
  text-white
  bg-transparent

  h-12
  mt-2
  p-2

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

  text-center

  font-roboto
  text-gray_300
  text-2xl
`





