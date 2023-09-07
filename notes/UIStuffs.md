# Different UI libraries and resources


- A lot of these library's have 'UI-kits' that are made up of the design elements that were originally handed to developers from the design team and are available in formats for a lot of the free artistic tools like Adobe XD, Sketch and Figma if you wanted to play around with different menu layouts and what not. Figma in particular is really straight forward to use and it's completely free.


- Every website, not accounting for the server relies on three languages. HTML is like the skeleton and doesn't do much of anything except provide the content, CSS is the 'cascading style sheet' that makes everything look the way it does, and javascript is the decision maker that decides what happens when.  

- All these UI libraries do is set values for some of the 1500ish properties available in css in a way that's consistent throughout the entire UI. All that's required to override any of these properties is for us to just define what we want the property that they set to be ourselves. Something that's super useful when exploring other people's work that looks impressive is the dev panel. In just about any browser you can right click on any element and select 'inspect element'. That will open a panel that will show all the properties that are being applied to that element. You can even change the values and see how they're reflected immediately.


- [Material UI](https://mui.com/material-ui/getting-started/templates/) _(above)_
    - [Material Design Tools](https://m2.material.io/design/color/the-color-system.html#color-theme-creation)
    - Created by Google, so has a very youtube-android-gmail sort of look and feel, but is super well tested and has everything anyone would need.

- [Chakra UI](https://chakra-ui.com/docs/components)
    - Not organized by a major company like Google or Microsoft so it doesn't imply any specific platform, but it's super popular so a lot of people have likely seen projects built with it.

- [Bootstrap: The UI library OG](https://getbootstrap.com/docs/5.3/examples/)
    - This library's kind of like Justin Bieber in the sense that for a decade or more this was the first library that new developers learned to work with so it became unbelievably popular, and now because it was so popular for so long it's kind of trendy to hate on it. It's not supported by a major brand but it has a very 2010 blogger feel. You've definitely used things built with this.

- [Ant Design](https://ant.design/components/overview/)
    - Relatively newly popular. The library's similar in content to [Chakra](https://chakra-ui.com/docs/components). It's definitely more 'eloquent' than flashy, so it's used in a lot of places that want a more 'straight to business' vibe.

- [Antlassian](https://atlassian.design/components)
    - A really robust library that doesn't get used that often for whatever reason. It's really capable and thorough, but gives a very hospital website kind of feel.

- [Helios](https://helios.hashicorp.design/components)
    - Similar to [Chakra](https://chakra-ui.com/docs/components) but a little more expressive.

- [Fluent UI](https://developer.microsoft.com/en-us/fluentui#/get-started/web)
    - Built by Microsoft so it looks great but makes everything feel like Microsoft Word.

- [Semantic UI](https://react.semantic-ui.com)
    - Similar to [Chakra](https://chakra-ui.com/docs/components) in some ways. A fairly popular library that get's used quite often for projects that are complex enough to move onto something more sophisticated than [Bootstrap](https://getbootstrap.com/docs/5.3/examples/).

- [Grommet.io](https://v2.grommet.io)
    - Netflix and Samsung didn't build this library, but they contribute to it. It doesn't feel exactly like Netflix or the menu on your Samsung washing machine, but you can definitely see similarities. This has all or most of the components from the libraries above, but also adds some data visualization stuff under the same UI theme. The components this library focuses on seem to be more aligned with the user oriented dashboard type of app that might be applicable to us, instead of the majority that are purely for presentation of information or the super business-y board room type of dashboard.

- [Evergreen](https://evergreen.segment.com/components)
    - A similar feel to Chakra and Semantic.

- [Rebass](https://rebassjs.org/getting-started)
    - Not really sure where this one fits in, but thought I'd throw it in here because it is relatively popular.

- [Mantine](https://ui.mantine.dev/#main)
    - I've heard this one mentioned a fair amount of times but I've never actually looked into it. Doesn't seem the types of components they provide are anything unique or out of the norm, but has a solid overall feel.

- [Next UI](https://nextui.org/docs/components/avatar)
    - Next.js is actually the server side framework I use to wrap the React part of pretty much everything I've built in the last 5 years. React is the client side bundling framework that breaks websites into many small pieces, and Next.js is actually a server side library to more easily handle certain tasks to boost the load times and overall performance of regular React. Why they're building a UI framework is beyond me. It's pretty minimal, but it doesn't look bad.

- [Prime React](https://primereact.org/installation/)
    - This is one I've never used, but this might be the most impressive one on this list. Why it's not more popular I have no idea, but it's super robust, well designed and the platform has some really awesome tools. Check out this ['visual editor'](https://designer.primereact.org/#/) they call it, where you can select some color themes from different libraries and experiment with the UI of this library, without writing any code.

- [Gestalt](https://gestalt.pinterest.systems/web/overview)
    - Created by the people at Pinterest, so feels very much like that platform.


# Mobile specific

- [Konsta UI](https://konstaui.com/): Mobile Specific tailwind based components with a native like feel.


# More specific stuff that might come in useful under specific circumstances

- [VisX](https://airbnb.io/visx/gallery?pkg=drag)
    - This is probably the least relevant, but might be useful in places where we're trying to give the sophisticated, _'this is a smart move'_ type of vibe. It's built by AirBnB so it has a very familiar feeling, but it's focused almost entirely on data visualization and dashboard types of apps. This might be useful when showing potential sellers trends or information in a way that's meant to convince them the sale is safe and reliable, or when investors are reviewing their account activity or trends related to items for sale.

- [Shadow gallery](https://getcssscan.com/css-box-shadow-examples)
    - A collection of box-shadow values that can give a component a sense of elevation or even concavity.

- [Checkbox gallery](https://getcssscan.com/css-checkboxes-examples?ref=beautifulboxshadow-bottom)
    - Same as above, but for checkboxes. Some of these are legitimately impressive.

- [Button Gallery](https://getcssscan.com/css-buttons-examples?ref=beautifulboxshadow-bottom)
    - For the sake of completeness, the same thing as above applied to buttons. Checkboxes can get quite boring and that gallery does offer some interesting examples, but button's are probably best left to the designers of the library since they'll be used so frequently and appear everywhere.

- [React toastify](https://fkhadra.github.io/react-toastify/introduction/)
    - A library for toasts (small notifications that aren't worth an entire modal). The site offer's a demo with the ability to set different properties without needing to write any code.


# Royalty free assets

- [Pexels](https://www.pexels.com)
    - A _ton_ of searchable, super high quality images without royalties attached.

- [Google Fonts](https://fonts.google.com)
    - A huge collection of fonts available via a CDN. CDN's allow to link to them so that the user will receive the critical information first while the font's surprisingly large file is still being loaded instead of shipping them all in one massive pile which would noticeably slow the initial loading time. 
    - When looking through fonts, be aware of the 'variable' status. Variable fonts mean that we can set several different 'weights' which define the boldness of the font. Most regular paragraph font is 400, and most title's are 700 but of course that varies. Unless you like a font only for a specific case, like might be the case on the landing hero section (the section initially visible before scrolling), we'd really need at least 400, and either 700 or 800, and ideally 200-300 as well.

- [React Icons](https://react-icons.github.io/react-icons/)
    - This isn't a single library or designer's set of icons, but a collection of a dozen or so different sets of icons mapped from regular html to the more modern React syntax that I use. It's a simple process to move regular html over to react's `.jsx` syntax, but this library offer's quite a bit of options in one place.


# Designer stuff and inspiration

- [Awwwards](https://www.awwwards.com)
    - A platform ran by designers that grants, you know... _awwwwards_ to different production level web sites. This might be a good place to look for something on the landing page to really draw people's attention in, and rely on a library for handling things with consistency throughout the rest of the app.




# Functionality Tools

## Rich Text Editing

- [React-quill](https://github.com/zenoamaro/react-quill)
    - The most impressive rich text editor I've seen.

## JSX Media Queries

- [React-Responsive](https://github.com/yocontra/react-responsive)
    - A super clean and easy to use inline and/or hook based implementation of media queries directly in `.jsx` files.
    - Includes a wrapper component to make life easy and only render components if a media query meets validation.

## Color Pickers

- [React-Colorful](https://github.com/omgovich/react-colorful)
    - A simple but very popular React color picker.

- [React-Color](http://casesandberg.github.io/react-color/)
    - An even-more-simple color picker for React apps. 
    - Offers more flexibility than [React-Colorful](https://github.com/omgovich/react-colorful) but still ugly out of the box.

## Menus

- [React-Contextify](https://fkhadra.github.io/react-contexify/)
    - A simple, but easy to implement contextually aware menu.
    - Has live themeing tools on [their website](https://fkhadra.github.io/react-contexify/theme-builder)
    - Easy to implement keyboard shortcuts with appropriate icon displayed inside context menus

## Markdown on the web
- [Remark: React Markdown](https://remarkjs.github.io/react-markdown/)
    - *_Definitely_ look into this.*
    - Not just a single module, but a pretty extensive ecosystem that could be used as a basis for parsing markdown before adding our own extensions. 


# Collections of tools and blog posts

- [A collection of tools](https://ant.design/docs/react/recommendation) recommended by Ant Design. This is a _great_ source with many, *many* tools that would be helpful for Uh Little Less Dumb.




