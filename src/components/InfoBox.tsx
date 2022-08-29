import { useStore} from '../store';

export const InfoBox = () => {
	const store = useStore((state) => state);

	return (
		<div className="infoBox">
			<h2>Another component:</h2>
			<div>Message: <span className="theValue">{store.message}</span></div>
		</div>
	);
};