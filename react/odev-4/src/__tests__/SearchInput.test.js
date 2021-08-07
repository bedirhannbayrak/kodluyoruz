import React from 'react'
import {render, screen} from '@testing-library/react';
import '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import SearchInput from '../SearchInput'
import userEvent from '@testing-library/user-event'

it("SearchInput test" , () => {

  let textChange = jest.fn()

  render(<SearchInput textChange={textChange}/>)
  const input  =screen.getByRole("textbox")
  expect(input).toBeInTheDocument()

  userEvent.type(input,"Test input")
  expect(input).toHaveValue("Test input")

})