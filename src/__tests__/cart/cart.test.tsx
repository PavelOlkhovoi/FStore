import React from "react";
import { render, screen } from "@testing-library/react";
import Cart, { Props } from '../../pages/Cart'
import '@testing-library/jest-dom/extend-expect';


test('Remders the cart page', () => {
    render(<Cart test={"12345"} />)
    const myDiv = screen.getByText(/cart/i)
    expect(myDiv).toBeInTheDocument()
})