import React from 'react';
import { Select, Button } from 'antd';
const { Option } = Select;

export const DropdownRow = ({onButtonClick, handleDropdownChange, status}) => {
  const dropdownOptions = [
    {
      id: 'active',
      name: 'Active',
    },
    {
      id: 'awaitingApproval',
      name: 'Awaiting Approval',
    },
    {
      id: 'inactive',
      name: 'Inactive',
    },
  ];

  
  

  return (
    <div>
      <Select
        style={{ width: 200 }}
        value={status}
        onChange={handleDropdownChange}
        placeholder="Select Status"
      >
        {dropdownOptions.map((option) => (
          <Option key={option.id} value={option.id}>
            {option.name}
          </Option>
        ))}
      </Select>
      <Button type="primary" onClick={onButtonClick}>
        Add Donation
      </Button>
    </div>
  );
};

