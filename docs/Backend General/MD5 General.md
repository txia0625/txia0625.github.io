# General Discuss of MD5

## Intro
MD5 is a classic cryptographic algorithm. However, we don't use it to handle the password nowadays because there are many vulnerabilities.

## Vulnerabilities

### Brute Force Easily

MD5 algorithm is fast compare to other cryptographic algorithms. Back to when MD5 was invented, it takes a year to brute force one password. However, with the evolution of the computing power, it can only take a few days to brute force out the password. 

### MD5 cause hash collisions

MD5 has been proved that it cause hash collisions. It means when you have two different password, it still have chance to produce same hash. It helps hacker spend less time to figure out the password.

## Solutions of Vulnerabilities

### The longer, the safer.
Longer, more random password is always preferred so that the password is harder to guess by using brute force method. Why? Think about 5 characters password and 30 characters password which they have the same hash. It increases the guess range significantly and the hacker needs to brute force way more unnecessary trials.

### Use Salt
Implementing a salt is trendy when we handling the password. What is salt? Just like we season our food. Salt is used to season the original password entered by users. Those original password are very likely to be short, which means easy to guess. Add Salt is to append a fixed string before or after the original password(or could be both). Picking a good salt(complicated, random, long) is helpful to increase the complexity of the password because it implicitly increases the range of guessing. Finally, we use MD5 algorithm to convert the string to hash code and then save to the database.

For example, if the user enters the password **"xt0625"**. This is such a good example for bad password. It's just someone's Initials plus his/her birthday. It might be the very first trials for someone would like to hack the account. Another thing is worth to mention is, it's **short**. It's relatively fast to brute force it out.

With the salt implementation, if the salt is "random!@#" then we just append the salt prior to the entered password. Therefore, the password string becomes **"random!@#xt0625"**. We then feed it to the MD5 algorithm and save the output to the database. Can you feel the power?

## Useful Scenario
MD5 is not an appropriate cryptographic algorithm for password using. We have many other good password algorithms to consider like **bcrypt**.

However, it still can contribute to the development. Since it's fast to compute, we can use it to roughly check if two files are the same. Why we say it's roughly? Because of hash collisions. 

For example, if we build a file server based on UDP protocal. UDP protocal is fast but not reliable, how do we make sure the file is synced correctly? We can use MD5 algorithm to perform a **checksum** operation every data segment(data size depends on the system requirement). 

Also, checksum is also popular in distributed system. When we transfer files across replicas, it's useful to check if files have been well preserved. If not, we would transfer the proper file again to the replica server by comparing the timestamp or some other properties.

## Conclusion

I hope the post is useful to you. If there's any mistake feel free to reach out.

Happy Coding!

-Tong


