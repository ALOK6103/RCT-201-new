import Button from "./Button";
import { render ,screen , fireEvent,cleanup} from '@testing-library/react';
it("should render",()=>{

    render(
        <Button />
    )
    expect(screen.getByTestId("inc")).toBeInTheDocument()
    expect(screen.getByTestId("inc")).toHaveTextContent("Add")
})

it("should render Content",()=>{

    render(
        <Button />
    )
    expect(screen.getByTestId("inc")).toBeInTheDocument()
    expect(screen.getByTestId("inc")).toHaveTextContent("Add")
})


it("should render value",()=>{

    render(
        <Button />
    )
    expect(screen.getByTestId("value")).toBeInTheDocument()
    expect(screen.getByTestId("value")).toHaveTextContent(0)
})

it("increase value",()=>{
    
    render(
        <Button />
    )
    //  let incBt=screen.getByText("Add")
    // for(let i=0;i<3;i++){
    //     fireEvent.click(incBt)
    // }
    // fireEvent.click(incBt);
//   expect(screen.getByTestId("value")).toHaveTextContent(20);
    
    fireEvent.click(screen.getByText("Add"));
  expect(screen.getByTestId("value")).toHaveTextContent(5);

})

it("decrese value",()=>{
    render(
        <Button />
    )

    fireEvent.click(screen.getByText("Reduce"));
  expect(screen.getByTestId("value")).toHaveTextContent(-5);
})
afterEach(()=>{
    cleanup()
})