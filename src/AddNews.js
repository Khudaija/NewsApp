import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function NewsForm() {
    const [newsTitle, setNewsTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous messages
        setError('');
        setSuccess('');

        // Create a FormData object to send both text and image
        const formData = new FormData();
        formData.append('news_title', newsTitle);
        formData.append('news_description', description);
        formData.append('image', image); // Append the selected image file

        try {
            // Make the POST request to create the news entry
            const response = await axios.post('http://localhost:5000/api/news/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Important for sending files
                },
            });

            // Handle successful response
            if (response.status === 201) {
                setSuccess('News successfully created!');
                setNewsTitle('');
                setDescription('');
                setImage(null);
            }
        } catch (err) {
            console.error('Error creating news:', err);
            setError('Failed to create news. Please try again.');
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]); // Set the image file in the state
    };

    return (
        <div className="card-container" style={{ maxWidth: '400px', margin: 'auto' }}>
            <div className="header d-flex justify-content-between align-items-center p-3">
                <h5 className="m-0 text-black">MyNews</h5>
            </div>
            <form className="p-4 mt-2" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="newsTitle" className="form-label">News Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="newsTitle"
                        placeholder="Enter the news title"
                        value={newsTitle}
                        onChange={(e) => setNewsTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        placeholder="Enter the news description"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        onChange={handleImageChange}
                        required
                    />
                </div>
                <button type="submit" className="btn submit_btn w-100">Submit</button>
            </form>

            {error && <p className="text-danger mt-3">{error}</p>}
            {success && <p className="text-success mt-3">{success}</p>}
        </div>
    );
}

export default NewsForm;

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function NewsForm() {
//     const [newsTitle, setNewsTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [image, setImage] = useState(null);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log({ newsTitle, description, image });
//         // Submit form data to the server or handle the logic here.
//     };

//     const handleImageChange = (e) => {
//         setImage(e.target.files[0]);
//     };

//     return (
//         <div className="card-container" style={{ maxWidth: '400px', margin: 'auto' }}>
//             <div className="header d-flex justify-content-between align-items-center p-3">
//                 <h5 className="m-0  text-black">MyNews</h5>
//                 {/* <button className="btn plus_button">+</button> */}
//             </div>
//             <form className="p-4 mt-2" onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="newsTitle" className="form-label">News Title</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="newsTitle"
//                         placeholder="Enter the news title"
//                         value={newsTitle}
//                         onChange={(e) => setNewsTitle(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="description" className="form-label">Description</label>
//                     <textarea
//                         className="form-control"
//                         id="description"
//                         placeholder="Enter the news description"
//                         rows="3"
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="image" className="form-label">Image</label>
//                     <input
//                         type="file"
//                         className="form-control"
//                         id="image"
//                         onChange={handleImageChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="btn submit_btn w-100">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default NewsForm;
