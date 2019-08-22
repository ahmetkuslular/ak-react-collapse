import React from 'react';
import styled from 'styled-components';
import { KeyIcon, TrashIcon } from '../Icons';

const contentFields = [
  { label: 'ID', valueKey: 'ID' },
  { label: 'Name', valueKey: 'Name' },
  { label: 'Phone', valueKey: 'Phone' },
  { label: 'City', valueKey: 'City' },
];

function ItemContent({ item }) {
  return (
    <Container>
      {contentFields.map((field, index) => (
        <Row key={index}>
          <Key>
            <KeyIcon />
            <Label>{field.label}</Label>
          </Key>
          <Label>{item[field.valueKey]}</Label>
        </Row>
      ))}
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  width: 100%;
  background-color: rgb(247, 247, 247, 1);
  border-radius: 5px;
  padding: 5px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Key = styled.div`
  display: flex;
  width: 100px;
`;

const Label = styled.div`
  font-size: 12px;
  color: #b5b5b5;
  display: block;
  padding-left: 10px;
`;

export default ItemContent;
