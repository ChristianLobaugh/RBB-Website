import React from 'react';

import { Flex, Heading } from '@chakra-ui/core';
import Layout from '../components/Layout';
import ContactCard from '../components/about/ContactCard';
import { Helmet } from 'react-helmet';

export default function About() {
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>About</title>
      </Helmet>
      <Flex align="center" justify="center" direction="column">
        <Heading as="h1">About</Heading>
        <Flex w="1240px" margin="3em" justify="space-evenly">
          <ContactCard
            modalCard
            title="Business Owner"
            modalTitle="This is a modal!"
            blurb="Add your business to our list"
            imageUrl="https://source.unsplash.com/daily"
            imageAlt="Random image from unsplash"
          />
          <ContactCard
            mailtoCard
            title="General Inquiry"
            email="test@test.com"
            blurb="Send us an email and we'll be in touch"
            imageUrl="https://source.unsplash.com/daily"
            imageAlt="Random image from unsplash"
          />
          <ContactCard
            title="Volunteers"
            blurb="Join our group chat in Discord"
            imageUrl="https://source.unsplash.com/daily"
            imageAlt="Random image from unsplash"
          />
        </Flex>
      </Flex>
    </Layout>
  );
}
