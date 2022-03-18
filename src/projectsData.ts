import Money from './images/money_heist.png';
import Own from './images/selectpad.jpg';
import Tasty from './images/tasty_cakes.png';
import Falet from './images/blog1.png';

interface TProject {
  img: string;
  link: string;
  name: string;
  id: number;
}

export const projectsData: Array<TProject> = [
  {
    img: Money, 
    link: 'https://money-heist-ashy.vercel.app/', name: 'Money heist', id: 0
  },
  {
    img: Own, 
    link: 'https://selectpad.netlify.app/', name: 'Own JavaScript library', id: 1
  },
  {
    img: Tasty, 
    link: 'https://cakes-d.netlify.app/', name: 'Tasty cakes', id: 2
  },
  {
    img: Falet, 
    link: 'https://dblog-official.vercel.app/', name: 'Daptellum Blog', id: 3
  },
]