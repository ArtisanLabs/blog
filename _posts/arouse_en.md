---
title: 'From RisePal to ArtisanLabs: Innovation in the Era of Consumer AI'
excerpt: 'We explore the journey from Risepal to ArtisanLabs and how innovation in the era of consumer AI is redefining technological development. From the creation of Arouse with advanced technologies to reflecting on the dependence on pre-packaged AI solutions, this article delves into the balance between efficiency and transparency in innovation.'
coverImage: '/assets/blog/arouse/arpagon__visualization_of_a_tech_journey_shown_as_a_path_basic__bd98d0df-3aad-4fd3-8153-9e1b8fde7e5d.png'
date: '2023-11-11T05:35:07.322Z'
author:
  name: Sebastian Rojo
  picture: '/assets/blog/authors/me_2023_ArtisanLabs_nologo_300dpi.png'
ogImage:
  url: '/assets/blog/arouse/arpagon__visualization_of_a_tech_journey_shown_as_a_path_basic__bd98d0df-3aad-4fd3-8153-9e1b8fde7e5d.png'
---
[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/arpagon.svg?style=social&label=Follow%20%40arpagon)](https://twitter.com/arpagon) 
[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/ArtisanLabsAI.svg?style=social&label=Follow%20%40ArtisanLabsAI)](https://twitter.com/ArtisanLabsAI)

## Introduction
At [ArtisanLabs](https://artisanlabs.io), our passion is to push the frontier of technological innovation. This adventure began with [Risepal](https://www.risepal.com/), a startup that I co-founded with the vision of empowering LATAm professionals in the US tech market. With the creation of [Arouse](https://arouse.risepal.com), an AI assistant, we sought to transform the way candidates interact and leverage opportunities in this dynamic sector. In January, as co-founder and CTO of [Risepal](https://www.risepal.com/), I used my experience in AI and Machine Learning to develop [Arouse](https://arouse.risepal.com/), an intelligent assistant that became the heart of our platform. Months of work and development culminated in a system that helped our users navigate and leverage our extensive knowledge base. However, the recent development of tools like [GPTs](https://openai.com/blog/introducing-gpts) and [Assistants API Beta](https://platform.openai.com/docs/assistants/overview/agents) from OpenAI has reshaped our perceptions about the creation, implementation, and future of technology in the era of consumer AI. This article is a journey through those learnings and reflections.

## Development of Arouse
<!-- Embedding a video in the blog post -->
<video width="640" height="480" controls>
  <source src="/assets/blog/arouse/arouse_ui.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
<p align="center"><small><a href="https://arouse.risepal.com/">arouse.risepal.com</a></small></p>


The development of [Arouse](https://arouse.risepal.com) integrated [AI engineering](https://www.latent.space/p/ai-engineer) and machine learning technologies, a process that took us approximately two months with a dedicated engineering team. We implemented the [RAG (Retrieval Augmented Generation)](https://arxiv.org/abs/2005.11401) system, at that time a novel methodology and still without an established name, which merged information retrieval models with generative models.

We used [Supabase](https://supabase.io) and [PgVector](https://github.com/ankane/pgvector) to manage vector embeddings, which allowed complex and customized semantic analysis in [Arouse](https://arouse.risepal.com). We also explored the use of [Langchain](https://langchain.dev/), still in its early stages, to better understand the potential of these systems.

The design and development of the frontend, using [Vue.js](https://vuejs.org/), presented unique challenges, especially when integrating these emerging technologies into an intuitive user interface. This project was not only a technical achievement, but also an adventure at the forefront of AI.


## The Shift with OpenAI Technology and its Walled Garden
![Walled Garden Diagram](/assets/blog/arouse/arpagon__Walled_Gardendiagram_outline_an_illustration_on_black__076ec9e3-8c68-40e4-a0e6-28cb74b59331.png)

### OpenAI DevDay
The [OpenAI DevDay](https://devday.openai.com/) introduced the [GPTs](https://openai.com/blog/introducing-gpts) and [Assistants API Beta](https://platform.openai.com/docs/assistants/overview/agents), marking a significant advancement in the accessibility and customization of AI. These tools offer efficient personalized solutions, allowing users to create versions of ChatGPT for various purposes.

### Technological Advancement vs. Previous Experience
The surprising reality we faced is that what took us months of intensive development at [Risepal](https://www.risepal.com/), such as the creation of our assistant [Arouse](https://arouse.risepal.com) using systems like RAG, we were able to replicate it in minutes with OpenAI's GPTs. This experience, where we integrated our extensive knowledge base into the process, not only filled us with awe, but also anxiety. It made us deeply reflect on the value of human work in the era of rapid technological progress.

### Problems and Dependence
In addition, the notion of the [walled garden](https://medium.com/@EricVogelpohl/openais-first-devdays-my-take-2416dee817be) emerges with these advances, where dependence on a single ecosystem and the opacity of these systems raise concerns about technological autonomy and transparency.

## Reflections and Dilemmas
![reflect](/assets/blog/arouse/arpagon__conceptual_image_illustrating_the_balance_between_tech_05b15754-560f-4706-bf3c-8cc93b875476.png)

### Balancing Innovation and Autonomy
We find ourselves at a critical point, where the efficiency provided by tools like OpenAI's GPTs must be balanced with the need for transparency and autonomy in innovation. The dependence on pre-packaged solutions and opaque systems raises questions about the control and understanding of the technology we employ.

### The Vision of [ArtisanLabs](artisanlabs.io): Navigating the Era of AI with Autonomy
At [ArtisanLabs](https://artisanlabs.io), we echo the words of [Paul Graham](https://twitter.com/paulg/status/1722545536480256079) about the importance of deep knowledge and a close relationship with users in the field of AI. This philosophy is our response to the challenges of dependence and opacity in the era of consumer AI. By focusing on critical and ethical understanding, and by developing a direct connection with our users, [ArtisanLabs](https://artisanlabs.io) seeks to build innovative and sustainable solutions that transcend dependence on third-party platforms like OpenAI.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Two ways for an AI company to protect itself from competition: (a) depend not just on AI but also deep domain knowledge about a particular field, (b) have a very close relationship with the end users.</p>&mdash; Paul Graham (@paulg) <a href="https://twitter.com/paulg/status/1722545536480256079?ref_src=twsrc%5Etfw">November 9, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

## Release of Risepal's Knowledge Base
We decided to release our accumulated knowledge in Risepal, integrating it with OpenAI's GPT technology. This action reflects our commitment to progress and the accessibility of information in the era of consumer AI.

[Arouse GPTs](https://chat.openai.com/g/g-WBHpMn1pN-risepal-arouse-career-ai)

[![Arouse GPTs](/assets/blog/arouse/arouse_GPTs_2023-11-10_11-26-52.png)](https://chat.openai.com/g/g-WBHpMn1pN-risepal-arouse-career-ai)