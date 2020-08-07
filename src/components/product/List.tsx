import React from "react";
import { FunctionComponent } from 'react';
import { ListItem } from './ListItem';
import { Product } from '../../interfaces/Product';

interface Props {
  products: Product[];
}

export const List: FunctionComponent<Props> = ({ products }) => (
  <div>
    <h1>Product List</h1>
    <table className="table table-responsive table-striped table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>offers</th>
          <th/>
        </tr>
      </thead>
      <tbody>
        { products && products.length && products.map(product => (
          <ListItem key={ product['id'] } product={ product } />
        ))}
      </tbody>
    </table>
  </div>
);
