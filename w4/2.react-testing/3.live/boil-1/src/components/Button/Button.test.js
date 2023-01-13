import React from 'react'
import Button from "./Button";
import { render ,screen , fireEvent,cleanup} from '@testing-library/react';

it("should render" , ()=>{
      render(<Button label={"Hello World"}/>);
      expect(screen.getByTestId("button")).toBeInTheDocument()

})


it("should render with label",()=>{
    let label="Hello World"

    render(<Button label={label}/>)
    expect(screen.getByTestId("button")).toBeInTheDocument()
    expect(screen.getByTestId("button")).toHaveTextContent(label)
})

it("should execute onclick function when clicked",()=>{
    let fn=jest.fn();
    render(<Button label="Button" onClick={fn} />)
    fireEvent.click(screen.getByTestId("button"))
    expect(fn).toBeCalled()
})

afterEach(()=>{
    cleanup()
})