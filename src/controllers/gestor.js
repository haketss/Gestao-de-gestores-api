const { HttpHelper } = require('../utils/http-helper');
const { GestorModel } = require('../models/gestor-model');

class GestorController {
    async create(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const {
                nome,
                sobrenome,
                idade,
                genero,
                dataDeNascimento,
                localDeTrabalho,
                CRM,
                tipoDeContrato,
                formacao,
                senhaProvisoria,
                metas,
                atendimentos,
                eventosP
            } = request.body;

            if (!nome || !sobrenome || !idade || !genero || !dataDeNascimento || !localDeTrabalho || !CRM || !tipoDeContrato || !formacao || !senhaProvisoria) {
                return httpHelper.badRequest('Parâmetros inválidos!');
            }
         
            const gestor = await GestorModel.create({
                nome,
                sobrenome,
                idade,
                genero,
                dataDeNascimento,
                localDeTrabalho,
                CRM,
                tipoDeContrato,
                formacao,
                senhaProvisoria,
                metas,
                atendimentos,
                eventosP
            });
            return httpHelper.created(gestor);
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    async getAll(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const gestors = await GestorModel.findAll();
            return httpHelper.ok(gestors);
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    async delete(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { id } = request.params;
            if (!id) return httpHelper.badRequest('Parâmetros inválidos!');
            const gestorExists = await GestorModel.findOne({ where: { id } });
            if (!gestorExists) return httpHelper.notFound('Gestor não encontrado!');
            await GestorModel.destroy({ where: { id } });
            return httpHelper.ok({
                message: 'Gestor deletado com sucesso!'
            })
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    async update(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { id } = request.params;
            const {
                nome,
                sobrenome,
                idade,
                genero,
                dataDeNascimento,
                localDeTrabalho,
                CRM,
                tipoDeContrato,
                formacao,
                senhaProvisoria,
                metas,
                atendimentos,
                eventosP
            } = request.body;

            if (!id) return httpHelper.badRequest('Parâmetros inválidos!');

            const gestorExists = await GestorModel.findByPk(id);
            if (!gestorExists) return httpHelper.notFound('Gestor não encontrado!');
            await GestorModel.update({
                nome,
                sobrenome,
                idade,
                genero,
                dataDeNascimento,
                localDeTrabalho,
                CRM,
                tipoDeContrato,
                formacao,
                senhaProvisoria,
                metas,
                atendimentos,
                eventosP
            }, {
                where: { id }
            });
            return httpHelper.ok({
                message: 'Gestor atualizado com sucesso!'
            });
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }
}

module.exports = { GestorController };
