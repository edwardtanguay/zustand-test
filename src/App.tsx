import { useStore } from './store';
import './App.scss';
import { InfoBox } from './components/InfoBox';

function App() {
	const store = useStore((state) => state);

	return (
		<div className="App">
			<h1>Zustand Test</h1>

			<main>
				<section className="controlArea">
					<div className="data">
						<label>Message:</label>
						<input
							type="text"
							value={store.message}
							onChange={(e) => store.setMessage(e.target.value)}
						/>
					</div>

					<div className="data">
						<label>Colors:</label>
						<div>
							<button onClick={() => store.addColor('blue')}>
								blue
							</button>
							<button onClick={() => store.addColor('red')}>
								red
							</button>
							<button onClick={() => store.addColor('yellow')}>
								yellow
							</button>
						</div>
						<button onClick={() => store.deleteColor()}>
							delete color
						</button>
						<button onClick={() => store.setColors([])}>
							delete all colors
						</button>
					</div>

					<div className="data">
						<label>Object:</label>
						<div>
							<button
								onClick={() =>
									store.toggleCurrentUserStatusOnline()
								}
							>
								toggle online status
							</button>
							<button
								onClick={() =>
									store.toggleCurrentUserStatusEmail()
								}
							>
								toggle email status
							</button>
						</div>
					</div>

					<div className="data">
						<label>Change multiple values:</label>
						<div>
							<button
								onClick={() => store.deleteVowelsAndColorRed()}
							>
								delete vowels from message and color red from
								colors
							</button>
						</div>
					</div>

					<div className="data">
						<label>Load data</label>
						<div>
							<button onClick={() => store.loadTechBooks()}>
								load tech books
							</button>
						</div>
					</div>
				</section>
				<section className="dataArea">
					<InfoBox />
				</section>
			</main>
		</div>
	);
}

export default App;
