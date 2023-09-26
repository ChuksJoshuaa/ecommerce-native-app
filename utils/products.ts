export const getUniqueID = () => Math.floor(Math.random() * 1000000000);

export function toCamelCase(name: string) {
  return name.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}

export function formatName(name: string) {
  if (name.length > 12) {
    return name.slice(0, 12) + "...";
  } else {
    return name;
  }
}

export const products = [
  {
    id: getUniqueID().toString(),
    name: "African Doughnut Mix",
    url: `https://res.cloudinary.com/chuksmbanaso/image/upload/v1695716997/doughnut_nmm7fz.jpg`,
    price: `£30`,
    description: `Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, 
    shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly chewier.
    It is a very common snack eaten by so many West African countries but with different names and a little
    bit of variation in the mode of preparation.`,
    ingredients: `Wheat Flour, Natural Sugar, Yeast, Salt, Nutmeg`,
    nutritionalInformation: {
      name: `Amount Per serving Size – 100g`,
      details: [
        {
          name: "Energy",
          value: "1575KJ",
        },
        {
          name: "Calories",
          value: "366kcal",
        },
        {
          name: "Carbohydrates",
          value: "84g",
        },
        {
          name: "Of which Sugars",
          value: "25g",
        },
        {
          name: "Protein",
          value: "7.8g",
        },
        {
          name: "Fat",
          value: "1.1g",
        },
        {
          name: "Saturated Fat",
          value: "0.3g",
        },
        {
          name: "Sodium",
          value: "35mg",
        },
      ],
    },
    info: `Percent Daily Values are based on a 2,000-calorie diet. Your daily values may be higher or lower depending on your calorie needs.`,
    prepare: [
      `Empty the bag content into a mixing bowl (Medium sized bowl)`,
      `Mix 500ml of warm water into the mix.`,
      `Mix thoroughly with hand or mixing spatula to get a consistent smooth batter`,
      `Cover the batter with a cling fling or foil paper and ensure you leave in a warm place for 50 -100 mins (warmer temperature might quicken the process)`,
      `Once the batter has risen, use hands or spoon to scoop the batter and fry in pre heated oil (about 170-180C) of choice in a deep pan.`,
      `Fry until scooped batter becomes golden brown.Cooks in 10mins from Mix (After it rises)`,
      `Remove Puff-Puff from Oil and drain as needed and serve accordingly.`,
    ],
    dietaryInformation: [
      `Allergy – Product contains nuts/gluten`,
      `Suitable for Vegetarians`,
    ],
    storageInformation: `Store in a dry cool place`,
    extra: [
      `Made with 100% natural and organic ingredients`,
      `Made with 100% natural and organic ingredients`,
      `High in protein`,
    ],
  },
  {
    id: getUniqueID().toString(),
    name: "Efo Eiro",
    url: `https://res.cloudinary.com/chuksmbanaso/image/upload/v1695717360/efo_ckzfcz.jpg`,
    price: `£30`,
    description: `Indulge in the flavorful delight of our Efo Riro Soup. Originating from West Africa, Efo Riro is a thick and aromatic soup that showcases a delightful medley of leafy vegetables, aromatic spices, and succulent meats. Rare Eat Efo Riro Soup combines the freshness of local ingredients, including a variety of nutrient-rich leafy greens, complemented by the richness of palm oil and perfectly seasoned meat.`,
    ingredients: `Green leafy vegetables, fresh red peppers, assorted meat, mixed peppers, onions, locust beans (Iru), Palm oil and Spices`,
    nutritionalInformation: {
      name: `Amount Per Serving Size – 100g`,
      details: [
        {
          name: "Dietary Fiber",
          value: "4.1g",
        },
        {
          name: "Sugars",
          value: "1.6g",
        },
        {
          name: "Fat",
          value: "10g",
        },
        {
          name: "Saturated",
          value: "7.2g",
        },
        {
          name: "Polyunsaturated",
          value: "0.8g",
        },
        {
          name: "Monounsaturated",
          value: "3.6g",
        },
        {
          name: "Protein",
          value: "15g",
        },
      ],
    },
    info: `Percent Daily Values are based on a 2,000-calorie diet. Your daily values may be higher or lower depending on your calorie needs.`,
    prepare: [
      `Empty the stew bag content into a pot, of boiling water (70-100ml)`,
      `Leave to cook for 10 - 15 mins on low heat and then mix thoroughly for 30secs`,
      `Add the vegetable and leave to cook for a further 5 mins still on low heat`,
      `Meat tenderness is based on your preference. So, you may cook longer if preferred. Serve accordingly`,
    ],
    dietaryInformation: [
      `Allergy – Product contains nuts/gluten`,
      `Suitable for Vegetarians`,
    ],
    storageInformation: `Store in a dry cool place`,
    extra: [
      `Made with 100% natural and organic ingredients`,
      `Made with 100% natural and organic ingredients`,
      `High in protein`,
    ],
  },
  {
    id: getUniqueID().toString(),
    name: "Yam Porridge (Asaro)",
    url: `https://res.cloudinary.com/chuksmbanaso/image/upload/v1695717589/yam_glnrtk.jpg`,
    price: `£30`,
    description: `Rare Eat Yam Porridge is a The Nigerian Yam pottage/Yam Porridge (Asaro) which is also known as Yam pottage or Yam porridge is a very delicious Yam recipe. Asaro is made from Puna Yam which is boiled till it’s tender and it’s cooked in a blend of Peppers, Tomatoes, and Onions (recipe here) and Palm Oil.`,
    ingredients: `Yam, fresh red peppers and onions and Palm oil and Spices`,
    nutritionalInformation: {
      name: `Amount Per serving Size – 100g`,
      details: [
        {
          name: "Energy",
          value: "1575KJ",
        },
        {
          name: "Calories",
          value: "366kcal",
        },
        {
          name: "Carbohydrates",
          value: "84g",
        },
        {
          name: "Of which Sugars",
          value: "25g",
        },
        {
          name: "Protein",
          value: "7.8g",
        },
        {
          name: "Fat",
          value: "1.1g",
        },
        {
          name: "Saturated Fat",
          value: "0.3g",
        },
        {
          name: "Sodium",
          value: "35mg",
        },
      ],
    },
    info: `Percent Daily Values are based on a 2,000-calorie diet. Your daily values may be higher or lower depending on your calorie needs.`,
    prepare: [
      `Empty the bag content into a mixing bowl (Medium sized bowl)`,
      `Mix 500ml of warm water into the mix.`,
      `Mix thoroughly with hand or mixing spatula to get a consistent smooth batter`,
      `Cover the batter with a cling fling or foil paper and ensure you leave in a warm place for 50 -100 mins (warmer temperature might quicken the process)`,
      `Once the batter has risen, use hands or spoon to scoop the batter and fry in pre heated oil (about 170-180C) of choice in a deep pan.`,
      `Fry until scooped batter becomes golden brown.Cooks in 10mins from Mix (After it rises)`,
      `Remove Puff-Puff from Oil and drain as needed and serve accordingly.`,
    ],
    dietaryInformation: [
      `Allergy – Product contains nuts/gluten`,
      `Not Suitable for Vegetarians`,
      `No added Sugar`,
    ],
    storageInformation: `Refrigerate and consume within 3 days`,
    extra: [
      `Made with 100% natural and organic ingredients`,
      `Made with 100% natural and organic ingredients`,
      `High in protein`,
    ],
  },
  {
    id: getUniqueID().toString(),
    name: "Chicken Stew",
    url: `https://res.cloudinary.com/chuksmbanaso/image/upload/v1695716997/chiken_f6ddwl.png`,
    price: `£30`,
    description: `Rare Eat Nigerian Chicken stew is a delightful West African stew made with chicken and simmered in a savoury sauce made with tomatoes and peppers. It is so versatile and can be eaten with many different dishes!`,
    ingredients: `Chicken, Sunflower oil, Spices, blended plum tomatoes, red bell peppers,and habanero peppers`,
    nutritionalInformation: {
      name: `Amount Per serving Size – 100g`,
      details: [
        {
          name: "Energy",
          value: "1575KJ",
        },
        {
          name: "Calories",
          value: "366kcal",
        },
        {
          name: "Carbohydrates",
          value: "84g",
        },
        {
          name: "Of which Sugars",
          value: "25g",
        },
        {
          name: "Protein",
          value: "7.8g",
        },
        {
          name: "Fat",
          value: "1.1g",
        },
        {
          name: "Saturated Fat",
          value: "0.3g",
        },
        {
          name: "Sodium",
          value: "35mg",
        },
      ],
    },
    info: `Percent Daily Values are based on a 2,000-calorie diet. Your daily values may be higher or lower depending on your calorie needs.`,
    prepare: [
      `Empty the bag content into a mixing bowl (Medium sized bowl)`,
      `Mix 500ml of warm water into the mix.`,
      `Mix thoroughly with hand or mixing spatula to get a consistent smooth batter`,
      `Cover the batter with a cling fling or foil paper and ensure you leave in a warm place for 50 -100 mins (warmer temperature might quicken the process)`,
      `Once the batter has risen, use hands or spoon to scoop the batter and fry in pre heated oil (about 170-180C) of choice in a deep pan.`,
      `Fry until scooped batter becomes golden brown.Cooks in 10mins from Mix (After it rises)`,
      `Remove Puff-Puff from Oil and drain as needed and serve accordingly.`,
    ],
    dietaryInformation: [
      `Allergy – Product contains nuts/gluten`,
      `Suitable for Vegetarians`,
    ],
    storageInformation: `Store in a dry cool place`,
    extra: [
      `Made with 100% natural and organic ingredients`,
      `Made with 100% natural and organic ingredients`,
      `High in protein`,
    ],
  },
  {
    id: getUniqueID().toString(),
    name: "Red Beans (Ewa)",
    url: `https://res.cloudinary.com/chuksmbanaso/image/upload/v1695716998/ewa_dxgpoa.png`,
    price: `£30`,
    description: `Rare Eat Ewa (Stewed beans), also known as beans porridge, is a Nigerian delicacy. The most traditional beans used for this dish is honey beans (Sweet Beans).Also known as ewa riro, is a very simple beans porridge meal that can be made using beans, onions, and peppers, to create a wonderful mix of flavours that will give you comfort after a long day.`,
    ingredients: `Red Beans, fresh red peppers and onions and Palm oil and Spices`,
    nutritionalInformation: {
      name: `Amount Per serving Size – 100g`,
      details: [
        {
          name: "Energy",
          value: "1575KJ",
        },
        {
          name: "Calories",
          value: "366kcal",
        },
        {
          name: "Carbohydrates",
          value: "84g",
        },
        {
          name: "Of which Sugars",
          value: "25g",
        },
        {
          name: "Protein",
          value: "7.8g",
        },
        {
          name: "Fat",
          value: "1.1g",
        },
        {
          name: "Saturated Fat",
          value: "0.3g",
        },
        {
          name: "Sodium",
          value: "35mg",
        },
      ],
    },
    info: `Percent Daily Values are based on a 2,000-calorie diet. Your daily values may be higher or lower depending on your calorie needs.`,
    prepare: [
      `Empty the bag content into a mixing bowl (Medium sized bowl)`,
      `Mix 500ml of warm water into the mix.`,
      `Mix thoroughly with hand or mixing spatula to get a consistent smooth batter`,
      `Cover the batter with a cling fling or foil paper and ensure you leave in a warm place for 50 -100 mins (warmer temperature might quicken the process)`,
      `Once the batter has risen, use hands or spoon to scoop the batter and fry in pre heated oil (about 170-180C) of choice in a deep pan.`,
      `Fry until scooped batter becomes golden brown.Cooks in 10mins from Mix (After it rises)`,
      `Remove Puff-Puff from Oil and drain as needed and serve accordingly.`,
    ],
    dietaryInformation: [
      `Allergy – Product contains nuts/gluten`,
      `Suitable for Vegetarians`,
    ],
    storageInformation: `Store in a dry cool place`,
    extra: [
      `Made with 100% natural and organic ingredients`,
      `Made with 100% natural and organic ingredients`,
      `High in protein`,
    ],
  },
  {
    id: getUniqueID().toString(),
    name: "Jollof Rice",
    url: `https://res.cloudinary.com/chuksmbanaso/image/upload/v1695716998/jollof_wgq6k0.png`,
    price: `€30`,
    description: `Our Rare Eat Jollof Rice is an easy, flavorful and perfectly cooked African classic dish. Rare Eat Jollof rice is made with de-starched rice, tomatoes, tomato paste, onions, scotch bonnet peppers, salt, and spices.`,
    ingredients: `De-starched Rice, tomatoes, tomato paste, onions, scotch bonnet peppers, salt, and spices.`,
    nutritionalInformation: {
      name: `Amount Per serving Size – 100g`,
      details: [
        {
          name: "Energy",
          value: "1575KJ",
        },
        {
          name: "Calories",
          value: "366kcal",
        },
        {
          name: "Carbohydrates",
          value: "84g",
        },
        {
          name: "Of which Sugars",
          value: "25g",
        },
        {
          name: "Protein",
          value: "7.8g",
        },
        {
          name: "Fat",
          value: "1.1g",
        },
        {
          name: "Saturated Fat",
          value: "0.3g",
        },
        {
          name: "Sodium",
          value: "35mg",
        },
      ],
    },
    info: `Percent Daily Values are based on a 2,000-calorie diet. Your daily values may be higher or lower depending on your calorie needs.`,
    prepare: [
      `Empty the bag content into a mixing bowl (Medium sized bowl)`,
      `Mix 500ml of warm water into the mix.`,
      `Mix thoroughly with hand or mixing spatula to get a consistent smooth batter`,
      `Cover the batter with a cling fling or foil paper and ensure you leave in a warm place for 50 -100 mins (warmer temperature might quicken the process)`,
      `Once the batter has risen, use hands or spoon to scoop the batter and fry in pre heated oil (about 170-180C) of choice in a deep pan.`,
      `Fry until scooped batter becomes golden brown.Cooks in 10mins from Mix (After it rises)`,
      `Remove Puff-Puff from Oil and drain as needed and serve accordingly.`,
    ],
    dietaryInformation: [
      `Allergy – Product contains nuts/gluten`,
      `Suitable for Vegetarians`,
    ],
    storageInformation: `Store in a dry cool place`,
    extra: [
      `Made with 100% natural and organic ingredients`,
      `Made with 100% natural and organic ingredients`,
      `High in protein`,
    ],
  },
];
