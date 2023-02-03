import tw from 'tailwind-styled-components'

export const Container = tw.div`
  pb-
  m-0
  box-border
 
  bg-background_800
  sm:bg-background_900
 
  min-h-screen
  max-w-screen
  
  flex 
  flex-col
  
`
export const Section = tw.div`
  w-full
  
  flex
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

export const PaymentMethod = tw.button`
text-white
w-64
h-20

border
`

