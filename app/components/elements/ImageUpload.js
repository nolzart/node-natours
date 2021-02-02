import { useState } from 'react'

const ImageUpload = ({ name, setPhoto, userPhoto }) => {
    const [previewPhoto, setPreviewPhoto] = useState()

    const handleImageChange = e => {
        e.preventDefault()
        const blobImage = URL.createObjectURL(e.target.files[0])
        setPhoto(e.target.files[0])
        setPreviewPhoto(blobImage)
    }

    return (
        <div className="form__group form__photo-upload">
            <img
                src={!previewPhoto ? `/img/users/${userPhoto}` : previewPhoto}
                alt={`User ${name}`}
                className="form__user-photo"
            />

            <input
                type="file"
                className="form__upload"
                accept="images/*"
                name="photo"
                id="photo"
                onChange={handleImageChange}
            />
            <label htmlFor="photo">Choose new photos</label>
        </div>
    )
}

export default ImageUpload
