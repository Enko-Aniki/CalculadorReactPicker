import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

const App = () => {
  const [selectedValue, setSelectedValue] = useState("Soma");
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    let res = 0;

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Erro de Entrada");
      return;
    }

    switch (selectedValue) {
      case "Soma": res = num1 + num2; break;
      case "Menos": res = num1 - num2; break;
      case "Vezes": res = num1 * num2; break;
      case "Divisão":
        res = num2 !== 0 ? num1 / num2 : "Divisão por Zero";
        break;
      default: res = "Inválido"; break;
    }
    setResult(res.toString());
  };

  const clear = () => {
    setNumber1("");
    setNumber2("");
    setResult("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.calculatorBody}>
        <Text style={styles.brandText}>CASIO-TECH 1985</Text>
        
        {/* Visor LCD */}
        <View style={styles.displayContainer}>
          <Text style={styles.operationLabel}>{selectedValue.toUpperCase()}</Text>
          <Text style={styles.resultText}>{result || "0"}</Text>
        </View>

        <Text style={styles.label}>ENTRADA A</Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          placeholderTextColor="#556B2F"
          keyboardType="numeric"
          value={number1}
          onChangeText={setNumber1}
        />

        <Text style={styles.label}>OPERAÇÃO</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedValue}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Adição (+)" value="Soma" />
            <Picker.Item label="Subtração (-)" value="Menos" />
            <Picker.Item label="Multiplicação (x)" value="Vezes" />
            <Picker.Item label="Divisão (÷)" value="Divisão" />
          </Picker>
        </View>

        <Text style={styles.label}>ENTRADA B</Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          placeholderTextColor="#556B2F"
          keyboardType="numeric"
          value={number2}
          onChangeText={setNumber2}
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, styles.buttonCalcular]} onPress={calculate}>
            <Text style={styles.buttonText}>CALCULAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonLimpar]} onPress={clear}>
            <Text style={styles.buttonText}>C/CE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#374151', // Fundo escuro para contrastar
    justifyContent: 'center',
    padding: 20,
  },
  calculatorBody: {
    backgroundColor: '#D1D5DB', // Bege/Cinza retrô
    borderRadius: 12,
    padding: 20,
    borderWidth: 4,
    borderColor: '#9CA3AF',
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.5,
  },
  brandText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#6B7280',
    marginBottom: 10,
    letterSpacing: 2,
  },
  displayContainer: {
    backgroundColor: '#9DAF94', // Verde LCD
    padding: 15,
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#7A8D73',
    height: 90,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  operationLabel: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: '#2D372D',
  },
  resultText: {
    fontSize: 32,
    fontFamily: 'monospace',
    color: '#1A2F1A',
    textAlign: 'right',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#4B5563',
    marginBottom: 5,
    marginLeft: 2,
  },
  input: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    height: 45,
    borderColor: '#9CA3AF',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 18,
    fontFamily: 'monospace',
    color: '#1F2937',
  },
  pickerWrapper: {
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#9CA3AF',
    marginBottom: 15,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flex: 1,
    height: 55,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    // Efeito de sombra/profundidade (tecla)
    borderBottomWidth: 5,
  },
  buttonCalcular: {
    backgroundColor: '#3B82F6',
    borderBottomColor: '#1E40AF',
  },
  buttonLimpar: {
    backgroundColor: '#EF4444',
    borderBottomColor: '#991B1B',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default App;