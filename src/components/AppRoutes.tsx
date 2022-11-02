import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
// import Orders from '../pages/Orders'
import Product from '../pages/Product';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Login from '../pages/user/Login';
import IsAuthed from '../HOCs/IsAthed';
import UserDashboard from '../pages/user/UserDashboard';
import Logout from '../pages/user/Logout';
import SimpleOrder from '../pages/user/SimpleOrder';

const AppRoutes = () => {
    return (
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path='orders' element={<Orders />}/> */}
            <Route path='products/:productId' element={<Product />} />
            <Route path='cart' element={<Cart />} />
            <Route path='login' element={<Login />} />
            <Route path='logout' element={<Logout />} />

            <Route path='dashboard' element={
              <IsAuthed >
                <UserDashboard/>
              </IsAuthed>
            }></Route>

            <Route path='order/:orderId' element={
              <IsAuthed >
                <SimpleOrder/>
              </IsAuthed>
            }></Route>

            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
          }
        />
          </Route>
      </Routes>
    )
}

export default AppRoutes