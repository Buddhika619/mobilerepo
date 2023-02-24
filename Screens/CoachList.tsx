import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from '../components/FlatCards'
import ElevatedCards from '../components/ElevatedCards';
import FancyCard from '../components/FancyCard';
import ActionCard from '../components/ActionCard';
import ContactList from '../components/ContactList';
import { useQueryClient } from 'react-query';

const Card = () => {

  const queryClient = useQueryClient()

 

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard/>
        <ContactList/>
      
      </ScrollView>
    </SafeAreaView>
  );
};

export default Card;