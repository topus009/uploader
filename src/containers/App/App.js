import React, { Fragment } from 'react';
import Upload from '../../components/Upload';
import { files, images } from './data';

const App = () => {
  return (
    <Fragment>
      <Upload
        type='file'
        value={files}
        width={['px', 500]}
        minWidth={['px', 320]}
      />
      <Upload
        type='image'
        value={images}
        width={['%', 90]}
        minWidth={['px', 360]}
      />
    </Fragment>
  )
}

export default App

