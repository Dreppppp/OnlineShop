import AOSProvider from "@/providers/AOSProvider";

export default function productDetailPage({
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
  