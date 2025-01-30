import { cn } from "@/lib/utils";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <section
            className={cn(
                'min-h-screen flex items-center justify-center py-8 px-2',
                'ld-gradiant-bg ld-animate'
            )}
        >
            {children}
        </section>
    );
}
