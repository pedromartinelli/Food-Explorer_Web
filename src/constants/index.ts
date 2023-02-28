// import { GoSearch, GoSignOut, GoThreeBars, GoX, GoStar } from "react-icons/go";
// import { BiFoodMenu } from "react-icons/bi";

import { fav, order, signOut, saladaRavanello, saladaMolla, spaguettiGambe, torradasdeParma } from "../assets"

export const navMenu = [
  {
    title: "Favoritos",
    icon: fav,
  },
  {
    title: "Meus pedidos",
    icon: order,
  },
  {
    title: "Sair",
    icon: signOut,
  },
]

export const exampleFoods = [
  {
    id: 1,
    title: 'Salada Ravanello',
    description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.',
    price: 4999,
    image: saladaRavanello,
  },
  {
    id: 2,
    title: 'Torradas de Parma',
    description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
    price: 2599,
    image: torradasdeParma,
  },
  {
    id: 3,
    title: 'Spaguetti Gambe',
    description: 'Massa fresca com camarões e pesto.',
    price: 7999,
    image: spaguettiGambe,
  },
  {
    id: 4,
    title: 'Salada Molla',
    description: 'Tomates, coentro, pepino, cebola roxa. Frescos e temperados.',
    price: 1999,
    image: saladaMolla,
  },
]