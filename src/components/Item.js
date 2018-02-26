import React, { Fragment } from 'react';

const Item = ({data, index, item_type, delete_item}) => {
  let render_item;

  if (item_type === 'image') {
    render_item =
    // ================ IMAGE ===============
      <Fragment>
        <img className="image" src={data.res} alt='img'/>
        <div className="name">{data.name}</div>
        <div
          className="delete"
          onClick={(e) => {delete_item(index); e.preventDefault();}}>X</div>
      </Fragment>
      // ================ IMAGE-end =========
  } else {
    render_item =
    // ================ FILE ================
      <Fragment>
        <span className='name'>{data.name}</span>
        <span className='size'>{data.size} kb</span>
        <span
          className='delete'
          onClick={(e) => {delete_item(index); e.preventDefault();}}
        >X</span>
      </Fragment>
    // ================ FILE-end ============
  }

  return <div className={`item-${item_type}`}>{render_item}</div>
}

export default Item;