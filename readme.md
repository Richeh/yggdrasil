# Yggdrasil

an idiotically titled family tree application

## Description

    This is an MIT licensed app to store and display your family tree.  I'm using this to learn Express, so initially a lot of this may be... bad.

## Installation / running

    * Git clone
    * install dependencies with "npm install"
    * rename or copy .env.example to .env and configure as desired
    * run with "node index.js"
    * access with browser on localhost/3001 (If running locally using default port)

## Concept

    * A tree has a list of people.  
    * Each person has a birth date and a death date - both can be optional to allow for living people and incomplete data.
    * Each person has parents, represented by a parental link to another person.  
    * A parental link can be biological (born to / concieved by) and / or civic (adopted by / raised by).  
    * There is no need to limit the number of parental connections.  Families are complicated.
    * Sibling connections can be inferred.
    * More complex data can be stored on a lookup table with an enum "type" - this might need to be rethought depending on performance, but allows flex for now.

## Project limiting parameters (stuff I promise not to care about)

    * This is envisioned as a privately-hosted project; therefore, it is only expected to run with at most hundreds of subjects.  If SQLITE can cope with that, then I don't see much reason to move past it.
    * User management is likely to be simplistic; all users will have access to all data.

## Goals beyond MVP (stuff I might care about in future)

    * extendable data saved on each subject - whether that's text or photographs
    * location tracking - follow the area of residence of ancestors throughout history

## Creating migrations:
npx sequelize-cli migration:generate --name remove-unique-from-forenames

Thanks to GitHub Copilot AI Assistant for the help.