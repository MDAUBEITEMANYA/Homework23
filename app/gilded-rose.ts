export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

const AgedBrie = 'Aged Brie'
const BackstagePasses = 'Backstage passes to a TAFKAL80ETC concert'
const ConjuredMana = 'Conjured Mana Cake'
const SulfurasHand = 'Sulfuras, Hand of Ragnaros'

function chooseStrategy(item : Item) : Item{
  
    switch (item.name) {
    case AgedBrie : 
        item.quality++;
      break;

    case BackstagePasses:

        if(item.sellIn > 0) {
            item.quality++;

            if(item.sellIn < 10) {
              item.quality++;

              if(item.sellIn<5) item.quality++;
            }
        }  else {
            item.quality = 0;
          }
      
      break;

    case ConjuredMana:
        item.quality -=2;
      break;
      
    case SulfurasHand :
      return item;

    default:

          if(item.sellIn < 0) {
            item.quality -= 2;
          } else {
            item.quality--;
          }
  }
  
  item.sellIn--;

  if(item.quality > 50) {
    item.quality = 50;
  }

  if(item.quality < 0) {
    item.quality = 0;}
  
  return item;
}

export class GildedRose {
   
    items: Array<Item>;
    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
             this.items[i] = chooseStrategy(this.items[i]); }
        return this.items;
    }
}