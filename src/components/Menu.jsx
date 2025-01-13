import { Link } from "react-router-dom";
import { useState } from "react";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Link onClick={() => setOpen(!open)}>
        {open ? (
          <RiCloseFill style={{ fontSize: 30 }} />
        ) : (
          <RiMenu3Fill style={{ fontSize: 28 }} />
        )}
      </Link>
      {open && (
        <div className="absolute z-[9999] bg-black text-white left-0 top-16 flex flex-col items-left w-3/4 h-[calc(100vh)] gap-8 text-xl pt-12 px-8">
          <Link to="/sunglasses" onClick={() => setOpen(!open)}>
            Lentes de Sol
          </Link>
          <Link to="/oftaglasses" onClick={() => setOpen(!open)}>
            Lentes Oftálmicos
          </Link>
          <Link to="/contactlens" onClick={() => setOpen(!open)}>
            Lentes de Contacto
          </Link>
        </div>
      )}
    </div>
  );
}
