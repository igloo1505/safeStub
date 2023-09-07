mkdir -p $HOME/.config/legit
touch $HOME/.config/legit/commands.txt
mv $LEGITROOT/notes/forget.md $HOME/.config/legit/iforget.md
builtin command cat $LEGITROOT/notes/cmds.txt > $HOME/.config/legit/commands.txt
builtin command cat $LEGITROOT/notes/dostuff.txt >> $HOME/.zshrc
