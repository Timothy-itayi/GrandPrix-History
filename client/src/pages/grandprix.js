import React from 'react';
import BlogCard from '../components/GrandprixComponents/blogCardComponent';
import ScrollToTop from '../components/LayoutComponents/scrollToTop';
import useScrollAnimation from '../hooks/useScrollGp';
import { motion } from 'framer-motion';
const Grandprix = () => {



            // Animation controls for all 24 grand prix //

  const [ref1, animationControl1] = useScrollAnimation(0.3);
  const [ref2, animationControl2] = useScrollAnimation(0.3);
  const [ref3, animationControl3] = useScrollAnimation(0.3);
  const [ref4, animationControl4] = useScrollAnimation(0.3);
  const [ref5, animationControl5] = useScrollAnimation(0.3);
  const [ref6, animationControl6] = useScrollAnimation(0.3);
  const [ref7, animationControl7] = useScrollAnimation(0.3);
  const [ref8, animationControl8] = useScrollAnimation(0.3);
  const [ref9, animationControl9] = useScrollAnimation(0.3);
  const [ref10, animationControl10] = useScrollAnimation(0.3);
  const [ref11, animationControl11] = useScrollAnimation(0.3);
  const [ref12, animationControl12] = useScrollAnimation(0.3);
  const [ref13, animationControl13] = useScrollAnimation(0.3);
  const [ref14, animationControl14] = useScrollAnimation(0.3);
  const [ref15, animationControl15] = useScrollAnimation(0.3);
  const [ref16, animationControl16] = useScrollAnimation(0.3);
  const [ref17, animationControl17] = useScrollAnimation(0.3);
  const [ref18, animationControl18] = useScrollAnimation(0.3);
  const [ref19, animationControl19] = useScrollAnimation(0.3);
  const [ref20, animationControl20] = useScrollAnimation(0.3);
  const [ref21, animationControl21] = useScrollAnimation(0.3);
  const [ref22, animationControl22] = useScrollAnimation(0.3);
  const [ref23, animationControl23] = useScrollAnimation(0.3);
  const [ref24, animationControl24] = useScrollAnimation(0.3);
  return (
    
    <div className="flex justify-center">
        <ScrollToTop/>
      <div className="max-w-2xl px-4">
        <h1 className="text-7xl text-white font-bold mb-4">Formula 1 Grandprix </h1>
        <p className="text-lg text-white mb-6">
          Explore all 24 Formula 1 tracks scheduled for the 2024 season. The longest in Formula 1 history. From the historic streets of Monaco to the thrilling corners of Suzuka, each track offers its own unique challenges and breathtaking moments.
        </p>
        <div ref={ref1}className="mb-10 ">
  <motion.div
    initial={{ opacity:0}}
    animate={animationControl1}
    className="blog-card">
<BlogCard 
      imageUrls={[
        "/grandprix/BahrainGP/bahrainflag.jpeg",
        "/grandprix/BahrainGP/bahrain02.jpeg",
        "/grandprix/BahrainGP/bahrain01.jpeg",
        "/f1Tracks/Bahrain-circuit.png",
      ]}
      title="Bahrain Grand Prix"
     description="The Bahrain Grand Prix, held annually at the Bahrain International Circuit, is a prominent fixture on the Formula 1 calendar, renowned for its thrilling races and unique setting. One of the distinctive features of the Bahrain Grand Prix is its status as Formula 1's first-ever night race in the Middle East. Beyond its innovative racing format, the Bahrain Grand Prix holds historical significance as the first Formula 1 race to be held in the Middle East, paving the way for the region's growing influence in motorsport. "
    />
    </motion.div>
      </div>
      
    
  
  <div  ref={ref2}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl2}
    className="blog-card">
      
   
  <BlogCard
  imageUrls={[
    "/grandprix/Saudi_ArabianGP/saflag0.jpeg",
    "/grandprix/Saudi_ArabianGP/jeddah.jpeg",
    "/grandprix/Saudi_ArabianGP/jeddah03.jpeg",
    "/f1Tracks/JeddahCircuit.png",
  ]}
  title="Saudi Arabian Grand Prix"
description="The high-speed nature of the Jeddah Corniche Circuit added an extra layer of excitement, with drivers reaching top speeds exceeding 320 kilometers per hour on the long straights. With 27 challenging corners and two strategically placed DRS zones, the circuit provided ample opportunities for overtaking and daring maneuvers. A historic moment occurred during this Grand Prix with the debut of the youngest-ever Ferrari driver, Oliver Bearman. At just 18 years and 10 months old, Bearman replaced Carlos Sainz Jr. at Ferrari. Despite it being his first race, Bearman showcased his talent by finishing in seventh place and scoring six points. This achievement marked a promising start to his career in Formula 1."
>
  </BlogCard>
  </motion.div>
  </div>



  <div  ref={ref3}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl3}
    className="blog-card">
      
    
 <BlogCard
  imageUrls={[
    "/grandprix/AustralianGP/ausflag.jpeg",
    "/grandprix/AustralianGP/ausGP.avif",
    "/grandprix/AustralianGP/ausgp000.jpeg",
    "/f1Tracks/AusGp.png",

  ]}
  title="Melbourne Grand Prix"
  description="The Melbourne Grand Prix Circuit, a blend of fast straights and technical corners spanning approximately 5.3 kilometers with 16 challenging turns, has evolved over the years. It has retained its unique character while adapting to modern standards. The circuit has been the stage for iconic moments in Formula 1 history, such as Ralf Schumacher’s dramatic crash in 2002. Despite changes, its allure remains, attracting fans worldwide to witness thrilling races.

  Earlier in the 2024 season, Carlos Sainz achieved an incredible victory at the Melbourne Grand Prix. This win was particularly remarkable as it followed his recovery from surgery, showcasing his resilience and skill. Sainz’s victory marked him as the only driver to win a race aside from Max Verstappen since 2023, a standout moment in his career.">
    

  </BlogCard>
  </motion.div>
 </div>



 <div  ref={ref4}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl4}
    className="blog-card">
      
   
  <BlogCard 
  imageUrls={[
    "/grandprix/JapaneseGP/japflag.jpeg",
    "/grandprix/JapaneseGP/japan01.png",
    "/grandprix/JapaneseGP/japan02.jpeg",
    "/f1Tracks/JapaneseGP.png",


  ]}
  title="Japanese Grand Prix"
  description="The 2023 Japanese Grand Prix, a thrilling event in the Formula 1 World Championship, unfolded on Sunday, September 24, 2023, at the Suzuka International Racing Course amidst challenging wet weather conditions. Across 53 laps of the 5.807-kilometer circuit, drivers grappled with the slippery track. Max Verstappen's mastery shone as he expertly navigated the treacherous conditions, securing a dominant victory and reinforcing his championship lead. The McLaren duo of Lando Norris and Oscar Piastri demonstrated resilience, clinching second and third place respectively. This achievement marked McLaren's first double podium since the 2021 Italian Grand Prix and marked Piastri's inaugural career podium amidst the demanding Suzuka rain."
  
  >
  </BlogCard>
  </motion.div>
 </div>




 <div  ref={ref5}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl5}
    className="blog-card">
      
   
  <BlogCard 
  imageUrls={[
    "/grandprix/ChineseGP/chineseflag.jpeg",
    "/grandprix/ChineseGP/chinagp01.jpeg",
    "/grandprix/ChineseGP/chinagp00.jpeg",
    "/f1Tracks/ChinaGP.png",
  ]}
  title="Chinese Grand Prix"
  description="The 2024 Chinese Grand Prix was a significant event in the Formula 1 calendar. It took place over 56 laps of the 5.451-kilometre Shanghai International Circuit on Sunday, April 211. Max Verstappen emerged victorious with a time of 1:40:52.554s, followed by Lando Norris and Sergio Perez.

  A special moment occurred during this Grand Prix with Zhou Guanyu, the first Chinese F1 driver to race in his home Grand Prix. Zhou, who was driving for Sauber, finished 14th. Although he was unable to score points, he certainly enjoyed his moment with the fans at the end of the race. Amidst the roaring support from thousands of fans, Formula 1 permitted Zhou to park his car on the main straight in front of the grandstand, a moment that visibly moved him to tears.
  
  The 2024 Chinese Grand Prix marked a return of the race to the F1 calendar after a four-year hiatus due to the COVID-19 pandemic."
  
  >

  </BlogCard>
  </motion.div>

 </div>

 <div  ref={ref6}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl6}
    className="blog-card">
      
    
  <BlogCard 
  imageUrls={[
    "/grandprix/MiamiGP/americanflag.jpeg",
    "/grandprix/MiamiGP/miamigp000.jpeg",
    "/grandprix/MiamiGP/miamigp01.png",
    "/f1Tracks/MiamiGp.png",
  ]}
  title="Miami Grand Prix"
  description="The 2024 Miami Grand Prix was a thrilling spectacle in the Formula 1 World Championship, held over 57 laps at the Miami International Autodrome in Florida, USA, on Sunday, May 5th. Max Verstappen of Red Bull Racing dominated the sprint from pole position, securing another pole for the main race. However, it was Lando Norris of McLaren who stole the show, clinching his maiden F1 win in a breathtaking finish with a winning time of 1:30:49.876s, stunning Verstappen. Charles Leclerc of Ferrari claimed third place. This victory marked McLaren’s first since Daniel Ricciardo's triumph at the 2021 Italian Grand Prix. The event, attended by a record-breaking 275,000 fans, showcased the excitement of F1 and highlighted Miami as a thrilling addition to the championship calendar. The race was also notable for Ferrari's departure from their traditional red; instead, they introduced a captivating blue livery for this race. This change was a tribute to its historical colors, Azzurro La Plata and Azzurro Dino, which were part of daily life in Maranello for many years and were brought back into play after an absence of around fifty years."
  
  >
  </BlogCard>
  </motion.div>
 </div>




 <div  ref={ref7}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl7}
    className="blog-card">
      

  <BlogCard 
  imageUrls={[
    "/grandprix/ImolaGP/italianflag.jpeg",
    "/grandprix/ImolaGP/imola01.jpeg",
    "/grandprix/ImolaGP/imola00.jpeg",
    "/f1Tracks/imola.png",
  ]}
  title="Emilia Romagna Grand Prix"
  description="The Emilia Romagna Grand Prix was called off amidst heavy flooding caused by unprecedented rainfall in northern Italy. However, in 2024, there was much excitement as the track was brought back to the Formula 1 calendar. Fans and drivers alike eagerly anticipated the return of racing action to the historic Imola circuit."
  
  >
  </BlogCard>
  </motion.div>
 </div>





 <div  ref={ref8}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl8}
    className="blog-card">
      
    
  <BlogCard 
  imageUrls={[
    "/grandprix/MonacoGP/monacoflag.jpeg",
    "/grandprix/MonacoGP/monacogp00.png",
    "/grandprix/MonacoGP/monacogp01.png",
    "/f1Tracks/MonacoGP.png",
  ]}
  title="Monaco Grand Prix"
  description="The Monaco Grand Prix circuit, also known as the Circuit de Monaco, stands as one of Formula 1's most formidable challenges. Annually held in May, it winds through the narrow city streets of Monte Carlo and La Condamine, enveloping the principality's harbor. Renowned for its tight corners, elevation changes, and slender straights, the circuit demands precision and rewards only the most skilled drivers. Its 3.337-kilometer length and 78 laps make for a grueling test of endurance and expertise.

  Daniel Ricciardo's remarkable triumph occurred during the 2018 Monaco Grand Prix. Despite an early engine power setback due to an MGU-K failure, Ricciardo, starting from pole position, demonstrated remarkable resilience, maintaining his lead throughout the race to clinch victory. This win held special significance for Ricciardo, offering redemption for a missed opportunity in 2016. Skillfully managing the adversity, Ricciardo adjusted his brake balance to counter hot rear brakes, all while fending off pressure from Sebastian Vettel.
  
  The indelible image of Ricciardo's celebration remains etched in Formula 1 lore—a jubilant leap into the pool atop Red Bull's Energy Station, fully clothed. This iconic moment captures the essence of Ricciardo's triumph, symbolizing his determination and the exhilarating spirit of Formula 1 racing. It serves as a testament to Ricciardo's skill and resilience, forever immortalizing his victory at the legendary Monaco Grand Prix."
  
  >

  </BlogCard>
  </motion.div>
 </div>




 <div  ref={ref9}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl9}
    className="blog-card">
      
   
  <BlogCard 
  imageUrls={[
    "/grandprix/CanadianGP/canadianflag.jpeg",
    "/grandprix/CanadianGP/canadiangp00.jpeg",
    "/grandprix/CanadianGP/canadiangp02.png",
    "/f1Tracks/CanadianGP.png",
  ]}
  title="Canadian Grand Prix"
  description="The 2018 Canadian Grand Prix unfolded at the Circuit Gilles Villeneuve in Montreal, Quebec, Canada. Renowned for its fast, low-downforce layout, the track is a beloved favorite among drivers. Stretching over 4.361 kilometers, the street circuit offers 70 laps of exhilarating racing. Featuring a mix of heavy-braking chicanes and the iconic hairpin, the track's stop-start nature provides a unique challenge for competitors, with moments of both intense braking and high-speed flow.

  One of the race's most contentious moments occurred when Sebastian Vettel made a controversial move during the race. Exiting turn 3, Vettel left the track and re-entered at turn 4 in an unsafe manner, forcing Lewis Hamilton's car (44) off track. Upon review, stewards determined that Hamilton had to take evasive action to avoid a collision, resulting in Vettel receiving a five-second time penalty. This decision proved pivotal in the outcome of the Canadian Grand Prix. Despite the penalty, Vettel's performance was commendable, adding an extra layer of drama to the race.
  
  Additionally, Vettel's actions courted further controversy when he controversially moved the placing boards, a move that sparked debate and discussion among fans and pundits alike."
    
  >
  </BlogCard>
  </motion.div>
 </div>





 <div  ref={ref10}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl10}
    className="blog-card">
      
  
  <BlogCard 
  imageUrls={[
    "/grandprix/SpanishGP/spanishflag.jpeg",
    "/grandprix/SpanishGP/spanishgp000.jpeg",
    "/grandprix/SpanishGP/spanishgp01.jpeg",
    "/f1Tracks/SpanishGP.png",
  ]}
  title="Spanish Grand Prix"
  description="The 1996 Spanish Grand Prix unfolded at the Circuit de Catalunya in Montmeló, Catalonia, Spain. The circuit, a permanent racing facility, stretched 4.727 kilometers (2.937 miles), with the race covering a total distance of 307.114 kilometers (190.832 miles) over 65 laps.

  This race holds a special place in Formula 1 history as it marked Michael Schumacher's inaugural victory with Ferrari, widely considered one of his finest achievements. Despite encountering a clutch problem at the start, which caused him to lose positions and sparked several clashes, Schumacher showcased remarkable resilience. He clawed his way back, ultimately seizing the lead from Jacques Villeneuve on lap 13. From there, Schumacher's dominance was unparalleled, lapping over three seconds faster than his competitors. His triumph, secured by a 45-second margin, is lauded as one of the greatest wet weather drives in Formula One history.
  
  While Schumacher's inaugural Ferrari victory at the Spanish Grand Prix in 1996 was a defining moment, it wasn't until 2000 that he clinched his first world title in Ferrari colors. This triumph at Catalunya marked the inception of a legendary partnership between Schumacher and Ferrari, setting the stage for a remarkable era in Formula 1."
  
  >
  </BlogCard>
  </motion.div>
 </div>




 <div  ref={ref11}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl11}
    className="blog-card">
  <BlogCard 
  imageUrls={[
    "/grandprix/AustrianGP/austrianflag.jpeg",
    "/grandprix/AustrianGP/austriangp01.jpeg",
    "/grandprix/AustrianGP/austriangp00.jpeg",
    "/f1Tracks/AustrianGP.png",
    
  ]}
  title="Austrian Grand Prix"
  description="The 2023 Austrian Grand Prix unfolded at the Red Bull Ring in Spielberg, Austria, on a permanent racing circuit spanning 4.318 kilometers (2.683 miles). Over 71 laps, drivers covered a total distance of 306.452 kilometers (190.420 miles).

  A standout moment from the race was the striking display of orange flares by enthusiastic fans, notably supporters of Max Verstappen. These flares were ignited ahead of the formation lap and again in the race's closing stages, enveloping the grandstands in clouds of orange smoke. Particularly visible at the Turn 6/7 area, the vibrant haze drifted across the circuit, momentarily impacting visibility. Despite concerns, Formula 1 drivers downplayed the hindrance, emphasizing the spectacle and atmosphere created by the flares. This iconic display added an extra layer of excitement to an already thrilling event, leaving an indelible mark on the 2023 Austrian Grand Prix."
  
  >

  </BlogCard>
  </motion.div>
 </div>




 <div  ref={ref12}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl12}
    className="blog-card">
      
    
  <BlogCard 
  imageUrls={[
    "/grandprix/BritishGP/britishflag.jpeg",
    "/grandprix/BritishGP/britishgp00.jpeg",
    "/grandprix/BritishGP/britishgp01.png",
    "/f1Tracks/BritishGP.png",
  ]}
  title="British Grand Prix"
  description="The 2021 British Grand Prix unfolded at the Silverstone Circuit in the United Kingdom, a permanent racing facility spanning 5.891 kilometers (3.660 miles). Over 52 laps, drivers covered a total distance of 306.198 kilometers (190.263 miles).

  A defining moment of the race was the dramatic collision between Lewis Hamilton and Max Verstappen on the first lap, resulting in Verstappen's spin-out and Hamilton's subsequent 10-second penalty. Despite this setback, Hamilton displayed remarkable resilience, staging a remarkable comeback to overtake Charles Leclerc in the final laps and secure his eighth British Grand Prix victory.
  
  Following his triumph, Hamilton celebrated with fans by grabbing a Union Jack and running to the infield section, intensifying the electric atmosphere at Silverstone. This victory not only narrowed the championship gap between Hamilton and Verstappen to just eight points but also added another compelling chapter to their fierce rivalry. The 2021 British Grand Prix will be remembered for its thrilling on-track action and the passionate display of support from the Silverstone crowd."
  
  >

  </BlogCard>
  </motion.div>
 </div>



 <div  ref={ref13}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl13}
    className="blog-card">
  <BlogCard 
  imageUrls={[
    "/grandprix/HungaroringGP/hungaryflag.jpeg",
    "/grandprix/HungaroringGP/hungarygp01.jpeg",
    "/grandprix/HungaroringGP/hungarygp00.png",
    "/f1Tracks/Hungaroring.png",
  ]}
  title="Hungarian Grand Prix"
  description="The 2003 Hungarian Grand Prix unfolded at the Hungaroring in Mogyoród, Hungary, a permanent racing facility measuring 4.381 kilometers (2.722 miles) in length. Over the course of 70 laps, drivers covered a total distance of 306.630 kilometers (190.531 miles).

  A defining moment of the race was Fernando Alonso's historic Formula 1 victory. At just 22 years old, Alonso made history as the youngest winner in Formula 1, starting from pole position and leading the race from start to finish. Displaying remarkable composure under pressure, Alonso lapped the Ferrari of Michael Schumacher and crossed the finish line 16.7 seconds ahead of runner-up Kimi Raikkonen. This victory not only marked Alonso as a formidable talent in Formula 1 but also set the stage for his future success in the sport."
  >
  </BlogCard>
  </motion.div>
 </div>




 <div  ref={ref14}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl14}
    className="blog-card">
  <BlogCard 
  imageUrls={[
    "/grandprix/BelgiumGP/belgianflag.jpeg",
    "/grandprix/BelgiumGP/belgiumgp00.jpeg",
    "/grandprix/BelgiumGP/belgiumgp01.png",
    "/f1Tracks/BelgiumGp.png",
  ]}
  title="Belgian Grand Prix"
  description="The 2012 Belgian Grand Prix was held at the Circuit de Spa-Francorchamps near the village of Francorchamps, Wallonia, Belgium, a permanent racing facility spanning 7.004 kilometers (4.352 miles). Over 44 laps, drivers covered a total distance of 308.052 kilometers (191.415 miles).

  A defining moment of the race was the massive crash involving Romain Grosjean, Sergio Perez, Fernando Alonso, and Lewis Hamilton. Grosjean's attempt to cut across Hamilton in his McLaren resulted in a collision, triggering a chain reaction that caused a significant pile-up. This dramatic incident unfolded on the first lap of the race, leading to the elimination of several cars.
  
  Among the lasting images from the event is that of Lewis Hamilton walking away from his damaged McLaren. Despite the severity of the crash, Hamilton emerged unscathed, a testament to the safety advancements in Formula 1. Following the incident, Grosjean faced consequences for his actions, being banned from the next race as a result of his role in the crash."
  
  >
  </BlogCard>
  </motion.div>
 </div>



 <div  ref={ref15}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl15}
    className="blog-card">
  <BlogCard 
  imageUrls={[
    "/grandprix/DutchGP/dutchflag.jpeg",
    "/grandprix/DutchGP/dutchgp01.png",
    "/grandprix/DutchGP/dutchgp00.jpeg",
    "/f1Tracks/DutchGp.png",
  ]}
  title="Dutch Grand Prix"
  description="The Dutch Grand Prix takes place at the Circuit Zandvoort, nestled in North Holland, the Netherlands. Known as an authentic 'Old School' circuit, it boasts challenging, fast curves carved by natural dunes, spanning 4.3 kilometers. With 14 turns, including banked corners like the Arie Luyendykbocht and Hugenholtzbocht, Zandvoort offers thrilling battles, particularly with DRS fully open.

  Max Verstappen's 2023 performance at Zandvoort was nothing short of dominant. Winning 19 out of 22 races, his prowess behind the wheel, combined with Red Bull's technical excellence, set a new benchmark in Formula 1. With 12 pole positions and nine fastest laps, Verstappen's speed and consistency were unmatched."
  
  >
  </BlogCard>
  </motion.div>
 </div>




 <div  ref={ref16}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl16}
    className="blog-card">
  <BlogCard 
  imageUrls={[
    "/grandprix/ItalianGP/italianflag.jpeg",
    "/grandprix/ItalianGP/italiangp01.jpeg",
    "/grandprix/ItalianGP/italiangp00.jpeg",
    "/f1Tracks/ItalianGP.png",
  ]}
  title="Italian Grand Prix"
  description="The Italian Grand Prix is held at the Autodromo Nazionale Monza, known as the ‘Temple of Speed.’ As one of the fastest circuits on the F1 calendar, it emphasizes high top speeds and low downforce setups. The track is famous for its long straights, high-speed corners, and heavy braking zones. Monza features 11 corners and a track length of 5.793 kilometers (3.600 miles). The average speed of an F1 car around Monza is approximately 250 km/h (155 mph), with top speeds exceeding 340 km/h (211 mph) on the straights.

  A defining moment of the 2023 Italian Grand Prix was the collision between Lewis Hamilton and Max Verstappen. The incident occurred on lap 26 of 53 as Verstappen approached the Variante del Rettifilo at 225 mph and Hamilton exited the pit lane. Verstappen attempted to overtake Hamilton at the right-left chicane but ran off the track and onto the kerbs. This sent Verstappen's car airborne into Hamilton’s path, with the rear-right wheel crushing the top of Hamilton’s Mercedes.
  
  Amidst this drama, Daniel Ricciardo secured a significant victory for McLaren. Celebrating in his traditional style, Ricciardo performed a 'shoey' on the iconic Monza podium, drinking champagne from his shoe. This memorable win was a highlight of the 2023 F1 season."
  
  >
  </BlogCard>
  </motion.div>
 </div>


 <div  ref={ref17}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl17}
    className="blog-card">
  <BlogCard 
  imageUrls={[
    "/grandprix/AzerbaijanGP/bakuflag00.jpeg",
    "/grandprix/AzerbaijanGP/bakugp00.png",
    "/grandprix/AzerbaijanGP/bakugp01.png",
    "/f1Tracks/BakuGP.png",
  ]}
  title="Azerbaijan  Grand Prix"
  description="The 2021 Baku Grand Prix took place at the Baku City Circuit in Azerbaijan. This unique street circuit combines wide, open stretches with narrow, twisty sections winding through the city’s ancient walls. The circuit’s 6-kilometer course is the second-longest on the calendar, featuring a 2200-meter-long main straight along the Baku shoreline, ideal for slipstreaming and allowing cars to run three abreast. On this straight, racers often exceed speeds of 340 km/h.

  In a thrilling qualifying session, Ferrari’s Charles Leclerc secured pole position ahead of Lewis Hamilton and Max Verstappen. Leclerc set his fastest time with the help of a slipstream from Hamilton, and a red flag during the final runs ensured his second successive pole position and his first in Baku.
  
  Max Verstappen suffered a heartbreaking late crash while leading the race, just three laps from the finish. A high-speed tire failure caused his retirement, ending his chances of victory in the Azerbaijan Grand Prix."
  
  >
  </BlogCard>
  </motion.div>
 </div>


 <div  ref={ref18}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl18}
    className="blog-card">
      
    
  <BlogCard 
  imageUrls={[
    "/grandprix/SingaporeGP/singaporeflag.jpeg",
    "/grandprix/SingaporeGP/singaporegp00.jpeg",
    "/grandprix/SingaporeGP/singaporegp01.jpeg",
    "/f1Tracks/Singapore-GP.png",
  ]}
  title="Singapore Grand Prix"
  description="The Singapore Grand Prix is held at the Marina Bay Street Circuit, a captivating blend of wide, open stretches and narrow, twisting sections winding through the city’s picturesque streets. Spanning 5.063 kilometers, it stands as one of the longest tracks on the F1 calendar, distinguished by its unique layout that includes a passage over the iconic Anderson Bridge. 

  An unforgettable moment from the 2013 Singapore Grand Prix unfolded on the final lap when Mark Webber's car caught fire. In a display of exceptional sportsmanship, he hitched a ride back to the pits with Fernando Alonso after his engine blew up during the race on September 22, 2013.
  
  Another notable aspect of the event was Ferrari's remarkable pit stop efficiency. In 2013, their pit stops averaged an impressive 2.78 seconds, with a record-breaking stop clocked at 1.95 seconds. This efficiency was a key factor in Ferrari's performance throughout the season."
  
  >
  </BlogCard>
  </motion.div>
 </div>



 <div  ref={ref19}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl19}
    className="blog-card">
  <BlogCard 
  imageUrls={[
    "/grandprix/COTA/americanflag.jpeg",
    "/grandprix/COTA/cotagp00.jpeg",
    "/grandprix/COTA/cota01.jpeg",
    "/f1Tracks/COTA.png",
  ]}
  title="United States Grand Prix"
  description="The Circuit of The Americas (COTA), situated in Austin, Texas, USA, is renowned for its distinctive track layout and hosts the Formula One United States Grand Prix. Spanning almost three and a half miles, the circuit runs anti-clockwise and features 20 corners, with a lap distance of 5.513 kilometers. Noteworthy elements include two straights, tight hairpins, and meticulously crafted quick corners. The first turn, dubbed Big Red, is a blind hairpin approached from an exhilarating uphill sprint from the start line. The longest straight, between turns 11 and 12, sees engines spend over 13 seconds at full throttle, reaching top speeds of around 315 km/h.

  In the 2023 COTA Grand Prix, Max Verstappen's dominance took center stage as he clinched victory. Securing the win at the United States Grand Prix marked his 19th triumph out of 22 races in the 2023 Formula 1 World Championship, showcasing both his exceptional skill and Red Bull's technical excellence. However, despite Verstappen's stellar performance, some fans expressed disappointment over the lack of competition throughout the season."
  
  >
  </BlogCard>
  </motion.div>
 </div>



 <div  ref={ref20}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl20}
    className="blog-card">
  <BlogCard 
  imageUrls={[
    "/grandprix/MexicanGP/mexicanflag.jpeg",
    "/grandprix/MexicanGP/mexicangp01.png",
    "/grandprix/MexicanGP/mexicangp00.png",
    "/f1Tracks/MexicoGP.png",
  ]}
  title="Mexican Grand Prix"
  description="The Mexican Grand Prix takes place at the Autodromo Hermanos Rodriguez circuit, named after Mexico’s legendary racing brothers, Ricardo and Pedro Rodriguez. Situated within Mexico City’s Magdalena Mixiuhca sports park, the circuit was constructed in 1959 and sits over 2km above sea level, providing a unique high-altitude racing experience. Spanning 4.304 kilometers, the track largely retains the layout of the original 1959 circuit, with the notable change being the bisected Peralta corner. Instead, the circuit now winds through the old Foro Sol baseball stadium, offering spectators a remarkable view of the F1 action.

  An iconic moment unfolded at the 2021 Mexico City Grand Prix involving Sergio Perez, a hometown hero and Red Bull driver. Perez achieved a remarkable home podium finish, becoming the first Mexican driver to lead his home race and secure a podium. This historic moment ignited the crowd with ecstasy, making it an unforgettable event. Perez’s podium finish not only showcased his exceptional talent and determination but also marked a significant milestone for Mexico in the world of Formula 1."
  
  >
  </BlogCard>
  </motion.div>
 </div>



 <div  ref={ref21}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl21}
    className="blog-card">
  <BlogCard 
  imageUrls={[
    "/grandprix/BrazilGP/brazilianflag.jpeg",
    "/grandprix/BrazilGP/brazilgp00.jpeg",
    "/grandprix/BrazilGP/brazilgp01.jpeg",
    "/f1Tracks/brazil.png",
  ]}
  title="Brazilian Grand Prix"
  description="The Brazilian Grand Prix takes place at the Autódromo José Carlos Pace, also known as Interlagos, situated in São Paulo, Brazil. Known for its challenging layout featuring elevation changes, fast corners, and a rough surface, the circuit spans 4.309 kilometers and runs counterclockwise, boasting 15 turns each presenting its own unique challenges. Despite its underdeveloped infrastructure compared to modern venues, Interlagos has hosted some of the most historic and thrilling races in Formula One history.

  Fernando Alonso secured his first F1 championship with Renault in 2005. At just 24 years old, Alonso became the youngest Formula 1 World Drivers’ Champion, marking a significant milestone in his career. His victory also propelled the Renault team to the 2005 Constructors’ Championship, ending the dominance of the Michael Schumacher-Ferrari partnership that had prevailed for so long. This triumph laid the foundation for Alonso's legacy in Formula 1."
  
  >
  </BlogCard>
  </motion.div>
 </div>


 <div  ref={ref22}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl22}
    className="blog-card">
  <BlogCard 
  imageUrls={[
    "/grandprix/LasVegasGP/americanflag.jpeg",
    "/grandprix/LasVegasGP/lasvegasgp00.png",
    "/grandprix/LasVegasGP/lasvegas01.jpeg",
    "/f1Tracks/Las-Vegas-GP.png",
  ]}
  title="Las Vegas Grand Prix"
  description="The Las Vegas Grand Prix circuit, spanning 6.12km with 14 turns, winds through downtown Las Vegas, passing iconic landmarks like Caesars Palace and the Bellagio. Teams opt for a low-downforce setup to maximize speed along the city's famous Strip. The state-of-the-art pit and paddock area, purchased for $240 million, hosts the start/finish line and turns 1 to 4, providing a thrilling race atmosphere. In a dramatic moment at the 2023 Grand Prix, Charles Leclerc's last-minute overtake for second place electrified spectators. As Leclerc crossed the finish line, the large video dome illuminated with vibrant colors, enhancing the spectacle and celebrating his victory."
  
  >
  </BlogCard>
  </motion.div>
 </div>



