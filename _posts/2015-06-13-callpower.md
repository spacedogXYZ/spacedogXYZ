---
layout: mission
title: CallPower
description: Open source tool to connect people to power with their phones, built with the sponsorship of the Electronic Frontier Foundation
category: mission
location: San Francisco, California
date_month_only: true
map: /static/maps/svg/oakland.svg
image: /static/posts/callpower/logo-square.jpg
client_link: <a href="https://eff.org"><img src="/static/clients/eff.png" alt="Electronic Frontier Foundation"></a>
top_script:  <link rel="stylesheet" href="/css/slides.css" />
end_script: |
    <script src="/js/jquery.slides.js"></script>
    <script>
    $(function(){
      $("#slides").slidesjs({
        navigation: {
            active: false,
        },
        width: 1048,
        height: 800
      });
    });
    </script>
---

### Context ###

Starting in January, we began working with [Demand Progress](http://demandprogress.org) on a series of "microsites" that enabled their members to easily call Congress to defend Net Neutrality. The project that enabled this was developed by the [Internet Taskforce](https://taskforce.is) in 2014 as an open source tool using the Twilio API. The code works well and powered over 100,000 calls, but it required a highly technical user to create new campaigns and alter targets. After building a half-dozen individual sites for different campaigns, I approached several different organizations about combining efforts and developing a user-friendly interface.

### Engagement ###

The Electronic Frontier Foundation generously funded all of the development, offering its own experience as a user of the tool to beta test new code, and to share the final results back to the community as open source. Over several months we designed a simpler interface, powerful new features, and an easy way to deploy the code. At Netroots in July, I presented the work to progressive organizations and technologists, to general excitement and helpful feedback.

### Results ###

The CallPower is designed to be easy to use: just record your message in the browser, choose your targets, and add a short snippet of code to your action form. When your members fill it out, they'll get an immediate call back playing your message, and then connecting them to the target. It has phone numbers for Congressional offices and state representatives built in, and you can add custom numbers for local, corporate or international campaigns.

You can try a demo at [CallPower.org](http://callpower.org), we will provide a hosted version for a reasonable monthly fee, and the code can be downloaded from [GitHub](https://github.com/spacedogXYZ/call-power).

<div id="slides">
    <img src="/static/posts/callpower/screenshots/1-dashboard.png">
    <img src="/static/posts/callpower/screenshots/2-create.png">
    <img src="/static/posts/callpower/screenshots/3-1-audio.png">
    <img src="/static/posts/callpower/screenshots/3-2-record.png">
    <img src="/static/posts/callpower/screenshots/3-3-playback.png">
    <img src="/static/posts/callpower/screenshots/3-4-versions.png">
    <img src="/static/posts/callpower/screenshots/4-launch.png">

    <a href="#" class="slidesjs-previous slidesjs-navigation">&larr; Previous</a>
    <a href="#" class="slidesjs-next slidesjs-navigation">Next &rarr;</a>
</div>