import React from 'react'
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../Header'

describe('Todo testleri', () => {
  let header;

  beforeEach(() => {
    render(<Header/>);

    header = screen.getByText('Emoji Search');

  });

  test('Header dökümanda bulunmalı', () => {
    screen.debug()
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Emoji Search");
  });

});