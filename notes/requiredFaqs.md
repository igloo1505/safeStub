# Required FAQs

These are some faqs that I'm already integrating into the code, the the links need to have something to find.

The general structure of a fAQ. We can add or change things, but the id field is required for the links to work. ? means they're not required, and string just means word, and the [] at the end means you can have as many as you want.


```{typescript}
type Faq = {
    title: string
    subtitle?: string
    keywords: string[]
    /// Optional
    // Keywords helps with the search requests. They don't necessarily need to be displayed.
    id: string 
    // This is required for jumping to a specific faq. Once you create one don't change it. No spaces or special characters either.
    body: string[]
    // The input I'll build will handle breaking things up into seperate paragraphs automatically. Don't worry about that bit.
    related?: Faq.id[]
    /// Optional
    /// The id's of other faqs you think might be of interest to people looking at this one. 
}
```


## Already integrated

- [ ] How to verify your account.
    - **id:** _howToVerify_
