import {useState} from 'react';

import {Button, View, TextInput, TouchableOpacity, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styled from 'styled-components';
import { useMutation, useQueryClient } from 'react-query';
import { login } from '../actions/userActions';

type HomeScreenProps = {
  navigation: any;
};

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`;

const Input = styled(TextInput)`
  height: 50px;
  width: 80%;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  color: black;
  margin-bottom: 20px;
`;


const Buttongo = styled(TouchableOpacity)`
  height: 50px;
  width: 80%;
  border-radius: 10px;
  background-color: #4b9ce2;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

const Header = styled(View)`

display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);


`;



const Title = styled(Text)`

font-size: 20px;
  font-weight: 500;
  color: #333;
`;


const OtpScreen = ({navigation}: HomeScreenProps) => {
  const [inputValue, setInputValue] = useState<string>('');

 

   //create instance of queryClient for managing queries and their data in the application
   const queryClient = useQueryClient()
 

   let cachedData:string = queryClient.getQueryData('login')!;


 

  const boom = () => {
  if(Number(inputValue) === Number(cachedData)){
   
    navigation.navigate('Coach');
  }
   
  };

  return (
    <Container>
  
        <Header>
            <Title>Your OTP code is {cachedData.toString()}</Title>
        </Header>
      
   
    <Input
      placeholder="Enter OTP Here"
      placeholderTextColor="#999"
      onChangeText={(value) => setInputValue(value)}
    />
      <Buttongo onPress={boom}>
        <ButtonText>Submit</ButtonText>
      </Buttongo>
  </Container>
  );
};

export default OtpScreen;
