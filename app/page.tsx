import Navbar from "@/components/common/Navbar";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">Newpro Starter</div>
          
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-primary">Features</a>
            <ThemeToggle />
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl font-bold mb-6">
          Welcome to Your New Project
        </h1>
        <p className="text-xl text-muted-foreground mb-10">
          A clean, modern, and scalable Next.js starter with dark mode, 
          beautiful UI components, and best practices.
        </p>
        <Button size="lg" className="text-lg px-8">
          Start Building
        </Button>
      </div>
    </main>
  );
}