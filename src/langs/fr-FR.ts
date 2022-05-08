/* eslint-disable max-len, @typescript-eslint/naming-convention */
import stripIndent from "strip-indent";
import pluralize from "plur";
import { IAboutCommandData } from "../typings";

export const lang = {
    // Language Metadata
    META_ID: () => "en-US",

    // Commands

    // About Command
    COMMAND_ABOUT_META_DESCRIPTION: () => "Envoi les infos du bot",
    COMMAND_ABOUT_EMBED_AUTHOR: (username: string) => `${username} - Just a simple music bot.`,
    COMMAND_ABOUT_EMBED_DESCRIPTION: (data: IAboutCommandData) => stripIndent(`
    \`\`\`asciidoc
    Nombre de channels      :: ${data.stats.channelCount}
    Nombre de serveurs      :: ${data.stats.guildsCount}
    Nombre de fragments     :: ${data.shard.count}
    Fragment                :: #${data.shard.id}
    Joue de la musique sur  :: ${data.stats.playersCount} serveurs

    Platform                :: ${data.bot.platform}
    OS Uptime               :: ${data.stats.uptimes.os}
    Arch                    :: ${data.bot.arch}
    Memory (RSS)            :: ${data.stats.memory.rss}
    Memory (Heap Total)     :: ${data.stats.memory.heapTotal}
    Memory (Heap Used)      :: ${data.stats.memory.heapUsed}
    Process Uptime          :: ${data.stats.uptimes.process}
    Bot Uptime              :: ${data.stats.uptimes.bot}

    Node.js version         :: ${data.bot.versions.nodejs}
    Discord.js version      :: ${data.bot.versions.discordjs}
    FFmpeg version          :: ${data.bot.versions.ffmpeg}
    yt-dlp version          :: ${data.bot.versions.ytdlp}
    Opus Encoder            :: ${data.bot.opusEncoder}
    Bot Version             :: ${data.bot.versions.bot}

    Source code         :: https://sh.hzmi.xyz/jukebox
    \`\`\`
    `),

    // Eval command
    COMMAND_EVAL_META_DESCRIPTION: () => "Seul le propriétaire de ce bot peut utiliser cette commande",
    COMMAND_EVAL_META_ARGS: (index: number) => ["Un peu de code JS"][index],
    COMMAND_EVAL_NO_PERM: () => "⚠️ Cette commande est réservée au propriétaire",
    COMMAND_EVAL_NO_INPUT: () => "⚠️ Aucun code JS n'a été fourni",
    COMMAND_EVAL_INPUT_FIELD_NAME: () => "Entrée",
    COMMAND_EVAL_OUTPUT_FIELD_NAME: () => "Sortie",
    COMMAND_EVAL_ERROR_FIELD_NAME: () => "Erreur",

    // Help Command
    COMMAND_HELP_META_DESCRIPTION: () => "Afficher le menu d'aide",
    COMMAND_HELP_META_ARGS: (index: number) => ["Nom de la commande"][index],
    COMMAND_HELP_EMBED_TITLE: () => "Menu d'aide",
    COMMAND_HELP_EMBED_FOOTER: (prefix: string) => `Utilise ${prefix}help <commande> pour avoir plus d'infos sur la commande!`,
    COMMAND_HELP_EXTENDED_EMBED_TITLE: (name: string) => `Informations de la commande ${name}`,
    COMMAND_HELP_EXTENDED_EMBED_CMD_NAME: () => "Nom",
    COMMAND_HELP_EXTENDED_EMBED_CMD_DESC: () => "Déscription",
    COMMAND_HELP_EXTENDED_EMBED_CMD_ALIASES: () => "Equivalent",
    COMMAND_HELP_EXTENDED_EMBED_CMD_USAGE: () => "Utilisation",

    // Invite Command
    COMMAND_INVITE_META_DESCRIPTION: () => "Envoi le lien d'invitation du bot",
    COMMAND_INVITE_EMBED_FIELD_NAME: () => "Lien d'invitation du bot",
    COMMAND_INVITE_EMBED_FIELD_VALUE: () => "Clique ici",

    // Now playing command
    COMMAND_NOWPLAYING_META_DESCRIPTION: () => "Envoi les infos du lecteur de musique actuel",
    COMMAND_NOWPLAYING_MESSAGE: () => "▶ En train de jouer:",
    COMMAND_NOWPLAYING_MESSAGE_PAUSED: () => "⏸ En pause:",
    COMMAND_NOWPLAYING_EMBED_FOOTER: (mode: string) => `Mode boucle: ${mode}`,

    // Pause command
    COMMAND_PAUSE_META_DESCRIPTION: () => "Je me met en pause",
    COMMAND_PAUSE_SUCCESS: () => "⏸ Je fais une pause",
    COMMAND_PAUSE_ALREADY_PAUSED: () => "⚠️ Je suis déjà en pause!",

    // Ping command
    COMMAND_PING_META_DESCRIPTION: () => "Affiche mon ping actuel",
    COMMAND_PING_INITIAL_MESSAGE: () => "🏓 PING...",
    COMMAND_PING_RESULT_MESSAGE: () => "🏓 PONG!",
    COMMAND_PING_API_LATENCY: () => "📶 Latence de l'API",
    COMMAND_PING_WS_LATENCY: () => "🌐 Latence des Websowkets",
    COMMAND_PING_EMBED_FOOTER: (userTag: string) => `Demandé par: ${userTag}`,

    // Play command
    COMMAND_PLAY_META_DESCRIPTION: () => "Lance une musique",
    COMMAND_PLAY_META_ARGS: (index: number) => ["Un lien d'une vidéo ou d'une playlist YouTube  / Le nom d'une vidéo Youtube"][index],
    COMMAND_PLAY_ALREADY_PLAYING: (vcName: string) => `⚠️ J'écoute déjà de la musique dans le channel **${vcName}**`,
    COMMAND_PLAY_INVALID_YOUTUBE_URL: () => "⚠️ Lien Youtube invalide",
    COMMAND_PLAY_INVALID_SOURCE: () => "⚠️ Je ne ne fonctionne qu'avec des vidéos youtube",
    COMMAND_PLAY_COULD_NOT_RESOLVE_RESOURCE: () => "⚠️ Impossible de récupérer la source audio",
    COMMAND_PLAY_RESOURCE_PROCESSING_ERR: (message: string) => `Error pendant la récupération de la musique\nCause: \`${message}\``,
    COMMAND_PLAY_RESOURCE_NOT_FOUND: () => "[404] Objet Youtube introuvable.",
    COMMAND_PLAY_TRACK_ADDED: (title: string, url: string) => `✅ **[${title}](${url})** a été ajouté à la file d'attente`,
    COMMAND_PLAY_ALREADY_QUEUED_TITLE: () => "Déja mise en attente / Doublon",
    COMMAND_PLAY_ALREADY_QUEUED_TITLE2: () => "Musique en double",
    COMMAND_PLAY_ALREADY_QUEUED_MSG: (title: string, url: string, prefix: string) => stripIndent(
        `**[${title}](${url})** et déja dans la file d'attente et je suis configuré pour empécher les doublons.
        Utilise \`${prefix}repeat\` dans ce cas`
    ),
    COMMAND_PLAY_ALREADY_QUEUED_MSG2: (count: number, prefix: string) => stripIndent(
        `${count} ${pluralize("Musique", count)} ont été supprimée car elles sont en doubleet je suis configuré pour empécher les doublons.
        Utilise \`${prefix}repeat\` dans ce cas`
    ),
    COMMAND_PLAY_COULD_NOT_JOIN_VC: (message: string) => `Erreur: Impossible de rejoindre le canal vocal!\nCause: \`${message}\``,
    COMMAND_PLAY_YOUTUBE_PLAYLIST_NOT_FOUND: () => "⚠️ Playlist introuvable",
    COMMAND_PLAY_YOUTUBE_PLAYLIST_EMPTY: () => "⚠️ La playlist spécifiée est vide.",
    COMMAND_PLAY_YOUTUBE_RD_PLAYLIST_NOT_SUPPORTED: () => "⚠️ Les playlists RD / YouTube mix ne sont pas encore supportées. Voir [ce problème](https://github.com/Hazmi35/jukebox/issues/594)",
    COMMAND_PLAY_YOUTUBE_PLAYLIST_ADDING_VIDEOS_FROM: (videoTitle: string, playlistTitle: string) => `Ajout de la liste de musique ${videoTitle} dans la playlist: ${playlistTitle}, patience...`,
    COMMAND_PLAY_YOUTUBE_PLAYLIST_ADDING_ALL_VIDEOS: (playlistTitle: string) => `Ajout de toutes les musiques dans : ${playlistTitle}, patience...`,
    COMMAND_PLAY_YOUTUBE_PLAYLIST_ADDING_FIRST_VIDEOS_ERR: (playlistTitle: string) => `⚠️ Impossible d'ajouter la première vidéo de la playlist: ${playlistTitle}`,
    COMMAND_PLAY_YOUTUBE_PLAYLIST_ADDING_REST_VIDEOS_ERR: (playlistTitle: string) => `⚠️ Impossible d'ajouter le reste de la playlist: ${playlistTitle}`,
    COMMAND_PLAY_YOUTUBE_PLAYLIST_SUCCESS: (playlistTitle: string) => `Toutes les musiques de la playlist: ${playlistTitle} ont été ajoutée!`,
    COMMAND_PLAY_YOUTUBE_PLAYLIST_SUCCESS2: (playlistTitle: string, videoTitle: string) => `Toutes les musiques commençant par: ${videoTitle} dans la playlist: ${playlistTitle} ont été ajouté!`,
    COMMAND_PLAY_YOUTUBE_PLAYLIST_SUCCESS_FOOTER: (prefix: string) => `Le mode Shuffle de la playlist est activé. Utilise "${prefix}shuffle disable" pour le désactivé`,
    COMMAND_PLAY_YOUTUBE_PLAYLIST_LOAD_ERR: (message: string) => `Je ne peut pas charger la playlist!\nErreur: \`${message}\``,
    COMMAND_PLAY_YOUTUBE_SEARCH_NO_RESULTS: () => "⚠️ Je ne peut pas obtenir le résultat de la recherche!",
    COMMAND_PLAY_YOUTUBE_SEARCH_RESULTS_EMBED_TITLE: () => "Sélection de la musique",
    COMMAND_PLAY_YOUTUBE_SEARCH_RESULTS_CANCEL_MSG: () => "Tape 'cancel' ou 'c' pour annuler la selection",
    COMMAND_PLAY_YOUTUBE_SEARCH_RESULTS_EMBED_FOOTER: (count: number) => `Choisis un des résultat entre **1 et${count}**`,
    COMMAND_PLAY_YOUTUBE_SEARCH_CANCELED: () => "Sélection de la musique annulée.",
    COMMAND_PLAY_YOUTUBE_SEARCH_INVALID_INPUT: () => "Pas de valeur ou valeur incorrect, séléction de la musique annulée.",

    // Queue command
    COMMAND_QUEUE_META_DESCRIPTION: () => "Affiche la playlist actuelle",
    COMMAND_QUEUE_EMBED_TITLE: () => "Liste des musiques",
    COMMAND_QUEUE_EMBED_FOOTER: (title: string) => `Lecture de: ${title}`,
    COMMAND_QUEUE_EMBED_PAGES_MSG: (current: number, total: number) => `Page ${current} sur ${total}`,

    // Remove command
    COMMAND_REMOVE_META_DESCRIPTION: () => "Retire une musique de la liste",
    COMMAND_REMOVE_META_ARGS: (index: number) => ["Musique n°"][index],
    COMMAND_REMOVE_NOT_FOUND: (number: number) => `⚠️ Musique n° ${number} introuvable.`,
    COMMAND_REMOVE_SUCCESS: (title: string, url: string) => `✅ **[${title}](${url}})** retirée`,

    // Repeat command
    COMMAND_REPEAT_META_DESCRIPTION: () => "Répéte la musique actuelle ou la playlist",
    COMMAND_REPEAT_SUCCESS: (emoji: string, type: string) => `${emoji} Répéte **${type}**`,

    // Resume command
    COMMAND_RESUME_META_DESCRIPTION: () => "Je relance la musique",
    COMMAND_RESUME_FAILED: () => "❗ Je suis pas en pause!",
    COMMAND_RESUME_SUCCESS: () => "▶ Je reprends la musique",

    // Shuffle command
    COMMAND_SHUFFLE_META_DESCRIPTION: () => "Active le mode Shuffle",
    COMMAND_SHUFFLE_SUCCESS: () => "🔀 File d'attente mélangée!",
    COMMAND_SHUFFLE_MODE_SUCCESS: (state: boolean) => `🔀 Mode shuffle: **${state ? "ACTIF" : "INACTIF"}**`,
    COMMAND_SHUFFLE_MODE_SUCCESS_FOOTER: () => "Quand le mode Playlist shuffle est activé, les nouvelles playlists ajoutées seront mélangées.",

    // Skip Command
    COMMAND_SKIP_META_DESCRIPTION: () => "Passe à la musique suivante",
    COMMAND_SKIP_SUCCESS: (title: string, url: string) => `⏭ Hop suivant **[${title}](${url}})**`,

    // Skip To Command
    COMMAND_SKIPTO_META_DESCRIPTION: () => "Passe directement à la musique séléctionnée",
    COMMAND_SKIPTO_META_ARGS: (index: number) => ["Musique n°"][index],
    COMMAND_SKIPTO_NOT_FOUND: (number: number) => `⚠️ Musique n° ${number} introuvable.`,
    COMMAND_SKIPTO_FAIL: () => "⚠️ Impossible de passer à la musique suivante",
    COMMAND_SKIPTO_SUCCESS: (title: string, url: string, count: number) => `⏭ On passe à **[${title}](${url}})**, ${count} ${pluralize("musique", count)} passées`,

    // Stop command
    COMMAND_STOP_META_DESCRIPTION: () => "Arréte la file d'attente",
    COMMAND_STOP_SUCCESS: () => "⏹ File d'attente arrétée.",

    // Volume command
    COMMAND_VOLUME_META_DESCRIPTION: () => "Affiche ou change le volume",
    COMMAND_VOLUME_META_ARGS: (index: number) => ["Volume"][index],
    COMMAND_VOLUME_DISABLED: () => "⚠ La commande de volume est désactivée (qui utilise ça serieux...). Utilise la fonctionalité de Discord.",
    COMMAND_VOLUME_CURRENT: (volume: number) => `📶 Le volume actuel est \`${volume}\``,
    COMMAND_VOLUME_USE_PAUSE_INSTEAD: () => "❗ Met mo en pause au lieu de mettre le volume à `0` trou de balle",
    COMMAND_VOLUME_OVER_LIMIT: (max: number) => `❗ Je ne peut pas changer le volume \`${max}\``,
    COMMAND_VOLUME_SET: (volume: number) => `📶 Volume changé a \`${volume}\``,

    // MessageEvent
    MESSAGE_EVENT_ON_MENTION: (prefix: string) => `Salut, je suis un simple bot musique pour voir mes commandes utilise \`${prefix}help\``,

    // VoiceStateUpdateEvent
    BOT_DISCONNECTED_FROM_VOICE: () => "J'ai été déconnécté du channel donc la playlist a été supprimée et toc!",
    MUSIC_DELETEQUEUETIMEOUT_WAS_DELETED: (duration: string) => `Je suis tout seul depuis **${duration}** , Je me casse.`,
    MUSIC_DELETEQUEUETIMEOUT_EMBED_TITLE: () => "⏹ File d'attente supprimée.",
    MUSIC_DELETEQUEUETIMEOUT_PAUSED: (duration: string) => stripIndent(`
        On me laisse tout seul ? Je suis sympa je met en pause mais je vais pas attendre toute la journée.
        Ca fait long la... si personne reviens dans  **${duration}**, jme tire.
    `),
    MUSIC_DELETEQUEUETIMEOUT_PAUSED_EMBED_TITLE: () => "⏸ File d'attente mise en pause.",
    MUSIC_DELETEQUEUETIMEOUT_RESUMED: (title: string, url: string) => `Let's go viens écouter ça: 🎶\n **[${title}](${url})**`,
    MUSIC_DELETEQUEUETIMEOUT_RESUMED_EMBED_TITLE: () => "▶ Reprise de la file d'attente",

    // Command Handler
    COMMAND_TIMEOUT: (username: string, timeLeft: string) => `**${username}**, Patiente **${timeLeft}** !`,

    // Music Queue System
    MUSIC_QUEUE_START_PLAYING: (title: string, url: string) => `▶ Lance: **[${title}](${url})**`,
    MUSIC_QUEUE_STOP_PLAYING: (title: string, url: string) => `⏹ Stop: **[${title}](${url})**`,
    MUSIC_QUEUE_FINISHED: (prefix: string) => `⏹ La file d'attente est terminé, utilise "${prefix}play" pour remettre de la musique`,
    MUSIC_QUEUE_ERROR_WHILE_PLAYING: (message: string) => `Erreur pendant la lecture\nCause: \`${message}\``,
    MUSIC_VOICE_HANDLER_COULDNT_ESTABLISH: () => "Impossible d'établir une connexion vocale dans les 15 secondes.",

    // Decorators

    // Music helpers
    MUSIC_HELPER_QUEUE_DOES_NOT_EXISTS: () => "On se fait grave chier.",
    MUSIC_HELPER_NEED_TO_BE_ON_THE_SAME_VC: () => "Tu dois être dans le même channel que moi mongol",
    MUSIC_HELPER_USER_NOT_IN_VC: () => "Tu dois être dans un channel vocal pour ça bouffon",
    MUSIC_HELPER_BOT_CANT_CONNECT: () => "Je crois que j'ai pas la permission de venir dans le channel faut demander à papa @Raisery#7677 !",
    MUSIC_HELPER_BOT_CANT_SPEAK: () => "J'ai pas le droit de parler ici faut demander à papa @Raisery#7677 !",

    // Misc
    MUSIC_REPEAT_MODE_TYPES: (index: number) => ["désactivé", "cette musique", "toutes les musique de la file d'attente"][index],
    MUSIC_REPEAT_MODE_EMOJIS: (index: number) => ["▶", "🔂", "🔁"][index],
    COMMAND_INVALID_ARGS: (prefix: string, cmd: string) => `⚠️ argument invalide, tape \`${prefix}help ${cmd}\` si tu sais pas`,
    NOT_AVAILABLE: () => "N/A"
};
