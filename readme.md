# Yggdrasil

an idiotically titled family tree application

## Description

    This is an MIT licensed app to store and display your family tree.  I'm using this to learn Express, so initially a lot of this may be... bad.

## Installation / running

    * Git clone
    * npm install
    * configure using settings currently in index.js (TODO: move this.)
    * node index.js
    * access on localhost/3000 (If running locally using default port)

## Concept

    * A tree has a list of people.  
    * Each person has a birth date and a death date - both can be optional to allow for living people and incomplete data.
    * Each person has parents, represented by a parental link to another person.  
    * A parental link can be biological (born to / concieved by) and / or civic (adopted by / raised by).  
    * There is no need to limit the number of parental connections.  Families are complicated.
    * Sibling connections can be inferred.
    * More complex data can be stored on a lookup table with an enum "type" - this might need to be rethought depending on performance, but allows flex for now.
