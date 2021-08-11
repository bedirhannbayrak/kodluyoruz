import React from 'react'

import { Button } from 'patika-button'
import 'patika-button/dist/index.css'

const App = () => {
  return <>
    <Button text="asdadsa" type="primary" className="secondary" />
    <Button text="asdadsa" type="dashed" className="secondary" />
    <Button text="asdadsa" type="text" className="secondary" />
    <Button text="asdadsa" type="link" className="secondary" />
  </>
}

export default App
