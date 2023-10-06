import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
const contentRoot = "./data/content"
export const PrivacyPolicy = defineDocumentType(() => ({
    name: 'PrivacyPolicy',
    filePathPattern: `privacyPolicy.md`,
    fields: {
        title: { type: 'string', required: false },
        lastUpdated: { type: 'date', required: false },
    },
    computedFields: {
        // url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
    },
}))


export const Tos = defineDocumentType(() => ({
    name: 'TermsOfService',
    filePathPattern: `termsOfService.md`,
    fields: {
        title: { type: 'string', required: false },
        lastUpdated: { type: 'date', required: false },
    },
    computedFields: {
        // url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
    },
}))

export const RefundPolicy = defineDocumentType(() => ({
    name: 'RefundPolicy',
    filePathPattern: `refundPolicy.md`,
    fields: {
        title: { type: 'string', required: false },
        lastUpdated: { type: 'date', required: false },
    },
    computedFields: {
        // url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
    },
}))


// TODO: Once local markdown is working, send all relevant markdown files to a separate repo to hopefully prevent future conflicts as the rest of the app comes closer to alpha.
export const BlogPost = defineDocumentType(() => ({
    name: 'BlogPost',
    filePathPattern: `blog/*.md`,
    fields: {
        title: { type: 'string', required: true },
        subTitle: { type: 'string', required: false },
        category: { type: 'string', required: true },
        tags: {
            type: "list",
            of: {
                type: "string"
            },
            required: false
        },
        created: { type: 'date', required: false },
    },
    computedFields: {
        url: { type: 'string', resolve: (post) => `/blog/${post._raw.flattenedPath}` },
    },
}))

export const HelpTopic = defineDocumentType(() => ({
    name: 'Help',
    filePathPattern: `help/*.md`,
    fields: {
        title: { type: 'string', required: true },
        subTitle: { type: 'string', required: false },
        category: { type: 'string', required: true },
        tags: {
            type: "list",
            of: {
                type: "string"
            },
            required: false
        },
        created: { type: 'date', required: false },
    },
    computedFields: {
        // url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
    },
}))

export default makeSource({
    contentDirPath: contentRoot,
    documentTypes: [
        PrivacyPolicy,
        Tos,
        HelpTopic,
        RefundPolicy,
        BlogPost
    ],
    markdown: {
        remarkPlugins: [remarkGfm]
    },
    mdx: {
        remarkPlugins: [remarkGfm]
    }
})
