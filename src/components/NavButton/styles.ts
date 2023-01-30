import tw from 'tailwind-styled-components'

import { Link } from "react-router-dom";

export const Container = tw(Link)`
bg-white 
font-poppins 

rounded-lg 

p-2 sm:w-[150px] 
h-[60px] 
sm:h-auto 

hover:opacity-80 
hover:scale-105 

focus:opacity-80 
focus:scale-105 

ease-in-out 
duration-300
`

