const conexao = require("../database/connection")
module.exports = {
    
    async cadastrar(request, response) {

        const dadosCadastro = request.body
    
        const resultado = await conexao('clientes').insert(dadosCadastro)
    
        return response.json(resultado)
    },
    async index(request, response) {

        const resultadoBusca = await conexao('clientes').select('*');
    
        return response.json(resultadoBusca);
    },
    async buscar(request, response) {

        const { id } = request.params
    
        const resultadoBusca = await conexao('clientes').select('*').where('id', id);
    
    },
    async apagar(request, response) {
        const { id } = request.params
        await conexao('clientes').where('id', id).delete();
        return response.status(204).send()
    },
    async atualizar(request, response) {
        const { id } = request.params
        const {
            nome,
            sobrenome,
            cpf,
            sexo,
            endereco,
            cidade,
            uf,
            email,
            celular
        } = request.body

        await conexao('clientes')
            .where('id', id)
            .update({
                nome: nome,
                sobrenome: sobrenome,
                cpf: cpf,
                sexo: sexo,
                endereco: endereco,
                cidade: cidade,
                uf: uf,
                email: email,
                celular: celular,
            });

        return response.json('Cadastro atualizado com sucesso');
    }
}