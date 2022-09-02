import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import MiNavbar from "./components/NavBar";
// import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
	return (
		<>
			<MiNavbar />
			
			{/* <ItemDetailContainer/> */}
			<ItemListContainer />
		</>
	);
};

export default App;
