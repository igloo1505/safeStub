# Aliases

## Pager Commands

> A pager is what open's terminal output that is longer then the height of the screen. These command are actually pretty common, so you'll likely use them elsewhere.

**up:** k
**down:** j
**right:** l (not relevant for a pager)
**left:** h (not relevant for a pager)
**1/3 page down:** d
**1/3 page up:** u
**jump to top:** g
**jump to bottom:** G
**exit:** q (For most other apps, it's Control-c)

---

## Environment Stuffs

- **installTools**: Install the tools used for these commands. Should only be ran once and can be removed from the .zshrc file if you want afterwards.
- **code**: An alias similar to the default command 'open', except instead of opening with the default program it will always open with VsCode. This is **super** useful for uncommon filetypes.
- **setSource**: 'Sources' the terminals configuration file, inserting any content that was updated into the current session. This saves you the hassle of endlessly restarting the terminal app.
- **editZsh**: Open's the .zshrc file that this is being placed in in vs-code.
- **cat**: The builtin command 'cat' was aliased to 'bat', a tool that does exactly what cat does but with syntax highlighting. If at any point in the future you need the raw text from something using cat, use 'catp' instead which is no aliased to the original 'cat'. Although it's not displayed, bat actually inserts values around text to highlight them and for apps outside of the terminal those will be interpreted as regular text.

## Legit Specific

- **cdLegit**: An alias for the builtin command cd, but automatically changes directoy into the ticket_chaser root.
- **Legit**: Changes directory into the ticket_chaser root, pull's the content from github, installs whatever is missing on your own computer and then runs the development server. You can then open the localhost url in any browser locally.
- **LegitDB**: Change's directory to the ticket_chaser root and starts a pretty awesome database exploration server. Similarly to other local servers, just open the url shown in the terminal in any browser, and you can explore the data in the form that it is stored.
- **editLegit**: Open's the ticket_chaser directory in vs-code to make viewing and changing things a lot less of a pain in the ass.
- **pushNotes**: Add's the notes folder inside of ticket_chaser to git, commit's that to be changed, and then pushes those changes to github. There might be two reason's why this wouldn't work on the first try:
  1. Something has changed in this folder on github since you've last cloned the app with the Legit alias. If the error mentions something about the remote having content that you're missing locally, just run the same command again but add --force to the end of it.
  2. You've changed things locally that weren't committed, and git's afraid those changes will be lost if you push or pull from git before committing those changes. This type of error is actually more likely to occur when using the Legit alias, but if this is the case the two options are to either reset or to commit your local changes to github. For now, as long as those change's aren't something you want to save for later, use the legitReset alias to reset your local folder to exactly what's on github. If you make changes to content, color schemes, or anything not inside of the note's folder that you want to be saved, let me know and I'll create something where we can track two seperate branches to make sure these change's don't affect the main branch.

## Filetype Specific stuff

> These will all require a path as an argument.

- **markdown**: The alias markdown now render's markdown in the terminal using a tool called **glow**. This tool is installed by the installTools alias, and is pretty useful for quickly glancing at notes and references. That is actually what is displaying this, assuming you didn't run it as Browser.
- **markdownBrowser**: This renders markdown in the browser using github's default styling.
- **json**: This alias open's json files in a super useful format using a tool called jless. JSON is an absolute nightmare trying to read in it's minimized form, but this make's it super easy to explore.
- **vd**: This opens a file with a tool called 'visidata'. This is useful for any sort of 'tabular' data (csv, tsv, excel, sql, etc...)
- **csv**: This alias opens a csv file using a tool called xsv with the option of 'table'. xsv has a ton of useful feature's for working with csv data, but this simply renders the condent in a really useful, readable format.

## Utilities

- **speedtest**: This is actually not an alias, but the default command for a tool installed by the installTools alias. Just super useful for testing network speed and determining if an issue is caused by the app or the actual network connection.
- weather: Does exactly what it sounds like. Just an interesting script to try to convince you to learn Python.

## Basic Commands

**cd**: Change Directory. Usually you'll use this with a path as an argument, but using it with no argument will change you the to \$HOME directory.
**pwd**: Print working directory. This just tells you where the terminal is currently.
**cat**: Just prints the contents of a file to the terminal output. (Usually called standard-out)
**touch**: A really random name for the command that creates a new file. Of course this needs a path as an argument.
**mkdir**: Just like touch, except creates a directory instead of a file.

## The Path pattern

**_._** represents your current location. This is the same thing as inserting the output of pwd in the place of ..
**_.._** represents the folder one level above. If you are in the ticket_chaser directory, this would be the desktop. These can be strung together like:

> ../../.zshrc

The above command would only work for any directory two levels down from your \$HOME directory where the .zshrc file is stored. Another way to accomplish the same thing from anywhere is use the builtin environment variable \$HOME or the builtin alias for \$HOME ~ as:

> \$HOME/.zshrc or ~/.zshrc

**Also, \$HOME is not the actual variable. HOME is the variable, and the dollar sign is how they are used in the terminal.**

This means that for any command that requires a path as an argument, you can use the relative path using the pattern above, or the the absolute path of the file or directory you're trying to reference. If you're in the root of the ticket_chaser directory, and trying to reference something in the notes folder (cat in the examples) you can do this by any of these. These are all equivalent:

cd ./notes && cat todo.md
or
cat ./notes/todo.md
or
cat $HOME/Desktop/ticket_chaser/notes/todo.md
or
cat ~/Desktop/ticket_chaser/notes/todo.md
or
cat /Users/someUsernameHere/Desktop/ticket_chaser/notes/todo.md

Or if you're trying to create a csv file in the directory you're already in, just touch someFile.csv

## Getting help

--help: Pretty much every command, whether it's builtin or installed by a tool will have a --help flag. This is the best starting place to find the types of arguments you can supply to a command to change what it does.

> **Example:** xsv --help
> --version: This just displays the version of a package. Usually this is just used to make sure it exists, but when things become more advanced it's useful to make sure the versions don't conflict with anything else.
> **Example:** brew --version
> which: This is a builtin command to find the location of something you're running. This is super useful to make sure you're actually running what you're intending to run when things get more complicated.
> **Example:** which brew
> man: This is a builtin command to find the manual entry for a specific command. Not all tools will have one, but the more complicated or robust packages will. This will open the manual page in a pager similar to this. The manual entry is a much more verbose output that's similar to --help > **Example:** man brew
> help(): This only applies to python repls. Python has a builtin help() function that returns the documentation for any command or class.
> **Example:** help(bokah)

**Also, many of these tools are designed to work on a dark terminal, so you might want to change the settings in your terminal app.**
