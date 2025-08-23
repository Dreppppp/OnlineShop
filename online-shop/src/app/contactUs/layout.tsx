import AOSProvider from "@/providers/AOSProvider";

export default function contactLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <AOSProvider>
      <section>
          {children}
      </section>
      </AOSProvider>
    );
  }
  