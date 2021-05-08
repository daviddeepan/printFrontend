import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Jackpot from 'sections/jackpot';
import CallToAction from 'sections/call-to-action';
import Featured from 'sections/featured';
import Pricing from 'sections/pricing';
import Testimonials from 'sections/testimonials';
import Blogs from 'sections/blogs';
import FAQ from 'sections/faq';
import Subscribe from 'sections/subscribe';
import Category from '../components/category'
import Slider from "react-slick";
import Carousel from '../components/Carousel'
import Contact from '../components/Contact'
export default function IndexPage() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="MEIndia Landing Page" />
          <Banner />
 
          <Category />
    <Carousel/>
    <br/>
          <br/>
          <br/>
          <br/>
          <Contact />
          <br/>
          <br/>
          <FAQ />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
