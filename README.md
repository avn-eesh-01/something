# Premium Birthday Celebration Website

A modern, animated, and interactive birthday website to celebrate your friend's special day. This website features beautiful animations, particle effects, interactive elements, and a premium design.

## Features

- Modern and premium design with beautiful color schemes
- Interactive animations and effects using GSAP, Particles.js, and Animate.css
- Responsive layout that works on all devices
- **Grand movie-style intro page** highlighting the birthday person
- Customizable sections for memories, wishes, and photo gallery
- Interactive cake with candle animation
- Confetti celebration effect
- Personalization options
- Smooth scrolling and navigation
- 3D tilt effects on gallery images

## How to Use

1. **Download or Clone**: Download all the files to your computer.

2. **Start with the Intro**: 
   - Open `intro.html` to experience the cinematic introduction to the birthday person.
   - This page features movie-style animations and a dramatic reveal.
   - You can replace the placeholder portrait with a photo of the birthday person.

3. **Customize Content**: 
   - Open `index.html` to modify the text content, such as memories, wishes, and personal message.
   - Replace "Friend's Name" with your friend's actual name (or click on the name when viewing the site to change it).
   - Add your own photos by replacing the placeholder gradients in the CSS file.

4. **Add Photos**:
   - To add real photos instead of the placeholder gradients, modify the CSS for `.placeholder-1`, `.placeholder-2`, etc. classes.
   - For example, change:
     ```css
     .placeholder-1 {
         background: linear-gradient(45deg, #ffafbd, #ffc3a0);
     }
     ```
     to:
     ```css
     .placeholder-1 {
         background-image: url('path/to/your/image.jpg');
     }
     ```

5. **Personalization**:
   - You can change the colors by modifying the CSS variables in the `:root` selector at the top of the CSS file.
   - Customize animations by adjusting parameters in the JavaScript file.

6. **View the Website**:
   - Open `intro.html` in a web browser to start with the cinematic intro.
   - Navigate to the main celebration page by clicking the "Celebrate Now" button.
   - For the best experience, use Chrome, Firefox, or Edge.

## Interactive Elements

- **Click on the name**: Allows you to change the birthday person's name.
- **Hover over the candle**: Makes the flame grow larger.
- **Click "Celebrate" button**: Triggers confetti animation and bounces elements.
- **Hover over gallery photos**: Creates a 3D tilt effect.
- **Move mouse over the background**: Interacts with the floating particles.
- **Interact with the intro page**: Experience 3D poster tilt effects by moving your mouse.

## Hidden Messages & Easter Eggs

The website contains several hidden surprises:

- **Click the gift emoji** 🎁 at the bottom of the special message section to reveal a hidden message.
- **Click the magnifying glass** 🔍 in the footer to find another secret.
- **Triple-click on the cake** to discover a hidden wish.
- **Type "HAPPY"** on your keyboard anywhere on the site for a magical surprise.
- **Find hidden symbols** around the page (they're slightly transparent) and click them for secret messages.

These hidden features make the birthday website more interactive and fun to explore!

## Credits

This website uses the following libraries:

- [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)
- [Particles.js](https://vincentgarreau.com/particles.js/)
- [Animate.css](https://animate.style/)
- [Remix Icon](https://remixicon.com/)
- [Canvas Confetti](https://github.com/catdad/canvas-confetti)
- [Vanta.js](https://www.vantajs.com/) for the intro page background
- [Three.js](https://threejs.org/) for 3D effects
- Google Fonts (Poppins, Dancing Script, Montserrat, and Playfair Display)

## Customization Tips

- Change the color scheme by modifying the CSS variables at the top of the style.css file
- Add music by uncommenting and updating the audio section in the JavaScript file
- Add more memories, wishes, or photos by duplicating the HTML elements
- Replace placeholder images with actual photos of you and your friend
- Customize the intro page text to better describe the birthday person

Enjoy celebrating your friend's special day with this premium birthday website!