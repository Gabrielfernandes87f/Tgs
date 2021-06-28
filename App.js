import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, LogBox } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {database} from './src/config/firebase';

export default function App() {

  LogBox.ignoreLogs([
    'Setting a timer for a long',
  ])

  const [produtos,setProdutos] = useState([]);
  const [descricao,setDescricao] = useState('');
  const [marca,setMarca] = useState('');

  useEffect(() =>{
    database.collection('produtos').onSnapshot((query)=>{
      const list = [];
      query.forEach((doc) =>{
        list.push({...doc.data(), id: doc.id})
      })

      setProdutos(list)
    })
  },[]);

  function addProduto(){
    database.collection('produtos').add({
      descricao,
      marca
    });
  }

  function deletar(id){
    database.collection('produtos').doc(id).delete();
  }

  function atualizar(id){
    database.collection('produtos').doc(id).update({
      descricao,
      marca
    })
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder = 'Descricao' value={descricao} onChangeText={setDescricao}/>
      <TextInput placeholder = 'Descricao' value={marca} onChangeText={setMarca}/>

      <Button title={'Salvar'} onPress={addProduto}/>

      {produtos.map((produto) => {
        return <Text key={produto.descricao} onPress={()=>atualizar(produto.id)}>{produto.descricao} - {produto.marca}</Text>
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
