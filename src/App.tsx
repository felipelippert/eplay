import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCss } from './styles'
import Product from './components/Product'
import ProductsList from './components/ProductsList'

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductsList title="Deals" background="gray" />
        <ProductsList title="Soon" background="black" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
