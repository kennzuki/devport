import { log } from 'console';
import type { Route } from '../+types/index';


export function meta({}: Route.MetaArgs) {
  return [
    { title: 'devport | welcome' },
    { name: 'description', content: 'Welcome to devport!' },
  ];
}
console.log('Home');

export default function Home() {
  return <section className=''>app ken</section>;
}
