---
layout: mission
title: Refugee Hackathon
description: Helping refugees one line of code at a time
category: mission
location: Berlin, Germany
map: /static/maps/svg/berlin.svg
image: /static/posts/refugeehackathon/heart.png
client_link: <a href="http://refugeehackathon.de"><img src="/static/posts/refugeehackathon/heart.png" alt="Refugee Hackathon"></a>
---

Millions of people from Syria, Iraq, Libya, Afghanistan, Yemen, and countries across central and western Africa are fleeing violence, poverty and privation, becoming refugees not out of choice but necessity. The scale of this crisis has forced Europe to confront both its role in seemingly distant conflicts and its own historical memories. Stories and images of people crossing vast distances against severe odds to reach safety and a better life compel us to respond with our shared humanity. As governments and international bodies fail their charges, organizations and individuals are moved to act in any way they can.

[RefugeeHackathon.de](http://refugeehackathon.de) is one response to the crisis by German technologists, designers and humanitarians, organized by [Anke Domscheit-Berg](http://ankedomscheitberg.de) of the Pirate Party. We learned of the project only a few weeks ago, but felt that our experience and skills could be useful. [Ruth](http://ruthmiller.net) volunteered her skills as a facilitator and designer, and I offered my experience from other international hackathons and working in the Middle East. We bought plane tickets from California to Berlin, and prepared to assist in any way we could.

<div class="thumb inline third right">
<a href="https://www.flickr.com/photos/jlevinger/22238979089/"><img src="https://farm1.staticflickr.com/781/22238979089_ec0f735452_m_d.jpg" alt="#refugeehackathon sign"></a>
</div>

### Day 1 - Listening and Learning

We arrived tired from the flight but ready to dive in. Participants gathered at the [Haus der Demokratie und Menschenrechte](http://hausderdemokratie.de/artikel/welcome.php4) to hear from refugees and volunteers about the obstacles they are facing, the changes they would like to see, and to generate possible solutions. From the beginning there was the acknowledgement that technology cannot fix bad policies, that we should avoid recreating duplicate platforms, and to be aware of reinforcing existing hierarchies and power structures.

<div class="thumb inline third right">
<a href="https://www.flickr.com/photos/jlevinger/22399779056/"><img src="https://farm1.staticflickr.com/778/22399779056_f8c873322c_m_d.jpg" alt="Anke Opening Circle"></a>
</div>

Most of the 70 participants were German, with a half-dozen young men from Cameroon and a few from Syria and Afghanistan. The *lingua franca* was English, which was immensely helpful to me as I don't speak German, but unhelpful to the Cameroonians who don't either. I was able to summon what remains of my high-school level French, and while it was difficult to think and translate simultaneously, it was important to hear their stories and convey empathy, even if I could not always converse in detail.

One young man told my small group about his journey from Cameroon to Niger, across the Sahara and the dangerous Moroccan border where several of his friends were killed, finally making it to Spain and eventually Germany. When someone asked him "why Germany", he told us he had heard it was a country that respects human rights. We are doing our best to prove that true.

Because of the precarious position of many of the participants, we needed to be sensitive to their need for privacy and anonymity. People could put red dots on their name tags if they did not wish to be photographed, a common practice in security-conscious [facilitation](https://aspirationtech.org). However this message was not well conveyed to the French speakers. When a reporter asked a group I was listening to and translating for if he could take some photographs, I tried to make clear that this was voluntary, and each person should do it only if they wanted. I did not clearly see the power dynamic at play until the shoot began, with the dark-skinned refugees used as props in a courtyard under a clouded sky. They were probably great photographs, and I wished I had thought to stage them myself, but I had restrained my documentary impulses to listen.

<div class="thumb inline third right">
<a href="https://www.flickr.com/photos/jlevinger/22425772855/"><img src="https://farm1.staticflickr.com/605/22425772855_e32ca767f5_m_d.jpg" alt="No Photos Sign"></a>
</div>

When one of the participants asked where the photos might be published, I said *un magasin en Allemagne* and he was surprised and slightly unhappy. As we discussed his concerns about potential retaliation, I recognized my role in the situation and asked the journalist to delete the photographs, which he did with some dismay. A lesson for future events: reiterate to all attendees their rights to privacy, establish a policy of informed consent to publication, and ensure that the "no photos" signal is visible and respected. Press coverage should be ancillary to the in-person work.

After a full day of talking with refugees and volunteers about their experiences, our groups split up to brainstorm solutions. These ideas will be the inputs for designers and coders tomorrow, and it is important that they are rooted in real user needs. Our small group focused on integrating existing information with popular distribution methods. We decided that a multi-channel messaging system is needed to connect refugees to volunteers who can answer basic questions over WhatsApp or SMS, backed by a database with links to existing resources. We later learned that this is similar in concept to [Wefugee.org](http://www.wefugee.org), and [RefugeeHelper](http://refugeehelper.net). I do think that the ability to ask questions via text message is important, and I hope to convince more developers of the utility of building tools for mobiles first, instead of necessarily apps or new websites.

<div class="thumb inline third right">
<a href="https://www.flickr.com/photos/jlevinger/22412561922/"><img src="https://farm6.staticflickr.com/5815/22412561922_168354af3e_m_d.jpg" alt=""></a>
</div>

The full group ended up with more than twenty posters laying out various problems and potential solutions. Of course many had overlaps and not all will necessarily be built, but getting participants to start with problems instead of solutions provided a good basis to ensure the hackathon results in useful tools beyond this weekend.

<div class="thumb two-third center">
<a href="https://www.flickr.com/photos/jlevinger/22239361370/"><img src="https://farm1.staticflickr.com/716/22239361370_082e9109c5_m_d.jpg"></a>
</div>

<br/>

### Day 2 - Pitching and Prototyping

After a night of jetlagged sleep, we returned to the hackathon to hear project pitches and get to work. The crowd was unfortunately signifcantly less diverse than the first day, with very few refugees or women present. The common language also switched to German, which was helpful for some technical conversations but required real-time translators for the few English-only speakers remaining. After trying to translate in French yesterday, I was even more impressed with the difficulty of the job and grateful for the help.

<div class="thumb inline third right">
<a href="https://www.flickr.com/photos/jlevinger/22251742449/"><img src="https://farm1.staticflickr.com/715/22251742449_16450254c6_m_d.jpg"></a>
</div>

Serendipitiously we met my old friend and colleague [Chris CsikszentmihalyI](http://edgyproduct.tumblr.com) who is also in town for the [UnCommons](http://berlinergazette.de/deutsch/uncommons/) conference, and he discussed an idea to build upon the [RootIO](https://spacedog.xyz/mission/rootio) project for the refugee context, and add lightweight audio messaging threads like IRC. Ruth and I focused our efforts on the [LaGeSoNum](http://refugeehackathon.de/en/projekte/lagesonum/) project, which provides a helpful user experience layer to the  waiting board at the State Office of Social Welfare. Currently the board displays numbers for refugees waiting to register themselves for social services, but wait times exceed two weeks and the cryptic numbers are only displayed in the courtyard at a single building. The LaGeSoNum project aims to provide a web interface with mobile notifications so that people do not have to wait in long lines all day.

<div class="thumb inline third right">
<a href="/static/posts/refugeehackathon/lageso-display.jpg"><img src="/static/posts/refugeehackathon/lageso-display-sm.jpg"></a>
</div>

The project currently has a working beta written in the bottle microframework, and has a distributed team of developers from [Coders4Help](http://www.meetup.com/coders4help/) and a German [software company](http://www.minglabs.com) dedicated a user interface designer to the hackathon.

I helped transition the codebase from Bottle.py to Django 1.8, and after helping debug several python path errors, suggested we write a Dockerfile so that all the remote developers can have the same environment. Ruth helped lead threat-modeling and requirements discussions, and worked on a mobile interface for a new site design. It was a fun challenge integrating with a new team, getting everyone on the same page technically, and becoming productive together.

<div class="thumb inline third right">
<a href="https://www.flickr.com/photos/jlevinger/22250577550/"><img src="https://farm6.staticflickr.com/5646/22250577550_dc9c081b01_m_d.jpg"></a>
</div>

### Day 3 - Coding and Presenting

Our team met at 10am a little smaller after a late night, but firmly committed to our code goals for the weekend. In little more than 24 hours, we finished the code transition, integrated a responsive redesign, and prototyped user notifications via email, SMS, and Telegram. It was a testament to the friendliness of the group, the strength of the idea, and the power of Club Mate that we continued to hack right through meals and after the deadline.

<div class="thumb inline third right">
<a href="https://www.flickr.com/photos/jlevinger/21844317074/"><img src="https://farm6.staticflickr.com/5698/21844317074_6f1924eceb_m_d.jpg" alt="Working Hard"></a>
</div>

Ruth and Peter gave our progress presentation to the large group, and Felix did an interview that may have ended up on the nightly news. In all, we made significant progress against acheivable goals, with hopefully immediate impact on the refugees waiting for weeks at LaGeSo.

