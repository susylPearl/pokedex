export const getHeight = (height) => Math.round((height * 0.328084 + 0.00001) * 100) / 100;

export const getWeight = (weight) => Math.round((weight * 0.220462 + 0.00001) * 100) / 100;

export const getGenderRatioFemale = (rate) => 12.5 * rate;

export const getGenderRatioMale = (rate) => 12.5 * (8 - rate);

export const getCatchRate = (rate) => Math.round((100 / 255) * rate);

export const getHatchSteps = (counter) => 255 * (counter + 1);

export const getGrowthRate = (rate) => rate.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join('');

export const getAbilities = (abilities) => abilities
  .map(ability => {
    return ability.ability.name
      .toLowerCase()
      .split('-')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  }).join(', ');

export const getEggGroups = (eggGroups) => eggGroups
  .map(group => {
    return group.name
      .toLowerCase()
      .split(' ')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  }).join(', ');