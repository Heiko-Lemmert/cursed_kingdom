# cursed_kingdom
 2D JavaScript Platformer Game

🔍 Debugging Collisions (Hitbox Frame Helper)
To help debug collision detection in your game, you can enable visual bounding boxes around objects like the player, enemies, and collectibles.

📍 Location
Modify the `addToMap()` method inside the World class.

✅ Code Example
<pre>```js
wo.drawFrame(this.ctx);
if (
    wo instanceof Character ||
    wo instanceof Skeleton ||
    wo instanceof Ghoul ||
    wo instanceof Endboss ||
    wo instanceof CollectibleObject
) {
    wo.drawInnerFrame(this.ctx);
}
```</pre>


🧠 How It Works
drawFrame(ctx) — draws the outer frame of any movable object (main sprite boundary).

drawInnerFrame(ctx) — draws a tighter frame used for precise collision detection.

This is helpful for verifying if your objects collide correctly during gameplay.
