
const userName = sessionStorage.getItem("userName") || "user"
const DIALOGS = [
`Hello, ${userName}!`,
`Are you ready to join me in this exciting journey?`,
`We’ll go on an adventure together in order to learn about mathematical concepts and answer different interactive quizzes.`,
`Let’s move on and start exploring!`
]

const FIRST_SCENE = [
    `Meet Emmanuel — a Treasurer Boy Scout from Cavite Science Integrated School. He is eager to gain a deeper knowledge in the world of Mathematics as he explores different destinations in Maragondon, Cavite.`,
    `Thank you for joining him on this Educational Journey — where you’ll discover math concepts in fun and interactive ways!`
]

const BONIFACIO_DIALOG = [
    `The Bonifacio Trial House located in Maragondon, Cavite is where Andrés Bonifacio was sentenced to death in 1897. He was accused of treason after a conflict with Emilio Aguinaldo.`,
    `Today, it is a museum that replicates what happened during his trial.`,
    `Before entering this place, you should learn how to describe different mathematical systems and complete the activity afterward.`
]

const QUIZ_DIALOG = [
    `Have you gained any knowledge so far? I hope you’re ready, because I am!`,
    `start_quiz`,
    `show_open_bonifaciogate`,
    `show_open_progress`,
    `Let’s head on to our next destination!`
]

const PANTIHAN_DIALOG = [
    `Pantihan Falls, also called Balayungan Falls, is a natural waterfall in Maragondon, Cavite. Its name comes from the Tagalog word “pantí,” meaning bridge, because of the nearby footbridge.`,
    `Surrounded by forest, the falls are part of a quiet river area once used by Filipino revolutionaries during the Spanish era. It’s also near Mount Nagpatong, where hero Andres Bonifacio was executed.`,
    `Today, it’s a peaceful place with both natural beauty and historical importance.`,
    `It’s your time to tackle axiomatic structures of mathematical systems.`
]