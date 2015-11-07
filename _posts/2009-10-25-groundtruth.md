---
layout: mission
title: GroundTruth
description: Field research on the occupation in Israel and Palestine
category: mission
location: Ramallah, PS
map: /static/maps/svg/israel-palestine.svg
image: /static/posts/medialab/gt-settlements.png
client_link: <a href="http://civic.mit.edu/"><img src="/static/posts/medialab/civic-logo-bg.png" alt="MIT Center for Civic Media"></a>

---

### Context ###

Over the summer of 2009, I spent three weeks in Ramallah and Jerusalem, conducting interviews and meeting with representatives from [B’Tselem](http://www.btselem.org/English/), [Souktel](http://www.souktel.org/), [Ma’an News Agency](http://www.maannews.net/eng/Default.aspx), [The Center for Peace and Economic Cooperation](http://www.centerpeace.org/), [Birthright Unplugged](http://www.birthrightunplugged.org/), [Waze](http://www.waze.co.il/), a conscientious objector, and various activists. I gave a talk to the [Decolonizing Architecture](http://www.decolonizing.ps/) collective in Bethlehem, and gathered critical feedback on my research direction. I assisted with the [Voices Beyond Walls](http://www.voicesbeyondwalls.org/) youth video project, and learned how children too are affected by the Occupation.

### Engagement ###

I rode the bus from Ramallah to Jerusalem nearly every day, subject to the same dehumanizing experience at the Qalandia checkpoint as the Palestinian population, and learned more about the non-technical coping mechanisms that already exist. 

My ideas for technical interventions, a checkpoint wait-time tracker, had less utility to people in their daily use than I initally thought. The status of checkpoints can be relatively easily ascertained by asking taxi drivers, or by calling people who pass through them daily. The prior existence of this literal social network, and the understandable reluctance of users to submit information that might be misused, could severely limit the utility of a mobile checkpoint reporting tool.

Other tools I had considered, a transit map and bus tracker, also have functional non-technical systems already in place. While as a tourist, I don’t know the detailed routes of the service taxi network, the men who congregate at the bus stations all do and will tell you where to go even without much Arabic language skill. As there isn’t a defined schedule, buses simply depart when full, a full transit tracker isn’t entirely applicable. Aside from tourists, of whom there are very few, this system would duplicate the already present network, with little added functionality.

I heard again and again from Israelis that the reality of the occupation isn’t widely known by the populace, either due to a lack of information, or more likely, the pervasive dehumanization of the other side. On my return, I decided to do something with all the data and stories I had collected, and try to show the truth on the ground.

### Results ###

I built GroundTruth.Media.MIT.edu, a testbed for mapping the footprints of Israeli occupation of Palestinian territory. It provides data on the checkpoints, the path of the separation wall and the extent and growth of settlements, graciously given by B'Tselem and Peace Now. It allows point-to-point directions with routes taking movement restrictions into account, a search by settlement name and age, and the information on the construction status of the barrier. It used Django and PostGIS to hold the geographic data, pgrouting to provide directions, and OpenLayers to display the map.

The site is no longer online, but the ideas continue in Americans for Peace Now [Facts on the Ground](http://archive.peacenow.org/map.php) Map.