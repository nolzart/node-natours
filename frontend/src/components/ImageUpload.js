import React from 'react';

const ImageUpload = ({ name, photo, setPhoto }) => {
    const imagesHandler = e => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setPhoto(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
    };

    return (
        <div className='form__group form__photo-upload'>
            <img
                src={photo}
                alt={`User ${name}`}
                className='form__user-photo'
            />
            <input
                type='file'
                className='form__upload'
                accept='images/*'
                name='photo'
                id='photo'
                onChange={imagesHandler}
                // ref={register}
            />
            <label htmlFor='photo'>Choose new photos</label>
        </div>
    );
};

export default ImageUpload;
