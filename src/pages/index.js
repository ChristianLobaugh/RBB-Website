import React from 'react';

import { Flex, Heading } from '@chakra-ui/core';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

export default () => {
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>Home</title>
      </Helmet>
      <Flex direction="column" align="center" justify="center">
        <Heading as="h1" size="2xl" fontFamily="Arvo">
          Home
        </Heading>
      </Flex>
    </Layout>
  );
};
