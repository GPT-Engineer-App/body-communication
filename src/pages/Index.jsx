import { Container, Text, VStack, Heading, Box, Image, IconButton } from "@chakra-ui/react";
import { FaSignal } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="xl" textAlign="center">
          RF Communication in the Human Body
        </Heading>
        <Box boxSize="sm">
          <Image src="https://images.unsplash.com/photo-1606996251932-0ebaf25eb954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxSRiUyMGNvbW11bmljYXRpb24lMjBpbiUyMGh1bWFuJTIwYm9keXxlbnwwfHx8fDE3MTY0ODYwOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="RF Communication" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Radio Frequency (RF) communication within the human body is a fascinating field of study that involves the transmission of data using electromagnetic waves. This technology has significant applications in medical devices, such as pacemakers and implantable sensors, which rely on RF communication to transmit vital information.
        </Text>
        <IconButton aria-label="RF Signal" icon={<FaSignal />} size="lg" />
      </VStack>
    </Container>
  );
};

export default Index;
