// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders smartVault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/smartVault/i);
    expect(titleElement).toBeInTheDocument();
});
