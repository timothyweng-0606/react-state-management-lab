// src/App.jsx
import { useState } from 'react';
const zombieFighters = 
[
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
];


const RenderZombie = ({name,price,strength,agility,img, onAdd}) => {
  return (
    <li>
      <img src={img} alt="figter image" />
      <p>{name}</p>
      <p>Price: {price} </p>
      <p>Strength: {strength} </p>
      <p>Agility: {agility} </p>
      <button onClick={onAdd}>Add</button>
    </li>
  )
}

const TeamMember = ({ name, price, strength, agility, onRemove }) => {
  return (
    <li>
      <p>{name}</p>
      <p>Price: {price}</p>
      <p>Strength: {strength}</p>
      <p>Agility: {agility}</p>
      <button onClick={onRemove}>Remove</button>
    </li>
  );
};

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  
  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
    } else {
      alert('Not enough money to add this fighter!');
    }
  };

  const handleRemoveFighter = (index) => {
    const removedFighter = team[index];
    setTeam(team.filter((_, i) => i !== index));//i represent the index _ represent current element, 
    setMoney(money + removedFighter.price);
  };

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h3>Money: {money}</h3>
      <h3>Team Strength: {team.reduce((total, fighter) => total + fighter.strength, 0)}</h3>
      <h3>Team Agility: {team.reduce((total, fighter) => total + fighter.agility, 0)}</h3>
      <h3>Team:</h3>
      <ul>
        {team.map((fighter, index) => (
          <TeamMember key={index}
            {...fighter}
            onRemove={() => handleRemoveFighter(index)}
            >
          </TeamMember>
        ))}
      </ul>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <RenderZombie
            key={index}
            {...fighter}
            onAdd={() => handleAddFighter(fighter)}
          />
        ))}
      </ul>
    </>
  );
};


export default App
