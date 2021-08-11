import React from 'react'
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmojiResultRow from '../EmojiResultRow'

const emojiData = {
  "title": "100",
  "symbol": "💯",
  "keywords":
      "hundred points symbol symbol wow wow win win perfect perfect parties parties"
}

it('should have 100', function() {
  render(<EmojiResultRow
      key={emojiData.title}
      symbol={emojiData.symbol}
      title={emojiData.title}
  />)

  let el = screen.getByText(emojiData.title)
  expect(el).toBeInTheDocument()

});
