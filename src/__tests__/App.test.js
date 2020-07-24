import React from 'react';
import App from '../App';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';

test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

/* Test 404 page */
test('landing on a bad page shows 404 page', () => {
    const history = createMemoryHistory();
    history.push('/some/bad/route');
    const { getByRole } = render(
        <Router history={history}>
            <App />
        </Router>
    );
    expect(getByRole('heading')).toHaveTextContent('404 Not Found');
});

test('full app navigation', () => {
    const history = createMemoryHistory();
    const { container, getByText } = render(
        <Router history={history}>
            <App />
        </Router>
    );
    // verify page content for expected route
    // often you'd use a data-testid or role query, but this is also possible
    expect(container.innerHTML).toMatch('Silence is golden!');

    fireEvent.click(getByText(/auth/i));

    // check that the content changed to the new page
    expect(container.innerHTML).toMatch('Silence is golden!');
});
