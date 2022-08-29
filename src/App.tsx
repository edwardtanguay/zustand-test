import { useStore } from './store';
import './App.scss';
import { InfoBox } from './components/InfoBox';

function App() {
	const store = useStore((state) => state);

	return (
		<div className="App">
			<h1>Zustand Test</h1>
			<div className="data"><label>Message:</label> <input type="text" value={store.message} onChange={(e) => store.setMessage(e.target.value)} /> </div>
			
			<div className="colors">
				{store.colors.map((color) => color).join(', ')}
			</div>
			<button onClick={() => store.setColors(['dfd','skfjsfsdf','skdjfdkf'])}>set colors</button>
			<button onClick={() => store.addColor('nnnnn')}>add color</button>
			<hr />
			<InfoBox />
		</div>
	);
}

export default App;
