import { FunctionComponent } from 'react';
import { Offer } from '../../interfaces/Offer';
import { ReferenceLinks } from '../common/ReferenceLinks';

interface Props {
  offer: Offer
}

export const ListItem: FunctionComponent<Props> = ({ offer }: Props) => (
  <tr>
    <th scope="row"><ReferenceLinks items={ offer['@id'] } type="offer" /></th>
    <td>{ offer['description'] }</td>
    <td>{ offer['price'] }</td>
    <td><ReferenceLinks items={ offer['product'] } type="Product" /></td>
    <td><ReferenceLinks items={ offer['@id'] } type="offer" useIcon={true} /></td>
  </tr>
);
