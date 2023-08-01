const villagersData = require("./json/villagers.json");

const findVillagerByName = (name) => {
  return villagersData.villagers.find((villager) => villager.name === name);
};

module.exports = {
  findVillagerByName,
};
