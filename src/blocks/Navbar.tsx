export const Navbar = ({ logo, links }: any) => (
    <nav className="flex justify-between items-center p-6 bg-white shadow-sm rounded-xl mb-4">
      <div className="font-bold text-xl text-slate-800 tracking-tighter">{logo}</div>
      <div className="flex gap-6 text-sm font-medium text-slate-600">
        {links?.map((link: string, i: number) => <span key={i} className="hover:text-blue-600 cursor-pointer">{link}</span>)}
      </div>
    </nav>
  );
  