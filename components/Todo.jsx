import { CheckBox,Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

const Todo = () => {
const [todo, setTodo] = useState('')
const [list, setList] = useState([])
const data = useSelector((state)=>state.cart.user)
const [isEdit, setIsEdit] = useState(false)
const [editIndex, setEditIndex] = useState(null)

const navigation = useNavigation()

const addHandler=()=>{
    if(todo.trim() !== ''){
        setList([...list, {text:todo, isChecked:false}])
    }
    setTodo('')
    console.log(list)
    Toast.show({
        type: "success",
        text1: "Todo added successfully"
    })
}


const toggleHandler=(index)=>{
    let item = [...list]
    item[index].isChecked = !item[index].isChecked 
    setList(item)
    console.log(item)
    Toast.show({
        type: "success",
        text1: "Todo updated successfully"
    })
}

const deleteHandler=(index)=>{
    let item = [...list]
    item.splice(index,1)
    setList(item)
    Toast.show({
        type: "success",
        text1: "Todo deleted successfully"
    })
}

const editHandler=(val,index)=>{
    setTodo(val)
    setEditIndex(index)
    setIsEdit(true)
}

const saveHandler=()=>{
    let item = [...list]
    item[editIndex].text = todo 
    setList(item)
    setIsEdit(false)
    setTodo('')
    Toast.show({
        type: "success",
        text1: "successfully updated"
    })
}


  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.nav}>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                <AntDesign name="arrowleft" size={30} color="black"/>
            </TouchableOpacity>
            <Text style={{color: 'black', fontSize: 20, fontWeight:'bold'}}>Welcome {data.name}</Text>
            <Image
                source={require('../assests/Screenshot_2024_0523_163845.jpg')}
                style={styles.profilePic}
            />
        </View>
        <View style={styles.imgSec}>
            <Image
                source={require('../assests/To-do-list-cuate.png')}
                style={styles.todoImg}
            />
        </View>

        <ScrollView>
            <View>
                <Text style={{color:'black', fontSize:50, textAlign:'center'}}>Todo App</Text>       
            </View>

            <View style={styles.main}>
                    <TextInput
                        placeholder='Fullname'
                        placeholderTextColor="#888"
                        style={styles.inp}
                        value={todo}
                        onChangeText={(data)=>{
                            console.log(todo)
                            setTodo(data)
                        }}
                    />  
                    {!isEdit && (
                        <TouchableOpacity style={styles.addTodo} onPress={addHandler}>
                            <Text style={{color:'#fff', fontWeight:'bold'}}>Add</Text>
                        </TouchableOpacity>
                    )}
                    {isEdit && (
                        <TouchableOpacity style={styles.addTodo} onPress={saveHandler}>
                            <Text style={{color:'#fff', fontWeight:'bold'}}>Save</Text>
                        </TouchableOpacity>
                    )}
                    {
                        list.map((x,index)=>(
                            <View key={index} style={styles.todo_container}>
                                <Text style={x.isChecked ? styles.txt1 : styles.txt2 }>{x.text}</Text>
                                
                                <View style={styles.icons}>
                                    {x.isChecked && (
                                        <Ionicons name="checkbox" size={30} color="#fff" onPress={()=>toggleHandler(index)}/>
                                    )}
                                    {!x.isChecked && (
                                        <MaterialCommunityIcons name="checkbox-blank-outline" size={30} color="#fff" onPress={()=>toggleHandler(index)}/>
                                    )}
                                    <MaterialCommunityIcons name="delete" size={30} color="#fff" style={styles.edit} onPress={()=>deleteHandler(index)}/>
                                    <Feather name="edit" size={30} color="#fff" style={styles.edit} onPress={()=>editHandler(x.text,index)}/>
                                </View>

                            </View>
                        ))
                    }
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Todo

const styles = StyleSheet.create({
    todoImg: {
        height: 200,
        width: 200
    },
    imgSec: {
        height: 200,
        borderBottomWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePic: {
        width: 50, 
        height: 50,
        borderRadius: 50
    },
    nav:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 7
    },
    inp: {
        borderWidth: 1,
        borderColor: 'blue',
        color: 'black',
        borderRadius: 10,
        marginVertical: 7,
        marginBottom: 15,
        marginHorizontal: 15
    },
    addTodo:{
        paddingVertical: 15,
        backgroundColor: 'black',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 5,
        marginHorizontal: 15,
        marginBottom: 30
    },
    todo_container: {
        backgroundColor: '#0ABDE3',
        marginHorizontal:15,
        marginVertical: 4,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:7,
        alignItems: 'center'
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#f0f0f0',
      },
      icons: {
        flexDirection: 'row', 
        color: '#fff',
      },
      edit: {
        marginLeft: 10
      },
      txt1: {
        color: '#fff',
        fontSize:18,
        fontWeight: 'bold',
        textDecorationLine: "line-through",
        textDecorationStyle: "solid",
        textDecorationColor: "#000",
      },
      txt2: {
        color: '#fff',
        fontSize:18,
        fontWeight: 'bold'
      }
})