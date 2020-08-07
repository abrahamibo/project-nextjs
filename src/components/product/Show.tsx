import React from "react";
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { ReferenceLinks } from '../common/ReferenceLinks';
import { Product } from '../../interfaces/Product';

interface Props {
  product: Product;
}

export const Show: FunctionComponent<Props> = ({ product }) => (
  <div>
    <h1>Show { product['@id'] }</h1>
    <table className="table table-responsive table-striped table-hover">
      <thead>
      <tr>
        <th>Field</th>
        <th>Value</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">name</th>
          <td>{ product['name'] }</td>
        </tr>
        <tr>
          <th scope="row">offers</th>
          <td><ReferenceLinks items={ product['offers'] } type="Offer" /></td>
        </tr>
      </tbody>
    </table>
    <Link href="/products"><a className="btn btn-primary">
      Back to list
    </a></Link>
  </div>
);
