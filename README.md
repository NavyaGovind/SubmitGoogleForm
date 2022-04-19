# SGF - SUBMIT GOOGLE FORM

## INTRODUCTION: What does SGF do?
This thing I call SGF is used to automatically submit a google form at a specific time.

## HOW TO USE IT?

I used Google App Scripts to run this. I'm not sure if there's a way to submit the form without using scripts but do try and let me know if there's a way. All you really have to do is run the main function BUT before that, you need to initialise some variables in the `Variables.gs` file.

### Step 1: Pre filled google form link
- First, you get the link to fill in the form. Here's an example - https://docs.google.com/forms/d/e/1FAIpQLSejzmFmE8b2CidvukmZ6Y4ZjMxnkesZlZ6LX6rKr1XsJGRHIg/viewform?usp=sf_link
- You go to the link and inspect it (Right click -> `Inspect (Q)` at least on Firefox)  
- Search for `entry` in the search bar like shown below

![image](https://user-images.githubusercontent.com/76686946/164062352-fdc29dac-41c9-418f-a3e3-e6f05ffdb8bf.png)
- Each entry is connected to a field you have fill or choose in the form. I only had one field in my test form but you can find an example with multiple fields below. After obtaining the entry ID, append this to your original url without the `usp=sf_link`. Here is also where you'll also append your response in the url. In our example, the url would be https://docs.google.com/forms/d/e/1FAIpQLSejzmFmE8b2CidvukmZ6Y4ZjMxnkesZlZ6LX6rKr1XsJGRHIg/viewform?entry.768086295=Hello and Hello is what we're inputting in the field.
- You'll also have to change `viewForm` in the url to `formResponse`. For our example - https://docs.google.com/forms/d/e/1FAIpQLSejzmFmE8b2CidvukmZ6Y4ZjMxnkesZlZ6LX6rKr1XsJGRHIg/formResponse?entry.768086295=Hello
- And there's your pre-filled url. 

- As promised, here's an example with multiple fields - 

![image](https://user-images.githubusercontent.com/76686946/164063637-c393ddb6-caf2-4012-a880-2d73a8078b77.png)
- Follow the same steps as above but when appending the entry IDs and reponses to the url, add a '&' between them. Here's a random example (not connected to the image) - https://docs.google.com/forms/d/e/1FAIpQLSejzmFmE8b2CidvukmZ6Y4ZjMxnkesZlZ6LX6rKr1XsJGRHIg/viewform?entry.768086295=Hello&entry.123456=Fruit

- Also, the examples above only dealt with textual responses in the google form but you might have to pick some options in the form. In those cases, you simply follow a similar procedure as above. Instead of writing your response (as `entry.ID=response`), you'd write `entry.ID=Option+1&entry.ID2=Option+1`. Another random example - https://docs.google.com/forms/d/e/1FAIpQLSfhMfnx00m1A_n5RysUgVklqqD_wNFX4cWFsGcbgutKPfkNbQ/viewform?usp=pp_url&entry.806606999=ewewewew&entry.1239433641=eqwe&entry.2086571612=Option+1&entry.1691435913=Option+1&entry.903059671=Option+1

Once you have your pre filled url, replace it in the `Variables.gs` file (preFilledURL). Additionally, make sure to provide a response for all the required fields. As of right now, there is no way to know if your form was successfully submitted or not. This is something that I'm currently working on.

### Step 2: Timezone
Find your timezone from the following list - http://worldtimeapi.org/api/timezone/. Some examples of timezones include - "Europe/Amsterdam", "Asia/Dubai". Once you have your timezone, replace it in the `Variables.gs` file (timeZone)
 
### Step 3: Setting max values
`maxLoopTime` is how often you'll receive an update about the current time and the time your google form will be submitted at. By default, it is set to 30 seconds.   
`maxTotalLoopTime` is how long you'd like to run the script. By default, it is set to  5 minutes.

You are free to modify both these values in the `Variables.gs` file.

### Step 4: Choose input method
There are two ways to specify when you'd like to submit the form. 

- The first one is of numerical type. This is where you'd input classic numbers like `pi` and `e` (these constants can also be found in the `Variables.gs` file)
- The second one is in ISO 8601 date and time format. 

If you're wondering how to format date and time in ISO 8601 format, 

![image](https://user-images.githubusercontent.com/76686946/164068591-b496ce16-7f94-43a1-aa9d-2ab6b82e75f0.png)

This information is also present in the `Variables.gs` file.

If you'd like to go with the first way, set dtInNumber to 1 and dateNum to the date in numerical form.  
If you'd like to go with the second way, set dtInNumber to 0 and dateStr to the date in ISO 8601 form.

### Step 5: Run the main function (Main.gs)

![image](https://user-images.githubusercontent.com/76686946/164066100-5bd58edd-1104-4251-b46f-24e1754403aa.png)

## INSPIRATION: Why make this?
The professors of a course(Computing Science: Ethical and Professional Issues) had a Pi day challenge. This involved submitting a filled google form at pi time. I must admit that I wrote this software after the challenge was over. I woke up at 3 AM to copy my answers and submit it at the precise time by looking at the clock on the second tab. Later, when the professor asked if I wrote some cool script to submit it, I realised that I initially should've done that. And I did just that... :)  

## FEEDBACK/ QUESTIONS:
Can you think of a way to make this better (you probably can) or do you have questions regarding any aspects of SGF?  
Feel free to drop me an email gnavya.2712@gmail.com
