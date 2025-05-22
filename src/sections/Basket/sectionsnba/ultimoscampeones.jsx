import React from 'react';
/**NBA 2024 */
import img1 from '../../../image/basket/campeones/boston.png';
import img2 from '../../../image/basket/campeones/dallas.png';
import img3 from '../../../image/basket/campeones/boston2024.png';
/**WNBA 2024 */
import img4 from '../../../image/basket/campeones/liberty.png';
import img5 from '../../../image/basket/campeones/Lynx.png';
import img6 from '../../../image/basket/campeones/Liberty2024.png';
/**NBA 2023 */
import img7 from '../../../image/basket/campeones/Denver.png';
import img8 from '../../../image/basket/campeones/miamiheat.png';
import img9 from '../../../image/basket/campeones/denver2023.png';
/**WNBA 2023 */
import img10 from '../../../image/basket/campeones/aces.png';
import img11 from '../../../image/basket/campeones/liberty.png';
import img12 from '../../../image/basket/campeones/aces2023.png';
/**NBA 2022 */
/*Bonston */
import img13 from '../../../image/basket/campeones/wariors.png';
import img14 from '../../../image/basket/campeones/wariors2022.png';
/**WNBA 2022 */
/**ACES */
import img15 from '../../../image/basket/campeones/connecticut.png';
import img16 from '../../../image/basket/campeones/aces2022.png';
/**NBA 2021 */
import img17 from '../../../image/basket/campeones/phoenix.png';
import img18 from '../../../image/basket/campeones/bucks.png';
import img19  from '../../../image/basket/campeones/Bucks2021.png';
/**WNBA 2021 */
import img20 from '../../../image/basket/campeones/ChicagoSky.png';
import img21 from '../../../image/basket/campeones/PhoenixMercury.png';
import img22  from '../../../image/basket/campeones/ChicagoSky2021.png';
/**NBA 2020 */
import img23 from '../../../image/basket/campeones/lakers.png';
import img24  from '../../../image/basket/campeones/lakers2020.png';
/**WNBA 2020 */
import img25 from '../../../image/basket/campeones/seattle.png';
import img26  from '../../../image/basket/campeones/Seattle-Storm2020.png';
/**NBA 2019 */
import img27 from '../../../image/basket/campeones/Raptors.png';
import img28  from '../../../image/basket/campeones/Raptors2019.png';
/**WNBA 2019 */
import img29 from '../../../image/basket/campeones/WashingtonMystics.png';
import img30  from '../../../image/basket/campeones/WashingtonMystics2019.png';
/**NBA 2018 */
import img31 from '../../../image/basket/campeones/Cavaliers.png';
import img32  from '../../../image/basket/campeones/wariors2018.png';
/**WNBA 2018 */
import img33  from '../../../image/basket/campeones/SeattleStorm2018.png';
/**NBA 2017 */
import img34  from '../../../image/basket/campeones/wariors2017.png';
/**WNBA 2017 */
import img35  from '../../../image/basket/campeones/Sparks.png';
import img36  from '../../../image/basket/campeones/Lynx2017.png';
/**NBA 2016 */
import img37 from '../../../image/basket/campeones/Cavaliers2016.png';
/**WNBA 2016 */
import img38 from '../../../image/basket/campeones/Sparks2016.png';
/**NBA 2015 */
import img39 from '../../../image/basket/campeones/wariors2015.png';
/**WNBA 2015 */
import img40 from '../../../image/basket/campeones/indiana.png';
import img41 from '../../../image/basket/campeones/Lynx2015.png';
/**NBA 2014 */
import img42 from '../../../image/basket/campeones/spurs.png';
import img43 from '../../../image/basket/campeones/PhoenixMercury2014.png';
/**WNBA 2014 */
import img44 from '../../../image/basket/campeones/PhoenixMercury2014.png';
const championsData = [
  /**Finales 2024 */
  {
    year: 2024,
    league: 'NBA',
    winner: 'Boston Celtics',
    loser: 'Dallas Mavericks',
    score: '4-1',
    mvp: '	Jaylen Brown',
    winnerLogo: img1,
    loserLogo: img2,
    trophyImage: img3,
  },
  {
    year: 2024,
    league: 'WNBA',
    winner: '	New York Liberty',
    loser: 'Minnesota Lynx',
    score: '3-2',
    mvp: 'Jonquel Jones',
    winnerLogo: img4,
    loserLogo: img5,
    trophyImage: img6,
  },
  /**Finales 2023 */
  {
    year: 2023,
    league: 'NBA',
    winner: 'Denver Nuggets',
    loser: 'Miami Heat',
    score: '4-1',
    mvp: 'Nikola Jokić',
    winnerLogo: img7,
    loserLogo: img8,
    trophyImage: img9,
  },
  {
    year: 2023,
    league: 'WNBA',
    winner: 'Las Vegas Aces',
    loser: 'New York Liberty',
    score: '3-1',
    mvp: 'Aja Wilson',
    winnerLogo: img10,
    loserLogo: img11,
    trophyImage: img12,
  },
  /**Finales 2022 */
  {
    year: 2022,
    league: 'NBA',
    winner: 'Golden State Warriors',
    loser: 'Boston Celtics',
    score: '4-2',
    mvp: 'Stephen Curry',
    winnerLogo: img13,
    loserLogo: img1,
    trophyImage: img14,
  },
  {
    year: 2022,
    league: 'WNBA',
    winner: 'Las Vegas Aces',
    loser: 'Connecticut Sun',
    score: '3-1',
    mvp: 'Chelsea Gray',
    winnerLogo: img10,
    loserLogo: img15,
    trophyImage: img16,
  },
  /**Finales 2021 */
  {
    year: 2021,
    league: 'NBA',
    winner: 'Milwaukee Bucks',
    loser: 'Phoenix Suns',
    score: '4-2',
    mvp: 'Giannis Antetokounmpo',
    winnerLogo: img18,
    loserLogo: img17,
    trophyImage: img19,
  },
  {
    year: 2021,
    league: 'WNBA',
    winner: 'Chicago Sky',
    loser: 'Phoenix Mercury',
    score: '3-1',
    mvp: 'Kahleah Copper',
    winnerLogo: img20,
    loserLogo: img21,
    trophyImage: img22,
  },
    /**Finales 2020 */
  {
    year: 2020,
    league: 'NBA',
    winner: 'Los Angeles Lakers',
    loser: 'Miami Heat',
    score: '4-2',
    mvp: 'LeBron James',
    winnerLogo: img23,
    loserLogo: img8,
    trophyImage: img24,
  },
  {
    year: 2020,
    league: 'WNBA',
    winner: 'Seattle Storm',
    loser: 'Las Vegas Aces',
    score: '3-0',
    mvp: 'Breanna Stewart',
    winnerLogo: img25,
    loserLogo: img10,
    trophyImage: img26,
  },
      /**Finales 2019 */
  {
    year: 2019,
    league: 'NBA',
    winner: 'Toronto Raptors',
    loser: 'Golden State Warriors',
    score: '4-2',
    mvp: 'Kawhi Leonard',
    winnerLogo: img27,
    loserLogo: img13,
    trophyImage: img28,
  },
  {
    year: 2019,
    league: 'WNBA',
    winner: 'Washington Mystics',
    loser: 'Connecticut Sun',
    score: '3-2',
    mvp: 'Emma Meesseman',
    winnerLogo: img29,
    loserLogo: img15,
    trophyImage: img30
  },
        /**Finales 2018 */
  {
    year: 2018,
    league: 'NBA',
    winner: 'Golden State Warriors',
    loser: 'Cleveland Cavaliers',
    score: '4-0',
    mvp: 'Kevin Durant',
    winnerLogo: img13,
    loserLogo: img31,
    trophyImage: img32,
  },
  {
    year: 2018,
    league: 'WNBA',
    winner: 'Seattle Storm',
    loser: 'Washington Mystics',
    score: '3-0',
    mvp: 'Breanna Stewart',
    winnerLogo: img25,
    loserLogo: img29,
    trophyImage: img33,
  },
          /**Finales 2017 */
  {
    year: 2017,
    league: 'NBA',
    winner: 'Golden State Warriors',
    loser: 'Cleveland Cavaliers',
    score: '4-1',
    mvp: 'Kevin Durant',
    winnerLogo: img13,
    loserLogo: img31,
    trophyImage: img34,
  },
  
  {
    year: 2017,
    league: 'WNBA',
    winner: 'Minnesota Lynx',
    loser: 'Los Angeles Sparks',
    score: '3-2',
    mvp: 'Sylvia Fowles',
    winnerLogo: img5,
    loserLogo: img35,
    trophyImage: img36,
  },
          /**Finales 2016 */
  {
    year: 2016,
    league: 'NBA',
    winner: 'Cleveland Cavaliers',
    loser: 'Golden State Warriors',
    score: '4-3',
    mvp: 'LeBron James',
    winnerLogo: img31,
    loserLogo: img13,
    trophyImage: img37,
  },
  {
    year: 2016,
    league: 'WNBA',
    winner: 'Los Angeles Sparks',
    loser: 'Minnesota Lynx',
    score: '3-2',
    mvp: 'Candace Parker',
    winnerLogo: img35,
    loserLogo: img5,
    trophyImage: img38,
  },
          /**Finales 2015 */
  {
    year: 2015,
    league: 'NBA',
    winner: 'Golden State Warriors',
    loser: 'Cleveland Cavaliers',
    score: '4-2',
    mvp: 'Andre Iguodala',
    winnerLogo: img13,
    loserLogo: img31,
    trophyImage: img39,
  },
  {
    year: 2015,
    league: 'WNBA',
    winner: 'Minnesota Lynx',
    loser: 'Indiana Fever',
    score: '3-2',
    mvp: 'Sylvia Fowles',
    winnerLogo: img5,
    loserLogo: img40,
    trophyImage: img41,
  },
          /**Finales 2014 */
  {
    year: 2014,
    league: 'NBA',
    winner: 'San Antonio Spurs',
    loser: 'Miami Heat',
    score: '4-1',
    mvp: 'Kawhi Leonard',
    winnerLogo: img42,
    loserLogo: img8,
    trophyImage: img43,
  },
  {
    year: 2014,
    league: 'WNBA',
    winner: 'Phoenix Mercury',
    loser: 'Chicago Sky',
    score: '3-0',
    mvp: 'Diana Taurasi',
    winnerLogo: img21 ,
    loserLogo: img20,
    trophyImage: img44,
  },
];


const ChampionsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Últimos Campeones NBA y WNBA (2014-2024)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {championsData.map((champion, index) => (
          <div key={index} className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-400">{champion.league}</span>
              <span className="text-lg font-semibold">{champion.year}</span>
            </div>

            <div className="flex items-center justify-center space-x-4 mb-4">
              <img src={champion.winnerLogo} alt={champion.winner} className="h-12 w-12 object-contain" />
              <span className="text-xl font-bold">{champion.winner}</span>
              <span className="text-lg font-semibold text-yellow-400">{champion.score}</span>
              <span className="text-xl">{champion.loser}</span>
              <img src={champion.loserLogo} alt={champion.loser} className="h-12 w-12 object-contain" />
            </div>

            <p className="text-sm mb-3"><span className="font-bold">MVP de las Finales:</span> {champion.mvp}</p>
            <div className="w-full h-80 rounded-xl overflow-hidden mt-2 shadow-md">
              <img
                src={champion.trophyImage}
                alt={`Trophy ${champion.winner}`}
                className="w-full h-full object-top object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChampionsSection;
