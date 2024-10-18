import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; // To fetch data from an API
import { useParams } from 'react-router-dom'; // For dynamic route parameters

function NewsDetailCard() {
    const [news, setNews] = useState(null); // To store the news data
    const { id } = useParams(); // Assuming you're passing news id in the URL

    // Fetch news details by ID from the API
    useEffect(() => {
        const fetchNewsById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/news/${id}`); // Replace with your API URL
                setNews(response.data);
            } catch (error) {
                console.error('Error fetching the news:', error);
            }
        };

        fetchNewsById();
    }, [id]);

    // Show a loading state until news data is fetched
    if (!news) {
        return <div>Loading...</div>;
    }

    return (
        <div className="card-container" style={{ maxWidth: '400px', margin: 'auto' }}>
            <div className="header d-flex justify-content-between align-items-center p-2">
                <h5 className="m-0 text-black">MyNews</h5>
                <button className="btn plus_button">+</button>
            </div>
            <div className="card news-card">
                <div className='d-flex justify-content-start'>
                    <h5 className="card-title">{news.news_title}</h5>
                </div>
                <div className='Individual_img_bg'>
                    <img src={news.image} className="card-img-top" alt={news.news_title} style={{ width: '90vw' }} />
                </div>
                <div className="card-body">
                    <p className="card-text">{news.news_description}</p>
                </div>
            </div>
        </div>
    );
}

export default NewsDetailCard;



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import image_1 from './assets/img/image_1.png';
// function NewsDetailCard() {
//     const news = {
//         image: image_1,
//         title: 'Bitcoin Hits New High',
//         description: `Bitcoin has once again hit an all-time high, crossing significant milestones as global investors continue to show interest. The cryptocurrency market is seeing a surge in demand, with major companies and financial institutions backing Bitcoin as a reliable asset. Experts believe this rise could lead to wider adoption of Bitcoin as a legitimate form of digital currency. However, some remain cautious about potential market volatility as Bitcoin's price has historically seen large fluctuations.`,
//     };

//     return (
//         <div className="card-container" style={{ maxWidth: '400px', margin: 'auto' }}>
//             <div className="header d-flex justify-content-between align-items-center p-2">
//                 <h5 className="m-0  text-black">MyNews</h5>
//                 <button className="btn plus_button">+</button>
//             </div>
//             <div className="card news-card">
//                 <div className='d-flex justify-content-start'>
//                     <h5 className="card-title">{news.title}</h5>
//                 </div>
//                 <div className='Individual_img_bg'>
//                     <img src={news.image} className="card-img-top" alt={news.title} style={{ width: '90vw' }} />
//                 </div>
//                 <div className="card-body">

//                     <p className="card-text">{news.description}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default NewsDetailCard;
