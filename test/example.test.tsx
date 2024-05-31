// tests/example.test.tsx
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

// Un componente simple para probar
const HelloWorld = () => <div>Hello, world!</div>

test('renders hello world', () => {
  render(<HelloWorld />)
  const helloWorldElement = screen.getByText(/hello, world!/i)
  expect(helloWorldElement).toBeInTheDocument()
})
