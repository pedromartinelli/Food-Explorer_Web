import tw from 'tailwind-styled-components'

export const Container = tw.div`
  p-0
  m-0
  box-border
 
  bg-background_900
 
  min-h-screen

  flex
  flex-col
`
export const Section = tw.div`
  w-full
  
  gap-11
  
  flex
  items-center
  flex-col 
  md:flex-row
  
  mt-10
`

export const FoodDetails = tw.div`  
  text-white
 
  flex
  flex-col

  text-center
  md:text-start
`

export const Ingredients = tw.div`
  flex
  gap-4

  mt-6
  mb-10
  
  text-center

`

export const IngredientCard = tw.div`

`