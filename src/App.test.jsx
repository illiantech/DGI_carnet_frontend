import React from 'react';
import { describe, test, expect, beforeAll, afterEach, afterAll, beforeEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { server } from './mocks/node';
import userEvent from '@testing-library/user-event';
import App from './App';
import 'intersection-observer';

describe('<App/> <User/>', () => {
	// test('should work', () => {
	// 	const { getByText } = render(<App />);
	// 	screen.debug();

	// 	expect(getByText('Buscar')).toBeDefined();
	// });
	beforeEach(() => {
		cleanup();
	});

	beforeAll(() => server.listen());
	afterEach(() => server.resetHandlers());
	afterAll(() => server.close());

	test('should indicate fields empty', async () => {
		render(<App />);

		const form = screen.getByRole('form');
		expect(form).toBeDefined();

		// buscar sin campos llenos
		const buttonForm = form.querySelector('button');

		await userEvent.click(buttonForm);
		const emptyFields = screen.getByText('Rellene los campos');
		expect(emptyFields).toBeDefined();
	});

	test('should search items, delete item and update check item', async () => {
		render(<App />);

		const form = screen.getByRole('form');
		expect(form).toBeDefined();

		// buscar input nombre
		const inputName = screen.getByRole('searchbox');
		const buttonForm = form.querySelector('button');

		const sectionUser = screen.getByRole('section-user');

		await userEvent.type(inputName, 'adara');
		const mockName = inputName.value;
		expect(mockName).toBeDefined();

		await userEvent.click(buttonForm);

		expect(sectionUser.children).toHaveLength(2);

		const user = sectionUser.children[0];
		expect(user).toBeDefined();

		expect(screen.getAllByText('Cargo')).toBeDefined();
		expect(user.innerText).toMatch(mockName);

		const buttonDeleteUserOne = user.querySelector('button');

		await userEvent.click(buttonDeleteUserOne);

		expect(sectionUser.children).toHaveLength(1);

		// const buttonCheckUser = user.querySelector('.check-user').firstElementChild;

		// await userEvent.click(buttonCheckUser);

		// const timeCheckUser = user.querySelector('.check-user').lastElementChild;
		// expect(timeCheckUser).toBeDefined();
	});
});
