declare module "stardew-wiki" {
  interface Villager {
    name: string;
  }

  export function findVillagerByName(name: string): Villager | undefined;
}
