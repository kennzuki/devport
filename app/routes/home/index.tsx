import { log } from 'console';
import type { Route } from '../+types/home/index';

import Hero from '~/components/Hero';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'devport | welcome' },
    { name: 'description', content: 'Welcome to devport!' },
  ];
}


export default function Home() {
  return (
    <section className=''>
  
    </section>
  );
}
