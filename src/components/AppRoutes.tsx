import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Orders from '../pages/Orders'
import Product from '../pages/Product';
import Home from '../pages/Home';

const AppRoutes = () => {
    return (
        <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='orders' element={<Orders />}/>
          <Route path='products/:productId' element={<Product />} />

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