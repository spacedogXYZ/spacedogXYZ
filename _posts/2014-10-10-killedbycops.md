---
layout: mission
title: KilledByCops
description: Data visualization of the crisis of police violence in America, telling individual stories on a nationwide map
category: mission
location: Oakland, CA
date_month_only: true
map: /static/maps/svg/oakland.svg
image: /static/posts/killedbycops/logo-square.png
client_link: <a href="http://colorofchange.org">ColorOfChange.org</a>
---

### Context ###

While individual stories of police violence are well known, and victim's names are burned in our societal memory like a mantra (*Rodney King, Amadou Diallo, Oscar Grant, Michael Brown*), the overall scale of the problem is hard to imagine.

Despite a Justice Department with an active civil rights division, there is no consistent Federal data available to calculate the number of Americans killed by the police each year. [Media](http://gawker.com/what-ive-learned-from-two-years-collecting-data-on-poli-1625472836) [tallies](https://www.facebook.com/KilledByPolice) range from dozens per year to thousands, tracking data in spreadsheets and facebook pages. Meanwhile the number of Black americans killed nearly matches the rate of Jim Crow era lynchings. This is a crisis of epidemic proportions.

### Engagement ###

We worked with ColorOfChange to identify reliable crowdsourced reports from [FatalEncounters.org](http://fatalencounters.org/), scrub it of typos, load it into a database and provide a programming interface. We wrote a [custom Twitter application](https://github.com/spacedogXYZ/killedbycops) to post one name per hour as a digital memorial, uploading images with names, ages, responsible agency and the geotagged location. The account gained thousands of followers and hundreds of thousands of retweets, spreading the _#killedbycops_ hashtag and the message that this epidemic of police violence must end.

Building on the initial success of the twitter feed, we designed an interactive infographic to show the national scale of the problem visually. We created initial wireframes and prototype implementations to validate the idea, and worked with their principle designer to polish the look-and-feel. Using the [D3.js](http://d3js.org) framework developed at the New York Times, we produced a fluid and usable visualization that encourages users to zoom in to their home area to explore local data and stories. Highlighted stories are told with an embedded Storify feed, can users can demand action from the Department of Justice with an email petition.

### Outcome ###

The [@KilledByCops](https://twitter.com/killedbycops) twitter feed received mentions from major media personalities (Russell Simmons, Good Magazine, Vox, Katrina vanden Heuvel, and many others). The finished map earned coverage in [USA Today](http://www.usatoday.com/story/news/nation/2014/12/19/map-deaths-law-enforcement/20660565/), received tens of thousands of hits and member actions, and was soon followed by news that the DoJ will improve data collection requirements for the "use of force" by local departments. While this is not a solution to the violence inflicted on communities by militarized police, it is perhaps the beginning of understanding the full scope of the problem.

<div class="inline center"><a href="http://killedbycops.org/"><img src="/static/posts/killedbycops/map-share.png"></a></div>