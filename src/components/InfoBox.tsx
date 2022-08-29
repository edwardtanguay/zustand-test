import { useStore} from '../store';

export const InfoBox = () => {
	const store = useStore((state) => state);

	return (
		<div className="infoBox">
			[{store.message}]
		</div>
	);
};