
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';
import { describe, expect, it } from 'vitest'

describe("Test ErrorBoundary Component", () => {

    it("should have a go home button", () => {
        render(<ErrorBoundary />);
        expect(screen.getByText(/Volver al inicio/i)).toBeDefined();
    })

    it("should have an image with alternative text", () => {
        render(<ErrorBoundary />);
        expect(screen.getByAltText(/404/i)).toBeDefined();
    })

})


