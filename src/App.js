import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import Settings from './components/Content/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import DialogsContainer from './components/Content/Dialogs/DialogsContainer';
import Home from './components/Content/Home/Home';
import UsersContainer from './components/Content/Users/UsersContainer';
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

import './App.css';


const App = () => {
	return (
		<div className='app-wrapper'>
			<HeaderContainer />
			<Navbar />
			{/* <Sidebar state={props.state.sidebar} /> */}
			
			<div className='app-wrapper-content'>
				<div className='app-content-main'>
					<Routes>
						<Route path = '/*' element={<Home />}></Route>
						<Route path='/profile/' element={<ProfileContainer />}></Route>
						<Route path='/profile/:userId' element={<ProfileContainer />}></Route>
						<Route path ='/dialogs/*' element={<DialogsContainer />}></Route>
						<Route path ='/users' element={<UsersContainer />}></Route>
						<Route path ='/news' element={<News/>}></Route>
						<Route path ='/music' element={<Music/>}></Route>
						<Route path ='/settings' element={<Settings/>}></Route>
						<Route path ='/login' element={<Login/>}></Route>
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;