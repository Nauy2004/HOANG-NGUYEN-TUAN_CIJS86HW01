import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './compo/header'
import About from './page/about/about'
import Cart from './page/cart/Cart'
import Products from './page/products/products'
import Profile from './page/profile/profile'
import Login from './page/auth/login'
import Register from './page/auth/register'
import Invoices from './page/invoices/invoices'
import { AppProvier } from './context/Context'

export default function App() {
	return (
		<>
			<AppProvier>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Products" element={<Products />} />
					<Route path="/Invoices" element={<Invoices />} />
					<Route path="/Cart" element={<Cart />} />
					<Route path="/Profile" element={<Profile />} />
					<Route path="/About" element={<About />} />
					<Route path="/auth/Login" element={<Login />} />
					<Route path="/auth/Register" element={<Register />} />
				</Routes>
			</AppProvier>
			<footer>Made by MindX</footer>
		</>
	)
}

const Home = () => {
	return <h1>Home</h1>
}
