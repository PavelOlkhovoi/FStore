import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { testStore } from "./configStore"
import React, { ReactNode } from "react"

export const renderWithRouter = (component: ReactNode) => {
    return render(
        <MemoryRouter>
            <Provider store={testStore()}>
                {component}
            </Provider>
        </MemoryRouter>
    )
}

// TODO: Redo 
describe('Redo', ()=> {
    test ('test', ()=> {
        expect('test').toBe('test')
    })
})