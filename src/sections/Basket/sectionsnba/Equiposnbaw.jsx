import React from 'react';
import img1 from '../../../image/basket/Equipos/celtics.png';
import img2 from '../../../image/basket/Equipos/lakers.png';
import img3 from '../../../image/basket/Equipos/warriors.png';
import img4 from '../../../image/basket/Equipos/bulls.png';
import img5 from '../../../image/basket/Equipos/spurs.png';
import img6 from '../../../image/basket/Equipos/76ers.png';
import img7 from '../../../image/basket/Equipos/pistons.png';
import img8 from '../../../image/basket/Equipos/heat.png';
import img9 from '../../../image/basket/Equipos/rockets.png';
import img10 from '../../../image/basket/Equipos/knicks.png';
import img11 from '../../../image/basket/Equipos/bucks.png';
import img12 from '../../../image/basket/Equipos/cavaliers.png';
import img13 from '../../../image/basket/Equipos/mavericks.png';
import img14 from '../../../image/basket/Equipos/raptors.png';
import img15 from '../../../image/basket/Equipos/nuggets.png';
import img16 from '../../../image/basket/Equipos/wizards.png';
import img17 from '../../../image/basket/Equipos/trailblazers.png';
import img18 from '../../../image/basket/Equipos/hawks.png';
import img19 from '../../../image/basket/Equipos/kings.png';
import img20 from '../../../image/basket/Equipos/thunder.png';
import img21 from '../../../image/basket/Equipos/suns.png';
import img22 from '../../../image/basket/Equipos/jazz.png';
import img23 from '../../../image/basket/Equipos/pacers.png';
import img24 from '../../../image/basket/Equipos/magic.png';
import img25 from '../../../image/basket/Equipos/nets.png';
import img26 from '../../../image/basket/Equipos/hornets.png';
import img27 from '../../../image/basket/Equipos/timberwolves.png';
import img28 from '../../../image/basket/Equipos/pelicans.png';
import img29 from '../../../image/basket/Equipos/grizzlies.png';
import img30 from '../../../image/basket/Equipos/clippers.png';
// WNBA
import img38 from '../../../image/basket/Equipos/lynx.png';
import img41 from '../../../image/basket/Equipos/storm.png';
import img37 from '../../../image/basket/Equipos/sparks.png';
import img40 from '../../../image/basket/Equipos/mercury.png';
import img36 from '../../../image/basket/Equipos/aces.png';
import img32 from '../../../image/basket/Equipos/sky.png';
import img35 from '../../../image/basket/Equipos/fever.png';
import img39 from '../../../image/basket/Equipos/liberty.png';
import img42 from '../../../image/basket/Equipos/mystics.png';
import img31 from '../../../image/basket/Equipos/dream.png';
import img33 from '../../../image/basket/Equipos/sun.png';
import img34 from '../../../image/basket/Equipos/wings.png';
import img43 from '../../../image/basket/Equipos/valkyries.png';

