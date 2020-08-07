import React from "react";
import { FunctionComponent } from 'react';
import { Product } from '../../interfaces/Product';
import { ReferenceLinks } from '../common/ReferenceLinks';

interface Props {
  product: Product
}

export const ListItem: FunctionComponent<Props> = ({ product }: Props) => (
  <tr>
    <th scope="row"><ReferenceLinks items={ product['@id'] } type="product" /></th>
    <td>{ product['name'] }</td>
    <td><ReferenceLinks items={ product['offers'] } type="Offer" /></td>
    <td><ReferenceLinks items={ product['@id'] } type="product" useIcon={true} /></td>
  </tr>
);
