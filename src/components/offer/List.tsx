import { FunctionComponent } from 'react';
import { ListItem } from './ListItem';
import { Offer } from '../../interfaces/Offer';

interface Props {
  offers: Offer[];
}

export const List: FunctionComponent<Props> = ({ offers }) => (
  <div>
    <h1>Offer List</h1>
    <table className="table table-responsive table-striped table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>description</th>
          <th>price</th>
          <th>product</th>
          <th/>
        </tr>
      </thead>
      <tbody>
        { offers && offers.length && offers.map(offer => (
          <ListItem key={ offer['@id'] } offer={ offer } />
        ))}
      </tbody>
    </table>
  </div>
);
