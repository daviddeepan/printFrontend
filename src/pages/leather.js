import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Services from 'sections/services';
import Jackpot from 'sections/jackpot';
import CallToAction from 'sections/call-to-action';
import Featured from 'sections/featured';
import Pricing from 'sections/pricing';
import Testimonials from 'sections/testimonials';
import Blogs from 'sections/blogs';
import FAQ from 'sections/faq';
import Subscribe from 'sections/subscribe';
import Slider from "react-slick";
import Contact from '../components/Contact'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'



const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]



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
          <SEO title="LEATHER AND LEATHARATE PRODUCTS " />
         
         
          <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            {({ open }) => (
              <>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                    aria-label="Global"
                  >
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="#">
                          <span className="sr-only">Workflow</span>
                          <img
                            className="h-8 w-auto sm:h-10"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          />
                        </a>
                        <div className="-mr-2 flex items-center md:hidden">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open main menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                      {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      ))}
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Log in
                      </a>
                    </div>
                  </nav>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                  >
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                          <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt=""
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close main menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <a
                        href="#"
                        className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                      >
                        Log in
                      </a>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Leading manufacturer and exporter </span>{' '}
                <span className="block text-indigo-600 xl:inline">of high quality finished leather</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              MEI Leather Division through its ancillaries, has the distinct edge by being a truly integrated leather company with its own back end tanneries for processing raw leather at Ranipet, Tamilnadu and two state of the art leather goods manufacturing units at Chennai, India.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
 
         
    <div className="md:mx-auto md:container px-4">
                <div className="pb-32 pt-16">
                    <div className="mx-auto">
                        <div>
        <div className="content__middle">
          <h1 style={{fontSize:"40px", fontWeight:"bolder"}}>Curated Products</h1>
        <div role="tabpanel" className="tab-pane" id="related-artists">
            <div className="media-cards">
              <a href="https://forms.gle/gZg4XMoYgWXJG2pk9" target="_blank">
              </a><div className="media-card"><a href="https://forms.gle/88T8gscZCNMwiKXc6" target="_blank">
                  <div className="media-card__image" style={{backgroundImage: 'url(https://image.freepik.com/free-vector/print-house-workers-using-computers-operating-big-commercial-printers-printing-banners-posters-vector-illustration-ad-agency-printing-industry-advertising-design-concept_74855-10140.jpg)'}}>
                    <i className="ion-ios-play" />
                  </div>
                </a><a className="media-card__footer" herf="https://forms.gle/88T8gscZCNMwiKXc6">Cutting</a>
              </div>
              <a href="https://forms.gle/xmowfCAQFbxstxTs9" target="_blank">
              </a><div className="media-card"><a href="https://forms.gle/xmowfCAQFbxstxTs9" target="_blank">
                  <div className="media-card__image" style={{backgroundImage: 'url(https://image.freepik.com/free-vector/fight-virus-concept_52683-36505.jpg)'}}>
                    <i className="ion-ios-play" />
                  </div>
                </a><a className="media-card__footer">Stiching</a>
              </div>
              <a href="https://forms.gle/SPhnZsSTtDCf3Nx29" target="_blank">
              </a><div className="media-card"><a href="https://forms.gle/SPhnZsSTtDCf3Nx29" target="_blank">
                  <div className="media-card__image" style={{backgroundImage: 'url(https://image.freepik.com/free-vector/flat-hand-drawn-sustainable-fashion-illustration_23-2148830049.jpg)'}}>
                    <i className="ion-ios-play" />
                  </div>
                </a><a className="media-card__footer">Finishing</a>
              </div>
              <a href="hhttps://forms.gle/yHAtoSMzDVkfc5jn6" target="_blank">
              </a><div className="media-card"><a href="https://forms.gle/yHAtoSMzDVkfc5jn6" target="_blank">
                  <div className="media-card__image" style={{backgroundImage: 'url(https://image.freepik.com/free-vector/waiter-preparing-cafe-opening-restaurant-worker-cleaning-table-after-customers-leaving-flat-vector-illustration-catering-service-job_74855-13281.jpg)'}}>
                    <i className="ion-ios-play" />
                  </div>
                </a><a className="media-card__footer">Inspection</a>
              </div>
            </div>
          </div>
        </div>
        <div>
      </div>
      </div>
                        </div>
                    </div>
                </div>


    
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
