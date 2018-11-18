# apiReference
A small firebase-cloudstore application.

Firebase. Yes, I had heard about it a lot. Firebase actually has a lot of cool things inside it from ML to Analytics and storage and what not. There are a lot of nice services. Although I don't know how much they are charging at this moment. This was my first date with it.

<b>Firebase Cloudstore</b>

So this is what I picked up.

I wanted to build a very small API reference document.

Sure I could have made it via a normal HTML page too. But I wanted to see what the big deal was with Firebase. 

So in short Cloudstore is a NoSql database which is super fast.

A NoSql database or a document database is a database which has no structure or as they call it semi-structured database. How it differs from Mysql or relational databases is that, while in Mysql you have to have the same no.of columns in every row, you don't have any such constraints over here.

So it's really cool. But since there were no validations at all, it was kind of bad too. As I was adding new fields everytime by mistake and in the end it was a mess.


Ok so what you need to do is this. Whatever I am writing down is the bare minimum.

<b>Setting up the database</b>

1. Open firebase console.
2. Create an account over there.
3. Go to Databases section.
4. Create a database. There will be two options - private and public. This is basically of restricting the outside world from writing or reading from your 
databases directly. Wasn't much of a concern for me as I had none.

<b>Accessing via JavaScript</b>

1. Go to project overview on your left hand side.
2. Click on the </> icon. 
3. You will be shown a script to be added to your code.
4. Then go to this place. This section has all the: how to read and write stuff.https://firebase.google.com/docs/firestore/quickstart

<b>Hosting</b>

1. Once that is done you want to host your application so that the world can see it.
2. Click on Hosting on the left panel.
3. You will find a couple of npm commands over there.
4. Run them from your OS command line.
5. Incase you get an error during <i>firebase deploy</i>, add this --project <project-id> with it. 
6. Your project-id is visible under Project Overview section on the left hand side near the gear icon.


Once all is done you can see your small and beautiful site at <project>.firebase.com


Happy Firebasing! :P