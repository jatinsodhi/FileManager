import React, { useEffect, useState } from 'react';
import './DirectoryContents.css'; // Import your CSS file for styling

const DirectoryContents = ({ directory, navigateToDirectory }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [contextMenu, setContextMenu] = useState(null);
  const [renameItem, setRenameItem] = useState(null);
  const [newName, setNewName] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });
  const [selectedItems, setSelectedItems] = useState([]); // select files

  const handleDoubleClick = (item) => {
    if (item.type === 'directory') {
      navigateToDirectory(item);
    }
  };

  const toggleDetails = () => {
    setShowDetails(prevShowDetails => !prevShowDetails);
  };

const renderValue = (value) => {
  if (typeof value === 'object') {
    if (Array.isArray(value)) {
      return value.map((item, index) => (
        <li key={index}>{renderValue(item)}</li>
      ));
    } else {
      return Object.keys(value).map((key) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{renderValue(value[key])}</td>
        </tr>
      ));
    }
  } else {
    return value.toString(); // Handle other types as needed
  }}
  const handleRightClick = (event, item) => {
    console.log('first')
    event.preventDefault();
    setContextMenu({ item, x: event.clientX, y: event.clientY });
    
    document.addEventListener('click', closeContextMenu);
  };

  const closeContextMenu = () => {
    setContextMenu(null);
    document.removeEventListener('click', closeContextMenu);
  };

  const handleOptionClick = (option, item) => {
    if (option === 'Rename') {
      setRenameItem(item);
      setNewName(item.name);
    }  else if (option === 'Delete') {
      deleteItem(item);
    } else {
      console.log('Clicked option:', option);
    }
    closeContextMenu();
  };
  const handleRenameSubmit = (event) => {
    event.preventDefault();
    renameItem.name = newName;
    setRenameItem(null);
    setNewName('');
  };
  const deleteItem = (itemToDelete) => {
    const updatedContents = directory.contents.filter(item => item !== itemToDelete);
    directory.contents = updatedContents;
  };
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedItems = [...directory.contents].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });
  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? '▲' : '▼';
    }
    return '↕'; // Default sort icon
  };
  const handleSelectItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSelectAll = () => {
    if (selectedItems.length === sortedItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(sortedItems);
    }
  };
  return (
    <div className="directory-contents">
      <h2>Files</h2>
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {/* {Object.keys(directory)} */}
      {/* {Object.values(directory)} */}
      {/* {directory.contents.map((item, index) => (
        <div key={index} className={item.type === 'directory' ? 'folder-item' : 'file-item'} onDoubleClick={() => handleDoubleClick(item)}>
          <span className="item-name">{Object.keys(item.name)}</span>
          {showDetails && item.type !== 'directory' && (
            <>
              <span className="item-size">({item.size} bytes)</span>
              <span className="item-date">Modified: {item.lastModified}</span>
            </>
          )}
        </div>
      ))} */}
      {/* <table>
        <tbody>
          {Object.keys(directory).map((key) => (
            <td key={key}>
              <td>{key}</td>
              <td>
                {Array.isArray(directory[key]) ? (
                  <td>{renderValue(directory[key])}</td>
                ) : (
                  renderValue(directory[key])
                )}
              </td>
            </td>
          ))}
        </tbody>
      </table> */}
      <table className="directory-contents-table">
        <thead>
          <tr>
            <td className="select-column">
              <input
                type="checkbox"
                checked={selectedItems.length === sortedItems.length}
                onChange={handleSelectAll}
              />
            </td>
            <td className="name-column" onClick={() => handleSort('name')}>
              Name {getSortIcon('name')}
            </td>
            <td className="created-at-column" onClick={() => handleSort('created')}>
              Created At {getSortIcon('created')}
            </td>
            <td className="last-modified-column" onClick={() => handleSort('lastModified')}>
              Last Modified {getSortIcon('lastModified')}
            </td>
            <td className="type-column" onClick={() => handleSort('type')}>
              Type {getSortIcon('type')}
            </td>
            <td className="size-column" onClick={() => handleSort('size')}>
              Size {getSortIcon('size')}
            </td>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item, index) => (
            <tr key={index}>
              <td className="select-column">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item)}
                  onChange={() => handleSelectItem(item)}
                />
              </td>
              <td className="name-column">
                <div
                  className={item.type === 'directory' ? 'folder-item' : 'file-item'}
                  onDoubleClick={() => handleDoubleClick(item)}
                  onContextMenu={(e) => handleRightClick(e, item)}
                >
                  <span className="item-icon">{item.type === 'directory' ? '📁' : '📄'}</span>
                  {renameItem === item ? (
                    <form onSubmit={handleRenameSubmit}>
                      <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        onBlur={() => setRenameItem(null)}
                        autoFocus
                      />
                    </form>
                  ) : (
                    <span className="item-name">{item.name}</span>
                  )}
                </div>
              </td>
              <td className="created-at-column">{item.created}</td>
              <td className="last-modified-column">{item.lastModified}</td>
              <td className="type-column">{item.type}</td>
              <td className="size-column">{item.size}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {contextMenu && (
        <div className="context-menu" style={{ top: contextMenu.y, left: contextMenu.x }}>
          <ul>
            <li
              onClick={() => handleOptionClick('Rename', contextMenu.item)}
              className={selectedItems.length > 1 ? 'disabled' : ''}
            >
              Rename
            </li>
            <li onClick={() => handleOptionClick('Delete')}>Delete</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DirectoryContents;
