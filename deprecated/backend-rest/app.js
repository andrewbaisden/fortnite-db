const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

const itemController = require('./controllers/fortnite');

app.get('/', (req, res) => res.send('Hello world'));

// Item Main Route
app.get('/items', (req, res) => {
  const data = require('./data/fortniteData.json');
  res.json(data);
});

// Item ID Routes
app.get('/items/:itemId', itemController.getItemWeapons);
app.get('/items/weapon/:itemId', itemController.getItemWeapon);
app.get('/items/outfits/:itemId', itemController.getItemOutfit);
app.get('/items/gliders/:itemId', itemController.getItemGlider);
app.get('/items/backblings/:itemId', itemController.getItemBackBling);
app.get('/items/loadingscreens/:itemId', itemController.getItemLoadingScreen);
app.get('/items/spraydecals/:itemId', itemController.getItemSprayDecal);
app.get('/items/emotes/:itemId', itemController.getItemEmote);
app.get('/items/pickaxes/:itemId', itemController.getItemPickaxes);
app.get('/items/contrails/:itemId', itemController.getItemContrail);
app.get('/items/toys/:itemId', itemController.getItemToys);

// Item img Routes
app.use('/static', express.static(path.join(__dirname, 'src/')));

app.use((req, res, next) => {
  res.status(404).send('404 Page Not Found');
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));
