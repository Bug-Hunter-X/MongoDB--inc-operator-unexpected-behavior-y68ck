# MongoDB $inc Operator Unexpected Behavior
This repository demonstrates an uncommon error related to the `$inc` operator in MongoDB update operations.  The issue arises when attempting to increment a field that doesn't yet exist in a document.  The standard `$inc` operation will fail silently in this scenario.  The solution showcases the correct usage of `$inc` with the `upsert` option to handle this situation gracefully.

## Bug Description
The provided `bug.js` file showcases incorrect usage of `$inc`.  When a document lacks the target field, the update will not modify the document instead of creating the field and setting the value. 

## Solution
The `bugSolution.js` file provides the corrected code, utilizing the `upsert: true` option in `updateOne`.  This ensures that if the document doesn't exist, it is created, and the field is incremented as intended.

## How to reproduce
1. Clone this repository.
2. Ensure MongoDB is installed and running.
3. Run the script `bug.js` and `bugSolution.js` to observe the differing behaviors.