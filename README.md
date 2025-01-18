Date: 18th of January, 2025

Project Title: Multi step form

This README file is a personal note to self to record the things I learnt, found challenging, and problems I am yet to solve so I can revisit in future for reference purposes.

Things this file will touch: Role of AI in programming, building like an architect, the beauty of JavaScript Functions, I need to learn SASS.

1. Building like an Architect:

I really enjoyed this project because of how challenging it was. The project was complex because it is a form that has more than one page, so if you're not careful your codes will conflict each other if you don't pay attention to details and build like an architect. You need to really know what you're doing and write code with intention.

Despite being small-scale, the project gave me a glimpse of what to expect when I want to build a website or something larger with multiple pages; it forced me to create functions that can be used multiple times, pay attention to how I name elements, use objects, and so on.

A useful trick I learnt is how to use functions to do mundane tasks that will normally require me to repeat writing code for each page. For example, some tasks that required me to repeat code were things like updating the page indicator circle, and the go back and next buttons to navigate the form.

For my first attempt, I wrote codes to execute these functions in every logic, then my file became bloated and confusing which led to frustation. After taking a break, I realized these codes executing the same task have a lot in common, and that the only difference was the names of the DOM elements the code is acting on.

This led me to write a function with generic parameter names that will then be subsititued with the elements I want the function to act on. This helped me reduce the number of code I had to write, and made my file more organized.

<img src="Snapshots/reusable functions.png">

Despite how comfortable this approach is, I don't think it is ideal for every situation it can be used in. For example, when writing code to navigate the form like the go back button and next page button, the code was still a little bit complex to write. It required adding and deleting several buttons to get it working right.

I think this is because I am trying to accomplish this with vanilla JavaScript. Activating navigation buttons shouldn't be this complex so I am guessing this is one of the things frameworks will make easy.

2. Role of AI in Programming:

AI helped in this project, but not to the extent that I will be scared of losing my job to AI. Working with AI on this project just reinforce my belief that AI is a tool to LEARN how to become a better programmer because it possess everything knowable about every programming language and topic. More than what any human can possess.

The noisy on social media about losing jobs to AI is just social media frenzy. I believe as long as we can't/haven't programmed these AIs to think, then programming will still be a job dominated by humans.

My primary use of AI in programming is to debug code. Something that convinced me that AI is not a human substitute but a tool was when I had trouble getting my code to function as I wanted. Then I sent the whole code to AI to tell me what is wrong and it failed. It could only point out some things I could do better but not solve the actual problem.

After taking a break and analyzing the code myself using FireFox dev console tool, I realized the bug was a simple cascading issue that required putting one code beneath another. There are instances where AI could have solved this, but most times, such errors will most likely be solved (or can be solved) by a thinking human, and not an AI that is programmed to just regurgitate the "rules and best practices of writing code".

I think what deceives people into believing AI will replace humans is the complexity of AIs like ChatGPT. The ability of these bots to blur the line between not knowing if you are talking to a machine or human is what deceives people.

Programmers should start being scared of AI when we get to AGI. For now we are safe.

3. I need to learn SASS:

I think I have reached the peak of using vanilla CSS. The projects I will be taking on after this one will be more difficult and complex than this so SASS will be really important. Despite how small-scale this was, getting it done with vanilla CSS was quite stressful so I believe SASS is the next best tech to add to my arsenal.

Snapshots:

<img src="Snapshots/Desktop snapshots/Page 1.png">

<img src="Snapshots/Desktop snapshots/Error message.png">

<img src="Snapshots/Desktop snapshots/Page 2.png">

<img src="Snapshots/Desktop snapshots/Page 3.png">

<img src="Snapshots/Desktop snapshots/Page 4.png">

<img src="Snapshots/Mobile snapshot/Multi-step-form-snaps(Mobile).png">