import React, { useState } from 'react';

function IngredientsDisplay() {
  const ingredients = ['Lettuce', 'Tomato', 'Onion', 'Kebab'];
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedVegetarianOption, setSelectedVegetarianOption] = useState(null);

  const handleIngredientClick = (ingredient) => {
    setSelectedIngredient(ingredient);
    setSelectedOption(null);
    setSelectedVegetarianOption(null);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleVegetarianOptionSelect = (vegetarianOption) => {
    setSelectedVegetarianOption(vegetarianOption);
  };

  return (
    <div>
      <h2>Available Ingredients:</h2>
      <div className="ingredient-cards">
        {ingredients.map((ingredient, index) => (
          <div 
            key={index} 
            className={`ingredient-card ${selectedIngredient === ingredient ? 'selected' : ''}`} 
            onClick={() => handleIngredientClick(ingredient)}
          >
            {ingredient}
          </div>
        ))}
      </div>
      {selectedIngredient && (
        <div className="selected-ingredient">
          <h3>Selected Ingredient:</h3>
          <div className="ingredient-card selected">{selectedIngredient}</div>
          <h3>Options:</h3>
          <div className="option-buttons">
            <button 
              className={`option-button ${selectedOption === 'galette' ? 'selected' : ''}`} 
              onClick={() => handleOptionSelect('galette')}
            >
              Galette
            </button>
            <button 
              className={`option-button ${selectedOption === 'pain' ? 'selected' : ''}`} 
              onClick={() => handleOptionSelect('pain')}
            >
              Pain
            </button>
          </div>
        </div>
      )}
      {selectedOption && (
        <div className="selected-ingredient">
          <h3>Selected Option:</h3>
          <div className="ingredient-card selected">{selectedOption}</div>
          <h3>Végétarien ou non végétarien:</h3>
          <div className="option-buttons">
            <button 
              className={`option-button ${selectedVegetarianOption === 'végétarien' ? 'selected' : ''}`} 
              onClick={() => handleVegetarianOptionSelect('végétarien')}
            >
              Végétarien
            </button>
            <button 
              className={`option-button ${selectedVegetarianOption === 'non-végétarien' ? 'selected' : ''}`} 
              onClick={() => handleVegetarianOptionSelect('non-végétarien')}
            >
              Non végétarien
            </button>
          </div>
        </div>
      )}
      {selectedVegetarianOption && (
        <div className="selected-ingredient">
          <h3>Recap:</h3>
          <div className="recap">
            <p>Ingredient: {selectedIngredient}</p>
            <p>Type of Bread: {selectedOption}</p>
            <p>Végétarien ou non végétarien: {selectedVegetarianOption}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default IngredientsDisplay;
