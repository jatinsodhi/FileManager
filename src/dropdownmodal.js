import React, { useState, useEffect } from "react";
import './DropDownModal.css';

const DropDownModal = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleClick = () => {
        setShowModal(true);
        setFilteredData(dataJson);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        // setSelectedItems("");
        setSearchQuery('');
        setFilteredData([]);
    };

    useEffect(() => {
        if (showModal) {
        }
    }, [showModal]);

    useEffect(() => {
            setFilteredData(dataJson?.filter(item =>
                item?.shipVia?.toLowerCase()?.includes(searchQuery?.toLowerCase())
            ))
    }, [searchQuery]);

    const handleSearchChange = (e) => {
        setSearchQuery(e?.target?.value);
    };

    const dataJson = [
        { "id": 1, "shipVia": "FedEx" },
        { "id": 2, "shipVia": "UPS" },
        { "id": 3, "shipVia": "DHL" },
        { "id": 4, "shipVia": "USPS" },
        { "id": 5, "shipVia": "TNT Express" },
        { "id": 6, "shipVia": "Royal Mail" },
        { "id": 7, "shipVia": "Australia Post" },
        { "id": 8, "shipVia": "Japan Post" },
        { "id": 9, "shipVia": "Canada Post" },
        { "id": 10, "shipVia": "Singapore Post" },
        { "id": 11, "shipVia": "Korea Post" },
        { "id": 12, "shipVia": "DHL Express" },
        { "id": 13, "shipVia": "UPS Express" },
        { "id": 14, "shipVia": "FedEx Express" },
        { "id": 15, "shipVia": "DHL eCommerce" },
        { "id": 16, "shipVia": "UPS Ground" },
        { "id": 17, "shipVia": "FedEx Ground" },
        { "id": 18, "shipVia": "USPS Priority Mail" },
        { "id": 19, "shipVia": "DHL Global Mail" },
        { "id": 20, "shipVia": "UPS Standard" },
        { "id": 21, "shipVia": "FedEx SmartPost" }
    ]
    // const selectType = "single";
    const selectType = "multiple";

    const toggleCheckbox = (id) => {
        if (selectType === 'single') {
            setSelectedItems([id]);
        } else {
            if (selectedItems?.includes(id)) {
                setSelectedItems(selectedItems?.filter(item => item !== id));
            } else {
                setSelectedItems([...selectedItems, id]);
            }
        }
    };

    const handleCancel = () => {
        setShowModal(false);
        setSelectedItems("");
    }

    const handleSelect = () => {
        setShowModal(false)
        console.log('selectedItems', selectedItems)
    }

    return (
        <div>
            <button type="button" onClick={handleClick}>Click Here</button>
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-header">
                            <span className="close" onClick={handleCloseModal}>x</span>
                        </div>
                        <div className="modal-content">
                            <div className="search">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                            </div>
                            <table>
                                <tbody>
                                    {filteredData.map((item, index) => (
                                        <tr key={item?.id}>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedItems?.includes(item?.id)}
                                                    onChange={() => toggleCheckbox(item?.id)}
                                                />
                                            </td>
                                            <td>{item?.shipVia}</td>
                                        </tr>
                                    ))}
                                    {/* {Array.from({ length: Math?.max(0, 10 - filteredData?.length) })?.map((_, index) => (
                                        <tr key={`empty-${index}`}>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    ))} */}
                                </tbody>
                            </table>
                            <div>
                                <div>
                                    <button type="button" onClick={handleCancel}>Cancel</button>
                                    <button type="button" onClick={handleSelect}>Select</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default DropDownModal;