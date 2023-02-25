// import { GoSearch, GoSignOut, GoThreeBars, GoX, GoStar } from "react-icons/go";
// import { BiFoodMenu } from "react-icons/bi";

import signOut from "../assets/signOut.svg";
import fav from "../assets/fav.svg";
import order from "../assets/order.svg";

export const navMenu = [
  {
    id: "favoritos",
    title: "Favoritos",
    icon: fav,
  },
  {
    id: "meus-pedidos",
    title: "Meus pedidos",
    icon: order,
  },
  {
    id: "sair",
    title: "Sair",
    icon: signOut,
  },
]