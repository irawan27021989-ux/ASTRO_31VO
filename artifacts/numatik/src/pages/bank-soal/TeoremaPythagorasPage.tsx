import { ArrowLeft, Triangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageNavigation from "@/components/PageNavigation";

const BankSoalTeoremaPythagorasPage = () => {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen flex flex-col items-center gradient-space overflow-x-hidden">
      <PageNavigation prevPath="/bank-soal" />
      <section className="relative z-10 flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-4 py-20 text-center">
        <Triangle className="mb-5 h-12 w-12 text-primary" aria-hidden="true" />
        <h1 className="font-display text-xl font-bold text-primary md:text-2xl">
          BANK SOAL TEOREMA PYTHAGORAS
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Soal, pembahasan, dan gambar Teorema Pythagoras telah dipindahkan ke TES KOMPETENSI AKADEMIK – MODUL PEMANTAPAN 2026-2027 agar tidak terjadi duplikasi.
        </p>
        <button
          type="button"
          onClick={() => navigate("/bank-soal")}
          className="mt-8 inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary/50 hover:bg-primary/20"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Kembali ke Bank Soal
        </button>
      </section>
    </main>
  );
};

export default BankSoalTeoremaPythagorasPage;
