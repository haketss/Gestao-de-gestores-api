const { HttpHelper } = require('../utils/http-helper');
const { EventoModel } = require('../models/evento-model');

class EventoController {
    async create(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { nome, data, adendo } = request.body;

            if (!nome || !data) {
                return httpHelper.badRequest('Parâmetros inválidos!');
            }
         
            const evento = await EventoModel.create({ nome, data, adendo });
            return httpHelper.created(evento);
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    async getAll(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const eventos = await EventoModel.findAll();
            return httpHelper.ok(eventos);
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    async delete(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { id } = request.params;
            if (!id) return httpHelper.badRequest('Parâmetros inválidos!');
            const eventoExists = await EventoModel.findOne({ where: { id } });
            if (!eventoExists) return httpHelper.notFound('Evento não encontrado!');
            await EventoModel.destroy({ where: { id } });
            return httpHelper.ok({
                message: 'Evento deletado com sucesso!'
            })
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    async update(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { id } = request.params;
            const { nome, data, adendo } = request.body;
            if (!id) return httpHelper.badRequest('Parâmetros inválidos!');

            const eventoExists = await EventoModel.findByPk(id);
            if (!eventoExists) return httpHelper.notFound('Evento não encontrado!');
            
            await EventoModel.update({
                nome,
                data,
                adendo
            }, {
                where: { id }
            });
            
            return httpHelper.ok({
                message: 'Evento atualizado com sucesso!'
            });
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }
}

module.exports = { EventoController };
