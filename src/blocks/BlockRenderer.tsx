import { Block } from '@/types'
import { Hero } from './Hero';
import { ButtonBlock } from './ButtonBlock';
import { Navbar } from './Navbar';
import { Features } from './Features';
import {Footer} from './Footer'

const COMPONENTS: Record<string, any> = {
  Hero,
  Button: ButtonBlock,
  Navbar,
  Features,
  Footer
};

export default function BlockRenderer({ block }: { block: any }) {
    const Component = COMPONENTS[block.type];
    
    // 1. Validar que el componente existe
    if (!Component) return <div className="p-4 bg-red-50 text-red-500 border border-red-200 rounded-lg">Bloque "{block.type}" no reconocido</div>;
  
    // 2. Validar que tiene props (si no, pasamos un objeto vacío para que no explote)
    const safeProps = block.props || {};
  
    return <Component {...safeProps} />;
  }
  