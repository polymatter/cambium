import PlateauSquare from './PlateauSquare';
import Plateau from './Plateau';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

it("renders at least one square", () => {
    const square = 3;
    render(<PlateauSquare/>);
});