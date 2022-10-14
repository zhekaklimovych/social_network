import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './pages/Dialogs/DialogsContainer';
import Home from './pages/Home/Home';
import UsersContainer from './pages/Users/UsersContainer';
import ProfileContainer from "./pages/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

import './App.css';


const App = () => {
	return (
		<div className='app-wrapper'>
			<HeaderContainer />
			<Navbar />

			<div className='app-wrapper-content'>
				<div className='app-content-main'>
					<Routes>
						<Route path = '/*' element={<Home />}></Route>
						<Route path='/profile/' element={<ProfileContainer />}></Route>
						<Route path='/profile/:userId' element={<ProfileContainer />}></Route>
						<Route path ='/dialogs/*' element={<DialogsContainer />}></Route>
						<Route path ='/users' element={<UsersContainer />}></Route>
						<Route path ='/login' element={<Login/>}></Route>
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;