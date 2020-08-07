import React from "react";
import { NextComponentType, NextPageContext } from 'next';
import { Show } from '../../components/product/Show';
import { Product } from '../../interfaces/Product';
import { fetch } from '../../utils/dataAccess';

interface Props {
  product: Product;
};

const Page: NextComponentType<NextPageContext, Props, Props> = ({ product }) => {
  return (
    <Show product={ product }/>
  );
};

Page.getInitialProps = async ({ asPath }: NextPageContext) => {
  const product = await fetch(asPath);

  return { product };
};

export default Page;
