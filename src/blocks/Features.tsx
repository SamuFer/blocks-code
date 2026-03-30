export const Features = ({ items, title }: any) => (
    <section className="py-12 bg-white rounded-2xl px-8 shadow-sm">
      <h2 className="text-2xl font-bold text-center mb-8 text-slate-800">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items?.map((item: any, i: number) => (
          <div key={i} className="text-center p-4 border border-slate-100 rounded-xl">
            <div className="text-blue-500 mb-4 flex justify-center">🚀</div>
            <h3 className="font-bold text-slate-700">{item.title}</h3>
            <p className="text-slate-500 text-sm mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
  