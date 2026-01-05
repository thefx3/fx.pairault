import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="border-b">
                <Header />
            </header>
    
            <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-10">
            <Outlet />
            </main>
    
            <footer className="border-t py-6 text-sm">
                <Footer />
            </footer>
        </div>
    )
}