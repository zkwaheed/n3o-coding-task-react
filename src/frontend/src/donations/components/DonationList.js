import React from 'react';
import { Table } from 'antd';
import {useGetDonations} from '../hooks/donations'
const columns = [
  {
    title: 'Donation Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <>{text}</>,
  },
  {
    title: 'Reference',
    dataIndex: 'reference',
    key: 'reference',
    render: ({text}) => <>{text}</>
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (price) => <>{price?.text}</>
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render:({name}) => <>{name}</>
  },
  {
    title: 'Location',
    key: 'location',
    dataIndex: 'location',
    render:({name}) => <>{name}</>
  },
  {
    title: 'Theme',
    key: 'theme',
    dataIndex: 'theme',
    render:({name}) => <>{name}</>
  }
];

export const DonationList = ({status}) => {

  const result = useGetDonations();

  const data = React.useMemo(() => {
  return status ? result.data.filter(d => d.status.id === status): result.data;

  }, [result.data, status])

  if (result.isLoading) {
    return <p>Loading</p>
  }
  
  if (result.isError) {
    return <p>Error Loading</p>
  }


  return <Table columns={columns} dataSource={data} />
};