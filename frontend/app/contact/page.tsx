import Link from 'next/link';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import ContactSection from '@/components/sections/contact-section';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">
            <Nav />
            <div className="pt-20">
                <ContactSection />
            </div>
            <Footer />
        </main>
    );
}
