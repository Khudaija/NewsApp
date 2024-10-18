import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardCss from './assets/css/Dashboard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Axios for HTTP requests

const MyNews = () => {
    // State to store news items fetched from API
    const [newsItems, setNewsItems] = useState([]);

    // Function to fetch news from API
    const fetchNews = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/news'); // Replace with your API endpoint
            // console.log(response.data);
            setNewsItems(response.data); // Set the news items to the response data
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    // Use useEffect to fetch news when the component is mounted
    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div className="container dashboard_container">
            <div className="header d-flex justify-content-between align-items-center p-2">
                <h5 className="m-0 text-black">MyNews</h5>
                <button className="btn plus_button">+</button>
            </div>
            <div className="card">
                <div className="card-body">
                    {newsItems.length > 0 ? (
                        newsItems.map((item, index) => (
                            <Link to={`/individual_news/${item._id}`}>
                                <div className="news-item mb-3 shadow" key={index}>
                                    <img src={item.image} className="img-fluid" alt={item.news_title} />
                                    <h6 className="mt-2">{item.news_title}</h6>
                                    <p className='dashboard_para'>{item.date}</p>
                                    <div className='dashboard_other_options'>
                                        <div className='fa fa-edit dashboard_icons'></div>
                                        <div className='fa fa-trash dashboard_icons'></div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p>No news available</p> // Show this if no news items are available
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyNews;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import DashboardCss from './assets/css/Dashboard.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// import image_1 from './assets/img/image_1.png';
// import image_2 from './assets/img/image_2.png';


// const MyNews = () => {
//     const newsItems = [
//         {
//             title: "Bitcoin Hits New High",
//             date: "24/09/2024",
//             imageUrl: image_1
//         },
//         {
//             title: "Crypto Regulation Tightens Globally",
//             date: "24/09/2024",
//             imageUrl: image_2
//         }
//     ];

//     return (
//         <div className="container dashboard_container">
//             <div className="header d-flex justify-content-between align-items-center p-2">
//                 <h5 className="m-0  text-black">MyNews</h5>
//                 <button className="btn plus_button">+</button>
//             </div>
//             <div className="card">
//                 <div className="card-body">
//                     {newsItems.map((item, index) => (
//                         <div className="news-item mb-3 shadow" key={index}>
//                             <img src={item.imageUrl} className="img-fluid" alt={item.title} />
//                             <h6 className="mt-2">{item.title}</h6>
//                             <p className='dashboard_para'>{item.date}</p>
//                             <div className='dashboard_other_options'>
//                                 <div className='fa fa-edit dashboard_icons'></div>
//                                 <div className='fa fa-trash dashboard_icons'></div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MyNews;
