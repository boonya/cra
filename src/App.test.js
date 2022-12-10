import {screen} from '@testing-library/react';
import App from '@src/App';
import {renderComponent} from '@test/render';

function render() {
	return renderComponent(<App />);
}

it('should render an App', () => {
	render();

	screen.getByRole('heading', {name: 'My own version of Create React App'});
});
