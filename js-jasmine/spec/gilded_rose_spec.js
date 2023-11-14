const { Shop, Item } = require("../src/gilded_rose.js");

describe("Gilded Rose", function () {
  it("full test", () => {
    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 39),
      new Item("Conjured Mana Cake", 3, 6),
    ];

    const days = Number(process.argv[2]) || 3;
    const gildedRose = new Shop(items);

    for (let day = 0; day < days; day++) {
      console.log(`\n-------- day ${day} --------`);
      console.log("name, sellIn, quality");
      items.forEach((item) =>
        console.log(`${item.name}, ${item.sellIn}, ${item.quality}`)
      );
      gildedRose.updateQuality();
    }
  });

  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("fixme");
  });

  it("backstage quality should increase by 3 if sellin <= 5 days", function () {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 3, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
    expect(items[1].quality).toBe(12);
  });
  it("Sulfuras's quality doesn't change", function () {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", -1, 100),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(100);
    expect(items[0].sellIn).toBe(-2);
    expect(items[1].quality).toBe(80);
    expect(items[1].sellIn).toBe(-1);
  });
  it("Item's quality should'nt be negative ", function () {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 2, 100),
      new Item("Aged Brie", 0, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0),
      new Item("Conjured Mana Cake", 0, 0),
      new Item("Moncul Cake", 2, 0),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(100);
    expect(items[1].quality).toBe(0);
    expect(items[2].quality).toBe(0);
    expect(items[3].quality).toBe(0);
    expect(items[4].quality).toBe(0);
  });
  // reste à tester :
  // agebrie augmente sa qualité plus le temps passe => la qualité tombre à 0 après concert
  // date de péremption dépassée =>qualité se dégrade 2 fois plus vite
});
