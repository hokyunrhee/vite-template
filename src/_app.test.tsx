import App from "./_app"
import { render, screen, userEvent } from "./utils/test"

describe("Simple working test", () => {
  it("the title is visible", () => {
    render(<App />)

    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument()
  })

  it("should increment count on click", async () => {
    render(<App />)

    await userEvent.click(screen.getByRole("button"))

    expect(await screen.findByText(/count is 1/i)).toBeInTheDocument()
  })
})
