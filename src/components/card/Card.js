import React from 'react';

// const Card = ({ children }) => {
//     let subComponentList = Object.keys(Card);

//     let subComponents = subComponentList.map((key) => {
//         return React.Children.map(children, (child) =>
//             child.type.name === key ? child : null
//         );
//     });

//     return (
//         <>
//             <div className='card'>
//                 {subComponents.map((component) => component)}
//             </div>
//         </>
//     );
// };


const Card = ({ children }) => {
    return <div className="center">{children}</div>;
  };
  
  Card.Header = ({ children }) => {
    return <div className="card-header">{children}</div>;
  };
  
  Card.Body = ({ children }) => {
    return <div className="card-body">{children}</div>;
  };
  

export default Card;