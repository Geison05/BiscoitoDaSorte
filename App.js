import { Component } from 'react';
import { StyleSheet,TouchableOpacity, Text, View, Image } from 'react-native';

 class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        textoFrases: 'Siga os bons e aprenda com eles.',
        img:require('./src/biscoito.png')
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais que muito conhecimento.',
      'O riso é a menor distancia entre duas pessoas.',
      'Deixe de lado as preocupacões e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossivel.',
      'Acredite em milagres, mas não depende deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    
    this.setState({
      textoFrases:' "'+ this.frases[numeroAleatorio] + '" ',
      img: require('./src/biscoitoAberto.png')
    });

  }

  render(){ 
    return (
      <View style={styles.container}>
     <Image 
      source={this.state.img}
      Style={styles.img}
      />
      
      <Text style={styles.textoFrase}>{this.state.textoFrases}</Text>

      <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>
            Quebrar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
     </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width: 250,
    height: 250    
  },
  textoFrase:{
    fontSize:20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

export default App;
