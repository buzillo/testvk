import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import Checkbox from "@vkontakte/vkui/dist/components/Checkbox/Checkbox";


const Home = ({ id, go, fetchedUser, fetchedUserPhone }) => (
	<Panel id={id}>
		<PanelHeader>Панель</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Connect">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''  }
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name} `}
			</Cell>
		</Group>}

		<Group title="Навигашка">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
				1
				</Button>
					<Button size="xl" level="2" onClick={go} data-to="call">
				2
				</Button>
			</Div>
		</Group>
			<Group title="Навигашка">

		<Div>
                <FormLayout>
                  <FormLayoutGroup top="Пароль" bottom="Пароль может содержать только латинские буквы и цифры.">
                    <Input type="password" placeholder="Введите пароль" />
                    <Input type="password" placeholder="Повторите пароль" />
					  <Checkbox> Я со всем согласен</Checkbox>
                  </FormLayoutGroup>
                </FormLayout>
			</Div>
			</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),


	}),
};

export default Home;
