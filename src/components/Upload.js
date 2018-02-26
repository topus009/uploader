import React from 'react';
import Output from './Output';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: this.props.value ? this.props.value : null,
      classNames: {
        input: '',
        label: '',
      },
    };
  }

  delete_item = (e) => {
    const nextState = this.state.result.filter((i, index) => {return index !== e});
    this.setState({
      result: nextState,
    });
  }

  result = (files) => {
    const { type } = this.props;
    this.setState({
      classNames: {
        input: '',
        label: '',
      },
    });
    const data = [];
    const prevState = this.state.result;
    const filesArray = Array.of(...files);

    filesArray.forEach((f) => {
      const FR = new FileReader();
      const item = {
        name: f.name,
        size: (f.size / 1024).toFixed(1),
        type: f.type,
        res: null,
      };
      if (type === 'image') FR.readAsDataURL(f)
      else FR.readAsText(f)

      FR.onloadend = () => {
        const FR_res = FR.result;
        this.onload_files(FR_res, data, prevState, item);
      };
    });
  }

  onload_files = (FR_res, data, prevState, item) => {
    const realItem = {
      ...item,
      res: FR_res,
    };
    data.push(realItem);
    if (prevState === null) {
      this.setState({result: data});
    } else {
      this.setState({result: [...prevState, ...data]})
    }
  }

  handleDragEnter = (e) => {
    e.preventDefault();
    this.setState({
      classNames: {
        input: 'hover_input',
        label: 'hover_label',
      },
    });
  }

  handleDragLeave = (e) => {
    e.preventDefault();
    this.setState({
      classNames: {
        input: '',
        label: '',
      },
    });
  }

  handleDrop = () => {
    this.setState({
      classNames: {
        input: '',
        label: '',
      },
    });
  }

  handleMouseUp = () => {
    this.setState({
      classNames: {
        input: '',
        label: '',
      },
    });
  }

  handleMouseEnter = (e) => {
    e.preventDefault();
    this.setState({
      classNames: {
        input: 'hover_input',
        label: 'hover_label',
      },
    });
  }

  handleMouseLeave = (e) => {
    e.preventDefault();
    this.setState({
      classNames: {
        input: '',
        label: '',
      },
    });
  }

  render() {
    const { result } = this.state;
    const {
      type,
      width,
      minWidth,
    } = this.props;
    const {
      input: inputStyle,
      label: labelStyle,
    } = this.state.classNames;
    const style = {
      width: width[1] + width[0],
      minWidth: minWidth[1] + minWidth[0],
    };

    return (
      <div className='upload_wrapper' style={style}>
        <div className='input_form'>
          <label
            htmlFor='input'
            className={labelStyle}
            style={style}
            onDragEnter={e => this.handleDragEnter(e)}
            onDragLeave={e => this.handleDragLeave(e)}
            onDrop={e => this.handleDrop(e)}
            onMouseUp={e => this.handleMouseUp(e)}
          >
          </label>
          <input
            type='file'
            id='input'
            className={inputStyle}
            style={style}
            onMouseEnter={e => this.handleMouseEnter(e)}
            onMouseLeave={e => this.handleMouseLeave(e)}
            onDragEnter={e => this.handleDragEnter(e)}
            onDragLeave={e => this.handleDragLeave(e)}
            onDrop={e => this.handleDrop(e)}
            onChange={e => this.result(e.target.files)}
            multiple
          />
        </div>
        {result !== null ? <Output style={style} result={result} type={type} delete_item={this.delete_item} /> : null}
      </div>
    )
  }
}

export default Upload;