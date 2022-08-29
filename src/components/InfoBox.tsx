import { useStore} from '../store';

export const InfoBox = () => {
	const store = useStore((state) => state);

	return (
		<div className="infoBox">
			<h2>Another component:</h2>
			<div>Message: <span className="theValue">{store.message}</span></div>
			<div>Colors: <span className="theValue">{store.colors.map(m => m).join(', ')}</span></div>
			<div>User is online: <span className="theValue">{store.currentUserStatus.isOnline ? 'yes' : 'no'}</span></div>
			<div>User's email is valid: <span className="theValue">{store.currentUserStatus.emailIsConfirmed ? 'yes' : 'no'}</span></div>
		</div>
	);
};