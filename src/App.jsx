// import { useState } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import UserProvider from './providers/UserProvider';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	// const [userActive, setUserActive] = useState('');
	return (
		<UserProvider>
			<GlobalStyles />
			{/* <Header userActive={userActive} setUserActive={setUserActive} />
			<Main userActive={userActive} setUserActive={setUserActive} /> */}
			<Header />
			<Main />
		</UserProvider>
	);
};

export default App;
