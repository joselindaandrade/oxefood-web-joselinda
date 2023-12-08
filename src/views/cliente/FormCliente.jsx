import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { mensagemErro, notifyError, notifySuccess } from '../../views/util/Util';

export default function FormCliente() {
    const { state } = useLocation();
    const [idCliente, setIdCliente] = useState();
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8082/api/cliente/" + state.id)
                .then((response) => {
                    setIdCliente(response.data.id)
                    setNome(response.data.nome)
                    setCpf(response.data.cpf)
                    setDataNascimento(formatarData(response.data.dataNascimento))
                    setFoneCelular(response.data.foneCelular)
                    setFoneFixo(response.data.foneFixo)
                })
        }
    }, [state])
    function formatarData(dataParam) {
        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }
        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }
    function salvar() {
        let clienteRequest = {
            nome: nome,
            cpf: cpf,
            dataNascimento: dataNascimento,
            foneCelular: foneCelular,
            foneFixo: foneFixo
        }
        if (idCliente != null) { //Alteração:
            axios.put("http://localhost:8082/api/cliente/" + idCliente, clienteRequest)
                .then((response) => { console.log('Cliente alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alter um cliente.') })
        } else { //Cadastro:
            axios.post("http://localhost:8082/api/cliente", clienteRequest)
                .then((response) => { console.log('Cliente cadastrado com sucesso.') })
                .catch((error) => { console.log('Erro ao incluir o cliente.') })
                .then((response) => {
                    notifySuccess('Cliente cadastrado com sucesso.')
                })

                .catch((error) => {
                    if (error.response) {
                        notifyError(error.response.data.errors[0].defaultMessage)
                    } else {
                        notifyError(mensagemErro)
                    }
                })
        }
    }
}