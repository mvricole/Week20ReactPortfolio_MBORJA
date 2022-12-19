// import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { StackDivider, Circle, Flex, Box, Text, VStack } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'

function Header() {

    // Media query for alternative devices, this one comes from Chakra itself.
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'>
            <Circle position="absolute" bg="pink.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />
            <Flex>
                <Box>
                    <Text fontSize="4xl" fontWeight="light">Welcome to my portfolio!</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, #D7816A, #BD4F6C)" bgClip='text' >Marian Nicole Borja</Text>
                    <Text fontSize="2xl" color="#BD4F6C">Web Development • User Generated Content • Social Media Management • Mental Health Advocate</Text>
                    <Text color= "black.500">
                    Hi! My name is Nicole, I am a Filipina American creative and web developer living in Southern California.
                    I am passionate about producing genuine and engaging applications for you and your brand.
                    I have been creating content since I was 12 years old and have since then created projects spanning from portraits for local polictical campaigns to short form content for brands and listings.
                    My career background in grant writing and non-profit management has influenced me to be results-driven. I find true joy in optimizing systems and finding best practices to increase productivity and engagement with your brand. 
                    </Text>
                </Box>
                <Image 
                    alignSelf="center"
                    borderRadius='full'
                    backgroundColor="transparent" 
                    boxShadow="lg"
                    boxSize="400px" 
                    src={'https://i.ibb.co/1J8zMJL/slack-sample-1.jpg'}/>
            </Flex>
        </VStack>
    )
}

export default Header;
