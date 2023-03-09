import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Cart } from '../pages/Cart'
import { Orders } from '../pages/Orders'
import { NewDish } from '../pages/NewDish'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details' element={<Details />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/newdish' element={<NewDish />} />
    </Routes>
  );
}