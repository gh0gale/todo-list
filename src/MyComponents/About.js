// import React from 'react';

// export const About = () => {
//     return (
//         <div style={{ padding: "20px", lineHeight: "1.6", fontFamily: "Arial, sans-serif" }}>
//             <h1>About Us</h1>
//             <p>
//                 Welcome to our Todo App! Our goal is to help you stay organized and productive. 
//                 With this simple and user-friendly application, you can easily manage your daily tasks, 
//                 set priorities, and track your progress. Whether you're working on a big project or just 
//                 planning your day, we've got you covered.
//             </p>
//             <p>
//                 Our mission is to empower individuals to achieve more by providing tools that make 
//                 organization effortless and enjoyable. Thank you for choosing us to be a part of your productivity journey!
//             </p>
//         </div>
//     );
// };


import React from 'react';
import './About.css';

export const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>
                Welcome to our Todo App! Our goal is to help you stay organized and productive. 
                With this simple and user-friendly application, you can easily manage your daily tasks, 
                set priorities, and track your progress. Whether you're working on a big project or just 
                planning your day, we've got you covered.
            </p>
            <p>
                Our mission is to empower individuals to achieve more by providing tools that make 
                organization effortless and enjoyable. Thank you for choosing us to be a part of your productivity journey!
            </p>
        </div>
    );
};

