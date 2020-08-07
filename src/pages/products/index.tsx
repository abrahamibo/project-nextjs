import React from "react";
import { NextComponentType, NextPageContext } from 'next';
import { List } from '../../components/product/List';
import { PagedCollection } from '../../interfaces/Collection';
import { Product } from '../../interfaces/Product';
import { fetch } from '../../utils/dataAccess';

interface Props {
  collection: PagedCollection<Product>;
}

const Page: NextComponentType<NextPageContext, Props, Props> = ({collection}) => (
  <List products={collection['hydra:member'] || []}/>
);

Page.getInitialProps = async () => {
  const collection = await fetch('/products');

  return {collection};
};

export default Page;
