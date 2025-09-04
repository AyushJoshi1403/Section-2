'use client';
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

const FileUpload = () => {

    const UploadFile = (e) => {
        const file = e.target.files[0];

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'mypreset619');
        formData.append('cloud_name', 'depcezm5v');

        axios.post('https://api.cloudinary.com/v1_1/depcezm5v/image/upload', formData)
            .then((result) => {
                console.log(result.data);

                toast.success('File Uploaded Successfully');
            }).catch((err) => {
                console.log(err);
                toast.error('Failed to upload file');
            });
    }

    return (
        <div className='max-w-lg mx-auto'>

            <h2 className='text-2xl text-center font-bold'>Cloud File Upload</h2>

            <div>
                <label
                    className='p-10 border-dashed border-2 border-gray-300 text-center cusor-pointer block'
                    htmlFor="myupload">Upload File</label>
                <input className='hidden' id='myupload' type="file" onChange={UploadFile} />
            </div>

        </div>
    )
}

export default FileUpload
