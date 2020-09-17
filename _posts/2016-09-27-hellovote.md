---
layout: mission
title: HelloVote
description: Register to vote in 10 texts or less
date_string: Election 2016
category: mission
location: Worcester, Mass
map: /static/maps/svg/worcester.svg
image: /static/clients/hellovote.png
image_class: rect
client_link: <a href="https://www.hello.vote"><img src="/static/clients/hellovote.png" alt="Hello.Vote"></a>
---

### Context ###

[Fight for the Future](https://www.fightforthefuture.org) is a non-profit dedicated to expanding the internet's transformative power for good. They are skilled digital campaigners who helped lead the net neutrality fight, and orchestrated a [Vote with Friends](http://www.votewithfriends.net) campaign in 2012 to connect Facebook users to get out the vote in important states. They have significant in-house technical and product expertise, and we were thrilled to be able to work with them on an exciting new project.

### Engagement ###

With our experience building new voter interfaces with [RockTheVote](/mission/rockthevote/), the [Libyan High Elections Commission](/mission/libyan-elections/), and [Vote.org](/mission/vote-org/), we have built expertise in innovating the voter registration experience. With Fight for the Future we have built a super easy interactive voter registration system that works entirely over text platforms like SMS and Facebook Messenger.

HelloVote asks a series of straightforward questions like your address, date of birth and state ID number, checks to verify your existing registration, and generates a form for you. We are able to integrate with eight states directly, ensuring that users in Arizona, California, Colorado, Georgia, Illinois, Massachusetts, and Virgina are registered to vote instantly. In all other states, we send users a filled-out form to sign and mail to their local election official, and even include a stamp.

<div class="inline two-third center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/mvcoJCzhGx4" frameborder="0" allowfullscreen></iframe>
</div>

### Results ###

We launched in the week before National Voter Registration Day to great press and a lot of social media excitement. HelloVote was covered in [Business Insider](http://www.businessinsider.com/register-to-vote-via-text-facebook-hellovote-2016-9), [Bustle](http://www.bustle.com/articles/185688-how-to-register-to-vote-on-facebook-using-hellovote-the-answer-to-the-busy-millennials-prayers), [CNET](https://www.cnet.com/news/hellovote-voter-registration-texting-facebook-messenger-donald-trump-hillary-clinton-election/), [CNN Money](http://money.cnn.com/2016/09/22/technology/hellovote-text-to-vote/), [FastCompany](https://www.fastcompany.com/3063969/mind-and-machine/this-chatbot-will-register-you-to-vote-by-text-so-now-you-have-no-excuse), [Glamour](http://www.glamour.com/story/register-to-vote-with-a-text-message), [Recode](http://www.recode.net/2016/9/22/13020980/chatbot-voter-registration-text), [Seventeen](http://www.seventeen.com/life/tech-social-media/news/a42975/no-more-excuses-you-can-now-register-to-vote-through-test-message/) and [VentureBeat](http://venturebeat.com/2016/09/22/backed-by-anti-trump-twilio-this-bot-wants-to-register-voters/). We were also tweeted in the same day by Ellen Degeneres, Bernie Sanders, Mindy Kaling, and internet impresarios Xeni Jardin and Anil Dash. MTV also featured our shortcode [384-387](sms://384387) on a one-day resurrection of TRL, redubbed [Total Registrations Live](http://electthis.com/trl), which included appearances by Kendall Jenner, Joss Whedon, Common, Ty Dolla $ign, and Nico Tortorello.

Other celebrities engaged in a bit of a friendly competition spearheaded by Chris Sacca, and included Kristen Bell, Sophia Bush, Grace Helbig, Aasif Mandvi, OK Go, Pearl Jam, Edward Norton, and Hunter Walk. Partner organizations included Bazta Arpaio, Common Cause, Credo, DailyKos, Headcount, Million Voters Project, NextGen, OneArizona, SEIU CA, SURJ, Upworthy, and others. We also helped companies register their employees and visitors, including Genius, Lenny Letter, Private Internet Access, Salesforce, the Shaderoom, Twilio, Walker and Co, and Wordpress.

By Election Day we had over *[160,000 users](https://hello.vote/stats)*. We sent personalized and actionable reminder messages to get out the vote, including calendar invitations, local weather forecasts, polling place reminders and directions, and an easy to use issue reporting tool that integrated with ProPublica's [ElectionLand](https://projects.propublica.org/electionland/). We also answered hundreds of individual questions sent to team@hello.vote, and assisted users with finding legal advice when necessary via the Election Protection hotline.

We sent over 4.5 million messages across all our channels, and saw 2,312 #iVoted selfies posted to our Twitter [wall of fame](https://twitter.com/hellovote_bot). User engagement with HelloVote was incredible, and the team's experience building compelling products with a real-world impact was invaluable.

### Technology ###

The system is built with Node.js and Python, uses Twilio to send SMS messages and Facebook notifications, and is hosted on Heroku. It will be open sourced after the election, pending a legal review.

If you want to build something like HelloVote that guides users through a complex civic action with engaging and friendly messages, [get in touch!](/blastoff) Spacedog stands at the ready to help fight our next challenges.
