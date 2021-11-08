import React from "react";
import axios from 'axios';
import {TextField, Button  } from '@material-ui/core';
import { useForm } from "react-hook-form";

function ContactForm(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const fieldCreator = (name) =>{
        return (
            <div class="formField">
                {
                    name === "message" ?
                    <TextField 
                    variant="filled"
                    rows={4}
                    multiline maxRows={4}
                    label={name}
                    id={name}
                    {...register(name, {required:true})}
                     />

                    :

                    <TextField 
                    variant="filled"
                    label={name}
                    id={name}
                    {...register(name, {required:true})}
                     />
                }
                {errors[name] && <span>`${name}` is required</span>}                
            </div>
            )
        }
        const onSubmit = data =>{
            SubmitReq(data)
        };

        const SubmitReq = (data) =>{
            const newMessage = `Date: ${new Date()} \n\ Name: ${data['first name']} ${data['last name']} \n\ Phone Number: ${data['phone number']} \n\ Subject: ${data.subject}`
            axios({
                url: 'https://formspree.io/f/mwkwnklq', 
                method: 'post',
                headers: {
                  'Accept': 'application/json'
                },
                data: {
                  email: data['e-mail'],
                  subject: newMessage,
                  message: data.message,
                }
            })
            .then(req =>{
                console.log(req)
            })
        }
    return(
        <div class="formContainer">
            <form>
                <div>
                    <div class="topFields">
                        {fieldCreator('first name')}
                        {fieldCreator('last name')}
                    </div>
                    <div class="topFields">
                        {fieldCreator('e-mail')}
                        {fieldCreator('phone number')}
                    </div>
                </div>
                {fieldCreator('subject')}
                {fieldCreator('message')}
                <Button onClick={onSubmit} variant="outlined">Submit</Button>
            </form>
        </div>
    )
}

export default ContactForm;