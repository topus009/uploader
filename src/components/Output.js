import React from 'react';
import Item from './Item';

const Output = ({result, type, delete_item, style}) => {
  const items = result.map((item, index) => {
    return (
      <Item
        key={'item_' + index}
        data={item}
        index={index}
        item_type={type}
        delete_item={delete_item}
      />
    )
  });

  return (
    <div className='output' style={style}>
      {items}
    </div>
  )
}

export default Output;
