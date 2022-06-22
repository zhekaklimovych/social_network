import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Content/Profile/Profile';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import Settings from './components/Content/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Content/Dialogs/Dialogs';
import Home from './components/Content/Home/Home';

import './App.css';

import { Route, Routes } from 'react-router-dom';

const App = (props) => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<Sidebar state={props.state.sidebar} />
			
			<div className='app-wrapper-content'>
				<div className='app-content-main'>
					<Routes>
						<Route path = '/*' element={<Home />}></Route>
						<Route 
							path ='/profile' 
							element={<Profile store={props.store}/>}>
						</Route>
						<Route 
							path ='/dialogs/*' 
							element={
								<Dialogs 
									dialogsPage={props.state.dialogsPage}
									dispatch={props.dispatch}
								/>}>
						</Route>
						<Route path ='/news' element={<News/>}></Route>
						<Route path ='/music' element={<Music/>}></Route>
						<Route path ='/settings' element={<Settings/>}></Route>
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;