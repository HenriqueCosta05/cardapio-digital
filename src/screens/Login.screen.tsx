'use client';

import { Button, Header, TextField } from "@/components";

export default function LoginScreen() {
    return (
        <section className="w-full min-h-screen flex flex-col bg-white-theme">
            <Header
                title="Bem-vindo de volta,"
                subtitle="Faça seu login!"
            />
            <div className="px-6 -mt-12 relative mb-6">
                <p className="text-gray-100 text-sm mb-2 font-medium">Preencha os campos abaixo para acessar sua conta.</p>
                <form className="space-y-4 flex flex-col py-16">
                    <TextField
                        id="email"
                        name="email"
                        label="E-mail"
                        placeholder="Ex: nome@mail.com"
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
                        helperText="Digite sua senha"
                        iconName="lock"
                    />
                    <Button
                        variant="base"
                    >
                        Entrar
                    </Button>
                </form>
            </div>
        </section>
    );
}