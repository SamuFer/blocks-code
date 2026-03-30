export interface BlockProps {
    title?: string;
    subtitle?: string;
    bgColor?: string;
    buttonText?: string;
    logo?: string;
    links?: string[];
    items?: { title: string; desc: string }[];
    label?: string;
    color?: string;
  }
  
  export interface Block {
    id: string;
    type: 'Navbar' | 'Hero' | 'Features' | 'Button' | 'Footer';
    props: BlockProps;
  }
  