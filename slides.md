---
theme: apple-basic
titleTemplate: '%s - Thilo Maier'
layout: intro
title: Introduction
---

# StackBlitz — the missing REPL for SvelteKit

Welcome back April Svelte meetup

<div class="absolute bottom-10">
  <p class="font-700">05 April 2022</p>
  <p>Thilo Maier, <a href="https://twitter.com/maiertech"><logos-twitter /> @maiertech</a></p>
</div>

<!--
In this talk I would like to show you a new way to run a SvelteKit app in a browser
- to quickly share an example or
- to tinker with SvelteKit.

The team at StackBlitz has implemented a technology called WebContainers that makes this possible, but more on this later.

But let me first introduce myself.
-->

---
layout: two-cols
---

# About me

- I am an Information Systems Officer at an international organization in NYC.
- I tinker with Svelte and SvelteKit in my spare time.
- I am not affiliated with StackBlitz.

::right::

<div v-click>
  <h2>Why Svelte?</h2>
  <p>Rich Harris planting the seed of doubt:</p>
   <Tweet id="1166499024624672768" scale=0.65 />
</div>

<!--
A few more facts about me:
- I used to code with full-stack enterprise technologies: Java, Groovy, Servlets and JSP.
- My front-end journey: JavaScript → jQuery → React → Gatsby → Next.js → SvelteKit.
-->

---
layout: iframe-right
url: https://svelte.dev/repl/4a6395d726754200b84a458f630afdfa?version=3.46.4
title: Why a REPL?
---

# What is the Svelte REPL?

<div class="h-360px">
  <Tweet id="1498485785070387208" scale="0.65" />
</div>

<!--
- REPL = Read-eval-print loop.
- Svelte REPL uses the [Svelte template](https://github.com/sveltejs/template).
- Runs client-side (the Svelte template is a web app). 
- Supports [https://unpkg.com/](https://unpkg.com/).
-->

---
layout: image
image: /search-results.png
title: Svelte REPL in search results
---

#

<!--
- When you make Svelte-specific searches, REPL examples are often among the first results.
- Think of the Svelte REPL as a communication tool for the Svelte community.
- It would be handy if we had something similar to share SvelteKit examples.
-->

---
layout: section
title: A REPL for SvelteKit?
---

# Is there something similar for SvelteKit?
  
---
layout: two-cols
title: WebContainers
---

# StackBlitz WebContainers

- This was launched in November 2021.
- WebContainers run Node.js client-side in a browser.
- **SvelteKit runs client-side in a browser 🤯.**

::right::

<div class="ml-10">
  <Tweet id="1461800074581889034" scale=0.7 />
</div>

<!--
Running Node.js client-side in a browser is not just like running bundled JavaScript in a browser.
-->

---
title: StackBlitz demo
---

# StackBlitz SvelteKit demo

https://stackblitz.com/github/maiertech/sveltekit-example-route-matching?file=src/routes/index.svelte

<img src="/stackblitz-sveltekit-demo.png" class="h-xs">

StackBlitz shortcuts: [sveltekit.new](https://sveltekit.new), [node.new/sveltekit
](https://node.new/sveltekit)

<!--
Show two things:

1. StackBlitz dashboard: https://stackblitz.com/.
2. Route matching example: https://stackblitz.com/github/maiertech/sveltekit-example-route-matching?file=src/routes/index.svelte.

Point out:

- The URL pattern with which you can launch (compatible) projects from a GitHub repository. 
- Read-only mode and forking a StackBlitz project.
-->

---

# What are WebContainers?

- WebAssembly is a compilation target for languages such as C++ and Rust that makes it possible to run code in a browser at near native speed (https://developer.mozilla.org/en-US/docs/WebAssembly).

- StackBlitz managed to run Node.js natively in (Chromium-based) browsers using Web Assembly.

- WebContainers promise:
  - Faster than local dev environment.
  - Node.js debugging in-browser.
  - Execution inside the browser's security sandbox.

- WebContainers blur the line between web apps and native apps.

<!--
Blurring the line between web apps and native apps = tectonic shift:
- Many more types of applications can run in browsers.
- Local dev environments can be moved to browsers.

Shortcomings:
- Not yet ready to replace a local dev environment, especially GitHub support is lacking.
- Chromium-based browsers work fine, support for other browsers is in the works.
- Embedding StackBlitz projects in websites is a little challenging.
-->

---
layout: two-cols
---

# Links

- [Web Containers, StackBlitz, and Node.js in the Browser with Tomek Sulkowski (Syntax FM #404)](https://syntax.fm/show/404/web-containers-stackblitz-and-node-js-in-the-browser-with-tomek-sulkowski)
- [Introducing WebContainers: Run Node.js natively in your browser (StackBlitz blog)](https://blog.stackblitz.com/posts/introducing-webcontainers/)
- [SvelteKit is now fully supported in WebContainers (StackBlitz blog)](https://blog.stackblitz.com/posts/sveltekit-supported-in-webcontainers/)
- [Turbo package manager (StackBlitz docs)](https://developer.stackblitz.com/docs/platform/turbo)

[<logos-twitter /> @maiertech](https://twitter.com/maiertech)

::right::

# Slides

<div class="flex flex-col items-start gap-4 mt-5">
  <img src="/qr-code.png" class="bg-white p-4 max-h-40" />
  <a href="https://welcome-back-april-svelte-meetup.maier.tech/">https://welcome-back-april-svelte-meetup.maier.tech/</a>
</div>
