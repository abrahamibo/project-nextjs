import { FunctionComponent } from 'react';
import Link from 'next/link';
import { ReferenceLinks } from '../common/ReferenceLinks';
import { Offer } from '../../interfaces/Offer';

interface Props {
  offer: Offer;
}

export const Show: FunctionComponent<Props> = ({ offer }) => (
  <div>
    <h1>Show { offer['@id'] }</h1>
    <table className="table table-responsive table-striped table-hover">
      <thead>
      <tr>
        <th>Field</th>
        <th>Value</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">description</th>
          <td>{ offer['description'] }</td>
        </tr>
        <tr>
          <th scope="row">price</th>
          <td>{ offer['price'] }</td>
        </tr>
        <tr>
          <th scope="row">product</th>
          <td><ReferenceLinks items={ offer['product'] } type="Product" /></td>
        </tr>
      </tbody>
    </table>
    <Link href="/offers"><a className="btn btn-primary">
      Back to list
    </a></Link>
  </div>
);
