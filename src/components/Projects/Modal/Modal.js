import React, {Component} from 'react';
import ReactModal from 'react-modal';

import '../Projects.scss';
import './Modal.scss';


// const customStyles = {
//   content : {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)'
//   }
// };

class CardModal extends Component {
  state = {
    showModal: false
  }
  
  handleOpenModal = () => {
    this.setState({ showModal: true });
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false });
  }
  
  render () {
    const {name, img, imgArr, href, environment} = this.props.data;

    return (
      <div>
        <button
          className='card__button'
          onClick={this.handleOpenModal}
        >
          see more
        </button>

        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           className='modal'
        >
          <button className='close' onClick={this.handleCloseModal}>
            <i className="fas fa-times"></i>
          </button>

          <div className='img-wrap'>
            <img src={img} alt={name} />
          </div>
          <div className='content'>
            <h1 className='content__header'>{name}</h1>
            <div>
              <h4 className='content__environment-header'>Environment:</h4>
              <ul>
                {environment.map((item, i) => {
                  return <li key={i} className='content__environment-item'>{item}</li>
                })}
              </ul>
            </div>
            <a 
              target='_blank' 
              href={href}
              className='content__button'
            >
              see project
            </a>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default CardModal;