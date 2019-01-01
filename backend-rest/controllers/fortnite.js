const Item = require('../models/item');
const path = require('path');

exports.getItemWeapons = (req, res, next) => {
    const itemId = req.params.itemId;
    Item.filterWeapons(itemId, item => {
        
        if (item) {
            console.log(item);
            res.json(item);
        } else if (!item) {
            console.log('No ID found, redirecting back to items page')
            res.redirect('/items')
        }
        
      });
}

exports.getItemWeapon = (req, res, next) => {
    const itemId = req.params.itemId;
    Item.findWeaponById(itemId, item => {
        
        if (item) {
            console.log(item);
            res.json(item);
        } else if (!item) {
            console.log('No ID found, redirecting back to items page')
            res.redirect('/items')
        }
        
      });
}

exports.getItemOutfit = (req, res, next) => {
    const itemId = req.params.itemId;
    Item.findOutfitById(itemId, item => {
        
        if (item) {
            console.log(item);
            res.json(item);
        } else if (!item) {
            console.log('No ID found, redirecting back to items page')
            res.redirect('/items')
        }
        
      });
}

exports.getItemGlider = (req, res, next) => {
    const itemId = req.params.itemId;
    Item.findGliderById(itemId, item => {
        
        if (item) {
            console.log(item);
            res.json(item);
        } else if (!item) {
            console.log('No ID found, redirecting back to items page')
            res.redirect('/items')
        }
        
      });
}

exports.getItemBackBling = (req, res, next) => {
    const itemId = req.params.itemId;
    Item.findBackBlingById(itemId, item => {
        
        if (item) {
            console.log(item);
            res.json(item);
        } else if (!item) {
            console.log('No ID found, redirecting back to items page')
            res.redirect('/items')
        }
        
      });
}

exports.getItemLoadingScreen = (req, res, next) => {
    const itemId = req.params.itemId;
    Item.findLoadingScreenById(itemId, item => {
        
        if (item) {
            console.log(item);
            res.json(item);
        } else if (!item) {
            console.log('No ID found, redirecting back to items page')
            res.redirect('/items')
        }
        
      });
}

exports.getItemSprayDecal = (req, res, next) => {
    const itemId = req.params.itemId;
    Item.findSprayDecalById(itemId, item => {
        
        if (item) {
            console.log(item);
            res.json(item);
        } else if (!item) {
            console.log('No ID found, redirecting back to items page')
            res.redirect('/items')
        }
        
      });
}

exports.getItemEmote = (req, res, next) => {
    const itemId = req.params.itemId;
    Item.findEmotesById(itemId, item => {
        
        if (item) {
            console.log(item);
            res.json(item);
        } else if (!item) {
            console.log('No ID found, redirecting back to items page')
            res.redirect('/items')
        }
        
      });
}

exports.getItemPickaxes = (req, res, next) => {
    const itemId = req.params.itemId;
    Item.findPickaxesById(itemId, item => {
        
        if (item) {
            console.log(item);
            res.json(item);
        } else if (!item) {
            console.log('No ID found, redirecting back to items page')
            res.redirect('/items')
        }
        
      });
}

exports.getItemContrail = (req, res, next) => {
    const itemId = req.params.itemId;
    Item.findContrailsById(itemId, item => {
        
        if (item) {
            console.log(item);
            res.json(item);
        } else if (!item) {
            console.log('No ID found, redirecting back to items page')
            res.redirect('/items')
        }
        
      });
}

exports.getItemToys = (req, res, next) => {
    const itemId = req.params.itemId;
    Item.findToysById(itemId, item => {
        
        if (item) {
            console.log(item);
            res.json(item);
        } else if (!item) {
            console.log('No ID found, redirecting back to items page')
            res.redirect('/items')
        }
        
      });
}

exports.getItemWeaponImg = (req, res, next) => {
    const itemImg = req.params.itemImg;
    Item.findWeaponByImg(itemImg, item => {
        
        if (item) {
            console.log(item);
            //res.json(item);
            res.sendFile(path.join(__dirname+`/assets/weapons/${item.img}`));
        } else if (!item) {
            console.log('No Image found, redirecting back to items page')
            res.redirect('/items')
        }
        
      });
}