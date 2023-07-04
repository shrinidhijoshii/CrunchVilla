import { render } from "@testing-library/react"
import { Header } from "../Header"

test("Check header logo on page render",() => {
    const header = render(<Header/>);
})