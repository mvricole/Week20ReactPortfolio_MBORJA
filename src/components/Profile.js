import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Text, Link } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';



function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Flex>
        {/* Languages Used */}
        <Box>
            <Text fontSize="4xl" fontWeight="semibold">Skills and Languages Used</Text>
            <Text color= "black.500">
            HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, Handlebars, React.js, Node.js, Database Theory, MongoDB, MySQL, Git
            </Text>
            </Box>
        {/* Sample Work  */}
            <Box alignSelf="center" px="32" py="16">
                
                <Text fontWeight="bold" fontSize="2xl">Sample Work</Text>
                <Text fontWeight="light" fontSize="xl">Below are some examples of projects I have worked on.</Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "#BD4F6C", }}>
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                        <Link href='https://aurorayihe.github.io/BreakHub_theThunderCats/'>BreakHub</Link>
                        </Text>
                    </Flex>

                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "#BD4F6C", }}>
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                        <Link href='https://mvricole.github.io/Week6_WeatherForecastChallengeMB/'>Weather Dashboard</Link>
                        </Text>
                    </Flex>

                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "#BD4F6C", }}>
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                        <Link href='https://github.com/mvricole/Week10TeamGenerator_MBORJA'>Team Generator</Link>
                        </Text>
                    </Flex>

                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "#BD4F6C", }}>
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">       
                        <Link href='https://beemyfriend.herokuapp.com/'>Bee My Friend</Link>
                        </Text>
                    </Flex>

                </Flex>

            </Box>
        </Flex>
    )
}

export default Profile;
