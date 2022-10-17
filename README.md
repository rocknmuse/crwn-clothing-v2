# Crown Clothing Project

Learning project forked from [Crown Clothing by Yihua Zhang](https://github.com/ZhangMYihua/crwn-clothing-v2)

Project has been migrated to React 18

Redux has been replaced with redux-toolkit

## Prerunning:

### Install dependencies

In your terminal after you clone your project down, remember to run either `yarn` or `npm install` to build all the dependencies in the project.

### Set your firebase config

Remember to replace the config variable in your firebase.utils.js with your own config object from the firebase dashboard! Navigate to the project settings gear icon > project settings and scroll down to the config code. Copy the object in the code and replace the variable in your cloned code.

<img width="1261" alt="Screen Shot 2022-03-11 at 8 51 22 PM" src="https://user-images.githubusercontent.com/10578605/157999158-10e921cc-9ee5-46f6-a0c5-1ae5686f54f3.png">

## Running

Use `yarn start` to launch only frontend on localhost:3000

Use `yarn netlify dev` to launch on Netlify localhost:8888

This mode is needed for [Stripe (Payment platform)](https://stripe.com/) because of using environment variables

## Hosting

The project is published on https://spontaneous-dragon-06d464.netlify.app/
