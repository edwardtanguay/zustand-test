import { useStore } from './store';
import './App.scss';
import { InfoBox } from './components/InfoBox';

function App() {
	const store = useStore((state) => state);

	return (
		<div className="App">
			<h1>Zustand Test</h1>
			<p>Message: {store.message}</p>
			<button onClick={() => store.setMessage('new message')}>
				change message
			</button>
			<button onClick={() => store.setMessage('old message')}>
				change message
			</button>
			<div className="colors">
				{store.colors.map((color) => (
					<div>{color}</div>
				))}
			</div>
			<button onClick={() => store.setColors(['dfd','skfjsfsdf','skdjfdkf'])}>add color</button>
			<hr />
			<InfoBox />
		</div>
	);
}

export default App;
