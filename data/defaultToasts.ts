import { ToastError } from "#/classes/ErrorHandling";
import { ToastErrorTypes } from "#/types/AuthTypes";


export const defaultToastConfigs: { [k in ToastErrorTypes]: Omit<ToastError, "toastId"> } = {
    unauthenticated: {
        variant: "error",
        content: "You must be logged to do that.",
        title: "Unauthenticated"
    },
    tokenExpired: {
        variant: "error",
        content: "Please try logging in again.",
        title: "Session Expired"
    },
    mustBeVerified: {
        variant: "info",
        content: "Please verify your account before continuing.",
        title: "Please Verify"
    },
    faqNotFound: {
        variant: "warn",
        content: "That question was not found",
        title: "Not Found"
    },
    emailExists: {
        variant: "warn",
        content: "That email appears to already be in use.",
        title: "Account exists"
    },
    userNotFound: {
        variant: "warn",
        content: "A user with those credentials was not found.",
        title: "User not found"
    },
    credentialsInvalid: {
        variant: "warn",
        content: "Those credentials appear to be invalid. Click if you'd like to reset your password.",
        title: "Invalid Credentials",
        clickRedirect: "/resetPassword"
    },
    passwordsDontMatch: {
        variant: "info",
        content: "Please confirm your password. They don't match.",
        title: "Password Mismatch",
    },
    unauthorized: {
        variant: "error",
        content: "You do not have permission to do that.",
        title: "Unauthorized",
    },
}
