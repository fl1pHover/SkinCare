import {
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { TbMessages } from 'react-icons/tb';
import MainContainer from '../layout/mainContainer';
import Hding from '../utils/hding';

const Service = () => {
  return (
    <MainContainer id="about" as="section">
      <Grid
        templateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
        }}
        height="100%"
        position={'relative'}
        zIndex="2"
      >
        <GridItem height={{ base: '240px', md: '100%' }}>
          <Image
            src="/avatar/1.jpg"
            objectFit="cover"
            height={'full'}
            width="full"
            alt="a"
          />
          {/* <Box
                              backgroundImage="url(
                                   'https://pathwell.axiomthemes.com/wp-content/uploads/2017/10/bg-21-copyright.jpg'
                              )"
                         ></Box> */}
        </GridItem>
        <GridItem
          p={{ base: '2em', sm: '3em', md: '4.5em' }}
          bgColor={'bgGrey'}
          textAlign="center"
        >
          <VStack
            justifyContent={'space-between'}
            height="full"
            textStyle={'main'}
          >
            <Hding h1={'Professional Care You Can Trust'} h3={'Бидний тухай'} />
            <Text>
              Танд арьсны ямар нэг өвчний шинж илэрсэн бол, олон жил арьсны
              өвчнөөр шаналж байгаа бол дэвшилтэт технологи, чанар, тав тух,
              сэтгэл ханамжтай эмчилгээ үйлчилгээгээр тэргүүлэгч Магадлан
              итгэмжлэгдсэн &quot;Мон Шинжүкү скин мед&quot; эмнэлэгт хандаарай
            </Text>
            <Text>
              Үзлэгийн цаг: Даваа-Баасан 9:0-16:30 Үзлэгийн цаг авах дугаар:
              99665511 Зөвөлгөө, мэдээлэл авах дугаар: 88330044
            </Text>

            <Flex>
              <Center
                borderRadius={'100%'}
                width="60px"
                height="60px"
                bgColor="pink"
                color={'white'}
                fontSize="30px"
              >
                <TbMessages />
              </Center>
            </Flex>
            <Link href="/">
              <Text textStyle={'red'}>yourwebsite@info.com</Text>
            </Link>
          </VStack>
        </GridItem>
      </Grid>
    </MainContainer>
  );
};

export default Service;
