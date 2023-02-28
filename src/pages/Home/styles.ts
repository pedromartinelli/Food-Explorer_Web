import tw from 'tailwind-styled-components'

export const Container = tw.div`
  p-0
  m-0
  box-border
 
  bg-background_900
 
  min-h-screen
  
`
export const Section = tw.div`
  w-full
  gap-8
  
  flex
  flex-col
  items-center

  xl:items-start

  my-6
  xl:my-16
`

export const Card = tw.div`
  flex
  flex-col
  text-center
  
  mt-10
  
  w-fit
  pt-14
  pb-10
  px-11

  relative
`

export const CardWrapper = tw.div`
  
`