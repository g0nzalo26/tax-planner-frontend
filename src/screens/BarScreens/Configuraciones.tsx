import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { fetchDataMonedas } from "../../api/Api-Monedas";

export default function ConfiguracionesScreen() {

  // Ejemplo de API con valores monetarios

  const [ufValue, setUfValue] = useState(null);
  const [dolarValue, setDolarValue] = useState(null);
  const [utmValue, setUtmValue] = useState(null);

  useEffect(() => {
    fetchDataMonedas()
      .then(dailyIndicators => {
        setUfValue(dailyIndicators.uf.valor);
        setDolarValue(dailyIndicators.dolar.valor);
        setUtmValue(dailyIndicators.utm.valor);
      })
      .catch(error => {
        console.log('Error al obtener los datos:', error);
      });
  }, []);

  return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Valores Monetarios</Text>

        {ufValue && <Text style={styles.valores}>UF: ${ufValue}</Text>}
        {utmValue && <Text style={styles.valores}>UTM: ${utmValue}</Text>}
        {dolarValue && <Text style={styles.valores}>Dólar: ${dolarValue}</Text>}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  valores: {
    fontSize: 20,
    marginBottom: 10,
    color: '#333', 
  },
})
