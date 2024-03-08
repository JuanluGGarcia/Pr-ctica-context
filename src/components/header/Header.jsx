import { useContext } from 'react';
import { StyledHeader } from './styles';
import { UserContext } from '../../contexts/UserContext';

// const Header = ({ userActive, setUserActive }) => {
const Header = () => {
	const { userActive, setUserActive } = useContext(UserContext);
	return (
		<StyledHeader>
			<h1>Users Control</h1>
			{/* {!userActive && <p>No user active</p>}
			{userActive && ( */}
			{!userActive && <p>No user active</p>}
			{userActive && (
				<>
					{/* <p>User Active: {user.userActive}</p>
					<button onClick={() => setUserActive('')}>Logout User</button> */}
					<p>User Active: {userActive}</p>
					<button onClick={() => setUserActive('')}>Logout User</button>
				</>
			)}
		</StyledHeader>
	);
};

export default Header;
