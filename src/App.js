import "./App.css";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
	return (
		<>
			<Navbar />
			
			<ItemListContainer greeting='Bienvenido' text='Lorem ipsum dolor sit amet. Id amet iusto aut delenit' relleno='relleno del prop'/>
		</>
	);
};

export default App;
