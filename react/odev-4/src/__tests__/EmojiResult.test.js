import React from 'react'
import {render, screen} from '@testing-library/react';
import '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
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
})
