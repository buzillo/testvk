import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import Root from '@vkontakte/vkui/dist/components/View/View';
import Form from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Call from './panels/Call';
import Rolf from './panels/Rolf';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [fetchedUserPhone, setUserPhone] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);




	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
			
		}

		fetchData();

			async function fetchDataTwo() {

			const userphone = await connect.send("VKWebAppGetPersonalCard", {"type": ["phone"]});
			setUserPhone(userphone);
			setPopout(null);
		}

		fetchDataTwo();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		 <Root activeView="view">
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} fetchedUserPhone={fetchedUserPhone} go={go} />
			<Persik id='persik' go={go} />
				<Call id='call' go={go} />
				</View>


			 <View >
			<Rolf id='phone'   />


		</View>

			 </Root>

	);
}

export default App;

