import React from 'react'
import {render, screen } from '@testing-library/react';
import '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event'
import EmojiResults from '../EmojiResults'

const emojiData = [
  {
    "title": "100",
    "symbol": "💯",
    "keywords":
        "hundred points symbol symbol wow wow win win perfect perfect parties parties"
  },
  {
    "title": "1234",
    "symbol": "🔢",
    "keywords": "input symbol for numbers symbol"
  }
]

it('should have 100', async function() {
  const {container} = render(<EmojiResults emojiData={emojiData}/>)

  let el = await screen.findByText("100")
  let all = await container.querySelectorAll('[class~="component-emoji-result-row"]')
  expect(el).toBeInTheDocument()
  expect(el).toHaveTextContent("100")
  expect(all).toHaveLength(2)
  userEvent.click(el)

  let newEl = document.createElement("input")

  let copied ;
  newEl.addEventListener('click',(e) => {
    copied = (e.clipboardData || window.clipboardData).getData('text');
  })

  console.log(copied)

  container.appendChild(newEl)
  let input = screen.getByRole("textbox")
  userEvent.click(input)
  console.log(input.value)
})
