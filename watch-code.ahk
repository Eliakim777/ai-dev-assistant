#Persistent

SetTimer, WatchFile, 1000
last := ""

WatchFile:
FileRead, content, autohotkey-input.txt
if (content != last and content != "") {
    last := content
    FileAppend, `n--- Running Code ---`n%content%`n, *
    FileDelete, temp.ahk
    FileAppend, %content%, temp.ahk
    Run, temp.ahk
}
return
