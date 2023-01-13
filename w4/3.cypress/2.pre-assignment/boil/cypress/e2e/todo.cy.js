
const postTodo={id:2,value:"Arun",isCompleted:true}
describe('template spec', () => {
  beforeEach('passes', () => {
    cy.visit('http://localhost:3000')
  })

  it ("should render all Html elements",()=>{
    cy.get("[data-testid=todo-input]")
    cy.get("[data-testid=todo-button]")
  
    
  })

  it("tods from API response should Be there in DOM", ()=>{
    cy.intercept("GET","http://localhost:4004/todos",[
      {
        value:"A",
        isCompleted:true,
        id:1
      }
    ]).as("getTodos")

    cy.wait("@getTodos")

    cy.get("[data-testid=todo-item-value]").eq(0).should("contain","A")
  })

  it("should allow us to type and add new todo",()=>{
    cy.intercept("POST","http://localhost:4004/todos",postTodo).as("postTodo")

    cy.get("[data-testid=todo-input]").type(postTodo.value)

    cy.get("[data-testid=todo-button]").click()
    cy.wait("@postTodo")

    cy.get("[data-testid=todo-item-value]")
    .eq(-1)
    .should("contain",postTodo.value)
  })
})

