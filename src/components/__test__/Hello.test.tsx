import { screen, render } from '@testing-library/react'
import Hello from '../Hello'

describe('hello components', () => {
  it('renders', () => {
    render(<Hello />)

    expect(screen.getByText(/hello/i)).toBeInTheDocument()
  })
})
