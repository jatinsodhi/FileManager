import React from 'react';
import data from './data'; // Assuming the correct path to data.js

const Breadcrumbs = ({ path, navigateToDirectory,navigateUp }) => {
  console.log('path', path)
  console.log('navigateToDirectory', navigateToDirectory)
  const findItemByName = (root, name) => {
    if (root.name === name) {
      return root;
    }
    if (root.contents) {
      for (let item of root.contents) {
        const foundItem = findItemByName(item, name);
        if (foundItem) {
          return foundItem;
        }
      }
    }
    return null;
  };

  return (
    <div className="breadcrumbs">
      {path.map((crumb, index) => (
        <span key={index} onClick={() => navigateToDirectory(findItemByName(data, crumb))}>
          {crumb}
          {index < path.length - 1 && ' / '}
        </span>
      ))}
            <button onClick={navigateUp}>Go Up</button>
    </div>
  );
};

export default Breadcrumbs;
