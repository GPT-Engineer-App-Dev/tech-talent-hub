import { Box, Button, Container, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FaCode, FaFilter, FaComments } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero */}
      <Box bgGradient="linear(to-r, blue.500, teal.500)" py={24} textAlign="center" color="white">
        <Container maxW="container.lg">
          <Heading as="h1" size="3xl" mb={6}>
            Hire Top Software Talent
          </Heading>
          <Text fontSize="xl" mb={8}>
            Particles connects companies with skilled developers specializing in modern web technologies
          </Text>
          <Button size="lg" colorScheme="white" variant="outline">
            View Developers
          </Button>
        </Container>
      </Box>

      {/* Features */}
      <Container maxW="container.lg" py={20}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Stack align="center" spacing={4}>
            <Box color="teal.500" fontSize="4xl">
              <FaCode />
            </Box>
            <Text fontWeight="bold" fontSize="2xl">
              Curated Talent Pool
            </Text>
            <Text textAlign="center" fontSize="lg">
              Access a vetted selection of top developers skilled in the latest web technologies
            </Text>
          </Stack>

          <Stack align="center" spacing={4}>
            <Box color="teal.500" fontSize="4xl">
              <FaFilter />
            </Box>
            <Text fontWeight="bold" fontSize="2xl">
              Filter by Expertise
            </Text>
            <Text textAlign="center" fontSize="lg">
              Easily find developers with the specific skills and experience you need for your project
            </Text>
          </Stack>

          <Stack align="center" spacing={4}>
            <Box color="teal.500" fontSize="4xl">
              <FaComments />
            </Box>
            <Text fontWeight="bold" fontSize="2xl">
              Direct Messaging
            </Text>
            <Text textAlign="center" fontSize="lg">
              Communicate directly with developers to discuss your project requirements and timelines
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>

      {/* CTA */}
      <Box bgGradient="linear(to-r, blue.500, teal.500)" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="2xl" mb={6} color="white">
            Start Hiring World-Class Developers
          </Heading>
          <Button size="lg" colorScheme="white" variant="solid">
            View Developer Listings
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
