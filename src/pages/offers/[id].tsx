import { NextComponentType, NextPageContext } from 'next';
import { Show } from '../../components/offer/Show';
import { Offer } from '../../interfaces/Offer';
import { fetch } from '../../utils/dataAccess';

interface Props {
  offer: Offer;
};

const Page: NextComponentType<NextPageContext, Props, Props> = ({ offer }) => {
  return (
    <Show offer={ offer }/>
  );
};

Page.getInitialProps = async ({ asPath }: NextPageContext) => {
  const offer = await fetch(asPath);

  return { offer };
};

export default Page;
