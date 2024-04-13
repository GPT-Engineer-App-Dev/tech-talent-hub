import React, { useState } from "react";
import { Box, Input, Stack, Text, Card, CardHeader, CardBody, Heading, Tag, Button } from "@chakra-ui/react";

const developers = [
  {
    name: "John Doe",
    location: "New York, NY",
    expertise: ["React", "Node.js", "JavaScript"],
  },
  {
    name: "Jane Smith",
    location: "San Francisco, CA",
    expertise: ["Angular", "TypeScript", ".NET"],
  },
  {
    name: "Mike Johnson",
    location: "Chicago, IL",
    expertise: ["React", "Go", "Node.js"],
  },
  {
    name: "Sarah Lee",
    location: "Boston, MA",
    expertise: ["Vue.js", "Python", "Django"],
  },
  {
    name: "David Chen",
    location: "Los Angeles, CA",
    expertise: ["React Native", "iOS", "Swift"],
  },
  {
    name: "Emily Davis",
    location: "Seattle, WA",
    expertise: ["React", "AWS", "Serverless"],
  },
];

const Developers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDevelopers = developers.filter((dev) => dev.name.toLowerCase().includes(searchTerm.toLowerCase()) || dev.expertise.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase())));

  return (
    <Box p={4}>
      <Input placeholder="Search developers by name or technology" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} mb={4} />
      <Stack spacing={4}>
        {filteredDevelopers.map((dev, index) => (
          <Card key={index}>
            <CardHeader>
              <Heading size="md">{dev.name}</Heading>
            </CardHeader>
            <CardBody>
              <Text>{dev.location}</Text>
              <Stack direction="row" mt={4}>
                {dev.expertise.map((tech, index) => (
                  <Tag key={index} size="sm" variant="solid" colorScheme="teal">
                    {tech}
                  </Tag>
                ))}
              </Stack>
              <Button size="sm" colorScheme="blue" mt={4}>
                Send Message
              </Button>
            </CardBody>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default Developers;
