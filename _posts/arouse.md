---
title: 'De RisePal a ArtisanLabs: Innovación en la Era de la IA de Consumo'
excerpt: 'Exploramos el viaje de Risepal a ArtisanLabs y cómo la innovación en la era de la IA de consumo está redefiniendo el desarrollo tecnológico. Desde la creación de Arouse con tecnologías avanzadas hasta la reflexión sobre la dependencia de soluciones de IA pre-empaquetadas, este artículo profundiza en el equilibrio entre eficiencia y transparencia en la innovación.'
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

## Introducción
En [ArtisanLabs](https://artisanlabs.io), nuestra pasión es impulsar la frontera de la innovación tecnológica. Esta aventura comenzó con [Risepal](https://www.risepal.com/), una startup que co-fundé con la visión de empoderar a profesionales en el mercado tech de EE.UU. Con la creación de [Arouse](https://arouse.risepal.com), un asistente de IA, buscamos transformar la forma en que los candidatos interactúan y aprovechan las oportunidades en este sector dinámico. En enero, como co-fundador y CTO de [Risepal](https://www.risepal.com/), utilicé mi experiencia en IA y Machine Learning para desarrollar [Arouse](https://arouse.risepal.com/), un asistente inteligente que se convirtió en el corazón de nuestra plataforma. Meses de trabajo y desarrollo culminaron en un sistema que ayudaba a nuestros usuarios a navegar y aprovechar nuestra extensa base de conocimiento. Sin embargo, el reciente desarrollo de herramientas como [GPTs](https://openai.com/blog/introducing-gpts) y [Assistants API Beta](https://platform.openai.com/docs/assistants/overview/agents) de OpenAI ha reformulado nuestras percepciones sobre la creación, implementación y el futuro de la tecnología en la era de la IA de consumo. Este artículo es un viaje por esos aprendizajes y reflexiones.

## Desarrollo de Arouse
<!-- Embedding a video in the blog post -->
<video width="640" height="480" controls>
  <source src="/assets/blog/arouse/arouse_ui.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
<p align="center"><small><a href="https://arouse.risepal.com/">arouse.risepal.com</a></small></p>


El desarrollo de [Arouse](https://arouse.risepal.com) integró tecnologías de [ingenieria de AI](https://www.latent.space/p/ai-engineer) y aprendizaje automático, un proceso que nos llevó aproximadamente dos meses con un dedicado equipo de ingeniería. Implementamos el sistema [RAG (Retrieval Augmented Generation)](https://arxiv.org/abs/2005.11401), en ese entonces una metodología novedosa y aún sin un nombre establecido, que fusionaba modelos de recuperación de información con modelos generativos.

Utilizamos [Supabase](https://supabase.io) y [PgVector](https://github.com/ankane/pgvector) para gestionar embeddings de vectores, lo que permitió análisis semánticos complejos y personalizados en [Arouse](https://arouse.risepal.com). También exploramos el uso de [Langchain](https://langchain.dev/), aún en sus etapas iniciales, para entender mejor el potencial de estos sistemas.

El diseño y desarrollo del frontend, utilizando [Vue.js](https://vuejs.org/), presentó desafíos únicos, especialmente al integrar estas tecnologías emergentes en una interfaz de usuario intuitiva. Este proyecto no solo fue un logro técnico, sino también una aventura en la vanguardia de la IA.


## El Cambio con la Tecnología de OpenAI

### OpenAI DevDay
El [DevDay de OpenAI](https://devday.openai.com/) presentó los [GPTs](https://openai.com/blog/introducing-gpts) y [Assistants API Beta](https://platform.openai.com/docs/assistants/overview/agents), marcando un avance significativo en la accesibilidad y personalización de la IA. Estas herramientas ofrecen soluciones personalizadas eficientes, permitiendo a los usuarios crear versiones de ChatGPT para diversos propósitos.

### Avance Tecnológico vs. Experiencia Previa
La realidad sorprendente que enfrentamos es que lo que nos llevó meses de desarrollo intensivo en [Risepal](https://www.risepal.com/), como la creación de nuestro asistente [Arouse](https://arouse.risepal.com) utilizando sistemas como RAG, pudimos replicarlo en minutos con los GPTs de OpenAI. Esta experiencia, donde integramos nuestra extensa base de conocimiento en el proceso, no solo nos llenó de asombro, sino también de ansiedad. Nos hizo reflexionar profundamente sobre el valor del trabajo humano en la era del rápido progreso tecnológico.

### Problemas y Dependencia: El Jardin Amurallado
![Walled Garden Diagram](/assets/blog/arouse/arpagon__Walled_Gardendiagram_outline_an_illustration_on_black__076ec9e3-8c68-40e4-a0e6-28cb74b59331.png)
Además, emerge la noción del "jardín amurallado" con estos avances, donde la dependencia en un ecosistema único y la opacidad de estos sistemas plantean preocupaciones sobre la autonomía tecnológica y la transparencia.

## Reflexiones y Dilemas

### Equilibrando Innovación y Autonomía
Nos encontramos en un punto crítico, donde la eficiencia proporcionada por herramientas como los GPTs de OpenAI debe equilibrarse con la necesidad de transparencia y autonomía en la innovación. La dependencia de soluciones pre-empaquetadas y sistemas opacos plantea interrogantes sobre el control y comprensión de la tecnología que empleamos.

### La Visión de [ArtisanLabs](artisanlabs.io): Navegando en la Era de la IA con Autonomía
En [ArtisanLabs](https://artisanlabs.io), nos hacemos eco de las palabras de [Paul Graham](https://twitter.com/paulg/status/1722545536480256079) sobre la importancia del conocimiento profundo y una relación cercana con los usuarios en el ámbito de la IA. Esta filosofía es nuestra respuesta a los desafíos de dependencia y opacidad en la era de la IA de consumo. Al enfocarnos en una comprensión crítica y ética, y al desarrollar una conexión directa con nuestros usuarios, [ArtisanLabs](https://artisanlabs.io) busca construir soluciones innovadoras y sostenibles que trasciendan la dependencia de plataformas de terceros como OpenAI.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Two ways for an AI company to protect itself from competition: (a) depend not just on AI but also deep domain knowledge about a particular field, (b) have a very close relationship with the end users.</p>&mdash; Paul Graham (@paulg) <a href="https://twitter.com/paulg/status/1722545536480256079?ref_src=twsrc%5Etfw">November 9, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

## Liberación del Knowledge Base de Risepal
Decidimos liberar nuestro conocimiento acumulado en Risepal, integrándolo con la tecnología GPTs de OpenAI. Esta acción refleja nuestro compromiso con el progreso y la accesibilidad de la información en la era de la IA de consumo.

[Arouse GPTs](https://chat.openai.com/g/g-WBHpMn1pN-risepal-arouse-career-ai)

[![Arouse GPTs](/assets/blog/arouse/arouse_GPTs_2023-11-10_11-26-52.png)](https://chat.openai.com/g/g-WBHpMn1pN-risepal-arouse-career-ai)







