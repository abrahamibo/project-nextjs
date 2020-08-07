import { NextComponentType, NextPageContext } from 'next';
import { List } from '../../components/offer/List';
import { PagedCollection } from '../../interfaces/Collection';
import { Offer } from '../../interfaces/Offer';
import { fetch } from '../../utils/dataAccess';

interface Props {
  collection: PagedCollection<Offer>;
}

const Page: NextComponentType<NextPageContext, Props, Props> = ({collection}) => (
  <List offers={collection['hydra:member'] || []}/>
);

Page.getInitialProps = async () => {
  const collection = await fetch('/offers');

  return {collection};
};

export default Page;
