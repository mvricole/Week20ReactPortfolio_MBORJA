import React from 'react'
import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import { Flex, Box, Text } from '@chakra-ui/layout';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link, Center } from '@chakra-ui/react';

function Social() {
    return (
        <>
        <Flex
            spacing="200px"
            p="20px"
            flexWrap={"wrap"}
                        >
            <Box align="flex"><Center>
                <Text fontSize="2xl" color="#BD4F6C">Connect with me!</Text>
                <Text color="black.500">
                 I am searching for junior developer or apprenticeship roles at this time. I am also looking for open source opportunities to expand my coding experience.
                 If you're interested in collaborating, please check out my socials below to connect.
                </Text>
                <Text color="black.500">
                You can also email me at mvricole@gmail.com for more information on deliverables. Examples and investment suggestion sheet available upon request. 
                </Text></Center>
            </Box>
        </Flex>
        {/* Below are clickable links to my repositories on github and professional LinkedIn */}
        <HStack spacing="24">
              <Link href="https://github.com/mvricole"><Icon as={FaGithub} boxSize="50" /></Link>
              <Link href="https://www.linkedin.com/in/mariannicoleborja/"><Icon as={FaLinkedin} boxSize="50" /></Link>

            </HStack></>
    );
};

export default Social;
