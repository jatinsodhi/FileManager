import React, { useState } from 'react';
import { Flex, Rate } from 'antd';
import Styles from "./rating.css"
import { StarFilled, StarOutlined } from '@ant-design/icons';
// const Rating = () => {
//   const data = {
//     count: 10,
//     defaultValue: 3,
//     toolTipsDesc: ['terrible', 'bad', 'normal', 'good', 'wonderful', 'terrible1', 'bad1', 'normal1', 'good1', 'wonderful1'],
//     allowClear: true,
//     disabled: false
//   }
  
//   return(
//     <Flex gap="middle" vertical>
//         <Rate 
//           count={data.count}
//           defaultValue={data.defaultValue}
//           allowHalf={data.allowHalf}
//           tooltips={data.toolTipsDesc}
//           allowClear={data.allowClear}
//           disabled={data.disabled}
//           >
//         </Rate>
//       </Flex>
//   );
// };
const Rating = () => {
  const [value, setValue] = useState(3);
  const totalStars = 5;

  const handleClick = (newValue) => {
    if (newValue === value) {
      setValue(0);
    } else {
      setValue(newValue);
    }
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <span
            key={index}
            onClick={() => handleClick(ratingValue)}
            style={{ marginRight: '5px', cursor: 'pointer' }}
          >
            {ratingValue <= value ? <StarFilled /> : <StarOutlined />}
          </span>
        );
      })}
    </div>
  );
};
export default Rating;