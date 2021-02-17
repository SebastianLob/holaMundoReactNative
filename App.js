
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Dimensions, FlatList, SectionList } from 'react-native';
import Constants from "expo-constants";

export default function App() {
  const secciones = [
    {
      title: 'Grupo 1',
      data: [
        {key: '1', nombre: 'Sebastian1'},
        {key: '2', nombre: 'Sebastian2'},
        {key: '3', nombre: 'Sebastian2'},
        {key: '4', nombre: 'Sebastian2'},
        {key: '5', nombre: 'Sebastian2'},
        
      ]
    },
    {
      title: 'Grupo 2',
      data: [
        {key: '6', nombre: 'Sebastian3'},
        {key: '7', nombre: 'Sebastian4'}
      ]
    },
    {
      title: 'Grupo 3',
      data: [
        {key: '8', nombre: 'Sebastian5'},
        {key: '9', nombre: 'Sebastian6'},
        {key: '10', nombre: 'Sebastian2'},
        {key: '11', nombre: 'Sebastian2'},
        {key: '12', nombre: 'Sebastian2'},
        
      ]
    },
    {
      title: 'Grupo 4',
      data: [
        {key: '13', nombre: 'Sebastian7'},
        {key: '14', nombre: 'Sebastian8'}
      ]
    },
    {
      title: 'Grupo 5',
      data: [
        {key: '15', nombre: 'Sebastian9'},
        {key: '16', nombre: 'Sebastian10'},
        {key: '17', nombre: 'Sebastian2'},
      ]
    },
    {
      title: 'Grupo 6',
      data: [
        {key: '18', nombre: 'Sebastian9'},
        {key: '19', nombre: 'Sebastian10'},
        {key: '20', nombre: 'Sebastian2'},
      ]
    },{
      title: 'Grupo 7',
      data: [
        {key: '21', nombre: 'Sebastian9'},
        {key: '22', nombre: 'Sebastian10'},
        {key: '23', nombre: 'Sebastian2'},
        {key: '24', nombre: 'Sebastian2'},
        {key: '25', nombre: 'Sebastian2'},
        {key: '26', nombre: 'Sebastian2'},
      ]
    },
  ]

  return (
    <View style={styles.container}>
      <SectionList
        sections={secciones}
        renderItem={({item}) => <Text style={styles.item}>{item.nombre}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 25,
    paddingHorizontal: 10,
    backgroundColor: 'lightgray',
    borderLeftColor: 'black',
    borderLeftWidth: 2,
    fontWeight: 'bold'
  },
  item: {
    fontSize: 17,
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  // input: {
  //   borderWidth: 1,
  //   borderColor: 'gray',
  //   fontSize: 20,
  //   borderRadius: 10,
  //   paddingHorizontal: 10,
  //   paddingVertical: 2,
  //   textAlign: 'center',
  //   marginBottom: 15,
  //   alignItems: "baseline",
  //   marginHorizontal: 10,
  //   width: 300
  // },
});
