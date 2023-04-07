import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native"
import ResultIMC from "./ResultIMC/";

export default function Form(){

    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [messageImc, setMessageImc] = useState("Preencha a Altura e o Peso")
    const [imc, setImc] = useState(0)
    const [TextButton, setTextButton] = useState("Calcular")

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }
    
    function validationImc(){
        if (weight != 0 && height != 0){
            imcCalculator()
            setMessageImc("Seu imc é ")
            setTextButton("Calcular novamente")
            return
        }
        
    }

    return(
        
           <View>
               <View>
               <Text>Altura</Text>
               <TextInput onChangeText={setHeight} value={height} placeholder="Ex. 1.75" keyboardType="numeric"></TextInput>

               <Text>Peso</Text>
               <TextInput onChangeText={setWeight} value={weight} placeholder="Ex. 75.365" keyboardType="numeric"></TextInput>

               <Button onPress={validationImc} title={TextButton}></Button>
               </View>
                <ResultIMC messageResultIMC={messageImc} resultIMC={imc}></ResultIMC>
           </View>
    );
}