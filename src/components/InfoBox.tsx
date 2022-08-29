import { useStore} from '../store';

export const InfoBox = () => {
	const store = useStore((state) => state);

	return (
		<div className="infoBox">
			<h2>Another component:</h2>
			<div className="row">Message: <span className="theValue">{store.message}</span></div>
			<div className="row">Colors: <span className="theValue">{store.colors.map(m => m).join(', ')}</span></div>
			<div className="row">User is online: <span className="theValue">{store.currentUserStatus.isOnline ? 'yes' : 'no'}</span></div>
			<div className="row">User's email is valid: <span className="theValue">{store.currentUserStatus.emailIsConfirmed ? 'yes' : 'no'}</span></div>
			<div className="row">TechBooks:
			<ul>
					{store.techBooks.map((techBook, i) => {
						return (
							<li key={i}>{techBook.title}</li>
				)
			})}
			</ul>	
			</div>
		</div>
	);
};