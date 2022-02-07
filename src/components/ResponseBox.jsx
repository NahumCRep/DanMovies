import React from 'react';
import '../styles/responsebox.css';
import { FaUser, FaTrashAlt, FaRegHeart, FaHeart } from 'react-icons/fa';

const ResponseBox = () => {
    return (
        <div className='responsebox'>
            <div className='responsebox__content'>
                <div className='reponsebox__user'>
                    <FaUser />
                    <span>{'ezequiel'}</span>
                </div>
                <div className='response__message'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sed natus rem asperiores modi, eum neque quisquam. Illo reprehenderit, obcaecati accusantium ad veritatis molestiae sequi fugiat perspiciatis illum. Voluptas, illum?

                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam nemo dicta consequuntur! Delectus minus fugit tenetur ut itaque ab fugiat quibusdam animi, laboriosam molestiae assumenda. Nobis soluta deleniti veniam corporis!
                    </p>
                </div>
            </div>
            <div className='response__btns'>
                <button>
                    <FaTrashAlt size={15} />
                </button>
            </div>
        </div>
    )
};

export default ResponseBox;