<div  ref={ref23}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl23}
    className="blog-card">
  <BlogCard 
  imageUrls={[
     "/grandprix/QatarGP/qatarflag.jpeg",
    "/grandprix/QatarGP/qatargp00.jpeg",
    "/grandprix/QatarGP/qatargp01.jpeg",
    "/f1Tracks/QatarGP.png",
  ]}
  title="Qatar Grand Prix"
  description="The 2023 Qatar Grand Prix was held at the Lusail International Circuit in Lusail, Qatar. This fast and flowing track, characterized by medium- and high-speed corners, features a main straight over one kilometer long, providing ample overtaking opportunities into Turn 1. The circuit is 5.419 km (3.367 miles) long and has recently been resurfaced, with redesigned team buildings and expanded pit boxes.

  An iconic moment from the 2023 Qatar Grand Prix was Oscar Piastri's first Formula One victory during the Sprint Race. Driving for McLaren, Piastri secured pole position from the Sprint Shootout and maintained his lead to win the race. This victory marked a significant milestone in Piastri's burgeoning career. In the main race, Piastri finished second behind Max Verstappen, making it a historic event for both him and the McLaren team. The crowd's ecstatic response added to the memorable atmosphere of the Grand Prix."
  
  >
  </BlogCard>
  </motion.div>
 </div>


 <div  ref={ref24}className="py-10">
    <motion.div
    initial={{opacity: 0}}
    animate={animationControl24}
    className="blog-card">
  <BlogCard 
  imageUrls={[
   "/grandprix/AbuDhabiGP/abudhabiflag.jpeg",
   "/grandprix/AbuDhabiGP/abudhabi00.jpeg",
   "/grandprix/AbuDhabiGP/abudhabi01.jpeg",
   "/f1Tracks/AbuDhabiGP.png",
  ]}
  title="Abu Dhabi Grand Prix"
  description="The 2021 Abu Dhabi Grand Prix was held at the Yas Marina Circuit on Yas Island. Designed by Hermann Tilke, the circuit spans 5.281 km (3.281 miles) and the race is contested over 58 laps. The track is known for its unique mix of high-speed straights and technical corners.

  The most notable moment of the 2021 Abu Dhabi Grand Prix was Max Verstappen's first Formula 1 World Championship victory. Driving for Red Bull Racing, Verstappen clinched his championship in dramatic fashion on the final lap of the season. After a safety car period, he managed to overtake Lewis Hamilton on the last lap to secure the title, ending Mercedes' seven-year dominance. This historic win marked a significant milestone in Verstappen's career and in Formula 1 history."
  
  >
  </BlogCard>
  </motion.div>
 </div>
</div>
   
        </div>
      
  );
};



export default Grandprix;
