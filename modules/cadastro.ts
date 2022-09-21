function cadastro(){

    console.log (' << Você é pessoa Física ou juridica ?  >>: ')

    console.log (' << 1 - Pessoa Física >>: ')

    const tipoUsuario = prompt (' << 2 - juridica >>: ')

    console.log()
    
    console.log (' $$$$$ SE CADASTRE AQUI!!! $$$$$ '); 
    
    const nomeText = prompt (' <<  - Digite seu nome aqui>>: ');
    console.log();
    
    const idadeText: string = prompt (' <<  - Digite sua data de nascimento>>: ');
    console.log();
    
    const emailText = prompt (' <<  - Digite seu Email:>>: ');
    console.log();
    
    switch (tipoUsuario) {
        case '1':
            const cpfText = prompt ('Digite seu CPF');
                break;
    
        case '2':
            const cnpjText = prompt ('Digite seu CNPJ');
                break;
    
        default:
            
                break;
    }

    console.log();

    const celularText = prompt (' << 5 - Digite seu número>>: ');
    console.log();
    
    const senhaText = prompt (' << 6 Digite a sua senha>>: ');
    console.log();
    
    const cnpjText = prompt (' << 7 Digite seu CNPJ >>: ');
    console.log();
    
    
    
    console.log('|$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$|');
    console.log(`|$$$$$ MUITO OBRIGADO SR(A):${nomeText}$$$$$$|`);
    console.log('|$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$|');
    
    console.log()
    
    console.log('|$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$|');
    console.log('|$$ OBRIGADO POR SER CADASTRAR NA GENBANK! $$|');
    console.log('|$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$|');
    
    console.log()
    
    console.log('|$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$|');
    console.log('|$$$$$$$ CONTINUE PARA A TELA DE LOGIN $$$$$$$|');
    console.log('|$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$|');
    
    
    }
  

module.exports = cadastro;