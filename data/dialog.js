
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

const MARAG_CHURCH_DIALOG = [
    `Step into history at the breathtaking Maragondon Church! Also known as Our Lady of the Assumption Parish, this stunning Baroque church, built by Jesuits in the 1600s, boasts exquisite wooden interiors.`,
    `Imagine Andres Bonifacio's presence nearby when he was imprisoned here before his execution in 1897.  A National Cultural Treasure, this church is a powerful symbol of faith and resilience.`,
    `Get ready to conquer triangle congruence! This lesson is short and sweet, so let’s get started!`
]

const MARAG_STONE_DIALOG = [
    `Wow, this place is stunning! See the beautiful Maragondon stone carving (“Inukit” or “ukit-ukit”).`,
    `Two brothers who used to make ice sculptures carved these pretty pictures of religious scenes like “last supper” into the rocks by the river.`,
    `It’s very popular place now, and it shows how talented and religious people are in this area.`,
    `Get ready to dive into congruence postulates and learn how to illustrate them.`
]

const HANGING_BRIDGE = [
    `Whoa! That seriously gives me chills! I’m terrified of heights. But the Caingin Hanging Bridge is a wooden footbridge that crosses the Maragondon River.`,
    `It offers a peaceful view of nature and is popular with visitors.`,
    `There’s also a Skywalk Hanging Bridge nearby, which has a glass floor for a more exciting view. Both are nice spots to visit when exploring the area.`,
    `Are you ready to learn a new lesson?`,
    `You will learn how to solve corresponding parts of congruent triangles.`
]

const BONIFACIO_SHRINE_DIALOG = [
    `This place is very historical! Mount Nagpatong is historically significant as the execution site of Filipino hero Andres Bonifacio and his brother Procopio on May 10, 1897.`,
    `A shrine was built in 1995 to honor Bonifacio’s legacy, and the site was turned into an eco-tourism park in 2004.`,
    `Despite facing challenges like poor road access and neglect, the shrine was renovated in 2023.`,
    `Today, it serves as a place for visitors to reflect on Bonifacio’s role in our motherland history.`,
    `What do you think our next lesson is?`,
    `It is proving two triangles are congruent.`
]

const PICO_DIALOG = [
    `Welcome to the highest peak in Cavite!`,
    `I can’t believe that we are here in Mount Pico de Loro, also called Mount Palay-Palay, which is the highest peak in Cavite at 688 meters`,
    `Located on the Cavite-Batangas border, it’s known for its distinct “Parrot’s Beak” monolith. The name “Pico de Loro” comes from its shape, resembling a parrot’s beak.`,
    `It’s a popular hiking destination with moderate trails offering stunning views of the surrounding areas. The mountain is part of the Mounts Palay-Palay–Mataas-na-Gulod Protected Landscape.`,
    `Congratulations! You made it to the top of Cavite’s highest peak. That means you will conquer your last lesson which is constructing angle bisectors. After this you may answer your last and final activity, Good luck!`
]

const FINAL = [
    `Congratulations on finishing the task! Thanks for joining me <b>${userName} </b>`
]