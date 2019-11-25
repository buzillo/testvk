import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import FormLayoutGroup from '@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

const Rolf = () => (
	<Panel id='phone'>



			<Div>
                <FormLayout>
                  <FormLayoutGroup top="Пароль" bottom="Пароль может содержать только латинские буквы и цифры.">
                    <Input type="password" placeholder="Введите пароль" />
                    <Input type="password" placeholder="Повторите пароль" />
                  </FormLayoutGroup>
                </FormLayout>
			</Div>

	</Panel>
);



export default Rolf;
