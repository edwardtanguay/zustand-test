import { useStore, AppState } from '../store';

export const First = () => {
	const count = useStore((state: AppState) => state.count);

	return (
		<>
			<p>{count}</p>
		</>
	);
};