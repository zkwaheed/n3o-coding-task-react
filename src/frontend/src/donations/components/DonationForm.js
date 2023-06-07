import React from 'react';
import { Select, Button, Modal, Form, Input } from 'antd';
import { useGetLocations, useGetThemese } from '../hooks/donations';
const { Option } = Select;

export const DonationForm = ({visible, handleModalCancel, handleFormSubmission}) => {

    const [form] = Form.useForm(); // Initialize the form instance

  const {data: locations = []} = useGetLocations();
  const {data: themes = []} = useGetThemese();

  const handleSubmission = values => {
    form.resetFields();
    handleFormSubmission(values);
  }

  return (
    <div>
      <Modal
        title="Add Donation"
        visible={visible}
        onCancel={handleModalCancel}
        footer={null}
      >
        <Form form={form} onFinish={handleSubmission}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please enter the name',
              },
              {
                min: 1,
                max: 1200,
                message: 'Name must be between 1 and 1200 characters',
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="price" label="Price">
            <Input type="number" min={0} rules={[
              {
                required: true,
                message: 'Please enter a valid price',
                pattern: /^(0|[1-9]\d*)(\.\d+)?$/,
                type: 'string',
                transform: (value) => parseFloat(value),
                validator: (_, value) => value > 0 ? Promise.resolve() : Promise.reject('Price must be greater than 0'),
              },
            ]} step="any"/>
          </Form.Item>
          <Form.Item name="location" label="Location" rules={[
              {
                required: true,
                message: 'Please select a location',
              },
            ]}>
            <Select placeholder="Select Location">
              {locations.map(({id, name}) => (
                <Option key={id} value={id}>{name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="theme" label="Theme" rules={[
              {
                required: true,
                message: 'Please select a theme',
              },
            ]}
>
            <Select placeholder="Select Theme">
               {themes.map(({id, name}) => (
                <Option key={id} value={id}>{name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
