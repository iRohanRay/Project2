import React from 'react';
import RecipeReviewCard from '../Component/Layout/RecipeReviewCard.jsx';

const Product = () => {
  
  const cardData = [
    {
      avatarLetter: 'H',
      title: 'Heart',
      subheader: 'September 14, 2016',
      image: '/hear.jpg',
      altText: 'Human heart illustration',
      description: 'The **human heart** is a muscular organ roughly the size of a fist, located slightly left of the center of the chest. It is responsible for pumping blood throughout the body, supplying oxygen and nutrients to tissues while removing carbon dioxide and waste products. The heart has four chambers: two atria (upper chambers) and two ventricles (lower chambers). Blood flows through the heart in a specific cycle: oxygen-poor blood enters the right side, gets pumped to the lungs for oxygenation, and then the oxygen-rich blood returns to the left side to be pumped throughout the body. This process is vital for maintaining the body’s overall health and function.',
      methodImage: '/public/heartQr.png',
    },
    {
      avatarLetter: 'T',
      title: 'Tiger',
      subheader: 'March 10, 2018',
      image: '/public/tigerPhoto.png',
      altText: 'Tiger illustration',
      description: 'The **tiger** is a majestic and powerful big cat, known for its orange coat with black stripes. Found in Asia, it is an apex predator that plays an important role in maintaining the balance of ecosystems. Tigers are solitary and territorial, adapting well to a variety of habitats, from dense forests to open grasslands. They hunt primarily at night and rely on stealth and strength to catch prey. With fewer than 4,000 tigers left in the wild, conservation efforts are crucial to ensuring their survival. Tigers inspire awe and are celebrated in cultures worldwide for their beauty and strength.',
      methodImage: '/public/tigerQr.png',
    },
    {
      avatarLetter: 'P',
      title: 'Peacock',
      subheader: 'May 22, 2019',
      image: '/public/peacock.jpg',
      altText: 'Peacock illustration',
      description: 'The **peacock** is admired for its iridescent blue and green feathers and elaborate courtship displays. Males use their vibrant tail feathers to attract mates, spreading them into a striking fan. Found in South Asia, they inhabit forests and open areas. Peacocks symbolize beauty and elegance in many cultures, appearing in art and folklore. Their diet consists of seeds, insects, and small creatures. The peacock’s distinct call is heard during the breeding season. As the national bird of India, it holds cultural and ecological significance, playing an important role in its natural habitat and inspiring awe in humans.',
      methodImage: '/public/peacockQr.png',
    },
    {
      avatarLetter: 'S',
      title: 'Human Skeleton',
      subheader: 'August 15, 2020',
      image: '/public/skeletonImage.jpeg',
      altText: 'Human skeleton illustration',
      description: 'The **human skeleton** is a structural framework composed of 206 bones, providing support and protection for internal organs. It facilitates movement and is divided into two parts: the axial skeleton, which includes the skull, spine, and ribs, and the appendicular skeleton, consisting of the limbs and pelvis. The skeleton stores essential minerals like calcium and produces blood cells within the bone marrow. Joints, cartilage, and ligaments connect bones, allowing flexibility and movement. Over time, bones can regenerate and repair themselves. This remarkable system is vital for the body’s structure, function, and overall well-being, ensuring optimal physical health.',
      methodImage: '/public/skeletonQr.png',
    },
    {
      avatarLetter: 'D',
      title: 'Deer',
      subheader: 'June 11, 2018',
      image: '/public/deer.jpeg',
      altText: 'Deer illustration',
      description: 'The **deer** is a graceful mammal recognized for its agility and antlers. Found in forests and grasslands worldwide, deer are herbivores that primarily feed on leaves, grass, and shrubs. They play an essential role in their ecosystems by controlling vegetation growth. Male deer grow antlers annually, shedding them after the mating season. Known for their keen senses and speed, deer are highly adaptable to various habitats. Their population is managed through conservation and hunting regulations to maintain ecological balance. The presence of deer enhances biodiversity and symbolizes beauty and serenity in natural landscapes, inspiring many cultures.',
      methodImage: '/public/image.png',
    },
    {
      avatarLetter: 'O',
      title: 'Oak Tree',
      subheader: 'October 5, 2017',
      image: '/public/OakTree.jpeg',
      altText: 'Oak tree illustration',
      description: 'The **oak tree** is a symbol of strength and longevity, with lifespans often exceeding hundreds of years. Found in temperate regions, it supports biodiversity by providing shelter and food for wildlife. Oaks produce acorns, which feed animals such as squirrels, birds, and deer. The sturdy wood is used for furniture, flooring, and shipbuilding. Oaks are revered in myths and traditions, representing wisdom and endurance. Their deep roots stabilize soil, prevent erosion, and improve water quality. As a cornerstone species in their ecosystems, oak trees enhance environmental health, demonstrating nature’s resilience and the interconnectedness of living organisms.',
      methodImage: '/public/oakQr.png',
    },
    {
      avatarLetter: 'C',
      title: 'Crocodile',
      subheader: 'March 19, 2016',
      image: '/public/crocodile.jpeg',
      altText: 'Crocodile illustration',
      description: 'The **crocodile** is a large reptile known for its powerful jaws and stealth. Found in rivers, lakes, and swamps, it is an apex predator feeding on fish, birds, and mammals. Crocodiles have existed for millions of years, surviving drastic environmental changes. They regulate their body temperature by basking in the sun and entering water. Crocodiles lay eggs in nests, and mothers protect their young fiercely. They play a key role in maintaining healthy aquatic ecosystems by controlling prey populations. Despite their fearsome reputation, crocodiles are vital for biodiversity and are protected through conservation efforts to ensure their survival.',
      methodImage: '/public/crocodileQr.png',
    },
    {
      avatarLetter: 'C',
      title: 'Car',
      subheader: 'May 22, 2019',
      image: '/public/Car2.jpeg',
      altText: 'Car illustration',
      description: 'The **car** is a modern marvel of engineering and design, essential for transportation worldwide. With fuel-efficient engines and innovative features, cars have revolutionized travel by making it faster and more convenient. They play a vital role in daily commutes, leisure trips, and long journeys. Cars are powered by internal combustion engines, electric motors, or hybrids, offering diverse options for drivers. Advanced technologies enhance safety, comfort, and connectivity. Beyond practicality, cars represent freedom and adventure, connecting people and places. Their evolution reflects human ingenuity, addressing environmental concerns and embracing sustainability to meet the demands of a changing world.',
      methodImage: '/public/Car.png',
    },
    {
      avatarLetter: 'L',
      title: 'Lungs',
      subheader: 'April 10, 2022',
      image: '/public/Lungs.jpeg',
      altText: 'Human lungs illustration',
      description: 'The **lungs** are vital respiratory organs responsible for oxygenating blood and expelling carbon dioxide. Located in the chest, they work with the diaphragm to enable breathing. Air travels through the trachea, bronchi, and alveoli, where gas exchange occurs. The lungs maintain blood pH and support metabolic processes. Each lung is surrounded by a pleural membrane for protection. Lungs are delicate yet resilient, with an ability to recover from minor damage. Proper lung function is critical for overall health, as they provide oxygen essential for survival. Maintaining healthy lungs involves avoiding pollutants and adopting a balanced lifestyle for well-being.',
      methodImage: '/public/lungsQr.png',
    },
  ];
  


  return (
  
    <div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 p-6
  bg-slate-100
   overflow-hidden relative"
  
>
      {cardData.map((card, index) => (
        <RecipeReviewCard
          key={index} // Ensure each card has a unique key
          avatarLetter={card.avatarLetter}
          title={card.title}
          subheader={card.subheader}
          image={card.image}
          altText={card.altText}
          description={card.description}
          methodImage={card.methodImage}
        />
      ))}
    </div>
  );
};

export default Product;
