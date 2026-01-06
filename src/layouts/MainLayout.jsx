import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-[#1c1c2a] text-[#d7d6e3]">
            <header className="sticky top-0 backdrop-blur-xl backdrop-brightness-90 z-100">
                <Header />
            </header>
    
            <main className="flex-1 justify-items-center justify-center text-center max-w-5xl mx-auto w-full px-4 py-12">
            {children}
            </main>
    
            <footer className="text-sm">
                <Footer />
            </footer>
        </div>
    )
}
