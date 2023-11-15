class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      let name = this.items[i].name;
      let quality = this.items[i].quality;
      let sellIn = this.items[i].sellIn;
      this.items[i].sellIn -= 1;
      if (name == "Aged Brie") {
        this.items[i].quality += 1;
        if (sellIn <= 1) {
          this.items[i].quality = 0;
        }
      } else if (name == "Sulfuras, Hand of Ragnaros") {
        // quality unchanged
      } else if (name == "Backstage passes to a TAFKAL80ETC concert") {
        if (sellIn <= 10 && sellIn > 5) {
          this.items[i].quality += 2;
        } else if (sellIn <= 5) {
          this.items[i].quality += 3;
        }
        if (sellIn <= 0) {
          this.items[i].quality = 0;
        }
      } else if (name.slice(0, 8) == "Conjured") {
        if (sellIn > 0) {
          this.items[i].quality -= 2;
        } else {
          this.items[i].quality -= 4;
        }
      } else {
        // normal objects
        if (sellIn <= 0) {
          this.items[i].quality -= 2;
        } else {
          this.items[i].quality -= 1;
        }
        if (name == "foo") {
          this.items[i].name = "fixme";
        }
      }
      if ((name = "Sulfuras, Hand of Ragnaros" && quality >= 80)) {
        this.items[i].quality = quality;
      } else {
        if (quality > 50) {
          this.items[i].quality = 50;
        }
      }
      if (this.items[i].quality < 0) {
        this.items[i].quality = 0;
      }
    }
    return this.items;
  }
}
module.exports = {
  Item,
  Shop,
};
// const items = [
//   new Item("+5 Dexterity Vest", 10, 20),
//   new Item("Aged Brie", 2, 0),
//   // new Item("Elixir of the Mongoose", 5, 7),
//   // new Item("Sulfuras, Hand of Ragnaros", 0, 80),
//   // new Item("Sulfuras, Hand of Ragnaros", -1, 80),
//   // new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
//   // new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
//   // new Item("Backstage passes to a TAFKAL80ETC concert", 5, 39),

//   // This Conjured item does not work properly yet
//   new Item("Conjured Mana Cake", 1, 6),
// ];

// const days = 4;
// const gildedRose = new Shop(items);

// for (let day = 0; day <= days; day++) {
//   console.log(`\n-------- day ${day} --------`);
//   console.log("name, sellIn, quality");
//   items.forEach((item) => {
//     console.log(`${item.name}, ${item.sellIn}, ${item.quality}`);
//   });
//   gildedRose.updateQuality();
// }
