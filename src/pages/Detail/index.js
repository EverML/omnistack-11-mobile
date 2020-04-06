import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';



import logoImg from '../../assets/logo.png';

import styles from './styles.js';

export default function Detail() {

    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    const valorFormatado = Intl.NumberFormat('es-PY',{style: 'currency',currency: 'PYG'}).format(incident.value);
    const message = `
    Hola,${incident.name}, estoy entrando en contacto pues me gustaria ayudar en el caso: ${incident.title}  con el valor de ${valorFormatado}`;

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Heroe del caso: ${incident.title}`,
            recipients: [incident.email],
            body: message
        });
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
    <Text style={styles.incidentValue}>{incident.name}, de {incident.city} / {incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{valorFormatado}</Text>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve el dia!</Text>
                <Text style={styles.heroTitle}>Sea el Héroe de este caso.</Text>

                <Text style={styles.heroDescription}>Entre en contacto</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}