import { useContext } from 'react';
import { StyledUser, StyledUserImage } from './styles';
import { UserContext } from '../../contexts/UserContext';

const User = ({ name, age, email, image }) => {
	const { userActive, setUserActive } = useContext(UserContext);
	return (
		<StyledUser>
			<StyledUserImage
				src={image}
				alt={`image profile of ${name}`}
			/>
			<h2>{name}</h2>
			<p>{age}</p>
			<button
				onClick={() => setUserActive(name)}
				disabled={userActive === name}
			>
				Activate User
			</button>
		</StyledUser>
	);
};

export default User;
