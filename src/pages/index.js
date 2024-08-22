import React from 'react';
import Seo from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import UltimateFeatures from 'sections/ultimate-features';
import CustomerSupport from 'sections/customer-support';
import Pricing from 'sections/pricing';
import Support from 'sections/support';
import Clients from 'sections/clients';
import Blog from 'sections/blog';
import Faq from 'sections/faq';

export default function IndexPage() {
  return (
    <Layout>
      <Seo
        title="FastTrack"
        description="FastTrack; Mentorship; Consulting; Tutoring; Academic; High School; Private School; DIY; Project"
      />
      <Banner />
      <CustomerSupport />
      <Support />
      <UltimateFeatures />
      <Blog />
      <Faq />
    </Layout>
  );
}
