import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import MiNavbar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

const App = () => {
	return (
		<>
			<BrowserRouter>
			<MiNavbar/>

			<Routes>
				<Route path="/" element={<ItemListContainer />}/>
				<Route path="/category/:id" element={<ItemListContainer/>}/>
				<Route path="/item/:id" element={<ItemDetailContainer/>}/>
			</Routes>

			<Footer/>
			</BrowserRouter>
		</>
	);
};

export default App;
