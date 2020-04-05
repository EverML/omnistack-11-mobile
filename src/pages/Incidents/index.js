import React from 'react';
import { View, Text, Image,Button,TouchableOpacity } from 'react-native';


import logoImg from '../../assets/logo.png';

import styles from './styles.js';

export default function Incidents() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}> 0 casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bienvenido!</Text>
            <Text style={styles.description}>Elija uno de los casos abajo y salve el dia!</Text>
            

            <View style={styles.incidentList}>
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>APAD</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>PERRA ATROPELLADA</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>R$ 120,00</Text>
                    
                    <TouchableOpacity style="styles.detailsButton" onPress={()=> {}}>
                    <Text>Ver mas detalles</Text>
                    </TouchableOpacity>    
                </View>
            </View>
        </View>
    );
}