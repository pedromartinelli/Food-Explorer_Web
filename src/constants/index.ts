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
    title: "Meus pedidos",
    icon: order,
    nav: '/orders',
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

console.log(exampleFoods.length)

const pedido01 = exampleFoods.find(x => x.id === 1)
const pedido02 = exampleFoods.find(x => x.id === 2)
const pedido03 = exampleFoods.find(x => x.id === 3)
const pedido04 = exampleFoods.find(x => x.id === 4)

export const orders = [
  {
    id: 1,
    status: 'Entregue',
    total_price: '',
    date:'',
  },
  {
    id: 2,
    status: 'Entregue',
    total_price: '',
    date:'',
  },
  {
    id: 3,
    status: 'Entregue',
    total_price: '',
    date:'',
  },
  {
    id: 4,
    status: 'Entregue',
    total_price: '',
    date:'',
  }, 
]

// const teste = [orders.filter(x => x.id === 1)]

// console.log(teste)

export const order_enrollment = [
  {
    id: 1,
    order: orders.filter(x => x.id === 1),
    foods: exampleFoods.filter(function (x) {
      let ids = [1, 2 ,3]
      return ids.includes(x.id)
    })
  },
  {
    id: 2,
    order: orders.filter(x => x.id === 2),
    foods: exampleFoods.filter(function (x) {
      let ids = [3, 4]
      return ids.includes(x.id)
    })
  },
]

// console.log(order_enrollment)
// console.log(order_enrollment.filter(x => x.foods))


// console.log(orders)


// const testefind = orders.find(x => x.itens.find(y => y?.id === 1))

// console.log(testefind)
