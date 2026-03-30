import { cn } from "@/lib/utils";
import { BlockProps } from "@/types";

export const Hero = ({ title, subtitle, bgColor, buttonText }: BlockProps) => {
  return (
    <section 
      style={{ backgroundColor: bgColor }}
      className={cn(
        "p-16 rounded-2xl shadow-xl text-center text-white transition-all",
        "hover:shadow-2xl hover:scale-[1.01]" // Ejemplo de cómo añadir clases fijas con cn
      )}
    >
      <h1 className="text-5xl font-black tracking-tight">{title}</h1>
      <p className="opacity-90 mt-6 text-xl max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      <button className="mt-10 px-8 py-3 bg-white text-slate-900 rounded-full font-bold shadow-lg hover:bg-slate-100 transition-colors">
        {buttonText}
      </button>
    </section>
  );
};
