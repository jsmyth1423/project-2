# Valorant Themed Guesssing Game - SEI Project 2

[Play it here!](https://project-2-api.netlify.app/)

## Overview

A simple matching game where you have to guess which abilities belong to which character from the video game Valorant. Hints are available to those who are unfamiliar with the game as well as an area where you can see all the characters and their abilities.

**Controls:**  
Mouse control for selecting


## The Task:

- **Consume a public API** – this could be anything but it must make sense for your project.
- **Have several components** - organise your components in the components folder in your src directory.
- **The app can have a router** - with several "pages", this is up to your disgression and if it makes sense for your project.
- **Include wireframes** - that you designed before building the app.
- **Be deployed online** and accessible to the public - we will deploy the apps together at the end of the project.

---

## Tools Used:
* HTML
* CSS
* JavaScript
* React
* Axios
* Bulma
* SCSS
* Postman
* Git
* Github
* Node.js
* Netlify (deployment)

## The Plan: 
(need to recreate wireframe as lost)

We collaboratively wireframed our vision of the project as well as the key things we thought would be necessary for a working product.

## Key Challenges:

The primary issues were as follows:
1. Retrieve a list of the characters from the API, eliminating a duplicate and then randomise the order.
2. From the list of characters, retrieve one to set as the character you are guessing for, grab one (random) ability.
3. From the list of characters excluding the active character, retrieve 3 other random abilities **without grabbing duplicates**.


The majority of project time was spent on the above issues.

Retrieving the data was relatively simple, we then filtered it with a useful modifier that the API had to eliminate a duplicate. The activate function both set a random character(agent), as well as called the function to create the array of wrong answers since it needed data passed from this function to do so.

![image](https://user-images.githubusercontent.com/53213823/167615712-d8775702-c384-46d4-9317-71da89dfdb77.png)

---

The selectRandomAbilities function did a lot of heavy-lifting. First it set the correct answer by randomly grabbing one of the 4 abiltiies from the active character state. We then created an array of abilities excluding the active character. Next we used a while loop to populate our empty wrong answers array, getting a random ability from the inactive list while checking for duplicates and removing them if any were randomly chosen.

![image](https://user-images.githubusercontent.com/53213823/167616696-6d78967d-cadb-48f0-b3d0-560948431f31.png)

---

The last step was to randomise the array of answers that would display to the user otherwise the correct answer would always appear in the same spot, which would make the game very easily defeatable if noticed.

![image](https://user-images.githubusercontent.com/53213823/167617188-50e7c358-56ac-4b3f-9480-a48edfe525b4.png)

---
## Lessons Learned
1. You can get a lot done in 2 days (with two people)!
Consuming a public API meant that we just had to build the front-end around it, and it being a two-person project felt like we had an exponential increase in general productvity rather than just double. The opportunity to constantly bounce solutions off of eachother was extremely useful and solving problems was generally easier with a greater volume of potential fixes.
  
2. State is a tricky tool but incredibly useful
Before this project we had a rudimentary understanding of state, mostly in that we could use it quite basically but I personally did not understand it that well as I had only implemented it in identical ways to the teaching I had received, having to come up with our own code from scratch meant our uses of state felt very intentional, and between state and useEffects I learned a huge amount about why it is so necessary in React to use it. It undeniably was the cause of the majority of our challenges but is also essential to the project working.
---

## Ideals 

1. Cleaner CSS, we felt somewhat rushed on the styling so it was fairly simplistic but came out decently.
2. Having a hard-mode of the game where the reverse situation is given, one ability you must match to 4 characters.

