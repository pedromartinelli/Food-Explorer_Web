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

  text-white


  `

export const Section = tw.div`
  w-screen
  px-6

  xl:px-0
  xl:w-[1120px]

  flex
  flex-col

  `


export const OrderList = tw.div`  
  w-full
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
text-white
  
  flex
  flex-col
  items-center
  lg:items-start

  mt-6
  sm:mt-0
`

export const PaymentSession = tw.div`
  w-[full]
  h-[530px]


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

  w-[170px]
  sm:w-[200px]
  lg:w-[222px]
  xl:w-[275px]

  py-8

  bg-background_800
  
  border
  border-y-2
  border-[#152f3d]
  border-opacity-60
`


export const Form = tw.form`
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

  mt-[50px]

  text-center

  font-roboto
  text-gray_300
  text-2xl
`





