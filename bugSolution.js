```javascript
//Correct usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({"_id":ObjectId("650000000000000000000001")},{$inc:{count:10}},{upsert:true});
//The above code will increment the value of count by 10. If the field count doesn't exist it will create a new document with the field count.
```