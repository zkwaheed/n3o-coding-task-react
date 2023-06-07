import React, { useState } from 'react';
import { DonationList } from './DonationList';
import { DropdownRow } from './StatusFilter';
import { DonationForm } from './DonationForm';
import { useCreateDonation } from '../hooks/donations';


export const Donations = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');
  const {mutate: submitDonation} = useCreateDonation();

  const handleDropdownChange = (value) => {
    setSelectedStatus(value);
  };
  

  const handleFormModal = () => {
    setIsFormVisible(prevVal => !prevVal);
  }

  const handleFormSubmission = values => {
    submitDonation({...values, price: {currencyCode: 'gbp', amount: values.price}})
    handleFormModal();
  }

  return <>
  <DropdownRow onButtonClick={handleFormModal} handleDropdownChange={handleDropdownChange} status={selectedStatus}/>
  <DonationList status={selectedStatus}/>
  <DonationForm visible={isFormVisible} handleModalCancel={handleFormModal} handleFormSubmission={handleFormSubmission}/>
  </>
};