# Cursed Kingdom: The Old Paths

**Cursed Kingdom: The Old Paths** is a browser-based 2D action platformer where you take on the role of a hooded archer fighting your way through undead enemies in a dark, medieval world.

## Features

- 🎯 Bow-and-arrow combat
- 🧟‍♂️ Enemies: Skeletons, Ghouls, and a powerful Endboss
- 🍎 Collectibles: Coins and Apples (restore energy)
- 📱 Responsive Design for mobile, tablet, and desktop
- 🎮 Touch controls and keyboard support

---

## 💻 How to Play

### Desktop:

- Arrow Keys or WASD to move
- Space to jump
- F to fire arrow
- Use the UI to start/restart the game

### Mobile / Tablet:

- On-screen touch controls
- Tap buttons for movement, jumping, and shooting

---

## 📱 Rotate Overlay (Mobile Portrait Mode)

When a user opens the game in portrait mode on a phone or tablet, a rotate overlay will appear:

```html
<div id="rotate-overlay">
  <div class="rotate-message">Turn your Device to play 🔄</div>
</div>
```

You can control this with CSS:

```css
@media only screen and (orientation: portrait) and (max-width: 900px) {
  #rotate-overlay {
    display: flex;
  }

  #start-screen,
  #game-screen,
  #won-screen,
  #lost-screen {
    display: none !important;
  }
}
```

---

## 🛠️ Developer Tools

### Debugging Collisions:

To visualize collision boxes during development, you can enable frame drawing in the `addToMap()` function inside `world.class.js`:

```js
wo.drawFrame(this.ctx);

if (
  wo instanceof Character ||
  wo instanceof Skeleton ||
  wo instanceof Ghoul ||
  wo instanceof Lich ||
  wo instanceof Endboss ||
  wo instanceof CollectibleObject
) {
  wo.drawInnerFrame(this.ctx);
} 
```

For more specifice Information added the code to the `world.class.js` and your running the Function.

```js
/**
     * Debug function to log collision frame coordinates
     * Displays boundaries for character, enemies, and coins
     */
    checkCollisonFrame() {
        console.log('Objekt Character - Berechnete Grenzen:');
        console.log('Left:', this.character.x + this.character.offset.left);
        console.log('Right:', this.character.x + this.character.width - this.character.offset.right);
        console.log('Top:', this.character.y + this.character.offset.top);
        console.log('Bottom:', this.character.y + this.character.height - this.character.offset.bottom);

        console.log('Objekt Enemy - Berechnete Grenzen:');
        console.log('Left:', this.level.enemies[0].x + this.level.enemies[0].offset.left);
        console.log('Right:', this.level.enemies[0].x + this.level.enemies[0].width - this.level.enemies[0].offset.right);
        console.log('Top:', this.level.enemies[0].y + this.level.enemies[0].offset.top);
        console.log('Bottom:', this.level.enemies[0].y + this.level.enemies[0].height - this.level.enemies[0].offset.bottom);

        console.log('Objekt Coin - Berechnete Grenzen:');
        console.log('Left:', this.level.coins[0].x + this.level.coins[0].offset.left);
        console.log('Right:', this.level.coins[0].x + this.level.coins[0].width - this.level.coins[0].offset.right);
        console.log('Top:', this.level.coins[0].y + this.level.coins[0].offset.top);
        console.log('Bottom:', this.level.coins[0].y + this.level.coins[0].height - this.level.coins[0].offset.bottom);
    }
```

This draws outer and inner frames to help identify hitboxes and collisions.

---

## 🧪 Troubleshooting

### Game not starting on mobile?

Check the following:

- Touch event listeners are properly attached
- `btn-start` exists in the DOM when `initTouchControls()` is called
- No `display: none` is hiding `#btn-start` due to media queries
- Use browser developer tools or remote debugging for deeper inspection

### Remote Debugging (iPhone + Firefox on Windows):

Unfortunately, **Firefox on Windows does not support remote debugging for iOS devices**. Use:

- Safari on macOS + iPhone (recommended)
- Chrome DevTools + Remote Debugging via USB (Android only)

---

## 📜 License

This project is for educational and personal use. All graphics and code are property of the developer.

---

Enjoy the adventure in the **Cursed Kingdom**! 🏹
