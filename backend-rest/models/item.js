const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'fortniteData.json'
);

const getItemsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

// Query API by ID
exports.findWeaponById = (id, cb) => {
  getItemsFromFile(items => {
    const item = items.weapon.find(i => i.id === id);
    
    cb(item);
  });
}

exports.findOutfitById = (id, cb) => {
  getItemsFromFile(items => {
    const item = items.outfit.find(i => i.id === id);
    
    cb(item);
  });
}

exports.findGliderById = (id, cb) => {
  getItemsFromFile(items => {
    const item = items.glider.find(i => i.id === id);
    
    cb(item);
  });
}

exports.findBackBlingById = (id, cb) => {
  getItemsFromFile(items => {
    const item = items.backbling.find(i => i.id === id);
    
    cb(item);
  });
}

exports.findLoadingScreenById = (id, cb) => {
  getItemsFromFile(items => {
    const item = items.loadingscreen.find(i => i.id === id);
    
    cb(item);
  });
}

exports.findSprayDecalById = (id, cb) => {
  getItemsFromFile(items => {
    const item = items.spraydecal.find(i => i.id === id);
    
    cb(item);
  });
}

exports.findEmotesById = (id, cb) => {
  getItemsFromFile(items => {
    const item = items.emotes.find(i => i.id === id);
    
    cb(item);
  });
}

exports.findPickaxesById = (id, cb) => {
  getItemsFromFile(items => {
    const item = items.pickaxe.find(i => i.id === id);
    
    cb(item);
  });
}

exports.findContrailsById = (id, cb) => {
  getItemsFromFile(items => {
    const item = items.contrail.find(i => i.id === id);
    
    cb(item);
  });
}

exports.findToysById = (id, cb) => {
  getItemsFromFile(items => {
    const item = items.toys.find(i => i.id === id);
    
    cb(item);
  });
}

// Query API by type
exports.findByType = (type, cb) => {
  getItemsFromFile(items => {
    const item = items.find(i => i.type === type);
    
    cb(item);
  });
}

// Query API by rarity
exports.findByRarity = (itemRarity, cb) => {
  getItemsFromFile(items => {
    const item = items.find(i => i.itemRarity === itemRarity);
    
    cb(item);
  });
}