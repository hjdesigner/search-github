import PubSub from 'pubsub-js';

export default class TratadorErros {
  publicaErros(erros){
    var erro = erros;
    PubSub.publish("erro-validacao", erro);
    console.log(erro);
  }
}
