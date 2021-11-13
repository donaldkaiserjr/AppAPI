import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";

// inside render method, below useDropdown calls
useEffect(() => {
  updateBreeds([]);
  updateBreed("");
  pet.breeds(animal).then(({ breeds }) => {
    const breedStrings = breeds.map(({ name }) => name);
    updateBreeds(breedStrings);
  }, console.error);
}, [animal]);
