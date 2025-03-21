#!name=backup
#!desc=backup
#!icon=https://github.com/Toperlock/Quantumult/raw/main/icon/Doraemon/Doraemon-1028.png

[Script]
# 备份
cron "55 23 * * *" script-path=https://raw.githubusercontent.com/JasonLiu523/loon/refs/heads/main/BoxJS/backup.js, timeout=120, tag=BoxJS gist备份

# 恢复
cron "55 23 * * *" script-path=https://raw.githubusercontent.com/JasonLiu523/loon/refs/heads/main/BoxJS/restore.js, timeout=120, tag=BoxJS gist恢复
