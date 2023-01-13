import React from 'react'
import Button from "./Button";
import { render ,screen , fireEvent,cleanup} from '@testing-library/react';
import Counter from './Counter';


it("should render" , ()=>{
    render(<Counter />)
    expect(screen.getByTestId("Counter")).toBeInTheDocument()
    expect(screen.getByTestId("count-value")).toBeInTheDocument()
    expect(screen.getByTestId("minus-button")).toBeInTheDocument()
    expect(screen.getByTestId("plus-button")).toBeInTheDocument()
    expect(screen.getByTestId("count-value")).toToHaveTextContent(0)
})

it("should increment count when clicked on increment button",()=>{
    render(<Counter/>)
    let incButton=screen.getByTestId("plus-button")
    let decButton=screen.getByTestId("minus-button")

    for(let i=0;i<5;i++){
        fireEvent.click(incButton)
    }
    fireEvent.click(screen.getByTestId("count-value")).toToHaveTextContent(5)
    for(let i=0;i<2;i++){
        fireEvent.click(decButton)
    }
    fireEvent.click(screen.getByTestId("count-value")).toToHaveTextContent(3)
    
})

afterEach(()=>{
    cleanup()
})