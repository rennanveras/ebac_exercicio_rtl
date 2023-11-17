import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
	test('Deve renderizar o componente corretamente', () => {
		render(<PostComment/>);
		expect(screen.getByText('Comentar')).toBeInTheDocument();
	});

	test('Teste para inserir dois comentários', () => {
		render(<PostComment/>)
		fireEvent.change(screen.getByTestId('campo-tarefa'), {
			target: {
				value: 'Amei parabens'
			}
		});
		fireEvent.click(screen.getByTestId('btn-comentar'));

		fireEvent.change(screen.getByTestId('campo-tarefa'), {
			target: {
				value: 'Não gostei, quebra!'
			}
		})
		fireEvent.click(screen.getByTestId('btn-comentar'));
		
		expect(screen.getByText('Amei parabens')).toBeInTheDocument();
		expect(screen.getByText('Não gostei, quebra!')).toBeInTheDocument();
	});
});