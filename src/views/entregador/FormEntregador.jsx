import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormProduto () {

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    /> 
                                </Form.Input>
                                <Form.Input
                                    
                                    fluid
                                    label='RG'>
                                    <InputMask
                                        required
                                        mask="999.99-99"
                                    /> 
                                </Form.Input>
                        </Form.Group>
                        <Form.Group>
                                <Form.Input
                                    
                                    fluid
                                    label='DT nascimento'>
                                    <InputMask
                                        required
                                        mask="99-99-9999"
                                    /> 
                                </Form.Input>
                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'>
                                    <InputMask
                                        required
                                        mask="99.9999.9999"
                                    /> 
                                </Form.Input>
                                <Form.Input
                                    
                                    fluid
                                    label='Fone Fixo'>
                                    <InputMask
                                        required
                                        mask="99.9999.9999"
                                    /> 
                                </Form.Input>
                                <Form.Input
                                    
                                    fluid
                                    label='QTD entregas realizadas'>
                                    <InputMask
                                        required
                                        mask="999999"
                                    /> 
                                </Form.Input>
                                <Form.Input
                                    
                                    fluid
                                    label='valor por frete'>
                                    <InputMask
                                        required
                                        
                                    /> 
                                </Form.Input>
                                </Form.Group>
                                <Form.Group>
                                <Form.Input
                                    
                                    fluid
                                    label='Rua'>
                                    <InputMask
                                        required
                                        
                                    /> 
                                </Form.Input>
                                
                                <Form.Input
                            
                                    fluid
                                    label='Numero'>
                                    <InputMask
                                        required
                                        
                                    /> 
                                </Form.Input>
                                </Form.Group>
                                <Form.Group>
                                <Form.Input
                                    
                                    fluid
                                    label='Bairro'>
                                    <InputMask
                                        required
                                        /> 
                                </Form.Input>
                                <Form.Input
                                    
                                    fluid
                                    label='Cidade'>
                                    <InputMask
                                        required
                                    
                                    /> 
                                </Form.Input>
                                <Form.Input
                                    
                                    fluid
                                    label='CEP'>
                                    <InputMask
                                        required
                                        mask="99.999-999"
                                    /> 
                                </Form.Input>
                                </Form.Group>
                                <Form.Group>
                                <Form.Input
                                    
                                    fluid
                                    label='UF'>
                                    <InputMask
                                        required
                                        
                                    /> 
                                </Form.Input>
                                </Form.Group>
                                <Form.Group>
                                <Form.Input
                                    
                                    fluid
                                    label='Complemento'>
                                    <InputMask
                                        required
                                        
                                    /> 
                                </Form.Input>
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                            </Form.Group>
                            <Form.TextArea label='Descrição' placeholder='Tell us more about you...' />
                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Valor Unitario*'
                                    width={6}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega mínimo em minutos'
                                    width={6}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega màximo em minutos'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                    /> 
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Listar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
