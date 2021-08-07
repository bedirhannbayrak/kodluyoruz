import React from "react";
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/user-event'
import App from "../App";
import userEvent from '@testing-library/user-event'

it("renders without crashing", () => {
  render(<App/>)
  let input = screen.getByRole("textbox")
  expect(screen.getByText(/100/i)).toBeInTheDocument()
  userEvent.type(input,"dog")
  expect(screen.queryAllByText(/dog/i)[0]).toBeInTheDocument()

});
