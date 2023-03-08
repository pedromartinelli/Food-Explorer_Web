// import { GoSearch, GoSignOut, GoThreeBars, GoX, GoStar } from "react-icons/go";
// import { BiFoodMenu } from "react-icons/bi";

import { RiWhatsappLine } from "react-icons/ri"
import { fav, order, signOut, saladaRavanello, saladaMolla, spaguettiGambe, torradasdeParma } from "../assets"

export const navMenu = [
  {
    title: "Favoritos",
    icon: fav,
    nav: '/favorites',
  },
  {
    title: "Meu pedido",
    icon: order,
    nav: '/cart',
  },
  {
    title: "Sair",
    icon: signOut,
    nav: '/',
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
  {
    id: 5,
    title: 'Salada Molla',
    description: 'Tomates, coentro, pepino, cebola roxa. Frescos e temperados.',
    price: 1999,
    image: saladaMolla,
  },
  {
    id: 6,
    title: 'Salada Molla',
    description: 'Tomates, coentro, pepino, cebola roxa. Frescos e temperados.',
    price: 1999,
    image: saladaMolla,
  },
]


const pedido01 = exampleFoods.find(x => x.id === 1)
const pedido02 = exampleFoods.find(x => x.id === 2)
const pedido03 = exampleFoods.find(x => x.id === 3)
const pedido04 = exampleFoods.find(x => x.id === 4)

export const orders = [
  {
    id: 1,
    status: 'Pendente',
    total_price: '15900',
    date: 'Sex 24 fevereiro 2023',
  },
  {
    id: 2,
    status: 'Pendente',
    total_price: '20000',
    date: 'Sex 23 fevereiro 2023',
  },
  {
    id: 3,
    status: 'Pendente',
    total_price: '8000',
    date: 'Sex 22 fevereiro 2023',
  },
  {
    id: 4,
    status: 'Pendente',
    total_price: '5000',
    date: 'Sex 21 fevereiro 2023',
  },
  {
    id: 4,
    status: 'Pendente',
    total_price: '5000',
    date: 'Sex 21 fevereiro 2023',
  },
  {
    id: 4,
    status: 'Pendente',
    total_price: '5000',
    date: 'Sex 21 fevereiro 2023',
  },
]