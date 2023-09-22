import { defineDocumentType, makeSource } from 'contentlayer/source-files'

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
    contentDirPath: contentRoot, documentTypes: [
        PrivacyPolicy,
        Tos,
        HelpTopic
    ]
})
