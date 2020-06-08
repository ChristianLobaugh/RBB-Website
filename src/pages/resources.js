import React from 'react';

import { Flex, Heading } from '@chakra-ui/core';
import Layout from '../components/Layout';
import ResourceFeed from '../components/Feeds/ResourceFeed';
import Pagination from '../components/Pagination/Pagination';
import { Helmet } from 'react-helmet';

export default function Resources() {
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>Resources</title>
      </Helmet>
      <Flex align="center" justify="center" direction="column">
        <Heading as="h1">Resources</Heading>
        <Pagination
          onPageChanged={pagination => {
            // @TODO add pagination handler
          }}
          totalRecords={70}
          pageLimit={5}
        />
        <ResourceFeed />
      </Flex>
    </Layout>
  );
}
