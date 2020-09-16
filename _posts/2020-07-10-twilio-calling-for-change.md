---
layout: post
title: Calling for Change
description: How to design advocacy campaigns that scale and win
category: blog
location: San Francisco, CA
map: /static/maps/svg/oakland.svg
image: /static/posts/twilio/twilio-logo.svg
---

The spring of 2020 has been a wake-up call.

Systemic racism and the unjust use of force against Black Americans entered public visibility again after several high-profile killings by police inspired national protests and calls for justice.

A renewed focus on distributed activism may bring meaningful change to advocacy. Leaders must rapidly evolve their campaigns to ensure knowledge and techniques are shared across the movement.

As a provider of open source technology for advocacy organizations, I have studied trends in campaign design and assembled a set of best practices from my experience and observation. This is not exhaustive, and those on the ground working in diverse communities hold the real expertise; not just those with specialized skills and access to large platforms.

### Methods of engagement

Technology has made it easy for anyone to get involved with advocacy campaigns.

Online organizing at scale depends on easy entries onto the “ladder of engagement:” signing a petition, sharing with friends, making a phone call to an elected official or a comment at a public meeting, and finally attending an in-person event or protest march. Each action can lead to the next higher bar.

Data-driven advocacy organizations structure their campaigns for analytics to ensure member actions are recorded, measured, and tested to improve over time. However, pursuing contact growth for its own sake may not lead to a more powerful political organization, and prioritizing email or phone number acquisition over actual impact can be seen as a “[vanity metric](https://journals.sagepub.com/doi/full/10.1177/2056305117750718).”

The easier it is to participate in a campaign, the more likely individual messages are lost in the crowd. Organizers must weigh the perceived difficulty of each action against its likelihood to make an impact.

For instance, many online petitions are delivered to political decision makers in bulk with the same message, meaning individual voices are not heard and the total number of signers is what counts.

Individual emails or calls can be more powerful, as it takes effort to write something personal, and even more to pick up the phone and call. While decision makers don’t read every email or listen to every voicemail, phones ringing off the hook and full inboxes can be [hard to ignore](https://www.nytimes.com/2016/11/22/us/politics/heres-why-you-should-call-not-email-your-legislators.html).

Technology can lower the barrier to action, increasing the number of people speaking up on a particular issue. But this may lead to a decreasing impact for the same number of actions, particularly for large national issues that are frequently a topic of political conversation.

### Campaign tradeoffs

#### National vs. local focus

Making a specific request to a decision maker who can act on it is central to the “[theory of change](https://diytoolkit.org/tools/theory-of-change/)” of effective advocacy campaigns. Local governments can often make more immediate changes, and may be more receptive to campaign demands than at the national level. Small offices may not be used to getting dozens of calls or emails in a day, and a sudden increase in constituent engagement can be “[enough to derail an entire [city] council session](https://twitter.com/coff33detective/status/1271463582312673281).”

When designing campaigns that include outreach to public officials, make sure people are contacting their own elected officials so their input is taken seriously as a constituent. Many tools can match callers by zip code to their state legislative or congressional district, or allow custom targeting for city council or other local boundaries. While some national groups encourage everyone to call Congressional leadership or committee chairs, I have heard from staff members that these calls may be discarded if they are not verified as coming from a voter in their representative’s district.

#### Short-term burst vs. long-term impact

It is also easy to overwhelm targets, particularly if an issue is timely and the audience is engaged. Many government office systems are not designed for high call volumes, and voicemail boxes can fill up or give callers busy signals. If possible, spread calls out to multiple offices or across several days so users have a good experience calling and the campaign’s impact is long-lasting. By segmenting a large contact list into smaller groups and making specific requests of each one, organizers can distribute the load and keep the pressure up over time. If you are trying to reach Congress, connecting with district offices may be more responsive than those in Washington, DC.

#### Templates vs. original messages

It is vitally important campaign actions are authentic, and not seen as spam or faked. This is one reason I prefer calls that are synchronous, requiring some time and effort to complete, and convey a person’s own voice. Some tools provide a suggested script, but in general an individual story is more impactful than a set of pre-written talking points. Recorded advice from an organizer can encourage activists to speak in their own words, while still remaining on topic and respectful. Most call tools provide a dial-in number local to the issue, and Twilio-connected dialers will ensure the caller ID that appears at the office is from each individual activist, not the central campaign.

#### Low barrier to participate vs. Driving long-term engagement

It is also worth weighing the need to capture data on each action against ease of entry. Some advocacy tools require a user to join a list with their email address, with the possibility of continued contact later on, and others do not.

Some of the most viral campaigns today do not have a signup requirement, which means they can grow quickly and users may be more likely to act without feeling like they are signing up for yet another email list. Examples like [defund12.org](https://defund12.org/) and [justiceforbigfloyd.com](https://www.justiceforbigfloyd.com/make-calls) ask users to take action immediately, without joining first. However, organizers may not have a way to engage these users again in the future without gathering contact information or metrics to prove that their efforts made an impact. Consider the campaign’s theory of change and impact metrics when designing user experiences and deciding between short and long term strategies.

### Examples to break through the noise

At OpenSourceActivism.tech, I built a call tool that has powered campaigns to connect millions of calls over the last five years. Two campaigns stand out with novel tactics and high volume to get their issue noticed.

Working with the [Battle for the Net](https://www.battleforthenet.com/) coalition, including Fight for the Future, Demand Progress and FreePress, activists made almost two million calls to Congress, the FCC and the White House from 2014 to 2018. Activists could call their own representative by entering their zip code, and sign up for daily or weekly calls to keep the pressure up. The combination of targeting local officials and continued reinforcement helped make this campaign successful. Extensive media coverage, driven in part by this surge in activism, brought widespread public attention and scrutiny to an issue that otherwise might have passed by undetected. While the FCC ultimately overturned net neutrality rules in 2018, the issue remains top of mind thanks to the ongoing efforts of campaigns like the Battle for the Net.

More recently, ActionPAC used [CallPower](https://www.opensourceactivism.tech/tools/callpower/) to connect hundreds of thousands of callers to local police departments, district attorneys, mayors, and governors for their campaigns against police violence. Their campaigns Justice for Big Floyd, Run with Ahmaud, and Stand with Bre have all channeled national outrage towards specific actionable goals of terminating the officers involved, investigating persistent misconduct, and defunding police departments armed with military equipment. These campaigns were set up with existing tools like CallPower, ActionKit, and Squarespace, and by reacting quickly have been successful at harnessing activist energy and media attention. They connected activists nationwide with local decision makers, encouraged people to speak in their own words without following a script, and had a low barrier to participate, which enabled significant sharing and list-growth.

### Moving forward

In tumultuous political times, there is no shortage of worthy causes for organizers to advocate for change. The most effective organizers focus their efforts with a sound theory of change that demands timely and specific action from officials who have the power to influence policy. Communications technology can help advocacy campaigns scale to reach more people, and this can sometimes lead to greater impact and lasting change.

Hundreds of thousands of people have now had the experience of contacting their local officials to defund their police department, or joining a march or protest to support the Black Lives Matter movement. I’m hopeful this may mark a sea-change in American politics, where more people work to dismantle systemic racism and participate in our democracy with sustained activism.

- originally posted on the [Twilio hub](https://www.twilio.com/hub/change-how-design-advocacy-campaigns-scale-and-win)