const Equiposnbaw = () => {
  const nbaEquipos = [
    { logo: img1 ,nombre: 'Boston Celtics', titulos: 17, historicos: ['Bill Russell', 'Larry Bird', 'Paul Pierce'] },
    { logo: img2 ,nombre: 'Los Angeles Lakers', titulos: 17, historicos: ['Magic Johnson', 'Kobe Bryant', 'Kareem Abdul-Jabbar'] },
    { logo: img3 ,nombre: 'Golden State Warriors', titulos: 7, historicos: ['Stephen Curry', 'Wilt Chamberlain', 'Kevin Durant'] },
    { logo: img4 ,nombre: 'Chicago Bulls', titulos: 6, historicos: ['Michael Jordan', 'Scottie Pippen', 'Derrick Rose'] },
    { logo: img5 ,nombre: 'San Antonio Spurs', titulos: 5, historicos: ['Tim Duncan', 'Manu Ginóbili', 'Tony Parker'] },
    { logo: img6 ,nombre: 'Philadelphia 76ers', titulos: 3, historicos: ['Julius Erving', 'Allen Iverson', 'Wilt Chamberlain'] },
    { logo: img7 ,nombre: 'Detroit Pistons', titulos: 3, historicos: ['Isiah Thomas', 'Joe Dumars', 'Ben Wallace'] },
    { logo: img8 ,nombre: 'Miami Heat', titulos: 3, historicos: ['Dwyane Wade', 'LeBron James', 'Alonzo Mourning'] },
    { logo: img9 ,nombre: 'Houston Rockets', titulos: 2, historicos: ['Hakeem Olajuwon', 'Yao Ming', 'Clyde Drexler'] },
    { logo: img10 ,nombre: 'New York Knicks', titulos: 2, historicos: ['Patrick Ewing', 'Walt Frazier', 'Willis Reed'] },
    { logo: img11 ,nombre: 'Milwaukee Bucks', titulos: 2, historicos: ['Kareem Abdul-Jabbar', 'Oscar Robertson', 'Giannis Antetokounmpo'] },
    { logo: img12 ,nombre: 'Cleveland Cavaliers', titulos: 1, historicos: ['LeBron James', 'Kyrie Irving', 'Mark Price'] },
    { logo: img13 ,nombre: 'Dallas Mavericks', titulos: 1, historicos: ['Dirk Nowitzki', 'Jason Kidd', 'Luka Dončić'] },
    { logo: img14 ,nombre: 'Toronto Raptors', titulos: 1, historicos: ['Vince Carter', 'Kyle Lowry', 'Kawhi Leonard'] },
    { logo: img15 ,nombre: 'Denver Nuggets', titulos: 1, historicos: ['Nikola Jokić', 'Alex English', 'Carmelo Anthony'] },
    { logo: img16 ,nombre: 'Washington Wizards', titulos: 1, historicos: ['Wes Unseld', 'Elvin Hayes', 'Gilbert Arenas'] },
    { logo: img17 ,nombre: 'Portland Trail Blazers', titulos: 1, historicos: ['Clyde Drexler', 'Bill Walton', 'Damian Lillard'] },
    { logo: img18 ,nombre: 'Atlanta Hawks', titulos: 1, historicos: ['Dominique Wilkins', 'Bob Pettit', 'Dikembe Mutombo'] },
    { logo: img19 ,nombre: 'Sacramento Kings', titulos: 1, historicos: ['Oscar Robertson', 'Chris Webber', 'Mitch Richmond'] },
    { logo: img20 ,nombre: 'Oklahoma City Thunder', titulos: 1, historicos: ['Kevin Durant', 'Russell Westbrook', 'Gary Payton'] },
    { logo: img21 ,nombre: 'Phoenix Suns', titulos: 0, historicos: ['Charles Barkley', 'Steve Nash', 'Amar\'e Stoudemire'] },
    { logo: img22 ,nombre: 'Utah Jazz', titulos: 0, historicos: ['Karl Malone', 'John Stockton', 'Donovan Mitchell'] },
    { logo: img23 ,nombre: 'Indiana Pacers', titulos: 0, historicos: ['Reggie Miller', 'Jermaine O\'Neal', 'Paul George'] },
    { logo: img24 ,nombre: 'Orlando Magic', titulos: 0, historicos: ['Shaquille O\'Neal', 'Penny Hardaway', 'Dwight Howard'] },
    { logo: img25 ,nombre: 'Brooklyn Nets', titulos: 0, historicos: ['Jason Kidd', 'Vince Carter', 'Kevin Durant'] },
    { logo: img26 ,nombre: 'Charlotte Hornets', titulos: 0, historicos: ['Larry Johnson', 'Alonzo Mourning', 'Kemba Walker'] },
    { logo: img27 ,nombre: 'Minnesota Timberwolves', titulos: 0, historicos: ['Kevin Garnett', 'Karl-Anthony Towns', 'Kevin Love'] },
    { logo: img28 ,nombre: 'New Orleans Pelicans', titulos: 0, historicos: ['Chris Paul', 'Anthony Davis', 'Zion Williamson'] },
    { logo: img29 ,nombre: 'Memphis Grizzlies', titulos: 0, historicos: ['Marc Gasol', 'Mike Conley', 'Zach Randolph'] },
    { logo: img30 ,nombre: 'Los Angeles Clippers', titulos: 0, historicos: ['Chris Paul', 'Blake Griffin', 'Kawhi Leonard'] },
  ];

  const wnbaEquipos = [
  { logo: img38 ,nombre: 'Minnesota Lynx', titulos: 4, historicos: ['Maya Moore', 'Sylvia Fowles', 'Lindsay Whalen'] },
  { logo: img41 ,nombre: 'Seattle Storm', titulos: 4, historicos: ['Sue Bird', 'Lauren Jackson', 'Breanna Stewart'] },
  { logo: img37 ,nombre: 'Los Angeles Sparks', titulos: 3, historicos: ['Lisa Leslie', 'Candace Parker', 'Nneka Ogwumike'] },
  { logo: img40 ,nombre: 'Phoenix Mercury', titulos: 3, historicos: ['Diana Taurasi', 'Brittney Griner', 'Penny Taylor'] },
  { logo: img36 ,nombre: 'Las Vegas Aces', titulos: 2, historicos: ['A\'ja Wilson', 'Becky Hammon', 'Kelsey Plum'] },
  { logo: img32 ,nombre: 'Chicago Sky', titulos: 1, historicos: ['Candace Parker', 'Courtney Vandersloot', 'Kahleah Copper'] },
  { logo: img35 ,nombre: 'Indiana Fever', titulos: 1, historicos: ['Tamika Catchings', 'Katie Douglas', 'Briann January'] },
  { logo: img39 ,nombre: 'New York Liberty', titulos: 1, historicos: ['Teresa Weatherspoon', 'Becky Hammon', 'Breanna Stewart'] },
  { logo: img42,nombre: 'Washington Mystics', titulos: 1, historicos: ['Elena Delle Donne', 'Emma Meesseman', 'Kristi Toliver'] },
  { logo: img31 ,nombre: 'Atlanta Dream', titulos: 0, historicos: ['Angel McCoughtry', 'Érika de Souza', 'Tiffany Hayes'] },
  { logo: img33 ,nombre: 'Connecticut Sun', titulos: 0, historicos: ['Nykesha Sales', 'Taj McWilliams-Franklin', 'Jonquel Jones'] },
  { logo: img34 ,nombre: 'Dallas Wings', titulos: 0, historicos: ['Skylar Diggins-Smith', 'Arike Ogunbowale', 'Satou Sabally'] },
  { logo: img43 ,nombre: 'Golden State Valkyries', titulos: 0, historicos: ['Por definir (equipo de expansión)'] },
];

  return (
<div className="container mx-auto py-8 mt-20">
  <h2 className="text-2xl font-bold mb-4 text-white">Equipos de la NBA</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {nbaEquipos.map((equipo, index) => (
      <div key={index} className="bg-[#252323] rounded-lg shadow-md p-4 text-white"> 
        <div className="relative h-16 w-16 mb-2 rounded-full flex items-center justify-center overflow-hidden bg-gray-100">
          {equipo.logo && (
            <img src={equipo.logo} alt={`${equipo.nombre} logo`} className="h-full w-full object-contain" />
          )}
        </div>
        <h3 className="font-semibold">{equipo.nombre}</h3>
        <p className="text-gray-400">Títulos: {equipo.titulos}</p> 
        <p className="text-gray-400">Jugadores históricos: {equipo.historicos.join(', ')}</p> 
      </div>
    ))}
  </div>

  <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Equipos de la WNBA (2025)</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {wnbaEquipos.map((equipo, index) => (
      <div key={index} className="bg-[#252323] rounded-lg shadow-md p-4 text-white">
        <div className="relative h-16 w-16 mb-2 rounded-full flex items-center justify-center overflow-hidden bg-gray-100">
          {equipo.logo && (
            <img src={equipo.logo} alt={`${equipo.nombre} logo`} className="h-full w-full object-contain" />
          )}
        </div>
        <h3 className="font-semibold">{equipo.nombre}</h3>
        <p className="text-gray-400">Títulos: {equipo.titulos}</p> 
        <p className="text-gray-400">Jugadoras históricas: {equipo.historicos.join(', ')}</p> 
      </div>
    ))}
  </div>
</div>
  );
};

export default Equiposnbaw;
