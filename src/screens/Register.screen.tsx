'use client';

import { Button, Header, TextField } from "@/components";

export default function RegisterScreen() {
    return (
        <section className="w-full min-h-screen flex flex-col bg-white-theme">
            <Header
                title="Para começar,"
                subtitle="Faça seu cadastro!"
            />
            <div className="px-6 -mt-12 relative mb-6">
                <p className="text-gray-100 text-sm mb-2 font-medium">Preencha os campos abaixo para criar sua conta.</p>
                <form className="space-y-4 flex flex-col py-16">
                    <TextField
                        id="name"
                        name="name"
                        label="Nome Completo"
                        placeholder="Ex: João da Silva"
                        value=""
                        onChange={() => { }}
                        variant="icon"
                        iconName="user"
                        helperText="Digite seu nome completo"
                    />
                    <TextField
                        id="email"
                        name="email"
                        label="E-mail"
                        placeholder="Ex: joao@email.com"
                        value=""
                        onChange={() => { }}
                        variant="icon"
                        iconName="mail"
                        helperText="Digite seu e-mail"
                    />
                    <TextField
                        id="password"
                        name="password"
                        label="Senha"
                        placeholder="Digite sua senha"
                        variant="password"
                        value=""
                        onChange={() => { }}
                        helperText="Crie uma senha segura"
                        iconName="lock"
                    />
                    <TextField
                        id="confirm-password"
                        name="confirm-password"
                        label="Confirmar Senha"
                        placeholder="Confirme sua senha"
                        value=""
                        onChange={() => { }}
                        variant="password"
                        helperText="Confirme sua senha"
                        iconName="lock"
                    />
                </form>
            </div>
            <div className="px-12 w-full flex justify-end">
                <Button 
                    variant="base"
                    onClick={() => alert("Cadastro realizado com sucesso!")}
                >
                    Criar Conta
                </Button>
            </div>
        </section>
    )
}