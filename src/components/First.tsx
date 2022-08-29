import { useStore, AppState } from '../appStore';

export const First = () => {
	const count = useStore((state: AppState) => state.count);

	return (
		<>
			<p>{count}</p>
		</>
	);
};