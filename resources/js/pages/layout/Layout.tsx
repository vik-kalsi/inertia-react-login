import { Link } from "@inertiajs/react"

export default function Layout({ children } : {children: React.ReactNode}) {
    return (
        <main>
            
            <header className="flex justify-center gap-7 my-5 font-bold">
                <Link href="/">Home</Link>
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
            </header>

            <article>{children}</article>
        </main>
    )
}