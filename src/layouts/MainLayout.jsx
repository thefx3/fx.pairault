import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="border-b">
                <Header />
            </header>
    
            <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-10">
            {children}
            </main>
    
            <footer className="border-t px-4 py-4 text-sm">
                <Footer />
            </footer>
        </div>
    )
}
