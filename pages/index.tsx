import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import BaseTemplate from '../components/templates/base/BaseTemplate';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <BaseTemplate sampleTextProp="Hello World!" />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      {page}
    </PrimaryLayout>
  );
};