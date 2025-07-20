interface HeaderProps { 
    title?: string;
    subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
    return (
        <header className="p-6 pt-12 space-y-6 bg-primary-light text-white-theme relative pb-14 w-full">
            <h1 className="text-3xl font-bold">
                {title || "Olá,"}
                <span className="block text-3xl">{subtitle || "Seja bem-vindo(a)!"}</span>
            </h1>
        </header>
    );
}